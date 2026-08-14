"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, Factory, Database, LineChart, BellRing } from "lucide-react";

export default function OMCSolution() {
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
          <Factory className="h-10 w-10 text-blue-400" />
          <h1 className="text-4xl font-bold">AI Automation for OMCs</h1>
        </div>
        
        <p className="text-slate-400 mb-12 text-lg">
          Securing the national supply chain. Urja-85 uses predictive AI to help Oil Marketing Companies (OMCs) and 2G ethanol plants automate procurement and prevent fuel shortages.
        </p>

        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-800 p-4 rounded-xl shrink-0">
              <LineChart className="h-8 w-8 text-urja-saffron" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Strategic Reserve Predictor</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our core machine learning model ingests real-time agricultural harvest data, weather forecasts, and regional E85 pump consumption rates. It automatically predicts impending ethanol shortages up to 3 months in advance.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-800 p-4 rounded-xl shrink-0">
              <Database className="h-8 w-8 text-urja-green" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Automated Feedstock Procurement</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                When the AI detects a forecasted supply dip, it automatically triggers buy-orders in the Kisan Connect marketplace. It scans for farmers with available surplus stubble or sugarcane and locks in procurement contracts at the optimal algorithmic price.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-800 p-4 rounded-xl shrink-0">
              <BellRing className="h-8 w-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Automated Logistics Dispatch</h3>
              <p className="text-slate-300 leading-relaxed">
                Once raw biomass is procured, the system automatically schedules the most efficient trucking routes from the farm to the 2G refinery, ensuring a continuous, unbroken pipeline of ethanol production to meet E20/E85 blending targets.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-orange-950/30 border border-orange-500/20 p-6 rounded-xl flex items-center justify-between">
          <div>
            <h4 className="text-orange-400 font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> 
              Powered by n8n & LangChain Automation
            </h4>
            <p className="text-sm text-slate-300">The Strategic Reserve Predictor utilizes LangChain for real-time inventory checks, while n8n automatically orchestrates the OMC slack and email alerts.</p>
          </div>
          <Link href="/integrations" className="text-sm text-orange-400 hover:underline shrink-0">View Technical Details &rarr;</Link>
        </div>
      </main>
    </div>
  );
}
