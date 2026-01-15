import type { Variants } from "framer-motion";

export const hoverLift = {
  whileHover: {
    y: -6,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const goldGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(201,162,77,0.35)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.05,
    backgroundColor: "#C9A24D",
    color: "#000",
  },
  whileTap: { scale: 0.97 },
};