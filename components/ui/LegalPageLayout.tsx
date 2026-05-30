"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Section {
  id: string;
  label: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  sections: Section[];
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    headings.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:py-24 xl:max-w-7xl 2xl:max-w-[1440px]">
      {/* Header */}
      <div className="mb-12 px-4 sm:px-0 lg:ml-[248px]">
        <h1 className="text-3xl font-bold text-renity-text sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-renity-text-secondary">
          Last updated: {lastUpdated}
        </p>
        {intro && (
          <p className="mt-4 max-w-[65ch] text-[0.9375rem] leading-relaxed text-renity-text-secondary">
            {intro}
          </p>
        )}
      </div>

      <div className="relative lg:flex lg:gap-16">
        {/* Sidebar TOC — desktop only */}
        <nav
          className="hidden lg:block lg:w-[200px] lg:shrink-0"
          aria-label="Table of contents"
        >
          <div className="sticky top-24">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-renity-text-secondary/50">
              On this page
            </p>
            <ul className="space-y-0.5 border-l border-renity-border">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleClick(section.id)}
                    className={`block w-full truncate py-1.5 pl-4 text-left text-[13px] transition-all ${
                      activeId === section.id
                        ? "-ml-px border-l-2 border-renity-primary font-medium text-renity-primary"
                        : "text-renity-text-secondary/70 hover:text-renity-text"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Content */}
        <article className="legal-prose min-w-0 flex-1 px-4 sm:px-0">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.label}</h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
