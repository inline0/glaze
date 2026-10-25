import { resolve, join } from "node:path"
import * as Console from "effect/Console"
import * as Effect from "effect/Effect"
import * as FileSystem from "effect/FileSystem"
import { main, script } from "../../../scripts/lib/cli.ts"

const root = resolve(import.meta.dirname, "../../..")
const packageRoot = resolve(import.meta.dirname, "..")
export const command = script("prepare-package", {
  description:
    "Prepare the npm README with absolute links and copy the license",
  flags: {},
  run: ({ dryRun, json }) =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem
      const readme = yield* fs.readFileString(join(root, "README.md"))
      const license = yield* fs.readFileString(join(root, "LICENSE"))
      // npm needs absolute links; the root README remains the editable copy.
      const packaged = readme
        .replaceAll(
          "./.github/",
          "https://raw.githubusercontent.com/inline0/glaze/main/.github/"
        )
        .replaceAll(
          "](packages/",
          "](https://github.com/inline0/glaze/blob/main/packages/"
        )
        .replaceAll(
          "](apps/",
          "](https://github.com/inline0/glaze/blob/main/apps/"
        )
        .replaceAll(
          "](docs/",
          "](https://github.com/inline0/glaze/blob/main/docs/"
        )
        .replaceAll(
          "](CHANGELOG.md)",
          "](https://github.com/inline0/glaze/blob/main/CHANGELOG.md)"
        )
      if (!dryRun) {
        yield* fs.writeFileString(join(packageRoot, "README.md"), packaged)
        yield* fs.writeFileString(join(packageRoot, "LICENSE"), license)
      }
      if (json)
        yield* Console.log(
          JSON.stringify({
            readme: "packages/core/README.md",
            license: "packages/core/LICENSE",
            dryRun,
          })
        )
    }),
})
if (import.meta.main) main(command)
