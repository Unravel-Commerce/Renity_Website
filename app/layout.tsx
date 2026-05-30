import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/layout/Footer";
import JsonLd from "../components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "../lib/structured-data";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  ORG,
} from "../lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Renity",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "meal planning app",
    "household meal planner",
    "shared recipes",
    "family meal planning",
    "weekly meal planner",
    "shopping list app",
    "recipe organizer",
    "cook mode",
    "Renity",
  ],
  authors: [{ name: ORG.name }],
  creator: ORG.name,
  publisher: ORG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Plan meals together, cook with guided steps, and shop from one shared place.",
  },
};

export const viewport: Viewport = {
  themeColor: "#8F7872",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Privacy-friendly analytics by Plausible (cookieless) */}
        <Script
          async
          src="https://plausible.io/js/pa-E6MDjQjTFMGGUhpRveuMY.js"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
