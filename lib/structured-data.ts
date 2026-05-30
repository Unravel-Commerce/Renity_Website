import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, ORG, absoluteUrl } from "./seo";
import { type FaqItem } from "./faq";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: absoluteUrl("/Renity_Logo_Primery_BGC.png"),
    email: ORG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: ORG.city,
      addressCountry: "NO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: ORG.email,
      contactType: "customer support",
    },
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function softwareApplicationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": APP_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    publisher: { "@id": ORG_ID },
    featureList: [
      "Shared recipe cookbook",
      "Weekly meal planning",
      "AI-assisted step-by-step cook mode",
      "Automatic shopping lists",
      "Real-time household sync",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function faqSchema(items: readonly FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
