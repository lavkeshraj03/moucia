"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import ChatBot from "./ChatBot";
import { Mail, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <motion.footer
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative bg-black text-white border-t border-white/10"
      >
        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT — Editorial */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-12">
              LET’S DISCUSS <br />
              <span className="italic text-[#C9A24D]">
                YOUR PROJECT
              </span>
            </h2>

            <p className="text-gray-400 max-w-md mb-16 leading-relaxed">
              We help startups and modern businesses design, build,
              and scale premium digital products using web, AI,
              and automation.
            </p>

            <p className="text-xs tracking-widest text-gray-500">
              MOUCIA DIGITAL STUDIO
            </p>
          </div>

          {/* RIGHT — Links & Contact */}
          <div className="flex flex-col gap-16">

            {/* INTERNAL NAV */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 mb-6">
                EXPLORE
              </p>

              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-white transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#ai" className="hover:text-white transition">
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a href="/insights" className="hover:text-white transition">
                    Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT ICONS */}
            <div>
              <p className="text-xs tracking-widest text-gray-400 mb-6">
                CONTACT
              </p>

              <ul className="flex items-center gap-6">
                <li>
                  <a
                    href="mailto:hello@moucia.com"
                    aria-label="Email"
                    className="group"
                  >
                    <Mail className="w-6 h-6 text-gray-400 group-hover:scale-110 group-hover:text-[#C9A24D] transition" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/+918094290962?text=Hi%20Moucia%2C%20I%20want%20to%20discuss%20a%20project"
                    target="_blank"
                    aria-label="WhatsApp"
                    className="group"
                  >
                    <MessageCircle className="w-6 h-6 text-gray-400 group-hover:scale-110 group-hover:text-[#C9A24D] transition" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/MouciaDev"
                    target="_blank"
                    aria-label="Instagram"
                    className="group"
                  >
                    <Instagram className="w-6 h-6 text-gray-400 group-hover:scale-110 group-hover:text-[#C9A24D] transition" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/MouciaDev"
                    target="_blank"
                    aria-label="X"
                    className="group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-gray-400 group-hover:scale-110 group-hover:fill-[#C9A24D] transition"
                    >
                      <path d="M18.244 2H21.55l-7.227 8.26L23 22h-6.768l-5.3-6.94L4.91 22H1.6l7.73-8.84L1 2h6.92l4.79 6.28L18.244 2z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <p className="text-xs text-gray-500 mt-6">
                Typically replies within 24 hours
              </p>
            </div>

            {/* CTA — CHATBOT TRIGGER */}
            <MagneticButton onClick={() => setChatOpen(true)}>
              Start a Conversation
            </MagneticButton>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Moucia. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* CHATBOT — OUTSIDE FOOTER */}
      <ChatBot open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}