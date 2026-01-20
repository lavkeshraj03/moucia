"use client";

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import BreathingText from "./BreathingText";
import { trackEvent } from "../lib/analytics";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { scrollY } = useScroll();

  const ctaY = useTransform(scrollY, [0, 300], [0, -10]);
  const ctaOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={container}
      className="bg-black min-h-screen flex flex-col
                 items-center justify-center
                 text-center px-4 sm:px-6
                 overflow-hidden relative"
    >
      {/* CONTENT */}
      <div
        className="relative z-10 flex flex-col items-center
                   mt-[8vh] sm:mt-[10vh]
                   px-4 sm:px-6"
      >
        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-sm tracking-widest
                     text-gray-400 mb-4"
        >
          WEB • APP • AI • AUTOMATION • SEO
        </motion.p>

        {/* Brand */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl
                     font-light text-white mb-4"
        >
          <BreathingText>MOUCIA</BreathingText>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base
                     text-gray-300 mb-10"
        >
          Premium AI & Digital Solutions for Modern Businesses
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          style={{ y: ctaY, opacity: ctaOpacity }}
          className="flex flex-col items-center"
        >
          <MagneticButton
            onClick={() => {
              trackEvent("cta_click", { location: "hero" });
              router.push("/book");
            }}
          >
            Start Your Project
          </MagneticButton>

          <p className="mt-4 text-xs text-gray-500">
            Free strategy call • No obligation
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl mt-12
                     text-gray-400 text-base sm:text-lg
                     leading-relaxed"
        >
          We design and build high-performance websites, mobile apps,
          AI-powered automation, and SEO-driven digital solutions
          that help startups and small businesses grow with confidence.
        </motion.p>

        {/* SEO-only */}
        <p className="sr-only">
          Moucia is a digital studio specializing in AI automation,
          modern web development, scalable applications, and
          SEO-driven growth for startups and growing companies.
        </p>
      </div>

      {/* Scroll hint */}
      <p
        className="absolute bottom-6
                   text-xs text-gray-500
                   tracking-widest opacity-70"
      >
        SCROLL
      </p>
    </motion.section>
  );
}