"use client";

import { motion } from "framer-motion";
import { trackEvent } from "../lib/analytics";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        trackEvent("cta_click", {
          label: typeof children === "string" ? children : "cta",
        })
      }
      className="px-8 py-3 sm:px-10 sm:py-4 border border-[#C9A24D]
                 text-[#C9A24D] tracking-wide
                 hover:bg-[#C9A24D] hover:text-black
                 transition-all duration-300"
    >
      {children}
    </motion.button>
  );
}