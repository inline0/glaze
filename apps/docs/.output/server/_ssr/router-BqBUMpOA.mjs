import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, O as Outlet, H as HeadContent, S as Scripts, u as useParams, d as useRouter, e as useRouterState, L as Link$2 } from "../_libs/@tanstack/react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Tabs, a as Tab, L as Link, C as CodeBlockTabsTrigger, b as CodeBlockTabsList, c as CodeBlockTabs, d as CodeBlockTab, e as LayoutContext$1, _ as __exportAll, f as Collapsible, g as CollapsibleTrigger, h as CollapsibleContent, m as mergeRefs$1, i as CodeBlock, P as Pre, I as Image, u as useCopyButton, j as buttonVariants, F as FrameworkProvider, k as InstallBlock, R as RootProvider$1, l as PageLastUpdate$1, n as PageBreadcrumb$1, o as PageTOCPopover$1, p as PageTOCPopoverTrigger$1, q as PageTOCPopoverContent$1, t as toc_exports, r as clerk_exports, s as default_exports, v as PageFooter$1, w as i18n_exports, x as PageLastUpdate, y as PageBreadcrumb, z as PageTOCPopover, A as PageTOCPopoverTrigger, B as PageTOCPopoverContent, D as PageFooter } from "./install-block-CCtzCOI9.mjs";
import rt from "./index.es-BdCD3dIV.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { s as source, b as basename, e as extname } from "./source-BRsVN548.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./index.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/@radix-ui/react-accordion.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { f as findPath } from "./utils-D10VxgVc-CZVkar0w.mjs";
import { s as searchAdvanced } from "./advanced-tbtFDsHU-DwC4Uo2C.mjs";
import { F as FolderOpen, a as Folder$1, b as File$1, L as Lightbulb, C as CircleCheck, c as CircleX, T as TriangleAlert, I as Info, d as ChevronRight, e as Check, f as Link$1, S as Sparkles, g as Code, M as Monitor, h as Timer, i as CircleDot, j as Layers, k as Feather, P as Puzzle, l as TextAlignStart, m as SquarePen } from "../_libs/lucide-react.mjs";
import { s as save, c as create$1, i as insertMultiple } from "../_libs/@orama/orama.mjs";
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
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/@tanstack/react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/@radix-ui/react-direction.mjs";
import "../_libs/next-themes.mjs";
import "../_libs/@radix-ui/react-collapsible.mjs";
import "../_libs/@radix-ui/primitive.mjs";
import "../_libs/@radix-ui/react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_libs/@radix-ui/react-compose-refs.mjs";
import "../_libs/@radix-ui/react-primitive.mjs";
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
import "node:path";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:https";
import "node:http2";
import "../_libs/clsx.mjs";
import "./search-DzqmOjzV-BuydbnAi.mjs";
import "./remove-undefined-Buxsprgu-7355g_Rp.mjs";
const framework = {
  Link({ href, prefetch = true, ...props }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link$2, {
      to: href,
      preload: prefetch ? "intent" : false,
      ...props,
      children: props.children
    });
  },
  usePathname() {
    const { isLoading, pathname } = useRouterState({ select: (state) => ({
      isLoading: state.isLoading,
      pathname: state.location.pathname
    }) });
    const activePathname = reactExports.useRef(pathname);
    return reactExports.useMemo(() => {
      if (isLoading) return activePathname.current;
      activePathname.current = pathname;
      return pathname;
    }, [isLoading, pathname]);
  },
  useRouter() {
    const router2 = useRouter();
    return reactExports.useMemo(() => ({
      push(url) {
        router2.navigate({ href: url });
      },
      refresh() {
        router2.invalidate();
      }
    }), [router2]);
  },
  useParams() {
    return useParams({ strict: false });
  }
};
function TanstackProvider({ children, Link: CustomLink, Image: CustomImage }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FrameworkProvider, {
    ...framework,
    Link: CustomLink ?? framework.Link,
    Image: CustomImage ?? framework.Image,
    children
  });
}
function RootProvider({ components, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TanstackProvider, {
    Link: components?.Link,
    Image: components?.Image,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootProvider$1, {
      ...props,
      children: props.children
    })
  });
}
function RootLayout({ children }) {
  return jsxRuntimeExports.jsx(FrameworkProvider, { Link: FrameworkLink, usePathname, useRouter: useFrameworkRouter, useParams: useFrameworkParams, children: jsxRuntimeExports.jsx(RootProvider, { children }) });
}
function FrameworkLink({ href, prefetch = true, ...props }) {
  return jsxRuntimeExports.jsx(Link$2, { to: href ?? "#", preload: prefetch ? "intent" : false, ...props, children: props.children });
}
function usePathname() {
  const { isLoading, pathname } = useRouterState({
    select: (state) => ({
      isLoading: state.isLoading,
      pathname: state.location.pathname
    })
  });
  const activePathname = reactExports.useRef(pathname);
  return reactExports.useMemo(() => {
    if (isLoading)
      return activePathname.current;
    activePathname.current = pathname;
    return pathname;
  }, [isLoading, pathname]);
}
function useFrameworkRouter() {
  const router2 = useRouter();
  return reactExports.useMemo(() => ({
    push(url) {
      router2.navigate({ href: url });
    },
    refresh() {
      router2.invalidate();
    }
  }), [router2]);
}
function useFrameworkParams() {
  return useParams({ strict: false });
}
var page_exports$1 = /* @__PURE__ */ __exportAll({
  DocsBody: () => DocsBody$1,
  DocsDescription: () => DocsDescription$1,
  DocsPage: () => DocsPage$2,
  DocsTitle: () => DocsTitle$1,
  EditOnGitHub: () => EditOnGitHub$1,
  PageBreadcrumb: () => PageBreadcrumb$1,
  PageLastUpdate: () => PageLastUpdate$1
});
function DocsPage$2({ breadcrumb: { enabled: breadcrumbEnabled = true, component: breadcrumb, ...breadcrumbProps } = {}, footer: { enabled: footerEnabled, component: footerReplace, ...footerProps } = {}, full = false, tableOfContentPopover: { enabled: tocPopoverEnabled, component: tocPopover, ...tocPopoverOptions } = {}, tableOfContent: { enabled: tocEnabled, component: tocReplace, ...tocOptions } = {}, toc = [], children, className }) {
  tocEnabled ??= !full && (toc.length > 0 || tocOptions.footer !== void 0 || tocOptions.header !== void 0);
  tocPopoverEnabled ??= toc.length > 0 || tocPopoverOptions.header !== void 0 || tocPopoverOptions.footer !== void 0;
  let wrapper = (children$1) => children$1;
  if (tocEnabled || tocPopoverEnabled) wrapper = (children$1) => /* @__PURE__ */ jsxRuntimeExports.jsx(toc_exports.TOCProvider, {
    single: tocOptions.single,
    toc,
    children: children$1
  });
  return wrapper(/* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    tocPopoverEnabled && (tocPopover ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTOCPopover$1, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PageTOCPopoverTrigger$1, {}), /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTOCPopoverContent$1, { children: [
      tocPopoverOptions.header,
      /* @__PURE__ */ jsxRuntimeExports.jsx(toc_exports.TOCScrollArea, { children: tocPopoverOptions.style === "clerk" ? /* @__PURE__ */ jsxRuntimeExports.jsx(clerk_exports.TOCItems, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_exports.TOCItems, {}) }),
      tocPopoverOptions.footer
    ] })] })),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", {
      id: "nd-page",
      "data-full": full,
      className: twMerge("flex flex-col w-full max-w-[900px] mx-auto [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14", full ? "max-w-[1200px]" : "xl:layout:[--fd-toc-width:268px]", className),
      children: [
        breadcrumbEnabled && (breadcrumb ?? /* @__PURE__ */ jsxRuntimeExports.jsx(PageBreadcrumb$1, { ...breadcrumbProps })),
        children,
        footerEnabled !== false && (footerReplace ?? /* @__PURE__ */ jsxRuntimeExports.jsx(PageFooter$1, { ...footerProps }))
      ]
    }),
    tocEnabled && (tocReplace ?? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      id: "nd-toc",
      className: "sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 max-xl:hidden",
      children: [
        tocOptions.header,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
          id: "toc-title",
          className: "inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TextAlignStart, { className: "size-4" }), /* @__PURE__ */ jsxRuntimeExports.jsx(i18n_exports.I18nLabel, { label: "toc" })]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(toc_exports.TOCScrollArea, { children: tocOptions.style === "clerk" ? /* @__PURE__ */ jsxRuntimeExports.jsx(clerk_exports.TOCItems, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_exports.TOCItems, {}) }),
        tocOptions.footer
      ]
    }))
  ] }));
}
function EditOnGitHub$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    ...props,
    className: twMerge(buttonVariants({
      color: "secondary",
      size: "sm",
      className: "gap-1.5 not-prose"
    }), props.className),
    children: props.children ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-3.5" }), /* @__PURE__ */ jsxRuntimeExports.jsx(i18n_exports.I18nLabel, { label: "editOnGithub" })] })
  });
}
function DocsBody$1({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("prose flex-1", className),
    children
  });
}
function DocsDescription$1({ children, className, ...props }) {
  if (children === void 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    ...props,
    className: twMerge("mb-8 text-lg text-fd-muted-foreground", className),
    children
  });
}
function DocsTitle$1({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
    ...props,
    className: twMerge("text-[1.75em] font-semibold", className),
    children
  });
}
var page_exports = /* @__PURE__ */ __exportAll({
  DocsBody: () => DocsBody,
  DocsDescription: () => DocsDescription,
  DocsPage: () => DocsPage$1,
  DocsTitle: () => DocsTitle,
  EditOnGitHub: () => EditOnGitHub,
  PageBreadcrumb: () => PageBreadcrumb,
  PageLastUpdate: () => PageLastUpdate
});
function DocsPage$1({ breadcrumb: { enabled: breadcrumbEnabled = true, component: breadcrumb, ...breadcrumbProps } = {}, footer: { enabled: footerEnabled, component: footerReplace, ...footerProps } = {}, full = false, tableOfContentPopover: { enabled: tocPopoverEnabled, component: tocPopover, ...tocPopoverOptions } = {}, tableOfContent: { enabled: tocEnabled, component: tocReplace, ...tocOptions } = {}, toc = [], children, className }) {
  tocEnabled ??= !full && (toc.length > 0 || tocOptions.footer !== void 0 || tocOptions.header !== void 0);
  tocPopoverEnabled ??= toc.length > 0 || tocPopoverOptions.header !== void 0 || tocPopoverOptions.footer !== void 0;
  let wrapper = (children$1) => children$1;
  if (tocEnabled || tocPopoverEnabled) wrapper = (children$1) => /* @__PURE__ */ jsxRuntimeExports.jsx(toc_exports.TOCProvider, {
    single: tocOptions.single,
    toc,
    children: children$1
  });
  return wrapper(/* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    tocPopoverEnabled && (tocPopover ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTOCPopover, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PageTOCPopoverTrigger, {}), /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTOCPopoverContent, { children: [
      tocPopoverOptions.header,
      /* @__PURE__ */ jsxRuntimeExports.jsx(toc_exports.TOCScrollArea, { children: tocPopoverOptions.style === "clerk" ? /* @__PURE__ */ jsxRuntimeExports.jsx(clerk_exports.TOCItems, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_exports.TOCItems, {}) }),
      tocPopoverOptions.footer
    ] })] })),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", {
      id: "nd-page",
      "data-full": full,
      className: twMerge("flex flex-col [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14 *:max-w-[900px]", full && "*:max-w-[1285px]", className),
      children: [
        breadcrumbEnabled && (breadcrumb ?? /* @__PURE__ */ jsxRuntimeExports.jsx(PageBreadcrumb, { ...breadcrumbProps })),
        children,
        footerEnabled !== false && (footerReplace ?? /* @__PURE__ */ jsxRuntimeExports.jsx(PageFooter, { ...footerProps }))
      ]
    }),
    tocEnabled && (tocReplace ?? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      id: "nd-toc",
      className: "sticky top-(--fd-docs-row-3) [grid-area:toc] h-[calc(var(--fd-docs-height)-var(--fd-docs-row-3))] flex flex-col w-(--fd-toc-width) pt-12 pe-4 pb-2 xl:layout:[--fd-toc-width:268px] max-xl:hidden",
      children: [
        tocOptions.header,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
          id: "toc-title",
          className: "inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TextAlignStart, { className: "size-4" }), /* @__PURE__ */ jsxRuntimeExports.jsx(i18n_exports.I18nLabel, { label: "toc" })]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(toc_exports.TOCScrollArea, { children: tocOptions.style === "clerk" ? /* @__PURE__ */ jsxRuntimeExports.jsx(clerk_exports.TOCItems, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_exports.TOCItems, {}) }),
        tocOptions.footer
      ]
    }))
  ] }));
}
function EditOnGitHub(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    target: "_blank",
    rel: "noreferrer noopener",
    ...props,
    className: twMerge(buttonVariants({
      color: "secondary",
      size: "sm",
      className: "gap-1.5 not-prose"
    }), props.className),
    children: props.children ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-3.5" }), /* @__PURE__ */ jsxRuntimeExports.jsx(i18n_exports.I18nLabel, { label: "editOnGithub" })] })
  });
}
function DocsBody({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("prose flex-1", className),
    children
  });
}
function DocsDescription({ children, className, ...props }) {
  if (children === void 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    ...props,
    className: twMerge("mb-8 text-lg text-fd-muted-foreground", className),
    children
  });
}
function DocsTitle({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
    ...props,
    className: twMerge("text-[1.75em] font-semibold", className),
    children
  });
}
function DocsPage({ lastUpdate, editOnGithub, children, ...props }) {
  const { DocsPage: DocsPage$12, EditOnGitHub: EditOnGitHub$12, PageLastUpdate: PageLastUpdate$12 } = reactExports.use(LayoutContext$1) ? page_exports$1 : page_exports;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsPage$12, {
    ...props,
    children: [children, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex flex-row flex-wrap items-center justify-between gap-4 empty:hidden",
      children: [editOnGithub && /* @__PURE__ */ jsxRuntimeExports.jsx(EditOnGitHub$12, { href: `https://github.com/${editOnGithub.owner}/${editOnGithub.repo}/blob/${editOnGithub.sha}/${editOnGithub.path.startsWith("/") ? editOnGithub.path.slice(1) : editOnGithub.path}` }), lastUpdate && /* @__PURE__ */ jsxRuntimeExports.jsx(PageLastUpdate$12, { date: new Date(lastUpdate) })]
    })]
  });
}
function Button({ href, children, className = "" }) {
  return jsxRuntimeExports.jsx("a", { href, className: `inline-flex items-center justify-center rounded-full bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90 whitespace-nowrap ${className}`, children });
}
function defineConfig(config2) {
  return {
    docs: { dir: "content/docs" },
    theme: { darkMode: true },
    ...config2
  };
}
const LetterSplitter = ({ text }) => {
  return text.split(" ").map((word, wordIndex, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "relative inline-block overflow-hidden pb-1.5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block translate-y-[calc(100%+3px)]", children: word }),
        wordIndex < arr.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " " }) : ""
      ]
    },
    wordIndex
  ));
};
const Hero = () => {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    rt({
      lib: { gsap: { core: gsapWithCSS } },
      element: ref.current
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "grid gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h1",
      {
        "data-animate": "[&>span>span]:to:y-0|stagger-0.05|ease-power2.inOut",
        className: "max-w-xs text-5xl font-medium md:max-w-md",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LetterSplitter, { text: "Utility-based animations for the web." })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-end gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallBlock, { packageName: "glazejs" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { href: "/docs", children: "Go to docs" })
    ] })
  ] });
};
function _createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" /></svg>',
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " data-animate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"@lg:[&>span>span]:to:y-0|stagger-0.025"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  {"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"Utility-based animations for the web."'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "split"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '" "'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "map"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(("
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "w"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "i"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#E36209",
                "--shiki-dark": "#FFAB70"
              },
              children: "arr"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=>"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    <"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "span"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " className"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"relative inline-block overflow-hidden"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      <"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "span"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " className"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"inline-block translate-y-full"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">{w}</"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "span"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      {w "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " arr."
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "length"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " -"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " ?"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " <"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "span"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "&nbsp;"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "</"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "span"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "> "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' ""'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    </"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "span"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ))}"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "</"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "h1"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    })
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const iconClass$1 = "h-5 w-5 text-fd-primary";
const config = defineConfig({
  title: "Glaze",
  description: "The utility-based animation framework for the web.",
  logo: {
    light: "/logo-light.svg",
    dark: "/logo-dark.svg"
  },
  icon: "/icon.png",
  nav: {
    github: "inline0/glaze"
  },
  homepage: {
    hero: {
      left: /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      right: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { className: "!my-0 !shadow-sm !overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pre, { className: "!bg-fd-card lg:!p-4 lg:[&_*]:!text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MDXContent, {}) }) })
    },
    features: [
      {
        title: "GSAP Powered",
        description: "Built on top of GSAP for production-grade animation control.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: iconClass$1 })
      },
      {
        title: "Utility Syntax",
        description: "Author animations in HTML with concise, composable tokens.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: iconClass$1 })
      },
      {
        title: "Responsive by Default",
        description: "Define responsive animation variants with breakpoint modifiers.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: iconClass$1 })
      },
      {
        title: "Timeline Ready",
        description: "Sequence or parallelize motion with timeline utilities. Chain animations with precise control over timing and order.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: iconClass$1 })
      },
      {
        title: "Dot Notation",
        description: "Target nested GSAP properties with a readable dot syntax.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: iconClass$1 })
      },
      {
        title: "Composable",
        description: "Layer presets and overrides without fighting configs. Build complex animations from simple, reusable pieces.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: iconClass$1 })
      },
      {
        title: "Lightweight",
        description: "Tiny runtime footprint with minimal overhead. Ships only what you need for smooth, performant animations.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Feather, { className: iconClass$1 })
      },
      {
        title: "Extensible",
        description: "Designed to support additional animation backends over time.",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Puzzle, { className: iconClass$1 })
      }
    ]
  }
});
const socialCard = "https://glaze.dev/og.jpg";
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: config.title },
      {
        name: "description",
        content: "The utility-based animation framework for the web."
      },
      {
        name: "og:description",
        content: "The utility-based animation framework for the web."
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: socialCard },
      { name: "twitter:site:domain", content: "glaze.dev" },
      { name: "twitter:url", content: "https://glaze.dev" },
      { name: "og:image", content: socialCard },
      { name: "apple-mobile-web-app-title", content: "Glaze" }
    ],
    links: [
      { rel: "icon", href: config.icon ?? "/icon.png" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png" }
    ]
  }),
  shellComponent: RootDocument,
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `:root{--color-fd-border:hsla(0,0%,80%,50%);--color-fd-primary:hsl(0,0%,9%)}.dark{--color-fd-border:hsla(0,0%,40%,20%);--color-fd-primary:hsl(0,0%,98%)}@media(prefers-color-scheme:dark){:root:not(.light){--color-fd-border:hsla(0,0%,40%,20%);--color-fd-primary:hsl(0,0%,98%)}}@layer base{*,::before,::after{border-color:var(--color-fd-border)}}`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          defer: true,
          "data-domain": "glaze.dev",
          src: "https://plausible.io/js/script.js"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const normalizeBaseUrl = (baseUrl2) => baseUrl2.replace(/\/+$/, "");
const normalizeDocsPath = (docsPath) => {
  const trimmed = docsPath.replace(/\/+$/, "");
  if (!trimmed || trimmed === "/")
    return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};
function createRobotsHandler({ baseUrl: baseUrl2, sitemapPath = "/sitemap.xml" }) {
  const siteUrl = normalizeBaseUrl(baseUrl2);
  const sitemapUrl = sitemapPath.startsWith("/") ? `${siteUrl}${sitemapPath}` : `${siteUrl}/${sitemapPath}`;
  const body = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
Host: ${siteUrl}
`;
  return () => new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
function createDocsSitemapHandler({ baseUrl: baseUrl2, pages: pages2, docsPath = "/docs" }) {
  const siteUrl = normalizeBaseUrl(baseUrl2);
  const docsBase = normalizeDocsPath(docsPath);
  const urls = [siteUrl];
  for (const page of pages2) {
    if (page.startsWith("---"))
      continue;
    if (page.startsWith("index")) {
      urls.push(`${siteUrl}${docsBase}/`);
      continue;
    }
    urls.push(`${siteUrl}${docsBase}/${page}/`);
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const entries = urls.map((url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </url>`).join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
  return () => new Response(sitemap, {
    headers: {
      "content-type": "application/xml; charset=utf-8"
    }
  });
}
const pages = ["---Getting Started---", "index", "install", "---Usage---", "syntax", "selectors", "breakpoints", "timelines", "scrolltrigger", "defaults", "presets", "changelog"];
const meta = {
  pages
};
const baseUrl$1 = "https://glaze.dev";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: createDocsSitemapHandler({
        baseUrl: baseUrl$1,
        pages: meta.pages ?? []
      })
    }
  }
});
const baseUrl = "https://glaze.dev";
const Route$5 = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: createRobotsHandler({ baseUrl })
    }
  }
});
function toLLMPageData(data, fallbackTitle) {
  const getText = data.getText;
  const load = data.load ? async () => {
    const loaded = await data.load?.();
    const structuredData = typeof loaded === "object" && loaded !== null ? loaded.structuredData : void 0;
    return structuredData ? { structuredData } : {};
  } : void 0;
  return {
    title: data.title ?? fallbackTitle,
    description: data.description,
    getText: getText ? (type) => getText(type) : void 0,
    load
  };
}
function createLLMsSource(source2) {
  return {
    getPages: () => source2.getPages().map((page) => ({
      url: page.url,
      data: toLLMPageData(page.data, page.slugs[page.slugs.length - 1] ?? page.url)
    }))
  };
}
async function getLLMText(page) {
  let text = "";
  if (page.data.getText) {
    try {
      text = await page.data.getText("processed");
    } catch {
    }
  }
  if (!text && page.data.load) {
    try {
      const content = await page.data.load();
      text = content?.structuredData?.content || "";
    } catch {
    }
  }
  return `# ${page.data.title}
URL: ${page.url}
${page.data.description ? `
${page.data.description}
` : ""}
${text}`;
}
function sortPages(pages2) {
  return [...pages2].sort((a, b) => {
    const aDepth = a.url.split("/").length;
    const bDepth = b.url.split("/").length;
    if (aDepth !== bDepth)
      return aDepth - bDepth;
    return a.url.localeCompare(b.url);
  });
}
function createLLMsHandler(source2, config2) {
  return {
    GET: async () => {
      const pages2 = sortPages(source2.getPages());
      const lines = [
        `# ${config2.title}`,
        "",
        config2.description ? `${config2.description}
` : "",
        "## Pages",
        ""
      ];
      for (const page of pages2) {
        lines.push(`- ${page.data.title}: ${page.url}`);
        if (page.data.description) {
          lines.push(`  ${page.data.description}`);
        }
      }
      lines.push("");
      lines.push("## Full Content");
      lines.push("");
      lines.push("For full documentation content, see /llms-full.txt");
      return new Response(lines.join("\n"), {
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      });
    }
  };
}
function createLLMsFullHandler(source2) {
  return {
    GET: async () => {
      const pages2 = sortPages(source2.getPages());
      const contents = await Promise.all(pages2.map(getLLMText));
      return new Response(contents.join("\n\n---\n\n"), {
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      });
    }
  };
}
const Route$4 = createFileRoute("/llms.txt")({
  server: {
    handlers: createLLMsHandler(createLLMsSource(source), {
      title: config.title,
      description: config.description
    })
  }
});
const Route$3 = createFileRoute("/llms-full.txt")({
  server: {
    handlers: createLLMsFullHandler(createLLMsSource(source))
  }
});
const $$splitComponentImporter$1 = () => import("./index-BQ_SAptq.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function browser() {
  return { doc(_name, glob) {
    return {
      raw: glob,
      createClientLoader({ id = _name, ...options }) {
        return createClientLoader(this.raw, {
          id,
          ...options
        });
      }
    };
  } };
}
const loaderStore = /* @__PURE__ */ new Map();
function createClientLoader(globEntries, options) {
  const { id = "", component: useRenderer } = options;
  const renderers = {};
  const loaders = /* @__PURE__ */ new Map();
  const store = loaderStore.get(id) ?? { preloaded: /* @__PURE__ */ new Map() };
  loaderStore.set(id, store);
  for (const k in globEntries) loaders.set(k.startsWith("./") ? k.slice(2) : k, globEntries[k]);
  function getLoader(path) {
    const loader = loaders.get(path);
    if (!loader) throw new Error(`[createClientLoader] ${path} does not exist in available entries`);
    return loader;
  }
  function getRenderer(path) {
    if (path in renderers) return renderers[path];
    let promise;
    function Renderer(props) {
      let doc = store.preloaded.get(path);
      doc ??= reactExports.use(promise ??= getLoader(path)());
      return useRenderer(doc, props);
    }
    return renderers[path] = Renderer;
  }
  return {
    async preload(path) {
      const loaded = await getLoader(path)();
      store.preloaded.set(path, loaded);
      return loaded;
    },
    getComponent(path) {
      return getRenderer(path);
    },
    useContent(path, props) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(getRenderer(path), { ...props });
    }
  };
}
const create = browser();
const browserCollections = {
  docs: create.doc("docs", /* @__PURE__ */ Object.assign({
    "./breakpoints.mdx": () => import("./breakpoints-CkRpLZYF.mjs"),
    "./changelog.mdx": () => import("./changelog-BBZvIWZ-.mjs"),
    "./defaults.mdx": () => import("./defaults-CLkKNnRV.mjs"),
    "./index.mdx": () => import("./index-2oC-uNak.mjs"),
    "./install.mdx": () => import("./install-CqQZ2Foq.mjs"),
    "./presets.mdx": () => import("./presets-BZiH7iSF.mjs"),
    "./scrolltrigger.mdx": () => import("./scrolltrigger-Ddy9t1Gd.mjs"),
    "./selectors.mdx": () => import("./selectors-BNxY5zgV.mjs"),
    "./syntax.mdx": () => import("./syntax-CzX6Kt9C.mjs"),
    "./timelines.mdx": () => import("./timelines-5p5V4Gyj.mjs")
  }))
};
function Cards(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("grid grid-cols-2 gap-3 @container", props.className),
    children: props.children
  });
}
function Card({ icon, title, description, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(props.href ? Link : "div", {
    ...props,
    "data-card": true,
    className: twMerge("block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full", props.href && "hover:bg-fd-accent/80", props.className),
    children: [
      icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4",
        children: icon
      }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
        className: "not-prose mb-1 text-sm font-medium",
        children: title
      }),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        className: "my-0! text-sm text-fd-muted-foreground",
        children: description
      }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "text-sm text-fd-muted-foreground prose-no-margin empty:hidden",
        children: props.children
      })
    ]
  });
}
const iconClass = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
function Callout({ children, title, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CalloutContainer, {
    ...props,
    children: [title && /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutTitle, { children: title }), /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutDescription, { children })]
  });
}
function resolveAlias(type) {
  if (type === "warn") return "warning";
  if (type === "tip") return "info";
  return type;
}
function CalloutContainer({ type: inputType = "info", icon, children, className, style, ...props }) {
  const type = resolveAlias(inputType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: twMerge("flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md", className),
    style: {
      "--callout-color": `var(--color-fd-${type}, var(--color-fd-muted))`,
      ...style
    },
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        role: "none",
        className: "w-0.5 bg-(--callout-color)/50 rounded-sm"
      }),
      icon ?? {
        info: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: iconClass }),
        warning: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: iconClass }),
        error: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: iconClass }),
        success: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: iconClass }),
        idea: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "size-5 -me-0.5 fill-(--callout-color) text-(--callout-color)" })
      }[type],
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "flex flex-col gap-2 min-w-0 flex-1",
        children
      })
    ]
  });
}
function CalloutTitle({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: twMerge("font-medium my-0!", className),
    ...props,
    children
  });
}
function CalloutDescription({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: twMerge("text-fd-muted-foreground prose-no-margin empty:hidden", className),
    ...props,
    children
  });
}
function Heading({ as, className, ...props }) {
  const As = as ?? "h1";
  if (!props.id) return /* @__PURE__ */ jsxRuntimeExports.jsx(As, {
    className,
    ...props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(As, {
    className: twMerge("flex scroll-m-28 flex-row items-center gap-2", className),
    ...props,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      "data-card": "",
      href: `#${props.id}`,
      className: "peer",
      children: props.children
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, {
      "aria-hidden": true,
      className: "size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
    })]
  });
}
function Image$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Image, {
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px",
    ...props,
    src: props.src,
    className: twMerge("rounded-lg", props.className)
  });
}
function Table(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "relative overflow-auto prose-no-margin my-6",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ...props })
  });
}
const defaultMdxComponents = {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  pre: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, {
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pre, { children: props.children })
  }),
  Card,
  Cards,
  a: Link,
  img: Image$1,
  h1: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
    as: "h1",
    ...props
  }),
  h2: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
    as: "h2",
    ...props
  }),
  h3: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
    as: "h3",
    ...props
  }),
  h4: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
    as: "h4",
    ...props
  }),
  h5: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
    as: "h5",
    ...props
  }),
  h6: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
    as: "h6",
    ...props
  }),
  table: Table,
  Callout,
  CalloutContainer,
  CalloutTitle,
  CalloutDescription
};
function Steps({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "fd-steps",
    children
  });
}
function Step({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "fd-step",
    children
  });
}
function Accordion$1({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, {
    className: twMerge("divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card", className),
    ...props
  });
}
function AccordionItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Item, {
    className: twMerge("scroll-m-24", className),
    ...props,
    children
  });
}
function AccordionHeader({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {
    className: twMerge("not-prose flex flex-row items-center text-fd-card-foreground font-medium has-focus-visible:bg-fd-accent", className),
    ...props,
    children
  });
}
function AccordionTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Trigger2, {
    className: twMerge("group flex flex-1 items-center gap-2 px-3 py-2.5 text-start focus-visible:outline-none", className),
    ...props,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90" }), children]
  });
}
function AccordionContent({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Content2, {
    className: twMerge("overflow-hidden data-[state=closed]:animate-fd-accordion-up data-[state=open]:animate-fd-accordion-down", className),
    ...props,
    children
  });
}
function Accordions({ type = "single", ref, className, defaultValue, ...props }) {
  const rootRef = reactExports.useRef(null);
  const composedRef = mergeRefs$1(ref, rootRef);
  const [value, setValue] = reactExports.useState(() => type === "single" ? defaultValue ?? "" : defaultValue ?? []);
  reactExports.useEffect(() => {
    const id = window.location.hash.substring(1);
    const element = rootRef.current;
    if (!element || id.length === 0) return;
    const selected = document.getElementById(id);
    if (!selected || !element.contains(selected)) return;
    const value$1 = selected.getAttribute("data-accordion-value");
    if (value$1) setValue((prev) => typeof prev === "string" ? value$1 : [value$1, ...prev]);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion$1, {
    type,
    ref: composedRef,
    value,
    onValueChange: setValue,
    collapsible: type === "single" ? true : void 0,
    className: twMerge("divide-y divide-fd-border overflow-hidden rounded-lg border bg-fd-card", className),
    ...props
  });
}
function Accordion({ title, id, value = String(title), children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, {
    value,
    ...props,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionHeader, {
      id,
      "data-accordion-value": value,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: title }), id ? /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { id }) : null]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "px-4 pb-2 text-[0.9375rem] prose-no-margin",
      children
    }) })]
  });
}
function CopyButton({ id }) {
  const [checked, onClick] = useCopyButton(() => {
    const url = new URL(window.location.href);
    url.hash = id;
    return navigator.clipboard.writeText(url.toString());
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    type: "button",
    "aria-label": "Copy Link",
    className: twMerge(buttonVariants({
      color: "ghost",
      className: "text-fd-muted-foreground me-2"
    })),
    onClick,
    children: checked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { className: "size-3.5" })
  });
}
const itemVariants = cva("flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-4");
function Files({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: twMerge("not-prose rounded-md border bg-fd-card p-2", className),
    ...props,
    children: props.children
  });
}
function File({ name, icon = /* @__PURE__ */ jsxRuntimeExports.jsx(File$1, {}), className, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: twMerge(itemVariants({ className })),
    ...rest,
    children: [icon, name]
  });
}
function Folder({ name, defaultOpen = false, ...props }) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible, {
    open,
    onOpenChange: setOpen,
    ...props,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsibleTrigger, {
      className: twMerge(itemVariants({ className: "w-full" })),
      children: [open ? /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Folder$1, {}), name]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "ms-2 flex flex-col border-l ps-2",
      children: props.children
    }) })]
  });
}
const $$splitComponentImporter = () => import("./_-CdzJK23H.mjs");
const mdxComponents = {
  ...defaultMdxComponents,
  Tab,
  Tabs,
  Callout,
  Card,
  Cards,
  Step,
  Steps,
  Accordion,
  Accordions,
  File,
  Folder,
  Files
};
const Route$1 = createFileRoute("/docs/$")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const slugs = params._splat?.split("/") ?? [];
    const data = await serverLoader({
      data: slugs
    });
    await clientLoader.preload(data.path);
    return data;
  }
});
const serverLoader = createServerFn({
  method: "GET"
}).inputValidator((slugs) => slugs).handler(createSsrRpc("3754d170b07e5384cb393a7ce01e3317e54e102cb5b75ed0780e1a678ae2d91a"));
const clientLoader = browserCollections.docs.createClientLoader({
  component({
    toc,
    frontmatter,
    default: MDX
  }, props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsPage, { toc, full: frontmatter.full, tableOfContent: {
      style: "clerk"
    }, editOnGithub: {
      owner: "inline0",
      repo: "glaze",
      sha: "main",
      path: `apps/docs/content/docs/${props.editPath}`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsTitle$1, { children: frontmatter.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsDescription$1, { children: frontmatter.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsBody$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MDX, { components: mdxComponents }) })
    ] });
  }
});
function createEndpoint(server2) {
  const { search: search$1 } = server2;
  return {
    ...server2,
    async staticGET() {
      return Response.json(await server2.export());
    },
    async GET(request) {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      if (!query) return Response.json([]);
      return Response.json(await search$1(query, {
        tag: url.searchParams.get("tag")?.split(",") ?? void 0,
        locale: url.searchParams.get("locale") ?? void 0,
        mode: url.searchParams.get("mode") === "vector" ? "vector" : "full"
      }));
    }
  };
}
const advancedSchema = {
  content: "string",
  page_id: "string",
  type: "string",
  breadcrumbs: "string[]",
  tags: "enum[]",
  url: "string",
  embeddings: "vector[512]"
};
async function createDB({ indexes, tokenizer, search: _, ...rest }) {
  const items = typeof indexes === "function" ? await indexes() : indexes;
  const db = create$1({
    schema: advancedSchema,
    ...rest,
    components: {
      ...rest.components,
      tokenizer: tokenizer ?? rest.components?.tokenizer
    }
  });
  const mapTo = [];
  items.forEach((page) => {
    const pageTag = page.tag ?? [];
    const tags = Array.isArray(pageTag) ? pageTag : [pageTag];
    const data = page.structuredData;
    let id = 0;
    mapTo.push({
      id: page.id,
      page_id: page.id,
      type: "page",
      content: page.title,
      breadcrumbs: page.breadcrumbs,
      tags,
      url: page.url
    });
    const nextId = () => `${page.id}-${id++}`;
    if (page.description) mapTo.push({
      id: nextId(),
      page_id: page.id,
      tags,
      type: "text",
      url: page.url,
      content: page.description
    });
    for (const heading of data.headings) mapTo.push({
      id: nextId(),
      page_id: page.id,
      type: "heading",
      tags,
      url: `${page.url}#${heading.id}`,
      content: heading.content
    });
    for (const content of data.contents) mapTo.push({
      id: nextId(),
      page_id: page.id,
      tags,
      type: "text",
      url: content.heading ? `${page.url}#${content.heading}` : page.url,
      content: content.content
    });
  });
  await insertMultiple(db, mapTo);
  return db;
}
function defaultBuildIndex(source2) {
  function isBreadcrumbItem(item) {
    return typeof item === "string" && item.length > 0;
  }
  return async (page) => {
    let breadcrumbs;
    let structuredData;
    if ("structuredData" in page.data) structuredData = page.data.structuredData;
    else if ("load" in page.data && typeof page.data.load === "function") structuredData = (await page.data.load()).structuredData;
    if (!structuredData) throw new Error("Cannot find structured data from page, please define the page to index function.");
    const pageTree = source2.getPageTree(page.locale);
    const path = findPath(pageTree.children, (node) => node.type === "page" && node.url === page.url);
    if (path) {
      breadcrumbs = [];
      path.pop();
      if (isBreadcrumbItem(pageTree.name)) breadcrumbs.push(pageTree.name);
      for (const segment of path) {
        if (!isBreadcrumbItem(segment.name)) continue;
        breadcrumbs.push(segment.name);
      }
    }
    return {
      title: page.data.title ?? basename(page.path, extname(page.path)),
      breadcrumbs,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData
    };
  };
}
function createFromSource(source2, options = {}) {
  const { buildIndex = defaultBuildIndex(source2) } = options;
  if (source2._i18n) return createI18nSearchAPI("advanced", {
    ...options,
    i18n: source2._i18n,
    indexes: async () => {
      const indexes = source2.getLanguages().flatMap((entry) => {
        return entry.pages.map(async (page) => ({
          ...await buildIndex(page),
          locale: entry.language
        }));
      });
      return Promise.all(indexes);
    }
  });
  return createSearchAPI("advanced", {
    ...options,
    indexes: async () => {
      const indexes = source2.getPages().map((page) => buildIndex(page));
      return Promise.all(indexes);
    }
  });
}
const STEMMERS = {
  arabic: "ar",
  armenian: "am",
  bulgarian: "bg",
  czech: "cz",
  danish: "dk",
  dutch: "nl",
  english: "en",
  finnish: "fi",
  french: "fr",
  german: "de",
  greek: "gr",
  hungarian: "hu",
  indian: "in",
  indonesian: "id",
  irish: "ie",
  italian: "it",
  lithuanian: "lt",
  nepali: "np",
  norwegian: "no",
  portuguese: "pt",
  romanian: "ro",
  russian: "ru",
  serbian: "rs",
  slovenian: "ru",
  spanish: "es",
  swedish: "se",
  tamil: "ta",
  turkish: "tr",
  ukrainian: "uk",
  sanskrit: "sk"
};
async function getTokenizer(locale) {
  return { language: Object.keys(STEMMERS).find((lang) => STEMMERS[lang] === locale) ?? locale };
}
async function initAdvanced(options) {
  const map = /* @__PURE__ */ new Map();
  if (options.i18n.languages.length === 0) return map;
  const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
  for (const locale of options.i18n.languages) {
    const localeIndexes = indexes.filter((index) => index.locale === locale);
    const mapped = options.localeMap?.[locale] ?? await getTokenizer(locale);
    map.set(locale, typeof mapped === "object" ? initAdvancedSearch({
      ...options,
      indexes: localeIndexes,
      ...mapped
    }) : initAdvancedSearch({
      ...options,
      language: mapped,
      indexes: localeIndexes
    }));
  }
  return map;
}
function createI18nSearchAPI(type, options) {
  const get = initAdvanced(options);
  return createEndpoint({
    async export() {
      const map = await get;
      const entries = Array.from(map.entries()).map(async ([k, v]) => [k, await v.export()]);
      return {
        type: "i18n",
        data: Object.fromEntries(await Promise.all(entries))
      };
    },
    async search(query, searchOptions) {
      const map = await get;
      const locale = searchOptions?.locale ?? options.i18n.defaultLanguage;
      const handler = map.get(locale);
      if (handler) return handler.search(query, searchOptions);
      return [];
    }
  });
}
function createSearchAPI(type, options) {
  return createEndpoint(initAdvancedSearch(options));
}
function initAdvancedSearch(options) {
  const get = createDB(options);
  return {
    async export() {
      return {
        type: "advanced",
        ...save(await get)
      };
    },
    async search(query, searchOptions) {
      const db = await get;
      const mode = searchOptions?.mode;
      return searchAdvanced(db, query, searchOptions?.tag, {
        ...options.search,
        mode: mode === "vector" ? "vector" : "fulltext"
      }).catch((err) => {
        if (mode === "vector") throw new Error("failed to search, make sure you have installed `@orama/plugin-embeddings` according to their docs.", { cause: err });
        throw err;
      });
    }
  };
}
const server = createFromSource(source, {
  language: "english"
});
const Route = createFileRoute("/api/search")({
  server: {
    handlers: {
      GET: async ({ request }) => server.GET(request)
    }
  }
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const RobotsDottxtRoute = Route$5.update({
  id: "/robots.txt",
  path: "/robots.txt",
  getParentRoute: () => Route$7
});
const LlmsDottxtRoute = Route$4.update({
  id: "/llms.txt",
  path: "/llms.txt",
  getParentRoute: () => Route$7
});
const LlmsFullDottxtRoute = Route$3.update({
  id: "/llms-full.txt",
  path: "/llms-full.txt",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const DocsSplatRoute = Route$1.update({
  id: "/docs/$",
  path: "/docs/$",
  getParentRoute: () => Route$7
});
const ApiSearchRoute = Route.update({
  id: "/api/search",
  path: "/api/search",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  LlmsFullDottxtRoute,
  LlmsDottxtRoute,
  RobotsDottxtRoute,
  SitemapDotxmlRoute,
  ApiSearchRoute,
  DocsSplatRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true
  });
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Accordions as A,
  Button as B,
  Cards as C,
  DocsPage as D,
  Files as F,
  Route$1 as R,
  Steps as S,
  DocsTitle$1 as a,
  browserCollections as b,
  config as c,
  DocsDescription$1 as d,
  DocsBody$1 as e,
  Folder as f,
  File as g,
  Accordion as h,
  Step as i,
  Card as j,
  Callout as k,
  defaultMdxComponents as l,
  router as r
};
