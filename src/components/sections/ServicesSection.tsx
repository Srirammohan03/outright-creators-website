"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity Design",
    subtitle: "Logo · Visual System · Guidelines",
    description:
      "We craft brand identities that are impossible to ignore. From mark to motion, every element is built to communicate with precision.",
    tags: ["Logo Design", "Brand Guidelines", "Visual System"],
  },
  {
    number: "02",
    title: "UI / UX Design",
    subtitle: "Web · App · Interface",
    description:
      "Interfaces that feel inevitable. We design digital experiences where every interaction is considered and every pixel earns its place.",
    tags: ["Web Design", "App Design", "Prototyping"],
  },
  {
    number: "03",
    title: "Print & Packaging",
    subtitle: "Tactile · Bold · Memorable",
    description:
      "Design that survives the physical world. We create packaging and print work that commands attention on any shelf, in any hand.",
    tags: ["Packaging", "Editorial", "Print"],
  },
  {
    number: "04",
    title: "Social Media Creatives",
    subtitle: "Content · Campaigns · Templates",
    description:
      "Scroll-stopping content built for the feed. We design digital assets that make your brand impossible to scroll past.",
    tags: ["Social Content", "Ad Creatives", "Templates"],
  },
  {
    number: "05",
    title: "Motion Graphics",
    subtitle: "Animation · Video · Transitions",
    description:
      "Still design in motion. We bring brands to life through animation that adds dimension without losing the original vision.",
    tags: ["Animation", "After Effects", "Video"],
  },
  {
    number: "06",
    title: "Illustration & Artwork",
    subtitle: "Custom · Hand-crafted · Unique",
    description:
      "Art made for your world. Every illustration is custom-built for your brand — no templates, no shortcuts, no compromise.",
    tags: ["Custom Illustration", "Character Design", "Artwork"],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  const delay = `${index * 80}ms`;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: inView ? delay : "0ms",
        transform: inView
          ? "translateY(0) skewY(0deg)"
          : "translateY(60px) skewY(1.5deg)",
        opacity: inView ? 1 : 0,
      }}
      className="group relative cursor-pointer border-b border-white/10 transition-all duration-700 ease-out"
    >
      <div
        style={{
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
        }}
        className="pointer-events-none absolute inset-0 z-0 bg-white transition-transform duration-500 ease-out"
      />

      <div className="relative z-10 container grid grid-cols-12 items-start gap-4 py-8 md:py-10">
        <div className="col-span-12 md:col-span-1">
          <span
            className="subtitle font-mono text-xs tracking-widest transition-colors duration-300"
            style={{ color: hovered ? "#000" : "rgba(255,255,255,0.3)" }}
          >
            {service.number}
          </span>
        </div>

        <div className="col-span-12 md:col-span-5">
          <h3
            className="heading text-2xl leading-tight font-bold tracking-tight transition-colors duration-300 md:text-3xl"
            style={{ color: hovered ? "#000" : "#fff" }}
          >
            {service.title}
          </h3>
          <p
            className="subheading mt-1 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300"
            style={{
              color: hovered ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.35)",
            }}
          >
            {service.subtitle}
          </p>
        </div>

        <div className="col-span-12 md:col-span-4">
          <p
            className="subtitle text-sm leading-relaxed font-light transition-colors duration-300"
            style={{
              color: hovered ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.55)",
            }}
          >
            {service.description}
          </p>
        </div>

        <div className="col-span-12 flex flex-wrap gap-2 md:col-span-2 md:items-start md:justify-end">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="border px-2 py-1 text-[10px] tracking-widest uppercase transition-all duration-300"
              style={{
                borderColor: hovered
                  ? "rgba(0,0,0,0.2)"
                  : "rgba(255,255,255,0.15)",
                color: hovered ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute top-1/2 right-6 hidden -translate-y-1/2 md:block">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transform: hovered ? "translate(4px,-4px)" : "translate(0,0)",
              opacity: hovered ? 1 : 0,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              color: "#000",
            }}
          >
            <path
              d="M2 14L14 2M14 2H5M14 2V11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerInView, setHeaderInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setScrollY(-rect.top * 0.08);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(255,255,255,0.02) 0%, transparent 60%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.025) 0%, transparent 50%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
        style={{ height: "100%", transform: `translateY(${scrollY}px)` }}
      />

      <div ref={headerRef} className="container pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="grid grid-cols-12 items-end gap-4">
          <div className="col-span-12 md:col-span-8">
            <div
              style={{
                transform: headerInView ? "translateX(0)" : "translateX(-40px)",
                opacity: headerInView ? 1 : 0,
                transition:
                  "transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.8s ease",
              }}
            >
              <p className="subtitle mb-5 font-mono text-xs tracking-[0.35em] text-white/30 uppercase">
                What We Do
              </p>
              <h2
                className="heading leading-none font-bold tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                Services
                <br />
                <span
                  className="font-light text-white/20 italic"
                  style={{ fontStyle: "italic" }}
                >
                  &amp; Craft
                </span>
              </h2>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div
              style={{
                transform: headerInView ? "translateY(0)" : "translateY(20px)",
                opacity: headerInView ? 1 : 0,
                transition:
                  "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, opacity 0.8s ease 0.2s",
              }}
            >
              <p className="subheading mb-6 text-sm leading-relaxed font-light text-white/40">
                Six disciplines. One obsession — making your brand impossible to
                ignore. Hover any service to explore.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-xs tracking-widest text-white/20">
                  06
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        {services.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>

      <div className="container py-14">
        <div
          className="flex flex-col items-start justify-between gap-6 border border-white/10 p-8 md:flex-row md:items-center"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div>
            <h4 className="heading mb-1 text-xl font-bold text-white">
              Not sure where to start?
            </h4>
            <p className="subtitle text-sm text-white/40">
              Tell us about your project and we will find the right fit.
            </p>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-3 border border-white bg-white px-7 py-3.5 text-sm font-bold tracking-widest text-black uppercase transition-all duration-300 hover:bg-black hover:text-white"
          >
            Start a Project
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path
                d="M2 14L14 2M14 2H5M14 2V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
