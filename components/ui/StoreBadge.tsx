interface StoreBadgeProps {
  store: "apple" | "google";
  variant?: "dark" | "primary";
  href?: string;
  className?: string;
}

const variantClasses = {
  dark: "bg-renity-dark",
  primary: "bg-renity-primary",
};

function AppleIcon() {
  return (
    <svg className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.61 1.81L13.79 12 3.61 22.19a1 1 0 0 1-.61-.92V2.73a1 1 0 0 1 .61-.92zM14.5 12.71l2.3 2.3-10.94 6.33 8.64-8.63zm3.2-3.2l2.3 1.33c.58.33.58 1.1 0 1.43l-2.3 1.33-2.63-2.63 2.63-2.46zM5.86 2.66L16.8 8.99l-2.3 2.3-8.64-8.63z" />
    </svg>
  );
}

export default function StoreBadge({
  store,
  variant = "dark",
  href = "#" /* TBD — replace with real store URLs */,
  className = "",
}: StoreBadgeProps) {
  const isApple = store === "apple";

  const disabled = !href;
  const Tag = disabled ? "span" : "a";

  return (
    <Tag
      {...(disabled ? {} : { href })}
      className={`inline-flex w-[40vw] max-w-[200px] items-center gap-2 rounded-xl ${variantClasses[variant]} px-3 py-3 text-white transition-opacity sm:gap-3 sm:px-5 ${disabled ? "cursor-default" : "hover:opacity-80"} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary ${className}`}
      aria-label={isApple ? "Download on the App Store" : "Get it on Google Play"}
    >
      {isApple ? <AppleIcon /> : <PlayIcon />}
      <div className="flex flex-col text-left">
        <span className="text-[8px] leading-tight tracking-wide sm:text-[10px]">
          {isApple ? "Download on the" : "GET IT ON"}
        </span>
        <span className="text-sm font-semibold leading-tight sm:text-lg">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </div>
    </Tag>
  );
}
