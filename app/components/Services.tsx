"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    desc: "High-performance, modern websites built for speed, clarity, and scalability.",
  },
  {
    title: "App Development",
    desc: "Mobile and web applications designed for growth and long-term business impact.",
  },
  {
    title: "AI & Automation",
    desc: "Intelligent systems that automate workflows and improve operational efficiency.",
  },
  {
    title: "SEO & Growth",
    desc: "Search-first strategies focused on visibility, trust, and sustainable growth.",
  },
];

export default function Services() {
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
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white max-w-xl">
            What we help modern companies build
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="max-w-3xl"
            >
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}