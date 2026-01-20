import {
  createRootOGImage,
  loadPublicFile,
  ogImageSize,
  ogImageContentType,
  type OGImageLogo,
} from "onedocs/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  const logo = await loadPublicFile("logo-dark.svg");
  return createRootOGImage(logo as OGImageLogo);
}
