"use client";

import { useEffect, useRef } from "react";

export default function BackgroundPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const lines = 6;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();

        const baseY = (height / lines) * i;
        const amplitude = 60 + i * 10;
        const speed = 0.002 + i * 0.0003;

        for (let x = 0; x <= width; x += 20) {
          const y =
            baseY +
            Math.sin(x * 0.004 + t * speed + i) * amplitude;

          ctx.lineTo(x, y);
        }

        ctx.strokeStyle =
          i % 2 === 0
            ? "rgba(201,162,77,0.18)" // gold
            : "rgba(220,220,220,0.08)"; // silver

        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      t += 1;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transform-gpu"
    />
  );
}