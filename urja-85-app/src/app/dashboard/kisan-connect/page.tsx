"use client";
import { useState } from "react";
import { Leaf, PlusCircle, Coins } from "lucide-react";

export default function KisanConnect() {
  const [cropType, setCropType] = useState("Stubble/Parali");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/kisan-connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cropType, quantityTonnes: quantity, location }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-urja-green flex items-center gap-2">
          <Leaf className="h-8 w-8" /> Kisan Connect
        </h2>
        <p className="text-slate-400">Sell your agricultural biomass directly to Ethanol Refineries. No middlemen.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold mb-6">List Biomass</h3>
          <form onSubmit={handleEstimate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Crop Type</label>
              <select 
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-50 focus:border-urja-green"
              >
                <option>Stubble/Parali</option>
                <option>Sugarcane Bagasse</option>
                <option>Corn Stover</option>
                <option>Other Biomass</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Quantity (Tonnes)</label>
              <input 
                type="number" 
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-50 focus:border-urja-green"
                placeholder="e.g. 5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Location (Village/District)</label>
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-50 focus:border-urja-green"
                placeholder="e.g. Karnal, Haryana"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-urja-green text-urja-bg font-bold p-3 rounded-lg hover:bg-emerald-400 transition-colors mt-4"
            >
              <PlusCircle className="h-5 w-5" />
              {loading ? "Calculating..." : "Get AI Estimate & List"}
            </button>
          </form>
        </div>

        <div>
          {result ? (
            <div className="bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-800/50 p-8 rounded-2xl h-full shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                <Coins className="h-6 w-6" /> AI Estimate
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-slate-400 text-sm">Estimated Total Value</p>
                  <p className="text-4xl font-bold text-white">₹{result.total_estimated_value_inr}</p>
                  <p className="text-sm text-emerald-500 mt-1">₹{result.estimated_price_per_tonne_inr} per tonne</p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <h4 className="font-semibold mb-1 text-sm text-slate-300">Refinery Match</h4>
                  <p className="text-sm text-slate-400">{result.nearest_refinery_region_suggestion}</p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <h4 className="font-semibold mb-1 text-sm text-slate-300">Why this matters</h4>
                  <p className="text-sm text-slate-400">{result.ethanol_contribution_explanation}</p>
                </div>
              </div>
              
              <button className="w-full bg-slate-700 text-white font-bold p-3 rounded-lg mt-6 hover:bg-slate-600 transition-colors">
                Publish Listing to OND Network
              </button>
            </div>
          ) : (
            <div className="border border-slate-800 border-dashed rounded-2xl h-full flex flex-col items-center justify-center p-8 text-center text-slate-500">
              <Leaf className="h-12 w-12 mb-4 opacity-50" />
              <p>Enter your biomass details to get an AI-powered pricing estimate and connect with the nearest ethanol refineries.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
