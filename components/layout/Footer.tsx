import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f3f2ed] px-4 py-10 sm:px-6 md:py-12">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px]">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <Link href="/" className="flex items-center">
            <Image
              src="/Renity_Logo_With Text_center.png"
              alt="Renity"
              width={120}
              height={36}
              className="h-9 w-auto"
            />
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-renity-primary/70 transition-colors hover:text-renity-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-renity-primary/20 pt-6 text-xs text-renity-primary/50 sm:flex-row sm:justify-between">
          <p>&copy; {year} Renity. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed and Developed by
            <Image
              src="/Unravel_Brandmark_Black.svg"
              alt="Unravel"
              width={14}
              height={14}
              className="inline-block opacity-50"
            />
            Unravel AS
          </p>
        </div>
      </div>
    </footer>
  );
}
