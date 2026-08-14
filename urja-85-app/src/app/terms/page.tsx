"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-urja-bg text-slate-50 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center px-8 py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Leaf className="text-urja-green h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h1>
        </Link>
      </header>

      <main className="pt-32 pb-16 px-8 max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-urja-green hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <FileText className="h-10 w-10 text-urja-saffron" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
        
        <p className="text-slate-400 mb-8 text-sm">Effective Date: August 15, 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing or using the Urja-85 platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Description of Service</h2>
            <p className="text-slate-300 leading-relaxed">
              Urja-85 provides a Digital Public Infrastructure (DPI) to facilitate the transition to Flex-Fuel (E85). Services include, but are not limited to, the Kisan Connect marketplace, E85 Route Planning, and AI-powered vehicle scanning. We reserve the right to modify or discontinue any aspect of the service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. User Responsibilities</h2>
            <p className="text-slate-300 leading-relaxed">
              As a user, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-300 ml-4 mt-2 space-y-1">
              <li>Provide accurate and complete registration information.</li>
              <li>Maintain the security of your password and account.</li>
              <li>Not use the service for any illegal or unauthorized purpose.</li>
              <li>Ensure the physical biomass sold through Kisan Connect matches digital estimates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Carbon Credits and Rewards</h2>
            <p className="text-slate-300 leading-relaxed">
              Carbon credits or rewards issued through the Urja-85 platform are subject to verification and audit. We reserve the right to revoke credits if fraudulent activity, such as spoofing location data at E85 pumps, is detected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. AI Disclaimer</h2>
            <p className="text-slate-300 leading-relaxed">
              Prakriti AI and the Strategic Reserve Predictor are powered by artificial intelligence models (Google Gemini). While we strive for accuracy, the information provided by these models should not be considered professional legal or financial advice.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
