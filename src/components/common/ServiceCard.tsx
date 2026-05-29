import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SplitTextReveal from "../motion/SplitTextReveal";
import MediaGrid from "./MediaGrid";
import type { ServiceItem } from "../data/service";

export default function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-black/8 lg:grid-cols-[1fr_1.5fr]"
      style={{ background: "#ffffff" }}
    >
      <div className="flex flex-col justify-between border-b border-black/6 p-8 lg:border-r lg:border-b-0 lg:p-10">
        <div>
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs font-medium tracking-[0.3em] text-black/25">
              {service.index}
            </span>
            <div className="mx-6 h-px flex-1 bg-black/8" />
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{
                delay: 0.3 + index * 0.05,
                type: "spring",
                stiffness: 300,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]"
            />
          </div>

          <div className="mb-10 overflow-hidden">
            <h3
              className="leading-[0.95] font-black tracking-[-0.03em] text-[#0a0a0a]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              <SplitTextReveal
                text={service.title}
                delay={0.1 + index * 0.03}
              />
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.03, duration: 0.6 }}
              className="mt-2 text-sm font-light tracking-wide text-black/35 italic"
            >
              {service.tagline}
            </motion.p>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
                  className="rounded-full border border-black/10 bg-[#f7f5f2] px-3 py-1.5 text-xs font-medium text-black/60"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
              Features
            </p>
            <div className="space-y-2.5">
              {service.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-3 w-px flex-shrink-0 bg-black/20" />
                  <span className="text-sm text-black/55">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
            Team
          </p>
          <div className="flex items-center gap-3">
            {service.persons.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0a0a0a] text-[10px] font-bold text-white">
                  {p
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-xs font-medium text-black/40">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#faf9f7] p-8 lg:p-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
            Portfolio
          </p>
          <span className="font-mono text-[10px] text-black/20">
            {service.media.length} works
          </span>
        </div>
        <MediaGrid items={service.media} />
      </div>
    </motion.div>
  );
}

`
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SplitTextReveal from "../motion/SplitTextReveal";
import MediaGrid from "./MediaGrid";

type ServiceItem = {
  id: number;
  index: string;
  title: string;
  tagline: string;
  tech: string[];
  features: string[];
  persons: string[];
  media: (
    | {
        type: string;
        src: string;
        thumb: string;
        label: string;
      }
    | {
        type: string;
        src: string;
        label: string;
        thumb?: undefined;
      }
  )[];
};

export default function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-black/8 lg:grid-cols-[1fr_1.5fr]"
      style={{ background: "#ffffff" }}
    >
      <div className="flex flex-col justify-between border-b border-black/6 p-8 lg:border-r lg:border-b-0 lg:p-10">
        <div>
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs font-medium tracking-[0.3em] text-black/25">
              {service.index}
            </span>
            <div className="mx-6 h-px flex-1 bg-black/8" />
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{
                delay: 0.3 + index * 0.05,
                type: "spring",
                stiffness: 300,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]"
            />
          </div>

          <div className="mb-10 overflow-hidden">
            <h3
              className="leading-[0.95] font-black tracking-[-0.03em] text-[#0a0a0a]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              <SplitTextReveal
                text={service.title}
                delay={0.1 + index * 0.03}
              />
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.03, duration: 0.6 }}
              className="mt-2 text-sm font-light tracking-wide text-black/35 italic"
            >
              {service.tagline}
            </motion.p>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
                  className="rounded-full border border-black/10 bg-[#f7f5f2] px-3 py-1.5 text-xs font-medium text-black/60"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
              Features
            </p>
            <div className="space-y-2.5">
              {service.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-3 w-px flex-shrink-0 bg-black/20" />
                  <span className="text-sm text-black/55">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
            Team
          </p>
          <div className="flex items-center gap-3">
            {service.persons.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0a0a0a] text-[10px] font-bold text-white">
                  {p
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-xs font-medium text-black/40">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#faf9f7] p-8 lg:p-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-black/30 uppercase">
            Portfolio
          </p>
          <span className="font-mono text-[10px] text-black/20">
            {service.media.length} works
          </span>
        </div>
        <MediaGrid items={service.media} />
      </div>
    </motion.div>
  );
}

`;
