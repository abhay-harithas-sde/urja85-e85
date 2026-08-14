"use client";
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="text-urja-green h-8 w-8" />
            <h2 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h2>
          </div>
          <p className="text-slate-400 max-w-md mb-8">
            A comprehensive tech ecosystem accelerating India's transition to Flex-Fuel. Build with Vitality for Drive.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link href="/dashboard" className="hover:text-urja-green transition-colors">Dashboard</Link></li>
            <li><Link href="/dashboard/vehicles" className="hover:text-urja-green transition-colors">Vehicle Fleet</Link></li>
            <li><Link href="/dashboard/route" className="hover:text-urja-green transition-colors">Route Planner</Link></li>
            <li><Link href="/dashboard/kisan-connect" className="hover:text-urja-green transition-colors">Kisan Connect</Link></li>
            <li><Link href="/integrations" className="hover:text-orange-400 text-orange-500/80 transition-colors font-medium">AI Integrations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Solutions</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link href="/solutions/farmers" className="hover:text-urja-green transition-colors">For Farmers</Link></li>
            <li><Link href="/solutions/fleets" className="hover:text-urja-green transition-colors">For Fleet Operators</Link></li>
            <li><Link href="/solutions/omc" className="hover:text-urja-green transition-colors">For OMCs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link href="/policies" className="hover:text-urja-green transition-colors">Government Policies</Link></li>
            <li><Link href="/pricing" className="hover:text-urja-green transition-colors">Ethanol Pricing</Link></li>
            <li><Link href="/privacy" className="hover:text-urja-green transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-urja-green transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
        <p>© 2026 Urja-85 Initiative. Proudly built for India's Independence Day Hackathon.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
          <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
          <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
