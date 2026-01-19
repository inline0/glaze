import { v as visit, n as normalizeUrl } from "./utils-D10VxgVc-CZVkar0w.mjs";
import * as path__default from "node:path";
import path__default__default from "node:path";
function basename(path2, ext) {
  const idx = path2.lastIndexOf("/");
  return path2.substring(idx === -1 ? 0 : idx + 1, ext ? path2.length - ext.length : path2.length);
}
function extname(path2) {
  const dotIdx = path2.lastIndexOf(".");
  if (dotIdx !== -1) return path2.substring(dotIdx);
  return "";
}
function dirname(path2) {
  return path2.split("/").slice(0, -1).join("/");
}
function splitPath(path2) {
  return path2.split("/").filter((p) => p.length > 0);
}
function joinPath(...paths) {
  const out = [];
  const parsed = paths.flatMap(splitPath);
  for (const seg of parsed) switch (seg) {
    case "..":
      out.pop();
      break;
    case ".":
      break;
    default:
      out.push(seg);
  }
  return out.join("/");
}
function slash(path2) {
  if (path2.startsWith("\\\\?\\")) return path2;
  return path2.replaceAll("\\", "/");
}
function slugsPlugin(slugFn) {
  function isIndex(file) {
    return basename(file, extname(file)) === "index";
  }
  return {
    name: "fumadocs:slugs",
    transformStorage({ storage }) {
      const indexFiles = [];
      const taken = /* @__PURE__ */ new Set();
      for (const path2 of storage.getFiles()) {
        const file = storage.read(path2);
        if (!file || file.format !== "page" || file.slugs) continue;
        const customSlugs = slugFn?.(file);
        if (customSlugs === void 0 && isIndex(path2)) {
          indexFiles.push(path2);
          continue;
        }
        file.slugs = customSlugs ?? getSlugs(path2);
        const key = file.slugs.join("/");
        if (taken.has(key)) throw new Error(`Duplicated slugs: ${key}`);
        taken.add(key);
      }
      for (const path2 of indexFiles) {
        const file = storage.read(path2);
        if (file?.format !== "page") continue;
        file.slugs = getSlugs(path2);
        if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
      }
    }
  };
}
const GroupRegex = /^\(.+\)$/;
function getSlugs(file) {
  const dir = dirname(file);
  const name = basename(file, extname(file));
  const slugs = [];
  for (const seg of dir.split("/")) if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
  if (GroupRegex.test(name)) throw new Error(`Cannot use folder group in file names: ${file}`);
  if (name !== "index") slugs.push(encodeURI(name));
  return slugs;
}
function iconPlugin(resolveIcon) {
  function replaceIcon(node) {
    if (node.icon === void 0 || typeof node.icon === "string") node.icon = resolveIcon(node.icon);
    return node;
  }
  return {
    name: "fumadocs:icon",
    transformPageTree: {
      file: replaceIcon,
      folder: replaceIcon,
      separator: replaceIcon
    }
  };
}
var FileSystem = class {
  constructor(inherit) {
    this.files = /* @__PURE__ */ new Map();
    this.folders = /* @__PURE__ */ new Map();
    if (inherit) {
      for (const [k, v] of inherit.folders) this.folders.set(k, v);
      for (const [k, v] of inherit.files) this.files.set(k, v);
    } else this.folders.set("", []);
  }
  read(path$1) {
    return this.files.get(path$1);
  }
  /**
  * get the direct children of folder (in virtual file path)
  */
  readDir(path$1) {
    return this.folders.get(path$1);
  }
  write(path$1, file) {
    if (!this.files.has(path$1)) {
      const dir = dirname(path$1);
      this.makeDir(dir);
      this.readDir(dir)?.push(path$1);
    }
    this.files.set(path$1, file);
  }
  /**
  * Delete files at specified path.
  *
  * @param path - the target path.
  * @param [recursive=false] - if set to `true`, it will also delete directories.
  */
  delete(path$1, recursive = false) {
    if (this.files.delete(path$1)) return true;
    if (recursive) {
      const folder = this.folders.get(path$1);
      if (!folder) return false;
      this.folders.delete(path$1);
      for (const child of folder) this.delete(child);
      return true;
    }
    return false;
  }
  getFiles() {
    return Array.from(this.files.keys());
  }
  makeDir(path$1) {
    const segments = splitPath(path$1);
    for (let i = 0; i < segments.length; i++) {
      const segment = segments.slice(0, i + 1).join("/");
      if (this.folders.has(segment)) continue;
      this.folders.set(segment, []);
      this.folders.get(dirname(segment)).push(segment);
    }
  }
};
function isLocaleValid(locale) {
  return locale.length > 0 && !/\d+/.test(locale);
}
const parsers = {
  dir(path$1) {
    const [locale, ...segs] = path$1.split("/");
    if (locale && segs.length > 0 && isLocaleValid(locale)) return [segs.join("/"), locale];
    return [path$1];
  },
  dot(path$1) {
    const dir = dirname(path$1);
    const parts = basename(path$1).split(".");
    if (parts.length < 3) return [path$1];
    const [locale] = parts.splice(parts.length - 2, 1);
    if (!isLocaleValid(locale)) return [path$1];
    return [joinPath(dir, parts.join(".")), locale];
  },
  none(path$1) {
    return [path$1];
  }
};
function buildContentStorage(loaderConfig, defaultLanguage) {
  const { source: source$1, plugins = [], i18n = {
    defaultLanguage,
    parser: "none",
    languages: [defaultLanguage]
  } } = loaderConfig;
  const parser = parsers[i18n.parser ?? "dot"];
  const storages = {};
  const normalized = /* @__PURE__ */ new Map();
  for (const inputFile of source$1.files) {
    let file;
    if (inputFile.type === "page") file = {
      format: "page",
      path: normalizePath(inputFile.path),
      slugs: inputFile.slugs,
      data: inputFile.data,
      absolutePath: inputFile.absolutePath
    };
    else file = {
      format: "meta",
      path: normalizePath(inputFile.path),
      absolutePath: inputFile.absolutePath,
      data: inputFile.data
    };
    const [pathWithoutLocale, locale = i18n.defaultLanguage] = parser(file.path);
    const list = normalized.get(locale) ?? [];
    list.push({
      pathWithoutLocale,
      file
    });
    normalized.set(locale, list);
  }
  const fallbackLang = i18n.fallbackLanguage !== null ? i18n.fallbackLanguage ?? i18n.defaultLanguage : null;
  function scan(lang) {
    if (storages[lang]) return;
    let storage;
    if (fallbackLang && fallbackLang !== lang) {
      scan(fallbackLang);
      storage = new FileSystem(storages[fallbackLang]);
    } else storage = new FileSystem();
    for (const { pathWithoutLocale, file } of normalized.get(lang) ?? []) storage.write(pathWithoutLocale, file);
    const context = { storage };
    for (const plugin of plugins) plugin.transformStorage?.(context);
    storages[lang] = storage;
  }
  for (const lang of i18n.languages) scan(lang);
  return storages;
}
function normalizePath(path$1) {
  const segments = splitPath(slash(path$1));
  if (segments[0] === "." || segments[0] === "..") throw new Error("It must not start with './' or '../'");
  return segments.join("/");
}
function transformerFallback() {
  const addedFiles = /* @__PURE__ */ new Set();
  return {
    root(root) {
      const isolatedStorage = new FileSystem();
      for (const file of this.storage.getFiles()) {
        if (addedFiles.has(file)) continue;
        const content = this.storage.read(file);
        if (content) isolatedStorage.write(file, content);
      }
      if (isolatedStorage.getFiles().length === 0) return root;
      root.fallback = this.builder.build(isolatedStorage, {
        ...this.options,
        id: `fallback-${root.$id ?? ""}`,
        generateFallback: false
      });
      addedFiles.clear();
      return root;
    },
    file(node, file) {
      if (file) addedFiles.add(file);
      return node;
    },
    folder(node, _dir, metaPath) {
      if (metaPath) addedFiles.add(metaPath);
      return node;
    }
  };
}
const group = /^\((?<name>.+)\)$/;
const link = /^(?<external>external:)?(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
const separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
const rest = "...";
const restReversed = "z...a";
const extractPrefix = "...";
const excludePrefix = "!";
function createPageTreeBuilder(loaderConfig) {
  const { plugins = [], url, pageTree: defaultOptions = {} } = loaderConfig;
  return {
    build(storage, options = defaultOptions) {
      const key = "";
      return this.buildI18n({ [key]: storage }, options)[key];
    },
    buildI18n(storages, options = defaultOptions) {
      let nextId = 0;
      const out = {};
      const transformers = [];
      if (options.transformers) transformers.push(...options.transformers);
      for (const plugin of plugins) if (plugin.transformPageTree) transformers.push(plugin.transformPageTree);
      if (options.generateFallback ?? true) transformers.push(transformerFallback());
      for (const [locale, storage] of Object.entries(storages)) {
        let rootId = locale.length === 0 ? "root" : locale;
        if (options.id) rootId = `${options.id}-${rootId}`;
        out[locale] = createPageTreeBuilderUtils({
          rootId,
          transformers,
          builder: this,
          options,
          getUrl: url,
          locale,
          storage,
          storages,
          generateNodeId() {
            return "_" + nextId++;
          }
        }).root();
      }
      return out;
    }
  };
}
function createFlattenPathResolver(storage) {
  const map = /* @__PURE__ */ new Map();
  const files = storage.getFiles();
  for (const file of files) {
    const content = storage.read(file);
    const flattenPath = file.substring(0, file.length - extname(file).length);
    map.set(flattenPath + "." + content.format, file);
  }
  return (name, format) => {
    return map.get(name + "." + format) ?? name;
  };
}
function createPageTreeBuilderUtils(ctx) {
  const resolveFlattenPath = createFlattenPathResolver(ctx.storage);
  const visitedPaths = /* @__PURE__ */ new Set();
  function nextNodeId(localId = ctx.generateNodeId()) {
    return `${ctx.rootId}:${localId}`;
  }
  return {
    buildPaths(paths, reversed = false) {
      const items = [];
      const folders = [];
      const sortedPaths = paths.sort((a, b) => a.localeCompare(b) * (reversed ? -1 : 1));
      for (const path$1 of sortedPaths) {
        const fileNode = this.file(path$1);
        if (fileNode) {
          if (basename(path$1, extname(path$1)) === "index") items.unshift(fileNode);
          else items.push(fileNode);
          continue;
        }
        const dirNode = this.folder(path$1, false);
        if (dirNode) folders.push(dirNode);
      }
      items.push(...folders);
      return items;
    },
    resolveFolderItem(folderPath, item) {
      if (item === rest || item === restReversed) return item;
      let match = separator.exec(item);
      if (match?.groups) {
        let node = {
          $id: nextNodeId(),
          type: "separator",
          icon: match.groups.icon,
          name: match.groups.name
        };
        for (const transformer of ctx.transformers) {
          if (!transformer.separator) continue;
          node = transformer.separator.call(ctx, node);
        }
        return [node];
      }
      match = link.exec(item);
      if (match?.groups) {
        const { icon, url, name, external } = match.groups;
        let node = {
          $id: nextNodeId(),
          type: "page",
          icon,
          name,
          url,
          external: external ? true : void 0
        };
        for (const transformer of ctx.transformers) {
          if (!transformer.file) continue;
          node = transformer.file.call(ctx, node);
        }
        return [node];
      }
      const isExcept = item.startsWith(excludePrefix);
      const isExtract = !isExcept && item.startsWith(extractPrefix);
      let filename = item;
      if (isExcept) filename = item.slice(1);
      else if (isExtract) filename = item.slice(3);
      const path$1 = resolveFlattenPath(joinPath(folderPath, filename), "page");
      if (isExcept) {
        visitedPaths.add(path$1);
        return [];
      }
      const dirNode = this.folder(path$1, false);
      if (dirNode) return isExtract ? dirNode.children : [dirNode];
      const fileNode = this.file(path$1);
      return fileNode ? [fileNode] : [];
    },
    folder(folderPath, isGlobalRoot) {
      const { storage, options, transformers } = ctx;
      const files = storage.readDir(folderPath);
      if (!files) return;
      const metaPath = resolveFlattenPath(joinPath(folderPath, "meta"), "meta");
      const indexPath = resolveFlattenPath(joinPath(folderPath, "index"), "page");
      let meta = storage.read(metaPath);
      if (meta && meta.format !== "meta") meta = void 0;
      const metadata = meta?.data ?? {};
      const { root = isGlobalRoot, pages: pages2 } = metadata;
      let index;
      let children;
      if (pages2) {
        const resolved = pages2.flatMap((item) => this.resolveFolderItem(folderPath, item));
        if (!root && !visitedPaths.has(indexPath)) index = this.file(indexPath);
        for (let i = 0; i < resolved.length; i++) {
          const item = resolved[i];
          if (item !== rest && item !== restReversed) continue;
          const items = this.buildPaths(files.filter((file) => !visitedPaths.has(file)), item === restReversed);
          resolved.splice(i, 1, ...items);
          break;
        }
        children = resolved;
      } else {
        if (!root && !visitedPaths.has(indexPath)) index = this.file(indexPath);
        children = this.buildPaths(files.filter((file) => !visitedPaths.has(file)));
      }
      let node = {
        type: "folder",
        name: metadata.title ?? index?.name ?? (() => {
          const folderName = basename(folderPath);
          return pathToName(group.exec(folderName)?.[1] ?? folderName);
        })(),
        icon: metadata.icon ?? index?.icon,
        root: metadata.root,
        defaultOpen: metadata.defaultOpen,
        description: metadata.description,
        collapsible: metadata.collapsible,
        index,
        children,
        $id: nextNodeId(folderPath),
        $ref: !options.noRef && meta ? { metaFile: metaPath } : void 0
      };
      visitedPaths.add(folderPath);
      for (const transformer of transformers) {
        if (!transformer.folder) continue;
        node = transformer.folder.call(ctx, node, folderPath, metaPath);
      }
      return node;
    },
    file(path$1) {
      const { options, getUrl, storage, locale, transformers } = ctx;
      const page = storage.read(path$1);
      if (page?.format !== "page") return;
      const { title, description, icon } = page.data;
      let item = {
        $id: nextNodeId(path$1),
        type: "page",
        name: title ?? pathToName(basename(path$1, extname(path$1))),
        description,
        icon,
        url: getUrl(page.slugs, locale),
        $ref: !options.noRef ? { file: path$1 } : void 0
      };
      visitedPaths.add(path$1);
      for (const transformer of transformers) {
        if (!transformer.file) continue;
        item = transformer.file.call(ctx, item, path$1);
      }
      return item;
    },
    root() {
      const folder = this.folder("", true);
      let root = {
        $id: ctx.rootId,
        name: folder.name || "Docs",
        children: folder.children
      };
      for (const transformer of ctx.transformers) {
        if (!transformer.root) continue;
        root = transformer.root.call(ctx, root);
      }
      return root;
    }
  };
}
function pathToName(name) {
  const result = [];
  for (const c of name) if (result.length === 0) result.push(c.toLocaleUpperCase());
  else if (c === "-") result.push(" ");
  else result.push(c);
  return result.join("");
}
function indexPages(storages, { url }) {
  const result = {
    pages: /* @__PURE__ */ new Map(),
    pathToMeta: /* @__PURE__ */ new Map(),
    pathToPage: /* @__PURE__ */ new Map()
  };
  for (const [lang, storage] of Object.entries(storages)) for (const filePath of storage.getFiles()) {
    const item = storage.read(filePath);
    const path$1 = `${lang}.${filePath}`;
    if (item.format === "meta") {
      result.pathToMeta.set(path$1, {
        path: item.path,
        absolutePath: item.absolutePath,
        data: item.data
      });
      continue;
    }
    const page = {
      absolutePath: item.absolutePath,
      path: item.path,
      url: url(item.slugs, lang),
      slugs: item.slugs,
      data: item.data,
      locale: lang
    };
    result.pathToPage.set(path$1, page);
    result.pages.set(`${lang}.${page.slugs.join("/")}`, page);
  }
  return result;
}
function createGetUrl(baseUrl, i18n) {
  const baseSlugs = baseUrl.split("/");
  return (slugs, locale) => {
    const hideLocale = i18n?.hideLocale ?? "never";
    let urlLocale;
    if (hideLocale === "never") urlLocale = locale;
    else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) urlLocale = locale;
    const paths = [...baseSlugs, ...slugs];
    if (urlLocale) paths.unshift(urlLocale);
    return `/${paths.filter((v) => v.length > 0).join("/")}`;
  };
}
function loader(...args) {
  const loaderConfig = args.length === 2 ? resolveConfig(args[0], args[1]) : resolveConfig(args[0].source, args[0]);
  const { i18n } = loaderConfig;
  const defaultLanguage = i18n?.defaultLanguage ?? "";
  const storages = buildContentStorage(loaderConfig, defaultLanguage);
  const walker = indexPages(storages, loaderConfig);
  const builder = createPageTreeBuilder(loaderConfig);
  let pageTrees;
  function getPageTrees() {
    return pageTrees ??= builder.buildI18n(storages);
  }
  return {
    _i18n: i18n,
    get pageTree() {
      const trees = getPageTrees();
      return i18n ? trees : trees[defaultLanguage];
    },
    set pageTree(v) {
      if (i18n) pageTrees = v;
      else {
        pageTrees ??= {};
        pageTrees[defaultLanguage] = v;
      }
    },
    getPageByHref(href, { dir = "", language = defaultLanguage } = {}) {
      const [value, hash] = href.split("#", 2);
      let target;
      if (value.startsWith("./")) {
        const path$1 = joinPath(dir, value);
        target = walker.pathToPage.get(`${language}.${path$1}`);
      } else target = this.getPages(language).find((item) => item.url === value);
      if (target) return {
        page: target,
        hash
      };
    },
    resolveHref(href, parent) {
      if (href.startsWith("./")) {
        const target = this.getPageByHref(href, {
          dir: path__default__default.dirname(parent.path),
          language: parent.locale
        });
        if (target) return target.hash ? `${target.page.url}#${target.hash}` : target.page.url;
      }
      return href;
    },
    getPages(language) {
      const pages2 = [];
      for (const [key, value] of walker.pages.entries()) if (language === void 0 || key.startsWith(`${language}.`)) pages2.push(value);
      return pages2;
    },
    getLanguages() {
      const list = [];
      if (!i18n) return list;
      for (const language of i18n.languages) list.push({
        language,
        pages: this.getPages(language)
      });
      return list;
    },
    getPage(slugs = [], language = defaultLanguage) {
      let page = walker.pages.get(`${language}.${slugs.join("/")}`);
      if (page) return page;
      page = walker.pages.get(`${language}.${slugs.map(decodeURI).join("/")}`);
      if (page) return page;
    },
    getNodeMeta(node, language = defaultLanguage) {
      const ref = node.$ref?.metaFile;
      if (!ref) return;
      return walker.pathToMeta.get(`${language}.${ref}`);
    },
    getNodePage(node, language = defaultLanguage) {
      const ref = node.$ref?.file;
      if (!ref) return;
      return walker.pathToPage.get(`${language}.${ref}`);
    },
    getPageTree(locale = defaultLanguage) {
      const trees = getPageTrees();
      return trees[locale] ?? trees[defaultLanguage];
    },
    generateParams(slug, lang) {
      if (i18n) return this.getLanguages().flatMap((entry) => entry.pages.map((page) => ({
        [slug ?? "slug"]: page.slugs,
        [lang ?? "lang"]: entry.language
      })));
      return this.getPages().map((page) => ({ [slug ?? "slug"]: page.slugs }));
    },
    async serializePageTree(tree) {
      const { renderToString } = await import("../_libs/react-dom.mjs").then(function(n) {
        return n.s;
      });
      return {
        $fumadocs_loader: "page-tree",
        data: visit(tree, (node) => {
          node = { ...node };
          if ("icon" in node && node.icon) node.icon = renderToString(node.icon);
          if (node.name) node.name = renderToString(node.name);
          if ("children" in node) node.children = [...node.children];
          return node;
        })
      };
    }
  };
}
function resolveConfig(source$1, { slugs, icon, plugins = [], baseUrl, url, ...base }) {
  let config = {
    ...base,
    url: url ? (...args) => normalizeUrl(url(...args)) : createGetUrl(baseUrl, base.i18n),
    source: source$1,
    plugins: buildPlugins([
      icon && iconPlugin(icon),
      ...typeof plugins === "function" ? plugins({ typedPlugin: (plugin) => plugin }) : plugins,
      slugsPlugin(slugs)
    ])
  };
  for (const plugin of config.plugins ?? []) {
    const result = plugin.config?.(config);
    if (result) config = result;
  }
  return config;
}
const priorityMap = {
  pre: 1,
  default: 0,
  post: -1
};
function buildPlugins(plugins, sort = true) {
  const flatten = [];
  for (const plugin of plugins) if (Array.isArray(plugin)) flatten.push(...buildPlugins(plugin, false));
  else if (plugin) flatten.push(plugin);
  if (sort) return flatten.sort((a, b) => priorityMap[b.enforce ?? "default"] - priorityMap[a.enforce ?? "default"]);
  return flatten;
}
const pages = ["---Getting Started---", "index", "install", "---Usage---", "syntax", "selectors", "breakpoints", "timelines", "scrolltrigger", "defaults", "presets", "changelog"];
const __vite_glob_0_0 = {
  pages
};
const frontmatter$9 = { "title": "Breakpoints" };
const frontmatter$8 = { "title": "Changelog" };
const frontmatter$7 = { "title": "Defaults" };
const frontmatter$6 = { "title": "Introduction" };
const frontmatter$5 = { "title": "Install" };
const frontmatter$4 = { "title": "Presets" };
const frontmatter$3 = { "title": "ScrollTrigger" };
const frontmatter$2 = { "title": "Selectors" };
const frontmatter$1 = { "title": "Syntax" };
const frontmatter = { "title": "Timelines" };
function server(options = {}) {
  const { doc: { passthroughs: docPassthroughs = [] } = {} } = options;
  function fileInfo(file, base) {
    if (file.startsWith("./")) file = file.slice(2);
    return {
      path: file,
      fullPath: path__default.join(base, file)
    };
  }
  function mapDocData(entry) {
    const data = {
      body: entry.default,
      toc: entry.toc,
      structuredData: entry.structuredData,
      _exports: entry
    };
    for (const key of docPassthroughs) data[key] = entry[key];
    return data;
  }
  return {
    async doc(_name, base, glob) {
      return await Promise.all(Object.entries(glob).map(async ([k, v]) => {
        const data = typeof v === "function" ? await v() : v;
        return {
          ...mapDocData(data),
          ...data.frontmatter,
          ...createDocMethods(fileInfo(k, base), () => data)
        };
      }));
    },
    async docLazy(_name, base, head, body) {
      return await Promise.all(Object.entries(head).map(async ([k, v]) => {
        const data = typeof v === "function" ? await v() : v;
        const content = body[k];
        return {
          ...data,
          ...createDocMethods(fileInfo(k, base), content),
          async load() {
            return mapDocData(await content());
          }
        };
      }));
    },
    async meta(_name, base, glob) {
      return await Promise.all(Object.entries(glob).map(async ([k, v]) => {
        const data = typeof v === "function" ? await v() : v;
        return {
          info: fileInfo(k, base),
          ...data
        };
      }));
    },
    async docs(name, base, metaGlob, docGlob) {
      return {
        docs: await this.doc(name, base, docGlob),
        meta: await this.meta(name, base, metaGlob),
        toFumadocsSource() {
          return toFumadocsSource(this.docs, this.meta);
        }
      };
    },
    async docsLazy(name, base, metaGlob, docHeadGlob, docBodyGlob) {
      return {
        docs: await this.docLazy(name, base, docHeadGlob, docBodyGlob),
        meta: await this.meta(name, base, metaGlob),
        toFumadocsSource() {
          return toFumadocsSource(this.docs, this.meta);
        }
      };
    }
  };
}
function toFumadocsSource(pages2, metas) {
  const files = [];
  for (const entry of pages2) files.push({
    type: "page",
    path: entry.info.path,
    absolutePath: entry.info.fullPath,
    data: entry
  });
  for (const entry of metas) files.push({
    type: "meta",
    path: entry.info.path,
    absolutePath: entry.info.fullPath,
    data: entry
  });
  return { files };
}
function createDocMethods(info, load) {
  return {
    info,
    async getText(type) {
      if (type === "raw") return (await (await import("node:fs/promises")).readFile(info.fullPath)).toString();
      const data = await load();
      if (typeof data._markdown !== "string") throw new Error("getText('processed') requires `includeProcessedMarkdown` to be enabled in your collection config.");
      return data._markdown;
    },
    async getMDAST() {
      const data = await load();
      if (!data._mdast) throw new Error("getMDAST() requires `includeMDAST` to be enabled in your collection config.");
      return JSON.parse(data._mdast);
    }
  };
}
const create = server({ "doc": { "passthroughs": ["extractedReferences"] } });
const docs = await create.docsLazy("docs", "content/docs", /* @__PURE__ */ Object.assign({
  "./meta.json": __vite_glob_0_0
}), /* @__PURE__ */ Object.assign({
  "./breakpoints.mdx": frontmatter$9,
  "./changelog.mdx": frontmatter$8,
  "./defaults.mdx": frontmatter$7,
  "./index.mdx": frontmatter$6,
  "./install.mdx": frontmatter$5,
  "./presets.mdx": frontmatter$4,
  "./scrolltrigger.mdx": frontmatter$3,
  "./selectors.mdx": frontmatter$2,
  "./syntax.mdx": frontmatter$1,
  "./timelines.mdx": frontmatter
}), /* @__PURE__ */ Object.assign({
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
}));
const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource()
});
export {
  basename as b,
  extname as e,
  source as s
};
