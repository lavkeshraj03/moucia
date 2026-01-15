"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-40 px-6 bg-black text-white text-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-3xl mx-auto"
      >
        <p className="text-sm tracking-widest text-gray-400 mb-4">
          LET’S WORK TOGETHER
        </p>

        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Start Your Next Project
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Tell us about your idea. We help startups and businesses
          turn concepts into scalable, high-impact digital products.
        </p>

        <motion.a
          href="mailto:contact@moucia.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 border
                     border-[#C9A24D] text-[#C9A24D]
                     hover:bg-[#C9A24D] hover:text-black
                     transition-all duration-300"
        >
          Start a Project
        </motion.a>
      </motion.div>
    </section>
  );
}