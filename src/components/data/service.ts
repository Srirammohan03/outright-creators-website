export type MediaItem = {
  type: "video" | "image";
  src: string;
  thumb?: string;
  label: string;
};

export type ServiceItem = {
  id: number;
  index: string;
  title: string;
  tagline: string;
  tech: string[];
  features: string[];
  persons: string[];
  media: MediaItem[];
  scrubVideo: string;
};

export const services: ServiceItem[] = [
  {
    id: 1,
    index: "01",
    title: "Motion Graphics",
    tagline: "Frame by frame, story by story",
    tech: ["After Effects", "Cinema 4D", "Lottie", "GSAP"],
    features: ["3D Animation", "VFX Integration", "Sound Design", "Brand Kits"],
    persons: ["Aryan K.", "Meera S."],
    media: [
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumb:
          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
        label: "Brand Reel 2024",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
        label: "3D Loop Series",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
        label: "Kinetic Type",
      },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumb:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
        label: "Product Launch",
      },
    ],
    scrubVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    index: "02",
    title: "AI Content",
    tagline: "Intelligence meets imagination",
    tech: ["Midjourney", "Runway ML", "Sora", "Stable Diffusion"],
    features: [
      "AI Voiceovers",
      "Generative Visuals",
      "Auto-Editing",
      "Style Transfer",
    ],
    persons: ["Dev P.", "Lena M."],
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&q=80",
        label: "AI Portraits",
      },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumb:
          "https://images.unsplash.com/photo-1684864880782-1b31bfef77c4?w=600&q=80",
        label: "Generated Worlds",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1675557009483-d4a5cf0a7944?w=600&q=80",
        label: "Style Fusion",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1686191128514-82ee95d7c3c6?w=600&q=80",
        label: "Concept Art",
      },
    ],
    scrubVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    index: "03",
    title: "Branding",
    tagline: "Identity that commands attention",
    tech: ["Figma", "Illustrator", "Framer", "Webflow"],
    features: ["Logo Systems", "Brand Guidelines", "Packaging", "Typography"],
    persons: ["Rohit A.", "Sara T."],
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
        label: "Brand Identity",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
        label: "Packaging Design",
      },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumb:
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
        label: "Motion Brand",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80",
        label: "Print Suite",
      },
    ],
    scrubVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    index: "04",
    title: "Social Media",
    tagline: "Scroll-stopping content at scale",
    tech: ["Premiere Pro", "CapCut", "Canva Pro", "Buffer"],
    features: [
      "Reels & Shorts",
      "Story Templates",
      "Content Calendar",
      "Analytics",
    ],
    persons: ["Priya N.", "James O."],
    media: [
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumb:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
        label: "Instagram Reels",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
        label: "Story Pack",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
        label: "Feed Layout",
      },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumb:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
        label: "TikTok Series",
      },
    ],
    scrubVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    index: "05",
    title: "YouTube Thumbnails",
    tagline: "One frame. A million clicks.",
    tech: ["Photoshop", "Lightroom", "Topaz AI", "DaVinci"],
    features: [
      "A/B Variants",
      "CTR Optimization",
      "Custom Typography",
      "Batch Delivery",
    ],
    persons: ["Vikram S.", "Nia C."],
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=80",
        label: "Tech Channel",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
        label: "Finance Niche",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
        label: "Lifestyle Series",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1565301660306-29e08751cc53?w=600&q=80",
        label: "Gaming Pack",
      },
    ],
    scrubVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];