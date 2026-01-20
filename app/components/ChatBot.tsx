"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, X } from "lucide-react";

const qa = [
  {
    q: "What services do you offer?",
    a: "We design and build high-performance websites, mobile apps, AI automation systems, and SEO-driven digital products for modern businesses.",
  },
  {
    q: "How does your process work?",
    a: "Our process includes strategy, design, development, testing, and launch. Everything is structured, transparent, and scalable.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take between 2–6 weeks depending on scope. You’ll get a clear timeline after a short discussion.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. Moucia is startup-focused. We help early-stage and growing teams build strong, scalable digital products.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on scope and complexity. We offer value-based pricing, not templates.",
  },
];

export default function ChatBot({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[1000]"
        >
          <div
            className="w-[340px] sm:w-[380px]
                       rounded-2xl
                       bg-[#0b0d10]/95
                       backdrop-blur
                       border border-white/10
                       shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <p className="text-sm tracking-widest text-gray-300">
                MOUCIA ASSISTANT
              </p>
              <button onClick={onClose}>
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4 space-y-4">
              <p className="text-gray-400 text-sm">
                Hi 👋 How can we help you?
              </p>

              {/* Questions */}
              <div className="space-y-2">
                {qa.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setAnswer(item.a)}
                    className="w-full text-left
                               rounded-lg px-3 py-2
                               bg-white/5
                               text-sm text-gray-300
                               hover:bg-white/10 transition"
                  >
                    {item.q}
                  </button>
                ))}
              </div>

              {/* Answer */}
              {answer && (
                <div
                  className="mt-4 rounded-lg p-3
                             bg-[#C9A24D]/10
                             text-sm text-gray-200"
                >
                  {answer}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/10 flex gap-4">
              <a
                href="mailto:hello@moucia.com"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#C9A24D]"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

              <a
                href="https://wa.me/8094290962?text=Hi%20Moucia%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#C9A24D]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}