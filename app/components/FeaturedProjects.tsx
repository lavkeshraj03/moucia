"use client";

import { motion, type Variants } from "framer-motion";


const projects = [
  {
    title: "AI Automation Platform",
    subtitle: "Operations & Workflow",
    desc: "Designed an AI-driven automation system to reduce manual operations and improve response time across internal workflows.",
  },
  {
    title: "Startup Website Redesign",
    subtitle: "Brand & Conversion",
    desc: "Rebuilt a modern startup website focused on clarity, performance, and conversion-first UX for early traction.",
  },
  {
    title: "SaaS Dashboard Interface",
    subtitle: "Product UI / UX",
    desc: "Designed a scalable dashboard system for a growing SaaS product with a focus on usability and data clarity.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="bg-black" id="work">
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
            FEATURED PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Selected work & experiments
          </h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-28"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeUp}>
             
                <div className="group max-w-3xl relative">

                  {/* Gold accent line */}
                  <span
                    className="absolute -left-6 top-2 h-full w-px
                               bg-gradient-to-b from-transparent
                               via-[#C9A24D]/60 to-transparent
                               opacity-0 group-hover:opacity-100
                               transition"
                  />

                  <p className="text-xs tracking-widest text-gray-500 mb-3">
                    {project.subtitle}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-light text-white mb-4
                                 group-hover:translate-x-1 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.desc}
                  </p>

                </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}