import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { D as DirectionProvider } from "../_libs/@radix-ui/react-direction.mjs";
import { J, z } from "../_libs/next-themes.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { n as normalizeUrl, f as findPath } from "./utils-D10VxgVc-CZVkar0w.mjs";
import { R as Root, a as CollapsibleTrigger$1, b as CollapsibleContent$1 } from "../_libs/@radix-ui/react-collapsible.mjs";
import { e } from "../_libs/scroll-into-view-if-needed.mjs";
import { R as Root$1, C as Corner, V as Viewport, S as Scrollbar, a as ScrollAreaThumb } from "../_libs/@radix-ui/react-scroll-area.mjs";
import { P as Presence } from "../_libs/@radix-ui/react-presence.mjs";
import { N as NavigationMenuItem$1, T as Trigger, C as Content, V as Viewport$1, R as Root2$1, L as List, a as Link$2 } from "../_libs/@radix-ui/react-navigation-menu.mjs";
import { P as Portal, C as Content2, R as Root2, T as Trigger$1 } from "../_libs/@radix-ui/react-popover.mjs";
import { T as Tabs$2, a as TabsList$2, b as TabsTrigger$2, c as TabsContent$2 } from "../_libs/@radix-ui/react-tabs.mjs";
import { e as Check, n as Clipboard, d as ChevronRight, o as ChevronDown, p as ChevronLeft, q as Search, r as Languages, s as PanelLeft, t as ChevronsUpDown, u as Sun, v as Moon, A as Airplay, E as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as toJsxRuntime } from "../_libs/hast-util-to-jsx-runtime.mjs";
const notImplemented = () => {
  throw new Error("You need to wrap your application inside `FrameworkProvider`.");
};
const FrameworkContext = reactExports.createContext({
  useParams: notImplemented,
  useRouter: notImplemented,
  usePathname: notImplemented
});
function FrameworkProvider({ Link: Link$12, useRouter: useRouter$1, useParams: useParams$1, usePathname: usePathname$1, Image: Image$1, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FrameworkContext, {
    value: reactExports.useMemo(() => ({
      usePathname: usePathname$1,
      useRouter: useRouter$1,
      Link: Link$12,
      Image: Image$1,
      useParams: useParams$1
    }), [
      Link$12,
      usePathname$1,
      useRouter$1,
      useParams$1,
      Image$1
    ]),
    children
  });
}
function usePathname() {
  return reactExports.use(FrameworkContext).usePathname();
}
function useRouter() {
  return reactExports.use(FrameworkContext).useRouter();
}
function Image(props) {
  const { Image: Image$1 } = reactExports.use(FrameworkContext);
  if (!Image$1) {
    const { src, alt, priority, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
      alt,
      src,
      fetchPriority: priority ? "high" : "auto",
      ...rest
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { ...props });
}
function Link$1(props) {
  const { Link: Link$12 } = reactExports.use(FrameworkContext);
  if (!Link$12) {
    const { href, prefetch: _, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
      href,
      ...rest
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link$12, { ...props });
}
const defaultTranslations = {
  search: "Search",
  searchNoResult: "No results found",
  toc: "On this page",
  tocNoHeadings: "No Headings",
  lastUpdate: "Last updated on",
  chooseLanguage: "Choose a language",
  nextPage: "Next Page",
  previousPage: "Previous Page",
  chooseTheme: "Theme",
  editOnGithub: "Edit on GitHub"
};
const I18nContext = reactExports.createContext({ text: defaultTranslations });
function I18nLabel(props) {
  const { text } = useI18n();
  return text[props.label];
}
function useI18n() {
  return reactExports.useContext(I18nContext);
}
function I18nProvider({ locales = [], locale, onLocaleChange, children, translations }) {
  const router = useRouter();
  const pathname = usePathname();
  const onChange = (value) => {
    if (onLocaleChange) return onLocaleChange(value);
    const segments = pathname.split("/").filter((v) => v.length > 0);
    if (segments[0] !== locale) segments.unshift(value);
    else segments[0] = value;
    router.push(`/${segments.join("/")}`);
  };
  const onChangeRef = reactExports.useRef(onChange);
  onChangeRef.current = onChange;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext, {
    value: reactExports.useMemo(() => ({
      locale,
      locales,
      text: {
        ...defaultTranslations,
        ...translations
      },
      onChange: (v) => onChangeRef.current(v)
    }), [
      locale,
      locales,
      translations
    ]),
    children
  });
}
const import__fumadocs_ui_contexts_i18n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18nLabel,
  I18nProvider,
  defaultTranslations,
  useI18n
}, Symbol.toStringTag, { value: "Module" }));
const SearchContext = reactExports.createContext({
  enabled: false,
  hotKey: [],
  setOpenSearch: () => void 0
});
function useSearchContext() {
  return reactExports.use(SearchContext);
}
function MetaOrControl() {
  const [key, setKey] = reactExports.useState("⌘");
  reactExports.useEffect(() => {
    if (window.navigator.userAgent.includes("Windows")) setKey("Ctrl");
  }, []);
  return key;
}
function SearchProvider({ SearchDialog, children, preload = true, options, hotKey = [{
  key: (e2) => e2.metaKey || e2.ctrlKey,
  display: /* @__PURE__ */ jsxRuntimeExports.jsx(MetaOrControl, {})
}, {
  key: "k",
  display: "K"
}], links }) {
  const [isOpen, setIsOpen] = reactExports.useState(preload ? false : void 0);
  const onKeyDown = reactExports.useEffectEvent((e2) => {
    if (hotKey.every((v) => typeof v.key === "string" ? e2.key === v.key : v.key(e2))) {
      setIsOpen((open) => !open);
      e2.preventDefault();
    }
  });
  reactExports.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [hotKey]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SearchContext, {
    value: reactExports.useMemo(() => ({
      enabled: true,
      hotKey,
      setOpenSearch: setIsOpen
    }), [hotKey]),
    children: [isOpen !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
      fallback: null,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchDialog, {
        open: isOpen,
        onOpenChange: setIsOpen,
        links,
        ...options
      })
    }), children]
  });
}
function SearchOnly({ children }) {
  if (useSearchContext().enabled) return children;
}
const import__fumadocs_ui_contexts_search = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchOnly,
  SearchProvider,
  useSearchContext
}, Symbol.toStringTag, { value: "Module" }));
const DefaultSearchDialog = reactExports.lazy(() => import("./search-default-PGPUpvtY.mjs"));
function RootProvider({ children, dir = "ltr", theme = {}, search, i18n }) {
  let body = children;
  if (search?.enabled !== false) body = /* @__PURE__ */ jsxRuntimeExports.jsx(SearchProvider, {
    SearchDialog: DefaultSearchDialog,
    ...search,
    children: body
  });
  if (theme?.enabled !== false) body = /* @__PURE__ */ jsxRuntimeExports.jsx(J, {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: true,
    ...theme,
    children: body
  });
  if (i18n) body = /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, {
    ...i18n,
    children: body
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DirectionProvider, {
    dir,
    children: body
  });
}
const variants = {
  primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",
  outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
  ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
  secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
};
const buttonVariants = cva("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring", { variants: {
  variant: variants,
  color: variants,
  size: {
    sm: "gap-1 px-2 py-1.5 text-xs",
    icon: "p-1.5 [&_svg]:size-5",
    "icon-sm": "p-1.5 [&_svg]:size-4.5",
    "icon-xs": "p-1 [&_svg]:size-4"
  }
} });
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, symbols) => {
  let target = {};
  for (var name in all) {
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  }
  return target;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except) {
        __defProp(to, key, {
          get: ((k) => from[k]).bind(null, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    }
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget);
function getBreadcrumbItemsFromPath(tree, path, options) {
  const { includePage = false, includeSeparator = false, includeRoot = false } = options;
  let items = [];
  for (let i = 0; i < path.length; i++) {
    const item = path[i];
    switch (item.type) {
      case "page":
        if (includePage) items.push({
          name: item.name,
          url: item.url
        });
        break;
      case "folder":
        if (item.root && !includeRoot) {
          items = [];
          break;
        }
        if (i === path.length - 1 || item.index !== path[i + 1]) items.push({
          name: item.name,
          url: item.index?.url
        });
        break;
      case "separator":
        if (item.name && includeSeparator) items.push({ name: item.name });
        break;
    }
  }
  if (includeRoot) items.unshift({
    name: tree.name,
    url: typeof includeRoot === "object" ? includeRoot.url : void 0
  });
  return items;
}
function searchPath(nodes, url) {
  const normalizedUrl = normalizeUrl(url);
  return findPath(nodes, (node) => node.type === "page" && node.url === normalizedUrl);
}
const TreeContext = reactExports.createContext(null);
const PathContext = reactExports.createContext([]);
function TreeContextProvider({ tree: rawTree, children }) {
  const nextIdRef = reactExports.useRef(0);
  const pathname = usePathname();
  const tree = reactExports.useMemo(() => rawTree, [rawTree.$id ?? rawTree]);
  const path = reactExports.useMemo(() => {
    return searchPath(tree.children, pathname) ?? (tree.fallback ? searchPath(tree.fallback.children, pathname) : null) ?? [];
  }, [tree, pathname]);
  const root = path.findLast((item) => item.type === "folder" && item.root) ?? tree;
  root.$id ??= String(nextIdRef.current++);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TreeContext, {
    value: reactExports.useMemo(() => ({
      root,
      full: tree
    }), [root, tree]),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PathContext, {
      value: path,
      children
    })
  });
}
function useTreePath() {
  return reactExports.use(PathContext);
}
function useTreeContext() {
  const ctx = reactExports.use(TreeContext);
  if (!ctx) throw new Error("You must wrap this component under <DocsLayout />");
  return ctx;
}
const import__fumadocs_ui_contexts_tree = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreeContextProvider,
  useTreeContext,
  useTreePath
}, Symbol.toStringTag, { value: "Module" }));
var tree_exports = {};
__reExport(tree_exports, import__fumadocs_ui_contexts_tree);
const Collapsible = Root;
const CollapsibleTrigger = CollapsibleTrigger$1;
const CollapsibleContent = reactExports.forwardRef(({ children, ...props }, ref) => {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent$1, {
    ref,
    ...props,
    className: twMerge("overflow-hidden", mounted && "data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down", props.className),
    children
  });
});
CollapsibleContent.displayName = CollapsibleContent$1.displayName;
const ScrollArea = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Root$1, {
  ref,
  type: "scroll",
  className: twMerge("overflow-hidden", className),
  ...props,
  children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, { orientation: "vertical" })
  ]
}));
ScrollArea.displayName = Root$1.displayName;
const ScrollViewport = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport, {
  ref,
  className: twMerge("size-full rounded-[inherit]", className),
  ...props,
  children
}));
ScrollViewport.displayName = Viewport.displayName;
const ScrollBar = reactExports.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Scrollbar, {
  ref,
  orientation,
  className: twMerge("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className),
  ...props,
  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
}));
ScrollBar.displayName = Scrollbar.displayName;
const Link = reactExports.forwardRef(({ href = "#", external = href.match(/^\w+:/) || href.startsWith("//"), prefetch, children, ...props }, ref) => {
  if (external) return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    ref,
    href,
    rel: "noreferrer noopener",
    target: "_blank",
    ...props,
    children
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, {
    ref,
    href,
    prefetch,
    ...props,
    children
  });
});
Link.displayName = "Link";
function normalize(urlOrPath) {
  if (urlOrPath.length > 1 && urlOrPath.endsWith("/")) return urlOrPath.slice(0, -1);
  return urlOrPath;
}
function isActive(href, pathname, nested = true) {
  href = normalize(href);
  pathname = normalize(pathname);
  return href === pathname || nested && pathname.startsWith(`${href}/`);
}
function isDifferent(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) return b.length !== a.length || a.some((v, i) => isDifferent(v, b[i]));
  return a !== b;
}
function useOnChange(value, onChange, isUpdated = isDifferent) {
  const [prev, setPrev] = reactExports.useState(value);
  if (isUpdated(prev, value)) {
    onChange(value, prev);
    setPrev(value);
  }
}
function useMediaQuery(query, disabled = false) {
  const [isMatch, setMatch] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (disabled) return;
    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => {
      setMatch(mediaQueryList.matches);
    };
    handleChange();
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [disabled, query]);
  return isMatch;
}
const SidebarContext = reactExports.createContext(null);
const FolderContext = reactExports.createContext(null);
function SidebarProvider({ defaultOpenLevel = 0, prefetch, children }) {
  const closeOnRedirect = reactExports.useRef(true);
  const [open, setOpen] = reactExports.useState(false);
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const pathname = usePathname();
  const mode = useMediaQuery("(width < 768px)") ? "drawer" : "full";
  useOnChange(pathname, () => {
    if (closeOnRedirect.current) setOpen(false);
    closeOnRedirect.current = true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContext, {
    value: reactExports.useMemo(() => ({
      open,
      setOpen,
      collapsed,
      setCollapsed,
      closeOnRedirect,
      defaultOpenLevel,
      prefetch,
      mode
    }), [
      open,
      collapsed,
      defaultOpenLevel,
      prefetch,
      mode
    ]),
    children
  });
}
function useSidebar() {
  const ctx = reactExports.use(SidebarContext);
  if (!ctx) throw new Error("Missing SidebarContext, make sure you have wrapped the component in <DocsLayout /> and the context is available.");
  return ctx;
}
function useFolder() {
  return reactExports.use(FolderContext);
}
function useFolderDepth() {
  return reactExports.use(FolderContext)?.depth ?? 0;
}
function SidebarContent$1({ children }) {
  const { collapsed, mode } = useSidebar();
  const [hover, setHover] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const timerRef = reactExports.useRef(0);
  useOnChange(collapsed, () => {
    if (collapsed) setHover(false);
  });
  if (mode !== "full") return;
  function shouldIgnoreHover(e2) {
    const element = ref.current;
    if (!element) return true;
    return !collapsed || e2.pointerType === "touch" || element.getAnimations().length > 0;
  }
  return children({
    ref,
    collapsed,
    hovered: hover,
    onPointerEnter(e2) {
      if (shouldIgnoreHover(e2)) return;
      window.clearTimeout(timerRef.current);
      setHover(true);
    },
    onPointerLeave(e2) {
      if (shouldIgnoreHover(e2)) return;
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setHover(false), Math.min(e2.clientX, document.body.clientWidth - e2.clientX) > 100 ? 0 : 500);
    }
  });
}
function SidebarDrawerOverlay(props) {
  const { open, setOpen, mode } = useSidebar();
  if (mode !== "drawer") return;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, {
    present: open,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      "data-state": open ? "open" : "closed",
      onClick: () => setOpen(false),
      ...props
    })
  });
}
function SidebarDrawerContent({ className, children, ...props }) {
  const { open, mode } = useSidebar();
  const state = open ? "open" : "closed";
  if (mode !== "drawer") return;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, {
    present: open,
    children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx("aside", {
      id: "nd-sidebar-mobile",
      "data-state": state,
      className: twMerge(!present && "invisible", className),
      ...props,
      children
    })
  });
}
function SidebarViewport(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, {
    ...props,
    className: twMerge("min-h-0 flex-1", props.className),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollViewport, {
      className: "p-4 overscroll-contain",
      style: { maskImage: "linear-gradient(to bottom, transparent, white 12px, white calc(100% - 12px), transparent)" },
      children: props.children
    })
  });
}
function SidebarSeparator$1(props) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    ...props,
    className: twMerge("inline-flex items-center gap-2 mb-1.5 px-2 mt-6 empty:mb-0", depth === 0 && "first:mt-0", props.className),
    children: props.children
  });
}
function SidebarItem$1({ icon, children, ...props }) {
  const pathname = usePathname();
  const ref = reactExports.useRef(null);
  const { prefetch } = useSidebar();
  const active = props.href !== void 0 && isActive(props.href, pathname, false);
  useAutoScroll(active, ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
    ref,
    "data-active": active,
    prefetch,
    ...props,
    children: [icon ?? (props.external ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, {}) : null), children]
  });
}
function SidebarFolder({ defaultOpen: defaultOpenProp, collapsible = true, active = false, children, ...props }) {
  const { defaultOpenLevel } = useSidebar();
  const depth = useFolderDepth() + 1;
  const defaultOpen = collapsible === false || active || (defaultOpenProp ?? defaultOpenLevel >= depth);
  const [open, setOpen] = reactExports.useState(defaultOpen);
  useOnChange(defaultOpen, (v) => {
    if (v) setOpen(v);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, {
    open,
    onOpenChange: setOpen,
    disabled: !collapsible,
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderContext, {
      value: reactExports.useMemo(() => ({
        open,
        setOpen,
        depth,
        collapsible
      }), [
        collapsible,
        depth,
        open
      ]),
      children
    })
  });
}
function SidebarFolderTrigger$1({ children, ...props }) {
  const { open, collapsible } = reactExports.use(FolderContext);
  if (collapsible) return /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsibleTrigger, {
    ...props,
    children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, {
      "data-icon": true,
      className: twMerge("ms-auto transition-transform", !open && "-rotate-90")
    })]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    children
  });
}
function SidebarFolderLink$1({ children, ...props }) {
  const ref = reactExports.useRef(null);
  const { open, setOpen, collapsible } = reactExports.use(FolderContext);
  const { prefetch } = useSidebar();
  const pathname = usePathname();
  const active = props.href !== void 0 && isActive(props.href, pathname, false);
  useAutoScroll(active, ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
    ref,
    "data-active": active,
    onClick: (e2) => {
      if (!collapsible) return;
      if (e2.target instanceof Element && e2.target.matches("[data-icon], [data-icon] *")) {
        setOpen(!open);
        e2.preventDefault();
      } else setOpen(active ? !open : true);
    },
    prefetch,
    ...props,
    children: [children, collapsible && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, {
      "data-icon": true,
      className: twMerge("ms-auto transition-transform", !open && "-rotate-90")
    })]
  });
}
function SidebarFolderContent$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, {
    ...props,
    children: props.children
  });
}
function SidebarTrigger({ children, ...props }) {
  const { setOpen } = useSidebar();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    "aria-label": "Open Sidebar",
    onClick: () => setOpen((prev) => !prev),
    ...props,
    children
  });
}
function SidebarCollapseTrigger(props) {
  const { collapsed, setCollapsed } = useSidebar();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    type: "button",
    "aria-label": "Collapse Sidebar",
    "data-collapsed": collapsed,
    onClick: () => {
      setCollapsed((prev) => !prev);
    },
    ...props,
    children: props.children
  });
}
function useAutoScroll(active, ref) {
  const { mode } = useSidebar();
  reactExports.useEffect(() => {
    if (active && ref.current) e(ref.current, {
      boundary: document.getElementById(mode === "drawer" ? "nd-sidebar-mobile" : "nd-sidebar"),
      scrollMode: "if-needed"
    });
  }, [
    active,
    mode,
    ref
  ]);
}
const Popover = Root2;
const PopoverTrigger = Trigger$1;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Content2, {
  ref,
  align,
  sideOffset,
  side: "bottom",
  className: twMerge("z-50 origin-(--radix-popover-content-transform-origin) overflow-y-auto max-h-(--radix-popover-content-available-height) min-w-[240px] max-w-[98vw] rounded-xl border bg-fd-popover/60 backdrop-blur-lg p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in", className),
  ...props
}) }));
PopoverContent.displayName = Content2.displayName;
function SidebarTabsDropdown({ options, placeholder, ...props }) {
  const [open, setOpen] = reactExports.useState(false);
  const { closeOnRedirect } = useSidebar();
  const pathname = usePathname();
  const selected = reactExports.useMemo(() => {
    return options.findLast((item$1) => isTabActive(item$1, pathname));
  }, [options, pathname]);
  const onClick = () => {
    closeOnRedirect.current = false;
    setOpen(false);
  };
  const item = selected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "size-9 shrink-0 empty:hidden md:size-5",
    children: selected.icon
  }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [/* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "text-sm font-medium",
    children: selected.title
  }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
    className: "text-sm text-fd-muted-foreground empty:hidden md:hidden",
    children: selected.description
  })] })] }) : placeholder;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, {
    open,
    onOpenChange: setOpen,
    children: [item && /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverTrigger, {
      ...props,
      className: twMerge("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className),
      children: [item, /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, {
      className: "flex flex-col gap-1 w-(--radix-popover-trigger-width) p-1 fd-scroll-container",
      children: options.map((item$1) => {
        const isActive$1 = selected && item$1.url === selected.url;
        if (!isActive$1 && item$1.unlisted) return;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
          href: item$1.url,
          onClick,
          ...item$1.props,
          className: twMerge("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", item$1.props?.className),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "shrink-0 size-9 md:mb-auto md:size-5 empty:hidden",
              children: item$1.icon
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [/* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-sm font-medium leading-none",
              children: item$1.title
            }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-[0.8125rem] text-fd-muted-foreground mt-1 empty:hidden",
              children: item$1.description
            })] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: twMerge("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive$1 && "invisible") })
          ]
        }, item$1.url);
      })
    })]
  });
}
function isTabActive(tab, pathname) {
  if (tab.urls) return tab.urls.has(normalize(pathname));
  return isActive(tab.url, pathname, true);
}
function useIsScrollTop({ enabled = true }) {
  const [isTop, setIsTop] = reactExports.useState();
  reactExports.useEffect(() => {
    if (!enabled) return;
    const listener = () => {
      setIsTop(window.scrollY < 10);
    };
    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [enabled]);
  return isTop;
}
const LayoutContext$1 = reactExports.createContext(null);
function LayoutContextProvider({ navTransparentMode = "none", children }) {
  const isTop = useIsScrollTop({ enabled: navTransparentMode === "top" }) ?? true;
  const isNavTransparent = navTransparentMode === "top" ? isTop : navTransparentMode === "always";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutContext$1, {
    value: reactExports.useMemo(() => ({ isNavTransparent }), [isNavTransparent]),
    children
  });
}
function LayoutHeader(props) {
  const { isNavTransparent } = reactExports.use(LayoutContext$1);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", {
    "data-transparent": isNavTransparent,
    ...props,
    children: props.children
  });
}
function LayoutBody({ className, style, children, ...props }) {
  const { collapsed } = useSidebar();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    id: "nd-docs-layout",
    className: twMerge("grid transition-[grid-template-columns] overflow-x-clip min-h-(--fd-docs-height) auto-cols-auto auto-rows-auto [--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-toc-popover-height:0px] [--fd-sidebar-width:0px] [--fd-toc-width:0px]", className),
    "data-sidebar-collapsed": collapsed,
    style: {
      gridTemplate: `"sidebar header toc"
        "sidebar toc-popover toc"
        "sidebar main toc" 1fr / minmax(var(--fd-sidebar-col), 1fr) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) minmax(min-content, 1fr)`,
      "--fd-docs-row-1": "var(--fd-banner-height, 0px)",
      "--fd-docs-row-2": "calc(var(--fd-docs-row-1) + var(--fd-header-height))",
      "--fd-docs-row-3": "calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))",
      "--fd-sidebar-col": collapsed ? "0px" : "var(--fd-sidebar-width)",
      ...style
    },
    ...props,
    children
  });
}
function LayoutTabs({ options, ...props }) {
  const pathname = usePathname();
  const selected = reactExports.useMemo(() => {
    return options.findLast((option) => isTabActive(option, pathname));
  }, [options, pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("flex flex-row items-end gap-6 overflow-auto [grid-area:main]", props.className),
    children: options.map((option, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
      href: option.url,
      className: twMerge("inline-flex border-b-2 border-transparent transition-colors items-center pb-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap hover:text-fd-accent-foreground", option.unlisted && selected !== option && "hidden", selected === option && "border-fd-primary text-fd-primary"),
      children: option.title
    }, i))
  });
}
var i18n_exports = {};
__reExport(i18n_exports, import__fumadocs_ui_contexts_i18n);
var search_exports = {};
__reExport(search_exports, import__fumadocs_ui_contexts_search);
function SearchToggle({ hideIfDisabled, size = "icon-sm", color = "ghost", ...props }) {
  const { setOpenSearch, enabled } = (0, search_exports.useSearchContext)();
  if (hideIfDisabled && !enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    type: "button",
    className: twMerge(buttonVariants({
      size,
      color
    }), props.className),
    "data-search": "",
    "aria-label": "Open Search",
    onClick: () => {
      setOpenSearch(true);
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, {})
  });
}
function LargeSearchToggle({ hideIfDisabled, ...props }) {
  const { enabled, hotKey, setOpenSearch } = (0, search_exports.useSearchContext)();
  const { text } = (0, i18n_exports.useI18n)();
  if (hideIfDisabled && !enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
    type: "button",
    "data-search-full": "",
    ...props,
    className: twMerge("inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground", props.className),
    onClick: () => {
      setOpenSearch(true);
    },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4" }),
      text.search,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "ms-auto inline-flex gap-0.5",
        children: hotKey.map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", {
          className: "rounded-md border bg-fd-background px-1.5",
          children: k.display
        }, i))
      })
    ]
  });
}
function createLinkItemRenderer({ SidebarFolder: SidebarFolder2, SidebarFolderContent: SidebarFolderContent2, SidebarFolderLink: SidebarFolderLink2, SidebarFolderTrigger: SidebarFolderTrigger2, SidebarItem: SidebarItem2 }) {
  return function SidebarLinkItem2({ item, ...props }) {
    if (item.type === "custom") return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ...props,
      children: item.children
    });
    if (item.type === "menu") return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarFolder2, {
      ...props,
      children: [item.url ? /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarFolderLink2, {
        href: item.url,
        external: item.external,
        children: [item.icon, item.text]
      }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarFolderTrigger2, { children: [item.icon, item.text] }), /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarFolderContent2, { children: item.items.map((child, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarLinkItem2, { item: child }, i)) })]
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem2, {
      href: item.url,
      icon: item.icon,
      external: item.external,
      ...props,
      children: item.text
    });
  };
}
function createPageTreeRenderer({ SidebarFolder: SidebarFolder2, SidebarFolderContent: SidebarFolderContent2, SidebarFolderLink: SidebarFolderLink2, SidebarFolderTrigger: SidebarFolderTrigger2, SidebarSeparator: SidebarSeparator2, SidebarItem: SidebarItem2 }) {
  function PageTreeFolder({ item, children }) {
    const path = (0, tree_exports.useTreePath)();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarFolder2, {
      collapsible: item.collapsible,
      active: path.includes(item),
      defaultOpen: item.defaultOpen,
      children: [item.index ? /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarFolderLink2, {
        href: item.index.url,
        external: item.index.external,
        children: [item.icon, item.name]
      }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarFolderTrigger2, { children: [item.icon, item.name] }), /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarFolderContent2, { children })]
    });
  }
  return function SidebarPageTree2(components) {
    const { root } = (0, tree_exports.useTreeContext)();
    const { Separator, Item, Folder = PageTreeFolder } = components;
    return reactExports.useMemo(() => {
      function renderSidebarList(items) {
        return items.map((item, i) => {
          if (item.type === "separator") {
            if (Separator) return /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { item }, i);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarSeparator2, { children: [item.icon, item.name] }, i);
          }
          if (item.type === "folder") return /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, {
            item,
            children: renderSidebarList(item.children)
          }, i);
          if (Item) return /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { item }, item.url);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem2, {
            href: item.url,
            external: item.external,
            icon: item.icon,
            children: item.name
          }, item.url);
        });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: renderSidebarList(root.children) }, root.$id);
    }, [
      Folder,
      Item,
      Separator,
      root
    ]);
  };
}
function mergeRefs$1(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(value);
      else if (ref) ref.current = value;
    });
  };
}
const itemVariants$1 = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0", { variants: {
  variant: {
    link: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors",
    button: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
  },
  highlight: { true: "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:start-2.5" }
} });
function getItemOffset$1(depth) {
  return `calc(${2 + 3 * depth} * var(--spacing))`;
}
function SidebarContent({ ref: refProp, className, children, ...props }) {
  const ref = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContent$1, { children: ({ collapsed, hovered, ref: asideRef, ...rest }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    "data-sidebar-placeholder": "",
    className: "sticky top-(--fd-docs-row-1) z-20 [grid-area:sidebar] pointer-events-none *:pointer-events-auto h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] md:layout:[--fd-sidebar-width:268px] max-md:hidden",
    children: [collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "absolute start-0 inset-y-0 w-4",
      ...rest
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("aside", {
      id: "nd-sidebar",
      ref: mergeRefs$1(ref, refProp, asideRef),
      "data-collapsed": collapsed,
      "data-hovered": collapsed && hovered,
      className: twMerge("absolute flex flex-col w-full start-0 inset-y-0 items-end bg-fd-card text-sm border-e duration-250 *:w-(--fd-sidebar-width)", collapsed && ["inset-y-2 rounded-xl transition-transform border w-(--fd-sidebar-width)", hovered ? "shadow-lg translate-x-2 rtl:-translate-x-2" : "-translate-x-(--fd-sidebar-width) rtl:translate-x-full"], ref.current && ref.current.getAttribute("data-collapsed") === "true" !== collapsed && "transition-[width,inset-block,translate,background-color]", className),
      ...props,
      ...rest,
      children
    })]
  }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    "data-sidebar-panel": "",
    className: twMerge("fixed flex top-[calc(--spacing(4)+var(--fd-docs-row-3))] start-4 shadow-lg transition-opacity rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10", (!collapsed || hovered) && "pointer-events-none opacity-0"),
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SidebarCollapseTrigger, {
      className: twMerge(buttonVariants({
        color: "ghost",
        size: "icon-sm",
        className: "rounded-lg"
      })),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, {})
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(SearchToggle, {
      className: "rounded-lg",
      hideIfDisabled: true
    })]
  })] }) });
}
function SidebarDrawer({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SidebarDrawerOverlay, { className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out" }), /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarDrawerContent, {
    className: twMerge("fixed text-[0.9375rem] flex flex-col shadow-lg border-s end-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", className),
    ...props,
    children
  })] });
}
function SidebarSeparator({ className, style, children, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarSeparator$1, {
    className: twMerge("[&_svg]:size-4 [&_svg]:shrink-0", className),
    style: {
      paddingInlineStart: getItemOffset$1(depth),
      ...style
    },
    ...props,
    children
  });
}
function SidebarItem({ className, style, children, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem$1, {
    className: twMerge(itemVariants$1({
      variant: "link",
      highlight: depth >= 1
    }), className),
    style: {
      paddingInlineStart: getItemOffset$1(depth),
      ...style
    },
    ...props,
    children
  });
}
function SidebarFolderTrigger({ className, style, ...props }) {
  const { depth, collapsible } = useFolder();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarFolderTrigger$1, {
    className: twMerge(itemVariants$1({ variant: collapsible ? "button" : null }), "w-full", className),
    style: {
      paddingInlineStart: getItemOffset$1(depth - 1),
      ...style
    },
    ...props,
    children: props.children
  });
}
function SidebarFolderLink({ className, style, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarFolderLink$1, {
    className: twMerge(itemVariants$1({
      variant: "link",
      highlight: depth > 1
    }), "w-full", className),
    style: {
      paddingInlineStart: getItemOffset$1(depth - 1),
      ...style
    },
    ...props,
    children: props.children
  });
}
function SidebarFolderContent({ className, children, ...props }) {
  const depth = useFolderDepth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarFolderContent$1, {
    className: twMerge("relative", depth === 1 && "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:start-2.5", className),
    ...props,
    children
  });
}
const SidebarPageTree = createPageTreeRenderer({
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarItem,
  SidebarSeparator
});
const SidebarLinkItem = createLinkItemRenderer({
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarItem
});
function resolveLinkItems({ links = [], githubUrl }) {
  const result = [...links];
  if (githubUrl) result.push({
    type: "icon",
    url: githubUrl,
    text: "Github",
    label: "GitHub",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
      role: "img",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
    }),
    external: true
  });
  return result;
}
function renderTitleNav({ title, url = "/" }, props) {
  if (typeof title === "function") return title({
    href: url,
    ...props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
    href: url,
    ...props,
    children: title
  });
}
function LanguageToggle(props) {
  const context = (0, i18n_exports.useI18n)();
  if (!context.locales) throw new Error("Missing `<I18nProvider />`");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, {
    "aria-label": context.text.chooseLanguage,
    ...props,
    className: twMerge(buttonVariants({
      color: "ghost",
      className: "gap-1.5 p-1.5"
    }), props.className),
    children: props.children
  }), /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, {
    className: "flex flex-col overflow-x-hidden p-0",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      className: "mb-1 p-2 text-xs font-medium text-fd-muted-foreground",
      children: context.text.chooseLanguage
    }), context.locales.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
      type: "button",
      className: twMerge("p-2 text-start text-sm", item.locale === context.locale ? "bg-fd-primary/10 font-medium text-fd-primary" : "hover:bg-fd-accent hover:text-fd-accent-foreground"),
      onClick: () => {
        context.onChange?.(item.locale);
      },
      children: item.name
    }, item.locale))]
  })] });
}
function LanguageToggleText(props) {
  const context = (0, i18n_exports.useI18n)();
  const text = context.locales?.find((item) => item.locale === context.locale)?.name;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    ...props,
    children: text
  });
}
const itemVariants = cva("size-6.5 rounded-full p-1.5 text-fd-muted-foreground", { variants: { active: {
  true: "bg-fd-accent text-fd-accent-foreground",
  false: "text-fd-muted-foreground"
} } });
const full = [
  ["light", Sun],
  ["dark", Moon],
  ["system", Airplay]
];
function ThemeToggle({ className, mode = "light-dark", ...props }) {
  const { setTheme, theme, resolvedTheme } = z();
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  const container = twMerge("inline-flex items-center rounded-full border p-1", className);
  if (mode === "light-dark") {
    const value$1 = mounted ? resolvedTheme : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
      className: container,
      "aria-label": `Toggle Theme`,
      onClick: () => setTheme(value$1 === "light" ? "dark" : "light"),
      "data-theme-toggle": "",
      children: full.map(([key, Icon]) => {
        if (key === "system") return;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
          fill: "currentColor",
          className: twMerge(itemVariants({ active: value$1 === key }))
        }, key);
      })
    });
  }
  const value = mounted ? theme : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: container,
    "data-theme-toggle": "",
    ...props,
    children: full.map(([key, Icon]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
      "aria-label": key,
      className: twMerge(itemVariants({ active: value === key })),
      onClick: () => setTheme(key),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
        className: "size-full",
        fill: "currentColor"
      })
    }, key))
  });
}
function LinkItem({ ref, item, ...props }) {
  const pathname = usePathname();
  const activeType = item.active ?? "url";
  const active = activeType !== "none" && isActive(item.url, pathname, activeType === "nested-url");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
    ref,
    href: item.url,
    external: item.external,
    ...props,
    "data-active": active,
    children: props.children
  });
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(value);
      else if (ref != null) ref.current = value;
    });
  };
}
const ActiveAnchorContext = reactExports.createContext([]);
const ScrollContext = reactExports.createContext({ current: null });
function useActiveAnchor() {
  return reactExports.useContext(ActiveAnchorContext)[0];
}
function useActiveAnchors() {
  return reactExports.useContext(ActiveAnchorContext);
}
function ScrollProvider({ containerRef, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollContext.Provider, {
    value: containerRef,
    children
  });
}
function AnchorProvider({ toc, single = false, children }) {
  const headings = reactExports.useMemo(() => {
    return toc.map((item) => item.url.split("#")[1]);
  }, [toc]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveAnchorContext.Provider, {
    value: useAnchorObserver(headings, single),
    children
  });
}
function TOCItem$2({ ref, onActiveChange = () => null, ...props }) {
  const containerRef = reactExports.useContext(ScrollContext);
  const anchorRef = reactExports.useRef(null);
  const activeOrder = useActiveAnchors().indexOf(props.href.slice(1));
  const isActive2 = activeOrder !== -1;
  const shouldScroll = activeOrder === 0;
  const onActiveChangeEvent = reactExports.useEffectEvent(onActiveChange);
  reactExports.useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const container = containerRef.current;
    if (container && anchor && shouldScroll) e(anchor, {
      behavior: "smooth",
      block: "center",
      inline: "center",
      scrollMode: "always",
      boundary: container
    });
  }, [containerRef, shouldScroll]);
  reactExports.useEffect(() => {
    return () => onActiveChangeEvent(isActive2);
  }, [isActive2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
    ref: mergeRefs(anchorRef, ref),
    "data-active": isActive2,
    ...props,
    children: props.children
  });
}
function useAnchorObserver(watch, single) {
  const observerRef = reactExports.useRef(null);
  const [activeAnchor, setActiveAnchor] = reactExports.useState(() => []);
  const stateRef = reactExports.useRef(null);
  const onChange = reactExports.useEffectEvent((entries) => {
    stateRef.current ??= { visible: /* @__PURE__ */ new Set() };
    const state = stateRef.current;
    for (const entry of entries) if (entry.isIntersecting) state.visible.add(entry.target.id);
    else state.visible.delete(entry.target.id);
    if (state.visible.size === 0) {
      const viewTop = entries.length > 0 ? entries[0]?.rootBounds?.top ?? 0 : 0;
      let fallback;
      let min = -1;
      for (const id of watch) {
        const element = document.getElementById(id);
        if (!element) continue;
        const d = Math.abs(viewTop - element.getBoundingClientRect().top);
        if (min === -1 || d < min) {
          fallback = element;
          min = d;
        }
      }
      setActiveAnchor(fallback ? [fallback.id] : []);
    } else {
      const items = watch.filter((item) => state.visible.has(item));
      setActiveAnchor(single ? items.slice(0, 1) : items);
    }
  });
  reactExports.useEffect(() => {
    if (observerRef.current) return;
    observerRef.current = new IntersectionObserver(onChange, {
      rootMargin: "0px",
      threshold: 0.98
    });
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);
  reactExports.useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;
    const elements = watch.flatMap((heading) => document.getElementById(heading) ?? []);
    for (const element of elements) observer.observe(element);
    return () => {
      for (const element of elements) observer.unobserve(element);
    };
  }, [watch]);
  return activeAnchor;
}
const TOCContext = reactExports.createContext([]);
function useTOCItems() {
  return reactExports.use(TOCContext);
}
function TOCProvider({ toc, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TOCContext, {
    value: toc,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnchorProvider, {
      toc,
      ...props,
      children
    })
  });
}
function TOCScrollArea({ ref, className, ...props }) {
  const viewRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref: mergeRefs$1(viewRef, ref),
    className: twMerge("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProvider, {
      containerRef: viewRef,
      children: props.children
    })
  });
}
function TocThumb({ containerRef, ...props }) {
  const thumbRef = reactExports.useRef(null);
  const active = useActiveAnchors();
  function update(info) {
    const element = thumbRef.current;
    if (!element) return;
    element.style.setProperty("--fd-top", `${info[0]}px`);
    element.style.setProperty("--fd-height", `${info[1]}px`);
  }
  const onPrint = reactExports.useEffectEvent(() => {
    if (containerRef.current) update(calc(containerRef.current, active));
  });
  reactExports.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const observer = new ResizeObserver(onPrint);
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [containerRef]);
  useOnChange(active, () => {
    if (containerRef.current) update(calc(containerRef.current, active));
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref: thumbRef,
    "data-hidden": active.length === 0,
    ...props
  });
}
function calc(container, active) {
  if (active.length === 0 || container.clientHeight === 0) return [0, 0];
  let upper = Number.MAX_VALUE, lower = 0;
  for (const item of active) {
    const element = container.querySelector(`a[href="#${item}"]`);
    if (!element) continue;
    const styles = getComputedStyle(element);
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
    lower = Math.max(lower, element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom));
  }
  return [upper, lower - upper];
}
const import__fumadocs_ui_components_toc_index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TOCProvider,
  TOCScrollArea,
  TocThumb,
  useTOCItems
}, Symbol.toStringTag, { value: "Module" }));
var toc_exports = {};
__reExport(toc_exports, import__fumadocs_ui_components_toc_index);
const footerCache = /* @__PURE__ */ new Map();
function useFooterItems() {
  const { root } = useTreeContext();
  const cached = footerCache.get(root.$id);
  if (cached) return cached;
  const list = [];
  function onNode(node) {
    if (node.type === "folder") {
      if (node.index) onNode(node.index);
      for (const child of node.children) onNode(child);
    } else if (node.type === "page" && !node.external) list.push(node);
  }
  for (const child of root.children) onNode(child);
  footerCache.set(root.$id, list);
  return list;
}
const TocPopoverContext$1 = reactExports.createContext(null);
function PageTOCPopover$1({ className, children, ...rest }) {
  const ref = reactExports.useRef(null);
  const [open, setOpen] = reactExports.useState(false);
  const { isNavTransparent } = reactExports.use(LayoutContext$1);
  const onClick = reactExports.useEffectEvent((e2) => {
    if (!open) return;
    if (ref.current && !ref.current.contains(e2.target)) setOpen(false);
  });
  reactExports.useEffect(() => {
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TocPopoverContext$1, {
    value: reactExports.useMemo(() => ({
      open,
      setOpen
    }), [setOpen, open]),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, {
      open,
      onOpenChange: setOpen,
      "data-toc-popover": "",
      className: twMerge("sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]", className),
      ...rest,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("header", {
        ref,
        className: twMerge("border-b backdrop-blur-sm transition-colors", (!isNavTransparent || open) && "bg-fd-background/80", open && "shadow-lg"),
        children
      })
    })
  });
}
function PageTOCPopoverTrigger$1({ className, ...props }) {
  const { text } = (0, i18n_exports.useI18n)();
  const { open } = reactExports.use(TocPopoverContext$1);
  const items = (0, toc_exports.useTOCItems)();
  const active = useActiveAnchor();
  const selected = reactExports.useMemo(() => items.findIndex((item) => active === item.url.slice(1)), [items, active]);
  const path = (0, tree_exports.useTreePath)().at(-1);
  const showItem = selected !== -1 && !open;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsibleTrigger, {
    className: twMerge("flex w-full h-10 items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", className),
    "data-toc-popover-trigger": "",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressCircle$1, {
        value: (selected + 1) / Math.max(1, items.length),
        max: 1,
        className: twMerge("shrink-0", open && "text-fd-primary")
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
        className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: twMerge("truncate transition-[opacity,translate,color]", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"),
          children: path?.name ?? text.toc
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: twMerge("truncate transition-[opacity,translate]", !showItem && "opacity-0 translate-y-full pointer-events-none"),
          children: items[selected]?.title
        })]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: twMerge("shrink-0 transition-transform mx-0.5", open && "rotate-180") })
    ]
  });
}
function clamp$1(input, min, max) {
  if (input < min) return min;
  if (input > max) return max;
  return input;
}
function ProgressCircle$1({ value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps }) {
  const normalizedValue = clamp$1(value, min, max);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = normalizedValue / max * circumference;
  const circleProps = {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    fill: "none",
    strokeWidth
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
    role: "progressbar",
    viewBox: `0 0 ${size} ${size}`,
    "aria-valuenow": normalizedValue,
    "aria-valuemin": min,
    "aria-valuemax": max,
    ...restSvgProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
      ...circleProps,
      className: "stroke-current/25"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
      ...circleProps,
      stroke: "currentColor",
      strokeDasharray: circumference,
      strokeDashoffset: circumference - progress,
      strokeLinecap: "round",
      transform: `rotate(-90 ${size / 2} ${size / 2})`,
      className: "transition-all"
    })]
  });
}
function PageTOCPopoverContent$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, {
    "data-toc-popover-content": "",
    ...props,
    className: twMerge("flex flex-col px-4 max-h-[50vh] md:px-6", props.className),
    children: props.children
  });
}
function PageLastUpdate$1({ date: value, ...props }) {
  const { text } = (0, i18n_exports.useI18n)();
  const [date, setDate] = reactExports.useState("");
  reactExports.useEffect(() => {
    setDate(value.toLocaleDateString());
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    ...props,
    className: twMerge("text-sm text-fd-muted-foreground", props.className),
    children: [
      text.lastUpdate,
      " ",
      date
    ]
  });
}
function PageFooter$1({ items, children, className, ...props }) {
  const footerList = useFooterItems();
  const pathname = usePathname();
  const { previous, next } = reactExports.useMemo(() => {
    if (items) return items;
    const idx = footerList.findIndex((item) => isActive(item.url, pathname, false));
    if (idx === -1) return {};
    return {
      previous: footerList[idx - 1],
      next: footerList[idx + 1]
    };
  }, [
    footerList,
    items,
    pathname
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: twMerge("@container grid gap-4", previous && next ? "grid-cols-2" : "grid-cols-1", className),
    ...props,
    children: [previous && /* @__PURE__ */ jsxRuntimeExports.jsx(FooterItem$1, {
      item: previous,
      index: 0
    }), next && /* @__PURE__ */ jsxRuntimeExports.jsx(FooterItem$1, {
      item: next,
      index: 1
    })]
  }), children] });
}
function FooterItem$1({ item, index }) {
  const { text } = (0, i18n_exports.useI18n)();
  const Icon = index === 0 ? ChevronLeft : ChevronRight;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
    href: item.url,
    className: twMerge("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"),
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: twMerge("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"),
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: item.name })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      className: "text-fd-muted-foreground truncate",
      children: item.description ?? (index === 0 ? text.previousPage : text.nextPage)
    })]
  });
}
function PageBreadcrumb$1({ includeRoot, includeSeparator, includePage, ...props }) {
  const path = (0, tree_exports.useTreePath)();
  const { root } = (0, tree_exports.useTreeContext)();
  const items = reactExports.useMemo(() => {
    return getBreadcrumbItemsFromPath(root, path, {
      includePage,
      includeSeparator,
      includeRoot
    });
  }, [
    includePage,
    includeRoot,
    includeSeparator,
    path,
    root
  ]);
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className),
    children: items.map((item, i) => {
      const className = twMerge("truncate", i === items.length - 1 && "text-fd-primary font-medium");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [i !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
        href: item.url,
        className: twMerge(className, "transition-opacity hover:opacity-80"),
        children: item.name
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className,
        children: item.name
      })] }, i);
    })
  });
}
function TOCItems$1({ ref, className, ...props }) {
  const containerRef = reactExports.useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  if (items.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
    children: text.tocNoHeadings
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TocThumb, {
    containerRef,
    className: "absolute top-(--fd-top) h-(--fd-height) w-0.5 rounded-e-sm bg-fd-primary transition-[top,height] ease-linear"
  }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref: mergeRefs$1(ref, containerRef),
    className: twMerge("flex flex-col border-s border-fd-foreground/10", className),
    ...props,
    children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(TOCItem$1, { item }, item.url))
  })] });
}
function TOCItem$1({ item }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TOCItem$2, {
    href: item.url,
    className: twMerge("prose py-1.5 text-sm text-fd-muted-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", item.depth <= 2 && "ps-3", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8"),
    children: item.title
  });
}
const import__fumadocs_ui_components_toc_default = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TOCItems: TOCItems$1
}, Symbol.toStringTag, { value: "Module" }));
var default_exports = {};
__reExport(default_exports, import__fumadocs_ui_components_toc_default);
function TOCItems({ ref, className, ...props }) {
  const containerRef = reactExports.useRef(null);
  const items = useTOCItems();
  const { text } = useI18n();
  const [svg, setSvg] = reactExports.useState();
  reactExports.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    function onResize() {
      if (container.clientHeight === 0) return;
      let w = 0, h = 0;
      const d = [];
      for (let i = 0; i < items.length; i++) {
        const element = container.querySelector(`a[href="#${items[i].url.slice(1)}"]`);
        if (!element) continue;
        const styles = getComputedStyle(element);
        const offset = getLineOffset(items[i].depth) + 1, top = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
        w = Math.max(offset, w);
        h = Math.max(h, bottom);
        d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
        d.push(`L${offset} ${bottom}`);
      }
      setSvg({
        path: d.join(" "),
        width: w + 1,
        height: h
      });
    }
    const observer = new ResizeObserver(onResize);
    onResize();
    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [items]);
  if (items.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
    children: text.tocNoHeadings
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [svg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "absolute start-0 top-0 rtl:-scale-x-100",
    style: {
      width: svg.width,
      height: svg.height,
      maskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`)}")`
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TocThumb, {
      containerRef,
      className: "absolute w-full top-(--fd-top) h-(--fd-height) bg-fd-primary transition-[top,height]"
    })
  }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref: mergeRefs$1(containerRef, ref),
    className: twMerge("flex flex-col", className),
    ...props,
    children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TOCItem, {
      item,
      upper: items[i - 1]?.depth,
      lower: items[i + 1]?.depth
    }, item.url))
  })] });
}
function getItemOffset(depth) {
  if (depth <= 2) return 14;
  if (depth === 3) return 26;
  return 36;
}
function getLineOffset(depth) {
  return depth >= 3 ? 10 : 0;
}
function TOCItem({ item, upper = item.depth, lower = item.depth }) {
  const offset = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TOCItem$2, {
    href: item.url,
    style: { paddingInlineStart: getItemOffset(item.depth) },
    className: "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",
    children: [
      offset !== upperOffset && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        className: "absolute -top-1.5 start-0 size-4 rtl:-scale-x-100",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("line", {
          x1: upperOffset,
          y1: "0",
          x2: offset,
          y2: "12",
          className: "stroke-fd-foreground/10",
          strokeWidth: "1"
        })
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: twMerge("absolute inset-y-0 w-px bg-fd-foreground/10", offset !== upperOffset && "top-1.5", offset !== lowerOffset && "bottom-1.5"),
        style: { insetInlineStart: offset }
      }),
      item.title
    ]
  });
}
const import__fumadocs_ui_components_toc_clerk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TOCItems
}, Symbol.toStringTag, { value: "Module" }));
var clerk_exports = {};
__reExport(clerk_exports, import__fumadocs_ui_components_toc_clerk);
const LayoutContext = reactExports.createContext(null);
const TocPopoverContext = reactExports.createContext(null);
function PageTOCPopover({ className, children, ...rest }) {
  const ref = reactExports.useRef(null);
  const [open, setOpen] = reactExports.useState(false);
  const { isNavTransparent } = reactExports.use(LayoutContext);
  const onClick = reactExports.useEffectEvent((e2) => {
    if (!open) return;
    if (ref.current && !ref.current.contains(e2.target)) setOpen(false);
  });
  reactExports.useEffect(() => {
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TocPopoverContext, {
    value: reactExports.useMemo(() => ({
      open,
      setOpen
    }), [setOpen, open]),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, {
      open,
      onOpenChange: setOpen,
      "data-toc-popover": "",
      className: twMerge("sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]", className),
      ...rest,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("header", {
        ref,
        className: twMerge("border-b backdrop-blur-sm transition-colors", (!isNavTransparent || open) && "bg-fd-background/80", open && "shadow-lg"),
        children
      })
    })
  });
}
function PageTOCPopoverTrigger({ className, ...props }) {
  const { text } = (0, i18n_exports.useI18n)();
  const { open } = reactExports.use(TocPopoverContext);
  const items = (0, toc_exports.useTOCItems)();
  const active = useActiveAnchor();
  const selected = reactExports.useMemo(() => items.findIndex((item) => active === item.url.slice(1)), [items, active]);
  const path = (0, tree_exports.useTreePath)().at(-1);
  const showItem = selected !== -1 && !open;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsibleTrigger, {
    className: twMerge("flex w-full h-10 items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", className),
    "data-toc-popover-trigger": "",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressCircle, {
        value: (selected + 1) / Math.max(1, items.length),
        max: 1,
        className: twMerge("shrink-0", open && "text-fd-primary")
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
        className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: twMerge("truncate transition-[opacity,translate,color]", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"),
          children: path?.name ?? text.toc
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: twMerge("truncate transition-[opacity,translate]", !showItem && "opacity-0 translate-y-full pointer-events-none"),
          children: items[selected]?.title
        })]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: twMerge("shrink-0 transition-transform mx-0.5", open && "rotate-180") })
    ]
  });
}
function clamp(input, min, max) {
  if (input < min) return min;
  if (input > max) return max;
  return input;
}
function ProgressCircle({ value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps }) {
  const normalizedValue = clamp(value, min, max);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = normalizedValue / max * circumference;
  const circleProps = {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    fill: "none",
    strokeWidth
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
    role: "progressbar",
    viewBox: `0 0 ${size} ${size}`,
    "aria-valuenow": normalizedValue,
    "aria-valuemin": min,
    "aria-valuemax": max,
    ...restSvgProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
      ...circleProps,
      className: "stroke-current/25"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
      ...circleProps,
      stroke: "currentColor",
      strokeDasharray: circumference,
      strokeDashoffset: circumference - progress,
      strokeLinecap: "round",
      transform: `rotate(-90 ${size / 2} ${size / 2})`,
      className: "transition-all"
    })]
  });
}
function PageTOCPopoverContent(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, {
    "data-toc-popover-content": "",
    ...props,
    className: twMerge("flex flex-col px-4 max-h-[50vh] md:px-6", props.className),
    children: props.children
  });
}
function PageLastUpdate({ date: value, ...props }) {
  const { text } = (0, i18n_exports.useI18n)();
  const [date, setDate] = reactExports.useState("");
  reactExports.useEffect(() => {
    setDate(value.toLocaleDateString());
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
    ...props,
    className: twMerge("text-sm text-fd-muted-foreground", props.className),
    children: [
      text.lastUpdate,
      " ",
      date
    ]
  });
}
function PageFooter({ items, children, className, ...props }) {
  const footerList = useFooterItems();
  const pathname = usePathname();
  const { previous, next } = reactExports.useMemo(() => {
    if (items) return items;
    const idx = footerList.findIndex((item) => isActive(item.url, pathname, false));
    if (idx === -1) return {};
    return {
      previous: footerList[idx - 1],
      next: footerList[idx + 1]
    };
  }, [
    footerList,
    items,
    pathname
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: twMerge("@container grid gap-4", previous && next ? "grid-cols-2" : "grid-cols-1", className),
    ...props,
    children: [previous && /* @__PURE__ */ jsxRuntimeExports.jsx(FooterItem, {
      item: previous,
      index: 0
    }), next && /* @__PURE__ */ jsxRuntimeExports.jsx(FooterItem, {
      item: next,
      index: 1
    })]
  }), children] });
}
function FooterItem({ item, index }) {
  const { text } = (0, i18n_exports.useI18n)();
  const Icon = index === 0 ? ChevronLeft : ChevronRight;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
    href: item.url,
    className: twMerge("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"),
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: twMerge("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"),
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: item.name })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      className: "text-fd-muted-foreground truncate",
      children: item.description ?? (index === 0 ? text.previousPage : text.nextPage)
    })]
  });
}
function PageBreadcrumb({ includeRoot, includeSeparator, includePage, ...props }) {
  const path = (0, tree_exports.useTreePath)();
  const { root } = (0, tree_exports.useTreeContext)();
  const items = reactExports.useMemo(() => {
    return getBreadcrumbItemsFromPath(root, path, {
      includePage,
      includeSeparator,
      includeRoot
    });
  }, [
    includePage,
    includeRoot,
    includeSeparator,
    path,
    root
  ]);
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    className: twMerge("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className),
    children: items.map((item, i) => {
      const className = twMerge("truncate", i === items.length - 1 && "text-fd-primary font-medium");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [i !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
        href: item.url,
        className: twMerge(className, "transition-opacity hover:opacity-80"),
        children: item.name
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className,
        children: item.name
      })] }, i);
    })
  });
}
const NavigationMenu = Root2$1;
const NavigationMenuList = List;
const NavigationMenuItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuItem$1, {
  ref,
  className: twMerge("list-none", className),
  ...props,
  children
}));
NavigationMenuItem.displayName = NavigationMenuItem$1.displayName;
const NavigationMenuTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, {
  ref,
  className: twMerge("data-[state=open]:bg-fd-accent/50", className),
  ...props,
  children
}));
NavigationMenuTrigger.displayName = Trigger.displayName;
const NavigationMenuContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {
  ref,
  className: twMerge("absolute inset-x-0 top-0 overflow-auto fd-scroll-container max-h-[80svh] data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft", className),
  ...props
}));
NavigationMenuContent.displayName = Content.displayName;
const NavigationMenuLink = Link$2;
const NavigationMenuViewport = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
  ref,
  className: "flex w-full justify-center",
  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport$1, {
    ...props,
    className: twMerge("relative h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in", className)
  })
}));
NavigationMenuViewport.displayName = Viewport$1.displayName;
const navItemVariants = cva("[&_svg]:size-4", {
  variants: { variant: {
    main: "inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary",
    button: buttonVariants({
      color: "secondary",
      className: "gap-1.5"
    }),
    icon: buttonVariants({
      color: "ghost",
      size: "icon"
    })
  } },
  defaultVariants: { variant: "main" }
});
function Header({ nav = {}, i18n = false, links, githubUrl, themeSwitch = {}, searchToggle = {} }) {
  const { navItems, menuItems } = reactExports.useMemo(() => {
    const navItems$1 = [];
    const menuItems$1 = [];
    for (const item of resolveLinkItems({
      links,
      githubUrl
    })) switch (item.on ?? "all") {
      case "menu":
        menuItems$1.push(item);
        break;
      case "nav":
        navItems$1.push(item);
        break;
      default:
        navItems$1.push(item);
        menuItems$1.push(item);
    }
    return {
      navItems: navItems$1,
      menuItems: menuItems$1
    };
  }, [links, githubUrl]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(HeaderNavigationMenu, {
    transparentMode: nav.transparentMode,
    children: [
      renderTitleNav(nav, { className: "inline-flex items-center gap-2.5 font-semibold" }),
      nav.children,
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
        className: "flex flex-row items-center gap-2 px-6 max-sm:hidden",
        children: navItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLinkItem, {
          item,
          className: "text-sm"
        }, i))
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden",
        children: [
          searchToggle.enabled !== false && (searchToggle.components?.lg ?? /* @__PURE__ */ jsxRuntimeExports.jsx(LargeSearchToggle, {
            className: "w-full rounded-full ps-2.5 max-w-[240px]",
            hideIfDisabled: true
          })),
          themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, { mode: themeSwitch?.mode })),
          i18n && /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggle, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
            className: "flex flex-row gap-2 items-center empty:hidden",
            children: navItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLinkItem, {
              className: twMerge(item.type === "icon" && "-mx-1 first:ms-0 last:me-0"),
              item
            }, i))
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
        className: "flex flex-row items-center ms-auto -me-1.5 lg:hidden",
        children: [searchToggle.enabled !== false && (searchToggle.components?.sm ?? /* @__PURE__ */ jsxRuntimeExports.jsx(SearchToggle, {
          className: "p-2",
          hideIfDisabled: true
        })), /* @__PURE__ */ jsxRuntimeExports.jsxs(NavigationMenuItem, { children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuTrigger, {
          "aria-label": "Toggle Menu",
          className: twMerge(buttonVariants({
            size: "icon",
            color: "ghost",
            className: "group [&_svg]:size-5.5"
          })),
          onPointerMove: nav.enableHoverToOpen ? void 0 : (e2) => e2.preventDefault(),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "transition-transform duration-300 group-data-[state=open]:rotate-180" })
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs(NavigationMenuContent, {
          className: "flex flex-col p-4 sm:flex-row sm:items-center sm:justify-end",
          children: [menuItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MobileNavigationMenuLinkItem, {
            item,
            className: "sm:hidden"
          }, i)), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "-ms-1.5 flex flex-row items-center gap-2 max-sm:mt-2",
            children: [
              menuItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MobileNavigationMenuLinkItem, {
                item,
                className: twMerge(item.type === "icon" && "-mx-1 first:ms-0")
              }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                role: "separator",
                className: "flex-1"
              }),
              i18n && /* @__PURE__ */ jsxRuntimeExports.jsxs(LanguageToggle, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "size-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggleText, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-3 text-fd-muted-foreground" })
              ] }),
              themeSwitch.enabled !== false && (themeSwitch.component ?? /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, { mode: themeSwitch?.mode }))
            ]
          })]
        })] })]
      })
    ]
  });
}
function isSecondary(item) {
  if ("secondary" in item && item.secondary != null) return item.secondary;
  return item.type === "icon";
}
function HeaderNavigationMenu({ transparentMode = "none", ...props }) {
  const [value, setValue] = reactExports.useState("");
  const isTop = useIsScrollTop({ enabled: transparentMode === "top" }) ?? true;
  const isTransparent = transparentMode === "top" ? isTop : transparentMode === "always";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenu, {
    value,
    onValueChange: setValue,
    asChild: true,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("header", {
      id: "nd-nav",
      ...props,
      className: twMerge("sticky h-14 top-0 z-40", props.className),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: twMerge("backdrop-blur-lg border-b transition-colors *:mx-auto *:max-w-(--fd-layout-width)", value.length > 0 && "max-lg:shadow-lg max-lg:rounded-b-2xl", (!isTransparent || value.length > 0) && "bg-fd-background/80"),
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuList, {
          className: "flex h-14 w-full items-center px-4",
          asChild: true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { children: props.children })
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuViewport, {})]
      })
    })
  });
}
function NavigationMenuLinkItem({ item, ...props }) {
  if (item.type === "custom") return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ...props,
    children: item.children
  });
  if (item.type === "menu") {
    const children = item.items.map((child, j) => {
      if (child.type === "custom") return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: child.children }, j);
      const { banner = child.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4",
        children: child.icon
      }) : null, ...rest } = child.menu ?? {};
      return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLink, {
        asChild: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
          href: child.url,
          external: child.external,
          ...rest,
          className: twMerge("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground", rest.className),
          children: rest.children ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            banner,
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-base font-medium",
              children: child.text
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-sm text-fd-muted-foreground empty:hidden",
              children: child.description
            })
          ] })
        })
      }, `${j}-${child.url}`);
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(NavigationMenuItem, {
      ...props,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuTrigger, {
        className: twMerge(navItemVariants(), "rounded-md"),
        children: item.url ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
          href: item.url,
          external: item.external,
          children: item.text
        }) : item.text
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuContent, {
        className: "grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3",
        children
      })]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuItem, {
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLink, {
      asChild: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinkItem, {
        item,
        "aria-label": item.type === "icon" ? item.label : void 0,
        className: twMerge(navItemVariants({ variant: item.type })),
        children: item.type === "icon" ? item.icon : item.text
      })
    })
  });
}
function MobileNavigationMenuLinkItem({ item, ...props }) {
  if (item.type === "custom") return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: twMerge("grid", props.className),
    children: item.children
  });
  if (item.type === "menu") {
    const header = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [item.icon, item.text] });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: twMerge("mb-4 flex flex-col", props.className),
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        className: "mb-1 text-sm text-fd-muted-foreground",
        children: item.url ? /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLink, {
          asChild: true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
            href: item.url,
            external: item.external,
            children: header
          })
        }) : header
      }), item.items.map((child, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MobileNavigationMenuLinkItem, { item: child }, i))]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationMenuLink, {
    asChild: true,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LinkItem, {
      item,
      className: twMerge({
        main: "inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",
        icon: buttonVariants({
          size: "icon",
          color: "ghost"
        }),
        button: buttonVariants({
          color: "secondary",
          className: "gap-1.5 [&_svg]:size-4"
        })
      }[item.type ?? "main"], props.className),
      "aria-label": item.type === "icon" ? item.label : void 0,
      children: [item.icon, item.type === "icon" ? void 0 : item.text]
    })
  });
}
const listeners = /* @__PURE__ */ new Map();
const TabsContext$2 = reactExports.createContext(null);
function useTabContext$1() {
  const ctx = reactExports.use(TabsContext$2);
  if (!ctx) throw new Error("You must wrap your component in <Tabs>");
  return ctx;
}
const TabsList$1 = TabsList$2;
const TabsTrigger$1 = TabsTrigger$2;
function Tabs$1({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
  const tabsRef = reactExports.useRef(null);
  const valueToIdMap = reactExports.useMemo(() => /* @__PURE__ */ new Map(), []);
  const [value, setValue] = _value === void 0 ? reactExports.useState(defaultValue) : [_value, reactExports.useEffectEvent((v) => _onValueChange?.(v))];
  reactExports.useLayoutEffect(() => {
    if (!groupId) return;
    let previous = sessionStorage.getItem(groupId);
    if (persist) previous ??= localStorage.getItem(groupId);
    if (previous) setValue(previous);
    const groupListeners = listeners.get(groupId) ?? /* @__PURE__ */ new Set();
    groupListeners.add(setValue);
    listeners.set(groupId, groupListeners);
    return () => {
      groupListeners.delete(setValue);
    };
  }, [
    groupId,
    persist,
    setValue
  ]);
  reactExports.useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    for (const [value$1, id] of valueToIdMap.entries()) if (id === hash) {
      setValue(value$1);
      tabsRef.current?.scrollIntoView();
      break;
    }
  }, [setValue, valueToIdMap]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs$2, {
    ref: mergeRefs$1(ref, tabsRef),
    value,
    onValueChange: (v) => {
      if (updateAnchor) {
        const id = valueToIdMap.get(v);
        if (id) window.history.replaceState(null, "", `#${id}`);
      }
      if (groupId) {
        const groupListeners = listeners.get(groupId);
        if (groupListeners) for (const listener of groupListeners) listener(v);
        sessionStorage.setItem(groupId, v);
        if (persist) localStorage.setItem(groupId, v);
      } else setValue(v);
    },
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContext$2, {
      value: reactExports.useMemo(() => ({ valueToIdMap }), [valueToIdMap]),
      children: props.children
    })
  });
}
function TabsContent$1({ value, ...props }) {
  const { valueToIdMap } = useTabContext$1();
  if (props.id) valueToIdMap.set(value, props.id);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent$2, {
    value,
    ...props,
    children: props.children
  });
}
const TabsContext$1 = reactExports.createContext(null);
function useTabContext() {
  const ctx = reactExports.useContext(TabsContext$1);
  if (!ctx) throw new Error("You must wrap your component in <Tabs>");
  return ctx;
}
const TabsList = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList$1, {
  ref,
  ...props,
  className: twMerge("flex gap-3.5 text-fd-secondary-foreground overflow-x-auto px-4 not-prose", props.className)
}));
TabsList.displayName = "TabsList";
const TabsTrigger = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger$1, {
  ref,
  ...props,
  className: twMerge("inline-flex items-center gap-2 whitespace-nowrap text-fd-muted-foreground border-b border-transparent py-2 text-sm font-medium transition-colors [&_svg]:size-4 hover:text-fd-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-fd-primary data-[state=active]:text-fd-primary", props.className)
}));
TabsTrigger.displayName = "TabsTrigger";
function Tabs({ ref, className, items, label, defaultIndex = 0, defaultValue = items ? escapeValue(items[defaultIndex]) : void 0, ...props }) {
  const [value, setValue] = reactExports.useState(defaultValue);
  const collection = reactExports.useMemo(() => [], []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs$1, {
    ref,
    className: twMerge("flex flex-col overflow-hidden rounded-xl border bg-fd-secondary my-4", className),
    value,
    onValueChange: (v) => {
      if (items && !items.some((item) => escapeValue(item) === v)) return;
      setValue(v);
    },
    ...props,
    children: [items && /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: "text-sm font-medium my-auto me-auto",
      children: label
    }), items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, {
      value: escapeValue(item),
      children: item
    }, item))] }), /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContext$1.Provider, {
      value: reactExports.useMemo(() => ({
        items,
        collection
      }), [collection, items]),
      children: props.children
    })]
  });
}
function Tab({ value, ...props }) {
  const { items } = useTabContext();
  const resolved = value ?? items?.at(useCollectionIndex());
  if (!resolved) throw new Error("Failed to resolve tab `value`, please pass a `value` prop to the Tab component.");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, {
    value: escapeValue(resolved),
    ...props,
    children: props.children
  });
}
function TabsContent({ value, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent$1, {
    value,
    forceMount: true,
    className: twMerge("p-4 text-[0.9375rem] bg-fd-background rounded-xl outline-none prose-no-margin data-[state=inactive]:hidden [&>figure:only-child]:-m-4 [&>figure:only-child]:border-none", className),
    ...props,
    children: props.children
  });
}
function useCollectionIndex() {
  const key = reactExports.useId();
  const { collection } = useTabContext();
  reactExports.useEffect(() => {
    return () => {
      const idx = collection.indexOf(key);
      if (idx !== -1) collection.splice(idx, 1);
    };
  }, [key, collection]);
  if (!collection.includes(key)) collection.push(key);
  return collection.indexOf(key);
}
function escapeValue(v) {
  return v.toLowerCase().replace(/\s/, "-");
}
function useCopyButton(onCopy) {
  const [checked, setChecked] = reactExports.useState(false);
  const callbackRef = reactExports.useRef(onCopy);
  const timeoutRef = reactExports.useRef(null);
  callbackRef.current = onCopy;
  const onClick = reactExports.useCallback(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    Promise.resolve(callbackRef.current()).then(() => {
      setChecked(true);
      timeoutRef.current = window.setTimeout(() => {
        setChecked(false);
      }, 1500);
    });
  }, []);
  reactExports.useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  return [checked, onClick];
}
const TabsContext = reactExports.createContext(null);
function Pre(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("pre", {
    ...props,
    className: twMerge("min-w-full w-max *:flex *:flex-col", props.className),
    children: props.children
  });
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props$1) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
  ...props$1,
  className: twMerge("empty:hidden", props$1.className)
}), ...props }) {
  const inTab = reactExports.use(TabsContext) !== null;
  const areaRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", {
    ref,
    dir: "ltr",
    ...props,
    tabIndex: -1,
    className: twMerge(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className),
    children: [title ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
      children: [
        typeof icon === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "[&_svg]:size-3.5",
          dangerouslySetInnerHTML: { __html: icon }
        }) : icon,
        /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", {
          className: "flex-1 truncate",
          children: title
        }),
        Actions({
          className: "-me-2",
          children: allowCopy && /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { containerRef: areaRef })
        })
      ]
    }) : Actions({
      className: "absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
      children: allowCopy && /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { containerRef: areaRef })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref: areaRef,
      ...viewportProps,
      role: "region",
      tabIndex: 0,
      className: twMerge("text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className),
      style: {
        "--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
        counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
        ...viewportProps.style
      },
      children
    })]
  });
}
function CopyButton({ className, containerRef, ...props }) {
  const [checked, onClick] = useCopyButton(() => {
    const pre = containerRef.current?.getElementsByTagName("pre").item(0);
    if (!pre) return;
    const clone = pre.cloneNode(true);
    clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
      node.replaceWith("\n");
    });
    navigator.clipboard.writeText(clone.textContent ?? "");
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
    type: "button",
    "data-checked": checked || void 0,
    className: twMerge(buttonVariants({
      className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
      size: "icon-xs"
    }), className),
    "aria-label": checked ? "Copied Text" : "Copy Text",
    onClick,
    ...props,
    children: checked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clipboard, {})
  });
}
function CodeBlockTabs({ ref, ...props }) {
  const containerRef = reactExports.useRef(null);
  const nested = reactExports.use(TabsContext) !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs$1, {
    ref: mergeRefs$1(containerRef, ref),
    ...props,
    className: twMerge("bg-fd-card rounded-xl border", !nested && "my-4", props.className),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContext, {
      value: reactExports.useMemo(() => ({
        containerRef,
        nested
      }), [nested]),
      children: props.children
    })
  });
}
function CodeBlockTabsList(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList$1, {
    ...props,
    className: twMerge("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", props.className),
    children: props.children
  });
}
function CodeBlockTabsTrigger({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger$1, {
    ...props,
    className: twMerge("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className),
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children]
  });
}
function CodeBlockTab(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent$1, { ...props });
}
const defaultThemes = {
  light: "github-light",
  dark: "github-dark"
};
const highlighters = /* @__PURE__ */ new Map();
async function highlightHast(code, options) {
  const { lang: initialLang, fallbackLanguage, components: _, engine = "js", ...rest } = options;
  let lang = initialLang;
  let themes;
  let themesToLoad;
  if ("theme" in options && options.theme) {
    themes = { theme: options.theme };
    themesToLoad = [themes.theme];
  } else {
    themes = { themes: "themes" in options && options.themes ? options.themes : defaultThemes };
    themesToLoad = Object.values(themes.themes).filter((v) => v !== void 0);
  }
  const highlighter = await getHighlighter(engine, {
    langs: [],
    themes: themesToLoad
  });
  try {
    await highlighter.loadLanguage(lang);
  } catch {
    lang = fallbackLanguage ?? "text";
    await highlighter.loadLanguage(lang);
  }
  return highlighter.codeToHast(code, {
    lang,
    ...rest,
    ...themes,
    defaultColor: "themes" in themes ? false : void 0
  });
}
function hastToJsx(hast, options) {
  return toJsxRuntime(hast, {
    jsx: jsxRuntimeExports.jsx,
    jsxs: jsxRuntimeExports.jsxs,
    development: false,
    Fragment: reactExports.Fragment,
    ...options
  });
}
async function getHighlighter(engineType, options) {
  const { createHighlighter } = await import("../_libs/shiki.mjs").then(function(n) {
    return n.i;
  });
  let highlighter = highlighters.get(engineType);
  if (!highlighter) {
    let engine;
    if (engineType === "js") engine = import("../_libs/shiki.mjs").then(function(n) {
      return n.e;
    }).then((res) => res.createJavaScriptRegexEngine());
    else engine = import("../_libs/shiki.mjs").then(function(n) {
      return n.a;
    }).then((res) => res.createOnigurumaEngine(import("../_libs/shiki.mjs").then(function(n) {
      return n.w;
    })));
    highlighter = createHighlighter({
      ...options,
      engine
    });
    highlighters.set(engineType, highlighter);
    return highlighter;
  }
  return highlighter.then(async (instance) => {
    await Promise.all([instance.loadLanguage(...options.langs), instance.loadTheme(...options.themes)]);
    return instance;
  });
}
async function highlight(code, options) {
  return hastToJsx(await highlightHast(code, options), { components: options.components });
}
const promises = {};
function useShiki(code, options, deps) {
  const key = reactExports.useMemo(() => {
    return deps ? JSON.stringify(deps) : `${options.lang}:${code}`;
  }, [
    code,
    deps,
    options.lang
  ]);
  return reactExports.use(promises[key] ??= highlight(code, options));
}
const PropsContext = reactExports.createContext(void 0);
function DefaultPre(props) {
  const extraProps = reactExports.use(PropsContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, {
    ...props,
    ...extraProps,
    className: twMerge("my-0", props.className, extraProps?.className),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pre, { children: props.children })
  });
}
function DynamicCodeBlock({ lang, code, codeblock, options, wrapInSuspense = true }) {
  const id = reactExports.useId();
  const shikiOptions = {
    lang,
    ...options,
    components: {
      pre: DefaultPre,
      ...options?.components
    }
  };
  const children = /* @__PURE__ */ jsxRuntimeExports.jsx(PropsContext, {
    value: codeblock,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Internal, {
      id,
      ...reactExports.useDeferredValue({
        code,
        options: shikiOptions
      })
    })
  });
  if (wrapInSuspense) return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
    fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Placeholder, {
      code,
      components: shikiOptions.components
    }),
    children
  });
  return children;
}
function Placeholder({ code, components = {} }) {
  const { pre: Pre$1 = "pre", code: Code = "code" } = components;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pre$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { children: code.split("\n").map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: "line",
    children: line
  }, i)) }) });
}
function Internal({ id, code, options }) {
  return useShiki(code, options, [
    id,
    options.lang,
    code
  ]);
}
function InstallBlock({ title, description, packageName, children }) {
  return jsxRuntimeExports.jsxs("div", { children: [title && jsxRuntimeExports.jsx("h1", { className: "mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl", children: title }), description && jsxRuntimeExports.jsx("p", { className: "text-fd-muted-foreground mb-6 text-balance", children: description }), jsxRuntimeExports.jsxs(Tabs, { groupId: "pm", items: ["npm", "yarn", "pnpm", "bun"], className: "!mb-0", children: [jsxRuntimeExports.jsx(Tab, { value: "npm", className: "!py-0 !px-4", children: jsxRuntimeExports.jsx(DynamicCodeBlock, { lang: "bash", code: `npm i ${packageName}`, codeblock: { className: "!my-0" } }) }), jsxRuntimeExports.jsx(Tab, { value: "yarn", className: "!py-0 !px-4", children: jsxRuntimeExports.jsx(DynamicCodeBlock, { lang: "bash", code: `yarn add ${packageName}`, codeblock: { className: "!my-0" } }) }), jsxRuntimeExports.jsx(Tab, { value: "pnpm", className: "!py-0 !px-4", children: jsxRuntimeExports.jsx(DynamicCodeBlock, { lang: "bash", code: `pnpm add ${packageName}`, codeblock: { className: "!my-0" } }) }), jsxRuntimeExports.jsx(Tab, { value: "bun", className: "!py-0 !px-4", children: jsxRuntimeExports.jsx(DynamicCodeBlock, { lang: "bash", code: `bun add ${packageName}`, codeblock: { className: "!my-0" } }) })] }), children && jsxRuntimeExports.jsx("div", { className: "mt-6", children })] });
}
export {
  LargeSearchToggle as $,
  PageTOCPopoverTrigger as A,
  PageTOCPopoverContent as B,
  CodeBlockTabsTrigger as C,
  PageFooter as D,
  resolveLinkItems as E,
  FrameworkProvider as F,
  tree_exports as G,
  Header as H,
  Image as I,
  LayoutContextProvider as J,
  LayoutBody as K,
  Link as L,
  LayoutHeader as M,
  renderTitleNav as N,
  SearchToggle as O,
  Pre as P,
  SidebarTrigger as Q,
  RootProvider as R,
  SidebarProvider as S,
  Tabs as T,
  LayoutTabs as U,
  SidebarViewport as V,
  SidebarLinkItem as W,
  SidebarPageTree as X,
  SidebarContent as Y,
  SidebarCollapseTrigger as Z,
  __exportAll as _,
  Tab as a,
  SidebarTabsDropdown as a0,
  LanguageToggle as a1,
  LinkItem as a2,
  ThemeToggle as a3,
  SidebarDrawer as a4,
  LanguageToggleText as a5,
  useOnChange as a6,
  useRouter as a7,
  CodeBlockTabsList as b,
  CodeBlockTabs as c,
  CodeBlockTab as d,
  LayoutContext$1 as e,
  Collapsible as f,
  CollapsibleTrigger as g,
  CollapsibleContent as h,
  CodeBlock as i,
  buttonVariants as j,
  InstallBlock as k,
  PageLastUpdate$1 as l,
  mergeRefs$1 as m,
  PageBreadcrumb$1 as n,
  PageTOCPopover$1 as o,
  PageTOCPopoverTrigger$1 as p,
  PageTOCPopoverContent$1 as q,
  clerk_exports as r,
  default_exports as s,
  toc_exports as t,
  useCopyButton as u,
  PageFooter$1 as v,
  i18n_exports as w,
  PageLastUpdate as x,
  PageBreadcrumb as y,
  PageTOCPopover as z
};
