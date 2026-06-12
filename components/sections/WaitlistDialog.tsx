"use client";

import { useActionState } from "react";
import Modal from "../ui/Modal";
import { joinWaitlist } from "../../app/actions/waitlist";

const initialState = { success: false, message: "" };

interface WaitlistDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function WaitlistDialog({ open, onClose }: WaitlistDialogProps) {
  const [state, formAction, isPending] = useActionState(
    joinWaitlist,
    initialState
  );

  return (
    <Modal open={open} onClose={onClose} labelledBy="waitlist-title">
      {state.success ? (
        <div className="py-4 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-renity-primary/10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-renity-primary"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2
            id="waitlist-title"
            className="mb-2 text-xl font-bold text-renity-text"
          >
            You&rsquo;re on the list!
          </h2>
          <p className="text-sm text-renity-text-secondary">{state.message}</p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-renity-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary"
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <h2
            id="waitlist-title"
            className="mb-2 pr-8 text-xl font-bold text-renity-text sm:text-2xl"
          >
            Be first to get Renity
          </h2>
          <p className="mb-6 text-sm text-renity-text-secondary">
            The app isn&rsquo;t out yet. Join the waitlist and we&rsquo;ll email
            you the moment it lands on the App Store and Google Play.
          </p>

          <form action={formAction} className="space-y-4">
            <div>
              <label
                htmlFor="waitlist-email"
                className="mb-1.5 block text-sm font-medium text-renity-text"
              >
                Email
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-renity-border bg-white px-4 py-3 text-sm text-renity-text placeholder:text-renity-text-secondary/60 transition-colors focus:border-renity-primary focus:outline-none focus:ring-2 focus:ring-renity-primary/20"
              />
            </div>

            {/* Honeypot — hidden from real users, bots auto-fill it */}
            <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
              <label htmlFor="waitlist-website">Website</label>
              <input
                id="waitlist-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex w-full items-center justify-center rounded-lg bg-renity-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-renity-primary disabled:cursor-not-allowed disabled:opacity-60"
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
                  Joining…
                </>
              ) : (
                "Join the waitlist"
              )}
            </button>

            {!state.success && state.message && (
              <p
                role="alert"
                className="rounded-lg bg-renity-error/10 px-4 py-3 text-sm font-medium text-renity-error"
              >
                {state.message}
              </p>
            )}

            <p className="text-center text-xs text-renity-text-secondary">
              We&rsquo;ll only email you about Renity&rsquo;s launch.
              Unsubscribe anytime.
            </p>
          </form>
        </>
      )}
    </Modal>
  );
}
