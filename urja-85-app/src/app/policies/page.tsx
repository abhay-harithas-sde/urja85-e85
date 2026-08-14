"use client";
import Link from "next/link";
import { Leaf, FileText, ArrowLeft, ShieldCheck, Scale, FileSignature } from "lucide-react";

export default function GovernmentPolicies() {
  return (
    <div className="min-h-screen bg-urja-bg text-slate-50 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center px-8 py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Leaf className="text-urja-green h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h1>
        </Link>
      </header>

      <main className="pt-32 pb-16 px-8 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-urja-green hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">Government Policies</h1>
        <p className="text-slate-400 mb-12 text-lg">Understanding the legal frameworks driving India's Ethanol Blending Programme (EBP).</p>

        <div className="space-y-12">
          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-urja-saffron" />
              <h2 className="text-2xl font-bold">National Policy on Biofuels (2018)</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              The National Policy on Biofuels was introduced by the Ministry of Petroleum and Natural Gas. It categorizes biofuels into "Basic Biofuels" (1G ethanol & biodiesel) and "Advanced Biofuels" (2G ethanol, municipal solid waste to drop-in fuels). 
            </p>
            <p className="text-slate-300 leading-relaxed">
              **Key Amendment (2022):** The target for 20% ethanol blending in petrol (E20) was advanced to 2025-26 from 2030, highlighting the government's aggressive push towards energy independence.
            </p>
          </section>

          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-8 w-8 text-urja-green" />
              <h2 className="text-2xl font-bold">Pradhan Mantri JI-VAN Yojana</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              The "Jaiv Indhan- Vatavaran Anukool fasal awashesh Nivaran" (JI-VAN) Yojana provides financial support to Integrated Bioethanol Projects using lignocellulosic biomass and other renewable feedstock.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Incentivizes 2G ethanol sector.</li>
              <li>Supports farmers by providing remuneration for agricultural residue (stubble).</li>
              <li>Reduces environmental pollution caused by biomass burning.</li>
            </ul>
          </section>

          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <FileSignature className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold">SATAT Initiative</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Sustainable Alternative Towards Affordable Transportation (SATAT) aims to establish Compressed Bio-Gas (CBG) production plants and make CBG available in the market for use as automotive fuel, further supplementing the flex-fuel ecosystem.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
