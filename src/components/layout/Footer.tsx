// components/layout/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "Navigation",
    links: ["Home", "About", "Services", "Collections"],
  },
  {
    title: "Company",
    links: ["Pricing", "Privacy Policy", "Terms & Conditions", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-10 lg:py-20">
        {/* TOP */}
        <div className="grid gap-14 border-b border-black/8 pb-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* BRAND */}
          <div className="max-w-[420px]">
            {/* LOGO */}
            <Link href="/" className="relative mb-8 block h-[52px] w-[170px]">
              <Image
                src="/logo.svg"
                alt="Outright Creators"
                fill
                className="object-contain"
              />
            </Link>

            <p className="text-[17px] leading-[1.9] text-black/60">
              We craft futuristic digital experiences that blend creativity,
              innovation, and strategy to elevate ambitious brands in the modern
              online world.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  icon: (
                    <Image
                      src="/assets/FaceBook.jpg"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="h-5 w-5"
                    />
                  ),
                },
                {
                  icon: (
                    <Image
                      src="/assets/Instagram.jpg"
                      alt="Instagram"
                      width={18}
                      height={18}
                      className="h-5 w-5"
                    />
                  ),
                },
                {
                  icon: (
                    <Image
                      src="/assets/LinkedIn.jpg"
                      alt="LinkedIn"
                      width={18}
                      height={18}
                      className="h-5 w-5"
                    />
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <Link
                    href="/"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03] text-black/70 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {navLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-[18px] font-semibold text-black">
                {section.title}
              </h3>

              <div className="flex flex-col gap-4">
                {section.links.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="group flex w-fit items-center gap-2 text-[15px] text-black/60 transition-all duration-300 hover:text-black"
                  >
                    <span>{item}</span>

                    <ArrowUpRight
                      size={15}
                      className="translate-y-[1px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CONTACT + NEWSLETTER */}
          <div>
            <div className="mb-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-500">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-black/40">Phone</p>
                  <p className="font-medium text-black">+91 9014844173</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-500">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-black/40">Email</p>
                  <p className="font-medium break-all text-black">
                    info@outrightcreators.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-500">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-black/40">Location</p>

                  <p className="max-w-[260px] leading-relaxed text-black/70">
                    3rd Floor, Medicherla Towers,
                    <br />
                    Madhapur, Hyderabad - 500081
                  </p>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="rounded-3xl border border-black/8 bg-black/[0.02] p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-yellow-500" />

                <h4 className="font-semibold text-black">Join Newsletter</h4>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-black/50">
                Get updates, premium insights and creative trends directly to
                your inbox.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm transition-all duration-300 outline-none placeholder:text-black/30 focus:border-yellow-400"
                />

                <button className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-black text-sm font-semibold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black">
                  Subscribe
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-black/45">
            © 2026 Outright Creators. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-black/45">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-black"
            >
              Privacy
            </Link>

            <Link
              href="/"
              className="transition-colors duration-300 hover:text-black"
            >
              Terms
            </Link>

            <Link
              href="/"
              className="transition-colors duration-300 hover:text-black"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
