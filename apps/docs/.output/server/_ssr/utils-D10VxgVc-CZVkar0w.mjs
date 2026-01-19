function normalizeUrl(url) {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!url.startsWith("/")) url = "/" + url;
  if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
  return url;
}
function findPath(nodes, matcher, options = {}) {
  const { includeSeparator = true } = options;
  function run(nodes$1) {
    let separator;
    for (const node of nodes$1) {
      if (matcher(node)) {
        const items = [];
        if (separator) items.push(separator);
        items.push(node);
        return items;
      }
      if (node.type === "separator" && includeSeparator) {
        separator = node;
        continue;
      }
      if (node.type === "folder") {
        const items = node.index && matcher(node.index) ? [node.index] : run(node.children);
        if (items) {
          items.unshift(node);
          if (separator) items.unshift(separator);
          return items;
        }
      }
    }
  }
  return run(nodes) ?? null;
}
const VisitBreak = /* @__PURE__ */ Symbol("VisitBreak");
function visit(root, visitor) {
  function onNode(node, parent) {
    const result = visitor(node, parent);
    switch (result) {
      case "skip":
        return node;
      case "break":
        throw VisitBreak;
      default:
        if (result) node = result;
    }
    if ("index" in node && node.index) node.index = onNode(node.index, node);
    if ("fallback" in node && node.fallback) node.fallback = onNode(node.fallback, node);
    if ("children" in node) for (let i = 0; i < node.children.length; i++) node.children[i] = onNode(node.children[i], node);
    return node;
  }
  try {
    return onNode(root);
  } catch (e) {
    if (e === VisitBreak) return root;
    throw e;
  }
}
export {
  findPath as f,
  normalizeUrl as n,
  visit as v
};
