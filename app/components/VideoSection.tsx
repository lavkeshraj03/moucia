"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="relative w-full bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-32"
      >
        {/* Video container */}
        <div className="relative overflow-hidden rounded-xl border border-white/10">
          <video
            src="/PixVerse_V5.5_Image_Text_360P_genrate_a_video_.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[60vh] object-cover"
          />

          {/* Soft overlay (Plum-style calm) */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </motion.div>
    </section>
  );
}