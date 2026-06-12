import StoreBadge from "../ui/StoreBadge";
import JoinWaitlistButton from "./JoinWaitlistButton";

export default function DownloadCTA() {
  return (
    <section id="download" className="bg-[#f3f2ed] px-8 py-16 sm:px-6 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl text-center xl:max-w-7xl 2xl:max-w-[1440px]">
        <h2 className="mb-4 text-2xl font-bold text-renity-text sm:text-3xl md:text-4xl">
          Ready to simplify mealtime?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-renity-text/70 sm:text-lg">
          Download Renity and start planning meals, cooking together, and
          shopping smarter&nbsp;&mdash; all from one shared place.
        </p>
        <div className="flex flex-col items-center gap-3">
          <JoinWaitlistButton className="mb-2" />
          <span className="inline-block rounded-full bg-renity-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-renity-primary sm:text-sm">
            Coming soon to App Store &amp; Google Play
          </span>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 opacity-60 min-[380px]:flex-nowrap">
            <StoreBadge store="apple" variant="dark" href="" />
            <StoreBadge store="google" variant="dark" href="" />
          </div>
        </div>
      </div>
    </section>
  );
}
