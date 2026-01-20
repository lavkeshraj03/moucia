"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "DESIGN",
  "BUILD",
  "AUTOMATE",
  "SCALE",
];

export default function IntroSequence({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const t = setTimeout(() => setIndex(index + 1), 700);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(onFinish, 800);
      return () => clearTimeout(t);
    }
  }, [index, onFinish]);

  return (
    <motion.div
        className="fixed inset-0 z-[999]
                    flex items-center justify-center
                    bg-black"
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
    >   
      <AnimatePresence mode="wait">
        <motion.h1
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl
                        tracking-widest font-light text-white
                        flex items-center gap-4"
            >
            {/* Bullet */}
            <span className="text-[#C9A24D] text-xl sm:text-2xl">
                •
            </span>

            {/* Word */}
            <span>
                {words[index]}
            </span>
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}