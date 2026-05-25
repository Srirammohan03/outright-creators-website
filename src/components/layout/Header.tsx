// components/layout/Header.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navItems = ["Home", "About", "Services", "Collections"];

export default function Header() {
  return (
    <header className="fixed top-5 left-1/2 z-50 w-full max-w-[95%] -translate-x-1/2 md:max-w-[900px]">
      <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
        {/* Logo */}
        <Link
          href="/"
          className="relative block h-[42px] w-[120px] sm:h-[48px] sm:w-[140px]"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item, i) => (
            <div key={item}>
              <Link
                href="/"
                className="group flex items-center gap-1 text-[15px] font-bold text-black transition-all hover:opacity-60"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <button className="group flex items-center gap-3">
          <span className="hidden text-[15px] font-semibold text-black/60 md:block">
            Talk to us
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={18} />
          </div>
        </button>
      </div>
    </header>
  );
}
