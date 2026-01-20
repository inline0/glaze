import {
  createDocsOGImage,
  loadPublicFile,
  loadInterFont,
  type OGImageLogo,
} from "onedocs/og";
import { source } from "@/lib/source";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const page = source.getPage(slug);
  const title = page?.data.title ?? "Documentation";

  const [logo, font] = await Promise.all([
    loadPublicFile("logo-dark.svg"),
    loadInterFont(),
  ]);

  return createDocsOGImage(title, logo as OGImageLogo, font);
}
