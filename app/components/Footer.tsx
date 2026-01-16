"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { trackEvent } from "../lib/analytics";

export default function Footer() {
  return (
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

          {/* INTERNAL NAV (SEO VALUE) */}
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
            </ul>
          </div>

          {/* CONTACT OPTIONS */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-6">
              CONTACT
            </p>

            <ul className="space-y-5 text-lg">
              {/* EMAIL */}
              <li>
                <a
                  href="mailto:hello@moucia.com"
                  onClick={() =>
                    trackEvent("contact_click", { method: "email" })
                  }
                  className="hover:text-[#C9A24D] transition"
                >
                  hello@moucia.com ↗
                </a>
              </li>

              {/* WHATSAPP */}
              <li>
                <a
                  href="https://wa.me/9327806083"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("contact_click", { method: "whatsapp" })
                  }
                  className="hover:text-[#C9A24D] transition"
                >
                  WhatsApp ↗
                </a>
              </li>

              {/* INSTAGRAM */}
              <li>
                <a
                  href="https://instagram.com/moucia"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("contact_click", { method: "instagram" })
                  }
                  className="hover:text-[#C9A24D] transition"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <MagneticButton>
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
            <a
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}