import { type ReactNode } from "react";

type Background = "default" | "light" | "white" | "primary" | "dark";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: Background;
}

const bgClasses: Record<Background, string> = {
  default: "bg-renity-bg",
  light: "bg-renity-bg-light",
  white: "bg-white",
  primary: "bg-renity-primary",
  dark: "bg-renity-text",
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  background = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-0 py-16 sm:px-6 md:py-20 lg:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px]">{children}</div>
    </section>
  );
}
