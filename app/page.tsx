"use client";

import { motion } from "framer-motion";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import AISection from "./components/AISection";
import AICaseStudy from "./components/AICaseStudy";
import ContactSection from "./components/ContactSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";
import GlobeSection from "./components/GlobeSection";
import FeaturedProjects from "./components/FeaturedProjects";
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-20"
    >
      <Hero />
      <VideoSection />
      <GlobeSection />
      <FeaturedProjects />
      <Services />
      <Work />
      <AISection />
      <AICaseStudy />
      <ContactSection />

      {/* Trust / Technology strip */}
      <TechStack />

      <Footer />
    </motion.main>
  );
}