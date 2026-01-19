import { r } from "./compute-scroll-into-view.mjs";
const o = (t) => false === t ? { block: "end", inline: "nearest" } : ((t2) => t2 === Object(t2) && 0 !== Object.keys(t2).length)(t) ? t : { block: "start", inline: "nearest" };
function e(e2, r$1) {
  if (!e2.isConnected || !((t) => {
    let o2 = t;
    for (; o2 && o2.parentNode; ) {
      if (o2.parentNode === document) return true;
      o2 = o2.parentNode instanceof ShadowRoot ? o2.parentNode.host : o2.parentNode;
    }
    return false;
  })(e2)) return;
  const n = ((t) => {
    const o2 = window.getComputedStyle(t);
    return { top: parseFloat(o2.scrollMarginTop) || 0, right: parseFloat(o2.scrollMarginRight) || 0, bottom: parseFloat(o2.scrollMarginBottom) || 0, left: parseFloat(o2.scrollMarginLeft) || 0 };
  })(e2);
  if (((t) => "object" == typeof t && "function" == typeof t.behavior)(r$1)) return r$1.behavior(r(e2, r$1));
  const l = "boolean" == typeof r$1 || null == r$1 ? void 0 : r$1.behavior;
  for (const { el: a, top: i, left: s } of r(e2, o(r$1))) {
    const t = i - n.top + n.bottom, o2 = s - n.left + n.right;
    a.scroll({ top: t, left: o2, behavior: l });
  }
}
export {
  e
};
