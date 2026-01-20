"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We start by understanding your business goals, users, and constraints. This phase defines the problem clearly before any design or code begins.",
  },
  {
    title: "Design & Experience",
    desc: "We design interfaces and user flows focused on clarity, usability, and conversion. Every decision is intentional — no decoration without purpose.",
  },
  {
    title: "Development & Engineering",
    desc: "We build scalable, high-performance systems using modern technologies. Clean code, maintainable architecture, and real-world performance are priorities.",
  },
  {
    title: "Testing & Refinement",
    desc: "Before launch, we rigorously test across devices and edge cases. Feedback is incorporated to ensure stability, speed, and polish.",
  },
  {
    title: "Launch & Scale",
    desc: "We deploy, monitor, and support your product post-launch. As your business grows, we help iterate, optimize, and scale the system.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HowWeWork() {
  return (
    <section className="bg-black" id="process">
      <div className="max-w-7xl mx-auto px-6 py-40">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 max-w-2xl"
        >
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            HOW WE WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            A structured process built for real results
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-20 max-w-3xl"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="rounded-2xl
                         border border-white/10
                         bg-white/5
                         p-8 sm:p-10"
            >
              <p className="text-xs tracking-widest text-[#C9A24D] mb-3">
                STEP {index + 1}
              </p>

              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}