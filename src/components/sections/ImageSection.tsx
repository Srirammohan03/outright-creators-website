"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    image:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "05",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "06",
    image:
      "https://images.unsplash.com/photo-1574774191469-3d7732e5fc8b?w=900&auto=format&fit=crop&q=60",
  },
  {
    id: "07",
    image:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "08",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
  },
];

function ProjectCard({
  item,
}: {
  item: {
    id: string;
    image: string;
  };
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "20% center"],
  });

  // SCALE BASED ON SCROLL
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // OPTIONAL FADE
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
      }}
      className="relative origin-center"
    >
      {/* IMAGE */}
      <div className="relative h-[500px] overflow-hidden rounded-[8px]">
        <Image
          src={item.image}
          alt={`Project ${item.id}`}
          fill
          className="object-cover"
        />
      </div>

      {/* OUTLINE NUMBER */}
      <h1 className="pointer-events-none absolute right-[10px] bottom-[-15px] text-[180px] leading-none font-black tracking-[-10px] text-transparent select-none [-webkit-text-stroke:2px_#fff]">
        {item.id}
      </h1>
    </motion.div>
  );
}

export default function ImageSection() {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-4">
          {projects.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
