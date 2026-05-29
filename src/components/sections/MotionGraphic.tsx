"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollVideoSection from "../motion/ScrollVideoSection";
import TextReveal from "../motion/TextReveal";
import ScrollImageSequence from "../motion/ScrollImageSequence";
import PremiumServiceSections from "./ServicesSections";
import { services } from "../data/service";

const portfolioMedia = [
  {
    id: 1,
    type: "image",
    src: "https://gh22.codebydennis.com/media/pages/work/easports-fgs22/5ad0b217eb-1728463388/fnatic-crops-1080x-q72.jpg",
    title: "AI Generated Abstract",
  },
  {
    id: 2,
    type: "image",
    src: "https://gh22.codebydennis.com/media/pages/work/future-goals/32d00e5416-1728463381/billboard-mockup-2-1440x-q72.jpg",
    title: "Kinetic Typography",
  },
  {
    id: 3,
    type: "image",
    src: "https://gh22.codebydennis.com/media/pages/work/knvb-25-years-of-just-doing-it/4f5faaddb9-1728463379/thumb-2-1080x-q72.jpg",
    title: "3D Product Render",
  },
  {
    id: 4,
    type: "image",
    src: "https://gh22.codebydennis.com/media/pages/work/future-goals/e2ab33fde1-1728463383/logo-board-2-1080x-q72.jpg",
    title: "Motion Identity",
  },
];

export default function MotionGraphic() {
  return (
    <section className="relative py-10" style={{ background: "#f5f3ef" }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 72px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 72px)`,
        }}
      />

      <div className="flex flex-col gap-5">
        <div key={services[0].id}>
          <div className="relative z-10 container">
            <div className="my-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="mb-6 flex items-center gap-4"
                >
                  <div className="h-px w-10 bg-black/20" />
                  <img src="/assets/bulb.svg" alt="Bulb" className="h-6 w-6" />
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-black/40 uppercase">
                    Motion Graphics
                  </span>
                </motion.div>

                <div
                  className="leading-[0.92] font-black tracking-[-0.05em] text-[#0a0a0a]"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 6rem)",
                  }}
                >
                  <TextReveal
                    lines={["Crafting Stories", "In Motion"]}
                    className="uppercase"
                    highlightWords={["Motion"]}
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
                    "AI Concept Design",
                    "Generative Art",
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

            <PremiumServiceSections
              index={services[0].index}
              section={services[0]}
            />

            <div className="mt-40 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col items-center justify-center text-center"
              >
                <h3 className="mb-4 text-3xl font-black tracking-tighter text-[#0a0a0a] uppercase md:text-5xl">
                  Featured AI & Motion Design
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-black/50">
                  Explore our curated collection of AI-generated concepts and
                  cinematic motion layouts. Each piece showcases the
                  intersection of advanced algorithms and human-driven
                  storytelling.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {portfolioMedia.map((item, i) => (
                  <div key={item.id} className="space-y-4">
                    {/* IMAGE / VIDEO */}
                    <div className="group relative aspect-4/3 w-full overflow-hidden bg-black/5 md:aspect-square lg:aspect-4/4">
                      {item.type === "image" ? (
                        <motion.img
                          initial={{ scale: 1.5 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 1.2,
                            ease: [0.76, 0, 0.24, 1],
                            delay: i * 0.15,
                          }}
                          viewport={{ once: true, margin: "-100px" }}
                          src={item.src}
                          alt={item.title}
                          className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                        />
                      ) : (
                        <motion.video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          initial={{ scale: 1.5 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 1.2,
                            ease: [0.76, 0, 0.24, 1],
                            delay: i * 0.15,
                          }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                        />
                      )}

                      {/* REVEAL LAYER */}
                      <motion.div
                        initial={{ y: "0%" }}
                        whileInView={{ y: "-101%" }}
                        transition={{
                          duration: 1.2,
                          ease: [0.76, 0, 0.24, 1],
                          delay: i * 0.15,
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="absolute inset-0 z-10 bg-[#0a0a0a]"
                      />
                    </div>

                    {/* CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1],
                        delay: i * 0.15 + 0.25,
                      }}
                      viewport={{ once: true }}
                      className="flex items-end justify-between gap-4"
                    >
                      <div>
                        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-black">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[12px] font-medium tracking-[0.18em] text-black/50 uppercase">
                          {item.type === "image"
                            ? "AI Design"
                            : "Motion Graphic"}
                        </p>
                      </div>

                      <span className="text-sm text-black/30">0{i + 1}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
