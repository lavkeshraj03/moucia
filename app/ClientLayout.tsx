"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ScrollDepthWrapper from "./components/ScrollDepthWrapper";
import ScrollSnapEasing from "./components/ScrollSnapEasing";
import ScrollTracker from "./components/ScrollTracker";
import CursorDot from "./components/CursorDot";
import IntroSequence from "./components/IntroSequence";
import Providers from "./providers";
import BackgroundPaths from "./components/BackgroundPaths";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("moucia_intro_seen");
    if (!seen) {
      setShowIntro(true);
    } else {
      setReady(true);
    }
  }, []);

  const handleIntroFinish = () => {
    sessionStorage.setItem("moucia_intro_seen", "true");
    setShowIntro(false);
    setReady(true);
  };

  return (
    <Providers>
      {/* 🔥 BACKGROUND — ALWAYS FIRST */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundPaths />
      </div>

      {/* GLOBAL SYSTEMS */}
      <ScrollTracker />
      <CursorDot />

      {/* INTRO */}
      {showIntro && <IntroSequence onFinish={handleIntroFinish} />}

      {/* APP */}
      {ready && (
        <div className="relative z-10">
          <Navbar />
          <ScrollSnapEasing />

          <ScrollDepthWrapper>
            {children}
          </ScrollDepthWrapper>
        </div>
      )}
    </Providers>
  );
}