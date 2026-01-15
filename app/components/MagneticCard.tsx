"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Depth = "strong" | "medium" | "soft";

export default function MagneticCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState<Depth>("medium");

  useEffect(() => {
    const section = ref.current?.closest("section");
    const d = section?.getAttribute("data-depth") as Depth | null;
    setDepth(d ?? "medium");
  }, []);

  const strength = {
    strong: 0.02,
    medium: 0.04,
    soft: 0.025,
  }[depth];

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `
      translate(${x * strength}px, ${y * strength}px)
      rotateX(${y * -strength * 6}deg)
      rotateY(${x * strength * 6}deg)
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
      transition={{ type: "spring", stiffness: 160, damping: 22 }}
      
    >
      {children}
    </motion.div>
  );
}