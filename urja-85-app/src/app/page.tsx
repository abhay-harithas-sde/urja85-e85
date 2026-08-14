"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Navigation, Map as MapIcon, Zap, Sprout, BarChart3, ShieldCheck, ChevronRight } from "lucide-react";

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-urja-bg text-slate-50 font-sans flex flex-col scroll-smooth">
      
      {/* Sticky Glassmorphic Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all">
        <div className="flex items-center gap-3">
          <Leaf className="text-urja-green h-8 w-8" />
          <h1 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h1>
        </div>
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="#features" className="text-slate-300 hover:text-urja-green transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-slate-300 hover:text-urja-green transition-colors">How it Works</Link>
          <Link href="#impact" className="text-slate-300 hover:text-urja-green transition-colors">National Impact</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="px-5 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-colors">Sign In</Link>
          <Link href="/register" className="px-5 py-2.5 rounded-full bg-urja-green text-urja-bg font-bold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col pt-24">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center p-8 overflow-hidden">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="z-10 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-urja-saffron font-medium mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-urja-saffron opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-urja-saffron"></span>
              </span>
              Empowering India's Independence Day 2026
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tight">
              Fueling <span className="text-transparent bg-clip-text bg-gradient-to-r from-urja-saffron via-yellow-400 to-urja-green">New India</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-xl md:text-3xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connecting consumers, farmers, and energy infrastructure to accelerate E85 adoption and achieve Net Zero by 2070.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/register" className="px-8 py-4 rounded-full bg-urja-green text-urja-bg font-bold text-lg hover:bg-emerald-400 hover:scale-105 transition-all shadow-xl shadow-urja-green/20 flex items-center justify-center gap-2">
                Join the Green Revolution <ChevronRight className="h-5 w-5" />
              </Link>
              <Link href="#features" className="px-8 py-4 rounded-full bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 hover:scale-105 transition-all border border-slate-700">
                Explore Features
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-urja-saffron/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-urja-green/10 blur-[150px] rounded-full" />
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="py-32 bg-slate-900/50 px-8 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center mb-20"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Smart Ecosystem Features</h3>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">Powered by Google Gemini AI, Urja-85 offers cutting-edge tools to make the transition to ethanol seamless.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { icon: Zap, color: "text-urja-saffron", title: "Vision AI RC Scanner", desc: "Instantly scan your vehicle Registration Certificate to check E85 compatibility with Gemini 3.5 Flash." },
                { icon: MapIcon, color: "text-blue-400", title: "Predictive Route Planner", desc: "Plot your trips based on E85 station availability and calculate your exact CO2 emission savings." },
                { icon: Sprout, color: "text-urja-green", title: "Kisan Connect", desc: "See your direct economic contribution to Indian farmers for every liter of E85 purchased." }
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700/50 hover:border-urja-green/50 hover:bg-slate-800 transition-all group hover:-translate-y-2">
                  <div className={`p-4 rounded-2xl bg-slate-900/50 inline-block mb-8 group-hover:scale-110 transition-transform ${feature.color}`}>
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-32 px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">How Urja-85 Works</h3>
              <p className="text-xl text-slate-400 max-w-2xl">A circular economy connecting agriculture directly to the automotive industry.</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Farmers Grow", desc: "Farmers harvest sugarcane and biomass, converting waste into wealth." },
                { step: "02", title: "Refineries Brew", desc: "Agricultural products are processed into high-grade E85 ethanol." },
                { step: "03", title: "AI Optimizes", desc: "Our platform routes fuel to stations predicting demand shortages." },
                { step: "04", title: "You Drive Green", desc: "Consumers fuel up, earning carbon credits and reducing emissions by 80%." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700"
                >
                  <span className="text-6xl font-black text-slate-700/50 absolute top-4 right-6">{item.step}</span>
                  <h4 className="text-2xl font-bold mt-12 mb-4 relative z-10">{item.title}</h4>
                  <p className="text-slate-400 relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-urja-green/20 to-transparent -z-10 hidden md:block"></div>
        </section>

        {/* National Impact */}
        <section id="impact" className="py-32 bg-urja-green text-urja-bg px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-20"
            >
              Driving the Nation Forward
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { num: "80%", label: "Less Tailpipe Emissions" },
                { num: "2070", label: "Net Zero Target" },
                { num: "₹50k+", label: "Avg. Farmer Income Boost" },
                { num: "2M+", label: "Tons CO2 Saved" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="flex flex-col items-center"
                >
                  <span className="text-5xl md:text-7xl font-black mb-4">{stat.num}</span>
                  <span className="text-lg md:text-xl font-medium opacity-80">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Premium Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-urja-green h-8 w-8" />
              <h2 className="text-2xl font-bold tracking-tight text-white">Urja<span className="text-urja-saffron">-85</span></h2>
            </div>
            <p className="text-slate-400 max-w-md mb-8">
              A comprehensive tech ecosystem accelerating India's transition to Flex-Fuel. Built with Next.js, Supabase, and Google Gemini AI.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Platform</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/dashboard" className="hover:text-urja-green transition-colors">Dashboard</Link></li>
              <li><Link href="/dashboard/vehicles" className="hover:text-urja-green transition-colors">Vehicle Fleet</Link></li>
              <li><Link href="/dashboard/route" className="hover:text-urja-green transition-colors">Route Planner</Link></li>
              <li><Link href="/dashboard/kisan-connect" className="hover:text-urja-green transition-colors">Kisan Connect</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#" className="hover:text-urja-green transition-colors">Government Policies</Link></li>
              <li><Link href="#" className="hover:text-urja-green transition-colors">Ethanol Pricing</Link></li>
              <li><Link href="#" className="hover:text-urja-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-urja-green transition-colors">Terms of Service</Link></li>
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
    </div>
  );
}
