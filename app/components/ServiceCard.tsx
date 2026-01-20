"use client";

import { motion } from "framer-motion";
import MagneticCard from "./MagneticCard";
import type { SVGProps } from "react";

type IconType = React.ComponentType<SVGProps<SVGSVGElement>>;

interface ServiceCardProps {
  title: string;
  desc: string;
  Icon: IconType;
}

export default function ServiceCard({
  title,
  desc,
  Icon,
}: ServiceCardProps) {
  return (
    <MagneticCard>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative border border-white/10 p-10
                   hover:border-[#C9A24D]/60
                   transition-all bg-black"
      >
        {/* subtle glow */}
        <div className="absolute inset-0 rounded-lg
                        bg-gradient-to-br from-[#C9A24D]/10 to-transparent
                        opacity-0 hover:opacity-100 transition" />

        {/* icon */}
        <Icon className="relative z-10 w-8 h-8 text-[#C9A24D] mb-6" />

        <h3 className="relative z-10 text-xl mb-3">
          {title}
        </h3>

        <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </MagneticCard>
  );
}