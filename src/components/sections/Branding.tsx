"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ScrollVideoSection from "../motion/ScrollVideoSection";
import { services } from "../data/service";
import ServiceCard from "../common/ServiceCard";
import TextReveal from "../motion/TextReveal";
import PremiumServiceSections from "./ServicesSections";

const stats = [
  { value: "120+", label: "Brand Identities" },
  { value: "98%", label: "Client Retention" },
  { value: "12", label: "Awwwards Sites" },
  { value: "6yr", label: "Crafting Motion" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We dig into your brand DNA — competitive landscape, audience psychology, and the emotional territory you want to own.",
  },
  {
    step: "02",
    title: "Motion Language",
    desc: "We define a proprietary motion grammar: easing curves, timing signatures, and kinetic metaphors unique to your brand.",
  },
  {
    step: "03",
    title: "Production",
    desc: "From storyboard to final render — 3D animation, visual FX, and brand films crafted frame by frame.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Export-ready assets, interaction specs, and a living style guide so your team can scale the system independently.",
  },
];

const capabilities = [
  { label: "Social Media Grids & Campaigns", width: "96%" },
  { label: "AI-Powered Creative Design", width: "92%" },
  { label: "Web Banner Design", width: "88%" },
  { label: "Logo & Brochure Design", width: "94%" },
  { label: "Standee & Flyer Design", width: "90%" },
  { label: "Business Cards & Letterheads", width: "93%" },
  { label: "Brand Books & Merchandise", width: "86%" },
  { label: "Packaging & Bottle Design", width: "84%" },
  { label: "Shop Branding & Signage", width: "91%" },
  { label: "Billboards & Outdoor Ads", width: "89%" },
  { label: "YouTube Thumbnails & Banners", width: "95%" },
];

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
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, margin: "-80px" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Branding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-10"
      style={{ background: "#f5f3ef" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 72px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 72px)`,
        }}
      />

      <div className="flex flex-col gap-5">
        <div key={services[0].id}>
          {/* <ScrollVideoSection
            video={services[0].scrubVideo}
            title={services[0].title}
          /> */}

          <div className="container">
            {/* ── HERO HEADER ── */}
            <div className="my-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="mb-6 flex items-center gap-4"
                >
                  <div className="h-px w-10 bg-black/20" />
                  <img src="/assets/bulb.svg" alt="Bulb" className="h-6 w-6" />
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-black/40 uppercase">
                    Branding
                  </span>
                </motion.div>

                <div
                  className="leading-[0.92] font-black tracking-[-0.05em] text-[#0a0a0a]"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                >
                  <TextReveal
                    lines={["Building Bold", "Branding Systems"]}
                    className="uppercase"
                    highlightWords={["Branding"]}
                    highlightClassName="italic font-medium"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="flex flex-col justify-end"
              >
                <p className="max-w-md text-sm leading-relaxed text-black/45">
                  We create cinematic motion systems that transform static
                  brands into immersive visual experiences — combining
                  animation, storytelling, sound, and interaction into one
                  seamless language.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "3D Animation",
                    "Visual FX",
                    "Brand Films",
                    "Product Reveals",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium text-black/60 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── STATS ROW ── */}
            <FadeUp delay={0}>
              <div className="mb-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] md:grid-cols-4">
                {stats.map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="group flex flex-col items-start gap-1 bg-[#f5f3ef] px-8 py-8 transition-colors duration-300 hover:bg-[#eceae5]"
                  >
                    <span
                      className="font-black tracking-tight text-[#0a0a0a] transition-transform duration-500 group-hover:scale-105"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                      {value}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-black/35 uppercase">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* ── WHAT WE DO ── */}
            <div className="mb-28 grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
              <FadeUp delay={0} className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-6 bg-black/20" />
                  <img src="/assets/bulb.svg" alt="Bulb" className="h-6 w-6" />
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-black/35 uppercase">
                    What We Do
                  </span>
                </div>
                <h2
                  className="mb-6 leading-[0.9] font-black tracking-[-0.04em] text-[#0a0a0a] uppercase"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}
                >
                  Motion is
                  <br />
                  <em className="font-medium text-black/30 not-italic">
                    your brand's
                  </em>
                  <br />
                  first language.
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-black/45">
                  Static identities fade in a scroll-driven world. We engineer
                  dynamic brand systems where every pixel has intention and
                  every transition deepens memory.
                </p>

                <motion.a
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="mt-10 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-black/60 uppercase transition-colors hover:text-black"
                >
                  <span>See Our Work</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              </FadeUp>

              {/* CAPABILITIES BARS */}
              <FadeUp
                delay={0.15}
                className="flex flex-col justify-center gap-5"
              >
                {capabilities.map(({ label, width }, i) => (
                  <div key={label} className="group">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-widest text-black/50 uppercase">
                        {label}
                      </span>
                      <span className="text-[10px] font-medium text-black/30">
                        {width}
                      </span>
                    </div>
                    <div className="h-px w-full bg-black/[0.08]">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        viewport={{ once: true, margin: "-40px" }}
                        className="h-full origin-left bg-[#0a0a0a]"
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </FadeUp>
            </div>

            {/* ── PROCESS ── */}
            <FadeUp delay={0}>
              <div className="mb-10 flex items-center gap-4">
                <div className="h-px w-8 bg-black/20" />
                <img src="/assets/bulb.svg" alt="Bulb" className="h-6 w-6" />
                <span className="text-[10px] font-semibold tracking-[0.3em] text-black/35 uppercase">
                  Our Process
                </span>
              </div>
            </FadeUp>

            <div className="mb-28 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] md:grid-cols-2 lg:grid-cols-4">
              {process.map(({ step, title, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="group relative flex flex-col gap-4 overflow-hidden bg-[#f5f3ef] px-7 py-8 transition-colors duration-300 hover:bg-[#eceae5]"
                >
                  <span className="text-[56px] leading-none font-black tracking-[-0.05em] text-black/[0.04] transition-all duration-500 group-hover:text-black/[0.07]">
                    {step}
                  </span>
                  <div className="mt-auto">
                    <div className="mb-2 h-px w-8 bg-black/15 transition-all duration-300 group-hover:w-14" />
                    <h3 className="mb-2 text-sm font-bold tracking-tight text-[#0a0a0a]">
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed text-black/40">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── MANIFESTO MARQUEE ── */}
            <FadeUp delay={0}>
              <div className="relative mb-28 overflow-hidden border-y border-black/[0.06] py-6">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex whitespace-nowrap"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 pr-8">
                      {[
                        "Brands That Move",
                        "—",
                        "Stories In Motion",
                        "—",
                        "Identity Systems",
                        "—",
                        "Cinematic Worlds",
                        "—",
                        "Visual Language",
                        "—",
                      ].map((text, j) => (
                        <span
                          key={j}
                          className={`text-xs font-semibold tracking-[0.25em] uppercase ${
                            text === "—" ? "text-black/15" : "text-black/30"
                          }`}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </FadeUp>

            {/* ── FEATURED QUOTE ── */}
            <div className="mb-28">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-80px" }}
                className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] px-10 py-16 md:px-20 md:py-24"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px),
                      repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)`,
                  }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="relative mb-8 max-w-3xl leading-[0.92] font-black tracking-[-0.04em] text-white uppercase"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
                >
                  "A brand that doesn't move is a brand that doesn't breathe."
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="h-px w-8 bg-white/20" />
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-white/30 uppercase">
                    Studio Principle
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* ── SERVICE CARD ── */}
            <PremiumServiceSections
              key={services[3].id}
              section={services[3]}
              index={services[3].index}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
