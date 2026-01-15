"use client";

import { motion } from "framer-motion";
import { sectionReveal } from "../lib/sectionMotion";
import MagneticCard from "./MagneticCard";

const aiServices = [
  {
    title: "AI Automation",
    desc: "Automate workflows and operations using intelligent AI systems.",
  },
  {
    title: "AI Chatbots",
    desc: "Custom-trained chatbots for websites, WhatsApp, and internal tools.",
  },
  {
    title: "Data Intelligence",
    desc: "Turn data into insights with AI-driven analysis and reporting.",
  },
];

export default function AISection() {
  return (
    <motion.section
      id="ai"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      className="py-40 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-sm tracking-widest text-[#C9A24D] mb-4">
            AI POWERED SOLUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Built with Intelligence
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            AI systems designed to scale your business and reduce costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {aiServices.map((item, i) => (
            <MagneticCard key={i}>
              <div className="border border-white/10 p-10 hover:border-[#C9A24D] transition">
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}