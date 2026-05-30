"use client";

import { useId, useState } from "react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
  // Index open on first render; pass null to start fully collapsed.
  defaultOpenIndex?: number | null;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className={`space-y-2.5 sm:space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
              isOpen
                ? "border-renity-primary/40 bg-renity-bg-light shadow-sm"
                : "border-renity-border bg-white hover:border-renity-primary/30"
            }`}
          >
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-renity-primary sm:px-6"
              >
                <span className="text-[0.95rem] font-semibold text-renity-text sm:text-base">
                  {item.question}
                </span>
                <span
                  className={`relative grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-200 ${
                    isOpen
                      ? "bg-renity-primary text-white"
                      : "bg-renity-primary/10 text-renity-primary"
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                  <span
                    className={`absolute h-3 w-0.5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-renity-text-secondary sm:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
