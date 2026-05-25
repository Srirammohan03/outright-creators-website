import AboutSection from "../components/sections/AboutSection";
import Hero from "../components/sections/Hero";
import ImageSection from "../components/sections/ImageSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import Stats from "../components/sections/Stats";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <Hero />
      <AboutSection />
      <Stats />
      {/* <ServicesSection /> */}
      <PortfolioSection />
      <ImageSection />
      <div className="h-60"></div>
    </div>
  );
}
