import { generateRobots } from "onedocs/seo";

const baseUrl = "https://glaze.dev";

export default function robots() {
  return generateRobots({ baseUrl });
}
