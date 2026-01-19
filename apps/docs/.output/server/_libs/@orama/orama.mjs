const STEMMERS = {
  arabic: "ar",
  armenian: "am",
  bulgarian: "bg",
  czech: "cz",
  danish: "dk",
  dutch: "nl",
  english: "en",
  finnish: "fi",
  french: "fr",
  german: "de",
  greek: "gr",
  hungarian: "hu",
  indian: "in",
  indonesian: "id",
  irish: "ie",
  italian: "it",
  lithuanian: "lt",
  nepali: "np",
  norwegian: "no",
  portuguese: "pt",
  romanian: "ro",
  russian: "ru",
  serbian: "rs",
  slovenian: "ru",
  spanish: "es",
  swedish: "se",
  tamil: "ta",
  turkish: "tr",
  ukrainian: "uk",
  sanskrit: "sk"
};
const SPLITTERS = {
  dutch: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
  english: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
  french: /[^a-z0-9äâàéèëêïîöôùüûœç-]+/gim,
  italian: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
  norwegian: /[^a-z0-9_æøåÆØÅäÄöÖüÜ]+/gim,
  portuguese: /[^a-z0-9à-úÀ-Ú]/gim,
  russian: /[^a-z0-9а-яА-ЯёЁ]+/gim,
  spanish: /[^a-z0-9A-Zá-úÁ-ÚñÑüÜ]+/gim,
  swedish: /[^a-z0-9_åÅäÄöÖüÜ-]+/gim,
  german: /[^a-z0-9A-ZäöüÄÖÜß]+/gim,
  finnish: /[^a-z0-9äöÄÖ]+/gim,
  danish: /[^a-z0-9æøåÆØÅ]+/gim,
  hungarian: /[^a-z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/gim,
  romanian: /[^a-z0-9ăâîșțĂÂÎȘȚ]+/gim,
  serbian: /[^a-z0-9čćžšđČĆŽŠĐ]+/gim,
  turkish: /[^a-z0-9çÇğĞıİöÖşŞüÜ]+/gim,
  lithuanian: /[^a-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+/gim,
  arabic: /[^a-z0-9أ-ي]+/gim,
  nepali: /[^a-z0-9अ-ह]+/gim,
  irish: /[^a-z0-9áéíóúÁÉÍÓÚ]+/gim,
  indian: /[^a-z0-9अ-ह]+/gim,
  armenian: /[^a-z0-9ա-ֆ]+/gim,
  greek: /[^a-z0-9α-ωά-ώ]+/gim,
  indonesian: /[^a-z0-9]+/gim,
  ukrainian: /[^a-z0-9а-яА-ЯіїєІЇЄ]+/gim,
  slovenian: /[^a-z0-9čžšČŽŠ]+/gim,
  bulgarian: /[^a-z0-9а-яА-Я]+/gim,
  tamil: /[^a-z0-9அ-ஹ]+/gim,
  sanskrit: /[^a-z0-9A-Zāīūṛḷṃṁḥśṣṭḍṇṅñḻḹṝ]+/gim,
  czech: /[^A-Z0-9a-zěščřžýáíéúůóťďĚŠČŘŽÝÁÍÉÓÚŮŤĎ-]+/gim
};
const SUPPORTED_LANGUAGES = Object.keys(STEMMERS);
function getLocale(language) {
  return language !== void 0 && SUPPORTED_LANGUAGES.includes(language) ? STEMMERS[language] : void 0;
}
const baseId = Date.now().toString().slice(5);
let lastId = 0;
const nano = BigInt(1e3);
const milli = BigInt(1e6);
const second = BigInt(1e9);
const MAX_ARGUMENT_FOR_STACK = 65535;
function safeArrayPush(arr, newArr) {
  if (newArr.length < MAX_ARGUMENT_FOR_STACK) {
    Array.prototype.push.apply(arr, newArr);
  } else {
    const newArrLength = newArr.length;
    for (let i = 0; i < newArrLength; i += MAX_ARGUMENT_FOR_STACK) {
      Array.prototype.push.apply(arr, newArr.slice(i, i + MAX_ARGUMENT_FOR_STACK));
    }
  }
}
function sprintf(template, ...args) {
  return template.replace(/%(?:(?<position>\d+)\$)?(?<width>-?\d*\.?\d*)(?<type>[dfs])/g, function(...replaceArgs) {
    const groups = replaceArgs[replaceArgs.length - 1];
    const { width: rawWidth, type, position } = groups;
    const replacement = position ? args[Number.parseInt(position) - 1] : args.shift();
    const width = rawWidth === "" ? 0 : Number.parseInt(rawWidth);
    switch (type) {
      case "d":
        return replacement.toString().padStart(width, "0");
      case "f": {
        let value = replacement;
        const [padding, precision] = rawWidth.split(".").map((w) => Number.parseFloat(w));
        if (typeof precision === "number" && precision >= 0) {
          value = value.toFixed(precision);
        }
        return typeof padding === "number" && padding >= 0 ? value.toString().padStart(width, "0") : value.toString();
      }
      case "s":
        return width < 0 ? replacement.toString().padEnd(-width, " ") : replacement.toString().padStart(width, " ");
      default:
        return replacement;
    }
  });
}
function isInsideWebWorker() {
  return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
}
function isInsideNode() {
  return typeof process !== "undefined" && process.release && process.release.name === "node";
}
function getNanosecondTimeViaPerformance() {
  return BigInt(Math.floor(performance.now() * 1e6));
}
function formatNanoseconds(value) {
  if (typeof value === "number") {
    value = BigInt(value);
  }
  if (value < nano) {
    return `${value}ns`;
  } else if (value < milli) {
    return `${value / nano}μs`;
  } else if (value < second) {
    return `${value / milli}ms`;
  }
  return `${value / second}s`;
}
function getNanosecondsTime() {
  if (isInsideWebWorker()) {
    return getNanosecondTimeViaPerformance();
  }
  if (isInsideNode()) {
    return process.hrtime.bigint();
  }
  if (typeof process !== "undefined" && typeof process?.hrtime?.bigint === "function") {
    return process.hrtime.bigint();
  }
  if (typeof performance !== "undefined") {
    return getNanosecondTimeViaPerformance();
  }
  return BigInt(0);
}
function uniqueId() {
  return `${baseId}-${lastId++}`;
}
function getOwnProperty(object, property) {
  if (Object.hasOwn === void 0) {
    return Object.prototype.hasOwnProperty.call(object, property) ? object[property] : void 0;
  }
  return Object.hasOwn(object, property) ? object[property] : void 0;
}
function sortTokenScorePredicate(a, b) {
  if (b[1] === a[1]) {
    return a[0] - b[0];
  }
  return b[1] - a[1];
}
function intersect(arrays) {
  if (arrays.length === 0) {
    return [];
  } else if (arrays.length === 1) {
    return arrays[0];
  }
  for (let i = 1; i < arrays.length; i++) {
    if (arrays[i].length < arrays[0].length) {
      const tmp = arrays[0];
      arrays[0] = arrays[i];
      arrays[i] = tmp;
    }
  }
  const set = /* @__PURE__ */ new Map();
  for (const elem of arrays[0]) {
    set.set(elem, 1);
  }
  for (let i = 1; i < arrays.length; i++) {
    let found = 0;
    for (const elem of arrays[i]) {
      const count2 = set.get(elem);
      if (count2 === i) {
        set.set(elem, count2 + 1);
        found++;
      }
    }
    if (found === 0)
      return [];
  }
  return arrays[0].filter((e) => {
    const count2 = set.get(e);
    if (count2 !== void 0)
      set.set(e, 0);
    return count2 === arrays.length;
  });
}
function getDocumentProperties(doc, paths) {
  const properties = {};
  const pathsLength = paths.length;
  for (let i = 0; i < pathsLength; i++) {
    const path = paths[i];
    const pathTokens = path.split(".");
    let current = doc;
    const pathTokensLength = pathTokens.length;
    for (let j = 0; j < pathTokensLength; j++) {
      current = current[pathTokens[j]];
      if (typeof current === "object") {
        if (current !== null && "lat" in current && "lon" in current && typeof current.lat === "number" && typeof current.lon === "number") {
          current = properties[path] = current;
          break;
        } else if (!Array.isArray(current) && current !== null && j === pathTokensLength - 1) {
          current = void 0;
          break;
        }
      } else if ((current === null || typeof current !== "object") && j < pathTokensLength - 1) {
        current = void 0;
        break;
      }
    }
    if (typeof current !== "undefined") {
      properties[path] = current;
    }
  }
  return properties;
}
function getNested(obj, path) {
  const props = getDocumentProperties(obj, [path]);
  return props[path];
}
const mapDistanceToMeters = {
  cm: 0.01,
  m: 1,
  km: 1e3,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344
};
function convertDistanceToMeters(distance, unit) {
  const ratio = mapDistanceToMeters[unit];
  if (ratio === void 0) {
    throw new Error(createError("INVALID_DISTANCE_SUFFIX", distance).message);
  }
  return distance * ratio;
}
function removeVectorsFromHits(searchResult, vectorProperties) {
  searchResult.hits = searchResult.hits.map((result) => ({
    ...result,
    document: {
      ...result.document,
      // Remove embeddings from the result
      ...vectorProperties.reduce((acc, prop) => {
        const path = prop.split(".");
        const lastKey = path.pop();
        let obj = acc;
        for (const key of path) {
          obj[key] = obj[key] ?? {};
          obj = obj[key];
        }
        obj[lastKey] = null;
        return acc;
      }, result.document)
    }
  }));
}
function isAsyncFunction(func) {
  if (Array.isArray(func)) {
    return func.some((item) => isAsyncFunction(item));
  }
  return func?.constructor?.name === "AsyncFunction";
}
const withIntersection = "intersection" in /* @__PURE__ */ new Set();
function setIntersection(...sets) {
  if (sets.length === 0) {
    return /* @__PURE__ */ new Set();
  }
  if (sets.length === 1) {
    return sets[0];
  }
  if (sets.length === 2) {
    const set1 = sets[0];
    const set2 = sets[1];
    if (withIntersection) {
      return set1.intersection(set2);
    }
    const result = /* @__PURE__ */ new Set();
    const base2 = set1.size < set2.size ? set1 : set2;
    const other = base2 === set1 ? set2 : set1;
    for (const value of base2) {
      if (other.has(value)) {
        result.add(value);
      }
    }
    return result;
  }
  const min = {
    index: 0,
    size: sets[0].size
  };
  for (let i = 1; i < sets.length; i++) {
    if (sets[i].size < min.size) {
      min.index = i;
      min.size = sets[i].size;
    }
  }
  if (withIntersection) {
    let base2 = sets[min.index];
    for (let i = 0; i < sets.length; i++) {
      if (i === min.index) {
        continue;
      }
      base2 = base2.intersection(sets[i]);
    }
    return base2;
  }
  const base = sets[min.index];
  for (let i = 0; i < sets.length; i++) {
    if (i === min.index) {
      continue;
    }
    const other = sets[i];
    for (const value of base) {
      if (!other.has(value)) {
        base.delete(value);
      }
    }
  }
  return base;
}
const withUnion = "union" in /* @__PURE__ */ new Set();
function setUnion(set1, set2) {
  if (withUnion) {
    if (set1) {
      return set1.union(set2);
    }
    return set2;
  }
  if (!set1) {
    return new Set(set2);
  }
  return /* @__PURE__ */ new Set([...set1, ...set2]);
}
function setDifference(set1, set2) {
  const result = /* @__PURE__ */ new Set();
  for (const value of set1) {
    if (!set2.has(value)) {
      result.add(value);
    }
  }
  return result;
}
function sleep(ms) {
  if (typeof SharedArrayBuffer !== "undefined" && typeof Atomics !== "undefined") {
    const nil = new Int32Array(new SharedArrayBuffer(4));
    const valid = ms > 0 && ms < Infinity;
    if (valid === false) {
      if (typeof ms !== "number" && typeof ms !== "bigint") {
        throw TypeError("sleep: ms must be a number");
      }
      throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
    }
    Atomics.wait(nil, 0, 0, Number(ms));
  } else {
    const valid = ms > 0 && ms < Infinity;
    if (valid === false) {
      if (typeof ms !== "number" && typeof ms !== "bigint") {
        throw TypeError("sleep: ms must be a number");
      }
      throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
    }
  }
}
const allLanguages = SUPPORTED_LANGUAGES.join("\n - ");
const errors = {
  NO_LANGUAGE_WITH_CUSTOM_TOKENIZER: "Do not pass the language option to create when using a custom tokenizer.",
  LANGUAGE_NOT_SUPPORTED: `Language "%s" is not supported.
Supported languages are:
 - ${allLanguages}`,
  INVALID_STEMMER_FUNCTION_TYPE: `config.stemmer property must be a function.`,
  MISSING_STEMMER: `As of version 1.0.0 @orama/orama does not ship non English stemmers by default. To solve this, please explicitly import and specify the "%s" stemmer from the package @orama/stemmers. See https://docs.orama.com/docs/orama-js/text-analysis/stemming for more information.`,
  CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY: "Custom stop words array must only contain strings.",
  UNSUPPORTED_COMPONENT: `Unsupported component "%s".`,
  COMPONENT_MUST_BE_FUNCTION: `The component "%s" must be a function.`,
  COMPONENT_MUST_BE_FUNCTION_OR_ARRAY_FUNCTIONS: `The component "%s" must be a function or an array of functions.`,
  INVALID_SCHEMA_TYPE: `Unsupported schema type "%s" at "%s". Expected "string", "boolean" or "number" or array of them.`,
  DOCUMENT_ID_MUST_BE_STRING: `Document id must be of type "string". Got "%s" instead.`,
  DOCUMENT_ALREADY_EXISTS: `A document with id "%s" already exists.`,
  DOCUMENT_DOES_NOT_EXIST: `A document with id "%s" does not exists.`,
  MISSING_DOCUMENT_PROPERTY: `Missing searchable property "%s".`,
  INVALID_DOCUMENT_PROPERTY: `Invalid document property "%s": expected "%s", got "%s"`,
  UNKNOWN_INDEX: `Invalid property name "%s". Expected a wildcard string ("*") or array containing one of the following properties: %s`,
  INVALID_BOOST_VALUE: `Boost value must be a number greater than, or less than 0.`,
  INVALID_FILTER_OPERATION: `You can only use one operation per filter, you requested %d.`,
  SCHEMA_VALIDATION_FAILURE: `Cannot insert document due schema validation failure on "%s" property.`,
  INVALID_SORT_SCHEMA_TYPE: `Unsupported sort schema type "%s" at "%s". Expected "string" or "number".`,
  CANNOT_SORT_BY_ARRAY: `Cannot configure sort for "%s" because it is an array (%s).`,
  UNABLE_TO_SORT_ON_UNKNOWN_FIELD: `Unable to sort on unknown field "%s". Allowed fields: %s`,
  SORT_DISABLED: `Sort is disabled. Please read the documentation at https://docs.orama.com/docs/orama-js for more information.`,
  UNKNOWN_GROUP_BY_PROPERTY: `Unknown groupBy property "%s".`,
  INVALID_GROUP_BY_PROPERTY: `Invalid groupBy property "%s". Allowed types: "%s", but given "%s".`,
  UNKNOWN_FILTER_PROPERTY: `Unknown filter property "%s".`,
  UNKNOWN_VECTOR_PROPERTY: `Unknown vector property "%s". Make sure the property exists in the schema and is configured as a vector.`,
  INVALID_VECTOR_SIZE: `Vector size must be a number greater than 0. Got "%s" instead.`,
  INVALID_VECTOR_VALUE: `Vector value must be a number greater than 0. Got "%s" instead.`,
  INVALID_INPUT_VECTOR: `Property "%s" was declared as a %s-dimensional vector, but got a %s-dimensional vector instead.
Input vectors must be of the size declared in the schema, as calculating similarity between vectors of different sizes can lead to unexpected results.`,
  WRONG_SEARCH_PROPERTY_TYPE: `Property "%s" is not searchable. Only "string" properties are searchable.`,
  FACET_NOT_SUPPORTED: `Facet doens't support the type "%s".`,
  INVALID_DISTANCE_SUFFIX: `Invalid distance suffix "%s". Valid suffixes are: cm, m, km, mi, yd, ft.`,
  INVALID_SEARCH_MODE: `Invalid search mode "%s". Valid modes are: "fulltext", "vector", "hybrid".`,
  MISSING_VECTOR_AND_SECURE_PROXY: `No vector was provided and no secure proxy was configured. Please provide a vector or configure an Orama Secure Proxy to perform hybrid search.`,
  MISSING_TERM: `"term" is a required parameter when performing hybrid search. Please provide a search term.`,
  INVALID_VECTOR_INPUT: `Invalid "vector" property. Expected an object with "value" and "property" properties, but got "%s" instead.`,
  PLUGIN_CRASHED: `A plugin crashed during initialization. Please check the error message for more information:`,
  PLUGIN_SECURE_PROXY_NOT_FOUND: `Could not find '@orama/secure-proxy-plugin' installed in your Orama instance.
Please install it before proceeding with creating an answer session.
Read more at https://docs.orama.com/docs/orama-js/plugins/plugin-secure-proxy#plugin-secure-proxy
`,
  PLUGIN_SECURE_PROXY_MISSING_CHAT_MODEL: `Could not find a chat model defined in the secure proxy plugin configuration.
Please provide a chat model before proceeding with creating an answer session.
Read more at https://docs.orama.com/docs/orama-js/plugins/plugin-secure-proxy#plugin-secure-proxy
`,
  ANSWER_SESSION_LAST_MESSAGE_IS_NOT_ASSISTANT: `The last message in the session is not an assistant message. Cannot regenerate non-assistant messages.`,
  PLUGIN_COMPONENT_CONFLICT: `The component "%s" is already defined. The plugin "%s" is trying to redefine it.`
};
function createError(code, ...args) {
  const error = new Error(sprintf(errors[code] ?? `Unsupported Orama Error code: ${code}`, ...args));
  error.code = code;
  if ("captureStackTrace" in Error.prototype) {
    Error.captureStackTrace(error);
  }
  return error;
}
function formatElapsedTime(n) {
  return {
    raw: Number(n),
    formatted: formatNanoseconds(n)
  };
}
function getDocumentIndexId(doc) {
  if (doc.id) {
    if (typeof doc.id !== "string") {
      throw createError("DOCUMENT_ID_MUST_BE_STRING", typeof doc.id);
    }
    return doc.id;
  }
  return uniqueId();
}
function validateSchema(doc, schema) {
  for (const [prop, type] of Object.entries(schema)) {
    const value = doc[prop];
    if (typeof value === "undefined") {
      continue;
    }
    if (type === "geopoint" && typeof value === "object" && typeof value.lon === "number" && typeof value.lat === "number") {
      continue;
    }
    if (type === "enum" && (typeof value === "string" || typeof value === "number")) {
      continue;
    }
    if (type === "enum[]" && Array.isArray(value)) {
      const valueLength = value.length;
      for (let i = 0; i < valueLength; i++) {
        if (typeof value[i] !== "string" && typeof value[i] !== "number") {
          return prop + "." + i;
        }
      }
      continue;
    }
    if (isVectorType(type)) {
      const vectorSize = getVectorSize(type);
      if (!Array.isArray(value) || value.length !== vectorSize) {
        throw createError("INVALID_INPUT_VECTOR", prop, vectorSize, value.length);
      }
      continue;
    }
    if (isArrayType(type)) {
      if (!Array.isArray(value)) {
        return prop;
      }
      const expectedType = getInnerType(type);
      const valueLength = value.length;
      for (let i = 0; i < valueLength; i++) {
        if (typeof value[i] !== expectedType) {
          return prop + "." + i;
        }
      }
      continue;
    }
    if (typeof type === "object") {
      if (!value || typeof value !== "object") {
        return prop;
      }
      const subProp = validateSchema(value, type);
      if (subProp) {
        return prop + "." + subProp;
      }
      continue;
    }
    if (typeof value !== type) {
      return prop;
    }
  }
  return void 0;
}
const IS_ARRAY_TYPE = {
  string: false,
  number: false,
  boolean: false,
  enum: false,
  geopoint: false,
  "string[]": true,
  "number[]": true,
  "boolean[]": true,
  "enum[]": true
};
const INNER_TYPE = {
  "string[]": "string",
  "number[]": "number",
  "boolean[]": "boolean",
  "enum[]": "enum"
};
function isGeoPointType(type) {
  return type === "geopoint";
}
function isVectorType(type) {
  return typeof type === "string" && /^vector\[\d+\]$/.test(type);
}
function isArrayType(type) {
  return typeof type === "string" && IS_ARRAY_TYPE[type];
}
function getInnerType(type) {
  return INNER_TYPE[type];
}
function getVectorSize(type) {
  const size = Number(type.slice(7, -1));
  switch (true) {
    case isNaN(size):
      throw createError("INVALID_VECTOR_VALUE", type);
    case size <= 0:
      throw createError("INVALID_VECTOR_SIZE", type);
    default:
      return size;
  }
}
function createInternalDocumentIDStore() {
  return {
    idToInternalId: /* @__PURE__ */ new Map(),
    internalIdToId: [],
    save: save$5,
    load: load$5
  };
}
function save$5(store2) {
  return {
    internalIdToId: store2.internalIdToId
  };
}
function load$5(orama, raw) {
  const { internalIdToId } = raw;
  orama.internalDocumentIDStore.idToInternalId.clear();
  orama.internalDocumentIDStore.internalIdToId = [];
  const internalIdToIdLength = internalIdToId.length;
  for (let i = 0; i < internalIdToIdLength; i++) {
    const internalIdItem = internalIdToId[i];
    orama.internalDocumentIDStore.idToInternalId.set(internalIdItem, i + 1);
    orama.internalDocumentIDStore.internalIdToId.push(internalIdItem);
  }
}
function getInternalDocumentId(store2, id) {
  if (typeof id === "string") {
    const internalId = store2.idToInternalId.get(id);
    if (internalId) {
      return internalId;
    }
    const currentId = store2.idToInternalId.size + 1;
    store2.idToInternalId.set(id, currentId);
    store2.internalIdToId.push(id);
    return currentId;
  }
  if (id > store2.internalIdToId.length) {
    return getInternalDocumentId(store2, id.toString());
  }
  return id;
}
function getDocumentIdFromInternalId(store2, internalId) {
  if (store2.internalIdToId.length < internalId) {
    throw new Error(`Invalid internalId ${internalId}`);
  }
  return store2.internalIdToId[internalId - 1];
}
function create$4(_, sharedInternalDocumentStore) {
  return {
    sharedInternalDocumentStore,
    docs: {},
    count: 0
  };
}
function get(store2, id) {
  const internalId = getInternalDocumentId(store2.sharedInternalDocumentStore, id);
  return store2.docs[internalId];
}
function getMultiple(store2, ids) {
  const idsLength = ids.length;
  const found = Array.from({ length: idsLength });
  for (let i = 0; i < idsLength; i++) {
    const internalId = getInternalDocumentId(store2.sharedInternalDocumentStore, ids[i]);
    found[i] = store2.docs[internalId];
  }
  return found;
}
function getAll(store2) {
  return store2.docs;
}
function store(store2, id, internalId, doc) {
  if (typeof store2.docs[internalId] !== "undefined") {
    return false;
  }
  store2.docs[internalId] = doc;
  store2.count++;
  return true;
}
function remove$2(store2, id) {
  const internalId = getInternalDocumentId(store2.sharedInternalDocumentStore, id);
  if (typeof store2.docs[internalId] === "undefined") {
    return false;
  }
  delete store2.docs[internalId];
  store2.count--;
  return true;
}
function count$1(store2) {
  return store2.count;
}
function load$4(sharedInternalDocumentStore, raw) {
  const rawDocument = raw;
  return {
    docs: rawDocument.docs,
    count: rawDocument.count,
    sharedInternalDocumentStore
  };
}
function save$4(store2) {
  return {
    docs: store2.docs,
    count: store2.count
  };
}
function createDocumentsStore() {
  return {
    create: create$4,
    get,
    getMultiple,
    getAll,
    store,
    remove: remove$2,
    count: count$1,
    load: load$4,
    save: save$4
  };
}
const AVAILABLE_PLUGIN_HOOKS = [
  "beforeInsert",
  "afterInsert",
  "beforeRemove",
  "afterRemove",
  "beforeUpdate",
  "afterUpdate",
  "beforeUpsert",
  "afterUpsert",
  "beforeSearch",
  "afterSearch",
  "beforeInsertMultiple",
  "afterInsertMultiple",
  "beforeRemoveMultiple",
  "afterRemoveMultiple",
  "beforeUpdateMultiple",
  "afterUpdateMultiple",
  "beforeUpsertMultiple",
  "afterUpsertMultiple",
  "beforeLoad",
  "afterLoad",
  "afterCreate"
];
function getAllPluginsByHook(orama, hook) {
  const pluginsToRun = [];
  const pluginsLength = orama.plugins?.length;
  if (!pluginsLength) {
    return pluginsToRun;
  }
  for (let i = 0; i < pluginsLength; i++) {
    try {
      const plugin = orama.plugins[i];
      if (typeof plugin[hook] === "function") {
        pluginsToRun.push(plugin[hook]);
      }
    } catch (error) {
      console.error("Caught error in getAllPluginsByHook:", error);
      throw createError("PLUGIN_CRASHED");
    }
  }
  return pluginsToRun;
}
const OBJECT_COMPONENTS = ["tokenizer", "index", "documentsStore", "sorter", "pinning"];
const FUNCTION_COMPONENTS = [
  "validateSchema",
  "getDocumentIndexId",
  "getDocumentProperties",
  "formatElapsedTime"
];
function runSingleHook(hooks, orama, id, doc) {
  const needAsync = hooks.some(isAsyncFunction);
  if (needAsync) {
    return (async () => {
      for (const hook of hooks) {
        await hook(orama, id, doc);
      }
    })();
  } else {
    for (const hook of hooks) {
      hook(orama, id, doc);
    }
  }
}
function runMultipleHook(hooks, orama, docsOrIds) {
  const needAsync = hooks.some(isAsyncFunction);
  if (needAsync) {
    return (async () => {
      for (const hook of hooks) {
        await hook(orama, docsOrIds);
      }
    })();
  } else {
    for (const hook of hooks) {
      hook(orama, docsOrIds);
    }
  }
}
function runAfterSearch(hooks, db, params, language, results) {
  const needAsync = hooks.some(isAsyncFunction);
  if (needAsync) {
    return (async () => {
      for (const hook of hooks) {
        await hook(db, params, language, results);
      }
    })();
  } else {
    for (const hook of hooks) {
      hook(db, params, language, results);
    }
  }
}
function runBeforeSearch(hooks, db, params, language) {
  const needAsync = hooks.some(isAsyncFunction);
  if (needAsync) {
    return (async () => {
      for (const hook of hooks) {
        await hook(db, params, language);
      }
    })();
  } else {
    for (const hook of hooks) {
      hook(db, params, language);
    }
  }
}
function runAfterCreate(hooks, db) {
  const needAsync = hooks.some(isAsyncFunction);
  if (needAsync) {
    return (async () => {
      for (const hook of hooks) {
        await hook(db);
      }
    })();
  } else {
    for (const hook of hooks) {
      hook(db);
    }
  }
}
class AVLNode {
  k;
  v;
  l = null;
  r = null;
  h = 1;
  constructor(key, value) {
    this.k = key;
    this.v = new Set(value);
  }
  updateHeight() {
    this.h = Math.max(AVLNode.getHeight(this.l), AVLNode.getHeight(this.r)) + 1;
  }
  static getHeight(node) {
    return node ? node.h : 0;
  }
  getBalanceFactor() {
    return AVLNode.getHeight(this.l) - AVLNode.getHeight(this.r);
  }
  rotateLeft() {
    const newRoot = this.r;
    this.r = newRoot.l;
    newRoot.l = this;
    this.updateHeight();
    newRoot.updateHeight();
    return newRoot;
  }
  rotateRight() {
    const newRoot = this.l;
    this.l = newRoot.r;
    newRoot.r = this;
    this.updateHeight();
    newRoot.updateHeight();
    return newRoot;
  }
  toJSON() {
    return {
      k: this.k,
      v: Array.from(this.v),
      l: this.l ? this.l.toJSON() : null,
      r: this.r ? this.r.toJSON() : null,
      h: this.h
    };
  }
  static fromJSON(json) {
    const node = new AVLNode(json.k, json.v);
    node.l = json.l ? AVLNode.fromJSON(json.l) : null;
    node.r = json.r ? AVLNode.fromJSON(json.r) : null;
    node.h = json.h;
    return node;
  }
}
class AVLTree {
  root = null;
  insertCount = 0;
  constructor(key, value) {
    if (key !== void 0 && value !== void 0) {
      this.root = new AVLNode(key, value);
    }
  }
  insert(key, value, rebalanceThreshold = 1e3) {
    this.root = this.insertNode(this.root, key, value, rebalanceThreshold);
  }
  insertMultiple(key, value, rebalanceThreshold = 1e3) {
    for (const v2 of value) {
      this.insert(key, v2, rebalanceThreshold);
    }
  }
  // Rebalance the tree if the insert count reaches the threshold.
  // This will improve insertion performance since we won't be rebalancing the tree on every insert.
  // When inserting docs using `insertMultiple`, the threshold will be set to the number of docs being inserted.
  // We can force rebalancing the tree by setting the threshold to 1 (default).
  rebalance() {
    if (this.root) {
      this.root = this.rebalanceNode(this.root);
    }
  }
  toJSON() {
    return {
      root: this.root ? this.root.toJSON() : null,
      insertCount: this.insertCount
    };
  }
  static fromJSON(json) {
    const tree = new AVLTree();
    tree.root = json.root ? AVLNode.fromJSON(json.root) : null;
    tree.insertCount = json.insertCount || 0;
    return tree;
  }
  insertNode(node, key, value, rebalanceThreshold) {
    if (node === null) {
      return new AVLNode(key, [value]);
    }
    const path = [];
    let current = node;
    let parent = null;
    while (current !== null) {
      path.push({ parent, node: current });
      if (key < current.k) {
        if (current.l === null) {
          current.l = new AVLNode(key, [value]);
          path.push({ parent: current, node: current.l });
          break;
        } else {
          parent = current;
          current = current.l;
        }
      } else if (key > current.k) {
        if (current.r === null) {
          current.r = new AVLNode(key, [value]);
          path.push({ parent: current, node: current.r });
          break;
        } else {
          parent = current;
          current = current.r;
        }
      } else {
        current.v.add(value);
        return node;
      }
    }
    let needRebalance = false;
    if (this.insertCount++ % rebalanceThreshold === 0) {
      needRebalance = true;
    }
    for (let i = path.length - 1; i >= 0; i--) {
      const { parent: parent2, node: currentNode } = path[i];
      currentNode.updateHeight();
      if (needRebalance) {
        const rebalancedNode = this.rebalanceNode(currentNode);
        if (parent2) {
          if (parent2.l === currentNode) {
            parent2.l = rebalancedNode;
          } else if (parent2.r === currentNode) {
            parent2.r = rebalancedNode;
          }
        } else {
          node = rebalancedNode;
        }
      }
    }
    return node;
  }
  rebalanceNode(node) {
    const balanceFactor = node.getBalanceFactor();
    if (balanceFactor > 1) {
      if (node.l && node.l.getBalanceFactor() >= 0) {
        return node.rotateRight();
      } else if (node.l) {
        node.l = node.l.rotateLeft();
        return node.rotateRight();
      }
    }
    if (balanceFactor < -1) {
      if (node.r && node.r.getBalanceFactor() <= 0) {
        return node.rotateLeft();
      } else if (node.r) {
        node.r = node.r.rotateRight();
        return node.rotateLeft();
      }
    }
    return node;
  }
  find(key) {
    const node = this.findNodeByKey(key);
    return node ? node.v : null;
  }
  contains(key) {
    return this.find(key) !== null;
  }
  getSize() {
    let count2 = 0;
    const stack = [];
    let current = this.root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.l;
      }
      current = stack.pop();
      count2++;
      current = current.r;
    }
    return count2;
  }
  isBalanced() {
    if (!this.root)
      return true;
    const stack = [this.root];
    while (stack.length > 0) {
      const node = stack.pop();
      const balanceFactor = node.getBalanceFactor();
      if (Math.abs(balanceFactor) > 1) {
        return false;
      }
      if (node.l)
        stack.push(node.l);
      if (node.r)
        stack.push(node.r);
    }
    return true;
  }
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeDocument(key, id) {
    const node = this.findNodeByKey(key);
    if (!node) {
      return;
    }
    if (node.v.size === 1) {
      this.root = this.removeNode(this.root, key);
    } else {
      node.v = new Set([...node.v.values()].filter((v2) => v2 !== id));
    }
  }
  findNodeByKey(key) {
    let node = this.root;
    while (node) {
      if (key < node.k) {
        node = node.l;
      } else if (key > node.k) {
        node = node.r;
      } else {
        return node;
      }
    }
    return null;
  }
  removeNode(node, key) {
    if (node === null)
      return null;
    const path = [];
    let current = node;
    while (current !== null && current.k !== key) {
      path.push(current);
      if (key < current.k) {
        current = current.l;
      } else {
        current = current.r;
      }
    }
    if (current === null) {
      return node;
    }
    if (current.l === null || current.r === null) {
      const child = current.l ? current.l : current.r;
      if (path.length === 0) {
        node = child;
      } else {
        const parent = path[path.length - 1];
        if (parent.l === current) {
          parent.l = child;
        } else {
          parent.r = child;
        }
      }
    } else {
      let successorParent = current;
      let successor = current.r;
      while (successor.l !== null) {
        successorParent = successor;
        successor = successor.l;
      }
      current.k = successor.k;
      current.v = successor.v;
      if (successorParent.l === successor) {
        successorParent.l = successor.r;
      } else {
        successorParent.r = successor.r;
      }
      current = successorParent;
    }
    path.push(current);
    for (let i = path.length - 1; i >= 0; i--) {
      const currentNode = path[i];
      currentNode.updateHeight();
      const rebalancedNode = this.rebalanceNode(currentNode);
      if (i > 0) {
        const parent = path[i - 1];
        if (parent.l === currentNode) {
          parent.l = rebalancedNode;
        } else if (parent.r === currentNode) {
          parent.r = rebalancedNode;
        }
      } else {
        node = rebalancedNode;
      }
    }
    return node;
  }
  rangeSearch(min, max) {
    const result = /* @__PURE__ */ new Set();
    const stack = [];
    let current = this.root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.l;
      }
      current = stack.pop();
      if (current.k >= min && current.k <= max) {
        for (const value of current.v) {
          result.add(value);
        }
      }
      if (current.k > max) {
        break;
      }
      current = current.r;
    }
    return result;
  }
  greaterThan(key, inclusive = false) {
    const result = /* @__PURE__ */ new Set();
    const stack = [];
    let current = this.root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.r;
      }
      current = stack.pop();
      if (inclusive && current.k >= key || !inclusive && current.k > key) {
        for (const value of current.v) {
          result.add(value);
        }
      } else if (current.k <= key) {
        break;
      }
      current = current.l;
    }
    return result;
  }
  lessThan(key, inclusive = false) {
    const result = /* @__PURE__ */ new Set();
    const stack = [];
    let current = this.root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.l;
      }
      current = stack.pop();
      if (inclusive && current.k <= key || !inclusive && current.k < key) {
        for (const value of current.v) {
          result.add(value);
        }
      } else if (current.k > key) {
        break;
      }
      current = current.r;
    }
    return result;
  }
}
class FlatTree {
  numberToDocumentId;
  constructor() {
    this.numberToDocumentId = /* @__PURE__ */ new Map();
  }
  insert(key, value) {
    if (this.numberToDocumentId.has(key)) {
      this.numberToDocumentId.get(key).add(value);
    } else {
      this.numberToDocumentId.set(key, /* @__PURE__ */ new Set([value]));
    }
  }
  find(key) {
    const idSet = this.numberToDocumentId.get(key);
    return idSet ? Array.from(idSet) : null;
  }
  remove(key) {
    this.numberToDocumentId.delete(key);
  }
  removeDocument(id, key) {
    const idSet = this.numberToDocumentId.get(key);
    if (idSet) {
      idSet.delete(id);
      if (idSet.size === 0) {
        this.numberToDocumentId.delete(key);
      }
    }
  }
  contains(key) {
    return this.numberToDocumentId.has(key);
  }
  getSize() {
    let size = 0;
    for (const idSet of this.numberToDocumentId.values()) {
      size += idSet.size;
    }
    return size;
  }
  filter(operation) {
    const operationKeys = Object.keys(operation);
    if (operationKeys.length !== 1) {
      throw new Error("Invalid operation");
    }
    const operationType = operationKeys[0];
    switch (operationType) {
      case "eq": {
        const value = operation[operationType];
        const idSet = this.numberToDocumentId.get(value);
        return idSet ? Array.from(idSet) : [];
      }
      case "in": {
        const values = operation[operationType];
        const resultSet = /* @__PURE__ */ new Set();
        for (const value of values) {
          const idSet = this.numberToDocumentId.get(value);
          if (idSet) {
            for (const id of idSet) {
              resultSet.add(id);
            }
          }
        }
        return Array.from(resultSet);
      }
      case "nin": {
        const excludeValues = new Set(operation[operationType]);
        const resultSet = /* @__PURE__ */ new Set();
        for (const [key, idSet] of this.numberToDocumentId.entries()) {
          if (!excludeValues.has(key)) {
            for (const id of idSet) {
              resultSet.add(id);
            }
          }
        }
        return Array.from(resultSet);
      }
      default:
        throw new Error("Invalid operation");
    }
  }
  filterArr(operation) {
    const operationKeys = Object.keys(operation);
    if (operationKeys.length !== 1) {
      throw new Error("Invalid operation");
    }
    const operationType = operationKeys[0];
    switch (operationType) {
      case "containsAll": {
        const values = operation[operationType];
        const idSets = values.map((value) => this.numberToDocumentId.get(value) ?? /* @__PURE__ */ new Set());
        if (idSets.length === 0)
          return [];
        const intersection = idSets.reduce((prev, curr) => {
          return new Set([...prev].filter((id) => curr.has(id)));
        });
        return Array.from(intersection);
      }
      case "containsAny": {
        const values = operation[operationType];
        const idSets = values.map((value) => this.numberToDocumentId.get(value) ?? /* @__PURE__ */ new Set());
        if (idSets.length === 0)
          return [];
        const union = idSets.reduce((prev, curr) => {
          return /* @__PURE__ */ new Set([...prev, ...curr]);
        });
        return Array.from(union);
      }
      default:
        throw new Error("Invalid operation");
    }
  }
  static fromJSON(json) {
    if (!json.numberToDocumentId) {
      throw new Error("Invalid Flat Tree JSON");
    }
    const tree = new FlatTree();
    for (const [key, ids] of json.numberToDocumentId) {
      tree.numberToDocumentId.set(key, new Set(ids));
    }
    return tree;
  }
  toJSON() {
    return {
      numberToDocumentId: Array.from(this.numberToDocumentId.entries()).map(([key, idSet]) => [key, Array.from(idSet)])
    };
  }
}
function _boundedLevenshtein(term, word, tolerance) {
  if (tolerance < 0)
    return -1;
  if (term === word)
    return 0;
  const m = term.length;
  const n = word.length;
  if (m === 0)
    return n <= tolerance ? n : -1;
  if (n === 0)
    return m <= tolerance ? m : -1;
  const diff = Math.abs(m - n);
  if (term.startsWith(word)) {
    return diff <= tolerance ? diff : -1;
  }
  if (word.startsWith(term)) {
    return 0;
  }
  if (diff > tolerance)
    return -1;
  const matrix = [];
  for (let i = 0; i <= m; i++) {
    matrix[i] = [i];
    for (let j = 1; j <= n; j++) {
      matrix[i][j] = i === 0 ? j : 0;
    }
  }
  for (let i = 1; i <= m; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= n; j++) {
      if (term[i - 1] === word[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          // deletion
          matrix[i][j - 1] + 1,
          // insertion
          matrix[i - 1][j - 1] + 1
          // substitution
        );
      }
      rowMin = Math.min(rowMin, matrix[i][j]);
    }
    if (rowMin > tolerance) {
      return -1;
    }
  }
  return matrix[m][n] <= tolerance ? matrix[m][n] : -1;
}
function syncBoundedLevenshtein(term, w, tolerance) {
  const distance = _boundedLevenshtein(term, w, tolerance);
  return {
    distance,
    isBounded: distance >= 0
  };
}
class RadixNode {
  // Node key
  k;
  // Node subword
  s;
  // Node children
  c = /* @__PURE__ */ new Map();
  // Node documents
  d = /* @__PURE__ */ new Set();
  // Node end
  e;
  // Node word
  w = "";
  constructor(key, subWord, end) {
    this.k = key;
    this.s = subWord;
    this.e = end;
  }
  updateParent(parent) {
    this.w = parent.w + this.s;
  }
  addDocument(docID) {
    this.d.add(docID);
  }
  removeDocument(docID) {
    return this.d.delete(docID);
  }
  findAllWords(output, term, exact, tolerance) {
    const stack = [this];
    while (stack.length > 0) {
      const node = stack.pop();
      if (node.e) {
        const { w, d: docIDs } = node;
        if (exact && w !== term) {
          continue;
        }
        if (getOwnProperty(output, w) !== null) {
          if (tolerance) {
            const difference = Math.abs(term.length - w.length);
            if (difference <= tolerance && syncBoundedLevenshtein(term, w, tolerance).isBounded) {
              output[w] = [];
            } else {
              continue;
            }
          } else {
            output[w] = [];
          }
        }
        if (getOwnProperty(output, w) != null && docIDs.size > 0) {
          const docs = output[w];
          for (const docID of docIDs) {
            if (!docs.includes(docID)) {
              docs.push(docID);
            }
          }
        }
      }
      if (node.c.size > 0) {
        stack.push(...node.c.values());
      }
    }
    return output;
  }
  insert(word, docId) {
    let node = this;
    let i = 0;
    const wordLength = word.length;
    while (i < wordLength) {
      const currentCharacter = word[i];
      const childNode = node.c.get(currentCharacter);
      if (childNode) {
        const edgeLabel = childNode.s;
        const edgeLabelLength = edgeLabel.length;
        let j = 0;
        while (j < edgeLabelLength && i + j < wordLength && edgeLabel[j] === word[i + j]) {
          j++;
        }
        if (j === edgeLabelLength) {
          node = childNode;
          i += j;
          if (i === wordLength) {
            if (!childNode.e) {
              childNode.e = true;
            }
            childNode.addDocument(docId);
            return;
          }
          continue;
        }
        const commonPrefix = edgeLabel.slice(0, j);
        const newEdgeLabel = edgeLabel.slice(j);
        const newWordLabel = word.slice(i + j);
        const inbetweenNode = new RadixNode(commonPrefix[0], commonPrefix, false);
        node.c.set(commonPrefix[0], inbetweenNode);
        inbetweenNode.updateParent(node);
        childNode.s = newEdgeLabel;
        childNode.k = newEdgeLabel[0];
        inbetweenNode.c.set(newEdgeLabel[0], childNode);
        childNode.updateParent(inbetweenNode);
        if (newWordLabel) {
          const newNode = new RadixNode(newWordLabel[0], newWordLabel, true);
          newNode.addDocument(docId);
          inbetweenNode.c.set(newWordLabel[0], newNode);
          newNode.updateParent(inbetweenNode);
        } else {
          inbetweenNode.e = true;
          inbetweenNode.addDocument(docId);
        }
        return;
      } else {
        const newNode = new RadixNode(currentCharacter, word.slice(i), true);
        newNode.addDocument(docId);
        node.c.set(currentCharacter, newNode);
        newNode.updateParent(node);
        return;
      }
    }
    if (!node.e) {
      node.e = true;
    }
    node.addDocument(docId);
  }
  _findLevenshtein(term, index, tolerance, originalTolerance, output) {
    const stack = [{ node: this, index, tolerance }];
    while (stack.length > 0) {
      const { node, index: index2, tolerance: tolerance2 } = stack.pop();
      if (node.w.startsWith(term)) {
        node.findAllWords(output, term, false, 0);
        continue;
      }
      if (tolerance2 < 0) {
        continue;
      }
      if (node.e) {
        const { w, d: docIDs } = node;
        if (w) {
          if (syncBoundedLevenshtein(term, w, originalTolerance).isBounded) {
            output[w] = [];
          }
          if (getOwnProperty(output, w) !== void 0 && docIDs.size > 0) {
            const docs = new Set(output[w]);
            for (const docID of docIDs) {
              docs.add(docID);
            }
            output[w] = Array.from(docs);
          }
        }
      }
      if (index2 >= term.length) {
        continue;
      }
      const currentChar = term[index2];
      if (node.c.has(currentChar)) {
        const childNode = node.c.get(currentChar);
        stack.push({ node: childNode, index: index2 + 1, tolerance: tolerance2 });
      }
      stack.push({ node, index: index2 + 1, tolerance: tolerance2 - 1 });
      for (const [character, childNode] of node.c) {
        stack.push({ node: childNode, index: index2, tolerance: tolerance2 - 1 });
        if (character !== currentChar) {
          stack.push({ node: childNode, index: index2 + 1, tolerance: tolerance2 - 1 });
        }
      }
    }
  }
  find(params) {
    const { term, exact, tolerance } = params;
    if (tolerance && !exact) {
      const output = {};
      this._findLevenshtein(term, 0, tolerance, tolerance, output);
      return output;
    } else {
      let node = this;
      let i = 0;
      const termLength = term.length;
      while (i < termLength) {
        const character = term[i];
        const childNode = node.c.get(character);
        if (childNode) {
          const edgeLabel = childNode.s;
          const edgeLabelLength = edgeLabel.length;
          let j = 0;
          while (j < edgeLabelLength && i + j < termLength && edgeLabel[j] === term[i + j]) {
            j++;
          }
          if (j === edgeLabelLength) {
            node = childNode;
            i += j;
          } else if (i + j === termLength) {
            if (j === termLength - i) {
              if (exact) {
                return {};
              } else {
                const output2 = {};
                childNode.findAllWords(output2, term, exact, tolerance);
                return output2;
              }
            } else {
              return {};
            }
          } else {
            return {};
          }
        } else {
          return {};
        }
      }
      const output = {};
      node.findAllWords(output, term, exact, tolerance);
      return output;
    }
  }
  contains(term) {
    let node = this;
    let i = 0;
    const termLength = term.length;
    while (i < termLength) {
      const character = term[i];
      const childNode = node.c.get(character);
      if (childNode) {
        const edgeLabel = childNode.s;
        const edgeLabelLength = edgeLabel.length;
        let j = 0;
        while (j < edgeLabelLength && i + j < termLength && edgeLabel[j] === term[i + j]) {
          j++;
        }
        if (j < edgeLabelLength) {
          return false;
        }
        i += edgeLabelLength;
        node = childNode;
      } else {
        return false;
      }
    }
    return true;
  }
  removeWord(term) {
    if (!term) {
      return false;
    }
    let node = this;
    const termLength = term.length;
    const stack = [];
    for (let i = 0; i < termLength; i++) {
      const character = term[i];
      if (node.c.has(character)) {
        const childNode = node.c.get(character);
        stack.push({ parent: node, character });
        i += childNode.s.length - 1;
        node = childNode;
      } else {
        return false;
      }
    }
    node.d.clear();
    node.e = false;
    while (stack.length > 0 && node.c.size === 0 && !node.e && node.d.size === 0) {
      const { parent, character } = stack.pop();
      parent.c.delete(character);
      node = parent;
    }
    return true;
  }
  removeDocumentByWord(term, docID, exact = true) {
    if (!term) {
      return true;
    }
    let node = this;
    const termLength = term.length;
    for (let i = 0; i < termLength; i++) {
      const character = term[i];
      if (node.c.has(character)) {
        const childNode = node.c.get(character);
        i += childNode.s.length - 1;
        node = childNode;
        if (exact && node.w !== term) ;
        else {
          node.removeDocument(docID);
        }
      } else {
        return false;
      }
    }
    return true;
  }
  static getCommonPrefix(a, b) {
    const len = Math.min(a.length, b.length);
    let i = 0;
    while (i < len && a.charCodeAt(i) === b.charCodeAt(i)) {
      i++;
    }
    return a.slice(0, i);
  }
  toJSON() {
    return {
      w: this.w,
      s: this.s,
      e: this.e,
      k: this.k,
      d: Array.from(this.d),
      c: Array.from(this.c?.entries())?.map(([key, node]) => [key, node.toJSON()])
    };
  }
  static fromJSON(json) {
    const node = new RadixNode(json.k, json.s, json.e);
    node.w = json.w;
    node.d = new Set(json.d);
    node.c = new Map(json?.c?.map(([key, nodeJson]) => [key, RadixNode.fromJSON(nodeJson)]) || []);
    return node;
  }
}
class RadixTree extends RadixNode {
  constructor() {
    super("", "", false);
  }
  static fromJSON(json) {
    const tree = new RadixTree();
    tree.w = json.w;
    tree.s = json.s;
    tree.e = json.e;
    tree.k = json.k;
    tree.d = new Set(json.d);
    tree.c = new Map(json?.c?.map(([key, nodeJson]) => [key, RadixNode.fromJSON(nodeJson)]) || []);
    return tree;
  }
  toJSON() {
    return super.toJSON();
  }
}
const K = 2;
const EARTH_RADIUS = 6371e3;
class BKDNode {
  point;
  docIDs;
  left;
  right;
  parent;
  constructor(point, docIDs) {
    this.point = point;
    this.docIDs = new Set(docIDs);
    this.left = null;
    this.right = null;
    this.parent = null;
  }
  toJSON() {
    return {
      point: this.point,
      docIDs: Array.from(this.docIDs),
      left: this.left ? this.left.toJSON() : null,
      right: this.right ? this.right.toJSON() : null
    };
  }
  static fromJSON(json, parent = null) {
    const node = new BKDNode(json.point, json.docIDs);
    node.parent = parent;
    if (json.left) {
      node.left = BKDNode.fromJSON(json.left, node);
    }
    if (json.right) {
      node.right = BKDNode.fromJSON(json.right, node);
    }
    return node;
  }
}
class BKDTree {
  root;
  nodeMap;
  constructor() {
    this.root = null;
    this.nodeMap = /* @__PURE__ */ new Map();
  }
  getPointKey(point) {
    return `${point.lon},${point.lat}`;
  }
  insert(point, docIDs) {
    const pointKey = this.getPointKey(point);
    const existingNode = this.nodeMap.get(pointKey);
    if (existingNode) {
      docIDs.forEach((id) => existingNode.docIDs.add(id));
      return;
    }
    const newNode = new BKDNode(point, docIDs);
    this.nodeMap.set(pointKey, newNode);
    if (this.root == null) {
      this.root = newNode;
      return;
    }
    let node = this.root;
    let depth = 0;
    while (true) {
      const axis = depth % K;
      if (axis === 0) {
        if (point.lon < node.point.lon) {
          if (node.left == null) {
            node.left = newNode;
            newNode.parent = node;
            return;
          }
          node = node.left;
        } else {
          if (node.right == null) {
            node.right = newNode;
            newNode.parent = node;
            return;
          }
          node = node.right;
        }
      } else {
        if (point.lat < node.point.lat) {
          if (node.left == null) {
            node.left = newNode;
            newNode.parent = node;
            return;
          }
          node = node.left;
        } else {
          if (node.right == null) {
            node.right = newNode;
            newNode.parent = node;
            return;
          }
          node = node.right;
        }
      }
      depth++;
    }
  }
  contains(point) {
    const pointKey = this.getPointKey(point);
    return this.nodeMap.has(pointKey);
  }
  getDocIDsByCoordinates(point) {
    const pointKey = this.getPointKey(point);
    const node = this.nodeMap.get(pointKey);
    if (node) {
      return Array.from(node.docIDs);
    }
    return null;
  }
  removeDocByID(point, docID) {
    const pointKey = this.getPointKey(point);
    const node = this.nodeMap.get(pointKey);
    if (node) {
      node.docIDs.delete(docID);
      if (node.docIDs.size === 0) {
        this.nodeMap.delete(pointKey);
        this.deleteNode(node);
      }
    }
  }
  deleteNode(node) {
    const parent = node.parent;
    const child = node.left ? node.left : node.right;
    if (child) {
      child.parent = parent;
    }
    if (parent) {
      if (parent.left === node) {
        parent.left = child;
      } else if (parent.right === node) {
        parent.right = child;
      }
    } else {
      this.root = child;
      if (this.root) {
        this.root.parent = null;
      }
    }
  }
  searchByRadius(center, radius, inclusive = true, sort = "asc", highPrecision = false) {
    const distanceFn = highPrecision ? BKDTree.vincentyDistance : BKDTree.haversineDistance;
    const stack = [{ node: this.root, depth: 0 }];
    const result = [];
    while (stack.length > 0) {
      const { node, depth } = stack.pop();
      if (node == null)
        continue;
      const dist = distanceFn(center, node.point);
      if (inclusive ? dist <= radius : dist > radius) {
        result.push({ point: node.point, docIDs: Array.from(node.docIDs) });
      }
      if (node.left != null) {
        stack.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right != null) {
        stack.push({ node: node.right, depth: depth + 1 });
      }
    }
    if (sort) {
      result.sort((a, b) => {
        const distA = distanceFn(center, a.point);
        const distB = distanceFn(center, b.point);
        return sort.toLowerCase() === "asc" ? distA - distB : distB - distA;
      });
    }
    return result;
  }
  searchByPolygon(polygon, inclusive = true, sort = null, highPrecision = false) {
    const stack = [{ node: this.root, depth: 0 }];
    const result = [];
    while (stack.length > 0) {
      const { node, depth } = stack.pop();
      if (node == null)
        continue;
      if (node.left != null) {
        stack.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right != null) {
        stack.push({ node: node.right, depth: depth + 1 });
      }
      const isInsidePolygon = BKDTree.isPointInPolygon(polygon, node.point);
      if (isInsidePolygon && inclusive || !isInsidePolygon && !inclusive) {
        result.push({ point: node.point, docIDs: Array.from(node.docIDs) });
      }
    }
    const centroid = BKDTree.calculatePolygonCentroid(polygon);
    if (sort) {
      const distanceFn = highPrecision ? BKDTree.vincentyDistance : BKDTree.haversineDistance;
      result.sort((a, b) => {
        const distA = distanceFn(centroid, a.point);
        const distB = distanceFn(centroid, b.point);
        return sort.toLowerCase() === "asc" ? distA - distB : distB - distA;
      });
    }
    return result;
  }
  toJSON() {
    return {
      root: this.root ? this.root.toJSON() : null
    };
  }
  static fromJSON(json) {
    const tree = new BKDTree();
    if (json.root) {
      tree.root = BKDNode.fromJSON(json.root);
      tree.buildNodeMap(tree.root);
    }
    return tree;
  }
  buildNodeMap(node) {
    if (node == null)
      return;
    const pointKey = this.getPointKey(node.point);
    this.nodeMap.set(pointKey, node);
    if (node.left) {
      this.buildNodeMap(node.left);
    }
    if (node.right) {
      this.buildNodeMap(node.right);
    }
  }
  static calculatePolygonCentroid(polygon) {
    let totalArea = 0;
    let centroidX = 0;
    let centroidY = 0;
    const polygonLength = polygon.length;
    for (let i = 0, j = polygonLength - 1; i < polygonLength; j = i++) {
      const xi = polygon[i].lon;
      const yi = polygon[i].lat;
      const xj = polygon[j].lon;
      const yj = polygon[j].lat;
      const areaSegment = xi * yj - xj * yi;
      totalArea += areaSegment;
      centroidX += (xi + xj) * areaSegment;
      centroidY += (yi + yj) * areaSegment;
    }
    totalArea /= 2;
    const centroidCoordinate = 6 * totalArea;
    centroidX /= centroidCoordinate;
    centroidY /= centroidCoordinate;
    return { lon: centroidX, lat: centroidY };
  }
  static isPointInPolygon(polygon, point) {
    let isInside = false;
    const x = point.lon;
    const y = point.lat;
    const polygonLength = polygon.length;
    for (let i = 0, j = polygonLength - 1; i < polygonLength; j = i++) {
      const xi = polygon[i].lon;
      const yi = polygon[i].lat;
      const xj = polygon[j].lon;
      const yj = polygon[j].lat;
      const intersect2 = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect2)
        isInside = !isInside;
    }
    return isInside;
  }
  static haversineDistance(coord1, coord2) {
    const P = Math.PI / 180;
    const lat1 = coord1.lat * P;
    const lat2 = coord2.lat * P;
    const deltaLat = (coord2.lat - coord1.lat) * P;
    const deltaLon = (coord2.lon - coord1.lon) * P;
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c2 = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c2;
  }
  static vincentyDistance(coord1, coord2) {
    const a = 6378137;
    const f = 1 / 298.257223563;
    const b = (1 - f) * a;
    const P = Math.PI / 180;
    const lat1 = coord1.lat * P;
    const lat2 = coord2.lat * P;
    const deltaLon = (coord2.lon - coord1.lon) * P;
    const U1 = Math.atan((1 - f) * Math.tan(lat1));
    const U2 = Math.atan((1 - f) * Math.tan(lat2));
    const sinU1 = Math.sin(U1);
    const cosU1 = Math.cos(U1);
    const sinU2 = Math.sin(U2);
    const cosU2 = Math.cos(U2);
    let lambda = deltaLon;
    let prevLambda;
    let iterationLimit = 1e3;
    let sinSigma;
    let cosSigma;
    let sigma;
    let sinAlpha;
    let cos2Alpha;
    let cos2SigmaM;
    do {
      const sinLambda = Math.sin(lambda);
      const cosLambda = Math.cos(lambda);
      sinSigma = Math.sqrt(cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
      if (sinSigma === 0)
        return 0;
      cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
      sigma = Math.atan2(sinSigma, cosSigma);
      sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
      cos2Alpha = 1 - sinAlpha * sinAlpha;
      cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cos2Alpha;
      if (isNaN(cos2SigmaM))
        cos2SigmaM = 0;
      const C2 = f / 16 * cos2Alpha * (4 + f * (4 - 3 * cos2Alpha));
      prevLambda = lambda;
      lambda = deltaLon + (1 - C2) * f * sinAlpha * (sigma + C2 * sinSigma * (cos2SigmaM + C2 * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    } while (Math.abs(lambda - prevLambda) > 1e-12 && --iterationLimit > 0);
    if (iterationLimit === 0) {
      return NaN;
    }
    const uSquared = cos2Alpha * (a * a - b * b) / (b * b);
    const A = 1 + uSquared / 16384 * (4096 + uSquared * (-768 + uSquared * (320 - 175 * uSquared)));
    const B = uSquared / 1024 * (256 + uSquared * (-128 + uSquared * (74 - 47 * uSquared)));
    const deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
    const s = b * A * (sigma - deltaSigma);
    return s;
  }
}
class BoolNode {
  true;
  false;
  constructor() {
    this.true = /* @__PURE__ */ new Set();
    this.false = /* @__PURE__ */ new Set();
  }
  insert(value, bool) {
    if (bool) {
      this.true.add(value);
    } else {
      this.false.add(value);
    }
  }
  delete(value, bool) {
    if (bool) {
      this.true.delete(value);
    } else {
      this.false.delete(value);
    }
  }
  getSize() {
    return this.true.size + this.false.size;
  }
  toJSON() {
    return {
      true: Array.from(this.true),
      false: Array.from(this.false)
    };
  }
  static fromJSON(json) {
    const node = new BoolNode();
    node.true = new Set(json.true);
    node.false = new Set(json.false);
    return node;
  }
}
function BM25(tf, matchingCount, docsCount, fieldLength, averageFieldLength, { k, b, d }) {
  const idf = Math.log(1 + (docsCount - matchingCount + 0.5) / (matchingCount + 0.5));
  return idf * (d + tf * (k + 1)) / (tf + k * (1 - b + b * fieldLength / averageFieldLength));
}
const DEFAULT_SIMILARITY = 0.8;
class VectorIndex {
  size;
  vectors = /* @__PURE__ */ new Map();
  constructor(size) {
    this.size = size;
  }
  add(internalDocumentId, value) {
    if (!(value instanceof Float32Array)) {
      value = new Float32Array(value);
    }
    const magnitude = getMagnitude(value, this.size);
    this.vectors.set(internalDocumentId, [magnitude, value]);
  }
  remove(internalDocumentId) {
    this.vectors.delete(internalDocumentId);
  }
  find(vector, similarity, whereFiltersIDs) {
    if (!(vector instanceof Float32Array)) {
      vector = new Float32Array(vector);
    }
    const results = findSimilarVectors(vector, whereFiltersIDs, this.vectors, this.size, similarity);
    return results;
  }
  toJSON() {
    const vectors = [];
    for (const [id, [magnitude, vector]] of this.vectors) {
      vectors.push([id, [magnitude, Array.from(vector)]]);
    }
    return {
      size: this.size,
      vectors
    };
  }
  static fromJSON(json) {
    const raw = json;
    const index = new VectorIndex(raw.size);
    for (const [id, [magnitude, vector]] of raw.vectors) {
      index.vectors.set(id, [magnitude, new Float32Array(vector)]);
    }
    return index;
  }
}
function getMagnitude(vector, vectorLength) {
  let magnitude = 0;
  for (let i = 0; i < vectorLength; i++) {
    magnitude += vector[i] * vector[i];
  }
  return Math.sqrt(magnitude);
}
function findSimilarVectors(targetVector, keys, vectors, length, threshold) {
  const targetMagnitude = getMagnitude(targetVector, length);
  const similarVectors = [];
  const base = keys ? keys : vectors.keys();
  for (const vectorId of base) {
    const entry = vectors.get(vectorId);
    if (!entry) {
      continue;
    }
    const magnitude = entry[0];
    const vector = entry[1];
    let dotProduct = 0;
    for (let i = 0; i < length; i++) {
      dotProduct += targetVector[i] * vector[i];
    }
    const similarity = dotProduct / (targetMagnitude * magnitude);
    if (similarity >= threshold) {
      similarVectors.push([vectorId, similarity]);
    }
  }
  return similarVectors;
}
function insertDocumentScoreParameters(index, prop, id, tokens, docsCount) {
  const internalId = getInternalDocumentId(index.sharedInternalDocumentStore, id);
  index.avgFieldLength[prop] = ((index.avgFieldLength[prop] ?? 0) * (docsCount - 1) + tokens.length) / docsCount;
  index.fieldLengths[prop][internalId] = tokens.length;
  index.frequencies[prop][internalId] = {};
}
function insertTokenScoreParameters(index, prop, id, tokens, token) {
  let tokenFrequency = 0;
  for (const t of tokens) {
    if (t === token) {
      tokenFrequency++;
    }
  }
  const internalId = getInternalDocumentId(index.sharedInternalDocumentStore, id);
  const tf = tokenFrequency / tokens.length;
  index.frequencies[prop][internalId][token] = tf;
  if (!(token in index.tokenOccurrences[prop])) {
    index.tokenOccurrences[prop][token] = 0;
  }
  index.tokenOccurrences[prop][token] = (index.tokenOccurrences[prop][token] ?? 0) + 1;
}
function removeDocumentScoreParameters(index, prop, id, docsCount) {
  const internalId = getInternalDocumentId(index.sharedInternalDocumentStore, id);
  if (docsCount > 1) {
    index.avgFieldLength[prop] = (index.avgFieldLength[prop] * docsCount - index.fieldLengths[prop][internalId]) / (docsCount - 1);
  } else {
    index.avgFieldLength[prop] = void 0;
  }
  index.fieldLengths[prop][internalId] = void 0;
  index.frequencies[prop][internalId] = void 0;
}
function removeTokenScoreParameters(index, prop, token) {
  index.tokenOccurrences[prop][token]--;
}
function create$3(orama, sharedInternalDocumentStore, schema, index, prefix = "") {
  if (!index) {
    index = {
      sharedInternalDocumentStore,
      indexes: {},
      vectorIndexes: {},
      searchableProperties: [],
      searchablePropertiesWithTypes: {},
      frequencies: {},
      tokenOccurrences: {},
      avgFieldLength: {},
      fieldLengths: {}
    };
  }
  for (const [prop, type] of Object.entries(schema)) {
    const path = `${prefix}${prefix ? "." : ""}${prop}`;
    if (typeof type === "object" && !Array.isArray(type)) {
      create$3(orama, sharedInternalDocumentStore, type, index, path);
      continue;
    }
    if (isVectorType(type)) {
      index.searchableProperties.push(path);
      index.searchablePropertiesWithTypes[path] = type;
      index.vectorIndexes[path] = {
        type: "Vector",
        node: new VectorIndex(getVectorSize(type)),
        isArray: false
      };
    } else {
      const isArray = /\[/.test(type);
      switch (type) {
        case "boolean":
        case "boolean[]":
          index.indexes[path] = { type: "Bool", node: new BoolNode(), isArray };
          break;
        case "number":
        case "number[]":
          index.indexes[path] = { type: "AVL", node: new AVLTree(0, []), isArray };
          break;
        case "string":
        case "string[]":
          index.indexes[path] = { type: "Radix", node: new RadixTree(), isArray };
          index.avgFieldLength[path] = 0;
          index.frequencies[path] = {};
          index.tokenOccurrences[path] = {};
          index.fieldLengths[path] = {};
          break;
        case "enum":
        case "enum[]":
          index.indexes[path] = { type: "Flat", node: new FlatTree(), isArray };
          break;
        case "geopoint":
          index.indexes[path] = { type: "BKD", node: new BKDTree(), isArray };
          break;
        default:
          throw createError("INVALID_SCHEMA_TYPE", Array.isArray(type) ? "array" : type, path);
      }
      index.searchableProperties.push(path);
      index.searchablePropertiesWithTypes[path] = type;
    }
  }
  return index;
}
function insertScalarBuilder(implementation, index, prop, internalId, language, tokenizer, docsCount, options) {
  return (value) => {
    const { type, node } = index.indexes[prop];
    switch (type) {
      case "Bool": {
        node[value ? "true" : "false"].add(internalId);
        break;
      }
      case "AVL": {
        const avlRebalanceThreshold = options?.avlRebalanceThreshold ?? 1;
        node.insert(value, internalId, avlRebalanceThreshold);
        break;
      }
      case "Radix": {
        const tokens = tokenizer.tokenize(value, language, prop, false);
        implementation.insertDocumentScoreParameters(index, prop, internalId, tokens, docsCount);
        for (const token of tokens) {
          implementation.insertTokenScoreParameters(index, prop, internalId, tokens, token);
          node.insert(token, internalId);
        }
        break;
      }
      case "Flat": {
        node.insert(value, internalId);
        break;
      }
      case "BKD": {
        node.insert(value, [internalId]);
        break;
      }
    }
  };
}
function insert$2(implementation, index, prop, id, internalId, value, schemaType, language, tokenizer, docsCount, options) {
  if (isVectorType(schemaType)) {
    return insertVector(index, prop, value, id, internalId);
  }
  const insertScalar = insertScalarBuilder(implementation, index, prop, internalId, language, tokenizer, docsCount, options);
  if (!isArrayType(schemaType)) {
    return insertScalar(value);
  }
  const elements = value;
  const elementsLength = elements.length;
  for (let i = 0; i < elementsLength; i++) {
    insertScalar(elements[i]);
  }
}
function insertVector(index, prop, value, id, internalDocumentId) {
  index.vectorIndexes[prop].node.add(internalDocumentId, value);
}
function removeScalar(implementation, index, prop, id, internalId, value, schemaType, language, tokenizer, docsCount) {
  if (isVectorType(schemaType)) {
    index.vectorIndexes[prop].node.remove(internalId);
    return true;
  }
  const { type, node } = index.indexes[prop];
  switch (type) {
    case "AVL": {
      node.removeDocument(value, internalId);
      return true;
    }
    case "Bool": {
      node[value ? "true" : "false"].delete(internalId);
      return true;
    }
    case "Radix": {
      const tokens = tokenizer.tokenize(value, language, prop);
      implementation.removeDocumentScoreParameters(index, prop, id, docsCount);
      for (const token of tokens) {
        implementation.removeTokenScoreParameters(index, prop, token);
        node.removeDocumentByWord(token, internalId);
      }
      return true;
    }
    case "Flat": {
      node.removeDocument(internalId, value);
      return true;
    }
    case "BKD": {
      node.removeDocByID(value, internalId);
      return false;
    }
  }
}
function remove$1(implementation, index, prop, id, internalId, value, schemaType, language, tokenizer, docsCount) {
  if (!isArrayType(schemaType)) {
    return removeScalar(implementation, index, prop, id, internalId, value, schemaType, language, tokenizer, docsCount);
  }
  const innerSchemaType = getInnerType(schemaType);
  const elements = value;
  const elementsLength = elements.length;
  for (let i = 0; i < elementsLength; i++) {
    removeScalar(implementation, index, prop, id, internalId, elements[i], innerSchemaType, language, tokenizer, docsCount);
  }
  return true;
}
function calculateResultScores(index, prop, term, ids, docsCount, bm25Relevance, resultsMap, boostPerProperty, whereFiltersIDs, keywordMatchesMap) {
  const documentIDs = Array.from(ids);
  const avgFieldLength = index.avgFieldLength[prop];
  const fieldLengths = index.fieldLengths[prop];
  const oramaOccurrences = index.tokenOccurrences[prop];
  const oramaFrequencies = index.frequencies[prop];
  const termOccurrences = typeof oramaOccurrences[term] === "number" ? oramaOccurrences[term] ?? 0 : 0;
  const documentIDsLength = documentIDs.length;
  for (let k = 0; k < documentIDsLength; k++) {
    const internalId = documentIDs[k];
    if (whereFiltersIDs && !whereFiltersIDs.has(internalId)) {
      continue;
    }
    if (!keywordMatchesMap.has(internalId)) {
      keywordMatchesMap.set(internalId, /* @__PURE__ */ new Map());
    }
    const propertyMatches = keywordMatchesMap.get(internalId);
    propertyMatches.set(prop, (propertyMatches.get(prop) || 0) + 1);
    const tf = oramaFrequencies?.[internalId]?.[term] ?? 0;
    const bm25 = BM25(tf, termOccurrences, docsCount, fieldLengths[internalId], avgFieldLength, bm25Relevance);
    if (resultsMap.has(internalId)) {
      resultsMap.set(internalId, resultsMap.get(internalId) + bm25 * boostPerProperty);
    } else {
      resultsMap.set(internalId, bm25 * boostPerProperty);
    }
  }
}
function search$1(index, term, tokenizer, language, propertiesToSearch, exact, tolerance, boost, relevance, docsCount, whereFiltersIDs, threshold = 0) {
  const tokens = tokenizer.tokenize(term, language);
  const keywordsCount = tokens.length || 1;
  const keywordMatchesMap = /* @__PURE__ */ new Map();
  const tokenFoundMap = /* @__PURE__ */ new Map();
  const resultsMap = /* @__PURE__ */ new Map();
  for (const prop of propertiesToSearch) {
    if (!(prop in index.indexes)) {
      continue;
    }
    const tree = index.indexes[prop];
    const { type } = tree;
    if (type !== "Radix") {
      throw createError("WRONG_SEARCH_PROPERTY_TYPE", prop);
    }
    const boostPerProperty = boost[prop] ?? 1;
    if (boostPerProperty <= 0) {
      throw createError("INVALID_BOOST_VALUE", boostPerProperty);
    }
    if (tokens.length === 0 && !term) {
      tokens.push("");
    }
    const tokenLength = tokens.length;
    for (let i = 0; i < tokenLength; i++) {
      const token = tokens[i];
      const searchResult = tree.node.find({ term: token, exact, tolerance });
      const termsFound = Object.keys(searchResult);
      if (termsFound.length > 0) {
        tokenFoundMap.set(token, true);
      }
      const termsFoundLength = termsFound.length;
      for (let j = 0; j < termsFoundLength; j++) {
        const word = termsFound[j];
        const ids = searchResult[word];
        calculateResultScores(index, prop, word, ids, docsCount, relevance, resultsMap, boostPerProperty, whereFiltersIDs, keywordMatchesMap);
      }
    }
  }
  const results = Array.from(resultsMap.entries()).map(([id, score]) => [id, score]).sort((a, b) => b[1] - a[1]);
  if (results.length === 0) {
    return [];
  }
  if (threshold === 1) {
    return results;
  }
  if (threshold === 0) {
    if (keywordsCount === 1) {
      return results;
    }
    for (const token of tokens) {
      if (!tokenFoundMap.get(token)) {
        return [];
      }
    }
    const fullMatches2 = results.filter(([id]) => {
      const propertyMatches = keywordMatchesMap.get(id);
      if (!propertyMatches)
        return false;
      return Array.from(propertyMatches.values()).some((matches) => matches === keywordsCount);
    });
    return fullMatches2;
  }
  const fullMatches = results.filter(([id]) => {
    const propertyMatches = keywordMatchesMap.get(id);
    if (!propertyMatches)
      return false;
    return Array.from(propertyMatches.values()).some((matches) => matches === keywordsCount);
  });
  if (fullMatches.length > 0) {
    const remainingResults = results.filter(([id]) => !fullMatches.some(([fid]) => fid === id));
    const additionalResults = Math.ceil(remainingResults.length * threshold);
    return [...fullMatches, ...remainingResults.slice(0, additionalResults)];
  }
  return results;
}
function searchByWhereClause(index, tokenizer, filters, language) {
  if ("and" in filters && filters.and && Array.isArray(filters.and)) {
    const andFilters = filters.and;
    if (andFilters.length === 0) {
      return /* @__PURE__ */ new Set();
    }
    const results = andFilters.map((filter) => searchByWhereClause(index, tokenizer, filter, language));
    return setIntersection(...results);
  }
  if ("or" in filters && filters.or && Array.isArray(filters.or)) {
    const orFilters = filters.or;
    if (orFilters.length === 0) {
      return /* @__PURE__ */ new Set();
    }
    const results = orFilters.map((filter) => searchByWhereClause(index, tokenizer, filter, language));
    return results.reduce((acc, set) => setUnion(acc, set), /* @__PURE__ */ new Set());
  }
  if ("not" in filters && filters.not) {
    const notFilter = filters.not;
    const allDocs = /* @__PURE__ */ new Set();
    const docsStore = index.sharedInternalDocumentStore;
    for (let i = 1; i <= docsStore.internalIdToId.length; i++) {
      allDocs.add(i);
    }
    const notResult = searchByWhereClause(index, tokenizer, notFilter, language);
    return setDifference(allDocs, notResult);
  }
  const filterKeys = Object.keys(filters);
  const filtersMap = filterKeys.reduce((acc, key) => ({
    [key]: /* @__PURE__ */ new Set(),
    ...acc
  }), {});
  for (const param of filterKeys) {
    const operation = filters[param];
    if (typeof index.indexes[param] === "undefined") {
      throw createError("UNKNOWN_FILTER_PROPERTY", param);
    }
    const { node, type, isArray } = index.indexes[param];
    if (type === "Bool") {
      const idx = node;
      const filteredIDs = operation ? idx.true : idx.false;
      filtersMap[param] = setUnion(filtersMap[param], filteredIDs);
      continue;
    }
    if (type === "BKD") {
      let reqOperation;
      if ("radius" in operation) {
        reqOperation = "radius";
      } else if ("polygon" in operation) {
        reqOperation = "polygon";
      } else {
        throw new Error(`Invalid operation ${operation}`);
      }
      if (reqOperation === "radius") {
        const { value, coordinates, unit = "m", inside = true, highPrecision = false } = operation[reqOperation];
        const distanceInMeters = convertDistanceToMeters(value, unit);
        const ids = node.searchByRadius(coordinates, distanceInMeters, inside, void 0, highPrecision);
        filtersMap[param] = addGeoResult(filtersMap[param], ids);
      } else {
        const { coordinates, inside = true, highPrecision = false } = operation[reqOperation];
        const ids = node.searchByPolygon(coordinates, inside, void 0, highPrecision);
        filtersMap[param] = addGeoResult(filtersMap[param], ids);
      }
      continue;
    }
    if (type === "Radix" && (typeof operation === "string" || Array.isArray(operation))) {
      for (const raw of [operation].flat()) {
        const term = tokenizer.tokenize(raw, language, param);
        for (const t of term) {
          const filteredIDsResults = node.find({ term: t, exact: true });
          filtersMap[param] = addFindResult(filtersMap[param], filteredIDsResults);
        }
      }
      continue;
    }
    const operationKeys = Object.keys(operation);
    if (operationKeys.length > 1) {
      throw createError("INVALID_FILTER_OPERATION", operationKeys.length);
    }
    if (type === "Flat") {
      const results = new Set(isArray ? node.filterArr(operation) : node.filter(operation));
      filtersMap[param] = setUnion(filtersMap[param], results);
      continue;
    }
    if (type === "AVL") {
      const operationOpt = operationKeys[0];
      const operationValue = operation[operationOpt];
      let filteredIDs;
      switch (operationOpt) {
        case "gt": {
          filteredIDs = node.greaterThan(operationValue, false);
          break;
        }
        case "gte": {
          filteredIDs = node.greaterThan(operationValue, true);
          break;
        }
        case "lt": {
          filteredIDs = node.lessThan(operationValue, false);
          break;
        }
        case "lte": {
          filteredIDs = node.lessThan(operationValue, true);
          break;
        }
        case "eq": {
          const ret = node.find(operationValue);
          filteredIDs = ret ?? /* @__PURE__ */ new Set();
          break;
        }
        case "between": {
          const [min, max] = operationValue;
          filteredIDs = node.rangeSearch(min, max);
          break;
        }
        default:
          throw createError("INVALID_FILTER_OPERATION", operationOpt);
      }
      filtersMap[param] = setUnion(filtersMap[param], filteredIDs);
    }
  }
  return setIntersection(...Object.values(filtersMap));
}
function getSearchableProperties(index) {
  return index.searchableProperties;
}
function getSearchablePropertiesWithTypes(index) {
  return index.searchablePropertiesWithTypes;
}
function load$3(sharedInternalDocumentStore, raw) {
  const { indexes: rawIndexes, vectorIndexes: rawVectorIndexes, searchableProperties, searchablePropertiesWithTypes, frequencies, tokenOccurrences, avgFieldLength, fieldLengths } = raw;
  const indexes = {};
  const vectorIndexes = {};
  for (const prop of Object.keys(rawIndexes)) {
    const { node, type, isArray } = rawIndexes[prop];
    switch (type) {
      case "Radix":
        indexes[prop] = {
          type: "Radix",
          node: RadixTree.fromJSON(node),
          isArray
        };
        break;
      case "Flat":
        indexes[prop] = {
          type: "Flat",
          node: FlatTree.fromJSON(node),
          isArray
        };
        break;
      case "AVL":
        indexes[prop] = {
          type: "AVL",
          node: AVLTree.fromJSON(node),
          isArray
        };
        break;
      case "BKD":
        indexes[prop] = {
          type: "BKD",
          node: BKDTree.fromJSON(node),
          isArray
        };
        break;
      case "Bool":
        indexes[prop] = {
          type: "Bool",
          node: BoolNode.fromJSON(node),
          isArray
        };
        break;
      default:
        indexes[prop] = rawIndexes[prop];
    }
  }
  for (const idx of Object.keys(rawVectorIndexes)) {
    vectorIndexes[idx] = {
      type: "Vector",
      isArray: false,
      node: VectorIndex.fromJSON(rawVectorIndexes[idx])
    };
  }
  return {
    sharedInternalDocumentStore,
    indexes,
    vectorIndexes,
    searchableProperties,
    searchablePropertiesWithTypes,
    frequencies,
    tokenOccurrences,
    avgFieldLength,
    fieldLengths
  };
}
function save$3(index) {
  const { indexes, vectorIndexes, searchableProperties, searchablePropertiesWithTypes, frequencies, tokenOccurrences, avgFieldLength, fieldLengths } = index;
  const dumpVectorIndexes = {};
  for (const idx of Object.keys(vectorIndexes)) {
    dumpVectorIndexes[idx] = vectorIndexes[idx].node.toJSON();
  }
  const savedIndexes = {};
  for (const name of Object.keys(indexes)) {
    const { type, node, isArray } = indexes[name];
    if (type === "Flat" || type === "Radix" || type === "AVL" || type === "BKD" || type === "Bool") {
      savedIndexes[name] = {
        type,
        node: node.toJSON(),
        isArray
      };
    } else {
      savedIndexes[name] = indexes[name];
      savedIndexes[name].node = savedIndexes[name].node.toJSON();
    }
  }
  return {
    indexes: savedIndexes,
    vectorIndexes: dumpVectorIndexes,
    searchableProperties,
    searchablePropertiesWithTypes,
    frequencies,
    tokenOccurrences,
    avgFieldLength,
    fieldLengths
  };
}
function createIndex() {
  return {
    create: create$3,
    insert: insert$2,
    remove: remove$1,
    insertDocumentScoreParameters,
    insertTokenScoreParameters,
    removeDocumentScoreParameters,
    removeTokenScoreParameters,
    calculateResultScores,
    search: search$1,
    searchByWhereClause,
    getSearchableProperties,
    getSearchablePropertiesWithTypes,
    load: load$3,
    save: save$3
  };
}
function addGeoResult(set, ids) {
  if (!set) {
    set = /* @__PURE__ */ new Set();
  }
  const idsLength = ids.length;
  for (let i = 0; i < idsLength; i++) {
    const entry = ids[i].docIDs;
    const idsLength2 = entry.length;
    for (let j = 0; j < idsLength2; j++) {
      set.add(entry[j]);
    }
  }
  return set;
}
function createGeoTokenScores(ids, centerPoint, highPrecision = false) {
  const distanceFn = highPrecision ? BKDTree.vincentyDistance : BKDTree.haversineDistance;
  const results = [];
  const distances = [];
  for (const { point } of ids) {
    distances.push(distanceFn(centerPoint, point));
  }
  const maxDistance = Math.max(...distances);
  let index = 0;
  for (const { docIDs } of ids) {
    const distance = distances[index];
    const score = maxDistance - distance + 1;
    for (const docID of docIDs) {
      results.push([docID, score]);
    }
    index++;
  }
  results.sort((a, b) => b[1] - a[1]);
  return results;
}
function isGeosearchOnlyQuery(filters, index) {
  const filterKeys = Object.keys(filters);
  if (filterKeys.length !== 1) {
    return { isGeoOnly: false };
  }
  const param = filterKeys[0];
  const operation = filters[param];
  if (typeof index.indexes[param] === "undefined") {
    return { isGeoOnly: false };
  }
  const { type } = index.indexes[param];
  if (type === "BKD" && operation && ("radius" in operation || "polygon" in operation)) {
    return { isGeoOnly: true, geoProperty: param, geoOperation: operation };
  }
  return { isGeoOnly: false };
}
function searchByGeoWhereClause(index, filters) {
  const indexTyped = index;
  const geoInfo = isGeosearchOnlyQuery(filters, indexTyped);
  if (!geoInfo.isGeoOnly || !geoInfo.geoProperty || !geoInfo.geoOperation) {
    return null;
  }
  const { node } = indexTyped.indexes[geoInfo.geoProperty];
  const operation = geoInfo.geoOperation;
  const bkdNode = node;
  let results;
  if ("radius" in operation) {
    const { value, coordinates, unit = "m", inside = true, highPrecision = false } = operation.radius;
    const centerPoint = coordinates;
    const distanceInMeters = convertDistanceToMeters(value, unit);
    results = bkdNode.searchByRadius(centerPoint, distanceInMeters, inside, "asc", highPrecision);
    return createGeoTokenScores(results, centerPoint, highPrecision);
  } else if ("polygon" in operation) {
    const { coordinates, inside = true, highPrecision = false } = operation.polygon;
    results = bkdNode.searchByPolygon(coordinates, inside, "asc", highPrecision);
    const centroid = BKDTree.calculatePolygonCentroid(coordinates);
    return createGeoTokenScores(results, centroid, highPrecision);
  }
  return null;
}
function addFindResult(set, filteredIDsResults) {
  if (!set) {
    set = /* @__PURE__ */ new Set();
  }
  const keys = Object.keys(filteredIDsResults);
  const keysLength = keys.length;
  for (let i = 0; i < keysLength; i++) {
    const ids = filteredIDsResults[keys[i]];
    const idsLength = ids.length;
    for (let j = 0; j < idsLength; j++) {
      set.add(ids[j]);
    }
  }
  return set;
}
function innerCreate(orama, sharedInternalDocumentStore, schema, sortableDeniedProperties, prefix) {
  const sorter = {
    language: orama.tokenizer.language,
    sharedInternalDocumentStore,
    enabled: true,
    isSorted: true,
    sortableProperties: [],
    sortablePropertiesWithTypes: {},
    sorts: {}
  };
  for (const [prop, type] of Object.entries(schema)) {
    const path = `${prefix}${prefix ? "." : ""}${prop}`;
    if (sortableDeniedProperties.includes(path)) {
      continue;
    }
    if (typeof type === "object" && !Array.isArray(type)) {
      const ret = innerCreate(orama, sharedInternalDocumentStore, type, sortableDeniedProperties, path);
      safeArrayPush(sorter.sortableProperties, ret.sortableProperties);
      sorter.sorts = {
        ...sorter.sorts,
        ...ret.sorts
      };
      sorter.sortablePropertiesWithTypes = {
        ...sorter.sortablePropertiesWithTypes,
        ...ret.sortablePropertiesWithTypes
      };
      continue;
    }
    if (!isVectorType(type)) {
      switch (type) {
        case "boolean":
        case "number":
        case "string":
          sorter.sortableProperties.push(path);
          sorter.sortablePropertiesWithTypes[path] = type;
          sorter.sorts[path] = {
            docs: /* @__PURE__ */ new Map(),
            orderedDocsToRemove: /* @__PURE__ */ new Map(),
            orderedDocs: [],
            type
          };
          break;
        case "geopoint":
        case "enum":
          continue;
        case "enum[]":
        case "boolean[]":
        case "number[]":
        case "string[]":
          continue;
        default:
          throw createError("INVALID_SORT_SCHEMA_TYPE", Array.isArray(type) ? "array" : type, path);
      }
    }
  }
  return sorter;
}
function create$2(orama, sharedInternalDocumentStore, schema, config) {
  const isSortEnabled = config?.enabled !== false;
  if (!isSortEnabled) {
    return {
      disabled: true
    };
  }
  return innerCreate(orama, sharedInternalDocumentStore, schema, (config || {}).unsortableProperties || [], "");
}
function insert$1(sorter, prop, id, value) {
  if (!sorter.enabled) {
    return;
  }
  sorter.isSorted = false;
  const internalId = getInternalDocumentId(sorter.sharedInternalDocumentStore, id);
  const s = sorter.sorts[prop];
  if (s.orderedDocsToRemove.has(internalId)) {
    ensureOrderedDocsAreDeletedByProperty(sorter, prop);
  }
  s.docs.set(internalId, s.orderedDocs.length);
  s.orderedDocs.push([internalId, value]);
}
function ensureIsSorted(sorter) {
  if (sorter.isSorted || !sorter.enabled) {
    return;
  }
  const properties = Object.keys(sorter.sorts);
  for (const prop of properties) {
    ensurePropertyIsSorted(sorter, prop);
  }
  sorter.isSorted = true;
}
function stringSort(language, value, d) {
  return value[1].localeCompare(d[1], getLocale(language));
}
function numberSort(value, d) {
  return value[1] - d[1];
}
function booleanSort(value, d) {
  return d[1] ? -1 : 1;
}
function ensurePropertyIsSorted(sorter, prop) {
  const s = sorter.sorts[prop];
  let predicate;
  switch (s.type) {
    case "string":
      predicate = stringSort.bind(null, sorter.language);
      break;
    case "number":
      predicate = numberSort.bind(null);
      break;
    case "boolean":
      predicate = booleanSort.bind(null);
      break;
  }
  s.orderedDocs.sort(predicate);
  const orderedDocsLength = s.orderedDocs.length;
  for (let i = 0; i < orderedDocsLength; i++) {
    const docId = s.orderedDocs[i][0];
    s.docs.set(docId, i);
  }
}
function ensureOrderedDocsAreDeleted(sorter) {
  const properties = Object.keys(sorter.sorts);
  for (const prop of properties) {
    ensureOrderedDocsAreDeletedByProperty(sorter, prop);
  }
}
function ensureOrderedDocsAreDeletedByProperty(sorter, prop) {
  const s = sorter.sorts[prop];
  if (!s.orderedDocsToRemove.size)
    return;
  s.orderedDocs = s.orderedDocs.filter((doc) => !s.orderedDocsToRemove.has(doc[0]));
  s.orderedDocsToRemove.clear();
}
function remove(sorter, prop, id) {
  if (!sorter.enabled) {
    return;
  }
  const s = sorter.sorts[prop];
  const internalId = getInternalDocumentId(sorter.sharedInternalDocumentStore, id);
  const index = s.docs.get(internalId);
  if (!index)
    return;
  s.docs.delete(internalId);
  s.orderedDocsToRemove.set(internalId, true);
}
function sortBy(sorter, docIds, by) {
  if (!sorter.enabled) {
    throw createError("SORT_DISABLED");
  }
  const property = by.property;
  const isDesc = by.order === "DESC";
  const s = sorter.sorts[property];
  if (!s) {
    throw createError("UNABLE_TO_SORT_ON_UNKNOWN_FIELD", property, sorter.sortableProperties.join(", "));
  }
  ensureOrderedDocsAreDeletedByProperty(sorter, property);
  ensureIsSorted(sorter);
  docIds.sort((a, b) => {
    const indexOfA = s.docs.get(getInternalDocumentId(sorter.sharedInternalDocumentStore, a[0]));
    const indexOfB = s.docs.get(getInternalDocumentId(sorter.sharedInternalDocumentStore, b[0]));
    const isAIndexed = typeof indexOfA !== "undefined";
    const isBIndexed = typeof indexOfB !== "undefined";
    if (!isAIndexed && !isBIndexed) {
      return 0;
    }
    if (!isAIndexed) {
      return 1;
    }
    if (!isBIndexed) {
      return -1;
    }
    return isDesc ? indexOfB - indexOfA : indexOfA - indexOfB;
  });
  return docIds;
}
function getSortableProperties(sorter) {
  if (!sorter.enabled) {
    return [];
  }
  return sorter.sortableProperties;
}
function getSortablePropertiesWithTypes(sorter) {
  if (!sorter.enabled) {
    return {};
  }
  return sorter.sortablePropertiesWithTypes;
}
function load$2(sharedInternalDocumentStore, raw) {
  const rawDocument = raw;
  if (!rawDocument.enabled) {
    return {
      enabled: false
    };
  }
  const sorts = Object.keys(rawDocument.sorts).reduce((acc, prop) => {
    const { docs, orderedDocs, type } = rawDocument.sorts[prop];
    acc[prop] = {
      docs: new Map(Object.entries(docs).map(([k, v2]) => [+k, v2])),
      orderedDocsToRemove: /* @__PURE__ */ new Map(),
      orderedDocs,
      type
    };
    return acc;
  }, {});
  return {
    sharedInternalDocumentStore,
    language: rawDocument.language,
    sortableProperties: rawDocument.sortableProperties,
    sortablePropertiesWithTypes: rawDocument.sortablePropertiesWithTypes,
    sorts,
    enabled: true,
    isSorted: rawDocument.isSorted
  };
}
function save$2(sorter) {
  if (!sorter.enabled) {
    return {
      enabled: false
    };
  }
  ensureOrderedDocsAreDeleted(sorter);
  ensureIsSorted(sorter);
  const sorts = Object.keys(sorter.sorts).reduce((acc, prop) => {
    const { docs, orderedDocs, type } = sorter.sorts[prop];
    acc[prop] = {
      docs: Object.fromEntries(docs.entries()),
      orderedDocs,
      type
    };
    return acc;
  }, {});
  return {
    language: sorter.language,
    sortableProperties: sorter.sortableProperties,
    sortablePropertiesWithTypes: sorter.sortablePropertiesWithTypes,
    sorts,
    enabled: sorter.enabled,
    isSorted: sorter.isSorted
  };
}
function createSorter() {
  return {
    create: create$2,
    insert: insert$1,
    remove,
    save: save$2,
    load: load$2,
    sortBy,
    getSortableProperties,
    getSortablePropertiesWithTypes
  };
}
const DIACRITICS_CHARCODE_START = 192;
const DIACRITICS_CHARCODE_END = 383;
const CHARCODE_REPLACE_MAPPING = [
  65,
  65,
  65,
  65,
  65,
  65,
  65,
  67,
  69,
  69,
  69,
  69,
  73,
  73,
  73,
  73,
  69,
  78,
  79,
  79,
  79,
  79,
  79,
  null,
  79,
  85,
  85,
  85,
  85,
  89,
  80,
  115,
  97,
  97,
  97,
  97,
  97,
  97,
  97,
  99,
  101,
  101,
  101,
  101,
  105,
  105,
  105,
  105,
  101,
  110,
  111,
  111,
  111,
  111,
  111,
  null,
  111,
  117,
  117,
  117,
  117,
  121,
  112,
  121,
  65,
  97,
  65,
  97,
  65,
  97,
  67,
  99,
  67,
  99,
  67,
  99,
  67,
  99,
  68,
  100,
  68,
  100,
  69,
  101,
  69,
  101,
  69,
  101,
  69,
  101,
  69,
  101,
  71,
  103,
  71,
  103,
  71,
  103,
  71,
  103,
  72,
  104,
  72,
  104,
  73,
  105,
  73,
  105,
  73,
  105,
  73,
  105,
  73,
  105,
  73,
  105,
  74,
  106,
  75,
  107,
  107,
  76,
  108,
  76,
  108,
  76,
  108,
  76,
  108,
  76,
  108,
  78,
  110,
  78,
  110,
  78,
  110,
  110,
  78,
  110,
  79,
  111,
  79,
  111,
  79,
  111,
  79,
  111,
  82,
  114,
  82,
  114,
  82,
  114,
  83,
  115,
  83,
  115,
  83,
  115,
  83,
  115,
  84,
  116,
  84,
  116,
  84,
  116,
  85,
  117,
  85,
  117,
  85,
  117,
  85,
  117,
  85,
  117,
  85,
  117,
  87,
  119,
  89,
  121,
  89,
  90,
  122,
  90,
  122,
  90,
  122,
  115
];
function replaceChar(charCode) {
  if (charCode < DIACRITICS_CHARCODE_START || charCode > DIACRITICS_CHARCODE_END)
    return charCode;
  return CHARCODE_REPLACE_MAPPING[charCode - DIACRITICS_CHARCODE_START] || charCode;
}
function replaceDiacritics(str) {
  const stringCharCode = [];
  for (let idx = 0; idx < str.length; idx++) {
    stringCharCode[idx] = replaceChar(str.charCodeAt(idx));
  }
  return String.fromCharCode(...stringCharCode);
}
const step2List = {
  ational: "ate",
  tional: "tion",
  enci: "ence",
  anci: "ance",
  izer: "ize",
  bli: "ble",
  alli: "al",
  entli: "ent",
  eli: "e",
  ousli: "ous",
  ization: "ize",
  ation: "ate",
  ator: "ate",
  alism: "al",
  iveness: "ive",
  fulness: "ful",
  ousness: "ous",
  aliti: "al",
  iviti: "ive",
  biliti: "ble",
  logi: "log"
};
const step3List = {
  icate: "ic",
  ative: "",
  alize: "al",
  iciti: "ic",
  ical: "ic",
  ful: "",
  ness: ""
};
const c = "[^aeiou]";
const v = "[aeiouy]";
const C = c + "[^aeiouy]*";
const V = v + "[aeiou]*";
const mgr0 = "^(" + C + ")?" + V + C;
const meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$";
const mgr1 = "^(" + C + ")?" + V + C + V + C;
const s_v = "^(" + C + ")?" + v;
function stemmer(w) {
  let stem;
  let suffix;
  let re;
  let re2;
  let re3;
  let re4;
  if (w.length < 3) {
    return w;
  }
  const firstch = w.substring(0, 1);
  if (firstch == "y") {
    w = firstch.toUpperCase() + w.substring(1);
  }
  re = /^(.+?)(ss|i)es$/;
  re2 = /^(.+?)([^s])s$/;
  if (re.test(w)) {
    w = w.replace(re, "$1$2");
  } else if (re2.test(w)) {
    w = w.replace(re2, "$1$2");
  }
  re = /^(.+?)eed$/;
  re2 = /^(.+?)(ed|ing)$/;
  if (re.test(w)) {
    const fp = re.exec(w);
    re = new RegExp(mgr0);
    if (re.test(fp[1])) {
      re = /.$/;
      w = w.replace(re, "");
    }
  } else if (re2.test(w)) {
    const fp = re2.exec(w);
    stem = fp[1];
    re2 = new RegExp(s_v);
    if (re2.test(stem)) {
      w = stem;
      re2 = /(at|bl|iz)$/;
      re3 = new RegExp("([^aeiouylsz])\\1$");
      re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
      if (re2.test(w)) {
        w = w + "e";
      } else if (re3.test(w)) {
        re = /.$/;
        w = w.replace(re, "");
      } else if (re4.test(w)) {
        w = w + "e";
      }
    }
  }
  re = /^(.+?)y$/;
  if (re.test(w)) {
    const fp = re.exec(w);
    stem = fp?.[1];
    re = new RegExp(s_v);
    if (stem && re.test(stem)) {
      w = stem + "i";
    }
  }
  re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
  if (re.test(w)) {
    const fp = re.exec(w);
    stem = fp?.[1];
    suffix = fp?.[2];
    re = new RegExp(mgr0);
    if (stem && re.test(stem)) {
      w = stem + step2List[suffix];
    }
  }
  re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
  if (re.test(w)) {
    const fp = re.exec(w);
    stem = fp?.[1];
    suffix = fp?.[2];
    re = new RegExp(mgr0);
    if (stem && re.test(stem)) {
      w = stem + step3List[suffix];
    }
  }
  re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  re2 = /^(.+?)(s|t)(ion)$/;
  if (re.test(w)) {
    const fp = re.exec(w);
    stem = fp?.[1];
    re = new RegExp(mgr1);
    if (stem && re.test(stem)) {
      w = stem;
    }
  } else if (re2.test(w)) {
    const fp = re2.exec(w);
    stem = fp?.[1] ?? "" + fp?.[2] ?? "";
    re2 = new RegExp(mgr1);
    if (re2.test(stem)) {
      w = stem;
    }
  }
  re = /^(.+?)e$/;
  if (re.test(w)) {
    const fp = re.exec(w);
    stem = fp?.[1];
    re = new RegExp(mgr1);
    re2 = new RegExp(meq1);
    re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
    if (stem && (re.test(stem) || re2.test(stem) && !re3.test(stem))) {
      w = stem;
    }
  }
  re = /ll$/;
  re2 = new RegExp(mgr1);
  if (re.test(w) && re2.test(w)) {
    re = /.$/;
    w = w.replace(re, "");
  }
  if (firstch == "y") {
    w = firstch.toLowerCase() + w.substring(1);
  }
  return w;
}
function normalizeToken(prop, token, withCache = true) {
  const key = `${this.language}:${prop}:${token}`;
  if (withCache && this.normalizationCache.has(key)) {
    return this.normalizationCache.get(key);
  }
  if (this.stopWords?.includes(token)) {
    if (withCache) {
      this.normalizationCache.set(key, "");
    }
    return "";
  }
  if (this.stemmer && !this.stemmerSkipProperties.has(prop)) {
    token = this.stemmer(token);
  }
  token = replaceDiacritics(token);
  if (withCache) {
    this.normalizationCache.set(key, token);
  }
  return token;
}
function trim(text) {
  while (text[text.length - 1] === "") {
    text.pop();
  }
  while (text[0] === "") {
    text.shift();
  }
  return text;
}
function tokenize(input, language, prop, withCache = true) {
  if (language && language !== this.language) {
    throw createError("LANGUAGE_NOT_SUPPORTED", language);
  }
  if (typeof input !== "string") {
    return [input];
  }
  const normalizeToken2 = this.normalizeToken.bind(this, prop ?? "");
  let tokens;
  if (prop && this.tokenizeSkipProperties.has(prop)) {
    tokens = [normalizeToken2(input, withCache)];
  } else {
    const splitRule = SPLITTERS[this.language];
    tokens = input.toLowerCase().split(splitRule).map((t) => normalizeToken2(t, withCache)).filter(Boolean);
  }
  const trimTokens = trim(tokens);
  if (!this.allowDuplicates) {
    return Array.from(new Set(trimTokens));
  }
  return trimTokens;
}
function createTokenizer(config = {}) {
  if (!config.language) {
    config.language = "english";
  } else if (!SUPPORTED_LANGUAGES.includes(config.language)) {
    throw createError("LANGUAGE_NOT_SUPPORTED", config.language);
  }
  let stemmer$1;
  if (config.stemming || config.stemmer && !("stemming" in config)) {
    if (config.stemmer) {
      if (typeof config.stemmer !== "function") {
        throw createError("INVALID_STEMMER_FUNCTION_TYPE");
      }
      stemmer$1 = config.stemmer;
    } else {
      if (config.language === "english") {
        stemmer$1 = stemmer;
      } else {
        throw createError("MISSING_STEMMER", config.language);
      }
    }
  }
  let stopWords;
  if (config.stopWords !== false) {
    stopWords = [];
    if (Array.isArray(config.stopWords)) {
      stopWords = config.stopWords;
    } else if (typeof config.stopWords === "function") {
      stopWords = config.stopWords(stopWords);
    } else if (config.stopWords) {
      throw createError("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
    }
    if (!Array.isArray(stopWords)) {
      throw createError("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
    }
    for (const s of stopWords) {
      if (typeof s !== "string") {
        throw createError("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
      }
    }
  }
  const tokenizer = {
    tokenize,
    language: config.language,
    stemmer: stemmer$1,
    stemmerSkipProperties: new Set(config.stemmerSkipProperties ? [config.stemmerSkipProperties].flat() : []),
    tokenizeSkipProperties: new Set(config.tokenizeSkipProperties ? [config.tokenizeSkipProperties].flat() : []),
    stopWords,
    allowDuplicates: Boolean(config.allowDuplicates),
    normalizeToken,
    normalizationCache: /* @__PURE__ */ new Map()
  };
  tokenizer.tokenize = tokenize.bind(tokenizer);
  tokenizer.normalizeToken = normalizeToken;
  return tokenizer;
}
function create$1(sharedInternalDocumentStore) {
  return {
    sharedInternalDocumentStore,
    rules: /* @__PURE__ */ new Map()
  };
}
function addRule(store2, rule) {
  if (store2.rules.has(rule.id)) {
    throw new Error(`PINNING_RULE_ALREADY_EXISTS: A pinning rule with id "${rule.id}" already exists. Use updateRule to modify it.`);
  }
  store2.rules.set(rule.id, rule);
}
function updateRule(store2, rule) {
  if (!store2.rules.has(rule.id)) {
    throw new Error(`PINNING_RULE_NOT_FOUND: Cannot update pinning rule with id "${rule.id}" because it does not exist. Use addRule to create it.`);
  }
  store2.rules.set(rule.id, rule);
}
function removeRule(store2, ruleId) {
  return store2.rules.delete(ruleId);
}
function getRule(store2, ruleId) {
  return store2.rules.get(ruleId);
}
function getAllRules(store2) {
  return Array.from(store2.rules.values());
}
function matchesCondition(term, condition) {
  const normalizedTerm = term.toLowerCase().trim();
  const normalizedPattern = condition.pattern.toLowerCase().trim();
  switch (condition.anchoring) {
    case "is":
      return normalizedTerm === normalizedPattern;
    case "starts_with":
      return normalizedTerm.startsWith(normalizedPattern);
    case "contains":
      return normalizedTerm.includes(normalizedPattern);
    default:
      return false;
  }
}
function matchesRule(term, rule) {
  if (!term) {
    return false;
  }
  return rule.conditions.every((condition) => matchesCondition(term, condition));
}
function getMatchingRules(store2, term) {
  if (!term) {
    return [];
  }
  const matchingRules = [];
  for (const rule of store2.rules.values()) {
    if (matchesRule(term, rule)) {
      matchingRules.push(rule);
    }
  }
  return matchingRules;
}
function load$1(sharedInternalDocumentStore, raw) {
  const rawStore = raw;
  return {
    sharedInternalDocumentStore,
    rules: new Map(rawStore?.rules ?? [])
  };
}
function save$1(store2) {
  return {
    rules: Array.from(store2.rules.entries())
  };
}
function createPinning() {
  return {
    create: create$1,
    addRule,
    updateRule,
    removeRule,
    getRule,
    getAllRules,
    getMatchingRules,
    load: load$1,
    save: save$1
  };
}
function validateComponents(components) {
  const defaultComponents = {
    formatElapsedTime,
    getDocumentIndexId,
    getDocumentProperties,
    validateSchema
  };
  for (const rawKey of FUNCTION_COMPONENTS) {
    const key = rawKey;
    if (components[key]) {
      if (typeof components[key] !== "function") {
        throw createError("COMPONENT_MUST_BE_FUNCTION", key);
      }
    } else {
      components[key] = defaultComponents[key];
    }
  }
  for (const rawKey of Object.keys(components)) {
    if (!OBJECT_COMPONENTS.includes(rawKey) && !FUNCTION_COMPONENTS.includes(rawKey)) {
      throw createError("UNSUPPORTED_COMPONENT", rawKey);
    }
  }
}
function create({ schema, sort, language, components, id, plugins }) {
  if (!components) {
    components = {};
  }
  for (const plugin of plugins ?? []) {
    if (!("getComponents" in plugin)) {
      continue;
    }
    if (typeof plugin.getComponents !== "function") {
      continue;
    }
    const pluginComponents = plugin.getComponents(schema);
    const keys = Object.keys(pluginComponents);
    for (const key of keys) {
      if (components[key]) {
        throw createError("PLUGIN_COMPONENT_CONFLICT", key, plugin.name);
      }
    }
    components = {
      ...components,
      ...pluginComponents
    };
  }
  if (!id) {
    id = uniqueId();
  }
  let tokenizer = components.tokenizer;
  let index = components.index;
  let documentsStore = components.documentsStore;
  let sorter = components.sorter;
  let pinning = components.pinning;
  if (!tokenizer) {
    tokenizer = createTokenizer({ language: language ?? "english" });
  } else if (!tokenizer.tokenize) {
    tokenizer = createTokenizer(tokenizer);
  } else {
    const customTokenizer = tokenizer;
    tokenizer = customTokenizer;
  }
  if (components.tokenizer && language) {
    throw createError("NO_LANGUAGE_WITH_CUSTOM_TOKENIZER");
  }
  const internalDocumentStore = createInternalDocumentIDStore();
  index ||= createIndex();
  sorter ||= createSorter();
  documentsStore ||= createDocumentsStore();
  pinning ||= createPinning();
  validateComponents(components);
  const { getDocumentProperties: getDocumentProperties2, getDocumentIndexId: getDocumentIndexId2, validateSchema: validateSchema2, formatElapsedTime: formatElapsedTime2 } = components;
  const orama = {
    data: {},
    caches: {},
    schema,
    tokenizer,
    index,
    sorter,
    documentsStore,
    pinning,
    internalDocumentIDStore: internalDocumentStore,
    getDocumentProperties: getDocumentProperties2,
    getDocumentIndexId: getDocumentIndexId2,
    validateSchema: validateSchema2,
    beforeInsert: [],
    afterInsert: [],
    beforeRemove: [],
    afterRemove: [],
    beforeUpdate: [],
    afterUpdate: [],
    beforeUpsert: [],
    afterUpsert: [],
    beforeSearch: [],
    afterSearch: [],
    beforeInsertMultiple: [],
    afterInsertMultiple: [],
    beforeRemoveMultiple: [],
    afterRemoveMultiple: [],
    beforeUpdateMultiple: [],
    afterUpdateMultiple: [],
    beforeUpsertMultiple: [],
    afterUpsertMultiple: [],
    afterCreate: [],
    formatElapsedTime: formatElapsedTime2,
    id,
    plugins,
    version: getVersion()
  };
  orama.data = {
    index: orama.index.create(orama, internalDocumentStore, schema),
    docs: orama.documentsStore.create(orama, internalDocumentStore),
    sorting: orama.sorter.create(orama, internalDocumentStore, schema, sort),
    pinning: orama.pinning.create(internalDocumentStore)
  };
  for (const hook of AVAILABLE_PLUGIN_HOOKS) {
    orama[hook] = (orama[hook] ?? []).concat(getAllPluginsByHook(orama, hook));
  }
  const afterCreate = orama["afterCreate"];
  if (afterCreate) {
    runAfterCreate(afterCreate, orama);
  }
  return orama;
}
function getVersion() {
  return "{{VERSION}}";
}
function getByID(db, id) {
  return db.documentsStore.get(db.data.docs, id);
}
function count(db) {
  return db.documentsStore.count(db.data.docs);
}
function insert(orama, doc, language, skipHooks, options) {
  const errorProperty = orama.validateSchema(doc, orama.schema);
  if (errorProperty) {
    throw createError("SCHEMA_VALIDATION_FAILURE", errorProperty);
  }
  const asyncNeeded = isAsyncFunction(orama.beforeInsert) || isAsyncFunction(orama.afterInsert) || isAsyncFunction(orama.index.beforeInsert) || isAsyncFunction(orama.index.insert) || isAsyncFunction(orama.index.afterInsert);
  if (asyncNeeded) {
    return innerInsertAsync(orama, doc, language, skipHooks, options);
  }
  return innerInsertSync(orama, doc, language, skipHooks, options);
}
const ENUM_TYPE = /* @__PURE__ */ new Set(["enum", "enum[]"]);
const STRING_NUMBER_TYPE = /* @__PURE__ */ new Set(["string", "number"]);
async function innerInsertAsync(orama, doc, language, skipHooks, options) {
  const { index, docs } = orama.data;
  const id = orama.getDocumentIndexId(doc);
  if (typeof id !== "string") {
    throw createError("DOCUMENT_ID_MUST_BE_STRING", typeof id);
  }
  const internalId = getInternalDocumentId(orama.internalDocumentIDStore, id);
  {
    await runSingleHook(orama.beforeInsert, orama, id, doc);
  }
  if (!orama.documentsStore.store(docs, id, internalId, doc)) {
    throw createError("DOCUMENT_ALREADY_EXISTS", id);
  }
  const docsCount = orama.documentsStore.count(docs);
  const indexableProperties = orama.index.getSearchableProperties(index);
  const indexablePropertiesWithTypes = orama.index.getSearchablePropertiesWithTypes(index);
  const indexableValues = orama.getDocumentProperties(doc, indexableProperties);
  for (const [key, value] of Object.entries(indexableValues)) {
    if (typeof value === "undefined")
      continue;
    const actualType = typeof value;
    const expectedType = indexablePropertiesWithTypes[key];
    validateDocumentProperty(actualType, expectedType, key, value);
  }
  await indexAndSortDocument(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options);
  {
    await runSingleHook(orama.afterInsert, orama, id, doc);
  }
  return id;
}
function innerInsertSync(orama, doc, language, skipHooks, options) {
  const { index, docs } = orama.data;
  const id = orama.getDocumentIndexId(doc);
  if (typeof id !== "string") {
    throw createError("DOCUMENT_ID_MUST_BE_STRING", typeof id);
  }
  const internalId = getInternalDocumentId(orama.internalDocumentIDStore, id);
  {
    runSingleHook(orama.beforeInsert, orama, id, doc);
  }
  if (!orama.documentsStore.store(docs, id, internalId, doc)) {
    throw createError("DOCUMENT_ALREADY_EXISTS", id);
  }
  const docsCount = orama.documentsStore.count(docs);
  const indexableProperties = orama.index.getSearchableProperties(index);
  const indexablePropertiesWithTypes = orama.index.getSearchablePropertiesWithTypes(index);
  const indexableValues = orama.getDocumentProperties(doc, indexableProperties);
  for (const [key, value] of Object.entries(indexableValues)) {
    if (typeof value === "undefined")
      continue;
    const actualType = typeof value;
    const expectedType = indexablePropertiesWithTypes[key];
    validateDocumentProperty(actualType, expectedType, key, value);
  }
  indexAndSortDocumentSync(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options);
  {
    runSingleHook(orama.afterInsert, orama, id, doc);
  }
  return id;
}
function validateDocumentProperty(actualType, expectedType, key, value) {
  if (isGeoPointType(expectedType) && typeof value === "object" && typeof value.lon === "number" && typeof value.lat === "number") {
    return;
  }
  if (isVectorType(expectedType) && Array.isArray(value))
    return;
  if (isArrayType(expectedType) && Array.isArray(value))
    return;
  if (ENUM_TYPE.has(expectedType) && STRING_NUMBER_TYPE.has(actualType))
    return;
  if (actualType !== expectedType) {
    throw createError("INVALID_DOCUMENT_PROPERTY", key, expectedType, actualType);
  }
}
async function indexAndSortDocument(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options) {
  for (const prop of indexableProperties) {
    const value = indexableValues[prop];
    if (typeof value === "undefined")
      continue;
    const expectedType = orama.index.getSearchablePropertiesWithTypes(orama.data.index)[prop];
    await orama.index.beforeInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
    const internalId = orama.internalDocumentIDStore.idToInternalId.get(id);
    await orama.index.insert(orama.index, orama.data.index, prop, id, internalId, value, expectedType, language, orama.tokenizer, docsCount, options);
    await orama.index.afterInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
  }
  const sortableProperties = orama.sorter.getSortableProperties(orama.data.sorting);
  const sortableValues = orama.getDocumentProperties(doc, sortableProperties);
  for (const prop of sortableProperties) {
    const value = sortableValues[prop];
    if (typeof value === "undefined")
      continue;
    const expectedType = orama.sorter.getSortablePropertiesWithTypes(orama.data.sorting)[prop];
    orama.sorter.insert(orama.data.sorting, prop, id, value, expectedType, language);
  }
}
function indexAndSortDocumentSync(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options) {
  for (const prop of indexableProperties) {
    const value = indexableValues[prop];
    if (typeof value === "undefined")
      continue;
    const expectedType = orama.index.getSearchablePropertiesWithTypes(orama.data.index)[prop];
    const internalDocumentId = getInternalDocumentId(orama.internalDocumentIDStore, id);
    orama.index.beforeInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
    orama.index.insert(orama.index, orama.data.index, prop, id, internalDocumentId, value, expectedType, language, orama.tokenizer, docsCount, options);
    orama.index.afterInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
  }
  const sortableProperties = orama.sorter.getSortableProperties(orama.data.sorting);
  const sortableValues = orama.getDocumentProperties(doc, sortableProperties);
  for (const prop of sortableProperties) {
    const value = sortableValues[prop];
    if (typeof value === "undefined")
      continue;
    const expectedType = orama.sorter.getSortablePropertiesWithTypes(orama.data.sorting)[prop];
    orama.sorter.insert(orama.data.sorting, prop, id, value, expectedType, language);
  }
}
function insertMultiple(orama, docs, batchSize, language, skipHooks, timeout) {
  const asyncNeeded = isAsyncFunction(orama.afterInsertMultiple) || isAsyncFunction(orama.beforeInsertMultiple) || isAsyncFunction(orama.index.beforeInsert) || isAsyncFunction(orama.index.insert) || isAsyncFunction(orama.index.afterInsert);
  if (asyncNeeded) {
    return innerInsertMultipleAsync(orama, docs, batchSize, language, skipHooks, timeout);
  }
  return innerInsertMultipleSync(orama, docs, batchSize, language, skipHooks, timeout);
}
async function innerInsertMultipleAsync(orama, docs, batchSize = 1e3, language, skipHooks, timeout = 0) {
  const ids = [];
  const processNextBatch = async (startIndex) => {
    const endIndex = Math.min(startIndex + batchSize, docs.length);
    const batch = docs.slice(startIndex, endIndex);
    for (const doc of batch) {
      const options = { avlRebalanceThreshold: batch.length };
      const id = await insert(orama, doc, language, skipHooks, options);
      ids.push(id);
    }
    return endIndex;
  };
  const processAllBatches = async () => {
    let currentIndex = 0;
    while (currentIndex < docs.length) {
      const startTime = Date.now();
      currentIndex = await processNextBatch(currentIndex);
      if (timeout > 0) {
        const elapsedTime = Date.now() - startTime;
        const waitTime = timeout - elapsedTime;
        if (waitTime > 0) {
          sleep(waitTime);
        }
      }
    }
  };
  await processAllBatches();
  {
    await runMultipleHook(orama.afterInsertMultiple, orama, docs);
  }
  return ids;
}
function innerInsertMultipleSync(orama, docs, batchSize = 1e3, language, skipHooks, timeout = 0) {
  const ids = [];
  let i = 0;
  function processNextBatch() {
    const batch = docs.slice(i * batchSize, (i + 1) * batchSize);
    if (batch.length === 0)
      return false;
    for (const doc of batch) {
      const options = { avlRebalanceThreshold: batch.length };
      const id = insert(orama, doc, language, skipHooks, options);
      ids.push(id);
    }
    i++;
    return true;
  }
  function processAllBatches() {
    const startTime = Date.now();
    while (true) {
      const hasMoreBatches = processNextBatch();
      if (!hasMoreBatches)
        break;
      if (timeout > 0) {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= timeout) {
          const remainingTime = timeout - elapsedTime % timeout;
          if (remainingTime > 0) {
            sleep(remainingTime);
          }
        }
      }
    }
  }
  processAllBatches();
  {
    runMultipleHook(orama.afterInsertMultiple, orama, docs);
  }
  return ids;
}
const MODE_FULLTEXT_SEARCH = "fulltext";
const MODE_HYBRID_SEARCH = "hybrid";
const MODE_VECTOR_SEARCH = "vector";
function sortAsc(a, b) {
  return a[1] - b[1];
}
function sortDesc(a, b) {
  return b[1] - a[1];
}
function sortingPredicateBuilder(order = "desc") {
  return order.toLowerCase() === "asc" ? sortAsc : sortDesc;
}
function getFacets(orama, results, facetsConfig) {
  const facets = {};
  const allIDs = results.map(([id]) => id);
  const allDocs = orama.documentsStore.getMultiple(orama.data.docs, allIDs);
  const facetKeys = Object.keys(facetsConfig);
  const properties = orama.index.getSearchablePropertiesWithTypes(orama.data.index);
  for (const facet of facetKeys) {
    let values;
    if (properties[facet] === "number") {
      const { ranges } = facetsConfig[facet];
      const rangesLength = ranges.length;
      const tmp = Array.from({ length: rangesLength });
      for (let i = 0; i < rangesLength; i++) {
        const range = ranges[i];
        tmp[i] = [`${range.from}-${range.to}`, 0];
      }
      values = Object.fromEntries(tmp);
    }
    facets[facet] = {
      count: 0,
      values: values ?? {}
    };
  }
  const allDocsLength = allDocs.length;
  for (let i = 0; i < allDocsLength; i++) {
    const doc = allDocs[i];
    for (const facet of facetKeys) {
      const facetValue = facet.includes(".") ? getNested(doc, facet) : doc[facet];
      const propertyType = properties[facet];
      const facetValues = facets[facet].values;
      switch (propertyType) {
        case "number": {
          const ranges = facetsConfig[facet].ranges;
          calculateNumberFacetBuilder(ranges, facetValues)(facetValue);
          break;
        }
        case "number[]": {
          const alreadyInsertedValues = /* @__PURE__ */ new Set();
          const ranges = facetsConfig[facet].ranges;
          const calculateNumberFacet = calculateNumberFacetBuilder(ranges, facetValues, alreadyInsertedValues);
          for (const v2 of facetValue) {
            calculateNumberFacet(v2);
          }
          break;
        }
        case "boolean":
        case "enum":
        case "string": {
          calculateBooleanStringOrEnumFacetBuilder(facetValues, propertyType)(facetValue);
          break;
        }
        case "boolean[]":
        case "enum[]":
        case "string[]": {
          const alreadyInsertedValues = /* @__PURE__ */ new Set();
          const innerType = propertyType === "boolean[]" ? "boolean" : "string";
          const calculateBooleanStringOrEnumFacet = calculateBooleanStringOrEnumFacetBuilder(facetValues, innerType, alreadyInsertedValues);
          for (const v2 of facetValue) {
            calculateBooleanStringOrEnumFacet(v2);
          }
          break;
        }
        default:
          throw createError("FACET_NOT_SUPPORTED", propertyType);
      }
    }
  }
  for (const facet of facetKeys) {
    const currentFacet = facets[facet];
    currentFacet.count = Object.keys(currentFacet.values).length;
    if (properties[facet] === "string") {
      const stringFacetDefinition = facetsConfig[facet];
      const sortingPredicate = sortingPredicateBuilder(stringFacetDefinition.sort);
      currentFacet.values = Object.fromEntries(Object.entries(currentFacet.values).sort(sortingPredicate).slice(stringFacetDefinition.offset ?? 0, stringFacetDefinition.limit ?? 10));
    }
  }
  return facets;
}
function calculateNumberFacetBuilder(ranges, values, alreadyInsertedValues) {
  return (facetValue) => {
    for (const range of ranges) {
      const value = `${range.from}-${range.to}`;
      if (alreadyInsertedValues?.has(value)) {
        continue;
      }
      if (facetValue >= range.from && facetValue <= range.to) {
        if (values[value] === void 0) {
          values[value] = 1;
        } else {
          values[value]++;
          alreadyInsertedValues?.add(value);
        }
      }
    }
  };
}
function calculateBooleanStringOrEnumFacetBuilder(values, propertyType, alreadyInsertedValues) {
  const defaultValue = propertyType === "boolean" ? "false" : "";
  return (facetValue) => {
    const value = facetValue?.toString() ?? defaultValue;
    if (alreadyInsertedValues?.has(value)) {
      return;
    }
    values[value] = (values[value] ?? 0) + 1;
    alreadyInsertedValues?.add(value);
  };
}
const DEFAULT_REDUCE = {
  reducer: (_, acc, res, index) => {
    acc[index] = res;
    return acc;
  },
  getInitialValue: (length) => Array.from({ length })
};
const ALLOWED_TYPES = ["string", "number", "boolean"];
function getGroups(orama, results, groupBy) {
  const properties = groupBy.properties;
  const propertiesLength = properties.length;
  const schemaProperties = orama.index.getSearchablePropertiesWithTypes(orama.data.index);
  for (let i = 0; i < propertiesLength; i++) {
    const property = properties[i];
    if (typeof schemaProperties[property] === "undefined") {
      throw createError("UNKNOWN_GROUP_BY_PROPERTY", property);
    }
    if (!ALLOWED_TYPES.includes(schemaProperties[property])) {
      throw createError("INVALID_GROUP_BY_PROPERTY", property, ALLOWED_TYPES.join(", "), schemaProperties[property]);
    }
  }
  const allIDs = results.map(([id]) => getDocumentIdFromInternalId(orama.internalDocumentIDStore, id));
  const allDocs = orama.documentsStore.getMultiple(orama.data.docs, allIDs);
  const allDocsLength = allDocs.length;
  const returnedCount = groupBy.maxResult || Number.MAX_SAFE_INTEGER;
  const listOfValues = [];
  const g = {};
  for (let i = 0; i < propertiesLength; i++) {
    const groupByKey = properties[i];
    const group = {
      property: groupByKey,
      perValue: {}
    };
    const values = /* @__PURE__ */ new Set();
    for (let j = 0; j < allDocsLength; j++) {
      const doc = allDocs[j];
      const value = getNested(doc, groupByKey);
      if (typeof value === "undefined") {
        continue;
      }
      const keyValue = typeof value !== "boolean" ? value : "" + value;
      const perValue = group.perValue[keyValue] ?? {
        indexes: [],
        count: 0
      };
      if (perValue.count >= returnedCount) {
        continue;
      }
      perValue.indexes.push(j);
      perValue.count++;
      group.perValue[keyValue] = perValue;
      values.add(value);
    }
    listOfValues.push(Array.from(values));
    g[groupByKey] = group;
  }
  const combinations = calculateCombination(listOfValues);
  const combinationsLength = combinations.length;
  const groups = [];
  for (let i = 0; i < combinationsLength; i++) {
    const combination = combinations[i];
    const combinationLength = combination.length;
    const group = {
      values: [],
      indexes: []
    };
    const indexes = [];
    for (let j = 0; j < combinationLength; j++) {
      const value = combination[j];
      const property = properties[j];
      indexes.push(g[property].perValue[typeof value !== "boolean" ? value : "" + value].indexes);
      group.values.push(value);
    }
    group.indexes = intersect(indexes).sort((a, b) => a - b);
    if (group.indexes.length === 0) {
      continue;
    }
    groups.push(group);
  }
  const groupsLength = groups.length;
  const res = Array.from({ length: groupsLength });
  for (let i = 0; i < groupsLength; i++) {
    const group = groups[i];
    const reduce = groupBy.reduce || DEFAULT_REDUCE;
    const docs = group.indexes.map((index) => {
      return {
        id: allIDs[index],
        score: results[index][1],
        document: allDocs[index]
      };
    });
    const func = reduce.reducer.bind(null, group.values);
    const initialValue = reduce.getInitialValue(group.indexes.length);
    const aggregationValue = docs.reduce(func, initialValue);
    res[i] = {
      values: group.values,
      result: aggregationValue
    };
  }
  return res;
}
function calculateCombination(arrs, index = 0) {
  if (index + 1 === arrs.length)
    return arrs[index].map((item) => [item]);
  const head = arrs[index];
  const c2 = calculateCombination(arrs, index + 1);
  const combinations = [];
  for (const value of head) {
    for (const combination of c2) {
      const result = [value];
      safeArrayPush(result, combination);
      combinations.push(result);
    }
  }
  return combinations;
}
function applyPinningRules(orama, pinningStore, uniqueDocsArray, searchTerm) {
  const matchingRules = getMatchingRules(pinningStore, searchTerm);
  if (matchingRules.length === 0) {
    return uniqueDocsArray;
  }
  const allPromotions = matchingRules.flatMap((rule) => rule.consequence.promote);
  allPromotions.sort((a, b) => a.position - b.position);
  const pinnedInternalIds = /* @__PURE__ */ new Set();
  const promotionsMap = /* @__PURE__ */ new Map();
  const positionsTaken = /* @__PURE__ */ new Set();
  for (const promotion of allPromotions) {
    const internalId = getInternalDocumentId(orama.internalDocumentIDStore, promotion.doc_id);
    if (internalId === void 0) {
      continue;
    }
    if (promotionsMap.has(internalId)) {
      const existingPosition = promotionsMap.get(internalId);
      if (promotion.position < existingPosition) {
        promotionsMap.set(internalId, promotion.position);
      }
      continue;
    }
    if (positionsTaken.has(promotion.position)) {
      continue;
    }
    pinnedInternalIds.add(internalId);
    promotionsMap.set(internalId, promotion.position);
    positionsTaken.add(promotion.position);
  }
  if (promotionsMap.size === 0) {
    return uniqueDocsArray;
  }
  const unpinnedResults = uniqueDocsArray.filter(([id]) => !pinnedInternalIds.has(id));
  const BASE_PIN_SCORE = 1e6;
  const pinnedResults = [];
  for (const [internalId, position] of promotionsMap.entries()) {
    const existingResult = uniqueDocsArray.find(([id]) => id === internalId);
    if (existingResult) {
      pinnedResults.push([internalId, BASE_PIN_SCORE - position]);
    } else {
      const doc = orama.documentsStore.get(orama.data.docs, internalId);
      if (doc) {
        pinnedResults.push([internalId, 0]);
      }
    }
  }
  pinnedResults.sort((a, b) => {
    const posA = promotionsMap.get(a[0]) ?? Infinity;
    const posB = promotionsMap.get(b[0]) ?? Infinity;
    return posA - posB;
  });
  const finalResults = [];
  const pinnedByPosition = /* @__PURE__ */ new Map();
  for (const pinnedResult of pinnedResults) {
    const position = promotionsMap.get(pinnedResult[0]);
    pinnedByPosition.set(position, pinnedResult);
  }
  let unpinnedIndex = 0;
  let currentPosition = 0;
  while (currentPosition < unpinnedResults.length + pinnedResults.length) {
    if (pinnedByPosition.has(currentPosition)) {
      finalResults.push(pinnedByPosition.get(currentPosition));
      currentPosition++;
    } else if (unpinnedIndex < unpinnedResults.length) {
      finalResults.push(unpinnedResults[unpinnedIndex]);
      unpinnedIndex++;
      currentPosition++;
    } else {
      break;
    }
  }
  for (const [position, pinnedResult] of pinnedByPosition.entries()) {
    if (position >= finalResults.length) {
      finalResults.push(pinnedResult);
    }
  }
  return finalResults;
}
function innerFullTextSearch(orama, params, language) {
  const { term, properties } = params;
  const index = orama.data.index;
  let propertiesToSearch = orama.caches["propertiesToSearch"];
  if (!propertiesToSearch) {
    const propertiesToSearchWithTypes = orama.index.getSearchablePropertiesWithTypes(index);
    propertiesToSearch = orama.index.getSearchableProperties(index);
    propertiesToSearch = propertiesToSearch.filter((prop) => propertiesToSearchWithTypes[prop].startsWith("string"));
    orama.caches["propertiesToSearch"] = propertiesToSearch;
  }
  if (properties && properties !== "*") {
    for (const prop of properties) {
      if (!propertiesToSearch.includes(prop)) {
        throw createError("UNKNOWN_INDEX", prop, propertiesToSearch.join(", "));
      }
    }
    propertiesToSearch = propertiesToSearch.filter((prop) => properties.includes(prop));
  }
  const hasFilters = Object.keys(params.where ?? {}).length > 0;
  let whereFiltersIDs;
  if (hasFilters) {
    whereFiltersIDs = orama.index.searchByWhereClause(index, orama.tokenizer, params.where, language);
  }
  let uniqueDocsIDs;
  const threshold = params.threshold !== void 0 && params.threshold !== null ? params.threshold : 1;
  if (term || properties) {
    const docsCount = count(orama);
    uniqueDocsIDs = orama.index.search(index, term || "", orama.tokenizer, language, propertiesToSearch, params.exact || false, params.tolerance || 0, params.boost || {}, applyDefault(params.relevance), docsCount, whereFiltersIDs, threshold);
    if (params.exact && term) {
      const searchTerms = term.trim().split(/\s+/);
      uniqueDocsIDs = uniqueDocsIDs.filter(([docId]) => {
        const doc = orama.documentsStore.get(orama.data.docs, docId);
        if (!doc)
          return false;
        for (const prop of propertiesToSearch) {
          const propValue = getPropValue(doc, prop);
          if (typeof propValue === "string") {
            const hasAllTerms = searchTerms.every((searchTerm) => {
              const regex = new RegExp(`\\b${escapeRegex(searchTerm)}\\b`);
              return regex.test(propValue);
            });
            if (hasAllTerms) {
              return true;
            }
          }
        }
        return false;
      });
    }
  } else {
    if (hasFilters) {
      const geoResults = searchByGeoWhereClause(index, params.where);
      if (geoResults) {
        uniqueDocsIDs = geoResults;
      } else {
        const docIds = whereFiltersIDs ? Array.from(whereFiltersIDs) : [];
        uniqueDocsIDs = docIds.map((k) => [+k, 0]);
      }
    } else {
      const docIds = Object.keys(orama.documentsStore.getAll(orama.data.docs));
      uniqueDocsIDs = docIds.map((k) => [+k, 0]);
    }
  }
  return uniqueDocsIDs;
}
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getPropValue(obj, path) {
  const keys = path.split(".");
  let value = obj;
  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return void 0;
    }
  }
  return value;
}
function fullTextSearch(orama, params, language) {
  const timeStart = getNanosecondsTime();
  function performSearchLogic() {
    const vectorProperties = Object.keys(orama.data.index.vectorIndexes);
    const shouldCalculateFacets = params.facets && Object.keys(params.facets).length > 0;
    const { limit = 10, offset = 0, distinctOn, includeVectors = false } = params;
    const isPreflight = params.preflight === true;
    let uniqueDocsArray = innerFullTextSearch(orama, params, language);
    if (params.sortBy) {
      if (typeof params.sortBy === "function") {
        const ids = uniqueDocsArray.map(([id]) => id);
        const docs = orama.documentsStore.getMultiple(orama.data.docs, ids);
        const docsWithIdAndScore = docs.map((d, i) => [
          uniqueDocsArray[i][0],
          uniqueDocsArray[i][1],
          d
        ]);
        docsWithIdAndScore.sort(params.sortBy);
        uniqueDocsArray = docsWithIdAndScore.map(([id, score]) => [id, score]);
      } else {
        uniqueDocsArray = orama.sorter.sortBy(orama.data.sorting, uniqueDocsArray, params.sortBy).map(([id, score]) => [getInternalDocumentId(orama.internalDocumentIDStore, id), score]);
      }
    } else {
      uniqueDocsArray = uniqueDocsArray.sort(sortTokenScorePredicate);
    }
    uniqueDocsArray = applyPinningRules(orama, orama.data.pinning, uniqueDocsArray, params.term);
    let results;
    if (!isPreflight) {
      results = distinctOn ? fetchDocumentsWithDistinct(orama, uniqueDocsArray, offset, limit, distinctOn) : fetchDocuments(orama, uniqueDocsArray, offset, limit);
    }
    const searchResult = {
      elapsed: {
        formatted: "",
        raw: 0
      },
      hits: [],
      count: uniqueDocsArray.length
    };
    if (typeof results !== "undefined") {
      searchResult.hits = results.filter(Boolean);
      if (!includeVectors) {
        removeVectorsFromHits(searchResult, vectorProperties);
      }
    }
    if (shouldCalculateFacets) {
      const facets = getFacets(orama, uniqueDocsArray, params.facets);
      searchResult.facets = facets;
    }
    if (params.groupBy) {
      searchResult.groups = getGroups(orama, uniqueDocsArray, params.groupBy);
    }
    searchResult.elapsed = orama.formatElapsedTime(getNanosecondsTime() - timeStart);
    return searchResult;
  }
  async function executeSearchAsync() {
    if (orama.beforeSearch) {
      await runBeforeSearch(orama.beforeSearch, orama, params, language);
    }
    const searchResult = performSearchLogic();
    if (orama.afterSearch) {
      await runAfterSearch(orama.afterSearch, orama, params, language, searchResult);
    }
    return searchResult;
  }
  const asyncNeeded = orama.beforeSearch?.length || orama.afterSearch?.length;
  if (asyncNeeded) {
    return executeSearchAsync();
  }
  return performSearchLogic();
}
const defaultBM25Params = {
  k: 1.2,
  b: 0.75,
  d: 0.5
};
function applyDefault(bm25Relevance) {
  const r = bm25Relevance ?? {};
  r.k = r.k ?? defaultBM25Params.k;
  r.b = r.b ?? defaultBM25Params.b;
  r.d = r.d ?? defaultBM25Params.d;
  return r;
}
function innerVectorSearch(orama, params, language) {
  const vector = params.vector;
  if (vector && (!("value" in vector) || !("property" in vector))) {
    throw createError("INVALID_VECTOR_INPUT", Object.keys(vector).join(", "));
  }
  const vectorIndex = orama.data.index.vectorIndexes[vector.property];
  if (!vectorIndex) {
    throw createError("UNKNOWN_VECTOR_PROPERTY", vector.property);
  }
  const vectorSize = vectorIndex.node.size;
  if (vector?.value.length !== vectorSize) {
    if (vector?.property === void 0 || vector?.value.length === void 0) {
      throw createError("INVALID_INPUT_VECTOR", "undefined", vectorSize, "undefined");
    }
    throw createError("INVALID_INPUT_VECTOR", vector.property, vectorSize, vector.value.length);
  }
  const index = orama.data.index;
  let whereFiltersIDs;
  const hasFilters = Object.keys(params.where ?? {}).length > 0;
  if (hasFilters) {
    whereFiltersIDs = orama.index.searchByWhereClause(index, orama.tokenizer, params.where, language);
  }
  return vectorIndex.node.find(vector.value, params.similarity ?? DEFAULT_SIMILARITY, whereFiltersIDs);
}
function searchVector(orama, params, language = "english") {
  const timeStart = getNanosecondsTime();
  function performSearchLogic() {
    let results = innerVectorSearch(orama, params, language).sort(sortTokenScorePredicate);
    results = applyPinningRules(orama, orama.data.pinning, results, void 0);
    let facetsResults = [];
    const shouldCalculateFacets = params.facets && Object.keys(params.facets).length > 0;
    if (shouldCalculateFacets) {
      const facets = getFacets(orama, results, params.facets);
      facetsResults = facets;
    }
    const vectorProperty = params.vector.property;
    const includeVectors = params.includeVectors ?? false;
    const limit = params.limit ?? 10;
    const offset = params.offset ?? 0;
    const docs = Array.from({ length: limit });
    for (let i = 0; i < limit; i++) {
      const result = results[i + offset];
      if (!result) {
        break;
      }
      const doc = orama.data.docs.docs[result[0]];
      if (doc) {
        if (!includeVectors) {
          doc[vectorProperty] = null;
        }
        const newDoc = {
          id: getDocumentIdFromInternalId(orama.internalDocumentIDStore, result[0]),
          score: result[1],
          document: doc
        };
        docs[i] = newDoc;
      }
    }
    let groups = [];
    if (params.groupBy) {
      groups = getGroups(orama, results, params.groupBy);
    }
    const timeEnd = getNanosecondsTime();
    const elapsedTime = timeEnd - timeStart;
    return {
      count: results.length,
      hits: docs.filter(Boolean),
      elapsed: {
        raw: Number(elapsedTime),
        formatted: formatNanoseconds(elapsedTime)
      },
      ...facetsResults ? { facets: facetsResults } : {},
      ...groups ? { groups } : {}
    };
  }
  async function executeSearchAsync() {
    if (orama.beforeSearch) {
      await runBeforeSearch(orama.beforeSearch, orama, params, language);
    }
    const results = performSearchLogic();
    if (orama.afterSearch) {
      await runAfterSearch(orama.afterSearch, orama, params, language, results);
    }
    return results;
  }
  const asyncNeeded = orama.beforeSearch?.length || orama.afterSearch?.length;
  if (asyncNeeded) {
    return executeSearchAsync();
  }
  return performSearchLogic();
}
function innerHybridSearch(orama, params, language) {
  const fullTextIDs = minMaxScoreNormalization(innerFullTextSearch(orama, params, language));
  const vectorIDs = innerVectorSearch(orama, params, language);
  const hybridWeights = params.hybridWeights;
  return mergeAndRankResults(fullTextIDs, vectorIDs, params.term ?? "", hybridWeights);
}
function hybridSearch(orama, params, language) {
  const timeStart = getNanosecondsTime();
  function performSearchLogic() {
    let uniqueTokenScores = innerHybridSearch(orama, params, language);
    uniqueTokenScores = applyPinningRules(orama, orama.data.pinning, uniqueTokenScores, params.term);
    let facetsResults;
    const shouldCalculateFacets = params.facets && Object.keys(params.facets).length > 0;
    if (shouldCalculateFacets) {
      facetsResults = getFacets(orama, uniqueTokenScores, params.facets);
    }
    let groups;
    if (params.groupBy) {
      groups = getGroups(orama, uniqueTokenScores, params.groupBy);
    }
    const offset = params.offset ?? 0;
    const limit = params.limit ?? 10;
    const results = fetchDocuments(orama, uniqueTokenScores, offset, limit).filter(Boolean);
    const timeEnd = getNanosecondsTime();
    const returningResults = {
      count: uniqueTokenScores.length,
      elapsed: {
        raw: Number(timeEnd - timeStart),
        formatted: formatNanoseconds(timeEnd - timeStart)
      },
      hits: results,
      ...facetsResults ? { facets: facetsResults } : {},
      ...groups ? { groups } : {}
    };
    const includeVectors = params.includeVectors ?? false;
    if (!includeVectors) {
      const vectorProperties = Object.keys(orama.data.index.vectorIndexes);
      removeVectorsFromHits(returningResults, vectorProperties);
    }
    return returningResults;
  }
  async function executeSearchAsync() {
    if (orama.beforeSearch) {
      await runBeforeSearch(orama.beforeSearch, orama, params, language);
    }
    const results = performSearchLogic();
    if (orama.afterSearch) {
      await runAfterSearch(orama.afterSearch, orama, params, language, results);
    }
    return results;
  }
  const asyncNeeded = orama.beforeSearch?.length || orama.afterSearch?.length;
  if (asyncNeeded) {
    return executeSearchAsync();
  }
  return performSearchLogic();
}
function extractScore(token) {
  return token[1];
}
function minMaxScoreNormalization(results) {
  const maxScore = Math.max.apply(Math, results.map(extractScore));
  return results.map(([id, score]) => [id, score / maxScore]);
}
function normalizeScore(score, maxScore) {
  return score / maxScore;
}
function hybridScoreBuilder(textWeight, vectorWeight) {
  return (textScore, vectorScore) => textScore * textWeight + vectorScore * vectorWeight;
}
function mergeAndRankResults(textResults, vectorResults, query, hybridWeights) {
  const maxTextScore = Math.max.apply(Math, textResults.map(extractScore));
  const maxVectorScore = Math.max.apply(Math, vectorResults.map(extractScore));
  const hasHybridWeights = hybridWeights && hybridWeights.text && hybridWeights.vector;
  const { text: textWeight, vector: vectorWeight } = hasHybridWeights ? hybridWeights : getQueryWeights();
  const mergedResults = /* @__PURE__ */ new Map();
  const textResultsLength = textResults.length;
  const hybridScore = hybridScoreBuilder(textWeight, vectorWeight);
  for (let i = 0; i < textResultsLength; i++) {
    const [id, score] = textResults[i];
    const normalizedScore = normalizeScore(score, maxTextScore);
    const hybridScoreValue = hybridScore(normalizedScore, 0);
    mergedResults.set(id, hybridScoreValue);
  }
  const vectorResultsLength = vectorResults.length;
  for (let i = 0; i < vectorResultsLength; i++) {
    const [resultId, score] = vectorResults[i];
    const normalizedScore = normalizeScore(score, maxVectorScore);
    const existingRes = mergedResults.get(resultId) ?? 0;
    mergedResults.set(resultId, existingRes + hybridScore(0, normalizedScore));
  }
  return [...mergedResults].sort((a, b) => b[1] - a[1]);
}
function getQueryWeights(query) {
  return {
    text: 0.5,
    vector: 0.5
  };
}
function search(orama, params, language) {
  const mode = params.mode ?? MODE_FULLTEXT_SEARCH;
  if (mode === MODE_FULLTEXT_SEARCH) {
    return fullTextSearch(orama, params, language);
  }
  if (mode === MODE_VECTOR_SEARCH) {
    return searchVector(orama, params);
  }
  if (mode === MODE_HYBRID_SEARCH) {
    return hybridSearch(orama, params);
  }
  throw createError("INVALID_SEARCH_MODE", mode);
}
function fetchDocumentsWithDistinct(orama, uniqueDocsArray, offset, limit, distinctOn) {
  const docs = orama.data.docs;
  const values = /* @__PURE__ */ new Map();
  const results = [];
  const resultIDs = /* @__PURE__ */ new Set();
  const uniqueDocsArrayLength = uniqueDocsArray.length;
  let count2 = 0;
  for (let i = 0; i < uniqueDocsArrayLength; i++) {
    const idAndScore = uniqueDocsArray[i];
    if (typeof idAndScore === "undefined") {
      continue;
    }
    const [id, score] = idAndScore;
    if (resultIDs.has(id)) {
      continue;
    }
    const doc = orama.documentsStore.get(docs, id);
    const value = getNested(doc, distinctOn);
    if (typeof value === "undefined" || values.has(value)) {
      continue;
    }
    values.set(value, true);
    count2++;
    if (count2 <= offset) {
      continue;
    }
    results.push({ id: getDocumentIdFromInternalId(orama.internalDocumentIDStore, id), score, document: doc });
    resultIDs.add(id);
    if (count2 >= offset + limit) {
      break;
    }
  }
  return results;
}
function fetchDocuments(orama, uniqueDocsArray, offset, limit) {
  const docs = orama.data.docs;
  const results = Array.from({
    length: limit
  });
  const resultIDs = /* @__PURE__ */ new Set();
  for (let i = offset; i < limit + offset; i++) {
    const idAndScore = uniqueDocsArray[i];
    if (typeof idAndScore === "undefined") {
      break;
    }
    const [id, score] = idAndScore;
    if (!resultIDs.has(id)) {
      const fullDoc = orama.documentsStore.get(docs, id);
      results[i] = { id: getDocumentIdFromInternalId(orama.internalDocumentIDStore, id), score, document: fullDoc };
      resultIDs.add(id);
    }
  }
  return results;
}
function load(orama, raw) {
  orama.internalDocumentIDStore.load(orama, raw.internalDocumentIDStore);
  orama.data.index = orama.index.load(orama.internalDocumentIDStore, raw.index);
  orama.data.docs = orama.documentsStore.load(orama.internalDocumentIDStore, raw.docs);
  orama.data.sorting = orama.sorter.load(orama.internalDocumentIDStore, raw.sorting);
  orama.data.pinning = orama.pinning.load(orama.internalDocumentIDStore, raw.pinning);
  orama.tokenizer.language = raw.language;
}
function save(orama) {
  return {
    internalDocumentIDStore: orama.internalDocumentIDStore.save(orama.internalDocumentIDStore),
    index: orama.index.save(orama.data.index),
    docs: orama.documentsStore.save(orama.data.docs),
    sorting: orama.sorter.save(orama.data.sorting),
    pinning: orama.pinning.save(orama.data.pinning),
    language: orama.tokenizer.language
  };
}
export {
  search as a,
  create as c,
  getByID as g,
  insertMultiple as i,
  load as l,
  save as s
};
