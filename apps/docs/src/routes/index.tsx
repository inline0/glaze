import { createFileRoute } from "@tanstack/react-router";
import { HomePage, CTASection, highlightInstallCommands } from "onedocs";
import config from "../../onedocs.config";

export const Route = createFileRoute("/")({
  loader: async () => {
    const installCommands = await highlightInstallCommands("glazejs");
    return { installCommands };
  },
  component: Home,
});

function Home() {
  const { installCommands } = Route.useLoaderData();
  return (
    <HomePage config={config} installCommands={installCommands}>
      <CTASection
        title="Ready to animate?"
        description="Jump into the docs and ship your first Glaze sequence."
        cta={{ label: "Go to Docs", href: "/docs" }}
      />
    </HomePage>
  );
}
