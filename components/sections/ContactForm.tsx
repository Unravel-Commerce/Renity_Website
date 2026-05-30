"use client";

import { useActionState, useEffect, useRef, useState, useCallback } from "react";
import Script from "next/script";
import Image from "next/image";
import { sendContactEmail } from "../../app/contact/actions";
import { compressImage } from "../../lib/compressImage";

const MAX_IMAGES = 3;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

interface ImagePreview {
  name: string;
  preview: string;
  base64: string;
}

const initialState = { success: false, message: "" };
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<ImagePreview[]>([]);
  const [compressing, setCompressing] = useState(false);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      setImages([]);
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
      }
    }
  }, [state]);

  const handleFiles = useCallback(async (files: FileList | null) => {
    if (!files) return;

    const remaining = MAX_IMAGES - images.length;
    if (remaining <= 0) return;

    const validFiles = Array.from(files)
      .filter((f) => ALLOWED_TYPES.includes(f.type))
      .slice(0, remaining);

    if (validFiles.length === 0) return;

    setCompressing(true);
    try {
      const newImages: ImagePreview[] = await Promise.all(
        validFiles.map(async (file) => {
          const base64 = await compressImage(file);
          return {
            name: file.name,
            preview: `data:image/jpeg;base64,${base64}`,
            base64,
          };
        })
      );
      setImages((prev) => [...prev, ...newImages]);
    } catch {
      // compression failed silently
    } finally {
      setCompressing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }, [images.length]);

  const removeImage = useCallback((index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const inputClasses =
    "w-full rounded-lg border border-renity-border bg-white px-4 py-3 text-sm text-renity-text placeholder:text-renity-text-secondary/60 transition-colors focus:border-renity-primary focus:outline-none focus:ring-2 focus:ring-renity-primary/20";

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      )}

      <form ref={formRef} action={formAction} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-sm font-medium text-renity-text"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-sm font-medium text-renity-text"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-sm font-medium text-renity-text"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            placeholder="What is this about?"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-renity-text"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            minLength={10}
            maxLength={5000}
            placeholder="Tell us what's on your mind..."
            className={`${inputClasses} resize-y`}
          />
        </div>

        {/* Image attachments */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-renity-text">
            Attachments{" "}
            <span className="font-normal text-renity-text-secondary">
              (optional, up to {MAX_IMAGES} images)
            </span>
          </label>

          {images.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-3">
              {images.map((img, i) => (
                <div key={i} className="group relative">
                  <div className="h-20 w-20 overflow-hidden rounded-lg border border-renity-border">
                    <Image
                      src={img.preview}
                      alt={img.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-renity-error text-[10px] text-white shadow-sm transition-opacity hover:opacity-80"
                    aria-label={`Remove ${img.name}`}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {images.length < MAX_IMAGES && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={compressing}
              className="inline-flex items-center gap-2 rounded-lg border border-dashed border-renity-border px-4 py-2.5 text-sm text-renity-text-secondary transition-colors hover:border-renity-primary hover:text-renity-primary disabled:opacity-50"
            >
              {compressing ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                  </svg>
                  Compressing…
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                  </svg>
                  Add image
                </>
              )}
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        {/* Hidden fields for compressed image data */}
        {images.map((img, i) => (
          <div key={i} hidden>
            <input type="hidden" name={`attachment-${i}`} value={img.base64} />
            <input type="hidden" name={`attachment-name-${i}`} value={img.name} />
          </div>
        ))}

        {/* Honeypot — hidden from real users, bots auto-fill it */}
        <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {TURNSTILE_SITE_KEY && (
          <div
            ref={turnstileRef}
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-theme="light"
          />
        )}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-lg bg-renity-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? (
            <>
              <svg
                className="-ml-1 mr-2 h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  fill="currentColor"
                  className="opacity-75"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {state.message && (
          <div
            role="alert"
            className={`rounded-lg px-4 py-3 text-sm font-medium ${
              state.success
                ? "bg-renity-success/10 text-renity-success"
                : "bg-renity-error/10 text-renity-error"
            }`}
          >
            {state.message}
          </div>
        )}
      </form>
    </>
  );
}

declare global {
  interface Window {
    turnstile?: {
      reset: (container: HTMLElement) => void;
    };
  }
}
