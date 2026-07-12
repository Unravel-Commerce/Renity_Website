import Image from "next/image";

interface FeaturePhoneMockupProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
}

export default function FeaturePhoneMockup({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
}: FeaturePhoneMockupProps) {
  return (
    <div className="w-[200px] shrink-0 snap-center sm:w-[240px] md:w-[260px]">
      <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-renity-dark bg-renity-dark shadow-md sm:rounded-[2.5rem] sm:border-[6px]">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-renity-dark sm:h-6 sm:w-28 sm:rounded-b-2xl" />

        <div
          className="relative overflow-hidden rounded-[2rem] bg-white"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          <div className="relative h-[55%] w-full overflow-hidden sm:h-[63%] md:h-[60%]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
              sizes="260px"
            />
          </div>

          <div className="px-4 pt-3 sm:px-4 sm:pt-3 md:px-5 md:pt-4">
            <h3 className="mb-2 text-sm font-semibold leading-tight text-renity-text sm:mb-2 sm:text-sm md:mb-3 md:text-base">
              {title}
            </h3>
            <p className="text-[12px] leading-snug text-renity-text-secondary sm:text-xs">
              {description}
            </p>
          </div>
        </div>

        <div className="mx-auto my-1.5 h-1 w-20 rounded-full bg-white/30 sm:my-2 sm:w-28" />
      </div>
    </div>
  );
}
