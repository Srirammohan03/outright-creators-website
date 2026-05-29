"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  folder: string;
  totalFrames: number;
  title?: string;
  className?: string;
};

export default function ScrollImageSequence({
  folder,
  totalFrames,
  title,
  className = "",
}: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);

  const currentFrameRef = useRef(1);

  const loadedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: false,
    });

    if (!ctx) return;

    // =========================================
    // RETINA CANVAS
    // =========================================

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;

      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;

      canvas.style.height = `${window.innerHeight}px`;

      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    // =========================================
    // FRAME PATH
    // =========================================

    const getFramePath = (index: number) => {
      return `${folder}/frame_${String(index).padStart(4, "0")}.webp`;
    };

    // =========================================
    // PRELOAD IMAGES
    // =========================================

    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();

      img.src = getFramePath(i);

      images.push(img);
    }

    imagesRef.current = images;

    // =========================================
    // DRAW IMAGE
    // =========================================

    const drawImageCover = (img: HTMLImageElement) => {
      if (!img.complete) return;

      const canvasWidth = window.innerWidth;

      const canvasHeight = window.innerHeight;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const imageAspect = img.width / img.height;

      const canvasAspect = canvasWidth / canvasHeight;

      let renderWidth = canvasWidth;

      let renderHeight = canvasHeight;

      let offsetX = 0;

      let offsetY = 0;

      if (imageAspect > canvasAspect) {
        renderHeight = canvasHeight;

        renderWidth = canvasHeight * imageAspect;

        offsetX = (canvasWidth - renderWidth) / 2;
      } else {
        renderWidth = canvasWidth;

        renderHeight = canvasWidth / imageAspect;

        offsetY = (canvasHeight - renderHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    // =========================================
    // INITIAL FRAME
    // =========================================

    images[0].onload = () => {
      loadedRef.current = true;

      drawImageCover(images[0]);
    };

    // =========================================
    // GSAP SCRUB
    // =========================================

    const frameState = {
      frame: 1,
    };

    const animation = gsap.to(frameState, {
      frame: totalFrames,

      snap: "frame",

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: "bottom bottom",

        scrub: 0.15,

        invalidateOnRefresh: true,
      },

      onUpdate: () => {
        const frameIndex = Math.min(
          totalFrames,
          Math.max(1, Math.round(frameState.frame)),
        );

        if (frameIndex === currentFrameRef.current) return;

        currentFrameRef.current = frameIndex;

        const img = imagesRef.current[frameIndex - 1];

        if (!img) return;

        drawImageCover(img);
      },
    });

    // =========================================
    // RESIZE
    // =========================================

    const handleResize = () => {
      setCanvasSize();

      const currentImage = imagesRef.current[currentFrameRef.current - 1];

      if (currentImage) {
        drawImageCover(currentImage);
      }

      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // =========================================
    // CLEANUP
    // =========================================

    return () => {
      animation.kill();

      window.removeEventListener("resize", handleResize);
    };
  }, [folder, totalFrames]);

  return (
    <section ref={sectionRef} className={`relative h-[500vh] ${className}`}>
      {/* STICKY CANVAS */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <canvas ref={canvasRef} className="block h-full w-full" />

        {/* TITLE */}
        {title && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h2
              className="text-center font-black tracking-[-0.05em] text-white uppercase"
              style={{
                fontSize: "clamp(4rem, 10vw, 10rem)",
                lineHeight: 0.9,
              }}
            >
              {title}
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}
