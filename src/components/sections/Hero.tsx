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
      <div className="flex flex-col text-7xl leading-none font-semibold text-black uppercase">
        {["Creative", "Digital", "Agency"].map((word, index) => {
          const customDelay = baseDelay + index * 0.3; // Stagger the delay for each word
          return (
            <motion.div
              key={index}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={customDelay}
              className="overflow-hidden"
            >
              <motion.span
                variants={textVariant}
                initial="hidden"
                animate="visible"
                custom={customDelay + 0.15} // Slightly delay the span animation
                className="inline-block"
              >
                {word}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
