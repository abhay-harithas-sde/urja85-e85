"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, Workflow, Bot, Webhook, Zap } from "lucide-react";

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
          <Workflow className="h-10 w-10 text-urja-green" />
          <h1 className="text-4xl font-bold">Automation Integrations</h1>
        </div>
        
        <p className="text-slate-400 mb-12 text-lg">
          The Urja-85 platform is powered by a robust stack of third-party AI agents and workflow automation tools. Here is exactly how we orchestrate the E85 flex-fuel ecosystem behind the scenes.
        </p>

        <div className="space-y-8">
          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Webhook className="h-8 w-8 text-orange-500" />
              <h2 className="text-2xl font-bold">n8n (Workflow Automation)</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              n8n acts as the central nervous system of Urja-85, connecting our Supabase database to external communication channels and AI models without writing boilerplate code.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-white mb-2">Kisan Connect Notifications</h4>
                <p className="text-sm text-slate-400">When a biomass contract is finalized, an n8n webhook triggers automatically to send a localized WhatsApp message to the farmer detailing the pickup time and OMC payment details.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-white mb-2">Supply Chain Alerts</h4>
                <p className="text-sm text-slate-400">If the Strategic Reserve Predictor detects a potential E85 shortage, n8n orchestrates an alert pipeline to regional OMC managers via Slack and Email.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Bot className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold">Google Gemini AI</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Gemini is our core reasoning engine, providing advanced language processing and computer vision capabilities.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-white mb-2">Prakriti AI Chatbot</h4>
                <p className="text-sm text-slate-400">Powered by the `gemini-1.5-flash` model, Prakriti AI uses context-aware prompting to educate citizens on the benefits of flex-fuels in multiple regional languages.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-white mb-2">AI RC Scanner</h4>
                <p className="text-sm text-slate-400">We utilize Gemini's advanced multimodal Vision API to instantly scan and extract data from uploaded Vehicle Registration Certificates (RCs) to determine E85 compatibility.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold">Make & LangChain</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              We leverage **LangChain** in our backend to give our Gemini AI access to external tools (like checking live OMC database inventories). 
            </p>
            <p className="text-slate-300 leading-relaxed">
              **Make (formerly Integromat)** is utilized for our CRM data syncing, ensuring that every new fleet operator registration is automatically pipelined into our marketing and outreach databases for rapid onboarding.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
