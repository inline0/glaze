import { createFileRoute } from "@tanstack/react-router";
import { HomePage, CTASection } from "onedocs";
import config from "../../onedocs.config";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <HomePage config={config}>
      <CTASection
        title="Ready to animate?"
        description="Jump into the docs and ship your first Glaze sequence."
        cta={{ label: "Go to Docs", href: "/docs" }}
      />
    </HomePage>
  );
}
