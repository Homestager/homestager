export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Marketing Reinvented by AI
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
          We leverage artificial intelligence to automate campaigns, optimize conversion, and scale your business faster than ever.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-zinc-200 transition">
            Start Free Trial
          </button>
          <button className="border border-zinc-700 text-white px-8 py-3 rounded-full font-bold hover:bg-zinc-900 transition">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
