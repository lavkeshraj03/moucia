"use client";

import { useEffect, useState } from "react";

export default function AIBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#C9A24D]/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 6}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}