"use client";

import { useScroll, useTransform } from "framer-motion";

export function useScrollHeading(offset = 300) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, offset], [24, 0]);
  const opacity = useTransform(scrollY, [0, offset], [0.4, 1]);
  const letterSpacing = useTransform(
    scrollY,
    [0, offset],
    ["0.12em", "0.04em"]
  );

  return { y, opacity, letterSpacing };
}