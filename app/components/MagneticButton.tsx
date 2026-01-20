"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function MagneticButton({
  children,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `
      translate(${x * 0.04}px, ${y * 0.04}px)
      rotateX(${y * -0.06}deg)
      rotateY(${x * 0.06}deg)
    `;
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.transform = `
      translate(0px, 0px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="will-change-transform cursor-pointer
                 px-8 py-3 sm:px-10 sm:py-4
                 border border-[#C9A24D]
                 text-[#C9A24D]
                 hover:bg-[#C9A24D] hover:text-black
                 transition-all duration-300
                 tracking-wide select-none"
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  );
}