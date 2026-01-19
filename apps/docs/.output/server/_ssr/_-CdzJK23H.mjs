import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Route$1, c as config, b as browserCollections, D as DocsPage, a as DocsTitle$1, d as DocsDescription$1, e as DocsBody$1, F as Files, f as Folder, g as File, A as Accordions, h as Accordion, S as Steps, i as Step, C as Cards, j as Card, k as Callout, l as defaultMdxComponents } from "./router-BqBUMpOA.mjs";
import { T as Tabs, a as Tab, E as resolveLinkItems, G as tree_exports, J as LayoutContextProvider, S as SidebarProvider, K as LayoutBody, M as LayoutHeader, N as renderTitleNav, O as SearchToggle, Q as SidebarTrigger, j as buttonVariants, U as LayoutTabs, V as SidebarViewport, W as SidebarLinkItem, X as SidebarPageTree, Y as SidebarContent, Z as SidebarCollapseTrigger, $ as LargeSearchToggle, a0 as SidebarTabsDropdown, a1 as LanguageToggle, a2 as LinkItem, a3 as ThemeToggle, a4 as SidebarDrawer, a5 as LanguageToggleText } from "./install-block-CCtzCOI9.mjs";
import { v as visit } from "./utils-D10VxgVc-CZVkar0w.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as createBaseOptions } from "./shared-CjtyTqzh.mjs";
import { s as PanelLeft, r as Languages } from "../_libs/lucide-react.mjs";
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
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "../_libs/@radix-ui/react-context.mjs";
import "../_libs/@radix-ui/react-collection.mjs";
import "../_libs/@radix-ui/react-compose-refs.mjs";
import "../_libs/@radix-ui/react-slot.mjs";
import "../_libs/@radix-ui/primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_libs/@radix-ui/react-primitive.mjs";
import "../_libs/@radix-ui/react-collapsible.mjs";
import "../_libs/@radix-ui/react-presence.mjs";
import "../_libs/@radix-ui/react-id.mjs";
import "../_libs/@radix-ui/react-direction.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./advanced-tbtFDsHU-DwC4Uo2C.mjs";
import "./search-DzqmOjzV-BuydbnAi.mjs";
import "./remove-undefined-Buxsprgu-7355g_Rp.mjs";
import "../_libs/@orama/orama.mjs";
import "../_libs/next-themes.mjs";
import "../_libs/scroll-into-view-if-needed.mjs";
import "../_libs/compute-scroll-into-view.mjs";
import "../_libs/@radix-ui/react-scroll-area.mjs";
import "../_libs/@radix-ui/react-use-callback-ref.mjs";
import "../_libs/@radix-ui/number.mjs";
import "../_libs/@radix-ui/react-navigation-menu.mjs";
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
const defaultTransform = (option, node) => {
  if (!node.icon) return option;
  return {
    ...option,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary",
      children: node.icon
    })
  };
};
function getSidebarTabs(tree, { transform = defaultTransform } = {}) {
  const results = [];
  function scanOptions(node, unlisted) {
    if ("root" in node && node.root) {
      const urls = getFolderUrls(node);
      if (urls.size > 0) {
        const option = {
          url: urls.values().next().value ?? "",
          title: node.name,
          icon: node.icon,
          unlisted,
          description: node.description,
          urls
        };
        const mapped = transform ? transform(option, node) : option;
        if (mapped) results.push(mapped);
      }
    }
    for (const child of node.children) if (child.type === "folder") scanOptions(child, unlisted);
  }
  scanOptions(tree);
  if (tree.fallback) scanOptions(tree.fallback, true);
  return results;
}
function getFolderUrls(folder, output = /* @__PURE__ */ new Set()) {
  if (folder.index) output.add(folder.index.url);
  for (const child of folder.children) {
    if (child.type === "page" && !child.external) output.add(child.url);
    if (child.type === "folder") getFolderUrls(child, output);
  }
  return output;
}
function DocsLayout$1({ nav: { transparentMode, ...nav } = {}, sidebar: { tabs: sidebarTabs, enabled: sidebarEnabled = true, defaultOpenLevel, prefetch, ...sidebarProps } = {}, searchToggle = {}, themeSwitch = {}, tabMode = "auto", i18n = false, children, tree, ...props }) {
  const tabs = reactExports.useMemo(() => {
    if (Array.isArray(sidebarTabs)) return sidebarTabs;
    if (typeof sidebarTabs === "object") return getSidebarTabs(tree, sidebarTabs);
    if (sidebarTabs !== false) return getSidebarTabs(tree);
    return [];
  }, [tree, sidebarTabs]);
  const links = resolveLinkItems(props);
  function sidebar() {
    const { footer, banner, collapsible = true, component, components, ...rest } = sidebarProps;
    if (component) return component;
    const iconLinks = links.filter((item) => item.type === "icon");
    const viewport = /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarViewport, { children: [links.filter((v) => v.type !== "icon").map((item, i, list) => /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarLinkItem, {
      item,
      className: twMerge(i === list.length - 1 && "mb-4")
    }, i)), /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarPageTree, { ...components })] });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarContent, {
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex flex-col gap-3 p-4 pb-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex",
              children: [
                renderTitleNav(nav, { className: "inline-flex text-[0.9375rem] items-center gap-2.5 font-medium me-auto" }),
                nav.children,
                collapsible && /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarCollapseTrigger, {
                  className: twMerge(buttonVariants({
                    color: "ghost",
                    size: "icon-sm",
                    className: "mb-auto text-fd-muted-foreground"
                  })),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, {})
                })
              ]
            }),
            searchToggle.enabled !== false && (searchToggle.components?.lg ?? /* @__PURE__ */ jsxRuntimeExports.jsx(LargeSearchToggle, { hideIfDisabled: true })),
            tabs.length > 0 && tabMode === "auto" && /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTabsDropdown, { options: tabs }),
            banner
          ]
        }),
        viewport,
        (i18n || iconLinks.length > 0 || themeSwitch?.enabled !== false || footer) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex flex-col border-t p-4 pt-2 empty:hidden",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex text-fd-muted-foreground items-center empty:hidden",
            children: [
              i18n && /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggle, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "size-4.5" }) }),
              iconLinks.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LinkItem, {
                item,
                className: twMerge(buttonVariants({
                  size: "icon-sm",
                  color: "ghost"
                })),
                "aria-label": item.label,
                children: item.icon
              }, i)),
              themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {
                className: "ms-auto p-0",
                mode: themeSwitch.mode
              }))
            ]
          }), footer]
        })
      ]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarDrawer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "flex flex-col gap-3 p-4 pb-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex text-fd-muted-foreground items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "flex flex-1",
                children: iconLinks.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LinkItem, {
                  item,
                  className: twMerge(buttonVariants({
                    size: "icon-sm",
                    color: "ghost",
                    className: "p-2"
                  })),
                  "aria-label": item.label,
                  children: item.icon
                }, i))
              }),
              i18n && /* @__PURE__ */ jsxRuntimeExports.jsxs(LanguageToggle, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "size-4.5" }), /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggleText, {})] }),
              themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {
                className: "p-0",
                mode: themeSwitch.mode
              })),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {
                className: twMerge(buttonVariants({
                  color: "ghost",
                  size: "icon-sm",
                  className: "p-2"
                })),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, {})
              })
            ]
          }),
          tabs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTabsDropdown, { options: tabs }),
          banner
        ]
      }),
      viewport,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "flex flex-col border-t p-4 pt-2 empty:hidden",
        children: footer
      })
    ] })] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(tree_exports.TreeContextProvider, {
    tree,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutContextProvider, {
      navTransparentMode: transparentMode,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, {
        defaultOpenLevel,
        prefetch,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LayoutBody, {
          ...props.containerProps,
          children: [
            nav.enabled !== false && (nav.component ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(LayoutHeader, {
              id: "nd-subnav",
              className: "[grid-area:header] sticky top-(--fd-docs-row-1) z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm h-(--fd-header-height) md:hidden max-md:layout:[--fd-header-height:--spacing(14)] data-[transparent=false]:bg-fd-background/80",
              children: [
                renderTitleNav(nav, { className: "inline-flex items-center gap-2.5 font-semibold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "flex-1",
                  children: nav.children
                }),
                searchToggle.enabled !== false && (searchToggle.components?.sm ?? /* @__PURE__ */ jsxRuntimeExports.jsx(SearchToggle, {
                  className: "p-2",
                  hideIfDisabled: true
                })),
                sidebarEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {
                  className: twMerge(buttonVariants({
                    color: "ghost",
                    size: "icon-sm",
                    className: "p-2"
                  })),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, {})
                })
              ]
            })),
            sidebarEnabled && sidebar(),
            tabMode === "top" && tabs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutTabs, {
              options: tabs,
              className: "z-10 bg-fd-background border-b px-6 pt-3 xl:px-8 max-md:hidden"
            }),
            children
          ]
        })
      })
    })
  });
}
function DocsLayout({ config: config2, pageTree, children }) {
  return jsxRuntimeExports.jsx(DocsLayout$1, { ...createBaseOptions(config2), tree: pageTree, children });
}
function deserializeHTML(html) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dangerouslySetInnerHTML: { __html: html } });
}
function deserializePageTree(serialized) {
  const root = serialized.data;
  visit(root, (item) => {
    if ("icon" in item && typeof item.icon === "string") item.icon = deserializeHTML(item.icon);
    if (typeof item.name === "string") item.name = deserializeHTML(item.name);
  });
  return root;
}
function useFumadocsLoader(serialized) {
  return reactExports.useMemo(() => {
    const out = {};
    for (const k in serialized) {
      const v = serialized[k];
      if (typeof v === "object" && v !== null && "$fumadocs_loader" in v && v.$fumadocs_loader === "page-tree" && "data" in v && typeof v.data === "object") out[k] = deserializePageTree(v);
      else out[k] = v;
    }
    return out;
  }, [serialized]);
}
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
function Page() {
  const data = useFumadocsLoader(Route$1.useLoaderData());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DocsLayout, { config, pageTree: data.pageTree, children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: clientLoader.useContent(data.path, {
    editPath: data.editPath
  }) }) });
}
export {
  Page as component
};
