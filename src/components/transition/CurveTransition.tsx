"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const routes: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/contact": "Contact",
};

const anim = (variants: any) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

export const text = {
  initial: {
    opacity: 1,
    top: "40%",
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "47.5%" },
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

export const curveVariant = (initialPath: string, targetPath: string) => ({
  initial: { d: initialPath },
  enter: {
    d: targetPath,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    d: initialPath,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
});

export const translate = {
  initial: { top: "-300px" },
  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "100vh" },
  },
  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      {...anim(translate)}
      className="pointer-events-none fixed top-0 left-0 z-10000 w-screen"
      style={{ height: "calc(100vh + 600px)" }}
    >
      <motion.path
        {...anim(curveVariant(initialPath, targetPath))}
        fill="#ffffff"
      />
    </motion.svg>
  );
};

export default function CurveTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="relative flex-1">
      <div
        style={{ opacity: dimensions.width === null ? 1 : 0 }}
        className="pointer-events-none fixed top-0 left-0 z-9998 h-[calc(100vh+600px)] w-screen bg-white transition-opacity duration-100 ease-linear"
      />

      <motion.p
        className="pointer-events-none fixed left-1/2 z-10001 -translate-x-1/2 text-center text-5xl font-bold text-black capitalize"
        {...anim(text)}
      >
        {routes[pathname] || pathname.replace("/", "") || "Home"}
      </motion.p>

      {dimensions.width !== null && dimensions.height !== null && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}

      {children}
    </main>
  );
}
