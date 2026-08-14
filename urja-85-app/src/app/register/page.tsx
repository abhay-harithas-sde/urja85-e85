"use client";
import { useState } from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("driver");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
    } else if (data.user) {
      // Create profile
      const { error: profileError } = await supabase.from('profiles').insert([
        { id: data.user.id, full_name: fullName, email, role }
      ]);
      
      if (profileError) {
        console.error(profileError);
      }
      setSuccess(true);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-urja-bg text-slate-50 flex flex-col items-center justify-center p-4 text-center">
        <Leaf className="text-urja-green h-16 w-16 mb-6" />
        <h2 className="text-3xl font-bold mb-4">Check your email</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          We've sent a verification link to {email}. Please verify your email to continue.
        </p>
        <Link href="/login" className="text-urja-green hover:underline">Return to Login</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-urja-bg text-slate-50 flex flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
        <Leaf className="text-urja-green h-8 w-8" />
        <h1 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h1>
      </Link>
      
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-md mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-slate-50 focus:outline-none focus:border-urja-green transition-colors"
              placeholder="Sardar Patel"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-slate-50 focus:outline-none focus:border-urja-green transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-slate-50 focus:outline-none focus:border-urja-green transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Role</label>
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-slate-50 focus:outline-none focus:border-urja-green transition-colors"
            >
              <option value="driver">Citizen / Driver</option>
              <option value="farmer">Annadata (Farmer)</option>
              <option value="fleet">Fleet Operator</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-urja-saffron text-urja-bg font-bold p-3 rounded-md mt-4 hover:bg-orange-400 transition-colors disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Join Urja-85"}
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account? <Link href="/login" className="text-urja-saffron hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
