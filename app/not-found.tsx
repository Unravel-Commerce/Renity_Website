import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "../components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SectionWrapper background="light" className="flex flex-1 items-center">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-0">
        <p className="text-7xl font-bold tracking-tight text-renity-primary sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-renity-text sm:text-3xl">
          This page isn&rsquo;t on the menu
        </h1>
        <p className="mt-3 text-base text-renity-text-secondary">
          The page you&rsquo;re looking for may have moved or never existed.
          Let&rsquo;s get you back to planning meals.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-renity-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-renity-border px-8 py-3 text-sm font-semibold text-renity-text transition-colors hover:border-renity-primary hover:text-renity-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
