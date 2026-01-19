import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./index.mjs";
import { J as notFound } from "../_libs/@tanstack/router-core.mjs";
import { s as source } from "./source-BRsVN548.mjs";
import "../_libs/@tanstack/history.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:https";
import "node:http2";
import "../_libs/tiny-invariant.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "../_libs/@tanstack/react-router.mjs";
import "../_libs/tiny-warning.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/@tanstack/react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/@tanstack/store.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "./utils-D10VxgVc-CZVkar0w.mjs";
import "node:path";
const createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const serverLoader_createServerFn_handler = createServerRpc({
  id: "3754d170b07e5384cb393a7ce01e3317e54e102cb5b75ed0780e1a678ae2d91a",
  name: "serverLoader",
  filename: "src/routes/docs/$.tsx"
}, (opts, signal) => serverLoader.__executeServer(opts, signal));
const serverLoader = createServerFn({
  method: "GET"
}).inputValidator((slugs) => slugs).handler(serverLoader_createServerFn_handler, async ({
  data: slugs
}) => {
  const page = source.getPage(slugs);
  if (!page) throw notFound();
  return {
    path: page.path,
    editPath: page.path,
    pageTree: await source.serializePageTree(source.getPageTree())
  };
});
export {
  serverLoader_createServerFn_handler
};
