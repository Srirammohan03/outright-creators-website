"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#400830]"
    >
      <div className="overflow-hidden pb-2 md:pb-4">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="text-4xl font-light tracking-[-0.08em] text-white md:text-8xl"
        >
          outright creators
        </motion.h1>
      </div>

      <div className="mt-2 overflow-hidden md:mt-4">
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          className="text-xs font-medium tracking-[0.3em] text-white/80 uppercase md:text-sm"
        >
          Digital Marketing Agency
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
