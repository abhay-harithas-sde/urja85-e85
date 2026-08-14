"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Navigation, Map as MapIcon, Zap, Sprout, BarChart3, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
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
          <Link href="#revolution" className="text-slate-300 hover:text-urja-green transition-colors">The Revolution</Link>
          <Link href="#features" className="text-slate-300 hover:text-urja-green transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-slate-300 hover:text-urja-green transition-colors">How it Works</Link>
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
              <Link href="#revolution" className="px-8 py-4 rounded-full bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 hover:scale-105 transition-all border border-slate-700">
                Explore The Mission
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-urja-saffron/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-urja-green/10 blur-[150px] rounded-full" />
          </div>
        </section>

        {/* The Revolution Split Section */}
        <section id="revolution" className="py-24 px-8 bg-slate-950">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeRight}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">The E85 <span className="text-urja-green">Revolution</span></h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                India is shifting gears. By transitioning to E85 (85% Ethanol, 15% Petrol), we are fundamentally altering our energy landscape. This isn't just about cleaner air—it's about energy independence and empowering our agricultural heartland.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Cuts greenhouse gas emissions by up to 80%.",
                  "Directly boosts the income of millions of Indian farmers.",
                  "Massively reduces India's reliance on imported crude oil."
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-urja-saffron shrink-0 mt-1" />
                    <span className="text-slate-300 text-lg">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={scaleUp}
              className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-urja-green/10 border border-slate-800"
            >
              <Image 
                src="/images/eco_station.jpg" 
                alt="Eco-friendly E85 Fuel Station" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">Next-Gen Renewable Fuel Infrastructure</p>
              </div>
            </motion.div>
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

        {/* How it works with Images */}
        <section id="how-it-works" className="py-32 px-8 relative overflow-hidden bg-slate-950">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">How Urja-85 Works</h3>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">A circular economy connecting agriculture directly to the automotive industry.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl"
              >
                <div className="h-72 relative w-full overflow-hidden">
                   <Image src="/images/farm_biomass.jpg" alt="Sugarcane Farm" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-8 bg-slate-900 relative">
                  <span className="absolute -top-12 right-8 text-8xl font-black text-urja-green/20 drop-shadow-md">01</span>
                  <h4 className="text-2xl font-bold mb-3">Farmers Harvest Biomass</h4>
                  <p className="text-slate-400 text-lg">Indian farmers grow sugarcane and other biomass, converting agricultural waste into a valuable national energy resource.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="group relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl"
              >
                <div className="h-72 relative w-full overflow-hidden">
                   <Image src="/images/modern_ev.jpg" alt="Modern Flex-Fuel Car" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-8 bg-slate-900 relative">
                  <span className="absolute -top-12 right-8 text-8xl font-black text-blue-500/20 drop-shadow-md">02</span>
                  <h4 className="text-2xl font-bold mb-3">You Drive Greener</h4>
                  <p className="text-slate-400 text-lg">Consumers fuel up with E85 using our intelligent routing ecosystem, saving money while driving a drastically cleaner vehicle.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* National Impact */}
        <section id="impact" className="py-32 bg-urja-green text-urja-bg px-8 relative overflow-hidden">
          {/* Decorative graphic */}
          <div className="absolute -left-32 -top-32 opacity-10 rotate-45 pointer-events-none">
            <Leaf className="w-96 h-96" />
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
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
                  <span className="text-lg md:text-xl font-bold opacity-80">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
