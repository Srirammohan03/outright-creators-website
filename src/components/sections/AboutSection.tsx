"use client";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-6 py-24 font-sans text-[#f4f4f5] selection:bg-[#E2FF31] selection:text-black md:px-12 lg:px-24">
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#E2FF31] opacity-10 blur-[150px]" />

      <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col gap-20">
        <div className="mt-12 flex flex-col gap-6 uppercase">
          <p className="flex items-center gap-3 text-sm font-medium tracking-widest text-[#E2FF31]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#E2FF31]" />
            Who we are
          </p>
          <h1 className="text-7xl leading-[0.8] font-black tracking-tighter mix-blend-difference md:text-8xl lg:text-[11rem]">
            Digital <br />
            <span className="font-serif font-light text-[#71717A] italic">
              Alchemists.
            </span>
          </h1>
        </div>

        <div className="relative flex w-full overflow-x-hidden border-y border-zinc-800 py-8">
          <div className="hover:animation-paused flex w-max animate-[marquee_20s_linear_infinite] items-center gap-12 text-3xl font-bold tracking-tight whitespace-nowrap text-zinc-600 uppercase md:text-5xl">
            <span>Growth</span> <span className="text-[#E2FF31]">✦</span>
            <span>Performance</span> <span className="text-[#E2FF31]">✦</span>
            <span>Branding</span> <span className="text-[#E2FF31]">✦</span>
            <span>SEO</span> <span className="text-[#E2FF31]">✦</span>
            <span>Social</span> <span className="text-[#E2FF31]">✦</span>
            <span>Growth</span> <span className="text-[#E2FF31]">✦</span>
            <span>Performance</span> <span className="text-[#E2FF31]">✦</span>
            <span>Branding</span> <span className="text-[#E2FF31]">✦</span>
            <span>SEO</span> <span className="text-[#E2FF31]">✦</span>
            <span>Social</span> <span className="text-[#E2FF31]">✦</span>
          </div>
        </div>

        <div className="grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/40 p-10 backdrop-blur-sm transition-colors duration-500 hover:bg-zinc-900/80 md:col-span-2 lg:col-span-2">
            <h3 className="max-w-md text-3xl leading-tight font-bold tracking-tight text-zinc-100 md:text-4xl">
              We engineer attention in an era of noise.
            </h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-400">
              Based in the digital ether, our agency blends data science with
              unapologetic creativity to scale modern brands to the moon.
            </p>
            <div className="absolute right-0 bottom-0 translate-y-8 p-10 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E2FF31] text-xl text-black">
                ↗
              </div>
            </div>
          </div>

          <div className="col-span-1 flex cursor-pointer flex-col items-start justify-center gap-4 rounded-3xl border border-[#E2FF31] bg-[#E2FF31] p-10 text-black transition-transform duration-500 hover:scale-[0.98]">
            <span className="text-7xl font-black tracking-tighter">10x</span>
            <span className="pr-4 text-xl leading-tight font-semibold">
              Average ROAS for our partners in Q1
            </span>
          </div>

          <div className="group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/40 p-10 backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 transform bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-opacity duration-700 ease-out group-hover:scale-110 group-hover:opacity-50" />
            <div className="relative z-10 flex flex-col">
              <span className="text-xl font-semibold text-zinc-200">
                Culturally connected.
              </span>
              <span className="text-md mt-1 text-zinc-500">
                Our global footprint.
              </span>
            </div>
          </div>

          <div className="group relative col-span-1 flex flex-col items-start justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/40 p-12 md:col-span-3 md:flex-row md:items-center lg:col-span-4">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white opacity-5 blur-[100px] transition-opacity duration-700 group-hover:opacity-10" />
            <h2 className="z-10 text-5xl font-black tracking-tighter text-zinc-100 md:text-7xl">
              Let's build <br /> the future.
            </h2>
            <button className="z-10 mt-12 flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-bold tracking-widest text-black uppercase transition-colors duration-300 hover:bg-[#E2FF31] md:mt-0">
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
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `,
        }}
      />
    </section>
  );
};

export default AboutSection;
