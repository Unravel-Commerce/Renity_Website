"use client";

import { useState } from "react";
import Image from "next/image";
import VideoLightbox from "../ui/VideoLightbox";

const YOUTUBE_VIDEO_ID = "gqfMTNeLhxE";

export default function PhoneMockup() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasVideo = YOUTUBE_VIDEO_ID.length > 0;

  return (
    <>
      <div className="w-[200px] shrink-0 sm:w-[240px] md:w-[260px]">
        <button
          type="button"
          onClick={() => hasVideo && setLightboxOpen(true)}
          className={`group relative w-full ${hasVideo ? "cursor-pointer" : "cursor-default"}`}
          aria-label={hasVideo ? "Play demo video" : "Demo video coming soon"}
        >
          <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-renity-dark bg-renity-dark shadow-md sm:rounded-[2.5rem] sm:border-[6px]">
            <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-renity-dark sm:h-6 sm:w-28 sm:rounded-b-2xl" />

            <div
              className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-renity-primary via-renity-secondary to-renity-primary/60"
              style={{ aspectRatio: "9 / 19.5" }}
            >
              <div className="absolute inset-x-0 bottom-[7%] flex flex-col items-center">
                <Image
                  src="/Renity_Logo_Primery_withh_text_center.png"
                  alt=""
                  width={100}
                  height={30}
                  className="h-8 w-auto opacity-80"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                {hasVideo ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f2ed] shadow-lg transition-transform group-hover:scale-110">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5 text-renity-primary"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                ) : (
                  <div className="mt-16 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-renity-primary shadow-lg">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>

            <div className="mx-auto my-1.5 h-1 w-20 rounded-full bg-white/30 sm:my-2 sm:w-28" />
          </div>
        </button>
      </div>

      <VideoLightbox
        videoId={YOUTUBE_VIDEO_ID}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
