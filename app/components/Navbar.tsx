"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

          {/* LOGO */}
          <div
            onClick={() => {
              const hero = document.getElementById("hero");
              hero?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center cursor-pointer"
          >
            <img
              src="/logo.svg"
              alt="Moucia logo"
              draggable={false}
              className="
                h-12 sm:h-14 w-auto object-contain
                transition-all duration-300 ease-out
                group-hover:opacity-80
                group-hover:scale-[1.60]
              "
            />
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-white/80">
            {["services", "work", "ai", "contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  className="hover:text-[#C9A24D] transition"
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
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            <motion.ul
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="space-y-10 text-3xl text-white text-center"
            >
              {["services", "work", "ai", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#C9A24D]"
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