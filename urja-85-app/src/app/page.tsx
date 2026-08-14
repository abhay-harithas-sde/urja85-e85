"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Navigation, Map as MapIcon, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-urja-bg text-slate-50 font-sans flex flex-col">
      {/* Navbar */}
      <header className="p-6 flex items-center justify-between z-10 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Leaf className="text-urja-green h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="hover:text-urja-green transition-colors">Features</Link>
          <Link href="#mission" className="hover:text-urja-green transition-colors">Mission 2070</Link>
          <Link href="#farmer-connect" className="hover:text-urja-green transition-colors">Kisan Connect</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">Login</Link>
          <Link href="/register" className="px-4 py-2 rounded-md bg-urja-green text-urja-bg font-semibold hover:bg-emerald-400 transition-colors">Get Started</Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="relative flex-1 flex flex-col items-center justify-center text-center p-8 overflow-hidden pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 max-w-4xl"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Fueling <span className="text-transparent bg-clip-text bg-gradient-to-r from-urja-saffron to-urja-green">New India</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Connecting consumers, farmers, and fuel infrastructure to accelerate the adoption of E85 and achieve Net Zero by 2070.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="px-8 py-4 rounded-full bg-urja-green text-urja-bg font-bold text-lg hover:bg-emerald-400 hover:scale-105 transition-all">
                Join the Green Revolution
              </Link>
              <Link href="#features" className="px-8 py-4 rounded-full bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 hover:scale-105 transition-all">
                Explore Features
              </Link>
            </div>
          </motion.div>
          
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-urja-saffron/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-urja-green/10 blur-[120px] rounded-full" />
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="py-24 bg-slate-900 px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16">Smart Features for a Sustainable Future</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-urja-green transition-colors">
                <Zap className="h-12 w-12 text-urja-saffron mb-6" />
                <h4 className="text-xl font-bold mb-3">AI Compatibility Scanner</h4>
                <p className="text-slate-400">Instantly scan your RC to check if your engine is E85 or Flex-Fuel compatible.</p>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-urja-green transition-colors">
                <MapIcon className="h-12 w-12 text-urja-green mb-6" />
                <h4 className="text-xl font-bold mb-3">Predictive Route Planner</h4>
                <p className="text-slate-400">Plot your trips based on E85 availability and calculate your exact CO2 savings.</p>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-urja-green transition-colors">
                <Leaf className="h-12 w-12 text-urja-green mb-6" />
                <h4 className="text-xl font-bold mb-3">Kisan Connect</h4>
                <p className="text-slate-400">See your direct economic contribution to Indian farmers for every liter of E85 purchased.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Urja-85. Proudly built for India.</p>
      </footer>
    </div>
  );
}
