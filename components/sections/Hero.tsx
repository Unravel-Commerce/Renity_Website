import Image from "next/image";
import StoreBadge from "../ui/StoreBadge";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden sm:min-h-[90vh]">
      {/* Background image — mobile/tablet */}
      <Image
        src="/Renity_Hero_Image_mobile.jpg"
        alt=""
        fill
        className="object-cover lg:hidden"
        priority
        sizes="100vw"
      />

      {/* Background image — desktop */}
      <Image
        src="/Renity_Hero_Image.jpg"
        alt=""
        fill
        className="hidden object-cover lg:block"
        priority
        sizes="100vw"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/50 lg:to-black/20" />

      {/* Content — left-aligned */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 pt-[15vh] text-center sm:min-h-[90vh] sm:px-6 lg:items-start lg:pt-0 lg:text-left xl:max-w-7xl 2xl:max-w-[1440px]">
        <h1 className="mb-6 max-w-2xl px-4 text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl xl:max-w-3xl xl:text-7xl">
        The app that makes mealtime simplified
        </h1>

        <p className="mb-10 max-w-xl px-4 text-base leading-relaxed text-white drop-shadow-md sm:px-0 sm:text-lg md:text-xl">
          Renity is the shared app for saving your favorite recipes
          and planning meals together with your family.
        </p>

        <div className="flex flex-col items-center gap-3 lg:items-start">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm sm:text-sm">
            Coming soon to App Store &amp; Google Play
          </span>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 opacity-60 min-[380px]:flex-nowrap lg:justify-start">
            <StoreBadge store="apple" variant="primary" href="" />
            <StoreBadge store="google" variant="primary" href="" />
          </div>
        </div>
      </div>
    </section>
  );
}
