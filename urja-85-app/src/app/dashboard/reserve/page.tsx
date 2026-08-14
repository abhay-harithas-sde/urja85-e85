"use client";
import { useState } from "react";
import { ShieldAlert, BarChart3, TrendingDown } from "lucide-react";

export default function StrategicReserve() {
  const [region, setRegion] = useState("Maharashtra (Sugar Belt)");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/strategic-reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ region, timeHorizonDays: 14 }),
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
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <ShieldAlert className="text-urja-saffron h-8 w-8" /> Strategic Reserve AI Predictor
        </h2>
        <p className="text-slate-400">Government & OMC Dashboard for predicting E85/Hydrogen supply chain shortages.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl h-fit">
          <form onSubmit={handlePredict} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Target Region</label>
              <select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-50 focus:border-urja-green"
              >
                <option>Maharashtra (Sugar Belt)</option>
                <option>Delhi NCR</option>
                <option>Punjab & Haryana</option>
                <option>Tamil Nadu Corridor</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-urja-saffron text-urja-bg font-bold p-3 rounded-lg hover:bg-orange-400 transition-colors mt-4"
            >
              <BarChart3 className="h-5 w-5" />
              {loading ? "Running AI Simulation..." : "Run Prediction"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          {result ? (
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
                Analysis for {region}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                  <p className="text-slate-400 text-sm mb-1">Shortage Risk Level</p>
                  <p className={`text-3xl font-bold ${result.shortage_risk_level === 'High' || result.shortage_risk_level === 'Critical' ? 'text-red-500' : 'text-urja-saffron'}`}>
                    {result.shortage_risk_level}
                  </p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                  <p className="text-slate-400 text-sm mb-1">Predicted Deficit</p>
                  <p className="text-3xl font-bold text-white flex items-center gap-2">
                    <TrendingDown className="h-6 w-6 text-red-500" />
                    {result.predicted_deficit_liters.toLocaleString()} <span className="text-lg text-slate-500">Liters</span>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-300 mb-2">Key Influencing Factors</h4>
                  <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {result.influencing_factors?.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-urja-saffron/10 border border-urja-saffron/20 p-4 rounded-xl">
                  <h4 className="font-semibold text-urja-saffron mb-1">AI Automated Action Suggestion</h4>
                  <p className="text-slate-300">{result.rerouting_suggestion}</p>
                  <button className="mt-4 bg-urja-saffron text-urja-bg font-bold px-4 py-2 rounded hover:bg-orange-400 transition-colors text-sm">
                    Execute Reroute Protocol
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-slate-800 border-dashed rounded-2xl h-full flex flex-col items-center justify-center p-8 text-center text-slate-500 min-h-[400px]">
              <ShieldAlert className="h-12 w-12 mb-4 opacity-50" />
              <p>Select a region to run predictive AI supply chain analytics.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
