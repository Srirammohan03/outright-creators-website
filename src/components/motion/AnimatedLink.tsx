"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface AnimatedLinkProps {
  title: string;
  className?: string;
  textClassName?: string;
  hoverTextClassName?: string;
}

const AnimatedLink = ({
  title,
  className,
  textClassName,
  hoverTextClassName,
}: AnimatedLinkProps) => {
  const letters = title.split("");

  const transition = {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      animate="initial"
      className={cn(
        "inline-flex cursor-pointer overflow-hidden leading-none",
        className,
      )}
    >
      <div className="relative inline-flex overflow-hidden pb-[0.12em]">
        {/* TOP TEXT */}
        <div className="inline-flex">
          {letters.map((char, index) => (
            <motion.span
              key={`top-${index}`}
              variants={{
                initial: {
                  y: "0%",
                },
                hover: {
                  y: "-100%",
                },
              }}
              transition={{
                ...transition,
                delay: index * 0.035,
              }}
              className={cn(
                "inline-block will-change-transform",
                textClassName,
              )}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="absolute top-0 left-0 inline-flex">
          {letters.map((char, index) => (
            <motion.span
              key={`bottom-${index}`}
              variants={{
                initial: {
                  y: "100%",
                },
                hover: {
                  y: "0%",
                },
              }}
              transition={{
                ...transition,
                delay: index * 0.035,
              }}
              className={cn(
                "inline-block will-change-transform",
                hoverTextClassName,
              )}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedLink;
