"use client";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8F8F4] px-6 py-24 font-sans text-[#111111] selection:bg-[#111111] selection:text-[#E2FF31] md:px-12 lg:px-24">
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#E2FF31] opacity-30 blur-[150px]" />

      <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col gap-20">
        <div className="mt-12 flex flex-col gap-6 uppercase">
          <p className="flex items-center gap-3 text-sm font-medium tracking-widest text-[#8DA400]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#B7D500]" />
            Who we are
          </p>

          <h1 className="text-7xl leading-[0.8] font-black tracking-tighter md:text-8xl lg:text-[11rem]">
            Digital <br />
            <span className="font-serif font-light text-zinc-400 italic">
              Alchemists.
            </span>
          </h1>
        </div>

        <div className="relative flex w-full overflow-x-hidden border-y border-zinc-300 py-8">
          <div className="hover:animation-paused flex w-max animate-[marquee_20s_linear_infinite] items-center gap-12 text-3xl font-bold tracking-tight whitespace-nowrap text-zinc-400 uppercase md:text-5xl">
            <span>Motion Graphics</span>
            <span className="text-[#B7D500]">✦</span>

            <span>Google Ads</span>
            <span className="text-[#B7D500]">✦</span>

            <span>Web Design & Development</span>
            <span className="text-[#B7D500]">✦</span>

            <span>App Development</span>
            <span className="text-[#B7D500]">✦</span>

            <span>Seo Optimization</span>
            <span className="text-[#B7D500]">✦</span>

            <span>Social Media Management</span>
            <span className="text-[#B7D500]">✦</span>
          </div>
        </div>

        <div className="grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 p-10 shadow-[0_10px_50px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-500 hover:bg-white md:col-span-2 lg:col-span-2">
            <h3 className="max-w-md text-3xl leading-tight font-bold tracking-tight text-zinc-900 md:text-4xl">
              We engineer attention in an era of noise.
            </h3>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-500">
              Based in the digital ether, our agency blends data science with
              unapologetic creativity to scale modern brands to the moon.
            </p>

            <div className="absolute right-0 bottom-0 translate-y-8 p-10 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-xl text-white">
                ↗
              </div>
            </div>
          </div>

          <div className="col-span-1 flex cursor-pointer flex-col items-start justify-center gap-4 rounded-3xl border border-[#D7F000] bg-[#E2FF31] p-10 text-black shadow-[0_10px_50px_rgba(226,255,49,0.25)] transition-transform duration-500 hover:scale-[0.98]">
            <span className="text-7xl font-black tracking-tighter">10x</span>

            <span className="pr-4 text-xl leading-tight font-semibold">
              Average ROAS for our partners in Q1
            </span>
          </div>

          <div className="group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 p-10 shadow-[0_10px_50px_rgba(0,0,0,0.04)] backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 transform bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop')] bg-cover bg-center opacity-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-30" />

            <div className="relative z-10 flex flex-col">
              <span className="text-xl font-semibold text-zinc-900">
                Culturally connected.
              </span>

              <span className="text-md mt-1 text-zinc-500">
                Our global footprint.
              </span>
            </div>
          </div>

          <div className="group relative col-span-1 flex flex-col items-start justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-[#111111] p-12 shadow-[0_10px_60px_rgba(0,0,0,0.08)] md:col-span-3 md:flex-row md:items-center lg:col-span-4">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white opacity-10 blur-[100px] transition-opacity duration-700 group-hover:opacity-20" />

            <h2 className="z-10 text-5xl font-black tracking-tighter text-white md:text-7xl">
              Let's build <br /> the future.
            </h2>

            <button className="z-10 mt-12 flex items-center gap-3 rounded-full bg-[#E2FF31] px-10 py-5 text-sm font-bold tracking-widest text-black uppercase transition-all duration-300 hover:scale-105 hover:bg-white md:mt-0">
              Start a Project
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

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
