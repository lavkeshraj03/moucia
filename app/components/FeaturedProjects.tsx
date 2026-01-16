"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Automation Platform",
    category: "Artificial Intelligence",
  },
  {
    title: "Global SaaS Website",
    category: "Web Development",
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-40">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            FEATURED PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Selected projects
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="border-b border-white/10 pb-12 transition-transform duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}