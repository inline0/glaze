var L = ((i) => (i[i.AggregateError = 1] = "AggregateError", i[i.ArrowFunction = 2] = "ArrowFunction", i[i.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i[i.ObjectAssign = 8] = "ObjectAssign", i[i.BigIntTypedArray = 16] = "BigIntTypedArray", i[i.RegExp = 32] = "RegExp", i))(L || {});
var N = Symbol.asyncIterator, fr = Symbol.hasInstance, I = Symbol.isConcatSpreadable, b = Symbol.iterator, Sr = Symbol.match, mr = Symbol.matchAll, pr = Symbol.replace, dr = Symbol.search, gr = Symbol.species, yr = Symbol.split, Nr = Symbol.toPrimitive, P = Symbol.toStringTag, br = Symbol.unscopables;
var qr = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, Ce = { [N]: 0, [fr]: 1, [I]: 2, [b]: 3, [Sr]: 4, [mr]: 5, [pr]: 6, [dr]: 7, [gr]: 8, [yr]: 9, [Nr]: 10, [P]: 11, [br]: 12 }, Xr = { 0: N, 1: fr, 2: I, 3: b, 4: Sr, 5: mr, 6: pr, 7: dr, 8: gr, 9: yr, 10: Nr, 11: P, 12: br }, Qr = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, o = void 0, et = { 2: true, 3: false, 1: o, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN };
var ve = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" }, rt = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError };
function c(e, r, t, n, a, s, i, u, l, g, S, d) {
  return { t: e, i: r, s: t, c: n, m: a, p: s, e: i, a: u, f: l, b: g, o: S, l: d };
}
function D(e) {
  return c(2, o, e, o, o, o, o, o, o, o, o, o);
}
var Z = D(2), $ = D(3), Ae = D(1), Re = D(0), tt = D(4), nt = D(5), ot = D(6), at = D(7);
function sn(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return o;
  }
}
function y(e) {
  let r = "", t = 0, n;
  for (let a = 0, s = e.length; a < s; a++) n = sn(e[a]), n && (r += e.slice(t, a) + n, t = a + 1);
  return t === 0 ? r = e : r += e.slice(t), r;
}
function un(e) {
  switch (e) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return e;
  }
}
function F(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, un);
}
var U = "__SEROVAL_REFS__", ce = "$R", Ee = `self.${ce}`;
function ln(e) {
  return e == null ? `${Ee}=${Ee}||[]` : `(${Ee}=${Ee}||{})["${y(e)}"]=[]`;
}
var Cr = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
function vr(e) {
  return Cr.has(e);
}
function fn(e) {
  return j.has(e);
}
function st(e) {
  if (vr(e)) return Cr.get(e);
  throw new Ie(e);
}
function it(e) {
  if (fn(e)) return j.get(e);
  throw new Pe(e);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, U, { value: j, configurable: true, writable: false, enumerable: false }) : typeof window != "undefined" ? Object.defineProperty(window, U, { value: j, configurable: true, writable: false, enumerable: false }) : typeof self != "undefined" ? Object.defineProperty(self, U, { value: j, configurable: true, writable: false, enumerable: false }) : typeof global != "undefined" && Object.defineProperty(global, U, { value: j, configurable: true, writable: false, enumerable: false });
function xe(e) {
  return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0;
}
function Sn(e) {
  let r = ve[xe(e)];
  return e.name !== r ? { name: e.name } : e.constructor.name !== r ? { name: e.constructor.name } : {};
}
function q(e, r) {
  let t = Sn(e), n = Object.getOwnPropertyNames(e);
  for (let a = 0, s = n.length, i; a < s; a++) i = n[a], i !== "name" && i !== "message" && (i === "stack" ? r & 4 && (t = t || {}, t[i] = e[i]) : (t = t || {}, t[i] = e[i]));
  return t;
}
function Te(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function Oe(e) {
  switch (e) {
    case Number.POSITIVE_INFINITY:
      return nt;
    case Number.NEGATIVE_INFINITY:
      return ot;
  }
  return e !== e ? at : Object.is(e, -0) ? tt : c(0, o, e, o, o, o, o, o, o, o, o, o);
}
function X(e) {
  return c(1, o, y(e), o, o, o, o, o, o, o, o, o);
}
function we(e) {
  return c(3, o, "" + e, o, o, o, o, o, o, o, o, o);
}
function lt(e) {
  return c(4, e, o, o, o, o, o, o, o, o, o, o);
}
function he(e, r) {
  let t = r.valueOf();
  return c(5, e, t !== t ? "" : r.toISOString(), o, o, o, o, o, o, o, o, o);
}
function ze(e, r) {
  return c(6, e, o, y(r.source), r.flags, o, o, o, o, o, o, o);
}
function ct(e, r) {
  return c(17, e, Ce[r], o, o, o, o, o, o, o, o, o);
}
function ft(e, r) {
  return c(18, e, y(st(r)), o, o, o, o, o, o, o, o, o);
}
function fe(e, r, t) {
  return c(25, e, t, y(r), o, o, o, o, o, o, o, o);
}
function _e(e, r, t) {
  return c(9, e, o, o, o, o, o, t, o, o, Te(r), o);
}
function ke(e, r) {
  return c(21, e, o, o, o, o, o, o, r, o, o, o);
}
function De(e, r, t) {
  return c(15, e, o, r.constructor.name, o, o, o, o, t, r.byteOffset, o, r.length);
}
function Fe(e, r, t) {
  return c(16, e, o, r.constructor.name, o, o, o, o, t, r.byteOffset, o, r.byteLength);
}
function Be(e, r, t) {
  return c(20, e, o, o, o, o, o, o, t, r.byteOffset, o, r.byteLength);
}
function Me(e, r, t) {
  return c(13, e, xe(r), o, y(r.message), t, o, o, o, o, o, o);
}
function Ve(e, r, t) {
  return c(14, e, xe(r), o, y(r.message), t, o, o, o, o, o, o);
}
function Le(e, r) {
  return c(7, e, o, o, o, o, o, r, o, o, o, o);
}
function Ue(e, r) {
  return c(28, o, o, o, o, o, o, [e, r], o, o, o, o);
}
function je(e, r) {
  return c(30, o, o, o, o, o, o, [e, r], o, o, o, o);
}
function Ye(e, r, t) {
  return c(31, e, o, o, o, o, o, t, r, o, o, o);
}
function We(e, r) {
  return c(32, e, o, o, o, o, o, o, r, o, o, o);
}
function Ge(e, r) {
  return c(33, e, o, o, o, o, o, o, r, o, o, o);
}
function Ke(e, r) {
  return c(34, e, o, o, o, o, o, o, r, o, o, o);
}
var mn = { parsing: 1, serialization: 2, deserialization: 3 };
function pn(e) {
  return `Seroval Error (step: ${mn[e]})`;
}
var dn = (e, r) => pn(e), Se = class extends Error {
  constructor(t, n) {
    super(dn(t));
    this.cause = n;
  }
}, z = class extends Se {
  constructor(r) {
    super("parsing", r);
  }
}, He = class extends Se {
  constructor(r) {
    super("deserialization", r);
  }
};
function _(e) {
  return `Seroval Error (specific: ${e})`;
}
var x = class extends Error {
  constructor(t) {
    super(_(1));
    this.value = t;
  }
}, O = class extends Error {
  constructor(r) {
    super(_(2));
  }
}, Q = class extends Error {
  constructor(r) {
    super(_(3));
  }
}, B = class extends Error {
  constructor(r) {
    super(_(4));
  }
}, Ie = class extends Error {
  constructor(t) {
    super(_(5));
    this.value = t;
  }
}, Pe = class extends Error {
  constructor(r) {
    super(_(6));
  }
}, Je = class extends Error {
  constructor(r) {
    super(_(7));
  }
}, w = class extends Error {
  constructor(r) {
    super(_(8));
  }
}, ee = class extends Error {
  constructor(r) {
    super(_(9));
  }
};
var Y = class {
  constructor(r, t) {
    this.value = r;
    this.replacement = t;
  }
};
var re = () => {
  let e = { p: 0, s: 0, f: 0 };
  return e.p = new Promise((r, t) => {
    e.s = r, e.f = t;
  }), e;
}, gn = (e, r) => {
  e.s(r), e.p.s = 1, e.p.v = r;
}, yn = (e, r) => {
  e.f(r), e.p.s = 2, e.p.v = r;
}, mt = re.toString(), pt = gn.toString(), dt = yn.toString(), Rr = () => {
  let e = [], r = [], t = true, n = false, a = 0, s = (l, g, S) => {
    for (S = 0; S < a; S++) r[S] && r[S][g](l);
  }, i = (l, g, S, d) => {
    for (g = 0, S = e.length; g < S; g++) d = e[g], !t && g === S - 1 ? l[n ? "return" : "throw"](d) : l.next(d);
  }, u = (l, g) => (t && (g = a++, r[g] = l), i(l), () => {
    t && (r[g] = r[a], r[a--] = void 0);
  });
  return { __SEROVAL_STREAM__: true, on: (l) => u(l), next: (l) => {
    t && (e.push(l), s(l, "next"));
  }, throw: (l) => {
    t && (e.push(l), s(l, "throw"), t = false, n = false, r.length = 0);
  }, return: (l) => {
    t && (e.push(l), s(l, "return"), t = false, n = true, r.length = 0);
  } };
}, gt = Rr.toString(), Er = (e) => (r) => () => {
  let t = 0, n = { [e]: () => n, next: () => {
    if (t > r.d) return { done: true, value: void 0 };
    let a = t++, s = r.v[a];
    if (a === r.t) throw s;
    return { done: a === r.d, value: s };
  } };
  return n;
}, yt = Er.toString(), Ir = (e, r) => (t) => () => {
  let n = 0, a = -1, s = false, i = [], u = [], l = (S = 0, d = u.length) => {
    for (; S < d; S++) u[S].s({ done: true, value: void 0 });
  };
  t.on({ next: (S) => {
    let d = u.shift();
    d && d.s({ done: false, value: S }), i.push(S);
  }, throw: (S) => {
    let d = u.shift();
    d && d.f(S), l(), a = i.length, s = true, i.push(S);
  }, return: (S) => {
    let d = u.shift();
    d && d.s({ done: true, value: S }), l(), a = i.length, i.push(S);
  } });
  let g = { [e]: () => g, next: () => {
    if (a === -1) {
      let H = n++;
      if (H >= i.length) {
        let $r = r();
        return u.push($r), $r.p;
      }
      return { done: false, value: i[H] };
    }
    if (n > a) return { done: true, value: void 0 };
    let S = n++, d = i[S];
    if (S !== a) return { done: false, value: d };
    if (s) throw d;
    return { done: true, value: d };
  } };
  return g;
}, Nt = Ir.toString(), Pr = (e) => {
  let r = atob(e), t = r.length, n = new Uint8Array(t);
  for (let a = 0; a < t; a++) n[a] = r.charCodeAt(a);
  return n.buffer;
}, bt = Pr.toString();
var Ct = {}, vt = {};
var At = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} }, Rt = { 0: "[]", 1: mt, 2: pt, 3: dt, 4: gt, 5: bt };
function M(e) {
  return "__SEROVAL_STREAM__" in e;
}
function te() {
  return Rr();
}
function Ze(e) {
  let r = te(), t = e[N]();
  async function n() {
    try {
      let a = await t.next();
      a.done ? r.return(a.value) : (r.next(a.value), await n());
    } catch (a) {
      r.throw(a);
    }
  }
  return n().catch(() => {
  }), r;
}
var Nn = Ir(N, re);
function Et(e) {
  return Nn(e);
}
function $e(e) {
  let r = [], t = -1, n = -1, a = e[b]();
  for (; ; ) try {
    let s = a.next();
    if (r.push(s.value), s.done) {
      n = r.length - 1;
      break;
    }
  } catch (s) {
    t = r.length, r.push(s);
  }
  return { v: r, t, d: n };
}
var bn = Er(b);
function It(e) {
  return bn(e);
}
async function xr(e) {
  try {
    return [1, await e];
  } catch (r) {
    return [0, r];
  }
}
function pe(e, r) {
  return { plugins: r.plugins, mode: e, marked: /* @__PURE__ */ new Set(), features: 63 ^ (r.disabledFeatures || 0), refs: r.refs || /* @__PURE__ */ new Map(), depthLimit: r.depthLimit || 1e3 };
}
function de(e, r) {
  e.marked.add(r);
}
function Tr(e, r) {
  let t = e.refs.size;
  return e.refs.set(r, t), t;
}
function qe(e, r) {
  let t = e.refs.get(r);
  return t != null ? (de(e, t), { type: 1, value: lt(t) }) : { type: 0, value: Tr(e, r) };
}
function W(e, r) {
  let t = qe(e, r);
  return t.type === 1 ? t : vr(r) ? { type: 2, value: ft(t.value, r) } : t;
}
function E(e, r) {
  let t = W(e, r);
  if (t.type !== 0) return t.value;
  if (r in Ce) return ct(t.value, r);
  throw new x(r);
}
function k(e, r) {
  let t = qe(e, At[r]);
  return t.type === 1 ? t.value : c(26, t.value, r, o, o, o, o, o, o, o, o, o);
}
function Xe(e) {
  let r = qe(e, Ct);
  return r.type === 1 ? r.value : c(27, r.value, o, o, o, o, o, o, E(e, b), o, o, o);
}
function Qe(e) {
  let r = qe(e, vt);
  return r.type === 1 ? r.value : c(29, r.value, o, o, o, o, o, [k(e, 1), E(e, N)], o, o, o, o);
}
function er(e, r, t, n) {
  return c(t ? 11 : 10, e, o, o, o, n, o, o, o, o, Te(r), o);
}
function rr(e, r, t, n) {
  return c(8, r, o, o, o, o, { k: t, v: n }, o, k(e, 0), o, o, o);
}
function xt(e, r, t) {
  return c(22, r, t, o, o, o, o, o, k(e, 1), o, o, o);
}
function tr(e, r, t) {
  let n = new Uint8Array(t), a = "";
  for (let s = 0, i = n.length; s < i; s++) a += String.fromCharCode(n[s]);
  return c(19, r, y(btoa(a)), o, o, o, o, o, k(e, 5), o, o, o);
}
function ne(e, r) {
  return { base: pe(e, r), child: void 0 };
}
var wr = class {
  constructor(r, t) {
    this._p = r;
    this.depth = t;
  }
  parse(r) {
    return C(this._p, this.depth, r);
  }
};
async function vn(e, r, t) {
  let n = [];
  for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = await C(e, r, t[a]) : n[a] = 0;
  return n;
}
async function An(e, r, t, n) {
  return _e(t, n, await vn(e, r, n));
}
async function hr(e, r, t) {
  let n = Object.entries(t), a = [], s = [];
  for (let i = 0, u = n.length; i < u; i++) a.push(y(n[i][0])), s.push(await C(e, r, n[i][1]));
  return b in t && (a.push(E(e.base, b)), s.push(Ue(Xe(e.base), await C(e, r, $e(t))))), N in t && (a.push(E(e.base, N)), s.push(je(Qe(e.base), await C(e, r, Ze(t))))), P in t && (a.push(E(e.base, P)), s.push(X(t[P]))), I in t && (a.push(E(e.base, I)), s.push(t[I] ? Z : $)), { k: a, v: s };
}
async function Or(e, r, t, n, a) {
  return er(t, n, a, await hr(e, r, n));
}
async function Rn(e, r, t, n) {
  return ke(t, await C(e, r, n.valueOf()));
}
async function En(e, r, t, n) {
  return De(t, n, await C(e, r, n.buffer));
}
async function In(e, r, t, n) {
  return Fe(t, n, await C(e, r, n.buffer));
}
async function Pn(e, r, t, n) {
  return Be(t, n, await C(e, r, n.buffer));
}
async function Tt(e, r, t, n) {
  let a = q(n, e.base.features);
  return Me(t, n, a ? await hr(e, r, a) : o);
}
async function xn(e, r, t, n) {
  let a = q(n, e.base.features);
  return Ve(t, n, a ? await hr(e, r, a) : o);
}
async function Tn(e, r, t, n) {
  let a = [], s = [];
  for (let [i, u] of n.entries()) a.push(await C(e, r, i)), s.push(await C(e, r, u));
  return rr(e.base, t, a, s);
}
async function On(e, r, t, n) {
  let a = [];
  for (let s of n.keys()) a.push(await C(e, r, s));
  return Le(t, a);
}
async function Ot(e, r, t, n) {
  let a = e.base.plugins;
  if (a) for (let s = 0, i = a.length; s < i; s++) {
    let u = a[s];
    if (u.parse.async && u.test(n)) return fe(t, u.tag, await u.parse.async(n, new wr(e, r), { id: t }));
  }
  return o;
}
async function wn(e, r, t, n) {
  let [a, s] = await xr(n);
  return c(12, t, a, o, o, o, o, o, await C(e, r, s), o, o, o);
}
function hn(e, r, t, n, a) {
  let s = [], i = t.on({ next: (u) => {
    de(this.base, r), C(this, e, u).then((l) => {
      s.push(We(r, l));
    }, (l) => {
      a(l), i();
    });
  }, throw: (u) => {
    de(this.base, r), C(this, e, u).then((l) => {
      s.push(Ge(r, l)), n(s), i();
    }, (l) => {
      a(l), i();
    });
  }, return: (u) => {
    de(this.base, r), C(this, e, u).then((l) => {
      s.push(Ke(r, l)), n(s), i();
    }, (l) => {
      a(l), i();
    });
  } });
}
async function zn(e, r, t, n) {
  return Ye(t, k(e.base, 4), await new Promise(hn.bind(e, r, t, n)));
}
async function _n(e, r, t, n) {
  if (Array.isArray(n)) return An(e, r, t, n);
  if (M(n)) return zn(e, r, t, n);
  let a = n.constructor;
  if (a === Y) return C(e, r, n.replacement);
  let s = await Ot(e, r, t, n);
  if (s) return s;
  switch (a) {
    case Object:
      return Or(e, r, t, n, false);
    case o:
      return Or(e, r, t, n, true);
    case Date:
      return he(t, n);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return Tt(e, r, t, n);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Rn(e, r, t, n);
    case ArrayBuffer:
      return tr(e.base, t, n);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return En(e, r, t, n);
    case DataView:
      return Pn(e, r, t, n);
    case Map:
      return Tn(e, r, t, n);
    case Set:
      return On(e, r, t, n);
  }
  if (a === Promise || n instanceof Promise) return wn(e, r, t, n);
  let i = e.base.features;
  if (i & 32 && a === RegExp) return ze(t, n);
  if (i & 16) switch (a) {
    case BigInt64Array:
    case BigUint64Array:
      return In(e, r, t, n);
  }
  if (i & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return xn(e, r, t, n);
  if (n instanceof Error) return Tt(e, r, t, n);
  if (b in n || N in n) return Or(e, r, t, n, !!a);
  throw new x(n);
}
async function kn(e, r, t) {
  let n = W(e.base, t);
  if (n.type !== 0) return n.value;
  let a = await Ot(e, r, n.value, t);
  if (a) return a;
  throw new x(t);
}
async function C(e, r, t) {
  switch (typeof t) {
    case "boolean":
      return t ? Z : $;
    case "undefined":
      return Ae;
    case "string":
      return X(t);
    case "number":
      return Oe(t);
    case "bigint":
      return we(t);
    case "object": {
      if (t) {
        let n = W(e.base, t);
        return n.type === 0 ? await _n(e, r + 1, n.value, t) : n.value;
      }
      return Re;
    }
    case "symbol":
      return E(e.base, t);
    case "function":
      return kn(e, r, t);
    default:
      throw new x(t);
  }
}
async function oe(e, r) {
  try {
    return await C(e, 0, r);
  } catch (t) {
    throw t instanceof z ? t : new z(t);
  }
}
var ae = ((t) => (t[t.Vanilla = 1] = "Vanilla", t[t.Cross = 2] = "Cross", t))(ae || {});
function Js(e) {
  return e;
}
function wt(e, r) {
  for (let t = 0, n = r.length; t < n; t++) {
    let a = r[t];
    e.has(a) || (e.add(a), a.extends && wt(e, a.extends));
  }
}
function A(e) {
  if (e) {
    let r = /* @__PURE__ */ new Set();
    return wt(r, e), [...r];
  }
}
function ht(e) {
  switch (e) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new Je(e);
  }
}
var Dn = 1e6, Fn = 1e4, Bn = 2e4;
function _t(e, r) {
  switch (r) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Mn = 1e3;
function kt(e, r) {
  var t;
  return { mode: e, plugins: r.plugins, refs: r.refs || /* @__PURE__ */ new Map(), features: (t = r.features) != null ? t : 63 ^ (r.disabledFeatures || 0), depthLimit: r.depthLimit || Mn };
}
function Dt(e) {
  return { mode: 1, base: kt(1, e), child: o, state: { marked: new Set(e.markedRefs) } };
}
var zr = class {
  constructor(r, t) {
    this._p = r;
    this.depth = t;
  }
  deserialize(r) {
    return p(this._p, this.depth, r);
  }
};
function Bt(e, r) {
  if (r < 0 || !Number.isFinite(r) || !Number.isInteger(r)) throw new w({ t: 4, i: r });
  if (e.refs.has(r)) throw new Error("Conflicted ref id: " + r);
}
function Vn(e, r, t) {
  return Bt(e.base, r), e.state.marked.has(r) && e.base.refs.set(r, t), t;
}
function Ln(e, r, t) {
  return Bt(e.base, r), e.base.refs.set(r, t), t;
}
function v(e, r, t) {
  return e.mode === 1 ? Vn(e, r, t) : Ln(e, r, t);
}
function _r(e, r, t) {
  if (Object.hasOwn(r, t)) return r[t];
  throw new w(e);
}
function Un(e, r) {
  return v(e, r.i, it(F(r.s)));
}
function jn(e, r, t) {
  let n = t.a, a = n.length, s = v(e, t.i, new Array(a));
  for (let i = 0, u; i < a; i++) u = n[i], u && (s[i] = p(e, r, u));
  return _t(s, t.o), s;
}
function Yn(e) {
  switch (e) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
      return false;
    default:
      return true;
  }
}
function Wn(e) {
  switch (e) {
    case N:
    case I:
    case P:
    case b:
      return true;
    default:
      return false;
  }
}
function zt(e, r, t) {
  Yn(r) ? e[r] = t : Object.defineProperty(e, r, { value: t, configurable: true, enumerable: true, writable: true });
}
function Gn(e, r, t, n, a) {
  if (typeof n == "string") zt(t, n, p(e, r, a));
  else {
    let s = p(e, r, n);
    switch (typeof s) {
      case "string":
        zt(t, s, p(e, r, a));
        break;
      case "symbol":
        Wn(s) && (t[s] = p(e, r, a));
        break;
      default:
        throw new w(n);
    }
  }
}
function Mt(e, r, t, n) {
  let a = t.k;
  if (a.length > 0) for (let i = 0, u = t.v, l = a.length; i < l; i++) Gn(e, r, n, a[i], u[i]);
  return n;
}
function Kn(e, r, t) {
  let n = v(e, t.i, t.t === 10 ? {} : /* @__PURE__ */ Object.create(null));
  return Mt(e, r, t.p, n), _t(n, t.o), n;
}
function Hn(e, r) {
  return v(e, r.i, new Date(r.s));
}
function Jn(e, r) {
  if (e.base.features & 32) {
    let t = F(r.c);
    if (t.length > Bn) throw new w(r);
    return v(e, r.i, new RegExp(t, r.m));
  }
  throw new O(r);
}
function Zn(e, r, t) {
  let n = v(e, t.i, /* @__PURE__ */ new Set());
  for (let a = 0, s = t.a, i = s.length; a < i; a++) n.add(p(e, r, s[a]));
  return n;
}
function $n(e, r, t) {
  let n = v(e, t.i, /* @__PURE__ */ new Map());
  for (let a = 0, s = t.e.k, i = t.e.v, u = s.length; a < u; a++) n.set(p(e, r, s[a]), p(e, r, i[a]));
  return n;
}
function qn(e, r) {
  if (r.s.length > Dn) throw new w(r);
  return v(e, r.i, Pr(F(r.s)));
}
function Xn(e, r, t) {
  var u;
  let n = ht(t.c), a = p(e, r, t.f), s = (u = t.b) != null ? u : 0;
  if (s < 0 || s > a.byteLength) throw new w(t);
  return v(e, t.i, new n(a, s, t.l));
}
function Qn(e, r, t) {
  var i;
  let n = p(e, r, t.f), a = (i = t.b) != null ? i : 0;
  if (a < 0 || a > n.byteLength) throw new w(t);
  return v(e, t.i, new DataView(n, a, t.l));
}
function Vt(e, r, t, n) {
  if (t.p) {
    let a = Mt(e, r, t.p, {});
    Object.defineProperties(n, Object.getOwnPropertyDescriptors(a));
  }
  return n;
}
function eo(e, r, t) {
  let n = v(e, t.i, new AggregateError([], F(t.m)));
  return Vt(e, r, t, n);
}
function ro(e, r, t) {
  let n = _r(t, rt, t.s), a = v(e, t.i, new n(F(t.m)));
  return Vt(e, r, t, a);
}
function to(e, r, t) {
  let n = re(), a = v(e, t.i, n.p), s = p(e, r, t.f);
  return t.s ? n.s(s) : n.f(s), a;
}
function no(e, r, t) {
  return v(e, t.i, Object(p(e, r, t.f)));
}
function oo(e, r, t) {
  let n = e.base.plugins;
  if (n) {
    let a = F(t.c);
    for (let s = 0, i = n.length; s < i; s++) {
      let u = n[s];
      if (u.tag === a) return v(e, t.i, u.deserialize(t.s, new zr(e, r), { id: t.i }));
    }
  }
  throw new Q(t.c);
}
function ao(e, r) {
  return v(e, r.i, v(e, r.s, re()).p);
}
function so(e, r, t) {
  let n = e.base.refs.get(t.i);
  if (n) return n.s(p(e, r, t.a[1])), o;
  throw new B("Promise");
}
function io(e, r, t) {
  let n = e.base.refs.get(t.i);
  if (n) return n.f(p(e, r, t.a[1])), o;
  throw new B("Promise");
}
function uo(e, r, t) {
  p(e, r, t.a[0]);
  let n = p(e, r, t.a[1]);
  return It(n);
}
function lo(e, r, t) {
  p(e, r, t.a[0]);
  let n = p(e, r, t.a[1]);
  return Et(n);
}
function co(e, r, t) {
  let n = v(e, t.i, te()), a = t.a, s = a.length;
  if (s) for (let i = 0; i < s; i++) p(e, r, a[i]);
  return n;
}
function fo(e, r, t) {
  let n = e.base.refs.get(t.i);
  if (n && M(n)) return n.next(p(e, r, t.f)), o;
  throw new B("Stream");
}
function So(e, r, t) {
  let n = e.base.refs.get(t.i);
  if (n && M(n)) return n.throw(p(e, r, t.f)), o;
  throw new B("Stream");
}
function mo(e, r, t) {
  let n = e.base.refs.get(t.i);
  if (n && M(n)) return n.return(p(e, r, t.f)), o;
  throw new B("Stream");
}
function po(e, r, t) {
  return p(e, r, t.f), o;
}
function go(e, r, t) {
  return p(e, r, t.a[1]), o;
}
function p(e, r, t) {
  if (r > e.base.depthLimit) throw new ee(e.base.depthLimit);
  switch (r += 1, t.t) {
    case 2:
      return _r(t, et, t.s);
    case 0:
      return Number(t.s);
    case 1:
      return F(String(t.s));
    case 3:
      if (String(t.s).length > Fn) throw new w(t);
      return BigInt(t.s);
    case 4:
      return e.base.refs.get(t.i);
    case 18:
      return Un(e, t);
    case 9:
      return jn(e, r, t);
    case 10:
    case 11:
      return Kn(e, r, t);
    case 5:
      return Hn(e, t);
    case 6:
      return Jn(e, t);
    case 7:
      return Zn(e, r, t);
    case 8:
      return $n(e, r, t);
    case 19:
      return qn(e, t);
    case 16:
    case 15:
      return Xn(e, r, t);
    case 20:
      return Qn(e, r, t);
    case 14:
      return eo(e, r, t);
    case 13:
      return ro(e, r, t);
    case 12:
      return to(e, r, t);
    case 17:
      return _r(t, Xr, t.s);
    case 21:
      return no(e, r, t);
    case 25:
      return oo(e, r, t);
    case 22:
      return ao(e, t);
    case 23:
      return so(e, r, t);
    case 24:
      return io(e, r, t);
    case 28:
      return uo(e, r, t);
    case 30:
      return lo(e, r, t);
    case 31:
      return co(e, r, t);
    case 32:
      return fo(e, r, t);
    case 33:
      return So(e, r, t);
    case 34:
      return mo(e, r, t);
    case 27:
      return po(e, r, t);
    case 29:
      return go(e, r, t);
    default:
      throw new O(t);
  }
}
function nr(e, r) {
  try {
    return p(e, 0, r);
  } catch (t) {
    throw new He(t);
  }
}
var yo = () => T, No = yo.toString(), Lt = /=>/.test(No);
function or(e, r) {
  return Lt ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + e.join(",") + "){return " + r + "}";
}
function Ut(e, r) {
  return Lt ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
}
var Wt = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_", jt = Wt.length, Gt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_", Yt = Gt.length;
function kr(e) {
  let r = e % jt, t = Wt[r];
  for (e = (e - r) / jt; e > 0; ) r = e % Yt, t += Gt[r], e = (e - r) / Yt;
  return t;
}
var bo = /^[$A-Z_][0-9A-Z_$]*$/i;
function Dr(e) {
  let r = e[0];
  return (r === "$" || r === "_" || r >= "A" && r <= "Z" || r >= "a" && r <= "z") && bo.test(e);
}
function ye(e) {
  switch (e.t) {
    case 0:
      return e.s + "=" + e.v;
    case 2:
      return e.s + ".set(" + e.k + "," + e.v + ")";
    case 1:
      return e.s + ".add(" + e.v + ")";
    case 3:
      return e.s + ".delete(" + e.k + ")";
  }
}
function Co(e) {
  let r = [], t = e[0];
  for (let n = 1, a = e.length, s, i = t; n < a; n++) s = e[n], s.t === 0 && s.v === i.v ? t = { t: 0, s: s.s, k: o, v: ye(t) } : s.t === 2 && s.s === i.s ? t = { t: 2, s: ye(t), k: s.k, v: s.v } : s.t === 1 && s.s === i.s ? t = { t: 1, s: ye(t), k: o, v: s.v } : s.t === 3 && s.s === i.s ? t = { t: 3, s: ye(t), k: s.k, v: o } : (r.push(t), t = s), i = s;
  return r.push(t), r;
}
function qt(e) {
  if (e.length) {
    let r = "", t = Co(e);
    for (let n = 0, a = t.length; n < a; n++) r += ye(t[n]) + ",";
    return r;
  }
  return o;
}
var vo = "Object.create(null)", Ao = "new Set", Ro = "new Map", Eo = "Promise.resolve", Io = "Promise.reject", Po = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: o };
function Xt(e, r) {
  return { mode: e, plugins: r.plugins, features: r.features, marked: new Set(r.markedRefs), stack: [], flags: [], assignments: [] };
}
function sr(e) {
  return { mode: 2, base: Xt(2, e), state: e, child: o };
}
var Fr = class {
  constructor(r) {
    this._p = r;
  }
  serialize(r) {
    return f(this._p, r);
  }
};
function To(e, r) {
  let t = e.valid.get(r);
  t == null && (t = e.valid.size, e.valid.set(r, t));
  let n = e.vars[t];
  return n == null && (n = kr(t), e.vars[t] = n), n;
}
function Oo(e) {
  return ce + "[" + e + "]";
}
function m(e, r) {
  return e.mode === 1 ? To(e.state, r) : Oo(r);
}
function h(e, r) {
  e.marked.add(r);
}
function Br(e, r) {
  return e.marked.has(r);
}
function Vr(e, r, t) {
  r !== 0 && (h(e.base, t), e.base.flags.push({ type: r, value: m(e, t) }));
}
function wo(e) {
  let r = "";
  for (let t = 0, n = e.flags, a = n.length; t < a; t++) {
    let s = n[t];
    r += Po[s.type] + "(" + s.value + "),";
  }
  return r;
}
function Qt(e) {
  let r = qt(e.assignments), t = wo(e);
  return r ? t ? r + t : r : t;
}
function en(e, r, t) {
  e.assignments.push({ t: 0, s: r, k: o, v: t });
}
function ho(e, r, t) {
  e.base.assignments.push({ t: 1, s: m(e, r), k: o, v: t });
}
function ge(e, r, t, n) {
  e.base.assignments.push({ t: 2, s: m(e, r), k: t, v: n });
}
function Kt(e, r, t) {
  e.base.assignments.push({ t: 3, s: m(e, r), k: t, v: o });
}
function Ne(e, r, t, n) {
  en(e.base, m(e, r) + "[" + t + "]", n);
}
function Mr(e, r, t, n) {
  en(e.base, m(e, r) + "." + t, n);
}
function V(e, r) {
  return r.t === 4 && e.stack.includes(r.i);
}
function se(e, r, t) {
  return e.mode === 1 && !Br(e.base, r) ? t : m(e, r) + "=" + t;
}
function zo(e) {
  return U + '.get("' + e.s + '")';
}
function Ht(e, r, t, n) {
  return t ? V(e.base, t) ? (h(e.base, r), Ne(e, r, n, m(e, t.i)), "") : f(e, t) : "";
}
function _o(e, r) {
  let t = r.i, n = r.a, a = n.length;
  if (a > 0) {
    e.base.stack.push(t);
    let s = Ht(e, t, n[0], 0), i = s === "";
    for (let u = 1, l; u < a; u++) l = Ht(e, t, n[u], u), s += "," + l, i = l === "";
    return e.base.stack.pop(), Vr(e, r.o, r.i), "[" + s + (i ? ",]" : "]");
  }
  return "[]";
}
function Jt(e, r, t, n) {
  if (typeof t == "string") {
    let a = Number(t), s = a >= 0 && a.toString() === t || Dr(t);
    if (V(e.base, n)) {
      let i = m(e, n.i);
      return h(e.base, r.i), s && a !== a ? Mr(e, r.i, t, i) : Ne(e, r.i, s ? t : '"' + t + '"', i), "";
    }
    return (s ? t : '"' + t + '"') + ":" + f(e, n);
  }
  return "[" + f(e, t) + "]:" + f(e, n);
}
function rn(e, r, t) {
  let n = t.k, a = n.length;
  if (a > 0) {
    let s = t.v;
    e.base.stack.push(r.i);
    let i = Jt(e, r, n[0], s[0]);
    for (let u = 1, l = i; u < a; u++) l = Jt(e, r, n[u], s[u]), i += (l && i && ",") + l;
    return e.base.stack.pop(), "{" + i + "}";
  }
  return "{}";
}
function ko(e, r) {
  return Vr(e, r.o, r.i), rn(e, r, r.p);
}
function Do(e, r, t, n) {
  let a = rn(e, r, t);
  return a !== "{}" ? "Object.assign(" + n + "," + a + ")" : n;
}
function Fo(e, r, t, n, a) {
  let s = e.base, i = f(e, a), u = Number(n), l = u >= 0 && u.toString() === n || Dr(n);
  if (V(s, a)) l && u !== u ? Mr(e, r.i, n, i) : Ne(e, r.i, l ? n : '"' + n + '"', i);
  else {
    let g = s.assignments;
    s.assignments = t, l && u !== u ? Mr(e, r.i, n, i) : Ne(e, r.i, l ? n : '"' + n + '"', i), s.assignments = g;
  }
}
function Bo(e, r, t, n, a) {
  if (typeof n == "string") Fo(e, r, t, n, a);
  else {
    let s = e.base, i = s.stack;
    s.stack = [];
    let u = f(e, a);
    s.stack = i;
    let l = s.assignments;
    s.assignments = t, Ne(e, r.i, f(e, n), u), s.assignments = l;
  }
}
function Mo(e, r, t) {
  let n = t.k, a = n.length;
  if (a > 0) {
    let s = [], i = t.v;
    e.base.stack.push(r.i);
    for (let u = 0; u < a; u++) Bo(e, r, s, n[u], i[u]);
    return e.base.stack.pop(), qt(s);
  }
  return o;
}
function Lr(e, r, t) {
  if (r.p) {
    let n = e.base;
    if (n.features & 8) t = Do(e, r, r.p, t);
    else {
      h(n, r.i);
      let a = Mo(e, r, r.p);
      if (a) return "(" + se(e, r.i, t) + "," + a + m(e, r.i) + ")";
    }
  }
  return t;
}
function Vo(e, r) {
  return Vr(e, r.o, r.i), Lr(e, r, vo);
}
function Lo(e) {
  return 'new Date("' + e.s + '")';
}
function Uo(e, r) {
  if (e.base.features & 32) return "/" + r.c + "/" + r.m;
  throw new O(r);
}
function Zt(e, r, t) {
  let n = e.base;
  return V(n, t) ? (h(n, r), ho(e, r, m(e, t.i)), "") : f(e, t);
}
function jo(e, r) {
  let t = Ao, n = r.a, a = n.length, s = r.i;
  if (a > 0) {
    e.base.stack.push(s);
    let i = Zt(e, s, n[0]);
    for (let u = 1, l = i; u < a; u++) l = Zt(e, s, n[u]), i += (l && i && ",") + l;
    e.base.stack.pop(), i && (t += "([" + i + "])");
  }
  return t;
}
function $t(e, r, t, n, a) {
  let s = e.base;
  if (V(s, t)) {
    let i = m(e, t.i);
    if (h(s, r), V(s, n)) {
      let l = m(e, n.i);
      return ge(e, r, i, l), "";
    }
    if (n.t !== 4 && n.i != null && Br(s, n.i)) {
      let l = "(" + f(e, n) + ",[" + a + "," + a + "])";
      return ge(e, r, i, m(e, n.i)), Kt(e, r, a), l;
    }
    let u = s.stack;
    return s.stack = [], ge(e, r, i, f(e, n)), s.stack = u, "";
  }
  if (V(s, n)) {
    let i = m(e, n.i);
    if (h(s, r), t.t !== 4 && t.i != null && Br(s, t.i)) {
      let l = "(" + f(e, t) + ",[" + a + "," + a + "])";
      return ge(e, r, m(e, t.i), i), Kt(e, r, a), l;
    }
    let u = s.stack;
    return s.stack = [], ge(e, r, f(e, t), i), s.stack = u, "";
  }
  return "[" + f(e, t) + "," + f(e, n) + "]";
}
function Yo(e, r) {
  let t = Ro, n = r.e.k, a = n.length, s = r.i, i = r.f, u = m(e, i.i), l = e.base;
  if (a > 0) {
    let g = r.e.v;
    l.stack.push(s);
    let S = $t(e, s, n[0], g[0], u);
    for (let d = 1, H = S; d < a; d++) H = $t(e, s, n[d], g[d], u), S += (H && S && ",") + H;
    l.stack.pop(), S && (t += "([" + S + "])");
  }
  return i.t === 26 && (h(l, i.i), t = "(" + f(e, i) + "," + t + ")"), t;
}
function Wo(e, r) {
  return G(e, r.f) + '("' + r.s + '")';
}
function Go(e, r) {
  return "new " + r.c + "(" + f(e, r.f) + "," + r.b + "," + r.l + ")";
}
function Ko(e, r) {
  return "new DataView(" + f(e, r.f) + "," + r.b + "," + r.l + ")";
}
function Ho(e, r) {
  let t = r.i;
  e.base.stack.push(t);
  let n = Lr(e, r, 'new AggregateError([],"' + r.m + '")');
  return e.base.stack.pop(), n;
}
function Jo(e, r) {
  return Lr(e, r, "new " + ve[r.s] + '("' + r.m + '")');
}
function Zo(e, r) {
  let t, n = r.f, a = r.i, s = r.s ? Eo : Io, i = e.base;
  if (V(i, n)) {
    let u = m(e, n.i);
    t = s + (r.s ? "().then(" + or([], u) + ")" : "().catch(" + Ut([], "throw " + u) + ")");
  } else {
    i.stack.push(a);
    let u = f(e, n);
    i.stack.pop(), t = s + "(" + u + ")";
  }
  return t;
}
function $o(e, r) {
  return "Object(" + f(e, r.f) + ")";
}
function G(e, r) {
  let t = f(e, r);
  return r.t === 4 ? t : "(" + t + ")";
}
function qo(e, r) {
  if (e.mode === 1) throw new O(r);
  return "(" + se(e, r.s, G(e, r.f) + "()") + ").p";
}
function Xo(e, r) {
  if (e.mode === 1) throw new O(r);
  return G(e, r.a[0]) + "(" + m(e, r.i) + "," + f(e, r.a[1]) + ")";
}
function Qo(e, r) {
  if (e.mode === 1) throw new O(r);
  return G(e, r.a[0]) + "(" + m(e, r.i) + "," + f(e, r.a[1]) + ")";
}
function ea(e, r) {
  let t = e.base.plugins;
  if (t) for (let n = 0, a = t.length; n < a; n++) {
    let s = t[n];
    if (s.tag === r.c) return e.child == null && (e.child = new Fr(e)), s.serialize(r.s, e.child, { id: r.i });
  }
  throw new Q(r.c);
}
function ra(e, r) {
  let t = "", n = false;
  return r.f.t !== 4 && (h(e.base, r.f.i), t = "(" + f(e, r.f) + ",", n = true), t += se(e, r.i, "(" + yt + ")(" + m(e, r.f.i) + ")"), n && (t += ")"), t;
}
function ta(e, r) {
  return G(e, r.a[0]) + "(" + f(e, r.a[1]) + ")";
}
function na(e, r) {
  let t = r.a[0], n = r.a[1], a = e.base, s = "";
  t.t !== 4 && (h(a, t.i), s += "(" + f(e, t)), n.t !== 4 && (h(a, n.i), s += (s ? "," : "(") + f(e, n)), s && (s += ",");
  let i = se(e, r.i, "(" + Nt + ")(" + m(e, n.i) + "," + m(e, t.i) + ")");
  return s ? s + i + ")" : i;
}
function oa(e, r) {
  return G(e, r.a[0]) + "(" + f(e, r.a[1]) + ")";
}
function aa(e, r) {
  let t = se(e, r.i, G(e, r.f) + "()"), n = r.a.length;
  if (n) {
    let a = f(e, r.a[0]);
    for (let s = 1; s < n; s++) a += "," + f(e, r.a[s]);
    return "(" + t + "," + a + "," + m(e, r.i) + ")";
  }
  return t;
}
function sa(e, r) {
  return m(e, r.i) + ".next(" + f(e, r.f) + ")";
}
function ia(e, r) {
  return m(e, r.i) + ".throw(" + f(e, r.f) + ")";
}
function ua(e, r) {
  return m(e, r.i) + ".return(" + f(e, r.f) + ")";
}
function la(e, r) {
  switch (r.t) {
    case 17:
      return qr[r.s];
    case 18:
      return zo(r);
    case 9:
      return _o(e, r);
    case 10:
      return ko(e, r);
    case 11:
      return Vo(e, r);
    case 5:
      return Lo(r);
    case 6:
      return Uo(e, r);
    case 7:
      return jo(e, r);
    case 8:
      return Yo(e, r);
    case 19:
      return Wo(e, r);
    case 16:
    case 15:
      return Go(e, r);
    case 20:
      return Ko(e, r);
    case 14:
      return Ho(e, r);
    case 13:
      return Jo(e, r);
    case 12:
      return Zo(e, r);
    case 21:
      return $o(e, r);
    case 22:
      return qo(e, r);
    case 25:
      return ea(e, r);
    case 26:
      return Rt[r.s];
    default:
      throw new O(r);
  }
}
function f(e, r) {
  switch (r.t) {
    case 2:
      return Qr[r.s];
    case 0:
      return "" + r.s;
    case 1:
      return '"' + r.s + '"';
    case 3:
      return r.s + "n";
    case 4:
      return m(e, r.i);
    case 23:
      return Xo(e, r);
    case 24:
      return Qo(e, r);
    case 27:
      return ra(e, r);
    case 28:
      return ta(e, r);
    case 29:
      return na(e, r);
    case 30:
      return oa(e, r);
    case 31:
      return aa(e, r);
    case 32:
      return sa(e, r);
    case 33:
      return ia(e, r);
    case 34:
      return ua(e, r);
    default:
      return se(e, r.i, la(e, r));
  }
}
function ur(e, r) {
  let t = f(e, r), n = r.i;
  if (n == null) return t;
  let a = Qt(e.base), s = m(e, n), i = e.state.scopeId, u = i == null ? "" : ce, l = a ? "(" + t + "," + a + s + ")" : t;
  if (u === "") return r.t === 10 && !a ? "(" + l + ")" : l;
  let g = i == null ? "()" : "(" + ce + '["' + y(i) + '"])';
  return "(" + or([u], l) + ")" + g;
}
var jr = class {
  constructor(r, t) {
    this._p = r;
    this.depth = t;
  }
  parse(r) {
    return R(this._p, this.depth, r);
  }
}, Yr = class {
  constructor(r, t) {
    this._p = r;
    this.depth = t;
  }
  parse(r) {
    return R(this._p, this.depth, r);
  }
  parseWithError(r) {
    return K(this._p, this.depth, r);
  }
  isAlive() {
    return this._p.state.alive;
  }
  pushPendingState() {
    Jr(this._p);
  }
  popPendingState() {
    be(this._p);
  }
  onParse(r) {
    ie(this._p, r);
  }
  onError(r) {
    Kr(this._p, r);
  }
};
function ca(e) {
  return { alive: true, pending: 0, initial: true, buffer: [], onParse: e.onParse, onError: e.onError, onDone: e.onDone };
}
function Wr(e) {
  return { type: 2, base: pe(2, e), state: ca(e) };
}
function fa(e, r, t) {
  let n = [];
  for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = R(e, r, t[a]) : n[a] = 0;
  return n;
}
function Sa(e, r, t, n) {
  return _e(t, n, fa(e, r, n));
}
function Gr(e, r, t) {
  let n = Object.entries(t), a = [], s = [];
  for (let i = 0, u = n.length; i < u; i++) a.push(y(n[i][0])), s.push(R(e, r, n[i][1]));
  return b in t && (a.push(E(e.base, b)), s.push(Ue(Xe(e.base), R(e, r, $e(t))))), N in t && (a.push(E(e.base, N)), s.push(je(Qe(e.base), R(e, r, e.type === 1 ? te() : Ze(t))))), P in t && (a.push(E(e.base, P)), s.push(X(t[P]))), I in t && (a.push(E(e.base, I)), s.push(t[I] ? Z : $)), { k: a, v: s };
}
function Ur(e, r, t, n, a) {
  return er(t, n, a, Gr(e, r, n));
}
function ma(e, r, t, n) {
  return ke(t, R(e, r, n.valueOf()));
}
function pa(e, r, t, n) {
  return De(t, n, R(e, r, n.buffer));
}
function da(e, r, t, n) {
  return Fe(t, n, R(e, r, n.buffer));
}
function ga(e, r, t, n) {
  return Be(t, n, R(e, r, n.buffer));
}
function tn(e, r, t, n) {
  let a = q(n, e.base.features);
  return Me(t, n, a ? Gr(e, r, a) : o);
}
function ya(e, r, t, n) {
  let a = q(n, e.base.features);
  return Ve(t, n, a ? Gr(e, r, a) : o);
}
function Na(e, r, t, n) {
  let a = [], s = [];
  for (let [i, u] of n.entries()) a.push(R(e, r, i)), s.push(R(e, r, u));
  return rr(e.base, t, a, s);
}
function ba(e, r, t, n) {
  let a = [];
  for (let s of n.keys()) a.push(R(e, r, s));
  return Le(t, a);
}
function Ca(e, r, t, n) {
  let a = Ye(t, k(e.base, 4), []);
  return e.type === 1 || (Jr(e), n.on({ next: (s) => {
    if (e.state.alive) {
      let i = K(e, r, s);
      i && ie(e, We(t, i));
    }
  }, throw: (s) => {
    if (e.state.alive) {
      let i = K(e, r, s);
      i && ie(e, Ge(t, i));
    }
    be(e);
  }, return: (s) => {
    if (e.state.alive) {
      let i = K(e, r, s);
      i && ie(e, Ke(t, i));
    }
    be(e);
  } })), a;
}
function va(e, r, t) {
  if (this.state.alive) {
    let n = K(this, r, t);
    n && ie(this, c(23, e, o, o, o, o, o, [k(this.base, 2), n], o, o, o, o)), be(this);
  }
}
function Aa(e, r, t) {
  if (this.state.alive) {
    let n = K(this, r, t);
    n && ie(this, c(24, e, o, o, o, o, o, [k(this.base, 3), n], o, o, o, o));
  }
  be(this);
}
function Ra(e, r, t, n) {
  let a = Tr(e.base, {});
  return e.type === 2 && (Jr(e), n.then(va.bind(e, a, r), Aa.bind(e, a, r))), xt(e.base, t, a);
}
function Ea(e, r, t, n, a) {
  for (let s = 0, i = a.length; s < i; s++) {
    let u = a[s];
    if (u.parse.sync && u.test(n)) return fe(t, u.tag, u.parse.sync(n, new jr(e, r), { id: t }));
  }
  return o;
}
function Ia(e, r, t, n, a) {
  for (let s = 0, i = a.length; s < i; s++) {
    let u = a[s];
    if (u.parse.stream && u.test(n)) return fe(t, u.tag, u.parse.stream(n, new Yr(e, r), { id: t }));
  }
  return o;
}
function nn(e, r, t, n) {
  let a = e.base.plugins;
  return a ? e.type === 1 ? Ea(e, r, t, n, a) : Ia(e, r, t, n, a) : o;
}
function Pa(e, r, t, n, a) {
  switch (a) {
    case Object:
      return Ur(e, r, t, n, false);
    case o:
      return Ur(e, r, t, n, true);
    case Date:
      return he(t, n);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return tn(e, r, t, n);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return ma(e, r, t, n);
    case ArrayBuffer:
      return tr(e.base, t, n);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return pa(e, r, t, n);
    case DataView:
      return ga(e, r, t, n);
    case Map:
      return Na(e, r, t, n);
    case Set:
      return ba(e, r, t, n);
  }
  if (a === Promise || n instanceof Promise) return Ra(e, r, t, n);
  let s = e.base.features;
  if (s & 32 && a === RegExp) return ze(t, n);
  if (s & 16) switch (a) {
    case BigInt64Array:
    case BigUint64Array:
      return da(e, r, t, n);
  }
  if (s & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return ya(e, r, t, n);
  if (n instanceof Error) return tn(e, r, t, n);
  if (b in n || N in n) return Ur(e, r, t, n, !!a);
  throw new x(n);
}
function xa(e, r, t, n) {
  if (Array.isArray(n)) return Sa(e, r, t, n);
  if (M(n)) return Ca(e, r, t, n);
  let a = n.constructor;
  if (a === Y) return R(e, r, n.replacement);
  let s = nn(e, r, t, n);
  return s || Pa(e, r, t, n, a);
}
function Ta(e, r, t) {
  let n = W(e.base, t);
  if (n.type !== 0) return n.value;
  let a = nn(e, r, n.value, t);
  if (a) return a;
  throw new x(t);
}
function R(e, r, t) {
  if (r >= e.base.depthLimit) throw new ee(e.base.depthLimit);
  switch (typeof t) {
    case "boolean":
      return t ? Z : $;
    case "undefined":
      return Ae;
    case "string":
      return X(t);
    case "number":
      return Oe(t);
    case "bigint":
      return we(t);
    case "object": {
      if (t) {
        let n = W(e.base, t);
        return n.type === 0 ? xa(e, r + 1, n.value, t) : n.value;
      }
      return Re;
    }
    case "symbol":
      return E(e.base, t);
    case "function":
      return Ta(e, r, t);
    default:
      throw new x(t);
  }
}
function ie(e, r) {
  e.state.initial ? e.state.buffer.push(r) : Hr(e, r, false);
}
function Kr(e, r) {
  if (e.state.onError) e.state.onError(r);
  else throw r instanceof z ? r : new z(r);
}
function on(e) {
  e.state.onDone && e.state.onDone();
}
function Hr(e, r, t) {
  try {
    e.state.onParse(r, t);
  } catch (n) {
    Kr(e, n);
  }
}
function Jr(e) {
  e.state.pending++;
}
function be(e) {
  --e.state.pending <= 0 && on(e);
}
function K(e, r, t) {
  try {
    return R(e, r, t);
  } catch (n) {
    return Kr(e, n), o;
  }
}
function Zr(e, r) {
  let t = K(e, 0, r);
  t && (Hr(e, t, true), e.state.initial = false, Oa(e, e.state), e.state.pending <= 0 && lr(e));
}
function Oa(e, r) {
  for (let t = 0, n = r.buffer.length; t < n; t++) Hr(e, r.buffer[t], false);
}
function lr(e) {
  e.state.alive && (on(e), e.state.alive = false);
}
async function Zi(e, r = {}) {
  let t = A(r.plugins), n = ne(2, { plugins: t, disabledFeatures: r.disabledFeatures, refs: r.refs });
  return await oe(n, e);
}
function an(e, r) {
  let t = A(r.plugins), n = Wr({ plugins: t, refs: r.refs, disabledFeatures: r.disabledFeatures, onParse(a, s) {
    let i = sr({ plugins: t, features: n.base.features, scopeId: r.scopeId, markedRefs: n.base.marked }), u;
    try {
      u = ur(i, a);
    } catch (l) {
      r.onError && r.onError(l);
      return;
    }
    r.onSerialize(u, s);
  }, onError: r.onError, onDone: r.onDone });
  return Zr(n, e), lr.bind(null, n);
}
function $i(e, r) {
  let t = A(r.plugins), n = Wr({ plugins: t, refs: r.refs, disabledFeatures: r.disabledFeatures, onParse: r.onParse, onError: r.onError, onDone: r.onDone });
  return Zr(n, e), lr.bind(null, n);
}
function du(e, r = {}) {
  var i;
  let t = A(r.plugins), n = r.disabledFeatures || 0, a = (i = e.f) != null ? i : 63, s = Dt({ plugins: t, markedRefs: e.m, features: a & ~n, disabledFeatures: n });
  return nr(s, e.t);
}
export {
  $i as $,
  Js as J,
  Zi as Z,
  an as a,
  du as d,
  ln as l,
  te as t
};
