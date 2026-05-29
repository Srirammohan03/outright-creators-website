import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem = {
  type: "video" | "image";
  src: string;
  thumb?: string;
  label: string;
};

type MediaGridProps = {
  items: MediaItem[];
};

export default function MediaGrid({ items }: MediaGridProps) {
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handleMouseEnter = (idx: number, item: MediaItem) => {
    if (item.type === "video" && videoRefs.current[idx]) {
      videoRefs.current[idx]?.play();
    }
  };

  const handleMouseLeave = (idx: number, item: MediaItem) => {
    if (item.type === "video" && videoRefs.current[idx] && playing !== idx) {
      videoRefs.current[idx]?.pause();
      if (videoRefs.current[idx]) videoRefs.current[idx]!.currentTime = 0;
    }
  };

  return (
    <>
      <div className="grid h-full grid-cols-2 gap-3">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#f0ede8]"
            style={{ aspectRatio: "16/10" }}
            onMouseEnter={() => handleMouseEnter(idx, item)}
            onMouseLeave={() => handleMouseLeave(idx, item)}
            onClick={() => item.type === "video" && setPlaying(idx)}
          >
            {item.type === "video" ? (
              <>
                <img
                  src={item.thumb}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={item.src}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a0a] transition-opacity duration-300 group-hover:opacity-0"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="white"
                    >
                      <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute top-2.5 right-2.5">
                  <span className="rounded-full bg-[#0a0a0a] px-2 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase">
                    VIDEO
                  </span>
                </div>
              </>
            ) : (
              <img
                src={item.src}
                alt={item.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 transition-opacity duration-300 group-hover:opacity-30" />

            <div className="absolute right-0 bottom-0 left-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-semibold tracking-wide text-white">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {playing !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background: "rgba(10,10,10,0.88)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setPlaying(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative mx-6 w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={items[playing]?.src}
                autoPlay
                controls
                className="h-auto w-full"
                style={{ maxHeight: "80vh" }}
              />
              <button
                onClick={() => setPlaying(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
