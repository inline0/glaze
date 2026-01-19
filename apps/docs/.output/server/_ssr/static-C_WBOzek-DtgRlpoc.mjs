import { a as searchSimple, s as searchAdvanced } from "./advanced-tbtFDsHU-DwC4Uo2C.mjs";
import { c as create, l as load } from "../_libs/@orama/orama.mjs";
import "./search-DzqmOjzV-BuydbnAi.mjs";
import "./remove-undefined-Buxsprgu-7355g_Rp.mjs";
const cache = /* @__PURE__ */ new Map();
async function loadDB({ from = "/api/search", initOrama = (locale) => create({
  schema: { _: "string" },
  language: locale
}) }) {
  const cacheKey = from;
  const cached = cache.get(cacheKey);
  if (cached) return cached;
  async function init() {
    const res = await fetch(from);
    if (!res.ok) throw new Error(`failed to fetch exported search indexes from ${from}, make sure the search database is exported and available for client.`);
    const data = await res.json();
    const dbs = /* @__PURE__ */ new Map();
    if (data.type === "i18n") {
      await Promise.all(Object.entries(data.data).map(async ([k, v]) => {
        const db$1 = await initOrama(k);
        load(db$1, v);
        dbs.set(k, {
          type: v.type,
          db: db$1
        });
      }));
      return dbs;
    }
    const db = await initOrama();
    load(db, data);
    dbs.set("", {
      type: data.type,
      db
    });
    return dbs;
  }
  const result = init();
  cache.set(cacheKey, result);
  return result;
}
async function search(query, options) {
  const { tag, locale } = options;
  const db = (await loadDB(options)).get(locale ?? "");
  if (!db) return [];
  if (db.type === "simple") return searchSimple(db, query);
  return searchAdvanced(db.db, query, tag);
}
export {
  search
};
