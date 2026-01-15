"use client";

import { useEffect, useRef } from "react";

export default function ScrollSnapEasing() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (navigator.userAgent.includes("Chrome-Lighthouse")) return;
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const sections = Array.from(
          document.querySelectorAll("section[id]")
        ) as HTMLElement[];

        const viewportCenter = window.innerHeight / 2;

        let closestSection: HTMLElement | null = null;
        let closestDistance = Infinity;

        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }

        if (closestSection && closestDistance < 120) {
          closestSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return null;
}