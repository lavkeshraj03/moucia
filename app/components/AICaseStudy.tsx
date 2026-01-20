"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AICaseStudy() {
  return (
    <section className="bg-black" id="ai-case-study">
      <div className="max-w-7xl mx-auto px-6 py-40">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 max-w-2xl"
        >
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            AI CASE STUDY
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Designing AI systems that actually scale
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-20 max-w-3xl"
        >
          {/* Problem */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl text-white mb-3">
              The problem
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Many businesses adopt AI tools without a clear system.
              This leads to fragmented automation, poor reliability,
              and limited real-world impact.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl text-white mb-3">
              Our approach
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We design AI as part of a larger operational workflow —
              combining automation, data pipelines, and human oversight
              into a single, maintainable system.
            </p>
          </motion.div>

          {/* Outcome */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl text-white mb-3">
              The outcome
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              The result is AI that improves efficiency, reduces cost,
              and scales alongside the business — not isolated tools,
              but intelligent systems with long-term value.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}