"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { User, Shield, Edit2, Check, X } from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const [userAuth, setUserAuth] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Edit form state
  const [editName, setEditName] = useState("");
  const [editFuel, setEditFuel] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserAuth(user);
        const { data } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
        const profileData = data || { id: user.id, full_name: 'Unknown User', email: user.email, fuel_preference: 'Not Set', role: 'driver' };
        setProfile(profileData);
        setEditName(profileData.full_name);
        setEditFuel(profileData.fuel_preference === 'Not Set' ? 'E85' : profileData.fuel_preference);
      }
    }
    fetchProfile();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    const updates = {
      id: userAuth.id,
      full_name: editName,
      fuel_preference: editFuel,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('profiles').upsert(updates);
    
    if (!error) {
      setProfile({ ...profile, full_name: editName, fuel_preference: editFuel });
      setIsEditing(false);
    } else {
      console.error(error);
      alert("Failed to update profile.");
    }
    setLoading(false);
  };

  if (!profile) return <div className="p-8 text-slate-400">Loading Profile...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2"><User className="text-urja-green" /> Profile Settings</h2>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
            <Edit2 className="h-4 w-4" /> Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(false)} className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
              <X className="h-4 w-4" /> Cancel
            </button>
            <button onClick={handleSave} disabled={loading} className="flex items-center gap-2 bg-urja-green text-urja-bg px-4 py-2 rounded-lg font-bold hover:bg-emerald-400 transition-colors">
              <Check className="h-4 w-4" /> {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Full Name</label>
          {isEditing ? (
            <input 
              type="text" 
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-urja-green"
            />
          ) : (
            <div className="bg-slate-800 p-3 rounded-lg text-white">{profile.full_name}</div>
          )}
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Email</label>
          <div className="bg-slate-800/50 p-3 rounded-lg text-slate-400 cursor-not-allowed">{profile.email}</div>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Fuel Preference</label>
          {isEditing ? (
            <select 
              value={editFuel}
              onChange={(e) => setEditFuel(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-urja-green"
            >
              <option value="E85">E85 (85% Ethanol)</option>
              <option value="E20">E20 (20% Ethanol)</option>
              <option value="EV">Electric (EV)</option>
              <option value="Green Hydrogen">Green Hydrogen</option>
              <option value="Petrol/Diesel">Standard Petrol / Diesel</option>
            </select>
          ) : (
            <div className="bg-slate-800 p-3 rounded-lg text-urja-green font-bold">{profile.fuel_preference || 'Not Set'}</div>
          )}
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm text-slate-500 pt-4 border-t border-slate-800">
          <Shield className="h-4 w-4" /> Account secured by Supabase Auth
        </div>
      </div>
    </div>
  );
}
