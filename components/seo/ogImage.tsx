import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME, SITE_TAGLINE, BRAND } from "../../lib/seo";

export const OG_ALT = "Renity — Meal Planning for Households";
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Renders the shared 1200x630 social card used by both the Open Graph
// and Twitter image routes.
export async function renderOgImage(): Promise<ImageResponse> {
  let logoSrc = "";
  try {
    const logo = await readFile(
      join(process.cwd(), "public", "Renity_Logo_Icon_03.png")
    );
    logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  } catch {
    // Fall back to a text-only card if the logo can't be read.
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BRAND.background,
          padding: "80px",
        }}
      >
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} width={160} height={160} alt="" />
        ) : null}
        <div
          style={{
            marginTop: logoSrc ? 48 : 0,
            fontSize: 84,
            fontWeight: 700,
            color: BRAND.text,
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: BRAND.primary,
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.3,
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
