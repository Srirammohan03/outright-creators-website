"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollVideoSection from "../motion/ScrollVideoSection";
import { services } from "../data/service";
import ServiceCard from "../common/ServiceCard";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const RevealLine = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "105%" }}
      whileInView={{ y: "0%" }}
      transition={{ duration: 1, delay, ease }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  </div>
);

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay, ease }}
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay, ease }}
    viewport={{ once: true, margin: "-40px" }}
    className={className}
  >
    {children}
  </motion.div>
);

const ScaleReveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay, ease }}
    viewport={{ once: true, margin: "-60px" }}
    className={className}
  >
    {children}
  </motion.div>
);

const festivalImages = [
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    alt: "Festival crowd energy",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    alt: "Festival lights and celebration",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
    alt: "Festival music and performance",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80",
    alt: "Festival stage design",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80",
    alt: "Graphic design workspace creative",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80",
    alt: "Colorful creative design",
    aspect: "aspect-[4/5]",
  },
];

const deliverables = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Event Posters",
    desc: "Print-ready A0–A5 posters with bleed, colour profiles for offset & digital — delivered within 48 hours.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: "Social Media Kits",
    desc: "Reels covers, Stories, carousels, and countdown graphics — sized for every platform in one drop.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Stage & Backdrop Design",
    desc: "High-resolution stage backdrops, LED wall art, and branded banners built for large-format printing.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Countdown Creatives",
    desc: "Animated teasers, motion graphics, and date-reveal posts that build hype weeks before the event.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Sponsorship Decks",
    desc: "Beautifully designed sponsorship proposal decks that convert brands into festival partners.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
      </svg>
    ),
    title: "Brand Identity for Events",
    desc: "Full visual identity systems — colour palettes, typography, icons, and wristband/ticket design for new festivals.",
  },
];

const festivalTypes = [
  "Music Festivals",
  "Cultural Fairs",
  "Navratri & Garba",
  "Diwali Events",
  "Christmas Markets",
  "Food Festivals",
  "Tech Summits",
  "College Fests",
  "Film Festivals",
  "Sports Events",
  "New Year Parties",
  "Corporate Events",
];

const stats = [
  { val: "500+", label: "Festival Campaigns Delivered" },
  { val: "48hr", label: "Average Turnaround" },
  { val: "12+", label: "Event Categories Served" },
  { val: "100%", label: "Print-Ready Output" },
];

const faqs = [
  {
    q: "How early should we reach out before our festival?",
    a: "We recommend 4–6 weeks before your event for full identity work. For poster-only packages we can turn around in 48–72 hours.",
  },
  {
    q: "Do you handle both print and digital formats?",
    a: "Yes — every deliverable comes in both screen-optimised digital files and CMYK print-ready PDFs with bleed marks and colour profiles.",
  },
  {
    q: "Can you match our existing brand guidelines?",
    a: "Absolutely. Share your brand kit and we build every creative inside your existing system while adding a festival-specific energy layer.",
  },
  {
    q: "What if we need revisions?",
    a: "All packages include three rounds of revisions. We iterate fast — most revision cycles close within 24 hours.",
  },
];

const FestivalCreatives = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-6%", "4%"]);
  const centerScale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32"
      style={{ background: "#f5f3ef" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 72px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 72px)`,
        }}
      />

      <div className="pointer-events-none absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="flex flex-col gap-5">
        <div key={services[2]?.id ?? "festival"}>
          {/* <ScrollVideoSection
            video={services[2]?.scrubVideo}
            title={services[2]?.title}
          /> */}

          <div className="container">
            <section className="overflow-hidden">
              <div className="mx-auto max-w-[1500px] px-8">
                <div className="grid min-h-screen grid-cols-1 items-center lg:grid-cols-[280px_minmax(500px,760px)_280px]">
                  {/* LEFT COLUMN */}
                  <div className="relative hidden h-[760px] lg:block">
                    {/* TOP SMALL */}
                    <img
                      src="http://thedamai.codebydennis.com/media/pages/home/a8bdf3c9a8-1703172456/fire-zoomed-540x720-crop-q72.jpg"
                      className="absolute top-0 -right-6 h-[190px] w-[140px] object-cover"
                    />

                    {/* BOTTOM LARGE */}
                    <img
                      src="https://thedamai.codebydennis.com/media/pages/home/798d7876d9-1703172459/kien-the-damai-90-540x720-crop-q72.jpg"
                      className="absolute bottom-0 left-0 h-[430px] w-[300px] object-cover"
                    />
                  </div>

                  {/* CENTER CONTENT */}
                  <div className="flex flex-col items-center text-center">
                    {/* ORNAMENT */}
                    <h1 className="max-w-[760px] font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.06em] text-[#3A241C]">
                      Festival creatives
                      <br />
                      that stay remembered
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-10 max-w-[500px] text-[16px] leading-[1.8] text-[#7D7069]">
                      From cinematic event visuals to immersive digital
                      campaigns, we craft festival creatives that capture
                      attention, elevate your brand presence, and create
                      unforgettable audience experiences across every platform.
                    </p>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="relative hidden h-[760px] lg:block">
                    {/* TOP LARGE */}
                    <img
                      src="https://thedamai.codebydennis.com/media/pages/home/0cc51997c9-1703172459/kien-the-damai-72-540x720-crop-q72.jpg"
                      className="absolute top-0 right-0 h-[430px] w-[300px] object-cover"
                    />

                    {/* BOTTOM SMALL */}
                    <img
                      src="https://thedamai.codebydennis.com/media/pages/home/798d7876d9-1703172459/kien-the-damai-90-540x720-crop-q72.jpg"
                      className="absolute bottom-0 -left-6 h-[190px] w-[140px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* ══════════════════════════════════════
                SECTION 1 — BILLBOARD HERO + IMAGE COLUMNS
            ══════════════════════════════════════ */}
            {/* <div className="relative mb-32">
              <div className="hidden lg:block">
                <motion.div
                  ref={leftColRef}
                  style={{ y: leftY }}
                  className="absolute top-0 left-0 flex w-[22%] flex-col gap-4"
                >
                  {festivalImages.slice(0, 3).map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.9, delay: i * 0.14, ease }}
                      viewport={{ once: true }}
                      className={`w-full overflow-hidden rounded-2xl ${img.aspect} shadow-[0_8px_40px_rgba(0,0,0,0.08)]`}
                    >
                      <motion.img
                        src={img.src}
                        alt={img.alt}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease }}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  ref={rightColRef}
                  style={{ y: rightY }}
                  className="absolute top-8 right-0 flex w-[22%] flex-col gap-4"
                >
                  {festivalImages.slice(3, 6).map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: i * 0.14 + 0.1,
                        ease,
                      }}
                      viewport={{ once: true }}
                      className={`w-full overflow-hidden rounded-2xl ${img.aspect} shadow-[0_8px_40px_rgba(0,0,0,0.08)]`}
                    >
                      <motion.img
                        src={img.src}
                        alt={img.alt}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease }}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                style={{ scale: centerScale }}
                className="relative mx-auto flex flex-col items-center px-4 text-center lg:w-[52%] lg:px-0"
              >
                <FadeIn delay={0}>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-px w-8 bg-black/15" />
                    <span className="text-[10px] font-semibold tracking-[0.35em] text-black/35 uppercase">
                      Festival Creatives
                    </span>
                    <div className="h-px w-8 bg-black/15" />
                  </div>
                </FadeIn>

                <div
                  style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)" }}
                  className="mb-6"
                >
                  <RevealLine delay={0.05}>
                    <span className="block leading-[0.88] font-black tracking-[-0.05em] text-[#0a0a0a] uppercase">
                      Every
                    </span>
                  </RevealLine>
                  <RevealLine delay={0.13}>
                    <span className="block leading-[0.88] font-black tracking-[-0.05em] text-[#0a0a0a] uppercase">
                      Festival
                    </span>
                  </RevealLine>
                  <RevealLine delay={0.21}>
                    <span className="block leading-[0.88] font-black tracking-[-0.05em] text-black/15 uppercase">
                      Deserves
                    </span>
                  </RevealLine>
                  <RevealLine delay={0.29}>
                    <span className="block leading-[0.88] font-black tracking-[-0.05em] text-[#0a0a0a] uppercase">
                      Great Art.
                    </span>
                  </RevealLine>
                </div>

                <FadeUp delay={0.4}>
                  <p className="mb-8 max-w-sm text-sm leading-relaxed text-black/45">
                    We design the visuals that make people save the date, share
                    the poster, and show up. From first teaser to post-event
                    recap — we are your creative team.
                  </p>
                </FadeUp>

                <FadeUp delay={0.5}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#0a0a0a] px-7 py-3.5 text-[11px] font-bold tracking-[0.18em] text-white uppercase transition-opacity hover:opacity-80"
                    >
                      Start Your Project
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-[11px] font-semibold tracking-[0.15em] text-black/50 uppercase transition-colors hover:border-black/25 hover:text-black/70"
                    >
                      View Portfolio
                    </motion.a>
                  </div>
                </FadeUp>

                <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.04] sm:grid-cols-4">
                  {stats.map(({ val, label }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.5 + i * 0.08,
                        ease,
                      }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-1 bg-white px-5 py-5 text-left transition-colors hover:bg-black/[0.015]"
                    >
                      <span className="text-xl font-black tracking-tight text-[#0a0a0a]">
                        {val}
                      </span>
                      <span className="text-[9px] leading-snug font-semibold tracking-[0.2em] text-black/30 uppercase">
                        {label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden">
                  {festivalImages.map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease }}
                      viewport={{ once: true }}
                      className="h-24 w-24 overflow-hidden rounded-xl shadow-md"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div> */}

            {/* ══════════════════════════════════════
                SECTION 2 — WHAT WE CREATE (DELIVERABLES)
            ══════════════════════════════════════ */}
            <div className="my-32">
              <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
                <FadeUp delay={0}>
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="h-px w-6 bg-black/15" />
                      <span className="text-[10px] font-semibold tracking-[0.3em] text-black/30 uppercase">
                        What We Create
                      </span>
                    </div>
                    <h2
                      className="leading-[0.9] font-black tracking-[-0.04em] text-[#0a0a0a] uppercase"
                      style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                      Everything Your
                      <br />
                      <span className="text-black/20">Event Needs.</span>
                    </h2>
                  </div>
                </FadeUp>
                <FadeUp delay={0.15}>
                  <p className="max-w-xs text-sm leading-relaxed text-black/40">
                    One team, every format — so your festival looks cohesive
                    across every touchpoint.
                  </p>
                </FadeUp>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.04] sm:grid-cols-2 lg:grid-cols-3">
                {deliverables.map(({ icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.08, ease }}
                    viewport={{ once: true, margin: "-40px" }}
                    className="group flex flex-col gap-4 bg-white p-7 transition-colors duration-300 hover:bg-[#f9f8f6]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.07] bg-[#f5f3ef] text-black/50 transition-all duration-300 group-hover:border-black/10 group-hover:bg-[#ece9e3] group-hover:text-black/70">
                        {icon}
                      </div>
                      <span className="text-3xl leading-none font-black tracking-[-0.06em] text-black/[0.04] transition-all duration-300 group-hover:text-black/[0.08]">
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <div className="mb-1.5 h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-12" />
                      <h3 className="mb-2 text-sm font-bold text-[#0a0a0a]">
                        {title}
                      </h3>
                      <p className="text-xs leading-relaxed text-black/40">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════════
                SECTION 3 — MARQUEE TICKER
            ══════════════════════════════════════ */}
            <FadeIn delay={0}>
              <div className="relative mb-32 overflow-hidden border-y border-black/40 py-5">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex whitespace-nowrap"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 pr-8">
                      {festivalTypes.concat(festivalTypes).map((t, j) => (
                        <span
                          key={j}
                          className="text-[16px] font-semibold tracking-[0.28em] text-black/40 uppercase"
                        >
                          {t}
                          <span className="ml-8 text-black/40">·</span>
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </FadeIn>

            {/* ══════════════════════════════════════
                SECTION 4 — EDITORIAL BENTO / HOW WE WORK
            ══════════════════════════════════════ */}
            <div className="mb-32">
              <FadeUp delay={0}>
                <div className="mb-10 flex items-center gap-3">
                  <div className="h-px w-6 bg-black/15" />
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-black/30 uppercase">
                    How We Work
                  </span>
                </div>
              </FadeUp>

              <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                <ScaleReveal
                  delay={0}
                  className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl bg-[#0a0a0a] lg:col-span-1"
                >
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                      alt="Festival event creative process"
                      className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                  </div>
                  <div className="relative flex h-full min-h-[380px] flex-col justify-end p-8">
                    <span className="mb-3 text-6xl leading-none font-black tracking-[-0.06em] text-white/[0.08]">
                      01
                    </span>
                    <div className="mb-2 h-px w-8 bg-white/15" />
                    <h3 className="mb-3 text-lg leading-tight font-black tracking-tight text-white">
                      Brief & Discovery
                    </h3>
                    <p className="text-xs leading-relaxed text-white/45">
                      We start with a 30-min kickoff — your event story,
                      audience, vibe, and references. Everything we need to
                      design with intent.
                    </p>
                  </div>
                </ScaleReveal>

                <FadeUp
                  delay={0.1}
                  className="col-span-1 overflow-hidden rounded-3xl border border-black/[0.06] bg-[#f9f8f6] p-8 lg:col-span-2"
                >
                  <span className="mb-4 block text-5xl leading-none font-black tracking-[-0.06em] text-black/[0.06]">
                    02
                  </span>
                  <div className="mb-2 h-px w-8 bg-black/10" />
                  <h3 className="mb-3 text-base font-black tracking-tight text-[#0a0a0a]">
                    Concept & Moodboard
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-black/40">
                    Within 24 hours we present two distinct creative directions
                    — colour worlds, typography pairings, and layout references.
                    You choose one, we refine it to perfection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Colour Direction",
                      "Typography",
                      "Layout References",
                      "Tone of Voice",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/[0.07] px-3 py-1 text-[9px] font-semibold tracking-widest text-black/30 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeUp>

                <FadeUp
                  delay={0.18}
                  className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-8"
                >
                  <span className="mb-4 block text-5xl leading-none font-black tracking-[-0.06em] text-black/[0.05]">
                    03
                  </span>
                  <div className="mb-2 h-px w-8 bg-black/10" />
                  <h3 className="mb-3 text-base font-black tracking-tight text-[#0a0a0a]">
                    Design & Iterate
                  </h3>
                  <p className="text-xs leading-relaxed text-black/40">
                    First drafts in 48 hours. Three revision rounds included. We
                    move fast without cutting corners — every pixel has a
                    reason.
                  </p>
                </FadeUp>

                <FadeUp
                  delay={0.26}
                  className="overflow-hidden rounded-3xl bg-[#0a0a0a] p-8"
                >
                  <span className="mb-4 block text-5xl leading-none font-black tracking-[-0.06em] text-white/[0.07]">
                    04
                  </span>
                  <div className="mb-2 h-px w-8 bg-white/10" />
                  <h3 className="mb-3 text-base font-black tracking-tight text-white">
                    Deliver & Launch
                  </h3>
                  <p className="text-xs leading-relaxed text-white/40">
                    All files handed over in a structured Dropbox: print PDFs,
                    web PNGs, editable source files, and a brand usage guide.
                  </p>
                </FadeUp>
              </div>
            </div>

            {/* ══════════════════════════════════════
                SECTION 5 — HORIZONTAL FEATURE BAND
            ══════════════════════════════════════ */}
            <ScaleReveal delay={0}>
              <div className="mb-32 overflow-hidden rounded-3xl border border-black/[0.06]">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[320px] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80"
                      alt="Festival creative design in action"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-t" />
                    <div className="absolute bottom-6 left-6">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-[9px] font-bold tracking-[0.25em] text-black/60 uppercase backdrop-blur">
                        Real Results
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-10 md:p-12">
                    <FadeUp delay={0.1}>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-6 bg-black/15" />
                        <span className="text-[10px] font-semibold tracking-[0.3em] text-black/30 uppercase">
                          Why Brands Choose Us
                        </span>
                      </div>
                    </FadeUp>
                    <FadeUp delay={0.18}>
                      <h2
                        className="mb-5 leading-[0.92] font-black tracking-[-0.04em] text-[#0a0a0a] uppercase"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
                      >
                        Creatives that
                        <br />
                        <span className="text-black/20">people actually</span>
                        <br />
                        share & save.
                      </h2>
                    </FadeUp>
                    <FadeUp delay={0.26}>
                      <p className="mb-7 text-sm leading-relaxed text-black/40">
                        Our festival creatives average a 3.8× higher save rate
                        than industry benchmarks — because we design for emotion
                        first, information second. The poster has to make
                        someone feel something before they read the date.
                      </p>
                    </FadeUp>
                    <FadeUp delay={0.34}>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { v: "3.8×", l: "Higher Save Rate" },
                          { v: "72%", l: "Organic Share Rate" },
                          { v: "48hr", l: "First Draft Delivery" },
                          { v: "3 Rounds", l: "Revisions Included" },
                        ].map(({ v, l }) => (
                          <div key={l}>
                            <div className="text-xl font-black tracking-tight text-[#0a0a0a]">
                              {v}
                            </div>
                            <div className="text-[9px] font-semibold tracking-[0.2em] text-black/30 uppercase">
                              {l}
                            </div>
                          </div>
                        ))}
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </ScaleReveal>

            {/* ══════════════════════════════════════
                SECTION 7 — CTA FULL WIDTH
            ══════════════════════════════════════ */}
            <ScaleReveal delay={0}>
              <div className="relative mb-6 overflow-hidden rounded-3xl bg-[#0a0a0a] px-10 py-16 md:px-20 md:py-24">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 56px),
                      repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 56px)`,
                  }}
                />
                <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-400 opacity-[0.06] blur-[80px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 -translate-x-1/4 translate-y-1/4 rounded-full bg-rose-500 opacity-[0.06] blur-[60px]" />

                <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <FadeUp delay={0.05}>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-6 bg-white/10" />
                        <span className="text-[10px] font-semibold tracking-[0.3em] text-white/25 uppercase">
                          Let's Collaborate
                        </span>
                      </div>
                    </FadeUp>
                    <FadeUp delay={0.12}>
                      <h2
                        className="leading-[0.9] font-black tracking-[-0.04em] text-white uppercase"
                        style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
                      >
                        Your festival,
                        <br />
                        <span className="text-white/20">beautifully</span>
                        <br />
                        designed.
                      </h2>
                    </FadeUp>
                  </div>

                  <FadeUp delay={0.22} className="flex shrink-0 flex-col gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-bold tracking-[0.18em] text-black uppercase hover:opacity-90"
                    >
                      Start Your Project
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="black"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                    <p className="text-center text-[9px] font-medium tracking-wider text-white/20 uppercase">
                      Free consultation · 48hr first draft
                    </p>
                  </FadeUp>
                </div>
              </div>
            </ScaleReveal>

            <ServiceCard
              key={services[2].id}
              service={services[2]}
              index={services[2].id}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalCreatives;
