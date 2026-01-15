"use client";

import { motion } from "framer-motion";
import { sectionReveal } from "../lib/sectionMotion";
import MagneticCard from "./MagneticCard";

const projects = [
  { title: "Startup Website", category: "Web Development" },
  { title: "AI Automation System", category: "AI & Automation" },
  { title: "Mobile App Platform", category: "App Development" },
];

export default function Work() {
  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      className="py-32 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-gray-400 mb-4">
            OUR WORK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <MagneticCard key={i}>
              <div className="border border-white/10 p-10 hover:border-[#C9A24D]/60 transition">
                <h3 className="text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400">
                  {p.category}
                </p>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}