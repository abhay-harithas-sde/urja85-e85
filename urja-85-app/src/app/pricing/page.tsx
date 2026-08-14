"use client";
import Link from "next/link";
import { Leaf, ArrowLeft, TrendingUp, IndianRupee, Sprout } from "lucide-react";

export default function EthanolPricing() {
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
        
        <h1 className="text-4xl font-bold mb-4">Ethanol Pricing & Procurement</h1>
        <p className="text-slate-400 mb-12 text-lg">Current remunerative prices for ethanol procurement by Oil Marketing Companies (OMCs).</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-2xl">
            <Sprout className="h-10 w-10 text-urja-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Sugarcane Juice / Syrup</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">₹65.61</span>
              <span className="text-slate-400 mb-1">/ litre</span>
            </div>
            <p className="text-sm text-slate-400 mt-4">Highest tier to encourage direct diversion of sugarcane juice to ethanol.</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-2xl">
            <TrendingUp className="h-10 w-10 text-urja-saffron mb-4" />
            <h3 className="text-xl font-bold mb-2">B-Heavy Molasses</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">₹60.73</span>
              <span className="text-slate-400 mb-1">/ litre</span>
            </div>
            <p className="text-sm text-slate-400 mt-4">Procurement price for ethanol derived from B-Heavy molasses.</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-2xl">
            <IndianRupee className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">C-Heavy Molasses</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">₹56.28</span>
              <span className="text-slate-400 mb-1">/ litre</span>
            </div>
            <p className="text-sm text-slate-400 mt-4">Procurement price for ethanol derived from C-Heavy molasses.</p>
          </div>

          <div className="bg-gradient-to-br from-urja-green/10 to-slate-800 border border-urja-green/50 p-8 rounded-2xl">
            <Leaf className="h-10 w-10 text-urja-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Damaged Food Grains / Maize</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">₹64-68</span>
              <span className="text-slate-400 mb-1">/ litre</span>
            </div>
            <p className="text-sm text-urja-green mt-4">Dynamic pricing depending on the feedstock (Maize vs. Damaged Rice) to boost grain-based ethanol.</p>
          </div>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h4 className="font-bold text-lg mb-2">Note for Farmers (Kisan Connect)</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            Through the Urja-85 Kisan Connect portal, agricultural waste (stubble/parali) is evaluated as feedstock for 2G (Second Generation) ethanol plants. Prices for raw biomass vary by region and moisture content, typically ranging between ₹2,000 to ₹3,500 per ton.
          </p>
        </div>
      </main>
    </div>
  );
}
