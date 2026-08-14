"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Link from "next/link";
import { Leaf, LogOut, LayoutDashboard, Car, Map, Settings, Star, Bookmark } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return <div className="min-h-screen bg-urja-bg flex items-center justify-center text-urja-green">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-urja-bg text-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col hidden md:flex">
        <Link href="/" className="flex items-center gap-2 mb-10">
          <Leaf className="text-urja-green h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h1>
        </Link>

        <nav className="flex-1 flex flex-col gap-2">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-md bg-slate-800 text-urja-green hover:bg-slate-700 transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/dashboard/vehicles" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
            <Car className="h-5 w-5" />
            Vehicles
          </Link>
          <Link href="/dashboard/route" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
            <Map className="h-5 w-5" />
            E85 Route Planner
          </Link>
          <Link href="/dashboard/kisan-connect" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
            <Leaf className="h-5 w-5" />
            Kisan Connect
          </Link>
          <Link href="/dashboard/history" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
            <LogOut className="h-5 w-5 rotate-180" />
            History
          </Link>
          <Link href="/dashboard/reserve" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
            <Map className="h-5 w-5" />
            Strategic Reserve
          </Link>
          <Link href="/dashboard/challenge" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
            <Star className="h-5 w-5" />
            Challenges
          </Link>
          <Link href="/dashboard/lists" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
            <Bookmark className="h-5 w-5" />
            Saved Lists
          </Link>
          <Link href="/dashboard/assistant" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors text-urja-saffron">
            <Leaf className="h-5 w-5" />
            Prakriti AI
          </Link>
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <Link href="/dashboard/profile" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors text-slate-400">
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 p-3 rounded-md hover:bg-red-900/50 text-red-400 transition-colors text-left">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900">
          <Leaf className="text-urja-green h-6 w-6" />
          <button onClick={handleLogout} className="text-sm text-slate-400">Logout</button>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
