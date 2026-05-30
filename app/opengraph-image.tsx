import {
  renderOgImage,
  OG_ALT,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "../components/seo/ogImage";

export const runtime = "nodejs";
export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage();
}
