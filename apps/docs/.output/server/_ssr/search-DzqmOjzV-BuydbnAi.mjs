function escapeRegExp(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildRegexFromQuery(q) {
  const trimmed = q.trim();
  if (trimmed.length === 0) return null;
  const terms = Array.from(new Set(trimmed.split(/\s+/).map((t) => t.trim()).filter(Boolean)));
  if (terms.length === 0) return null;
  const escaped = terms.map(escapeRegExp).join("|");
  return new RegExp(`(${escaped})`, "gi");
}
function createContentHighlighter(query) {
  const regex = typeof query === "string" ? buildRegexFromQuery(query) : query;
  return { highlight(content) {
    if (!regex) return [{
      type: "text",
      content
    }];
    const out = [];
    let i = 0;
    for (const match of content.matchAll(regex)) {
      if (i < match.index) out.push({
        type: "text",
        content: content.substring(i, match.index)
      });
      out.push({
        type: "text",
        content: match[0],
        styles: { highlight: true }
      });
      i = match.index + match[0].length;
    }
    if (i < content.length) out.push({
      type: "text",
      content: content.substring(i)
    });
    return out;
  } };
}
export {
  createContentHighlighter as c
};
