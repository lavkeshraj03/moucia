"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        "https://formspree.io/f/mojjnyyk",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-black text-white px-6 pt-32 pb-24"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT — INFO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-light mb-8">
            Get in Touch
          </h1>

          <p className="text-gray-400 text-lg mb-12">
            Tell us about your project. We usually respond within 24 hours.
          </p>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#C9A24D]" />
              <span>hello@moucia.com</span>
            </div>

            <a
              href="https://wa.me/9327806083?text=Hi%20Moucia,%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              className="flex items-center gap-4 hover:text-[#C9A24D] transition"
            >
              <MessageCircle className="w-5 h-5 text-[#C9A24D]" />
              <span>WhatsApp</span>
            </a>

            <p className="text-gray-500">
              India • Working Worldwide
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <input
            required
            name="name"
            placeholder="Your name"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <input
            name="company"
            placeholder="Company (optional)"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-[#C9A24D] text-black py-4 font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "loading"
              ? "Sending..."
              : "Send Message"}
          </button>

          {/* STATUS MESSAGES */}
          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully. We’ll be in touch.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </motion.main>
  );
}