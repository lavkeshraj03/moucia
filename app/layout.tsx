import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import GlobalPointerGlow from "./components/GlobalPointerGlow";
import ScrollDepthWrapper from "./components/ScrollDepthWrapper";
import ScrollSnapEasing from "./components/ScrollSnapEasing";
import Providers from "./providers";
import ScrollTracker from "./components/ScrollTracker";
export const metadata = {
  title: {
    default: "Moucia — AI & Digital Solutions",
    template: "%s | Moucia",
  },
  description:
    "Moucia builds AI-powered websites, automation systems, and intelligent digital products for modern businesses.",
  keywords: [
    "AI automation",
    "web development",
    "startup websites",
    "digital solutions",
    "AI agency",
    "Next.js agency",
  ],
  metadataBase: new URL("https://moucia.com"),
  openGraph: {
    title: "Moucia — AI & Digital Solutions",
    description:
      "AI-powered websites, automation, and intelligent digital solutions built to scale your business.",
    url: "https://moucia.com",
    siteName: "Moucia",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Moucia AI & Digital Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moucia — AI & Digital Solutions",
    description:
      "AI-powered websites, automation, and intelligent digital solutions.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        <Providers>
          <ScrollTracker />
          {/*  Global pointer glow — MUST be first */}
          <GlobalPointerGlow />

          {/* Navigation */}
          <Navbar />

          {/* Scroll easing (non-visual) */}
          <ScrollSnapEasing />

          {/* Depth-aware wrapper */}
          <ScrollDepthWrapper>
            {children}
          </ScrollDepthWrapper>
        </Providers>  
      </body>
    </html>
  );
}