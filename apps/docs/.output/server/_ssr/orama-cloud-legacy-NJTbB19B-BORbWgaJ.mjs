import { c as createContentHighlighter } from "./search-DzqmOjzV-BuydbnAi.mjs";
import { r as removeUndefined } from "./remove-undefined-Buxsprgu-7355g_Rp.mjs";
async function searchDocs(query, options) {
  const highlighter = createContentHighlighter(query);
  const list = [];
  const { index = "default", client, params: extraParams = {}, tag } = options;
  if (index === "crawler") {
    const result$1 = await client.search({
      ...extraParams,
      term: query,
      where: {
        category: tag ? { eq: tag.slice(0, 1).toUpperCase() + tag.slice(1) } : void 0,
        ...extraParams.where
      },
      limit: 10
    });
    if (!result$1) return list;
    for (const hit of result$1.hits) {
      const doc = hit.document;
      list.push({
        id: hit.id,
        type: "page",
        content: doc.title,
        contentWithHighlights: highlighter.highlight(doc.title),
        url: doc.path
      }, {
        id: "page" + hit.id,
        type: "text",
        content: doc.content,
        contentWithHighlights: highlighter.highlight(doc.content),
        url: doc.path
      });
    }
    return list;
  }
  const params = {
    ...extraParams,
    term: query,
    where: removeUndefined({
      tag,
      ...extraParams.where
    }),
    groupBy: {
      properties: ["page_id"],
      maxResult: 7,
      ...extraParams.groupBy
    }
  };
  const result = await client.search(params);
  if (!result || !result.groups) return list;
  for (const item of result.groups) {
    let addedHead = false;
    for (const hit of item.result) {
      const doc = hit.document;
      if (!addedHead) {
        list.push({
          id: doc.page_id,
          type: "page",
          content: doc.title,
          breadcrumbs: doc.breadcrumbs,
          contentWithHighlights: highlighter.highlight(doc.title),
          url: doc.url
        });
        addedHead = true;
      }
      list.push({
        id: doc.id,
        content: doc.content,
        contentWithHighlights: highlighter.highlight(doc.content),
        type: doc.content === doc.section ? "heading" : "text",
        url: doc.section_id ? `${doc.url}#${doc.section_id}` : doc.url
      });
    }
  }
  return list;
}
export {
  searchDocs
};
