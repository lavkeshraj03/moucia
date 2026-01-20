"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-black text-white px-6 pt-32 pb-24"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT — CONTACT INFO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            Get in Touch
          </h1>

          <p className="text-gray-400 text-lg mb-12">
            Tell us about your project. We usually respond within 24 hours.
          </p>

          <div className="space-y-8 text-gray-300">

            {/* EMAIL */}
            <a
              href="mailto:hello@moucia.com"
              className="group flex items-start gap-4
                         hover:text-white transition"
            >
              <span
                className="flex items-center justify-center
                           w-10 h-10 rounded-full
                           bg-white/5 border border-white/10
                           group-hover:border-[#C9A24D]
                           transition"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#C9A24D]" />
              </span>

              <span>
                <span className="text-gray-500 block text-sm">
                  Email
                </span>
                hello@moucia.com
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919327806083"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4
                         hover:text-white transition"
            >
              <span
                className="flex items-center justify-center
                           w-10 h-10 rounded-full
                           bg-white/5 border border-white/10
                           group-hover:border-[#C9A24D]
                           transition"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-[#C9A24D]" />
              </span>

              <span>
                <span className="text-gray-500 block text-sm">
                  WhatsApp
                </span>
                +91 93278 06083
              </span>
            </a>

            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <span
                className="flex items-center justify-center
                           w-10 h-10 rounded-full
                           bg-white/5 border border-white/10"
              >
                <MapPin className="w-5 h-5 text-gray-400" />
              </span>

              <span>
                <span className="text-gray-500 block text-sm">
                  Location
                </span>
                India • Remote Worldwide
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT — FORM */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none
                       focus:border-[#C9A24D] transition"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none
                       focus:border-[#C9A24D] transition"
          />

          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none
                       focus:border-[#C9A24D] transition"
          />

          <textarea
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none resize-none
                       focus:border-[#C9A24D] transition"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#C9A24D]
                       text-black py-4 font-medium
                       hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </motion.main>
  );
}