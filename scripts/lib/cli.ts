import * as NodeRuntime from "@effect/platform-node/NodeRuntime"
import * as NodeServices from "@effect/platform-node/NodeServices"
import * as Cause from "effect/Cause"
import * as CliError from "effect/cli/CliError"
import * as Cli from "effect/cli/Command"
import * as Flag from "effect/cli/Flag"
import * as Data from "effect/Data"
import * as Effect from "effect/Effect"
import * as Option from "effect/Option"
import * as Runtime from "effect/Runtime"
import { type RuntimeServices, runtimeLayer } from "./runtime.ts"

export class ScriptExit extends Data.TaggedError("ScriptExit")<{
  readonly code: number
  readonly message?: string
}> {
  override get [Runtime.errorExitCode]() {
    return this.code
  }
}
export const fail = (message: string, code = 1) =>
  Effect.fail(new ScriptExit({ code, message }))
export interface ScriptInput {
  readonly json: boolean
  readonly dryRun: boolean
}
export const script = <
  const Name extends string,
  const Config extends Cli.Command.Config,
  E,
>(
  name: Name,
  options: {
    readonly description: string
    readonly flags: Config
    readonly run: (
      input: Cli.Command.Config.Infer<Config> & ScriptInput
    ) => Effect.Effect<void, E, RuntimeServices>
  }
) =>
  Cli.make(
    name,
    {
      ...options.flags,
      json: Flag.Boolean("json").pipe(Flag.withDefault(false)),
      dryRun: Flag.Boolean("dry-run").pipe(Flag.withDefault(false)),
    },
    (input) => {
      const parsed = input as Cli.Command.Config.Infer<Config> & ScriptInput
      return options
        .run(parsed)
        .pipe(Effect.provide(runtimeLayer(parsed.dryRun)))
    }
  ).pipe(Cli.withDescription(options.description))

export const runArguments = <Name extends string, Input, Context, E, R>(
  command: Cli.Command<Name, Input, Context, E, R>,
  argv: ReadonlyArray<string>
) =>
  Cli.runWith(command, { version: "1" })(argv).pipe(
    Effect.as(0 as number),
    Effect.catchCause((cause) =>
      Effect.sync(() => {
        if (Cause.hasInterruptsOnly(cause)) return 130
        const failure = Option.getOrUndefined(Cause.findErrorOption(cause))
        if (CliError.isCliError(failure)) return 2
        if (failure instanceof ScriptExit) {
          if (failure.message) process.stderr.write(`${failure.message}\n`)
          return failure.code
        }
        process.stderr.write(
          `error: ${failure instanceof Error ? failure.message : Cause.pretty(cause)}\n`
        )
        return 1
      })
    ),
    Effect.provide(NodeServices.layer)
  ) as Effect.Effect<number>
export const main = <Name extends string, Input, Context, E, R>(
  command: Cli.Command<Name, Input, Context, E, R>
) =>
  NodeRuntime.runMain(
    runArguments(command, process.argv.slice(2)).pipe(
      Effect.flatMap((code) =>
        code === 0 ? Effect.void : Effect.fail(new ScriptExit({ code }))
      )
    ),
    { disableErrorReporting: true }
  )
