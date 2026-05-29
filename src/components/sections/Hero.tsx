"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import ScrollVideoSection from "../motion/ScrollVideoSection";
import { services } from "../data/service";
import ServiceCard from "../common/ServiceCard";

export default function Hero() {
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
          <ScrollVideoSection
            video={services[0].scrubVideo}
            title={services[0].title}
          />
          <div className="container">
            <ServiceCard
              key={services[0].id}
              service={services[0]}
              index={services[0].id}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
