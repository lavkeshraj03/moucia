"use client";

import dynamic from "next/dynamic";
import { shouldReduceMotion } from "../lib/motionConfig";
const ParticleLayer = dynamic(() => import("./ParticleLayer"), {
  ssr: false,
});

const HeroGlow = dynamic(() => import("./HeroGlow"), {
  ssr: false,
});

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

import ParallaxTilt from "./ParallaxTilt";

import BreathingText from "./BreathingText";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const reduceMotion = shouldReduceMotion();
  const { scrollY } = useScroll();

  const ctaY = useTransform(scrollY, [0, 300], [0, -12]);
  const ctaOpacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  return (
    <motion.section
      initial="hidden"
      animate={reduceMotion ? false : "visible"}
      variants={container}
      className="relative min-h-screen flex flex-col
           items-center justify-center
           text-center px-6 pt-24 sm:pt-28 overflow-hidden"
    >
      <ParticleLayer />
      <HeroGlow />

      <div className="relative z-10 flex flex-col items-center">
        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.25em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-xs sm:text-sm tracking-widest text-gray-400 mb-4"
        >
          WEB • APP • AI • AUTOMATION • SEO
        </motion.p>

        {/* Brand */}
        <ParallaxTilt>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-4"
          >
            <BreathingText>MOUCIA</BreathingText>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base text-gray-300 mb-8"
          >
            Premium AI & Digital Solutions for Modern Businesses
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ y: ctaY, opacity: ctaOpacity }}
            className="flex justify-center"
          >
            <MagneticButton>Start a Project</MagneticButton>
          </motion.div>
        </ParallaxTilt>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl  mx-auto px-2 sm:px-0 text-gray-400 text-base sm:text-lg leading-relaxed mt-12"
        >
          We design and build high-performance websites, mobile apps,
          AI-powered automation, and SEO-driven digital solutions
          that help startups and small businesses grow with confidence.
        </motion.p>
        <p className="sr-only">
          Moucia is a digital studio specializing in AI automation,
          modern web development, scalable applications, and
          SEO-driven growth for startups and growing companies.
        </p>
      </div>
    </motion.section>
  );
}