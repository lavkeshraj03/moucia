"use client";

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Wave Layer 1 — Gold */}
      <div
        className="absolute -top-1/3 -left-1/3 w-[160%] h-[160%]
                   bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.12),transparent_70%)]
                   animate-wave-slow"
      />

      {/* Wave Layer 2 — Silver */}
      <div
        className="absolute -bottom-1/3 -right-1/3 w-[160%] h-[160%]
                   bg-[radial-gradient(circle_at_center,rgba(180,180,180,0.08),transparent_70%)]
                   animate-wave-slower"
      />
    </div>
  );
}