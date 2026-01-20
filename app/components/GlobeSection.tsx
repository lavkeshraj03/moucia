"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
});

export default function GlobeSection() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  useEffect(() => {
    // Wait for hydration to fully finish
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="bg-blackrelative overflow-hidden"
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            GLOBAL PRESENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Designing digital products for a connected world
          </h2>

          <p className="text-gray-400 max-w-md mb-8">
            We help modern businesses design, build, and scale
            digital experiences that reach users globally.
          </p>

          <button
            onClick={() => setOpen(!open)}
            className="text-[#C9A24D] tracking-wide border-b border-[#C9A24D]/40
                       hover:border-[#C9A24D] transition"
          >
            {open ? "Close" : "Learn more"}
          </button>
        </motion.div>

        {/* RIGHT — GLOBE */}
        <motion.div style={{ y }} className="flex justify-center md:justify-end">
          <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px] bg-black">
            {!mounted && (
              <div className="absolute inset-0 bg-black" />
            )}

            {mounted && <Globe3D />}
          </div>
        </motion.div>
      </div>

      {/* EXPAND */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-6 pb-32"
          >
            <div className="rounded-2xl
                border border-white/10
                p-8 sm:p-10
                bg-white/5 text-gray-400 space-y-4">
              <p>
                Our approach combines strategy, design, and engineering
                to create products that scale globally.
              </p>
              <p>
                From SaaS platforms to AI automation, we focus on clarity,
                performance, and long-term growth.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}