"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "../motion/TextReveal";

const projects = [
  {
    id: 1,
    title: "Bloom Cafe",
    category: "Branding",
    metric: "40% increase in brand recall",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    title: "Fintech App UI",
    category: "UI/UX",
    metric: "2.5x faster onboarding",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    colSpan: "col-span-1",
  },
  {
    id: 3,
    title: "EcoPack",
    category: "Print",
    metric: "Awarded Sustainable Design 2024",
    image:
      "https://images.unsplash.com/photo-1596464971569-32210332d163?auto=format&fit=crop&q=80&w=800",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    title: "Kinetic Studio",
    category: "Motion",
    metric: "1.2M+ campaign impressions",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    colSpan: "col-span-1 md:col-span-2",
  },
];

const categories = [
  "All",
  "Social Media",
  "AI",
  "Web Banners",
  "Branding",
  "Youtube Thumbnails",
  "Print",
  "Motion",
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter,
  );

  return (
    <section className="section text-black">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <TextReveal
            lines={["Work we're", "proud to put our name on."]}
            className="heading"
          />
        </div>

        {/* Filters - Responsive Swipe-friendly Horizontal Bar */}
        <div className="mb-12 scrollbar-none overflow-x-auto pb-3">
          <div className="flex w-max gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-black text-white shadow-sm"
                    : "border border-zinc-200/80 bg-white text-zinc-700 hover:bg-zinc-100 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Asymmetric */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              href={`/work/${project.id}`}
              key={project.id}
              className={`group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-950 md:aspect-auto md:h-[450px] ${project.colSpan}`}
            >
              {/* Image Container with Subtle Zoom */}
              <div className="absolute inset-0 h-full w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="cubic-bezier(0.16, 1, 0.3, 1) object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                {/* Fixed Background Fallback Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Dynamic Overlay Slide-Up Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-2 transform transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                    {project.category}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {project.title}
                  </h3>

                  {/* Result/Metric Badge Container */}
                  <div className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 opacity-0 backdrop-blur-md transition-all delay-75 duration-500 group-hover:opacity-100">
                    <p className="text-xs font-semibold tracking-wide text-white">
                      {project.metric}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Call-To-Action Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg"
          >
            View All Work
            <svg
              className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
