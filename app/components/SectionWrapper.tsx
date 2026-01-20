"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="
        relative z-10
        rounded-3xl
        bg-black/85
        backdrop-saturate-110
        border border-white/5
        overflow-hidden
      "
    >
      {children}
    </motion.section>
  );
}