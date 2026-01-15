"use client";

export default function SectionFade() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 z-0">
      <div className="w-full h-full bg-gradient-to-b from-transparent to-black" />
    </div>
  );
}