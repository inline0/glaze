import * as NodeServices from "@effect/platform-node/NodeServices"
import * as Layer from "effect/Layer"
import { DryRun, layer as commandLayer } from "./command.ts"

export const runtimeLayer = (dryRun = false) =>
  commandLayer.pipe(
    Layer.provideMerge(NodeServices.layer),
    Layer.provideMerge(Layer.succeed(DryRun, dryRun))
  )
export type RuntimeServices = Layer.Success<ReturnType<typeof runtimeLayer>>
