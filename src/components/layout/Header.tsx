// components/layout/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

const navItems = ["Home", "About", "Services", "Collections"];

export default function Header() {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.55)"
            : "rgba(255,255,255,1)",

          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",

          boxShadow: scrolled
            ? "0 10px 40px rgba(0,0,0,0.08)"
            : "0 0px 0px rgba(0,0,0,0)",

          borderColor: scrolled ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.05)",
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 z-50 w-full border-b"
      >
        <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-5 md:h-[84px] md:px-10">
          {/* LOGO */}
          <Link
            href="/"
            className="relative block h-[38px] w-[110px] sm:h-[44px] sm:w-[130px] md:h-[48px] md:w-[140px]"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href="/"
                className="group relative block overflow-hidden text-[16px] font-semibold text-black xl:text-[18px]"
              >
                <div className="relative h-[24px] overflow-hidden">
                  {/* MAIN TEXT */}
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {item}
                  </span>

                  {/* HOVER TEXT */}
                  <span className="absolute top-0 left-0 block translate-y-full text-black/60 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                    {item}
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <button className="group hidden items-center gap-3 md:flex">
              <span className="text-[15px] font-semibold text-black/60">
                Talk to us
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed top-[78px] left-0 z-40 w-full border-b border-black/5 bg-white/90 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-5 py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                  }}
                >
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-black/5 py-5 text-[24px] font-semibold text-black"
                  >
                    {item}

                    <ArrowUpRight size={18} className="text-black/40" />
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE CTA */}
              <button className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-black px-5 py-4 text-white">
                Talk to us
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
