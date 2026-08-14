"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { Leaf } from "lucide-react";

export default function Onboarding() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fuelPref, setFuelPref] = useState("E85");

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      }
    };
    checkUser();
  }, [router]);

  const handleComplete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { error } = await supabase
        .from('profiles')
        .update({ fuel_preference: fuelPref, onboarding_completed: true })
        .eq('id', user.id);
        
      if (!error) {
        router.push("/dashboard");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-urja-bg text-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex justify-center mb-6">
          <Leaf className="text-urja-green h-12 w-12" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Complete your profile</h2>
        <p className="text-slate-400 text-center mb-8">Tell us your energy preferences to personalize your experience.</p>
        
        <form onSubmit={handleComplete} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Primary Fuel Preference</label>
            <div className="space-y-3">
              {['E20', 'E85', 'Green Hydrogen', 'EV'].map((fuel) => (
                <label key={fuel} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${fuelPref === fuel ? 'border-urja-green bg-urja-green/10' : 'border-slate-700 bg-slate-800 hover:border-slate-500'}`}>
                  <input 
                    type="radio" 
                    name="fuel" 
                    value={fuel} 
                    checked={fuelPref === fuel}
                    onChange={() => setFuelPref(fuel)}
                    className="hidden"
                  />
                  <span className={`font-medium ${fuelPref === fuel ? 'text-urja-green' : 'text-slate-300'}`}>{fuel}</span>
                </label>
              ))}
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-urja-green text-urja-bg font-bold p-4 rounded-xl mt-2 hover:bg-emerald-400 transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : "Go to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
