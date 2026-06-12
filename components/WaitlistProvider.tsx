"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import WaitlistDialog from "./sections/WaitlistDialog";

interface WaitlistContextValue {
  openWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function useWaitlist(): WaitlistContextValue {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return ctx;
}

export default function WaitlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openWaitlist = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      {children}
      <WaitlistDialog open={open} onClose={close} />
    </WaitlistContext.Provider>
  );
}
