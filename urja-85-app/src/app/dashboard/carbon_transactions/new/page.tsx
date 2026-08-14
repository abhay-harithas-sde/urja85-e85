"use client";

export default function NewCarbonTransaction() {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Log a New Carbon Transaction</h2>
      <p className="text-slate-400">Record your E85 fill-up or completed trip to earn Urja Coins.</p>
      <div className="mt-8 bg-slate-900 border border-slate-800 p-8 rounded-2xl text-left">
        <p className="text-slate-300">Form to log fuel volume, date, and selected vehicle goes here.</p>
      </div>
    </div>
  );
}
