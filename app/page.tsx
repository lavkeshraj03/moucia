"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import IntroSequence from "./components/IntroSequence";
import SectionSurface from "./components/SectionSurface";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });

import VideoSection from "./components/VideoSection";
import GlobeSection from "./components/GlobeSection";
import FeaturedProjects from "./components/FeaturedProjects";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import Work from "./components/Work";
import AISection from "./components/AISection";
import AICaseStudy from "./components/AICaseStudy";
import ContactSection from "./components/ContactSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {/* Intro animation — FIRST LOAD ONLY */}
      {!introDone && (
        <IntroSequence onFinish={() => setIntroDone(true)} />
      )}

      {introDone && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-32 px-4 sm:px-6"
        >
          <SectionSurface>
            <Hero />
          </SectionSurface>

          <SectionSurface>
            <VideoSection />
          </SectionSurface>

          <SectionSurface>
            <GlobeSection />
          </SectionSurface>

          <SectionSurface>
            <FeaturedProjects />
          </SectionSurface>

          <SectionSurface>
            <HowWeWork />
          </SectionSurface>

          <SectionSurface>
            <Services />
          </SectionSurface>

          <SectionSurface>
            <Work />
          </SectionSurface>

          <SectionSurface>
            <AISection />
          </SectionSurface>

          <SectionSurface>
            <AICaseStudy />
          </SectionSurface>

          <SectionSurface>
            <ContactSection />
          </SectionSurface>

          <SectionSurface>
            <TechStack />
          </SectionSurface>

          {/* Footer stays flat (no rounded surface) */}
          <Footer />
        </motion.main>
      )}
    </>
  );
}