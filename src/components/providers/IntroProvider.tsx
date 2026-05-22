"use client";

import { AnimatePresence } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import IntroScreen from "../common/IntroScreen";

const IntroProvider = ({ children }: { children: ReactNode }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const introPlayed = sessionStorage.getItem("intro-played");

    if (!introPlayed) {
      setShowIntro(true);
      sessionStorage.setItem("intro-played", "true");
    }

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
      {children}
    </>
  );
};

export default IntroProvider;
