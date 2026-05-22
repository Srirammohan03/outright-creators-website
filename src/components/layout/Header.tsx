// components/layout/Header.tsx

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";
import AnimatedLink from "../motion/AnimatedLink";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Home",
    href: "/",
    image: "/header-image-1.webp",
  },
  {
    title: "About",
    href: "/about",
    image: "/header-image-2.webp",
  },
  {
    title: "Services",
    href: "/services",
    image: "/header-image-3.webp",
  },
  {
    title: "Contact",
    href: "/contact",
    image: "/header-image-4.webp",
  },
];

const Header = () => {
  const [showSlide, setShowSlide] = useState(false);
  const [activeImage, setActiveImage] = useState(menuItems.length - 1);
  const pathname = usePathname();

  useEffect(() => {
    if (showSlide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSlide]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-9999">
        <div className="px-4 py-4 md:px-8 md:py-6">
          <div className="relative flex h-1.75 items-center justify-between md:h-21">
            {/* LEFT */}
            <button
              onClick={() => setShowSlide(!showSlide)}
              className="relative z-10001 flex items-center gap-3 text-sm font-medium tracking-wide text-black hover:cursor-pointer"
            >
              {/* Animated Icon */}
              <div className="relative flex h-5 w-5 items-center justify-center">
                <motion.span
                  animate={
                    showSlide
                      ? {
                          rotate: 45,
                          y: 0,
                        }
                      : {
                          rotate: 0,
                          y: -4,
                        }
                  }
                  transition={{
                    duration: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={cn("absolute h-[1.6px] w-5 bg-current text-black")}
                />

                <motion.span
                  animate={
                    showSlide
                      ? {
                          rotate: -45,
                          y: 0,
                        }
                      : {
                          rotate: 0,
                          y: 4,
                        }
                  }
                  transition={{
                    duration: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={cn("absolute h-[1.6px] w-5 bg-current text-black")}
                />
              </div>

              <span className={cn("hidden text-black sm:block")}>
                {showSlide ? "Close" : "Menu"}
              </span>
            </button>

            {/* RIGHT */}
            <Link
              href="/contact"
              className={`relative h-10 w-40 md:h-12 md:w-52`}
            >
              <Image
                alt="logo"
                src="/logo.svg"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* FULLSCREEN SLIDER */}
      <AnimatePresence mode="wait">
        {showSlide && (
          <motion.div
            initial={{
              y: "-100%",
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-9990 overflow-hidden bg-white pt-16"
          >
            {/* WAVE SHAPE */}
            <motion.div
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute inset-0 bg-white"
            />

            {/* MENU CONTENT */}
            <div className="relative z-10 flex h-full items-center justify-center gap-24 px-6 py-3 md:px-24">
              <div className="relative hidden h-[620px] w-[460px] items-center justify-center md:flex">
                <AnimatePresence mode="popLayout">
                  {menuItems.map((item, index) => {
                    const isActive = activeImage === index;

                    const previousIndex =
                      activeImage === 0
                        ? menuItems.length - 1
                        : activeImage - 1;

                    const isPrevious = previousIndex === index;

                    if (!isActive && !isPrevious) return null;

                    return (
                      <motion.div
                        key={`${item.image}-${index}`}
                        initial={{
                          opacity: 0,
                          y: 120,
                          scale: 0.92,
                          rotate: index % 2 === 0 ? 10 : -10,
                        }}
                        animate={{
                          opacity: 1,
                          y: isActive ? 0 : -22,
                          x: isActive ? 0 : index % 2 === 0 ? 45 : -45,
                          scale: isActive ? 1 : 0.92,
                          rotate: isActive
                            ? index % 2 === 0
                              ? 6
                              : -6
                            : index % 2 === 0
                              ? 10
                              : -10,
                          zIndex: isActive ? 30 : 10,
                        }}
                        exit={{
                          opacity: 0,
                          y: -120,
                          scale: 0.88,
                          rotate: index % 2 === 0 ? 10 : -10,
                        }}
                        transition={{
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute h-[490px] w-[350px]"
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-[22px] shadow-2xl">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              <div className="flex flex-col gap-5 space-y-2">
                {menuItems.map((item, index) => {
                  const isHovered = activeImage === index;
                  const isActiveRoute = pathname === item.href;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        y: 100,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: 100,
                        opacity: 0,
                      }}
                      transition={{
                        delay: 0.15 + index * 0.08,
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="overflow-hidden"
                      onMouseEnter={() => setActiveImage(index)}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setShowSlide(false);
                        }}
                      >
                        <AnimatedLink
                          title={item.title}
                          textClassName={cn(
                            "text-5xl md:text-[100px] leading-[0.9] font-black tracking-[-0.08em] uppercase transition-colors duration-300 font-seasons",
                            isActiveRoute ? "text-neutral-400" : "text-black",
                          )}
                          hoverTextClassName={cn(
                            "text-5xl md:text-[100px] leading-[0.9] font-black tracking-[-0.08em] uppercase font-seasons",
                            isActiveRoute ? "text-neutral-400" : "text-black",
                          )}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
