// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { Bot } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Bot className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
            <span className="ml-3 text-lg font-bold text-white">
              AART Workbench
            </span>
          </Link>

          {/* Navigation Buttons */}
          <nav className="flex items-center space-x-4">
            <a
              href="https://cloudsecurityalliance.org/research/working-groups/ai-organizational-responsibilities"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-300 hidden sm:inline-block"
            >
              Read The Report
            </a>
            <Link
              href="/workbench"
              className="inline-flex items-center justify-center px-5 py-2 bg-cyan-400 text-black font-bold rounded-lg transition-all duration-300 hover:bg-cyan-300"
            >
              Go to Workbench
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
