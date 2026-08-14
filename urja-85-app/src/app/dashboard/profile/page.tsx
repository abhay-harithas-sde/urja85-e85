"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { User, Shield } from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
        setProfile(data);
      }
    }
    fetchProfile();
  }, []);

  if (!profile) return <div className="p-8 text-slate-400">Loading Profile...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><User className="text-urja-green" /> Profile Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-slate-400">Full Name</label>
          <div className="bg-slate-800 p-3 rounded-lg text-white">{profile.full_name}</div>
        </div>
        <div>
          <label className="block text-sm text-slate-400">Email</label>
          <div className="bg-slate-800 p-3 rounded-lg text-white">{profile.email}</div>
        </div>
        <div>
          <label className="block text-sm text-slate-400">Fuel Preference</label>
          <div className="bg-slate-800 p-3 rounded-lg text-urja-green font-bold">{profile.fuel_preference || 'Not Set'}</div>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
          <Shield className="h-4 w-4" /> Account secured by Supabase Auth
        </div>
      </div>
    </div>
  );
}
