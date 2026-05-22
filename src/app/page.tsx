import AboutSection from "../components/sections/AboutSection";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <Hero />
      <AboutSection />
    </div>
  );
}
