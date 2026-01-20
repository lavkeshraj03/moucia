"use client";

import { motion } from "framer-motion";

export default function SectionSurface({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="
        relative
        rounded-3xl
        bg-black/80
        backdrop-blur-[1px]
        border border-white/10
        shadow-[0_40px_120px_rgba(0,0,0,0.6)]
      "
    >
      <div className="section-spacing">
        {children}
      </div>
    </motion.section>
  );
}