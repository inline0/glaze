import { HomePage, CTASection } from "onedocs";
import config from "../../onedocs.config";

export default function Home() {
  return (
    <HomePage config={config}>
      <CTASection
        title="Ready to get started?"
        description="Check out the documentation to learn more."
        cta={{ label: "Go to docs", href: "/docs" }}
      />
    </HomePage>
  );
}
