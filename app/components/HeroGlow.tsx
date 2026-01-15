"use client";

import { useEffect, useState } from "react";

export default function HeroGlow() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background: `radial-gradient(
          circle at ${pos.x}% ${pos.y}%,
          rgba(201,162,77,0.15),
          transparent 45%
        )`,
      }}
    />
  );
}