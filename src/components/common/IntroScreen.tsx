"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.85,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const line = {
  hidden: {
    y: "120%",
    opacity: 0,
  },

  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    y: "-120%",
    opacity: 0,
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: "0%" }}
      exit={{
        y: "-100%",
        transition: {
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.25,
        },
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#400830]"
    >
      <div className="relative flex w-full max-w-[1400px] flex-col items-center justify-center px-6 text-center md:px-12">
        {/* top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -40,
            transition: {
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2,
          }}
          className="mb-8 flex items-center gap-3 overflow-hidden"
        >
          <span className="h-2 w-2 rounded-full bg-[#E2FF31]" />

          <p className="text-[11px] font-medium tracking-[0.35em] text-white/60 uppercase md:text-xs">
            Creative • Digital • Agency
          </p>
        </motion.div>

        {/* main title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "120%" }}
            animate={{ y: "0%" }}
            exit={{
              y: "-120%",
              opacity: 0,
              transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.15,
            }}
            className="text-center text-[2.8rem] leading-none font-semibold tracking-[-0.08em] text-white sm:text-[4rem] md:text-[7rem] lg:text-[9rem]"
          >
            Outright Creators
          </motion.h1>
        </div>

        {/* animated words */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="mt-8 flex flex-col items-center gap-3 overflow-hidden"
        >
          {["Strategic", "Innovate", "Excellence"].map((word, index) => (
            <div key={index} className="overflow-hidden leading-none">
              <motion.span
                variants={line}
                className="block text-[1.1rem] font-light tracking-[-0.04em] text-white/70 md:text-[1.8rem]"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{
            scaleX: 0,
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
            delay: 1.2,
          }}
          className="mt-12 h-px w-full max-w-[220px] origin-left bg-white/20"
        />
      </div>
    </motion.div>
  );
};

export default IntroScreen;
