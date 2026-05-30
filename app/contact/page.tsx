import type { Metadata } from "next";
import SectionWrapper from "../../components/ui/SectionWrapper";
import ContactForm from "../../components/sections/ContactForm";
import DownloadCTA from "../../components/sections/DownloadCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a question or feedback about Renity, the household meal-planning app? Get in touch with our team at Unravel AS.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper background="light" className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-0">
          <h1 className="text-3xl font-bold text-renity-text sm:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-renity-text-secondary">
            Have a question, feedback, or just want to say hello? Fill out the
            form below and we&rsquo;ll get back to you as soon as we can.
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
      <DownloadCTA />
    </>
  );
}
