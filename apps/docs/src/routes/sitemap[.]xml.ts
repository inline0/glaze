import { createFileRoute } from "@tanstack/react-router";
import { createDocsSitemapHandler } from "onedocs/seo";
import meta from "../../content/docs/meta.json";

const baseUrl = "https://glaze.dev";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: createDocsSitemapHandler({
        baseUrl,
        pages: meta.pages ?? [],
      }),
    },
  },
});
