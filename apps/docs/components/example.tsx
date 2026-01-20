"use client";

import { useEffect, useRef } from "react";

export const Example = ({ children }: { children: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const refInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refInnerRef.current) return;
    refInnerRef.current.innerHTML = children;

    let cancelled = false;

    async function run() {
      const [{ default: glaze }, gsapModule, scrollTriggerModule] =
        await Promise.all([
          import("glazejs"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      if (cancelled) return;

      const gsap = gsapModule.default ?? gsapModule;
      const ScrollTrigger =
        scrollTriggerModule.default ?? scrollTriggerModule.ScrollTrigger;

      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      glaze({
        lib: { gsap: { core: gsap } },
        element: ref.current,
        breakpoints: {
          sm: "(min-width: 640px)",
          lg: "(min-width: 1024px)",
        },
        presets: {
          helicopter: "from:rotate-2160|duration-5",
        },
      });
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [children]);

  return (
    <div ref={ref} suppressHydrationWarning>
      <div
        suppressHydrationWarning
        ref={refInnerRef}
        className="flex h-max w-full items-center justify-center overflow-hidden bg-fd-card p-12 md:rounded-xl"
      />
    </div>
  );
};
