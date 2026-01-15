"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function ScrollTracker() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const triggered = new Set<number>();

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrollPercent = Math.round(
        (scrollTop / docHeight) * 100
      );

      thresholds.forEach((threshold) => {
        if (
          scrollPercent >= threshold &&
          !triggered.has(threshold)
        ) {
          triggered.add(threshold);
          trackEvent("scroll_depth", {
            percent: threshold,
          });
        }
      });
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}