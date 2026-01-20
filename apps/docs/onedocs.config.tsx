import { defineConfig } from "onedocs/config";
import {
  Sparkles,
  Code,
  Monitor,
  Timer,
  CircleDot,
  Puzzle,
  Feather,
  Layers,
} from "lucide-react";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { InstallBlock } from "onedocs";
import Hero from "./components/hero";
import HeroCode from "./components/hero-code.mdx";

const iconClass = "h-5 w-5 text-fd-primary";

export default defineConfig({
  title: "Glaze",
  description: "The utility-based animation framework for the web.",
  logo: {
    light: "/logo-light.svg",
    dark: "/logo-dark.svg",
  },
  icon: "/icon.png",
  nav: {
    github: "inline0/glaze",
  },
  homepage: {
    hero: {
      left: () => (
        <Hero>
          <div className="flex-1">
            <InstallBlock packageName="glazejs" />
          </div>
        </Hero>
      ),
      right: (
        <CodeBlock className="!shadow-sm !overflow-hidden m-auto">
          <Pre className="!bg-fd-card lg:!p-4">
            <HeroCode />
          </Pre>
        </CodeBlock>
      ),
    },
    features: [
      {
        title: "GSAP Powered",
        description:
          "Built on top of GSAP for production-grade animation control.",
        icon: <Sparkles className={iconClass} />,
      },
      {
        title: "Utility Syntax",
        description:
          "Author animations in HTML with concise, composable tokens.",
        icon: <Code className={iconClass} />,
      },
      {
        title: "Responsive by Default",
        description:
          "Define responsive animation variants with breakpoint modifiers.",
        icon: <Monitor className={iconClass} />,
      },
      {
        title: "Timeline Ready",
        description:
          "Sequence or parallelize motion with timeline utilities.",
        icon: <Timer className={iconClass} />,
      },
      {
        title: "Dot Notation",
        description:
          "Target nested GSAP properties with a readable dot syntax.",
        icon: <CircleDot className={iconClass} />,
      },
      {
        title: "Composable",
        description:
          "Layer presets and overrides without fighting configs. Mix and match animation tokens to build complex sequences.",
        icon: <Layers className={iconClass} />,
      },
      {
        title: "Lightweight",
        description:
          "Tiny runtime footprint with minimal overhead. No bloat, just the animation logic you need.",
        icon: <Feather className={iconClass} />,
      },
      {
        title: "Extensible",
        description:
          "Designed to support additional animation backends over time.",
        icon: <Puzzle className={iconClass} />,
      },
    ],
  },
});
