"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Leaf, Award, Map, Droplet, CarFront } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();
        setProfile(data);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold">Welcome back, {profile?.full_name || "Citizen"}! 🇮🇳</h2>
          <p className="text-slate-400">Here's your impact on India's Net-Zero journey.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400">Urja Coins Balance</p>
          <div className="flex items-center gap-2 text-2xl font-bold text-urja-saffron">
            <Award className="h-6 w-6" />
            {profile?.total_green_coins || 0}
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-emerald-900/50 to-slate-900 border border-emerald-800 p-6 rounded-2xl relative overflow-hidden"
        >
          <div className="z-10 relative">
            <h3 className="text-emerald-400 font-medium mb-1">CO2 Saved</h3>
            <p className="text-4xl font-bold text-white mb-2">125 <span className="text-lg text-emerald-400/70 font-normal">kg</span></p>
            <p className="text-sm text-slate-400">Equivalent to planting 5 trees 🌳</p>
          </div>
          <Leaf className="absolute -bottom-4 -right-4 h-32 w-32 text-emerald-500/10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-orange-900/50 to-slate-900 border border-orange-800 p-6 rounded-2xl relative overflow-hidden"
        >
          <div className="z-10 relative">
            <h3 className="text-orange-400 font-medium mb-1">Farmer Impact (Kisan Connect)</h3>
            <p className="text-4xl font-bold text-white mb-2">₹3,450</p>
            <p className="text-sm text-slate-400">Contributed to Indian rural economy 🚜</p>
          </div>
          <Award className="absolute -bottom-4 -right-4 h-32 w-32 text-orange-500/10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800 border border-slate-700 p-6 rounded-2xl relative overflow-hidden"
        >
          <div className="z-10 relative">
            <h3 className="text-slate-300 font-medium mb-1">Active Vehicles</h3>
            <p className="text-4xl font-bold text-white mb-2">1</p>
            <p className="text-sm text-slate-400">Flex-fuel compatible</p>
          </div>
          <CarFront className="absolute -bottom-4 -right-4 h-32 w-32 text-slate-500/10" />
        </motion.div>
      </div>

      {/* Quick Actions */}
      <h3 className="text-xl font-bold mt-12 mb-4">Quick Actions</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <button className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl transition-colors text-left group">
          <div className="bg-urja-green/20 p-4 rounded-xl group-hover:bg-urja-green/30 transition-colors">
            <Map className="text-urja-green h-8 w-8" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white">Plan E85 Route</h4>
            <p className="text-slate-400 text-sm">Find nearest E85 stations and save carbon.</p>
          </div>
        </button>

        <button className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl transition-colors text-left group">
          <div className="bg-urja-saffron/20 p-4 rounded-xl group-hover:bg-urja-saffron/30 transition-colors">
            <Droplet className="text-urja-saffron h-8 w-8" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white">Scan RC Compatibility</h4>
            <p className="text-slate-400 text-sm">AI checks if your engine supports E85.</p>
          </div>
        </button>
      </div>
    </div>
  );
}
