"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "../motion/TextReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="relative flex min-h-screen flex-col justify-center pt-36 pb-20">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-10 flex w-fit items-center gap-3"
          >
            <div className="flex h-4 w-4 items-center rounded-sm">
              <Image
                src="/lamp.png"
                alt="lamp"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            <span className="subtitle">Creative Graphic Marketing Agency</span>
          </motion.div>

          {/* Main Content Area */}
          <div>
            <TextReveal
              lines={[
                "We craft powerful",
                "visual campaigns",
                "for modern brands",
              ]}
              className="heading"
              highlightWords={["powerful"]}
              highlightClassName="font-[500] font-serif italic text-accent-color"
            />

            {/* Subtext and Metric Card Container */}
            <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="subheading max-w-[560px]"
              >
                We design, scale, and optimize graphic marketing systems that
                help ambitious businesses dominate attention and grow faster
                online.
              </motion.p>

              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.65,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full max-w-[420px] rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <div>
                    {/* <p className="text-sm font-medium tracking-[0.2em] text-black/40 uppercase">
                      Google Reviews
                    </p> */}

                    <div className="mt-2 flex items-center gap-3">
                      <h2 className="text-4xl leading-none font-bold text-black">
                        4.8
                      </h2>

                      <div className="flex flex-col">
                        <div className="flex text-[18px] leading-none text-black">
                          ★★★★★
                        </div>

                        <p className="mt-1 text-sm text-black/50">
                          (38) reviews
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* GOOGLE ICON */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                    G
                  </div>
                </div>

                {/* BOTTOM TEXT */}
                <p className="mt-6 text-lg leading-snug text-black/70">
                  Trusted by brands worldwide with consistent 5-star feedback
                  and performance-driven results.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
