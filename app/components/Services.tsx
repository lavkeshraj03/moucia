"use client";

import { motion } from "framer-motion";
import { sectionReveal } from "../lib/sectionMotion";
import MagneticCard from "./MagneticCard";
import {
  Globe,
  Smartphone,
  Cpu,
  Search,
  Palette,
  Layers,
} from "lucide-react";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionReveal}
      className="py-32 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm tracking-widest text-gray-400 mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Our Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard icon={<Globe />} title="Website Development"
            desc="High-performance, modern websites built for speed and scale." />
          <ServiceCard icon={<Smartphone />} title="App Development"
            desc="Mobile and web applications designed for growth." />
          <ServiceCard icon={<Cpu />} title="AI & Automation"
            desc="Smart AI-powered workflows that reduce cost." />
          <ServiceCard icon={<Search />} title="SEO Optimization"
            desc="Search-first strategies for long-term growth." />
          <ServiceCard icon={<Palette />} title="UI / UX Design"
            desc="Clean interfaces focused on clarity and trust." />
          <ServiceCard icon={<Layers />} title="Digital Strategy"
            desc="Technology aligned with real business goals." />
        </div>
      </div>
    </motion.section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <MagneticCard>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="border border-white/10 p-10
                   hover:border-[#C9A24D]/60
                   hover:shadow-[0_0_30px_rgba(201,162,77,0.12)]
                   transition-colors"
      >
        <div className="w-8 h-8 text-[#C9A24D] mb-6">
          {icon}
        </div>
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </MagneticCard>
  );
}