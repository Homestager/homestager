import { BrainCircuit } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BrainCircuit className="h-6 w-6 text-purple-500" />
            <span className="text-white font-bold text-lg">AI Agency</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} AI Marketing Agency. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
