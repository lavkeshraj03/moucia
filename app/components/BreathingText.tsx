"use client";

import { motion } from "framer-motion";

export default function BreathingText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      animate={{
        letterSpacing: ["0.08em", "0.12em", "0.08em"],
        opacity: [1, 0.96, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
}