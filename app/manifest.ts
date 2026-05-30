import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION, BRAND } from "../lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Renity — Meal Planning for Households",
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: BRAND.background,
    theme_color: BRAND.primary,
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
