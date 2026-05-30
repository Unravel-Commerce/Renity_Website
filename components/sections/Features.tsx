"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import FeaturePhoneMockup from "./FeaturePhoneMockup";
import PhoneMockup from "./PhoneMockup";

function BookIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: <BookIcon />,
    title: "Your Personal Cookbook",
    description:
      "Create and organize recipes with images, ingredients, and steps. Import from URLs, share with household members, and build your collection together.",
    imageSrc: "/assets/feature_cookbook.png",
    imageAlt: "Open recipe book with ingredients on a rustic kitchen counter",
  },
  {
    icon: <CalendarIcon />,
    title: "Plan Together",
    description:
      "Weekly planner with a today view, assign who\u2019s cooking, quick-add from recipes, and keep everyone in sync in real time.",
    imageSrc: "/assets/feature_plan.png",
    imageAlt: "Couple planning weekly meals together at a kitchen table",
  },
  {
    icon: <TimerIcon />,
    title: "Step-by-Step Cook Mode",
    description:
      "AI-powered cooking guides with timers, scaled servings, and multi-recipe mode. Save your progress and pick up where you left off.",
    imageSrc: "/assets/feature_cook.png",
    imageAlt: "Person cooking step-by-step with a timer and recipe nearby",
  },
  {
    icon: <CartIcon />,
    title: "Shop Smarter",
    description:
      "Generate shopping lists from your meal plan instantly. Combine items, convert measurements, categorize by aisle, and assign lists to household members.",
    imageSrc: "/assets/feature_shop.png",
    imageAlt: "Person grocery shopping with a list on their phone",
  },
  {
    icon: <UsersIcon />,
    title: "Stay in Sync",
    description:
      "Roles for every member, real-time updates, and push notifications for assignments and shares. Your whole household, one app.",
    imageSrc: "/assets/feature_sync.png",
    imageAlt: "Family sharing a home-cooked meal together at the dinner table",
  },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 300;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  return (
    <SectionWrapper id="features" background="light">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="mb-4 px-4 text-2xl font-bold text-renity-text sm:px-0 sm:text-3xl md:text-4xl">
          Everything your household needs
        </h2>
        <p className="mx-auto max-w-2xl px-8 text-base text-renity-text-secondary sm:px-0 sm:text-lg">
          Watch the demo and explore what Renity can do for your family.
        </p>
      </div>

      <div className="relative">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl md:flex"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl md:flex"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-[calc(50vw-100px)] pb-4 scrollbar-none sm:px-[calc(50vw-120px)] md:gap-6 md:px-6"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          <div className="shrink-0 snap-center">
            <PhoneMockup />
          </div>

          {FEATURES.map((feature) => (
            <FeaturePhoneMockup key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
