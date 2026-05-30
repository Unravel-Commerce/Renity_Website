import { type ReactNode } from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  imageSrc,
  imageAlt = "",
}: FeatureCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-renity-border bg-white transition-all duration-300 hover:border-renity-secondary hover:shadow-xl">
      {imageSrc && (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6 sm:p-7">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-renity-primary/10 text-renity-primary">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-renity-text">{title}</h3>
        <p className="text-sm leading-relaxed text-renity-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
