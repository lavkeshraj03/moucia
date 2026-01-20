export const metadata = {
  title: "Insights — Moucia",
  description:
    "Insights on AI automation, modern web development, and building scalable digital products.",
};

export default function InsightsPage() {
  return (
    <main className="bg-black text-white px-6 py-40">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-widest text-gray-400 mb-6">
          INSIGHTS
        </p>

        <h1 className="text-4xl md:text-5xl font-light mb-10">
          Building with intelligence,
          clarity, and long-term vision
        </h1>

        <p className="text-gray-400 leading-relaxed text-lg">
          This space is where we share our thinking on AI-powered
          automation, modern web systems, and how digital products
          should be built to scale responsibly.
        </p>
      </div>
    </main>
  );
}