"use client";

import Image from "next/image";
import TextReveal from "../motion/TextReveal";

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-16 md:py-24">
      <div className="container">
        <div className="relative z-10 flex flex-col gap-16 md:gap-24">
          {/* Heading */}
          <div className="flex flex-col gap-6 uppercase">
            <div className="subtitle flex items-center gap-3">
              <div className="flex h-4 w-4 items-center rounded-sm">
                <Image
                  src="/lamp.png"
                  alt="lamp"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              Creative Marketing Studio
            </div>

            <h1 className="heading">
              <TextReveal lines={["Graphic", "Storytellers"]} />
            </h1>
          </div>

          {/* Marquee */}
          <div className="relative flex w-full overflow-hidden border-y border-zinc-200 py-6 md:py-8">
            <div className="hover:animation-paused flex w-max animate-[marquee_20s_linear_infinite] items-center gap-10 text-2xl font-bold tracking-tight whitespace-nowrap text-zinc-400 uppercase md:gap-14 md:text-5xl">
              <span>Brand Identity</span>
              <span>✦</span>

              <span>Creative Campaigns</span>
              <span>✦</span>

              <span>Social Media Design</span>
              <span>✦</span>

              <span>Motion Graphics</span>
              <span>✦</span>

              <span>Packaging Design</span>
              <span>✦</span>

              <span>Digital Experiences</span>
              <span>✦</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:auto-rows-[320px] md:grid-cols-3 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:bg-white md:col-span-2">
              <div>
                <h3 className="max-w-xl text-3xl leading-tight font-bold tracking-tight text-black md:text-5xl">
                  We create visuals that make brands unforgettable.
                </h3>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-500 md:text-lg">
                  From strategy to execution, we design bold marketing
                  experiences that connect audiences with modern brands across
                  every platform.
                </p>
              </div>

              <div className="absolute right-8 bottom-8 translate-y-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl text-white">
                  ↗
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-span-1 flex flex-col items-start justify-center rounded-[2rem] border border-zinc-200 bg-black p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[0.98]">
              <span className="text-6xl font-black tracking-[-0.08em] md:text-8xl">
                300+
              </span>

              <span className="mt-4 max-w-[220px] text-lg leading-tight font-semibold md:text-xl">
                successful campaigns launched worldwide
              </span>
            </div>

            {/* Card 3 */}
            <div className="group relative col-span-1 overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 p-8 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:opacity-25" />

              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="text-2xl font-semibold text-black">
                  Design-driven.
                </span>

                <span className="mt-2 text-zinc-500">
                  Built for ambitious brands.
                </span>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="group relative col-span-1 flex flex-col items-start justify-between overflow-hidden rounded-[2rem] bg-black p-10 md:col-span-3 md:flex-row md:items-center lg:col-span-4 lg:p-14">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-[120px]" />

              <h2 className="relative z-10 text-4xl leading-none font-black text-white md:text-6xl lg:text-7xl">
                Let’s craft <br /> your next big idea.
              </h2>

              <button className="relative z-10 mt-10 rounded-full border border-white bg-white px-8 py-4 text-sm font-bold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-white md:mt-0">
                Start a Project →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            .hover\\:animation-paused:hover {
              animation-play-state: paused;
            }
          `,
        }}
      />
    </section>
  );
};

export default AboutSection;
