export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          MedSymphony AI
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          AI Powered Public Health & Medical Education Platform
        </p>

        <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}