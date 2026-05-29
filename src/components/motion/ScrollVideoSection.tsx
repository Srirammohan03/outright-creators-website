"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  video: string;
  title: string;
};

export default function ScrollVideoSection({ video, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateVideo = () => {
      const duration = video.duration;

      if (!duration) return;

      const unsubscribe = scrollYProgress.on("change", (progress) => {
        video.currentTime = duration * progress;
      });

      return unsubscribe;
    };

    video.addEventListener("loadedmetadata", updateVideo);

    return () => {
      video.removeEventListener("loadedmetadata", updateVideo);
    };
  }, [scrollYProgress]);

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 0, 0, 1],
  );

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      {/* STICKY FULLSCREEN VIDEO */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/40"
        />

        {/* TITLE */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h2
            className="text-center font-black tracking-[-0.05em] text-white uppercase"
            style={{
              fontSize: "clamp(4rem, 10vw, 10rem)",
              lineHeight: 0.9,
            }}
          >
            {title}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
