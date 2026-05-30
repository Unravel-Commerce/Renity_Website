import Link from "next/link";
import SectionWrapper from "../ui/SectionWrapper";
import Accordion from "../ui/Accordion";
import { FAQ_ITEMS } from "../../lib/faq";

export default function FAQ() {
  return (
    <SectionWrapper id="faq" background="white">
      <div className="grid gap-8 px-4 sm:px-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-12 xl:gap-16">
        {/* Intro — sticks alongside the list on large screens */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center rounded-full bg-renity-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-renity-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-renity-text sm:text-3xl md:text-4xl">
            Questions?
            <br className="hidden sm:block" /> We&rsquo;ve got answers.
          </h2>
          <p className="mt-3 max-w-md text-base text-renity-text-secondary">
            Everything you need to know about planning meals with Renity. Can&rsquo;t
            find what you&rsquo;re looking for?
          </p>
          <Link
            href="/contact"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-renity-primary transition-colors hover:text-renity-text"
          >
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Accordion */}
        <Accordion items={FAQ_ITEMS} />
      </div>
    </SectionWrapper>
  );
}
