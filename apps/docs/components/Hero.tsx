import { useEffect, useRef } from "react";
import glaze from "glazejs";
import gsap from "gsap";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import CodeNpm from "./CodeNpm.mdx";
import CodePnpm from "./CodePnpm.mdx";
import CodeYarn from "./CodeYarn.mdx";

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

const Hero = () => {
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
        className="max-w-xs text-5xl font-semibold tracking-tight md:max-w-md md:text-6xl"
      >
        <LetterSplitter text="Utility-based animations for the web." />
      </h1>
      <div className="flex flex-wrap items-end justify-between gap-4 xl:justify-start lg:gap-8">
        <Tabs items={["npm", "yarn", "pnpm"]} defaultValue="npm" className="!w-60 !mb-0">
          <Tab value="npm">
            <CodeBlock>
              <Pre>
                <CodeNpm />
              </Pre>
            </CodeBlock>
          </Tab>
          <Tab value="yarn">
            <CodeBlock>
              <Pre>
                <CodeYarn />
              </Pre>
            </CodeBlock>
          </Tab>
          <Tab value="pnpm">
            <CodeBlock>
              <Pre>
                <CodePnpm />
              </Pre>
            </CodeBlock>
          </Tab>
        </Tabs>
        <a href="/docs" className="h-max rounded-full bg-fd-primary px-4 py-2 text-black">
          Go to docs
        </a>
      </div>
    </div>
  );
};

export default Hero;
