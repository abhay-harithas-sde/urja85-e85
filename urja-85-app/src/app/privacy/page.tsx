"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
          <Shield className="h-10 w-10 text-urja-green" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        
        <p className="text-slate-400 mb-8 text-sm">Last Updated: August 15, 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              Urja-85 ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our Digital Public Infrastructure (DPI) platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="text-slate-300 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you register on the platform, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 ml-4 mt-2 space-y-1">
              <li>Name and Email Address</li>
              <li>Role (Farmer, Citizen/Driver, Fleet Operator)</li>
              <li>Location data (for E85 Route Planning features)</li>
              <li>Vehicle Registration data (when using the AI RC Scanner)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information to:
            </p>
            <ul className="list-disc list-inside text-slate-300 ml-4 mt-2 space-y-1">
              <li>Create and manage your account.</li>
              <li>Calculate Web3 Carbon Credits based on your E85 usage.</li>
              <li>Process transactions in the Kisan Connect marketplace.</li>
              <li>Improve our AI models (Prakriti AI, Strategic Reserve Predictor).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. Your data is stored securely using Supabase with strict Row Level Security (RLS) policies. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
