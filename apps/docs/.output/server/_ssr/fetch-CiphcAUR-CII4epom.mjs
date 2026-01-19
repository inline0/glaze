const cache = /* @__PURE__ */ new Map();
async function fetchDocs(query, { api = "/api/search", locale, tag }) {
  const url = new URL(api, window.location.origin);
  url.searchParams.set("query", query);
  if (locale) url.searchParams.set("locale", locale);
  if (tag) url.searchParams.set("tag", Array.isArray(tag) ? tag.join(",") : tag);
  const key = url.toString();
  const cached = cache.get(key);
  if (cached) return cached;
  const res = await fetch(url);
  if (!res.ok) throw new Error(await res.text());
  const result = await res.json();
  cache.set(key, result);
  return result;
}
export {
  fetchDocs
};
