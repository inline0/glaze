import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { mkdtemp, readFile, rm, stat } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { test } from "node:test"
import * as NodeServices from "@effect/platform-node/NodeServices"
import * as Effect from "effect/Effect"
import { checkPackage } from "../check-package.ts"
import * as Command from "./command.ts"
import { runtimeLayer } from "./runtime.ts"

const root = join(import.meta.dirname, "../..")

test("command gateway captures streams and checks exit status", async () => {
  const result = await Effect.runPromise(
    Command.run({
      command: process.execPath,
      args: [
        "-e",
        'process.stdout.write("out");process.stderr.write("err");process.exit(7)',
      ],
      check: false,
    }).pipe(Effect.provide(runtimeLayer()))
  )
  assert.deepEqual(result, { stdout: "out", stderr: "err", exitCode: 7 })
  await assert.rejects(
    Effect.runPromise(
      Command.run({
        command: process.execPath,
        args: ["-e", "process.exit(7)"],
      }).pipe(Effect.provide(runtimeLayer()))
    ),
    /exited with 7/
  )
})

test("interruption releases the subprocess tree", async () => {
  const directory = await mkdtemp(join(tmpdir(), "glaze-command-"))
  try {
    const pidFile = join(directory, "pids")
    const code =
      'const child=require("node:child_process").spawn(process.execPath,["-e","setInterval(()=>{},1000)"],{stdio:"ignore"});require("node:fs").writeFileSync(process.argv[1],JSON.stringify([process.pid,child.pid]));setInterval(()=>{},1000)'
    await assert.rejects(
      Effect.runPromise(
        Command.run({
          command: process.execPath,
          args: ["-e", code, pidFile],
        }).pipe(Effect.timeout("500 millis"), Effect.provide(runtimeLayer()))
      ),
      /Timeout/
    )
    const pids = JSON.parse(await readFile(pidFile, "utf8")) as number[]
    for (const pid of pids)
      assert.throws(() => process.kill(pid, 0), { code: "ESRCH" })
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
})

test("failed package commands release their scratch directory", async () => {
  let scratch = ""
  const program = checkPackage().pipe(
    Effect.provide(NodeServices.layer),
    Effect.provideService(Command.Command, {
      run: (call) => {
        scratch = call.args?.at(-1) ?? ""
        return Effect.fail(
          new Command.CommandError({ message: "pack failed", exitCode: 1 })
        )
      },
    })
  )
  await assert.rejects(Effect.runPromise(program), /pack failed/)
  assert.ok(scratch.includes("glaze-package-"))
  await assert.rejects(stat(scratch), { code: "ENOENT" })
})

test("CLI exposes help and usage errors and previews package work", () => {
  const run = (script: string, ...args: string[]) =>
    spawnSync(process.execPath, [join(root, script), ...args], {
      encoding: "utf8",
      timeout: 5000,
    })
  assert.equal(run("scripts/check-package.ts", "--help").status, 0)
  assert.equal(run("scripts/check-workspace.ts", "--unknown").status, 2)
  const preview = run(
    "scripts/check-package.ts",
    "--dry-run",
    "--log-level",
    "error"
  )
  assert.equal(preview.status, 0, preview.stderr)
  assert.match(preview.stdout, /dry-run: pack glazejs/)
  const jsonPreview = run("scripts/check-package.ts", "--dry-run", "--json")
  assert.equal(jsonPreview.status, 0, jsonPreview.stderr)
  assert.equal(JSON.parse(jsonPreview.stdout).dryRun, true)
  const report = run("scripts/check-workspace.ts", "--json")
  assert.equal(report.status, 0, report.stderr)
  assert.equal(JSON.parse(report.stdout).packages, 5)
})
