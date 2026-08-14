"use client";

export default function VehicleDetail({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-4">Vehicle Details</h2>
      <p className="text-slate-400">Viewing details for vehicle ID: {params.id}</p>
      <div className="mt-8 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <p className="text-slate-300">You can view specific vehicle diagnostics and AI evaluations here.</p>
      </div>
    </div>
  );
}
