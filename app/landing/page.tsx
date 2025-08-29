import Link from "next/link";
import { Shield, Zap, FileText, ExternalLink } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-950"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            The Adversarial Simulator for Agentic AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Orchestrate, execute, and analyze security tests against your AI agents in real-time.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Go to Workbench
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Interactive Threat Simulation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Explore the 12 core threats from the official CSA guide in a risk-free, 
                pre-recorded showcase.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Live Agent Testing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Securely connect your own LangChain or custom agent via a simple 
                webhook to test its real-world resilience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Instant, Actionable Reporting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Automatically generate and export detailed Markdown reports, 
                ready for your findings and tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Rooted in Industry-Leading Research
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Our entire testing methodology is built upon the comprehensive research 
            and threat modeling detailed in the Cloud Security Alliance's 'Agentic AI 
            Red Teaming Guide'. We extend our gratitude to the CSA community for their 
            foundational work in securing the future of AI.
          </p>
          <a
            href="https://cloudsecurityalliance.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 group"
          >
            Read the Full CSA Guide Here
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Ready to Secure Your Agents?
          </h2>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Go to Workbench
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 AART Workbench. Open source cybersecurity for the AI era.
          </p>
        </div>
      </footer>
    </div>
  );
}