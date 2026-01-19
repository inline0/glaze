import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { k as InstallBlock, H as Header } from "./install-block-CCtzCOI9.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as createBaseOptions } from "./shared-CjtyTqzh.mjs";
import { c as config, B as Button } from "./router-BqBUMpOA.mjs";
import "../_libs/@radix-ui/react-direction.mjs";
import "../_libs/next-themes.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-D10VxgVc-CZVkar0w.mjs";
import "../_libs/@radix-ui/react-collapsible.mjs";
import "../_libs/@radix-ui/primitive.mjs";
import "../_libs/@radix-ui/react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_libs/@radix-ui/react-compose-refs.mjs";
import "../_libs/@radix-ui/react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/@radix-ui/react-slot.mjs";
import "../_libs/@radix-ui/react-presence.mjs";
import "../_libs/@radix-ui/react-id.mjs";
import "../_libs/scroll-into-view-if-needed.mjs";
import "../_libs/compute-scroll-into-view.mjs";
import "../_libs/@radix-ui/react-scroll-area.mjs";
import "../_libs/@radix-ui/react-use-callback-ref.mjs";
import "../_libs/@radix-ui/number.mjs";
import "../_libs/@radix-ui/react-navigation-menu.mjs";
import "../_libs/@radix-ui/react-collection.mjs";
import "../_libs/@radix-ui/react-dismissable-layer.mjs";
import "../_libs/@radix-ui/react-use-escape-keydown.mjs";
import "../_libs/@radix-ui/react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden.mjs";
import "../_libs/@radix-ui/react-popover.mjs";
import "../_libs/@radix-ui/react-focus-guards.mjs";
import "../_libs/@radix-ui/react-focus-scope.mjs";
import "../_libs/@radix-ui/react-popper.mjs";
import "../_libs/@floating-ui/react-dom.mjs";
import "../_libs/@floating-ui/dom.mjs";
import "../_libs/@floating-ui/core.mjs";
import "../_libs/@floating-ui/utils.mjs";
import "../_libs/@radix-ui/react-arrow.mjs";
import "../_libs/@radix-ui/react-use-size.mjs";
import "../_libs/@radix-ui/react-portal.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/tslib.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/@radix-ui/react-tabs.mjs";
import "../_libs/@radix-ui/react-roving-focus.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/hast-util-to-jsx-runtime.mjs";
import "../_libs/comma-separated-tokens.mjs";
import "../_libs/devlop.mjs";
import "../_libs/property-information.mjs";
import "../_libs/space-separated-tokens.mjs";
import "../_libs/style-to-js.mjs";
import "../_libs/style-to-object.mjs";
import "../_libs/inline-style-parser.mjs";
import "../_libs/hast-util-whitespace.mjs";
import "../_libs/estree-util-is-identifier-name.mjs";
import "../_libs/vfile-message.mjs";
import "../_libs/unist-util-stringify-position.mjs";
import "../_libs/unist-util-position.mjs";
import "../_libs/@tanstack/react-router.mjs";
import "../_libs/tiny-warning.mjs";
import "../_libs/@tanstack/router-core.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/@tanstack/store.mjs";
import "../_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/@tanstack/react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
import "./index.es-BdCD3dIV.mjs";
import "../_libs/gsap.mjs";
import "./source-BRsVN548.mjs";
import "node:path";
import "./index.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:https";
import "node:http2";
import "../_libs/@radix-ui/react-accordion.mjs";
import "./advanced-tbtFDsHU-DwC4Uo2C.mjs";
import "./search-DzqmOjzV-BuydbnAi.mjs";
import "./remove-undefined-Buxsprgu-7355g_Rp.mjs";
import "../_libs/@orama/orama.mjs";
function HomeLayout$1(props) {
  const { nav = {}, links, githubUrl, i18n, themeSwitch = {}, searchToggle, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", {
    id: "nd-home-layout",
    ...rest,
    className: twMerge("flex flex-1 flex-col [--fd-layout-width:1400px]", rest.className),
    children: [nav.enabled !== false && (nav.component ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {
      links,
      nav,
      themeSwitch,
      searchToggle,
      i18n,
      githubUrl
    })), props.children]
  });
}
function HomeLayout({ config: config2, children }) {
  return jsxRuntimeExports.jsx(HomeLayout$1, { ...createBaseOptions(config2), children });
}
function HomePage({ config: config2, packageName, children }) {
  const { homepage } = config2;
  const heroLeft = homepage?.hero?.left;
  const heroRight = homepage?.hero?.right;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return jsxRuntimeExports.jsx(HomeLayout, { config: config2, children: jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col min-h-[calc(100vh-var(--fd-nav-height))]", children: [jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col relative mx-auto w-full max-w-(--fd-layout-width)", children: [jsxRuntimeExports.jsx("div", { className: "absolute inset-0 border-x pointer-events-none" }), jsxRuntimeExports.jsxs("div", { className: "relative", children: [jsxRuntimeExports.jsx("section", { id: "hero", children: jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4", children: [jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 p-6 lg:p-12", children: heroLeft ? heroLeft : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("h1", { className: "text-left text-4xl font-medium leading-tight text-fd-foreground sm:text-5xl", children: homepage?.hero?.title ?? config2.title }), jsxRuntimeExports.jsx("p", { className: "text-left max-w-xl leading-normal text-fd-muted-foreground sm:text-lg sm:leading-normal text-balance mt-4", children: homepage?.hero?.description ?? config2.description }), jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-end gap-4 mt-8 w-full", children: [packageName && jsxRuntimeExports.jsx("div", { className: "flex-1", children: jsxRuntimeExports.jsx(InstallBlock, { packageName }) }), jsxRuntimeExports.jsx(Button, { href: homepage?.hero?.cta?.href ?? "/docs", children: homepage?.hero?.cta?.label ?? "Get Started" })] })] }) }), jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 hidden lg:block", children: heroRight ? jsxRuntimeExports.jsx("div", { className: "flex h-full items-center p-6 lg:p-12", children: heroRight }) : null })] }) }), homepage?.features && homepage.features.length > 0 && jsxRuntimeExports.jsx("section", { id: "features", children: jsxRuntimeExports.jsx("div", { className: "border-y", children: jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>*]:border-b [&>*:nth-last-child(-n+1)]:border-b-0 sm:[&>*:nth-last-child(-n+2)]:border-b-0 lg:[&>*:nth-last-child(-n+4)]:border-b-0", children: homepage.features.map((feature) => jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-2 items-start justify-start py-8 px-6 transition-colors hover:bg-fd-secondary/20 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0", children: [feature.icon && jsxRuntimeExports.jsx("div", { className: "bg-fd-primary/10 p-2 rounded-lg mb-2", children: feature.icon }), jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-fd-card-foreground", children: feature.title }), jsxRuntimeExports.jsx("p", { className: "text-sm text-fd-muted-foreground", children: feature.description })] }, feature.title)) }) }) })] }), children && jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children })] }), jsxRuntimeExports.jsx("footer", { className: "relative mx-auto w-full max-w-(--fd-layout-width)", children: jsxRuntimeExports.jsx("div", { className: "border-x border-t px-6 py-4", children: jsxRuntimeExports.jsxs("p", { className: "text-sm text-fd-muted-foreground", children: ["© ", currentYear, " ", config2.title] }) }) })] }) });
}
function CTASection({ title, description, cta, children }) {
  return jsxRuntimeExports.jsx("section", { children: jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center py-16 px-6", children: [jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-fd-foreground sm:text-3xl", children: title }), description && jsxRuntimeExports.jsx("p", { className: "mt-2 text-fd-muted-foreground max-w-md", children: description }), jsxRuntimeExports.jsx(Button, { href: cta.href, className: "mt-6", children: cta.label }), children] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, { config, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, { title: "Ready to animate?", description: "Jump into the docs and ship your first Glaze sequence.", cta: {
    label: "Go to Docs",
    href: "/docs"
  } }) });
}
export {
  Home as component
};
