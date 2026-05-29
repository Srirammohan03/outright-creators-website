"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollVideoSection from "../motion/ScrollVideoSection";
import { services } from "../data/service";
import ServiceCard from "../common/ServiceCard";
import TextReveal from "../motion/TextReveal";

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
    <section className="relative py-32" style={{ background: "#f5f3ef" }}>
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
            <div className="my-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
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

            <ServiceCard
              key={services[0].id}
              service={services[0]}
              index={services[0].id}
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
                  <div
                    key={item.id}
                    className="group relative aspect-[4/3] w-full overflow-hidden bg-black/5 md:aspect-square lg:aspect-[4/3]"
                  >
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

                    <div className="pointer-events-none flex flex-col justify-end bg-black/40 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="translate-y-4 text-xl font-bold tracking-tight text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
                        {item.title}
                      </span>
                      <span className="mt-2 translate-y-4 text-xs font-medium tracking-wider text-white/70 uppercase transition-transform delay-75 duration-500 ease-out group-hover:translate-y-0">
                        {item.type === "image" ? "AI Design" : "Motion Graphic"}
                      </span>
                    </div>
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
