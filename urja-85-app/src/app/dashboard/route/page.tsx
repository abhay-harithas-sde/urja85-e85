"use client";
import { useState } from "react";
import { Map, Navigation, ShieldCheck } from "lucide-react";
import { supabase } from "../../../lib/supabase";

export default function RoutePlanner() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handlePlanRoute = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/route-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origin, destination }),
      });
      const data = await res.json();
      setResult(data);

      // We could optionally save this trip in carbon_transactions here.
      // For MVP, we just display it.
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Map className="text-urja-green h-8 w-8" /> E85 Route Planner
        </h2>
        <p className="text-slate-400">Plot your trips to maximize carbon savings and Urja Coins.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl h-fit">
          <form onSubmit={handlePlanRoute} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Origin</label>
              <input 
                type="text" 
                required
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-50 focus:border-urja-green"
                placeholder="E.g., Mumbai"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Destination</label>
              <input 
                type="text" 
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-50 focus:border-urja-green"
                placeholder="E.g., Pune"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-urja-green text-urja-bg font-bold p-3 rounded-lg hover:bg-emerald-400 transition-colors mt-4"
            >
              <Navigation className="h-5 w-5" />
              {loading ? "Calculating..." : "Plan Green Route"}
            </button>
          </form>

          {result && (
            <div className="mt-8 bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="font-bold mb-4 text-urja-green flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Trip Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Distance</span>
                  <span className="font-bold">{result.estimated_distance_km} km</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">E85 Availability</span>
                  <span className="font-bold text-urja-saffron">{result.e85_availability}</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">CO2 Saved</span>
                  <span className="font-bold text-emerald-400">{result.co2_saved_kg} kg</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-slate-400">Earnable Coins</span>
                  <span className="font-bold text-orange-400">{result.urja_coins_reward} 🪙</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 italic">"{result.gamified_message}"</p>
              
              <button className="w-full bg-urja-saffron text-urja-bg font-bold p-3 rounded-lg mt-6 hover:bg-orange-400 transition-colors">
                Start Trip
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center p-8 text-slate-500 min-h-[500px]">
          {/* Placeholder for actual 3D Mapbox Map */}
          <div className="text-center">
            <Map className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-medium mb-2">Interactive Green Map</h3>
            <p className="max-w-sm">Enter your route to view the 3D map showing E85 station availability along your journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
