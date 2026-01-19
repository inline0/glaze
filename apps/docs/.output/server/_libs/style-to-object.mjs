import { i as index } from "./inline-style-parser.mjs";
import { c as getAugmentedNamespace } from "./react.mjs";
function StyleToObject(style, iterator) {
  let styleObject = null;
  if (!style || typeof style !== "string") {
    return styleObject;
  }
  const declarations = index(style);
  const hasIterator = typeof iterator === "function";
  declarations.forEach((declaration) => {
    if (declaration.type !== "declaration") {
      return;
    }
    const { property, value } = declaration;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      styleObject = styleObject || {};
      styleObject[property] = value;
    }
  });
  return styleObject;
}
const esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: StyleToObject
});
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(esm);
export {
  require$$0 as r
};
