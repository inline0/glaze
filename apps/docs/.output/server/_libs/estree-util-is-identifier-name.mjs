const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const emptyOptions = {};
function name(name2, options) {
  const settings = emptyOptions;
  const re = settings.jsx ? nameReJsx : nameRe;
  return re.test(name2);
}
export {
  name as n
};
