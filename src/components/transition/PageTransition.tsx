"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CurveTransition from "./CurveTransition";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* The key tells AnimatePresence the route has changed, triggering the Exit phase */}
      <CurveTransition key={pathname}>{children}</CurveTransition>
    </AnimatePresence>
  );
}
