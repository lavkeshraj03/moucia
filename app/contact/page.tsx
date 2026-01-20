"use client";

import { motion } from "framer-motion";

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

          <div className="space-y-6 text-gray-300">
            <p>
              <span className="text-gray-500">Email:</span><br />
              hello@moucia.com
            </p>

            <p>
              <span className="text-gray-500">WhatsApp:</span><br />
              +91 9327806083
            </p>

            <p>
              <span className="text-gray-500">Location:</span><br />
              India • Remote Worldwide
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none"
          />

          <textarea
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full bg-white/5 border border-white/10
                       rounded-xl px-5 py-4 outline-none resize-none"
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