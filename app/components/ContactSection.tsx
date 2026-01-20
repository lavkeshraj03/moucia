"use client";

import { motion, type Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { trackEvent } from "../lib/analytics";
import { useRouter } from "next/navigation";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactSection() {
  const router = useRouter();

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-40 px-6 bg-blacktext-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.p
          variants={fadeUp}
          className="text-sm tracking-widest text-gray-400 mb-4"
        >
          LET’S WORK TOGETHER
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-light mb-6"
        >
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
        <motion.div variants={fadeUp} className="flex justify-center">
          <MagneticButton
            onClick={() => {
              trackEvent("cta_click", { location: "contact_section" });
              router.push("/contact");
            }}
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Trust line */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-sm text-gray-500"
        >
          Typically replies within 24 hours.
        </motion.p>
      </div>
    </motion.section>
  );
}