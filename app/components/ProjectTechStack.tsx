"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "EduSans",
    href: "https://project-edus.vercel.app/", // real project
    image: "/projects/edusans.jpg",
    real: true,
  },
  {
    name: "DineSmart",
    href: "https://dine-smart-eight.vercel.app/",
    image: "/projects/DineSmart.jpg",
    real: true,
  },
  {
    name: "ServiceMate",
    href: "https://service-mate-nine.vercel.app/",
    image: "/projects/ServiceMate.jpg",
    real: true,
  },
  {
    name: "ClinicOS",
    href: "#",
    image: "/projects/placeholder.jpg",
    real: false,
  },
];

const techStack = [
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "GitHub",
];

export default function ProjectTechStack() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            TECH STACK IN ACTION
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Real projects. Real technology.
          </h2>
        </div>

        {/* PROJECTS — LEFT ➜ RIGHT */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            className="flex gap-10 w-max"
          >
            {[...projects, ...projects].map((project, i) => (
              <a
                key={i}
                href={project.href}
                target={project.real ? "_blank" : undefined}
                className="relative w-[320px] h-[200px]
                           rounded-2xl overflow-hidden
                           border border-white/10 bg-white/5
                           hover:border-[#C9A24D]/60
                           transition"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />

                {!project.real && (
                  <div className="absolute inset-0 bg-black/60
                                  flex items-center justify-center">
                    <span className="text-xs tracking-widest text-gray-400">
                      COMING SOON
                    </span>
                  </div>
                )}
              </a>
            ))}
          </motion.div>
        </div>

        {/* TECH STACK — RIGHT ➜ LEFT */}
        <div className="overflow-hidden border-t border-white/10 pt-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex gap-12 whitespace-nowrap
                       text-sm text-gray-400"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="tracking-wide">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}