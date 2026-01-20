"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const tech = [
  "/tech/docker.svg",
  "/tech/javascript.svg",
  "/tech/react.svg",
  "/tech/nextjs.svg",
  "/tech/node.svg",
  "/tech/typescript.svg",
  "/tech/python.svg",
  "/tech/mongodb.svg",
  "/tech/postgres.svg",
  "/tech/aws.svg",
];

export default function TechStack() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="bg-black py-16 sm:py-24 relative overflow-hidden">
      {/* Label */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-gray-500">
          TECHNOLOGIES WE USE
        </p>
      </div>

      {/* Marquee */}
      <motion.div
        className="flex gap-20 items-center w-max"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          })
        }
      >
        {[...tech, ...tech].map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center
                       min-w-[140px] h-[80px]
                       opacity-60 hover:opacity-100
                       transition-opacity duration-300"
          >
            <img
              src={src}
              alt=""
              className="h-12 w-auto object-contain"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}