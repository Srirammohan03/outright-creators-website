"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import TextReveal from "../motion/TextReveal";
import { Sparkles, X } from "lucide-react";

type AssetType = "video" | "image" | "pdf" | "logo";

type ShowcaseItem = {
  id: string;
  title: string;
  type: AssetType;
  thumbnail: string;
  caption: string;
  description: string;
  youtubeId?: string;
  fileLabel?: string;
};

type ServiceSection = {
  id: string;
  title: string;
  label: string;
  labelImage?: string;
  description: string;
  tech: { name: string; icon: string }[];
  features: string[];
  clients: string[];
  assets: ShowcaseItem[];
};

const sections: ServiceSection[] = [
  {
    id: "graphic-design",
    label: "Graphic Design",
    labelImage: "/assets/graphic-design.png",
    title: "Premium identity systems built for luxury brands",
    description:
      "From packaging to campaign visuals, every asset is designed to feel refined, elevated, and unmistakably yours.",
    tech: [
      { name: "Adobe Photoshop", icon: "/assets/Photoshop.jpg" },
      { name: "Adobe Premiere Pro", icon: "/assets/pr.jpg" },
      { name: "Adobe After Effects", icon: "/assets/AfterEffect.jpg" },
      { name: "Adobe Illustrator", icon: "/assets/RedirectNotice.jpg" },
      { name: "Canva", icon: "/assets/canva.webp" },
    ],
    features: [
      "Logo systems",
      "Packaging design",
      "Brand guidelines",
      "Print collateral",
    ],
    clients: ["Luma House", "Nova Collective", "Cerulean Labs", "Aura Studios"],
    assets: [
      {
        id: "graphic-video-1",
        title: "Brand debut reel",
        type: "video",
        thumbnail: "/header-image-1.webp",
        caption: "Video case study",
        description: "A cinematic reveal for a high-end brand launch.",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "graphic-image-1",
        title: "Edition cover",
        type: "image",
        thumbnail: "/header-image-2.webp",
        caption: "Premium editorial layout",
        description: "Visual treatment for a limited release campaign.",
      },
      {
        id: "graphic-pdf-1",
        title: "Print brochure",
        type: "pdf",
        thumbnail: "/header-image-3.webp",
        caption: "Brochure concept",
        description: "A tactile print system for launch events.",
        fileLabel: "Brochure PDF",
      },
      {
        id: "graphic-logo-1",
        title: "Logo network",
        type: "logo",
        thumbnail: "/header-image-4.webp",
        caption: "Brand mark suite",
        description: "Flexible logo lockups for digital and print.",
      },
    ],
  },
  {
    id: "motion-design",
    label: "Motion Design",
    labelImage: "/assets/MotionDesign.jpg",
    title: "High-end animation for new product launches",
    description:
      "Motion that feels polished but powerful — built to keep pace with premium storytelling and product momentum.",
    tech: [
      { name: "Adobe After Effects", icon: "/assets/AfterEffect.jpg" },
      { name: "Adobe Premiere Pro", icon: "/assets/pr.jpg" },
      { name: "Animate cc", icon: "/assets/Animate.jpg" },
      { name: "Canva", icon: "/assets/canva.webp" },
    ],
    features: [
      "Launch reels",
      "UI motion",
      "Explainer films",
      "Animated transitions",
    ],
    clients: ["Pulse Media", "Frost Labs", "Rise Digital", "Eclipse Studio"],
    assets: [
      {
        id: "motion-video-1",
        title: "Launch animation",
        type: "video",
        thumbnail: "/header-image-3.webp",
        caption: "Dynamic product film",
        description: "A launch sequence with premium motion detail.",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "motion-image-1",
        title: "Motion storyboard",
        type: "image",
        thumbnail: "/header-image-1.webp",
        caption: "Animation concept frames",
        description: "Storyboard visuals for a campaign narrative.",
      },
      {
        id: "motion-pdf-1",
        title: "Presentation deck",
        type: "pdf",
        thumbnail: "/header-image-2.webp",
        caption: "Campaign overview",
        description: "Strategy and motion direction in a branded deck.",
        fileLabel: "Deck PDF",
      },
      {
        id: "motion-logo-1",
        title: "Motion identity",
        type: "logo",
        thumbnail: "/header-image-4.webp",
        caption: "Animated mark set",
        description: "A motion-ready identity system for screen.",
      },
    ],
  },
  {
    id: "social-media",
    label: "Social Media",
    labelImage: "/assets/Sociaal.jpg",
    title: "Scroll-stopping content for modern feeds",
    description:
      "We create premium posts, ads, and video content that performs beautifully on every platform.",
    tech: [
      { name: "Instagram", icon: "/assets/insta.jpg" },
      { name: "FaceBook", icon: "/assets/FaceBook.jpg" },
      { name: "Google Ads", icon: "/assets/Google-ads.jpg" },
      { name: "YouTube", icon: "/assets/youtube.jpg" },
    ],
    features: [
      "Feed sets",
      "Reels templates",
      "Ad design",
      "Campaign storytelling",
    ],
    clients: ["Glow Agency", "Vivid Co.", "Canvas Creative", "Aurora Brands"],
    assets: [
      {
        id: "social-video-1",
        title: "Reel spotlight",
        type: "video",
        thumbnail: "/header-image-2.webp",
        caption: "Platform-ready reel",
        description: "A polished vertical video designed for engagement.",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "social-image-1",
        title: "Carousel concept",
        type: "image",
        thumbnail: "/header-image-4.webp",
        caption: "Social carousel",
        description: "Story-led content for a product launch.",
      },
      {
        id: "social-pdf-1",
        title: "Campaign blueprint",
        type: "pdf",
        thumbnail: "/header-image-1.webp",
        caption: "Media strategy PDF",
        description: "A brand-first social plan for maximum reach.",
        fileLabel: "Campaign PDF",
      },
      {
        id: "social-logo-1",
        title: "Brand badge",
        type: "logo",
        thumbnail: "/header-image-3.webp",
        caption: "Platform-ready marks",
        description: "Social-first brand assets for every format.",
      },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    labelImage: "/assets/Branding.jpg",
    title: "Logo design, brochures, printing and brand systems",
    description:
      "Every brand moment is built so it looks exceptional across print, packaging, digital, and physical experiences.",
    tech: [
      { name: "Adobe Photoshop", icon: "/assets/Photoshop.jpg" },
      { name: "Adobe Illustrator", icon: "/assets/RedirectNotice.jpg" },
      { name: "Canva", icon: "/assets/canva.webp" },
      { name: "Figma", icon: "/assets/figma.jpg" },
      { name: "CorelDRAW", icon: "/assets/coreldraw.jpg" },
    ],
    features: ["Logo design", "Brochures", "Printing", "Collateral systems"],
    clients: ["Atlas Works", "Mint House", "Studio Nine", "Pulse Brands"],
    assets: [
      {
        id: "brand-video-1",
        title: "Launch signature",
        type: "video",
        thumbnail: "/header-image-4.webp",
        caption: "Identity reveal",
        description: "A brand film introducing a new visual universe.",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        id: "brand-image-1",
        title: "Brochure spread",
        type: "image",
        thumbnail: "/header-image-1.webp",
        caption: "Premium printed spread",
        description: "A brochure layout made for luxury brands.",
      },
      {
        id: "brand-pdf-1",
        title: "Print guide",
        type: "pdf",
        thumbnail: "/header-image-2.webp",
        caption: "Brand standards",
        description: "A printing-ready PDF with every asset included.",
        fileLabel: "Guide PDF",
      },
      {
        id: "brand-logo-1",
        title: "Mark system",
        type: "logo",
        thumbnail: "/header-image-3.webp",
        caption: "Logo family",
        description: "A complete symbol set for brand consistency.",
      },
    ],
  },
];

const typeLabel = {
  video: "Video",
  image: "Image",
  pdf: "PDF",
  logo: "Brand Asset",
};

function InfiniteSlider({
  items,
  direction = "left",
}: {
  items: ShowcaseItem[];
  direction?: "left" | "right";
}) {
  const duplicated = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((asset, index) => (
          <div
            key={`${asset.id}-${index}`}
            className="group relative h-[270px] w-[260px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/10 to-black/70" />

            <Image
              src={asset.thumbnail}
              alt={asset.title}
              width={700}
              height={700}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 z-30 p-5">
              <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] tracking-[0.3em] text-white uppercase backdrop-blur-md">
                {typeLabel[asset.type]}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {asset.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-white/70">
                {asset.caption}
              </p>
            </div>

            <div className="absolute inset-0 z-20 rounded-[2rem] ring-1 ring-white/10 transition-all duration-500 group-hover:ring-white/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PremiumServiceSections() {
  const [activeAsset, setActiveAsset] = useState<ShowcaseItem | null>(null);

  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_30%)]" />

      <div className="relative z-10 container">
        <div className="space-y-28">
          {sections.map((section, index) => {
            const topRow = section.assets.slice(0, 2);
            const bottomRow = section.assets.slice(2, 4);

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-purple-500/[0.08]" />

                <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
                  {/* LEFT */}
                  <div className="relative border-b border-white/10 p-5 sm:p-8 lg:border-r lg:border-b-0">
                    <div className="mb-3 inline-flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold shadow-2xl shadow-blue-500/30">
                        {section.labelImage ? (
                          <Image
                            src={section.labelImage}
                            alt={section.label}
                            width={100}
                            height={100}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <span>{section.label.slice(0, 1)}</span>
                        )}
                      </div>

                      <div>
                        <p className="text-xs tracking-[0.35em] text-black uppercase">
                          {section.label}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-2xl leading-tight font-semibold tracking-tight text-black md:text-5xl">
                      {section.title}
                    </h2>

                    <p className="mt-2 text-base leading-8 text-black">
                      {section.description}
                    </p>

                    <div className="mt-2 grid gap-2">
                      <div className="rounded-[2rem] p-3">
                        <h3 className="mb-5 text-xs tracking-[0.3em] text-black uppercase">
                          Tools & Technology
                        </h3>

                        <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                          {section.tech.map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center gap-3 px-2 py-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg shadow-sm">
                                <Image
                                  src={item.icon}
                                  alt={item.name}
                                  width={100}
                                  height={100}
                                  className="h-7 w-7 object-contain"
                                />
                              </div>

                              <p className="text-sm font-medium text-black">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="w-fit rounded-2xl p-2">
                        <h3 className="mb-4 text-xs tracking-[0.35em] text-black/60 uppercase">
                          Features
                        </h3>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {section.features.map((feature) => (
                            <div
                              key={feature}
                              className="group flex items-center gap-3 rounded-xl bg-white px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-500">
                                <Sparkles className="h-3.5 w-3.5 text-blue-500 transition-colors duration-300 group-hover:text-white" />
                              </div>

                              <span className="text-sm font-medium text-black/90">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="relative flex flex-col justify-center gap-6 overflow-hidden rounded-2xl">
                    <div className="px-6">
                      <InfiniteSlider items={topRow} direction="left" />
                    </div>

                    <div className="px-6">
                      <InfiniteSlider items={bottomRow} direction="right" />
                    </div>

                    {/* CLICK LAYER */}
                    <div className="absolute inset-0 z-40 grid grid-cols-2 gap-5 px-6 py-10">
                      {[...topRow, ...bottomRow].map((asset) => (
                        <button
                          key={asset.id}
                          type="button"
                          onClick={() => setActiveAsset(asset)}
                          className="rounded-[2rem]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeAsset ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          >
            <div
              className="absolute inset-0"
              onClick={() => setActiveAsset(null)}
            />

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 w-full max-w-[60vw] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050816] shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveAsset(null)}
                className="absolute top-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="h-[60vh] overflow-hidden bg-black">
                {activeAsset.type === "video" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${activeAsset.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                    title={activeAsset.title}
                    className="h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : activeAsset.type === "image" ? (
                  <Image
                    src={activeAsset.thumbnail}
                    alt={activeAsset.title}
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-10 text-center">
                    <div>
                      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-blue-500 text-3xl font-bold">
                        {activeAsset.fileLabel?.slice(0, 1) || "F"}
                      </div>

                      <h3 className="text-3xl font-semibold text-white">
                        {activeAsset.fileLabel || "Document Preview"}
                      </h3>

                      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
                        {activeAsset.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="border-t border-white/10 bg-white/[0.03] px-8 py-8">
                <p className="text-xs tracking-[0.35em] text-white/40 uppercase">
                  {typeLabel[activeAsset.type]}
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                  {activeAsset.title}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-8 text-white/60">
                  {activeAsset.description}
                </p>
              </div> */}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
