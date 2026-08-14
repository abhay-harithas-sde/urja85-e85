"use client";
import { Bookmark, Star, Download, Trash2 } from "lucide-react";

export default function Lists() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 flex items-center gap-2"><Bookmark className="text-urja-green" /> Saved Lists</h2>
      <p className="text-slate-400 mb-8">Manage your saved E85 pumps, favorite routes, and archived transactions.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Star className="text-yellow-400 h-5 w-5" /> Favorite Pumps</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex justify-between items-center bg-slate-800 p-3 rounded-lg">
              <span>IOCL E85 - Kothrud, Pune</span>
              <div className="flex gap-2">
                <button className="text-slate-400 hover:text-white"><Download className="h-4 w-4" /></button>
                <button className="text-red-400 hover:text-red-300"><Trash2 className="h-4 w-4" /></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
