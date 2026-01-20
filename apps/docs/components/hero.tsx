"use client";

import { useEffect, useRef } from "react";
import glaze from "glazejs";
import gsap from "gsap";
import { Button } from "onedocs";
import type { ReactNode } from "react";

const LetterSplitter = ({ text }: { text: string }) => {
  return text
    .split(" ")
    .map((word: string, wordIndex: number, arr: string | string[]) => (
      <span
        key={wordIndex}
        className="relative inline-block overflow-hidden pb-1.5"
      >
        <span className="inline-block translate-y-full">
          {word}
        </span>
        {wordIndex < arr.length - 1 ? <span>&nbsp;</span> : ""}
      </span>
    ));
};

interface HeroProps {
  children?: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  const ref = useRef(null);

  useEffect(() => {
    glaze({
      lib: { gsap: { core: gsap } },
      element: ref.current,
    });
  }, []);

  return (
    <div ref={ref} className="grid gap-4">
      <h1
        data-animate="[&>span>span]:to:y-0|stagger-0.05|ease-power2.inOut|delay-0.25"
        className="max-w-xs text-5xl font-medium md:max-w-sm"
      >
        <LetterSplitter text="Utility-based animations for the web" />
      </h1>
      <div className="flex flex-wrap items-start sm:items-end gap-x-8 gap-y-4">
        {children}
        <Button href="/docs">Go to docs</Button>
      </div>
    </div>
  );
};

export default Hero;
