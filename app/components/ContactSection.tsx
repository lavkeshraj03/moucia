"use client";

import { motion, type Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-40 px-6 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.p variants={fadeUp} className="text-sm tracking-widest text-gray-400 mb-4">
          LET’S WORK TOGETHER
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-light mb-6">
          Start Your Project
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-lg leading-relaxed mb-12"
        >
          Tell us about your idea, goals, or challenge.
          We’ll help you shape the right digital solution —
          from strategy to execution.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10">
          <MagneticButton>
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Secondary contacts */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-6 justify-center
                     text-sm text-gray-400"
        >
          <a
            href="mailto:hello@moucia.com"
            className="hover:text-[#C9A24D] transition"
          >
            Email ↗
          </a>

          <a
            href="https://x.com/moucia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A24D] transition"
          >
            X (Twitter) ↗
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={fadeUp} className="mt-10 text-sm text-gray-500">
          Typically replies within 24 hours.
        </motion.p>
      </div>
    </motion.section>
  );
}