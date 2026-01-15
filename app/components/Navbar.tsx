"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50
                         bg-black/95 backdrop-blur
                         border-b border-white/10
                         shadow-[0_1px_0_rgba(255,255,255,0.05)]">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            href="/"
            className="text-lg tracking-widest font-semibold text-white"
          >
            MOUCIA
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-white/80">
            {["services", "work", "ai", "contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  className="hover:text-[#C9A24D] transition-colors"
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black
                       flex flex-col items-center justify-center"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            <motion.ul
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-10 text-3xl text-white text-center"
            >
              {["services", "work", "ai", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#C9A24D] transition-colors"
                  >
                    {item.toUpperCase()}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}