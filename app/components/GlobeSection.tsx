"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function GlobeSection() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left: Text */}
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

        {/* Right: Globe placeholder */}
       <motion.div style={{ y }} className="flex justify-center">
  
        {/* Rotating globe */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-[320px] h-[320px] rounded-full
                    border border-white/20
                    bg-gradient-to-br from-white/5 to-transparent
                    shadow-[0_0_60px_rgba(255,255,255,0.08)]
                    flex items-center justify-center text-gray-400"
        >
          {/* Light reflection */}
          <div
            className="absolute top-10 left-10 w-24 h-24 rounded-full
                      bg-white/10 blur-2xl"
          />

          Globe
        </motion.div>

      </motion.div>
      </div>

      {/* Learn more expandable content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-6 pb-32"
          >
            <div className="border-t border-white/10 pt-12 text-gray-400 space-y-4">
              <p>
                Our approach combines strategy, design, and engineering
                to create products that scale across regions, devices,
                and audiences.
              </p>
              <p>
                From global SaaS platforms to AI-powered automation,
                we focus on performance, clarity, and long-term growth.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}