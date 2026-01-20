"use client";

import { motion } from "framer-motion";

export default function BookPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-black text-white px-6 py-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            BOOK A MEETING
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Schedule a Free Strategy Call
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose a time that works for you.  
            No obligation. No sales pressure.
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            src="https://calendly.com/lavkeshrajput8875/30min"
            className="w-full h-[720px] rounded-2xl"
            frameBorder="0"
            allow="camera; microphone; fullscreen"
          />
        </div>
      </div>
    </motion.main>
  );
}