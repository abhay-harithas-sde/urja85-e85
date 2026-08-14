"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, Sprout, Satellite, Bot, Cpu } from "lucide-react";

export default function FarmersSolution() {
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
          <Sprout className="h-10 w-10 text-urja-green" />
          <h1 className="text-4xl font-bold">AI Automation for Annadatas</h1>
        </div>
        
        <p className="text-slate-400 mb-12 text-lg">
          Transforming agricultural waste into wealth with zero manual effort. Urja-85 uses artificial intelligence to automate the entire biomass selling process for Indian farmers.
        </p>

        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-800 p-4 rounded-xl shrink-0">
              <Satellite className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Automated Satellite Biomass Estimation</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Instead of manually weighing stubble and transporting it blindly, our AI analyzes satellite imagery of your farm to instantly predict your exact biomass yield and moisture content.
              </p>
              <ul className="list-none space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-urja-green"></div> No physical hardware required.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-urja-green"></div> Accurate to within 95%.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-800 p-4 rounded-xl shrink-0">
              <Bot className="h-8 w-8 text-urja-saffron" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Smart-Contract Buyer Matching</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The Urja-85 AI autonomously scans local Oil Marketing Companies (OMCs) and 2G ethanol plants to find the highest bidder for your specific biomass type. It automatically drafts the procurement contract and schedules pickup.
              </p>
              <ul className="list-none space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-urja-saffron"></div> Zero middlemen involved.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-urja-saffron"></div> Instant payout algorithms.</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-800 p-4 rounded-xl shrink-0">
              <Cpu className="h-8 w-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Predictive Market Pricing</h3>
              <p className="text-slate-300 leading-relaxed">
                Our machine learning models analyze historical government procurement data, weather patterns, and local ethanol demand to tell you exactly when to sell your biomass for the maximum profit margin.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-orange-950/30 border border-orange-500/20 p-6 rounded-xl flex items-center justify-between">
          <div>
            <h4 className="text-orange-400 font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> 
              Powered by n8n Automation
            </h4>
            <p className="text-sm text-slate-300">This smart-contract matching workflow is fully automated via an n8n webhook that executes when a farmer registers biomass.</p>
          </div>
          <Link href="/integrations" className="text-sm text-orange-400 hover:underline shrink-0">View Technical Details &rarr;</Link>
        </div>
      </main>
    </div>
  );
}
