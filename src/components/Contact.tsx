export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Ready to Scale?</h2>
        <p className="text-center text-zinc-400 mb-12">
          Book a free consultation call with our AI experts.
        </p>
        <form className="space-y-6 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
              <input type="text" className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
              <input type="email" className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
            <textarea className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 h-32" placeholder="Tell us about your project"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
