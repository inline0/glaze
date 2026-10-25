import assert from "node:assert/strict"
import { join, resolve } from "node:path"
import * as Console from "effect/Console"
import * as Effect from "effect/Effect"
import * as FileSystem from "effect/FileSystem"
import { parse } from "yaml"
import { main, script } from "./lib/cli.ts"
import * as Command from "./lib/command.ts"
const root = resolve(import.meta.dirname, "..")
export const checkPackage = (dryRun = false, json = false) =>
  Effect.scoped(
    Effect.gen(function* () {
      if (dryRun)
        return yield* Console.log(
          json
            ? JSON.stringify({
                dryRun: true,
                operations: ["pack", "gsap", "motion"],
              })
            : "dry-run: pack glazejs and validate isolated GSAP and Motion consumers"
        )
      const fs = yield* FileSystem.FileSystem
      const scratch = yield* fs.makeTempDirectoryScoped({
        prefix: "glaze-package-",
      })
      const { catalog } = parse(
        yield* fs.readFileString(join(root, "pnpm-workspace.yaml"))
      ) as {
        catalog: Record<string, string>
      }
      const run = (command: string, args: ReadonlyArray<string>, cwd = root) =>
        Command.run({ command, args, cwd }).pipe(
          Effect.timeout("3 minutes"),
          Effect.map((result) => result.stdout)
        )

      yield* run("pnpm", [
        "--filter",
        "glazejs",
        "pack",
        "--pack-destination",
        scratch,
      ])
      const archives = (yield* fs.readDirectory(scratch)).filter((name) =>
        name.endsWith(".tgz")
      )
      assert.equal(archives.length, 1, "Expected one production archive")
      const archive = join(scratch, archives[0] ?? "")
      const files = (yield* run("tar", ["-tzf", archive])).trim().split("\n")
      for (const file of files) {
        assert(
          /^package\/(?:dist\/|package\.json$|README\.md$|LICENSE$)/.test(file),
          `Development path shipped: ${file}`
        )
      }
      const manifest = JSON.parse(
        yield* run("tar", ["-xOf", archive, "package/package.json"])
      ) as {
        name: string
        version: string
        repository: { url: string }
        peerDependencies: Record<string, string>
      }
      assert.equal(manifest.name, "glazejs")
      assert.equal(
        manifest.repository.url,
        "git+https://github.com/inline0/glaze.git"
      )
      assert(manifest.peerDependencies.gsap)
      assert(manifest.peerDependencies.motion)
      assert(!JSON.stringify(manifest).includes("workspace:"))
      assert(!JSON.stringify(manifest).includes("catalog:"))
      for (const engine of ["gsap", "motion"]) {
        const consumer = yield* fs.makeTempDirectoryScoped({
          directory: scratch,
          prefix: `${engine}-`,
        })
        yield* fs.writeFileString(
          join(consumer, "package.json"),
          JSON.stringify({
            name: "glaze-consumer",
            private: true,
            type: "module",
          })
        )
        yield* run(
          "npm",
          [
            "install",
            "--ignore-scripts",
            "--no-audit",
            "--no-fund",
            "--package-lock=false",
            archive,
            `${engine}@${manifest.peerDependencies[engine]}`,
            ...(engine === "motion"
              ? [`@types/react@${catalog["@types/react"]}`]
              : []),
          ],
          consumer
        )
        assert(
          !(yield* fs.exists(
            join(
              consumer,
              "node_modules",
              engine === "gsap" ? "motion" : "gsap"
            )
          ))
        )
        assert(!(yield* fs.exists(join(consumer, "node_modules/react"))))
        const entry =
          engine === "gsap"
            ? 'import { gsap } from "gsap"; import { createGsapAdapter } from "glazejs/gsap"; const adapter = createGsapAdapter(gsap);'
            : 'import { animate, stagger } from "motion"; import { createMotionAdapter } from "glazejs/motion"; const adapter = createMotionAdapter({ animate, stagger });'
        yield* fs.writeFileString(
          join(consumer, "smoke.mjs"),
          `import assert from 'node:assert/strict'; import glaze from 'glazejs'; ${entry} assert.equal(typeof glaze, 'function'); assert.equal(typeof adapter, 'object');`
        )
        yield* run("node", ["smoke.mjs"], consumer)
        const legacyChecks =
          engine === "gsap"
            ? " instance.timelines.forEach(({ timeline }) => timeline.pause().reverse()); const legacy = glaze({ lib: { gsap: { core: gsap } } }); legacy.timelines.forEach(({ timeline }) => timeline.pause().reverse());"
            : ""
        yield* fs.writeFileString(
          join(consumer, "consumer.ts"),
          `import glaze from "glazejs"; ${entry} const instance = glaze({ adapter }); instance.refresh(); instance.destroy();${legacyChecks}`
        )
        yield* fs.writeFileString(
          join(consumer, "tsconfig.json"),
          JSON.stringify({
            compilerOptions: {
              module: "NodeNext",
              moduleResolution: "NodeNext",
              target: "ES2022",
              lib: ["ES2022", "DOM", "DOM.Iterable"],
              types: engine === "motion" ? ["react"] : [],
              strict: true,
              noEmit: true,
            },
            include: ["consumer.ts"],
          })
        )
        yield* run(
          join(root, "node_modules/.bin/tsc-rs"),
          ["--noEmit", "-p", join(consumer, "tsconfig.json")],
          consumer
        )
        const installed = JSON.parse(
          yield* fs.readFileString(
            join(consumer, "node_modules/glazejs/package.json")
          )
        ) as { version: string }
        assert.equal(installed.version, manifest.version)
        if (!json) {
          yield* Console.log(
            `Verified ${engine}-only consumer of glazejs@${manifest.version}.`
          )
        }
      }
      yield* Console.log(
        json
          ? JSON.stringify({
              files: files.length,
              consumers: ["gsap", "motion"],
            })
          : `Verified ${files.length} production files and both public adapter exports.`
      )
    })
  )
export const command = script("check-package", {
  description:
    "Validate production archives and real isolated engine consumers",
  flags: {},
  run: ({ dryRun, json }) => checkPackage(dryRun, json),
})
if (import.meta.main) main(command)
