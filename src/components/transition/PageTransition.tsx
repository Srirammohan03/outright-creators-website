// "use client";

// import { AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import CurveTransition from "./CurveTransition";

// export default function PageTransition({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       {/* The key tells AnimatePresence the route has changed, triggering the Exit phase */}
//       <CurveTransition key={pathname}>{children}</CurveTransition>
//     </AnimatePresence>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const transition = {
  duration: 1,
  ease: [0.76, 0, 0.24, 1],
};

const curve = {
  initial: {
    d: `
      M0 300
      Q720 300 1440 300
      L1440 0
      L0 0
      Z
    `,
  },

  enter: {
    d: `
      M0 300
      Q720 0 1440 300
      L1440 0
      L0 0
      Z
    `,
    transition,
  },

  exit: {
    d: `
      M0 300
      Q720 300 1440 300
      L1440 0
      L0 0
      Z
    `,
    transition,
  },
};

const text = {
  initial: {
    opacity: 0,
    y: 40,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.4,
    },
  },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative min-h-screen overflow-hidden bg-[#d7ff3f]"
      >
        {/* Transition Overlay */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="relative h-full w-full bg-[#d7ff3f]">
            <svg
              className="absolute bottom-[-299px] left-0 h-[300px] w-full"
              viewBox="0 0 1440 300"
              preserveAspectRatio="none"
            >
              <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
                fill="#d7ff3f"
              />
            </svg>
          </div>
        </motion.div>

        {/* Page Content */}
        <motion.div
          variants={text}
          initial="initial"
          animate="enter"
          exit="exit"
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
