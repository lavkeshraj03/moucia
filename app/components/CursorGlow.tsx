"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Depth = "strong" | "medium" | "soft";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 25 });

  const [depth, setDepth] = useState<Depth>("soft");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };

    const detectSection = () => {
      const section = document
        .elementFromPoint(
          window.innerWidth / 2,
          window.innerHeight / 2
        )
        ?.closest("section");

      const d = section?.getAttribute("data-depth") as Depth | null;

      setDepth(d ?? "soft");
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("scroll", detectSection, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", detectSection);
    };
  }, [x, y]);

  // 🎨 Morph glow per depth (Plum-style restraint)
  const glowStyle = {
    strong: {
      size: 420,
      opacity: 0.22,
      blur: "blur-[100px]",
    },
    medium: {
      size: 340,
      opacity: 0.16,
      blur: "blur-[100px]",
    },
    soft: {
      size: 280,
      opacity: 0.12,
      blur: "blur-[100px]",
    },
  }[depth];

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        opacity: glowStyle.opacity,
      }}
      className={`
        pointer-events-none
        fixed top-0 left-0 z-[1]
        rounded-full
        ${glowStyle.blur}
      `}
      animate={{
        width: glowStyle.size,
        height: glowStyle.size,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 30,
      }}
    >
      <div
        className="
          w-full h-full rounded-full
          bg-[radial-gradient(circle,rgba(201,162,77,0.35)_0%,transparent_65%)]
        "
      />
    </motion.div>
  );
}