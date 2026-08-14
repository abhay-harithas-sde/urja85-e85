"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { Leaf, Navigation, Calendar } from "lucide-react";

export default function History() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase
        .from('carbon_transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (data) setHistory(data);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          History
        </h2>
        <p className="text-slate-400">View your past green routes and carbon savings.</p>
      </div>

      {loading ? (
        <div className="text-slate-400">Loading history...</div>
      ) : history.length === 0 ? (
        <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-12 text-center">
          <Calendar className="h-16 w-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">No history found</h3>
          <p className="text-slate-400">You haven't completed any tracked trips yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {history.map((tx) => (
            <div key={tx.id} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <Navigation className="h-6 w-6 text-urja-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Route Completed</h3>
                  <p className="text-slate-400 text-sm">{new Date(tx.created_at).toLocaleDateString()} • {tx.fuel_volume_liters}L E85</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-right">
                  <p className="text-sm text-slate-400">CO2 Saved</p>
                  <p className="font-bold text-emerald-400">+{tx.co2_saved_kg} kg</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">Coins Earned</p>
                  <p className="font-bold text-urja-saffron">+{tx.tokens_minted} 🪙</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
