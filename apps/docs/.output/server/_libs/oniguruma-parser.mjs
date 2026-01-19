function r(e) {
  if ([...e].length !== 1) throw new Error(`Expected "${e}" to be a single code point`);
  return e.codePointAt(0);
}
function l$1(e, t, n) {
  return e.has(t) || e.set(t, n), e.get(t);
}
const i = /* @__PURE__ */ new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]), o$1 = String.raw;
function u(e, t) {
  if (e == null) throw new Error(t ?? "Value expected");
  return e;
}
const m$1 = o$1`\[\^?`, b$1 = `c.? | C(?:-.?)?|${o$1`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${o$1`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${o$1`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${o$1`o\{[^\}]*\}?`}|${o$1`\d{1,3}`}`, y$1 = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, C$1 = new RegExp(o$1`
  \\ (?:
    ${b$1}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${y$1.source})+
  | ${m$1}
  | .
`.replace(/\s+/g, ""), "gsu"), T$1 = new RegExp(o$1`
  \\ (?:
    ${b$1}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${m$1}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function M$1(e, n = {}) {
  const t = { flags: "", ...n, rules: { captureGroup: false, singleline: false, ...n.rules } };
  if (typeof e != "string") throw new Error("String expected as pattern");
  const o2 = Y(t.flags), s2 = [o2.extended], a = { captureGroup: t.rules.captureGroup, getCurrentModX() {
    return s2.at(-1);
  }, numOpenGroups: 0, popModX() {
    s2.pop();
  }, pushModX(u2) {
    s2.push(u2);
  }, replaceCurrentModX(u2) {
    s2[s2.length - 1] = u2;
  }, singleline: t.rules.singleline };
  let r2 = [], i2;
  for (C$1.lastIndex = 0; i2 = C$1.exec(e); ) {
    const u2 = F$1(a, e, i2[0], C$1.lastIndex);
    u2.tokens ? r2.push(...u2.tokens) : u2.token && r2.push(u2.token), u2.lastIndex !== void 0 && (C$1.lastIndex = u2.lastIndex);
  }
  const l2 = [];
  let c = 0;
  r2.filter((u2) => u2.type === "GroupOpen").forEach((u2) => {
    u2.kind === "capturing" ? u2.number = ++c : u2.raw === "(" && l2.push(u2);
  }), c || l2.forEach((u2, S2) => {
    u2.kind = "capturing", u2.number = S2 + 1;
  });
  const g = c || l2.length;
  return { tokens: r2.map((u2) => u2.type === "EscapedNumber" ? ee$1(u2, g) : u2).flat(), flags: o2 };
}
function F$1(e, n, t, o2) {
  const [s2, a] = t;
  if (t === "[" || t === "[^") {
    const r2 = K$1(n, t, o2);
    return { tokens: r2.tokens, lastIndex: r2.lastIndex };
  }
  if (s2 === "\\") {
    if ("AbBGyYzZ".includes(a)) return { token: w$1(t, t) };
    if (/^\\g[<']/.test(t)) {
      if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
      return { token: R$1(t) };
    }
    if (/^\\k[<']/.test(t)) {
      if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
      return { token: A$1(t) };
    }
    if (a === "K") return { token: I$1("keep", t) };
    if (a === "N" || a === "R") return { token: k$1("newline", t, { negate: a === "N" }) };
    if (a === "O") return { token: k$1("any", t) };
    if (a === "X") return { token: k$1("text_segment", t) };
    const r2 = x(t, { inCharClass: false });
    return Array.isArray(r2) ? { tokens: r2 } : { token: r2 };
  }
  if (s2 === "(") {
    if (a === "*") return { token: j(t) };
    if (t === "(?{") throw new Error(`Unsupported callout "${t}"`);
    if (t.startsWith("(?#")) {
      if (n[o2] !== ")") throw new Error('Unclosed comment group "(?#"');
      return { lastIndex: o2 + 1 };
    }
    if (/^\(\?[-imx]+[:)]$/.test(t)) return { token: L$1(t, e) };
    if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, t === "(" && !e.captureGroup || t === "(?:") return { token: f$1("group", t) };
    if (t === "(?>") return { token: f$1("atomic", t) };
    if (t === "(?=" || t === "(?!" || t === "(?<=" || t === "(?<!") return { token: f$1(t[2] === "<" ? "lookbehind" : "lookahead", t, { negate: t.endsWith("!") }) };
    if (t === "(" && e.captureGroup || t.startsWith("(?<") && t.endsWith(">") || t.startsWith("(?'") && t.endsWith("'")) return { token: f$1("capturing", t, { ...t !== "(" && { name: t.slice(3, -1) } }) };
    if (t.startsWith("(?~")) {
      if (t === "(?~|") throw new Error(`Unsupported absence function kind "${t}"`);
      return { token: f$1("absence_repeater", t) };
    }
    throw t === "(?(" ? new Error(`Unsupported conditional "${t}"`) : new Error(`Invalid or unsupported group option "${t}"`);
  }
  if (t === ")") {
    if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw new Error('Unmatched ")"');
    return { token: Q$1(t) };
  }
  if (e.getCurrentModX()) {
    if (t === "#") {
      const r2 = n.indexOf(`
`, o2);
      return { lastIndex: r2 === -1 ? n.length : r2 };
    }
    if (/^\s$/.test(t)) {
      const r2 = /\s+/y;
      return r2.lastIndex = o2, { lastIndex: r2.exec(n) ? r2.lastIndex : o2 };
    }
  }
  if (t === ".") return { token: k$1("dot", t) };
  if (t === "^" || t === "$") {
    const r2 = e.singleline ? { "^": o$1`\A`, $: o$1`\Z` }[t] : t;
    return { token: w$1(r2, t) };
  }
  return t === "|" ? { token: P$1(t) } : y$1.test(t) ? { tokens: te$1(t) } : { token: d(r(t), t) };
}
function K$1(e, n, t) {
  const o2 = [E$1(n[1] === "^", n)];
  let s2 = 1, a;
  for (T$1.lastIndex = t; a = T$1.exec(e); ) {
    const r2 = a[0];
    if (r2[0] === "[" && r2[1] !== ":") s2++, o2.push(E$1(r2[1] === "^", r2));
    else if (r2 === "]") {
      if (o2.at(-1).type === "CharacterClassOpen") o2.push(d(93, r2));
      else if (s2--, o2.push(z$1(r2)), !s2) break;
    } else {
      const i2 = X$1(r2);
      Array.isArray(i2) ? o2.push(...i2) : o2.push(i2);
    }
  }
  return { tokens: o2, lastIndex: T$1.lastIndex || e.length };
}
function X$1(e) {
  if (e[0] === "\\") return x(e, { inCharClass: true });
  if (e[0] === "[") {
    const n = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
    if (!n || !i.has(n.groups.name)) throw new Error(`Invalid POSIX class "${e}"`);
    return k$1("posix", e, { value: n.groups.name, negate: !!n.groups.negate });
  }
  return e === "-" ? U$1(e) : e === "&&" ? H(e) : d(r(e), e);
}
function x(e, { inCharClass: n }) {
  const t = e[1];
  if (t === "c" || t === "C") return Z(e);
  if ("dDhHsSwW".includes(t)) return q(e);
  if (e.startsWith(o$1`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
  if (/^\\[pP]\{/.test(e)) {
    if (e.length === 3) throw new Error(`Incomplete or invalid Unicode property "${e}"`);
    return V$1(e);
  }
  if (new RegExp("^\\\\x[89A-Fa-f]\\p{AHex}", "u").test(e)) try {
    const o2 = e.split(/\\x/).slice(1).map((i2) => parseInt(i2, 16)), s2 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }).decode(new Uint8Array(o2)), a = new TextEncoder();
    return [...s2].map((i2) => {
      const l2 = [...a.encode(i2)].map((c) => `\\x${c.toString(16)}`).join("");
      return d(r(i2), l2);
    });
  } catch {
    throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
  }
  if (t === "u" || t === "x") return d(J$1(e), e);
  if ($$1.has(t)) return d($$1.get(t), e);
  if (/\d/.test(t)) return W$1(n, e);
  if (e === "\\") throw new Error(o$1`Incomplete escape "\"`);
  if (t === "M") throw new Error(`Unsupported meta "${e}"`);
  if ([...e].length === 2) return d(e.codePointAt(1), e);
  throw new Error(`Unexpected escape "${e}"`);
}
function P$1(e) {
  return { type: "Alternator", raw: e };
}
function w$1(e, n) {
  return { type: "Assertion", kind: e, raw: n };
}
function A$1(e) {
  return { type: "Backreference", raw: e };
}
function d(e, n) {
  return { type: "Character", value: e, raw: n };
}
function z$1(e) {
  return { type: "CharacterClassClose", raw: e };
}
function U$1(e) {
  return { type: "CharacterClassHyphen", raw: e };
}
function H(e) {
  return { type: "CharacterClassIntersector", raw: e };
}
function E$1(e, n) {
  return { type: "CharacterClassOpen", negate: e, raw: n };
}
function k$1(e, n, t = {}) {
  return { type: "CharacterSet", kind: e, ...t, raw: n };
}
function I$1(e, n, t = {}) {
  return e === "keep" ? { type: "Directive", kind: e, raw: n } : { type: "Directive", kind: e, flags: u(t.flags), raw: n };
}
function W$1(e, n) {
  return { type: "EscapedNumber", inCharClass: e, raw: n };
}
function Q$1(e) {
  return { type: "GroupClose", raw: e };
}
function f$1(e, n, t = {}) {
  return { type: "GroupOpen", kind: e, ...t, raw: n };
}
function D$1(e, n, t, o2) {
  return { type: "NamedCallout", kind: e, tag: n, arguments: t, raw: o2 };
}
function _$1(e, n, t, o2) {
  return { type: "Quantifier", kind: e, min: n, max: t, raw: o2 };
}
function R$1(e) {
  return { type: "Subroutine", raw: e };
}
const B$1 = /* @__PURE__ */ new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]), $$1 = /* @__PURE__ */ new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function Z(e) {
  const n = e[1] === "c" ? e[2] : e[3];
  if (!n || !/[A-Za-z]/.test(n)) throw new Error(`Unsupported control character "${e}"`);
  return d(r(n.toUpperCase()) - 64, e);
}
function L$1(e, n) {
  let { on: t, off: o2 } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
  o2 ??= "";
  const s2 = (n.getCurrentModX() || t.includes("x")) && !o2.includes("x"), a = v(t), r2 = v(o2), i2 = {};
  if (a && (i2.enable = a), r2 && (i2.disable = r2), e.endsWith(")")) return n.replaceCurrentModX(s2), I$1("flags", e, { flags: i2 });
  if (e.endsWith(":")) return n.pushModX(s2), n.numOpenGroups++, f$1("group", e, { ...(a || r2) && { flags: i2 } });
  throw new Error(`Unexpected flag modifier "${e}"`);
}
function j(e) {
  const n = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
  if (!n) throw new Error(`Incomplete or invalid named callout "${e}"`);
  const { name: t, tag: o2, args: s2 } = n.groups;
  if (!t) throw new Error(`Invalid named callout "${e}"`);
  if (o2 === "") throw new Error(`Named callout tag with empty value not allowed "${e}"`);
  const a = s2 ? s2.split(",").filter((g) => g !== "").map((g) => /^[+-]?\d+$/.test(g) ? +g : g) : [], [r2, i2, l2] = a, c = B$1.has(t) ? t.toLowerCase() : "custom";
  switch (c) {
    case "fail":
    case "mismatch":
    case "skip":
      if (a.length > 0) throw new Error(`Named callout arguments not allowed "${a}"`);
      break;
    case "error":
      if (a.length > 1) throw new Error(`Named callout allows only one argument "${a}"`);
      if (typeof r2 == "string") throw new Error(`Named callout argument must be a number "${r2}"`);
      break;
    case "max":
      if (!a.length || a.length > 2) throw new Error(`Named callout must have one or two arguments "${a}"`);
      if (typeof r2 == "string" && !/^[A-Za-z_]\w*$/.test(r2)) throw new Error(`Named callout argument one must be a tag or number "${r2}"`);
      if (a.length === 2 && (typeof i2 == "number" || !/^[<>X]$/.test(i2))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${i2}"`);
      break;
    case "count":
    case "total_count":
      if (a.length > 1) throw new Error(`Named callout allows only one argument "${a}"`);
      if (a.length === 1 && (typeof r2 == "number" || !/^[<>X]$/.test(r2))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${r2}"`);
      break;
    case "cmp":
      if (a.length !== 3) throw new Error(`Named callout must have three arguments "${a}"`);
      if (typeof r2 == "string" && !/^[A-Za-z_]\w*$/.test(r2)) throw new Error(`Named callout argument one must be a tag or number "${r2}"`);
      if (typeof i2 == "number" || !/^(?:[<>!=]=|[<>])$/.test(i2)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${i2}"`);
      if (typeof l2 == "string" && !/^[A-Za-z_]\w*$/.test(l2)) throw new Error(`Named callout argument three must be a tag or number "${l2}"`);
      break;
    case "custom":
      throw new Error(`Undefined callout name "${t}"`);
    default:
      throw new Error(`Unexpected named callout kind "${c}"`);
  }
  return D$1(c, o2 ?? null, s2?.split(",") ?? null, e);
}
function O$1(e) {
  let n = null, t, o2;
  if (e[0] === "{") {
    const { minStr: s2, maxStr: a } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, r2 = 1e5;
    if (+s2 > r2 || a && +a > r2) throw new Error("Quantifier value unsupported in Oniguruma");
    if (t = +s2, o2 = a === void 0 ? +s2 : a === "" ? 1 / 0 : +a, t > o2 && (n = "possessive", [t, o2] = [o2, t]), e.endsWith("?")) {
      if (n === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
      n = "lazy";
    } else n || (n = "greedy");
  } else t = e[0] === "+" ? 1 : 0, o2 = e[0] === "?" ? 1 : 1 / 0, n = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy";
  return _$1(n, t, o2, e);
}
function q(e) {
  const n = e[1].toLowerCase();
  return k$1({ d: "digit", h: "hex", s: "space", w: "word" }[n], e, { negate: e[1] !== n });
}
function V$1(e) {
  const { p: n, neg: t, value: o2 } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
  return k$1("property", e, { value: o2, negate: n === "P" && !t || n === "p" && !!t });
}
function v(e) {
  const n = {};
  return e.includes("i") && (n.ignoreCase = true), e.includes("m") && (n.dotAll = true), e.includes("x") && (n.extended = true), Object.keys(n).length ? n : null;
}
function Y(e) {
  const n = { ignoreCase: false, dotAll: false, extended: false, digitIsAscii: false, posixIsAscii: false, spaceIsAscii: false, wordIsAscii: false, textSegmentMode: null };
  for (let t = 0; t < e.length; t++) {
    const o2 = e[t];
    if (!"imxDPSWy".includes(o2)) throw new Error(`Invalid flag "${o2}"`);
    if (o2 === "y") {
      if (!/^y{[gw]}/.test(e.slice(t))) throw new Error('Invalid or unspecified flag "y" mode');
      n.textSegmentMode = e[t + 2] === "g" ? "grapheme" : "word", t += 3;
      continue;
    }
    n[{ i: "ignoreCase", m: "dotAll", x: "extended", D: "digitIsAscii", P: "posixIsAscii", S: "spaceIsAscii", W: "wordIsAscii" }[o2]] = true;
  }
  return n;
}
function J$1(e) {
  if (new RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u").test(e)) throw new Error(`Incomplete or invalid escape "${e}"`);
  const n = e[2] === "{" ? new RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u").exec(e).groups.hex : e.slice(2);
  return parseInt(n, 16);
}
function ee$1(e, n) {
  const { raw: t, inCharClass: o2 } = e, s2 = t.slice(1);
  if (!o2 && (s2 !== "0" && s2.length === 1 || s2[0] !== "0" && +s2 <= n)) return [A$1(t)];
  const a = [], r$1 = s2.match(/^[0-7]+|\d/g);
  for (let i2 = 0; i2 < r$1.length; i2++) {
    const l2 = r$1[i2];
    let c;
    if (i2 === 0 && l2 !== "8" && l2 !== "9") {
      if (c = parseInt(l2, 8), c > 127) throw new Error(o$1`Octal encoded byte above 177 unsupported "${t}"`);
    } else c = r(l2);
    a.push(d(c, (i2 === 0 ? "\\" : "") + l2));
  }
  return a;
}
function te$1(e) {
  const n = [], t = new RegExp(y$1, "gy");
  let o2;
  for (; o2 = t.exec(e); ) {
    const s2 = o2[0];
    if (s2[0] === "{") {
      const a = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(s2);
      if (a) {
        const { min: r2, max: i2 } = a.groups;
        if (+r2 > +i2 && s2.endsWith("?")) {
          t.lastIndex--, n.push(O$1(s2.slice(0, -1)));
          continue;
        }
      }
    }
    n.push(O$1(s2));
  }
  return n;
}
function o(e, t) {
  if (!Array.isArray(e.body)) throw new Error("Expected node with body array");
  if (e.body.length !== 1) return false;
  const r2 = e.body[0];
  return !t || Object.keys(t).every((n) => t[n] === r2[n]);
}
function s(e) {
  return y.has(e.type);
}
const y = /* @__PURE__ */ new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);
function J(e, r2 = {}) {
  const n = { flags: "", normalizeUnknownPropertyNames: false, skipBackrefValidation: false, skipLookbehindValidation: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r2, rules: { captureGroup: false, singleline: false, ...r2.rules } }, t = M$1(e, { flags: n.flags, rules: { captureGroup: n.rules.captureGroup, singleline: n.rules.singleline } }), s2 = (p, N) => {
    const u2 = t.tokens[o2.nextIndex];
    switch (o2.parent = p, o2.nextIndex++, u2.type) {
      case "Alternator":
        return b();
      case "Assertion":
        return W(u2);
      case "Backreference":
        return X(u2, o2);
      case "Character":
        return m(u2.value, { useLastValid: !!N.isCheckingRangeEnd });
      case "CharacterClassHyphen":
        return ee(u2, o2, N);
      case "CharacterClassOpen":
        return re(u2, o2, N);
      case "CharacterSet":
        return ne(u2, o2);
      case "Directive":
        return I(u2.kind, { flags: u2.flags });
      case "GroupOpen":
        return te(u2, o2, N);
      case "NamedCallout":
        return U(u2.kind, u2.tag, u2.arguments);
      case "Quantifier":
        return oe(u2, o2);
      case "Subroutine":
        return ae(u2, o2);
      default:
        throw new Error(`Unexpected token type "${u2.type}"`);
    }
  }, o2 = { capturingGroups: [], hasNumberedRef: false, namedGroupsByName: /* @__PURE__ */ new Map(), nextIndex: 0, normalizeUnknownPropertyNames: n.normalizeUnknownPropertyNames, parent: null, skipBackrefValidation: n.skipBackrefValidation, skipLookbehindValidation: n.skipLookbehindValidation, skipPropertyNameValidation: n.skipPropertyNameValidation, subroutines: [], tokens: t.tokens, unicodePropertyMap: n.unicodePropertyMap, walk: s2 }, i2 = B(T(t.flags));
  let d2 = i2.body[0];
  for (; o2.nextIndex < t.tokens.length; ) {
    const p = s2(d2, {});
    p.type === "Alternative" ? (i2.body.push(p), d2 = p) : d2.body.push(p);
  }
  const { capturingGroups: a, hasNumberedRef: l2, namedGroupsByName: c, subroutines: f2 } = o2;
  if (l2 && c.size && !n.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
  for (const { ref: p } of f2) if (typeof p == "number") {
    if (p > a.length) throw new Error("Subroutine uses a group number that's not defined");
    p && (a[p - 1].isSubroutined = true);
  } else if (c.has(p)) {
    if (c.get(p).length > 1) throw new Error(o$1`Subroutine uses a duplicate group name "\g<${p}>"`);
    c.get(p)[0].isSubroutined = true;
  } else throw new Error(o$1`Subroutine uses a group name that's not defined "\g<${p}>"`);
  return i2;
}
function W({ kind: e }) {
  return F(u({ "^": "line_start", $: "line_end", "\\A": "string_start", "\\b": "word_boundary", "\\B": "word_boundary", "\\G": "search_start", "\\y": "text_segment_boundary", "\\Y": "text_segment_boundary", "\\z": "string_end", "\\Z": "string_end_newline" }[e], `Unexpected assertion kind "${e}"`), { negate: e === o$1`\B` || e === o$1`\Y` });
}
function X({ raw: e }, r2) {
  const n = /^\\k[<']/.test(e), t = n ? e.slice(3, -1) : e.slice(1), s2 = (o2, i2 = false) => {
    const d2 = r2.capturingGroups.length;
    let a = false;
    if (o2 > d2) if (r2.skipBackrefValidation) a = true;
    else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
    return r2.hasNumberedRef = true, k(i2 ? d2 + 1 - o2 : o2, { orphan: a });
  };
  if (n) {
    const o2 = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(t);
    if (o2) return s2(+o2.groups.num, !!o2.groups.sign);
    if (/[-+]/.test(t)) throw new Error(`Invalid backref name "${e}"`);
    if (!r2.namedGroupsByName.has(t)) throw new Error(`Group name not defined to the left "${e}"`);
    return k(t);
  }
  return s2(+t);
}
function ee(e, r$1, n) {
  const { tokens: t, walk: s2 } = r$1, o2 = r$1.parent, i2 = o2.body.at(-1), d2 = t[r$1.nextIndex];
  if (!n.isCheckingRangeEnd && i2 && i2.type !== "CharacterClass" && i2.type !== "CharacterClassRange" && d2 && d2.type !== "CharacterClassOpen" && d2.type !== "CharacterClassClose" && d2.type !== "CharacterClassIntersector") {
    const a = s2(o2, { ...n, isCheckingRangeEnd: true });
    if (i2.type === "Character" && a.type === "Character") return o2.body.pop(), L(i2, a);
    throw new Error("Invalid character class range");
  }
  return m(r("-"));
}
function re({ negate: e }, r2, n) {
  const { tokens: t, walk: s2 } = r2, o2 = t[r2.nextIndex], i2 = [C()];
  let d2 = z(o2);
  for (; d2.type !== "CharacterClassClose"; ) {
    if (d2.type === "CharacterClassIntersector") i2.push(C()), r2.nextIndex++;
    else {
      const l2 = i2.at(-1);
      l2.body.push(s2(l2, n));
    }
    d2 = z(t[r2.nextIndex], o2);
  }
  const a = C({ negate: e });
  return i2.length === 1 ? a.body = i2[0].body : (a.kind = "intersection", a.body = i2.map((l2) => l2.body.length === 1 ? l2.body[0] : l2)), r2.nextIndex++, a;
}
function ne({ kind: e, negate: r2, value: n }, t) {
  const { normalizeUnknownPropertyNames: s2, skipPropertyNameValidation: o2, unicodePropertyMap: i$1 } = t;
  if (e === "property") {
    const d2 = w(n);
    if (i.has(d2) && !i$1?.has(d2)) e = "posix", n = d2;
    else return Q(n, { negate: r2, normalizeUnknownPropertyNames: s2, skipPropertyNameValidation: o2, unicodePropertyMap: i$1 });
  }
  return e === "posix" ? R(n, { negate: r2 }) : E(e, { negate: r2 });
}
function te(e, r2, n) {
  const { tokens: t, capturingGroups: s2, namedGroupsByName: o2, skipLookbehindValidation: i2, walk: d2 } = r2, a = ie(e), l2 = a.type === "AbsenceFunction", c = $(a), f2 = c && a.negate;
  if (a.type === "CapturingGroup" && (s2.push(a), a.name && l$1(o2, a.name, []).push(a)), l2 && n.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
  let p = D(t[r2.nextIndex]);
  for (; p.type !== "GroupClose"; ) {
    if (p.type === "Alternator") a.body.push(b()), r2.nextIndex++;
    else {
      const N = a.body.at(-1), u2 = d2(N, { ...n, isInAbsenceFunction: n.isInAbsenceFunction || l2, isInLookbehind: n.isInLookbehind || c, isInNegLookbehind: n.isInNegLookbehind || f2 });
      if (N.body.push(u2), (c || n.isInLookbehind) && !i2) {
        const v2 = "Lookbehind includes a pattern not allowed by Oniguruma";
        if (f2 || n.isInNegLookbehind) {
          if (M(u2) || u2.type === "CapturingGroup") throw new Error(v2);
        } else if (M(u2) || $(u2) && u2.negate) throw new Error(v2);
      }
    }
    p = D(t[r2.nextIndex]);
  }
  return r2.nextIndex++, a;
}
function oe({ kind: e, min: r2, max: n }, t) {
  const s$1 = t.parent, o2 = s$1.body.at(-1);
  if (!o2 || !s(o2)) throw new Error("Quantifier requires a repeatable token");
  const i2 = _(e, r2, n, o2);
  return s$1.body.pop(), i2;
}
function ae({ raw: e }, r2) {
  const { capturingGroups: n, subroutines: t } = r2;
  let s2 = e.slice(3, -1);
  const o2 = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(s2);
  if (o2) {
    const d2 = +o2.groups.num, a = n.length;
    if (r2.hasNumberedRef = true, s2 = { "": d2, "+": a + d2, "-": a + 1 - d2 }[o2.groups.sign], s2 < 1) throw new Error("Invalid subroutine number");
  } else s2 === "0" && (s2 = 0);
  const i2 = O(s2);
  return t.push(i2), i2;
}
function G(e, r2) {
  return { type: "AbsenceFunction", kind: e, body: h(r2?.body) };
}
function b(e) {
  return { type: "Alternative", body: V(e?.body) };
}
function F(e, r2) {
  const n = { type: "Assertion", kind: e };
  return (e === "word_boundary" || e === "text_segment_boundary") && (n.negate = !!r2?.negate), n;
}
function k(e, r2) {
  const n = !!r2?.orphan;
  return { type: "Backreference", ref: e, ...n && { orphan: n } };
}
function P(e, r2) {
  const n = { name: void 0, isSubroutined: false, ...r2 };
  if (n.name !== void 0 && !se(n.name)) throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
  return { type: "CapturingGroup", number: e, ...n.name && { name: n.name }, ...n.isSubroutined && { isSubroutined: n.isSubroutined }, body: h(r2?.body) };
}
function m(e, r2) {
  const n = { useLastValid: false, ...r2 };
  if (e > 1114111) {
    const t = e.toString(16);
    if (n.useLastValid) e = 1114111;
    else throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${t}}"`) : new Error(`Invalid code point out of range in JS "\\x{${t}}"`);
  }
  return { type: "Character", value: e };
}
function C(e) {
  const r2 = { kind: "union", negate: false, ...e };
  return { type: "CharacterClass", kind: r2.kind, negate: r2.negate, body: V(e?.body) };
}
function L(e, r2) {
  if (r2.value < e.value) throw new Error("Character class range out of order");
  return { type: "CharacterClassRange", min: e, max: r2 };
}
function E(e, r2) {
  const n = !!r2?.negate, t = { type: "CharacterSet", kind: e };
  return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (t.negate = n), (e === "text_segment" || e === "newline" && !n) && (t.variableLength = true), t;
}
function I(e, r2 = {}) {
  if (e === "keep") return { type: "Directive", kind: e };
  if (e === "flags") return { type: "Directive", kind: e, flags: u(r2.flags) };
  throw new Error(`Unexpected directive kind "${e}"`);
}
function T(e) {
  return { type: "Flags", ...e };
}
function A(e) {
  const r2 = e?.atomic, n = e?.flags;
  if (r2 && n) throw new Error("Atomic group cannot have flags");
  return { type: "Group", ...r2 && { atomic: r2 }, ...n && { flags: n }, body: h(e?.body) };
}
function K(e) {
  const r2 = { behind: false, negate: false, ...e };
  return { type: "LookaroundAssertion", kind: r2.behind ? "lookbehind" : "lookahead", negate: r2.negate, body: h(e?.body) };
}
function U(e, r2, n) {
  return { type: "NamedCallout", kind: e, tag: r2, arguments: n };
}
function R(e, r2) {
  const n = !!r2?.negate;
  if (!i.has(e)) throw new Error(`Invalid POSIX class "${e}"`);
  return { type: "CharacterSet", kind: "posix", value: e, negate: n };
}
function _(e, r2, n, t) {
  if (r2 > n) throw new Error("Invalid reversed quantifier range");
  return { type: "Quantifier", kind: e, min: r2, max: n, body: t };
}
function B(e, r2) {
  return { type: "Regex", body: h(r2?.body), flags: e };
}
function O(e) {
  return { type: "Subroutine", ref: e };
}
function Q(e, r2) {
  const n = { negate: false, normalizeUnknownPropertyNames: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r2 };
  let t = n.unicodePropertyMap?.get(w(e));
  if (!t) {
    if (n.normalizeUnknownPropertyNames) t = de(e);
    else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw new Error(o$1`Invalid Unicode property "\p{${e}}"`);
  }
  return { type: "CharacterSet", kind: "property", value: t ?? e, negate: n.negate };
}
function ie({ flags: e, kind: r2, name: n, negate: t, number: s2 }) {
  switch (r2) {
    case "absence_repeater":
      return G("repeater");
    case "atomic":
      return A({ atomic: true });
    case "capturing":
      return P(s2, { name: n });
    case "group":
      return A({ flags: e });
    case "lookahead":
    case "lookbehind":
      return K({ behind: r2 === "lookbehind", negate: t });
    default:
      throw new Error(`Unexpected group kind "${r2}"`);
  }
}
function h(e) {
  if (e === void 0) e = [b()];
  else if (!Array.isArray(e) || !e.length || !e.every((r2) => r2.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
  return e;
}
function V(e) {
  if (e === void 0) e = [];
  else if (!Array.isArray(e) || !e.every((r2) => !!r2.type)) throw new Error("Invalid body; expected array of nodes");
  return e;
}
function M(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookahead";
}
function $(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookbehind";
}
function se(e) {
  return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
}
function de(e) {
  return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (r2) => r2[0].toUpperCase() + r2.slice(1).toLowerCase());
}
function w(e) {
  return e.replace(/[- _]+/g, "").toLowerCase();
}
function z(e, r2) {
  return u(e, `${r2?.type === "Character" && r2.value === 93 ? "Empty" : "Unclosed"} character class`);
}
function D(e) {
  return u(e, "Unclosed group");
}
function S(a, v2, N = null) {
  function u$1(e, s2) {
    for (let t = 0; t < e.length; t++) {
      const r2 = n(e[t], s2, t, e);
      t = Math.max(-1, t + r2);
    }
  }
  function n(e, s2 = null, t = null, r2 = null) {
    let i2 = 0, c = false;
    const d2 = { node: e, parent: s2, key: t, container: r2, root: a, remove() {
      f(r2).splice(Math.max(0, l(t) + i2), 1), i2--, c = true;
    }, removeAllNextSiblings() {
      return f(r2).splice(l(t) + 1);
    }, removeAllPrevSiblings() {
      const o2 = l(t) + i2;
      return i2 -= o2, f(r2).splice(0, Math.max(0, o2));
    }, replaceWith(o2, y2 = {}) {
      const b2 = !!y2.traverse;
      r2 ? r2[Math.max(0, l(t) + i2)] = o2 : u(s2, "Can't replace root node")[t] = o2, b2 && n(o2, s2, t, r2), c = true;
    }, replaceWithMultiple(o2, y2 = {}) {
      const b2 = !!y2.traverse;
      if (f(r2).splice(Math.max(0, l(t) + i2), 1, ...o2), i2 += o2.length - 1, b2) {
        let g = 0;
        for (let x2 = 0; x2 < o2.length; x2++) g += n(o2[x2], s2, l(t) + x2 + g, r2);
      }
      c = true;
    }, skip() {
      c = true;
    } }, { type: m2 } = e, h2 = v2["*"], p = v2[m2], R2 = typeof h2 == "function" ? h2 : h2?.enter, P2 = typeof p == "function" ? p : p?.enter;
    if (R2?.(d2, N), P2?.(d2, N), !c) switch (m2) {
      case "AbsenceFunction":
      case "CapturingGroup":
      case "Group":
        u$1(e.body, e);
        break;
      case "Alternative":
      case "CharacterClass":
        u$1(e.body, e);
        break;
      case "Assertion":
      case "Backreference":
      case "Character":
      case "CharacterSet":
      case "Directive":
      case "Flags":
      case "NamedCallout":
      case "Subroutine":
        break;
      case "CharacterClassRange":
        n(e.min, e, "min"), n(e.max, e, "max");
        break;
      case "LookaroundAssertion":
        u$1(e.body, e);
        break;
      case "Quantifier":
        n(e.body, e, "body");
        break;
      case "Regex":
        u$1(e.body, e), n(e.flags, e, "flags");
        break;
      default:
        throw new Error(`Unexpected node type "${m2}"`);
    }
    return p?.exit?.(d2, N), h2?.exit?.(d2, N), i2;
  }
  return n(a), a;
}
function f(a) {
  if (!Array.isArray(a)) throw new Error("Container expected");
  return a;
}
function l(a) {
  if (typeof a != "number") throw new Error("Numeric key expected");
  return a;
}
export {
  A,
  C,
  E,
  F,
  J,
  K,
  O,
  P,
  Q,
  S,
  _,
  b,
  k,
  m,
  o,
  w
};
