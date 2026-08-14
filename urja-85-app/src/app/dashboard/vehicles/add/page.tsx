"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabase";
import { CarFront, Zap, CheckCircle2, XCircle } from "lucide-react";

export default function AddVehicle() {
  const router = useRouter();
  const [rcNumber, setRcNumber] = useState("");
  const [makeModel, setMakeModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [rcFile, setRcFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setRcFile(e.target.files[0]);
    }
  };

  const handleScanAndAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let imageUrl = null;

      // 0. Upload to Cloudinary if file provided
      if (rcFile) {
        const formData = new FormData();
        formData.append("file", rcFile);
        
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadRes.json();
        
        if (!uploadRes.ok) {
          throw new Error(uploadData.error || "Failed to upload image to Cloudinary");
        }
        imageUrl = uploadData.url;
      }

      if (!imageUrl && !makeModel) {
        throw new Error("Please either upload an RC image or provide the Vehicle Make & Model manually.");
      }

      // 1. Call Gemini AI Compatibility Scanner
      const aiResponse = await fetch("/api/scan-rc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicleModel: makeModel, imageUrl }),
      });
      
      const aiData = await aiResponse.json();
      
      if (!aiResponse.ok) {
        throw new Error(aiData.error || "Failed to scan compatibility");
      }

      setScanResult(aiData);

      // 2. Save to database
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const fuelType = aiData.compatible === "Yes" ? "E85_Flex" : "Petrol";
        const validationStatus = aiData.compatible === "Yes" ? "Verified" : "Pending";

        await supabase.from('vehicles').insert([
          { 
            user_id: user.id, 
            rc_number: rcNumber || "SCANNED", 
            make_model: makeModel || "Parsed by AI",
            fuel_type: fuelType,
            validation_status: validationStatus
          }
        ]);
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">Add a Vehicle</h2>
      <p className="text-slate-400 mb-8">Upload your RC document to check E85 compatibility using Vision AI.</p>

      {scanResult ? (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-xl">
          {scanResult.compatible === "Yes" ? (
            <div className="text-urja-green mb-4 flex justify-center"><CheckCircle2 className="h-16 w-16" /></div>
          ) : (
            <div className="text-urja-saffron mb-4 flex justify-center"><XCircle className="h-16 w-16" /></div>
          )}
          <h3 className="text-2xl font-bold mb-2">Compatibility: {scanResult.compatible}</h3>
          <p className="text-slate-300 mb-6">{scanResult.explanation}</p>
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 inline-block mb-8">
            <span className="text-slate-400 block text-sm mb-1">Estimated CO2 Savings Potential</span>
            <span className="text-2xl font-bold text-white">{scanResult.co2_savings_potential_kg} kg / year</span>
          </div>
          <div>
            <button onClick={() => router.push("/dashboard/vehicles")} className="bg-slate-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors">
              Return to Fleet
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleScanAndAdd} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
          {error && <div className="bg-red-900/50 text-red-400 p-4 rounded-xl mb-6 text-sm">{error}</div>}
          
          <div className="space-y-6 mb-8">
            <div className="p-4 border-2 border-dashed border-urja-green/50 rounded-xl bg-slate-800 text-center">
              <label className="block text-sm font-bold text-urja-green mb-2 cursor-pointer">
                Upload RC Image (Cloudinary)
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {rcFile ? (
                <p className="text-slate-300 text-sm">{rcFile.name}</p>
              ) : (
                <p className="text-slate-500 text-sm">Click to select an image or photo of your RC.</p>
              )}
            </div>

            <div className="text-center text-slate-500 text-sm">OR enter details manually</div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">RC Number (Registration)</label>
              <input 
                type="text" 
                value={rcNumber}
                onChange={(e) => setRcNumber(e.target.value.toUpperCase())}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-50 focus:outline-none focus:border-urja-green font-mono tracking-widest uppercase"
                placeholder="MH 12 AB 1234"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Vehicle Make & Model</label>
              <input 
                type="text" 
                value={makeModel}
                onChange={(e) => setMakeModel(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-50 focus:outline-none focus:border-urja-green"
                placeholder="e.g. Toyota Corolla Altis Flex Fuel"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-urja-saffron text-urja-bg font-bold p-4 rounded-xl hover:bg-orange-400 transition-colors disabled:opacity-50"
          >
            <Zap className="h-5 w-5" />
            {loading ? "Scanning with AI..." : "Scan Compatibility & Add"}
          </button>
        </form>
      )}
    </div>
  );
}
