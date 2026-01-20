import type { Metadata } from "next";
import "./globals.css";

import Providers from "./providers";
import Navbar from "./components/Navbar";
import ScrollDepthWrapper from "./components/ScrollDepthWrapper";
import ScrollSnapEasing from "./components/ScrollSnapEasing";
import ScrollTracker from "./components/ScrollTracker";
import BackgroundPaths from "./components/BackgroundPaths";

export const metadata: Metadata = {
  title: {
    default: "Moucia — AI, Web & Automation Studio",
    template: "%s | Moucia",
  },
  description:
    "Moucia builds AI-powered websites, automation systems, and intelligent digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0d10] text-white overflow-x-hidden relative">
  <Providers>
    {/* Animated background (GLOBAL) */}
    <BackgroundPaths />

    <ScrollTracker />
    <Navbar />
    <ScrollSnapEasing />

    {/* Content ABOVE background */}
    <ScrollDepthWrapper>
      {children}
    </ScrollDepthWrapper>
  </Providers>
</body>
    </html>
  );
}