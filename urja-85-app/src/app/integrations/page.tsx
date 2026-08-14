"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, Sprout, Truck, Factory, Bot, Webhook, Cpu } from "lucide-react";

export default function Integrations() {
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
          <Cpu className="h-10 w-10 text-urja-green" />
          <h1 className="text-4xl font-bold">Role-Specific AI Integrations</h1>
        </div>
        
        <p className="text-slate-400 mb-12 text-lg">
          The Urja-85 platform utilizes a robust stack of third-party AI agents and workflow automation tools tailored for each of our primary users.
        </p>

        <div className="space-y-8">
          {/* Farmers Section */}
          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sprout className="w-32 h-32 text-urja-green" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Sprout className="h-8 w-8 text-urja-green" />
                <h2 className="text-2xl font-bold">1. Annadatas (Farmers)</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Automating the first mile of the ethanol supply chain—converting agricultural waste into raw feedstock.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Webhook className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-white">n8n + WhatsApp</h4>
                  </div>
                  <p className="text-sm text-slate-400">When an AI matches a farmer's biomass with a buyer, an **n8n webhook** instantly triggers a localized WhatsApp message containing the smart contract, pickup time, and payment details.</p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <h4 className="font-bold text-white">Satellite AI</h4>
                  </div>
                  <p className="text-sm text-slate-400">Machine learning models process satellite imagery of the farmer's registered land plot to automatically estimate the exact tonnage and moisture content of the stubble before harvesting.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Fleets Section */}
          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Truck className="w-32 h-32 text-urja-saffron" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="h-8 w-8 text-urja-saffron" />
                <h2 className="text-2xl font-bold">2. Fleet Operators</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Automating logistics, route planning, and predictive engine maintenance for commercial E85 flex-fuel fleets.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <h4 className="font-bold text-white">Gemini Vision AI</h4>
                  </div>
                  <p className="text-sm text-slate-400">Fleet mechanics upload photos of engine components. **Google Gemini's multimodal Vision API** natively analyzes the images to detect premature ethanol corrosion and schedule predictive maintenance.</p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Webhook className="w-5 h-5 text-purple-400" />
                    <h4 className="font-bold text-white">Make.com CRM Sync</h4>
                  </div>
                  <p className="text-sm text-slate-400">Every new fleet operator registration is automatically pipelined via **Make (Integromat)** into our ESG tracking database to ensure accurate carbon credit calculation and reporting.</p>
                </div>
              </div>
            </div>
          </section>

          {/* OMCs Section */}
          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Factory className="w-32 h-32 text-blue-400" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Factory className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold">3. Oil Marketing Companies (OMCs)</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Securing the national E85 supply chain through AI-driven demand forecasting and automated procurement.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-green-400" />
                    <h4 className="font-bold text-white">LangChain Scraping</h4>
                  </div>
                  <p className="text-sm text-slate-400">The Strategic Reserve Predictor utilizes **LangChain** to orchestrate real-time web scraping of weather APIs, agricultural databases, and OMC pump inventories to forecast supply dips.</p>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Webhook className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-white">n8n Escalation Alerts</h4>
                  </div>
                  <p className="text-sm text-slate-400">If LangChain detects an impending ethanol shortage in a specific region, an **n8n pipeline** automatically triggers escalation alerts to regional OMC managers via Slack and Email.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
