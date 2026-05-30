"use client";

import { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

interface VideoLightboxProps {
  videoId: string;
  open: boolean;
  onClose: () => void;
}

export default function VideoLightbox({
  videoId,
  open,
  onClose,
}: VideoLightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open || !videoId) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/80" />

      {/* Portrait container sized for phone screen recordings */}
      <div className="relative z-10 h-[85vh] w-full max-w-[min(90vw,480px)]">
        <button
          onClick={onClose}
          className="absolute -top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
          style={{ right: "-18px" }}
          aria-label="Close video"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="h-full w-full overflow-hidden rounded-2xl bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Renity App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
