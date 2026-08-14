"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import { CarFront, Plus, Zap } from "lucide-react";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase
        .from('vehicles')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (data) setVehicles(data);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">My Vehicles</h2>
          <p className="text-slate-400">Manage your fleet and verify Flex-Fuel compatibility.</p>
        </div>
        <Link href="/dashboard/vehicles/add" className="flex items-center gap-2 bg-urja-green text-urja-bg font-bold px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors">
          <Plus className="h-5 w-5" /> Add Vehicle
        </Link>
      </div>

      {loading ? (
        <div className="text-slate-400">Loading vehicles...</div>
      ) : vehicles.length === 0 ? (
        <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-12 text-center">
          <CarFront className="h-16 w-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">No vehicles added yet</h3>
          <p className="text-slate-400 mb-6">Add your first vehicle to start tracking your E85 impact.</p>
          <Link href="/dashboard/vehicles/add" className="bg-slate-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors">
            Add a Vehicle
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {vehicles.map((v) => (
            <div key={v.id} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                  <CarFront className="h-8 w-8 text-urja-saffron" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{v.make_model}</h3>
                  <p className="text-slate-400 text-sm">RC: {v.rc_number} • Fuel: {v.fuel_type || "Unknown"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {v.validation_status === 'Verified' ? (
                  <span className="bg-emerald-900/50 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-800 font-medium">Flex-Fuel Verified</span>
                ) : (
                  <span className="bg-orange-900/50 text-orange-400 text-xs px-3 py-1 rounded-full border border-orange-800 font-medium">Pending Scan</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
