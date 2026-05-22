"use client";

import React from "react";
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

const About = () => {
  const baseDelay = 0.75;
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col text-7xl leading-none font-semibold uppercase">
        <div className="overflow-hidden">
          <motion.span
            custom={baseDelay}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="block"
          >
            About
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.span
            custom={baseDelay}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1,
            }}
            className="block"
          >
            Us
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default About;
