"use client";

import { motion } from "framer-motion";
import { sectionReveal } from "../lib/sectionMotion";
import MagneticCard from "./MagneticCard";

export default function AICaseStudy() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      className="py-40 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 max-w-3xl">
          <p className="text-sm tracking-widest text-[#C9A24D] mb-4">
            AI CASE STUDY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Automating Operations with AI
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            How AI-driven automation reduced workload and improved efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <CaseCard title="PROBLEM"
            text="Manual processes slowed internal operations." />
          <CaseCard title="AI SOLUTION"
            text="AI systems automated support and routing." />
          <CaseCard title="RESULTS"
            text="~60% reduction in manual workload." />
        </div>
      </div>
    </motion.section>
  );
}

function CaseCard({ title, text }: { title: string; text: string }) {
  return (
    <MagneticCard>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="border border-white/10 p-10
                   hover:border-[#C9A24D]/50
                   hover:shadow-[0_0_28px_rgba(201,162,77,0.1)]"
      >
        <p className="text-xs tracking-widest text-gray-500 mb-4">
          {title}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {text}
        </p>
      </motion.div>
    </MagneticCard>
  );
}