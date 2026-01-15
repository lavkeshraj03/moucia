"use client";

import { motion } from "framer-motion";
import ParallaxTilt from "./ParallaxTilt";

type Props = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

export default function ServiceCard({ icon: Icon, title, desc }: Props) {
  return (
    <ParallaxTilt>
      <motion.div
        whileHover={{
          y: -12,
          boxShadow: "0 0 45px rgba(201,162,77,0.18)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative border border-white/10 p-10
                   hover:border-[#C9A24D]/60
                   transition-all backdrop-blur"
      >
        {/* Ambient pulse */}
        <motion.div
          className="absolute inset-0 rounded-md pointer-events-none"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(201,162,77,0.15), transparent 60%)",
          }}
        />

        <Icon className="relative z-10 w-8 h-8 text-[#C9A24D] mb-6" />
        <h3 className="relative z-10 text-xl mb-3">{title}</h3>
        <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </ParallaxTilt>
  );
}