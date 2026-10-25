import * as Context from "effect/Context"
import * as Data from "effect/Data"
import * as Effect from "effect/Effect"
import * as Layer from "effect/Layer"
import * as ChildProcess from "effect/process/ChildProcess"
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner"
import * as Stream from "effect/Stream"

export interface CommandCall {
  readonly command: string
  readonly args?: ReadonlyArray<string>
  readonly cwd?: string
  readonly env?: Readonly<Record<string, string | undefined>>
  readonly stdin?: string
  readonly inherit?: boolean
  readonly check?: boolean
  readonly mutates?: boolean
}
export interface CommandResult {
  readonly exitCode: number
  readonly stdout: string
  readonly stderr: string
}
export class CommandError extends Data.TaggedError("CommandError")<{
  readonly message: string
  readonly exitCode: number
}> {}
export const DryRun = Context.Reference<boolean>("scripts/DryRun", {
  defaultValue: () => false,
})
export class Command extends Context.Service<
  Command,
  {
    readonly run: (
      call: CommandCall
    ) => Effect.Effect<CommandResult, CommandError>
  }
>()("scripts/Command") {}

export const layer = Layer.effect(
  Command,
  Effect.gen(function* () {
    const spawner = yield* ChildProcessSpawner.ChildProcessSpawner
    const dryRun = yield* DryRun
    return {
      run: (call: CommandCall) => {
        if (dryRun && call.mutates !== false) {
          return Effect.sync(() => {
            process.stderr.write(
              `dry-run: ${JSON.stringify([call.command, ...(call.args ?? [])])}\n`
            )
            return { exitCode: 0, stdout: "", stderr: "" }
          })
        }
        return Effect.scoped(
          Effect.gen(function* () {
            const child = yield* spawner.spawn(
              ChildProcess.make(call.command, [...(call.args ?? [])], {
                ...(call.cwd === undefined ? {} : { cwd: call.cwd }),
                ...(call.env === undefined ? {} : { env: { ...call.env } }),
                extendEnv: true,
                // Own the process group so cleanup also stops descendants.
                detached: true,
                forceKillAfter: "2 seconds",
                stdin: call.inherit
                  ? "inherit"
                  : call.stdin === undefined
                    ? "ignore"
                    : Stream.make(new TextEncoder().encode(call.stdin)),
                ...(call.inherit
                  ? { stdout: "inherit", stderr: "inherit" }
                  : {}),
              })
            )
            const [stdout, stderr, status] = yield* Effect.all(
              [
                call.inherit
                  ? Effect.succeed("")
                  : Stream.mkString(Stream.decodeText(child.stdout)),
                call.inherit
                  ? Effect.succeed("")
                  : Stream.mkString(Stream.decodeText(child.stderr)),
                child.exitCode,
              ],
              { concurrency: "unbounded" }
            )
            return { exitCode: Number(status), stdout, stderr }
          })
        ).pipe(
          Effect.mapError(
            (cause) =>
              new CommandError({
                message: `${call.command}: ${cause.message}`,
                exitCode: 1,
              })
          ),
          Effect.flatMap((result) =>
            result.exitCode === 0 || call.check === false
              ? Effect.succeed(result)
              : Effect.fail(
                  new CommandError({
                    message: `${call.command} exited with ${result.exitCode}${result.stderr ? `: ${result.stderr.trimEnd()}` : ""}`,
                    exitCode: result.exitCode,
                  })
                )
          )
        )
      },
    }
  })
)
export const run = (call: CommandCall) =>
  Command.use((gateway) => gateway.run(call))
