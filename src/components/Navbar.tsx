import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 border-b border-zinc-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <BrainCircuit className="h-8 w-8 text-purple-500" />
          <span>AI Agency</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#services" className="hover:text-purple-400 transition">Services</Link>
          <Link href="#about" className="hover:text-purple-400 transition">About</Link>
          <Link href="#contact" className="hover:text-purple-400 transition">Contact</Link>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
