"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dotRef.current) return;

      dotRef.current.style.transform = `translate3d(
        ${e.clientX - 4}px,
        ${e.clientY - 4}px,
        0
      )`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={dotRef}
      className="
        fixed top-0 left-0
        w-2 h-2
        rounded-full
        bg-red-500
        pointer-events-none
        z-[9999]
        transition-transform duration-75 ease-out
      "
    />
  );
}