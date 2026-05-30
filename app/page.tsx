import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import FAQ from "../components/sections/FAQ";
import DownloadCTA from "../components/sections/DownloadCTA";
import JsonLd from "../components/seo/JsonLd";
import {
  softwareApplicationSchema,
  faqSchema,
} from "../lib/structured-data";
import { FAQ_ITEMS } from "../lib/faq";

export default function Home() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqSchema(FAQ_ITEMS)]} />
      <Hero />
      <Features />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
