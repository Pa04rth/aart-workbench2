// app/page.tsx

import Link from "next/link";
// Import new icons for the footer
import {
  ShieldCheck,
  Zap,
  FileCode,
  ExternalLink,
  Github,
  Linkedin,
  Bot,
} from "lucide-react";
import { Navbar } from "@/app/components/Navbar";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-cyan-500 to-blue-600"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-violet-500 to-purple-600"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent leading-tight">
            The Adversarial Simulator for Agentic AI
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto">
            Orchestrate, execute, and analyze security tests against your AI
            agents in real-time—right from your browser.
          </p>
          <Link
            href="/workbench"
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-400 text-black font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-cyan-300 shadow-lg shadow-cyan-500/10"
          >
            Go to Workbench
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
              <div className="w-12 h-12 mb-6 bg-cyan-400/10 rounded-lg flex items-center justify-center border border-cyan-400/30">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Interactive Threat Simulation
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Explore the 12 core threats from the official CSA guide in a
                risk-free, pre-recorded showcase.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:-translate-y-1">
              <div className="w-12 h-12 mb-6 bg-emerald-400/10 rounded-lg flex items-center justify-center border border-emerald-400/30">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Live Agent Testing
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Securely connect your own LangChain agent via a simple webhook
                to test its real-world resilience.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/50 hover:-translate-y-1">
              <div className="w-12 h-12 mb-6 bg-violet-400/10 rounded-lg flex items-center justify-center border border-violet-400/30">
                <FileCode className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Instant, Actionable Reporting
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Automatically generate and export detailed Markdown reports,
                ready for your findings and tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Rooted in Industry-Leading Research
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Our methodology is built upon the comprehensive threat modeling in
              the Cloud Security Alliance Agentic AI Red Teaming Guide.
            </p>
            <a
              href="https://cloudsecurityalliance.org/research/working-groups/ai-organizational-responsibilities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white font-semibold rounded-lg transition-all duration-300 group"
            >
              Read the Full CSA Guide Here
              <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <img
              src="aart.png"
              alt="Industry Research Illustration"
              className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-zinc-900/40 via-transparent to-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* NEW: Connect with CSA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Connect with the Community
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* GitHub Card */}
            <a
              href="https://github.com/cloudsecurityalliance"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
            >
              <Github className="w-10 h-10 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2 text-white">
                CSA on GitHub
              </h3>
              <p className="text-zinc-400">
                Explore open-source projects, contribute to research, and engage
                with the code.
              </p>
            </a>
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/company/cloud-security-alliance/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
            >
              <Linkedin className="w-10 h-10 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2 text-white">
                CSA on LinkedIn
              </h3>
              <p className="text-zinc-400">
                Follow for the latest announcements, research publications, and
                industry news.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NEW: Upgraded Footer */}
      <footer className="py-12 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Project Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="w-8 h-8 text-cyan-400" />
              <span className="ml-3 text-lg font-bold text-white">
                AART Workbench
              </span>
            </div>
            <p className="text-zinc-400 text-sm">
              Open source cybersecurity for the AI era. Built with passion by
              the community, for the community.
            </p>
          </div>

          {/* Column 2: Project Links */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Project</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/Pa04rth/aart-workbench2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source on GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect with Parth */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">
              Connect with Parth
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/Pa04rth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/parthsohaney/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 text-center border-t border-zinc-800 pt-8">
          <p className="text-zinc-500 text-sm">
            © 2025 AART Workbench. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
