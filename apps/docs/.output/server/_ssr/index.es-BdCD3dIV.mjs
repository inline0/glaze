function _(t, e, n = false) {
  var l;
  let i = "string" != typeof e ? null == (l = null == e ? void 0 : e.selector) ? void 0 : l.value : "";
  if (i) {
    if (i = i.replaceAll("_", " "), i.startsWith("&")) {
      const e2 = null == i ? void 0 : i.replace("&", ":scope");
      return ":scope" === e2 ? t : n ? t.querySelector(e2) : t.querySelectorAll(e2);
    }
    return i;
  }
  return t;
}
function J(t) {
  return !(null === t || "object" != typeof t || Array.isArray(t) || t instanceof HTMLElement);
}
function M(t, ...e) {
  if (!e.length) return t;
  const n = e.shift();
  if (J(t) && J(n)) for (const e2 in n) "__proto__" === e2 || "constructor" === e2 || "prototype" === e2 || (J(n[e2]) ? (t[e2] || Object.assign(t, { [e2]: {} }), M(t[e2], n[e2])) : Object.assign(t, { [e2]: n[e2] }));
  return e.length ? M(t, ...e) : t;
}
function G(t) {
  const e = t.match(/^\[([^\]]+)]:(.*)/);
  return e ? { content: e[1], restOfString: e[2] } : null;
}
function K(t, e, n) {
  if ("string" != typeof t) return t;
  const l = t.replace(/^\[|]$/g, "").replaceAll("_", " ");
  return l.startsWith("&") ? _(e, { selector: { value: l } }, ["scrollTrigger", "trigger"].includes(n)) : "true" === l || "false" === l ? "true" === l : isNaN(Number(l)) ? l : l.includes(".") ? parseFloat(l) : parseInt(l, 10);
}
function C(t, e = false, n) {
  const l = {};
  return t.split(" ").forEach(((t2) => {
    var i;
    const r = G(t2);
    r && (t2 = r.restOfString, l.selector = {}, l.selector.value = r.content);
    const s = t2.split(":").filter(((t3) => !t3.includes("@"))), [o, a] = s;
    if (!a && e) {
      const e2 = t2.split("-"), i2 = e2[0], r2 = e2[1];
      if (!i2 || !r2) return;
      return void (l[i2] = K(r2, n, i2));
    }
    if ("tl" === o && a.startsWith("[")) return void (l.tl = { value: null == (i = G(a + ":")) ? void 0 : i.content });
    if (!a) return;
    const c = a.split("|");
    l[o] || (l[o] = {}), c.forEach(((t3) => {
      if (!t3) return;
      let [e2, i2] = t3.split(/-(.+)/);
      i2 = K(i2, n, e2);
      const r2 = e2.split(".");
      let s2 = l[o];
      r2.forEach(((t4, e3) => {
        e3 === r2.length - 1 ? s2[t4] = i2 : (s2[t4] || (s2[t4] = {}), s2 = s2[t4]);
      }));
    }));
  })), l;
}
function tt(t, e, n) {
  const l = t.match(/(?:@(\w+):)?tl(?:\/(\w+))?/);
  if (l) {
    const t2 = l[1], i = { id: l[2] ?? "", breakpoint: n };
    if (t2) {
      if (null == e || !e[t2]) return null;
      i.breakpoint = e[t2] ?? n;
    }
    return i;
  }
  return null;
}
function et(t, e, n) {
  const l = {};
  return t.split(" ").forEach(((t2) => {
    const i = t2.match(/@(\w+):/);
    if (!i) return l[n] || (l[n] = []), void l[n].push(t2);
    const r = i[1], s = null == e ? void 0 : e[r];
    s && (l[s] || (l[s] = []), l[s].push(t2.replace(i[0], "")));
  })), l;
}
function st(t, e) {
  let n = null;
  return function(...l) {
    null !== n && clearTimeout(n), n = window.setTimeout((() => {
      t(...l);
    }), e);
  };
}
function rt(t) {
  var e, n, l;
  if (!t || null == (n = null == (e = null == t ? void 0 : t.lib) ? void 0 : e.gsap) || !n.core) throw new Error("GSAP not found");
  const { lib: { gsap: { core: i } }, ...r } = t, s = M({ breakpoints: { default: "(min-width: 1px)" }, dataAttribute: "data-animate", element: document, watch: false }, r);
  let o = 0;
  const a = null == (l = s.breakpoints) ? void 0 : l.default, c = s.breakpoints, u = [], f = (t2 = false) => `${t2 ? "[" : ""}${s.dataAttribute}${t2 ? "]" : ""}`, d = (t2) => {
    const e2 = t2.getAttribute(f()) || "";
    let n2 = "";
    null != s && s.className && (n2 = (t2.getAttribute("class") || "").split(" ").filter(((t3) => t3.includes(s.className))).map(((t3) => t3.replace(`${null == s ? void 0 : s.className}-`, ""))).join(" "));
    let l2 = "";
    const i2 = `${e2} ${n2}`.trim();
    return null != s && s.presets && (Object.entries(s.presets).forEach((([t3, e3]) => {
      i2.split(" ").forEach(((n3) => {
        n3 === `preset-${t3}` && (l2 += ` ${e3}`);
      }));
    })), l2 = l2.trim()), `${i2} ${l2}`.trim();
  }, m = (t2 = s.element) => Array.from(t2.querySelectorAll(`${f(true)}${s.className ? `, [class^="${s.className}"], [class*="${s.className}"]` : ""}`)), p = () => (o++, `${Math.random().toString(36).substring(2, 15)}-${o}`), h = (t2) => "tl" === t2 || t2.includes("tl/") || t2.endsWith(":tl"), v = (t2) => u.find(((e2) => e2.elements.has(t2))), b = (t2) => {
    const e2 = t2.id, n2 = u.findIndex(((t3) => t3.id === e2));
    e2 && -1 !== n2 ? u[n2] = { ...t2, timeline: u[n2].timeline } : u.push(t2);
  };
  function g(t2) {
    var e2;
    const n2 = N(t2), l2 = null == (e2 = u.find(((e3) => e3.elements.has(t2)))) ? void 0 : e2.elements.get(t2);
    return JSON.stringify(n2) !== JSON.stringify(l2) && (!l2 || !n2 || JSON.stringify(n2) !== JSON.stringify(l2));
  }
  const E = st((function(t2) {
    var e2;
    const n2 = v(t2);
    if (null == n2 || !n2.timeline) {
      let n3 = "";
      if (Object.values(N(t2)).forEach(((t3) => {
        n3 || t3.tl && (n3 = Object.keys(t3.tl)[0]);
      })), n3 || (n3 = (null == (e2 = ((t3) => u.find(((e3) => e3.timelineElement === t3 || e3.timelineElement.id && t3.id && e3.timelineElement.id === t3.id)))(t2)) ? void 0 : e2.id) || ""), !n3) return void $([t2], p());
      const l2 = ((t3) => u.find(((e3) => e3.id === t3)))(n3), i2 = [null == l2 ? void 0 : l2.timelineElement, ...(null == l2 ? void 0 : l2.elements.keys()) || [], t2];
      return null == l2 || l2.timeline.progress(0).clear(), void $(i2, n3);
    }
    $([...Array.from(n2.elements.keys()), ...null != n2 && n2.timelineElement ? [null == n2 ? void 0 : n2.timelineElement] : []], (null == n2 ? void 0 : n2.id) || "");
  }), "object" == typeof s.watch && s.watch.debounceTime || 500);
  function N(t2) {
    const e2 = [...Object.entries(et(d(t2), c, a)).map((([e3, n3]) => ({ breakpoint: e3, element: t2, data: C(n3.join(" "), false, t2) })))], n2 = {};
    return e2.forEach(((t3) => {
      null != n2 && n2[t3.breakpoint] || (n2[t3.breakpoint] = {}), n2[t3.breakpoint] = t3.data;
    })), n2;
  }
  function y(t2 = m(), e2 = "") {
    const n2 = [];
    t2.forEach(((t3) => {
      d(t3).split(" ").some(((t4) => h(t4))) && (n2.push(...(function(t4, e3 = "") {
        var n3;
        const l2 = [], r2 = d(t4), o2 = r2.split(" ");
        if (o2.some(((t5) => h(t5)))) {
          const u2 = tt(r2, c, a), f2 = /* @__PURE__ */ new Map();
          [...m(t4), ...null != u2 && u2.id ? s.element.querySelectorAll(`[${s.dataAttribute}*="tl:${u2.id}"]${s.className ? `, [class^="${s.className}-tl:${u2.id}"], [class*="${s.className}-tl:${u2.id}"]` : ""}`) : []].forEach(((e4) => {
            e4 !== t4 && (f2.set(e4, N(e4)), l2.push(e4));
          }));
          const d2 = C(o2.filter(((t5) => !h(t5))).join(" "), true, t4);
          let v2 = {};
          null != (n3 = s.defaults) && n3.tl && (v2 = C(s.defaults.tl, true, t4));
          const g2 = {};
          M(g2, v2, d2);
          const E2 = (null == u2 ? void 0 : u2.breakpoint) || a;
          b({ breakpoint: E2, data: g2, elements: f2, id: e3 || (null == u2 ? void 0 : u2.id) || p(), timelineElement: t4, timeline: i.timeline({ ...g2, paused: true }) });
        }
        return l2;
      })(t3)), n2.push(t3));
    })), t2.forEach(((t3) => {
      var l2, r2;
      if (n2.includes(t3)) return;
      const o2 = null == (l2 = u.find(((e3) => {
        var n3;
        return (null == (n3 = e3.elements) ? void 0 : n3.has(t3)) && e3.breakpoint;
      }))) ? void 0 : l2.breakpoint, c2 = v(t3), f2 = /* @__PURE__ */ new Map();
      if (!c2 || "" !== e2) {
        const n3 = N(t3);
        let l3 = null;
        Object.values(n3).forEach(((t4) => {
          Object.values(t4).forEach(((t5) => {
            t5.scrollTrigger && (l3 = t5.scrollTrigger, delete t5.scrollTrigger);
          }));
        })), f2.set(t3, n3);
        const u2 = l3 ? { scrollTrigger: l3 } : {};
        let d2 = {};
        null != (r2 = s.defaults) && r2.tl && (d2 = C(s.defaults.tl, true, t3));
        const m2 = {};
        M(m2, d2, u2), b({ breakpoint: o2 || a, data: u2, elements: f2, id: e2 || (null == c2 ? void 0 : c2.id) || p(), timelineElement: t3, timeline: i.timeline({ ...m2, paused: true }) });
      }
    }));
  }
  function A(t2) {
    t2.elements.forEach(((t3, e2) => {
      i.set(e2, { clearProps: "all" }), Object.values(t3).forEach(((t4) => {
        t4.selector && i.set(_(e2, t4), { clearProps: "all" });
      }));
    }));
  }
  function $(t2 = m(), e2 = "") {
    y(t2, e2), i.matchMedia().add(Object.fromEntries(Object.values({ [a]: a, ...c || {} }).map(((t3) => [t3, t3]))), ((t3) => {
      const n2 = [];
      return (e2 ? [u.find(((t4) => t4.id === e2))] : u).reduce(((t4, e3) => new Map([...t4, ...e3.elements])), /* @__PURE__ */ new Map()).forEach(((e3, l2) => {
        var i2;
        let r2 = {};
        Object.entries(e3).forEach((([e4, n3]) => {
          var l3;
          null != (l3 = t3.conditions) && l3[e4] && M(r2, n3);
        })), null != (i2 = null == s ? void 0 : s.defaults) && i2.element && M(r2, C(s.defaults.element, false, l2));
        const o2 = v(l2);
        o2 && (n2.includes(o2.id) || (n2.push(o2.id), o2.timeline.progress(0).clear(), A(o2)), (function(t4, e4, n3) {
          var l3;
          const i3 = e4.tl ? null == (l3 = Object.values(e4.tl)) ? void 0 : l3[0] : void 0;
          if (e4.to && e4.from) n3.fromTo(_(t4, e4), e4.from, e4.to, i3);
          else if (e4.to || e4.from) {
            const l4 = e4.to ? "to" : "from";
            n3[l4](_(t4, e4), e4[l4], i3);
          }
        })(l2, r2, o2.timeline), (!o2.timeline.scrollTrigger || o2.timeline.scrollTrigger && o2.timeline.scrollTrigger.isActive) && o2.timeline.restart());
      })), () => u.forEach(((t4) => A(t4)));
    }));
  }
  return $(), s.watch && (function() {
    const t2 = s.element, e2 = new MutationObserver((function(t3) {
      t3.forEach((function(t4) {
        var e3;
        const n3 = "attributes" === t4.type && t4.attributeName === s.dataAttribute, l2 = s.className && "class" === t4.attributeName && (null == (e3 = t4.target.getAttribute("class")) ? void 0 : e3.includes(s.className));
        if (n3 || l2 || "childList" === t4.type) {
          if ("childList" === t4.type) return void t4.addedNodes.forEach(((t5) => {
            var e4;
            if (t5.nodeType === Node.ELEMENT_NODE) {
              const n4 = t5;
              if (n4.hasAttribute(s.dataAttribute) || s.className && null != (e4 = n4.getAttribute("class")) && e4.includes(s.className)) {
                if (!g(n4)) return;
                return void E(n4);
              }
              {
                const t6 = (function(t7) {
                  let e5 = t7.parentElement;
                  for (; e5; ) {
                    if (e5.hasAttribute(s.dataAttribute) || Array.from(e5.classList).some(((t8) => t8.startsWith(s.className || ""))) && s.watch) return e5;
                    e5 = e5.parentElement;
                  }
                  return null;
                })(n4);
                if (!t6) return;
                if (t6) return console.log("mutation - childList: closest matching ancestor"), void E(t6);
              }
            }
          }));
          g(t4.target) && E(t4.target);
        }
      }));
    })), n2 = { attributes: true, attributeFilter: [s.dataAttribute, ...s.className ? ["class"] : []], subtree: true, childList: true };
    e2.observe(t2, n2);
  })(), { breakpoints: c, state: s, timelines: u };
}
export {
  rt as default
};
