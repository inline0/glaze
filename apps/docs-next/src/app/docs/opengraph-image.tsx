import {
  createDocsOGImage,
  loadPublicFile,
  loadInterFont,
  ogImageSize,
  ogImageContentType,
  type OGImageLogo,
} from "onedocs/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  const [logo, font] = await Promise.all([
    loadPublicFile("logo-dark.svg"),
    loadInterFont(),
  ]);
  return createDocsOGImage("Documentation", logo as OGImageLogo, font);
}
