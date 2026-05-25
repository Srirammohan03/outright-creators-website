"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  lines: string[];
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export default function TextReveal({
  lines,
  className = "",
  highlightWords = [],
  highlightClassName = "font-normal italic",
}: TextRevealProps) {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariant = {
    hidden: {
      y: "115%",
      rotate: 4,
      opacity: 0,
    },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px -50px 0px",
      }}
      className={`flex flex-col ${className}`}
    >
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex flex-wrap items-center overflow-hidden py-1"
        >
          {line.split(" ").map((word, wordIndex) => {
            const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
            const isHighlighted = highlightWords.includes(cleanWord);

            return (
              <div
                key={wordIndex}
                className="relative -mb-2 -ml-1 inline-block overflow-hidden pr-[0.35em] pb-2 pl-1"
                style={{ verticalAlign: "top" }}
              >
                <motion.span
                  variants={wordVariant}
                  className={`inline-block origin-left ${
                    isHighlighted ? highlightClassName : ""
                  }`}
                >
                  {word}
                </motion.span>
              </div>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}
