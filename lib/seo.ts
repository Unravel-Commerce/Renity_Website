// Central SEO/site facts. Swap SITE_URL when the production domain changes.
export const SITE_URL = "https://renityapp.com";
export const SITE_NAME = "Renity";

export const SITE_TITLE = "Renity — Meal Planning for Households";
export const SITE_DESCRIPTION =
  "Plan meals together, cook with guided steps, and shop from one shared place. Built for households, not solo recipe boxes.";

export const SITE_TAGLINE =
  "The shared app for saving recipes and planning meals with your household.";

export const ORG = {
  name: "Unravel AS",
  legalName: "Unravel AS",
  orgNumber: "934 054 423",
  city: "Moss",
  country: "Norway",
  email: "renity@unravelcommerce.com",
} as const;

// Brand colors (kept in sync with app/globals.css)
export const BRAND = {
  primary: "#8F7872",
  background: "#f3f2ed",
  text: "#1C1C1E",
  textSecondary: "#8E8E93",
} as const;

// Resolve a path to an absolute URL against SITE_URL.
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
