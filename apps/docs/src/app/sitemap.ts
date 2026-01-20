import { generateSitemap } from "onedocs/seo";
import meta from "../../content/docs/meta.json";

const baseUrl = "https://glaze.dev";

export default function sitemap() {
  return generateSitemap({
    baseUrl,
    pages: meta.pages ?? [],
  });
}
