"use client";

import { motion } from "framer-motion";

const textVariant = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: (customDelay: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: customDelay,
    },
  }),
};

const Hero = () => {
  const baseDelay = 0.75;

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col text-7xl leading-none font-semibold uppercase">
        {/* First Word */}
        <div className="overflow-hidden">
          <motion.span
            custom={baseDelay}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="block"
          >
            Outright
          </motion.span>
        </div>

        {/* Second Word */}
        <div className="overflow-hidden">
          <motion.span
            custom={baseDelay + 0.1}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="block"
          >
            Creators
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
