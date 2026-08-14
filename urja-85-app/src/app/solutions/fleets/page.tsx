"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, Truck, Map, Receipt, Zap } from "lucide-react";

export default function FleetsSolution() {
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
        
        <div className="flex items-center gap-4 mb-6">
          <Truck className="h-10 w-10 text-urja-saffron" />
          <h1 className="text-4xl font-bold">AI Automation for Fleet Operators</h1>
        </div>
        
        <p className="text-slate-400 mb-12 text-lg">
          Logistics driven by intelligence. Urja-85 automates fleet routing, refueling schedules, and ESG compliance for commercial flex-fuel fleets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-urja-saffron/50 transition-colors">
            <Map className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Dynamic E85 Route Optimization</h3>
            <p className="text-slate-300 leading-relaxed">
              Unlike standard GPS, our AI Route Planner factors in live E85 pump inventory. It automatically re-routes your drivers in real-time to avoid stations that have run out of ethanol, minimizing costly downtime.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-urja-saffron/50 transition-colors">
            <Receipt className="h-10 w-10 text-urja-green mb-4" />
            <h3 className="text-xl font-bold mb-3">Automated Carbon Credit Ledger</h3>
            <p className="text-slate-300 leading-relaxed">
              Every time your fleet refuels with E85, the AI calculates the exact CO2 emissions saved compared to pure petrol. This data is automatically logged into a verifiable ledger for ESG reporting and tax credit claims.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-urja-saffron/50 transition-colors md:col-span-2 flex flex-col md:flex-row gap-6 items-center">
            <Zap className="h-16 w-16 text-purple-400 shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3">Predictive Fleet Maintenance (Vision AI)</h3>
              <p className="text-slate-300 leading-relaxed">
                Upload photos of your flex-fuel engine components or standard maintenance logs. Our Gemini-powered Vision AI analyzes them for premature wear caused by ethanol corrosiveness and automatically schedules preventative maintenance before a breakdown occurs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-orange-950/30 border border-orange-500/20 p-6 rounded-xl flex items-center justify-between">
          <div>
            <h4 className="text-orange-400 font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> 
              Powered by Make & Gemini Automation
            </h4>
            <p className="text-sm text-slate-300">Fleet registrations are automatically synced to our CRM via Make.com, while Vision AI analysis is handled natively by Google Gemini 1.5.</p>
          </div>
          <Link href="/integrations" className="text-sm text-orange-400 hover:underline shrink-0">View Technical Details &rarr;</Link>
        </div>
      </main>
    </div>
  );
}
