export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700 flex items-center justify-center">
             <span className="text-zinc-500">About Image Placeholder</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why AI Marketing?</h2>
          <p className="text-lg text-zinc-300 mb-6">
            Traditional marketing is hitting a ceiling. The volume of data is too vast for humans to process manually.
          </p>
          <p className="text-lg text-zinc-300 mb-6">
            Our agency bridges the gap between creativity and algorithms. We use proprietary AI tools to analyze market sentiment, generate hyper-personalized content, and deliver it at the perfect moment.
          </p>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Data-driven decisions</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>24/7 Campaign Monitoring</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Scale without linear cost increase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
