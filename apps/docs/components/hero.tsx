import { useEffect, useRef } from "react";
import glaze from "glazejs";
import gsap from "gsap";
import { InstallBlock, Button, type HighlightedInstallCommands } from "onedocs";

const LetterSplitter = ({ text }: { text: string }) => {
  return text
    .split(" ")
    .map((word: string, wordIndex: number, arr: string | string[]) => (
      <span
        key={wordIndex}
        className="relative inline-block overflow-hidden pb-1.5"
      >
        <span className="inline-block translate-y-[calc(100%+3px)]">
          {word}
        </span>
        {wordIndex < arr.length - 1 ? <span>&nbsp;</span> : ""}
      </span>
    ));
};

interface HeroProps {
  installCommands?: HighlightedInstallCommands;
}

const Hero = ({ installCommands }: HeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    glaze({
      lib: { gsap: { core: gsap } },
      element: ref.current,
    });
  }, []);

  return (
    <div ref={ref} className="grid gap-4">
      <h1
        data-animate="[&>span>span]:to:y-0|stagger-0.05|ease-power2.inOut"
        className="max-w-xs text-5xl font-medium md:max-w-sm"
      >
        <LetterSplitter text="Utility-based animations for the web." />
      </h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
        {installCommands && (
          <div className="flex-1">
            <InstallBlock commands={installCommands} />
          </div>
        )}
        <Button href="/docs">Go to docs</Button>
      </div>
    </div>
  );
};

export default Hero;
