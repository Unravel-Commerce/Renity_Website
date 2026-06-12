"use client";

import { useWaitlist } from "../WaitlistProvider";

interface JoinWaitlistButtonProps {
  className?: string;
}

export default function JoinWaitlistButton({
  className = "",
}: JoinWaitlistButtonProps) {
  const { openWaitlist } = useWaitlist();

  return (
    <button
      type="button"
      onClick={openWaitlist}
      className={`inline-flex items-center justify-center rounded-lg bg-renity-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary ${className}`}
    >
      Join the waitlist
    </button>
  );
}
