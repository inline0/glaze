import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const Example = ({ children }) => {
  const ref = reactExports.useRef(null);
  const refInnerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!refInnerRef.current) return;
    refInnerRef.current.innerHTML = children;
    let cancelled = false;
    async function run() {
      const [{ default: glaze }, gsapModule, scrollTriggerModule] = await Promise.all([
        import("./index.es-BdCD3dIV.mjs"),
        import("../_libs/gsap.mjs").then(function(n) {
          return n.i;
        }),
        import("../_libs/gsap.mjs").then(function(n) {
          return n.S;
        })
      ]);
      if (cancelled) return;
      const gsap = gsapModule.default ?? gsapModule;
      const ScrollTrigger = scrollTriggerModule.default ?? scrollTriggerModule.ScrollTrigger;
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }
      glaze({
        lib: { gsap: { core: gsap } },
        element: ref.current,
        breakpoints: {
          sm: "(min-width: 640px)",
          lg: "(min-width: 1024px)"
        },
        presets: {
          helicopter: "from:rotate-2160|duration-5"
        }
      });
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [children]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, suppressHydrationWarning: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      suppressHydrationWarning: true,
      ref: refInnerRef,
      className: "flex h-max w-full items-center justify-center overflow-hidden bg-fd-card p-12 md:rounded-xl"
    }
  ) });
};
export {
  Example as E
};
