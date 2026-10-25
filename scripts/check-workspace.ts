import assert from "node:assert/strict"
import { resolve, join } from "node:path"
import * as Console from "effect/Console"
import * as Effect from "effect/Effect"
import * as FileSystem from "effect/FileSystem"
import { parse } from "yaml"
import { main, script } from "./lib/cli.ts"
import { checkManifests } from "./workspace-policy.ts"
import type { Manifest } from "./workspace-policy.ts"

const root = resolve(import.meta.dirname, "..")
export const checkWorkspace = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem
  const readManifest = (path: string) =>
    fs
      .readFileString(join(root, path))
      .pipe(Effect.map((source) => JSON.parse(source) as Manifest))
  const packages: Array<{ path: string; manifest: Manifest }> = []
  for (const group of ["packages", "apps"]) {
    for (const folder of yield* fs.readDirectory(join(root, group))) {
      const path = `${group}/${folder}`
      if ((yield* fs.stat(join(root, path))).type !== "Directory") continue
      packages.push({
        path,
        manifest: yield* readManifest(`${path}/package.json`),
      })
    }
  }
  const workspace = parse(
    yield* fs.readFileString(join(root, "pnpm-workspace.yaml"))
  ) as { catalog: Record<string, string> }
  const manifest = yield* readManifest("package.json")
  yield* Effect.try(() =>
    checkManifests(
      manifest,
      packages.map((item) => item.manifest),
      workspace.catalog
    )
  )
  const readme = (yield* fs.readFileString(join(root, "README.md")))
    .split("\n")
    .map((line) =>
      line
        .split("|")
        .map((cell) => cell.trim())
        .join("|")
    )
  yield* Effect.forEach(
    packages,
    ({ path, manifest }) =>
      Effect.gen(function* () {
        yield* Effect.try(() => {
          assert(manifest.description, `${manifest.name} needs a description`)
          const row = `|[${manifest.name}](${path}/README.md)|${manifest.description}|`
          assert.equal(
            readme.filter((line) => line === row).length,
            1,
            `${manifest.name} must appear exactly once in the README package table`
          )
        })
        yield* fs.readFileString(join(root, path, "README.md"))
      }),
    { discard: true }
  )
  return { packages: packages.length }
})
export const command = script("check-workspace", {
  description:
    "Validate workspace manifests, catalog, dependency graph and README package table",
  flags: {},
  run: ({ json }) =>
    checkWorkspace.pipe(
      Effect.flatMap((report) =>
        Console.log(
          json
            ? JSON.stringify(report)
            : `Validated ${report.packages} workspace packages, catalog and dependency graph.`
        )
      )
    ),
})
if (import.meta.main) main(command)
