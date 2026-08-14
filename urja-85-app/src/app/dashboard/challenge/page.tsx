"use client";
import { Trophy, Star } from "lucide-react";

export default function Challenge() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <Trophy className="h-20 w-20 text-urja-saffron mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-4">Urja-85 Net-Zero Challenge</h2>
      <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
        Complete 10 trips using E85 fuel to earn the "Green Ambassador" badge and unlock toll tax discounts.
      </p>
      
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-xl mx-auto text-left">
        <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Star className="text-yellow-400 h-5 w-5" /> Current Progress</h3>
        <div className="w-full bg-slate-800 rounded-full h-4 mb-2">
          <div className="bg-urja-green h-4 rounded-full" style={{ width: '30%' }}></div>
        </div>
        <p className="text-sm text-slate-400 text-right">3 / 10 Trips Completed</p>
      </div>
    </div>
  );
}
