"use client";

import { motion, type Variants } from "framer-motion";

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

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="bg-black" id="services">
      <div className="max-w-7xl mx-auto px-6 py-40">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 max-w-2xl"
        >
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            What we help modern companies build
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-24"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeUp} className="max-w-3xl rounded-2xl
                border border-white/10
                p-8 sm:p-10
                bg-white/5">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}