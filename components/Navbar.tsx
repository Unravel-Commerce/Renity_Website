"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const [navHeight, setNavHeight] = useState(57);

  const openMenu = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (headerRef.current) setNavHeight(headerRef.current.offsetHeight);
    setOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  const closeMenu = useCallback(() => {
    setVisible(false);
    timeoutRef.current = setTimeout(() => setOpen(false), 300);
  }, []);

  const toggle = useCallback(() => {
    if (open) closeMenu();
    else openMenu();
  }, [open, openMenu, closeMenu]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  const handleLinkClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-renity-border/50 bg-[#f3f2ed] shadow-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 xl:max-w-7xl 2xl:max-w-[1440px]">
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Image
              src="/Renity_Logo_With Text_center.png"
              alt="Renity"
              width={140}
              height={40}
              className="h-7 w-auto sm:h-9"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-renity-text-secondary transition-colors hover:text-renity-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#download"
              className="rounded-lg bg-renity-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
            >
              Download App
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={toggle}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`text-renity-primary transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden" aria-hidden={!open}>
          {/* Dark overlay */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
            onClick={closeMenu}
          />

          {/* Menu panel */}
          <div
            ref={menuRef}
            className={`absolute left-0 right-0 top-0 transform transition-all duration-300 ease-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
            style={{ paddingTop: navHeight }}
          >
            <div className="border-b border-renity-border/50 bg-[#f3f2ed] shadow-xl">
              <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 xl:max-w-7xl 2xl:max-w-[1440px]">
                <div className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="group flex items-center gap-3 rounded-xl px-4 py-4 text-lg font-semibold text-renity-dark transition-all hover:bg-renity-primary/5 hover:pl-5"
                    >
                      <span className="h-5 w-0.5 rounded-full bg-renity-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-4 border-t border-renity-border/50 pt-4">
                  <a
                    href="/#download"
                    onClick={handleLinkClick}
                    className="block rounded-xl bg-renity-primary px-4 py-4 text-center text-lg font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
