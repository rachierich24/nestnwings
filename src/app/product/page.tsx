"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Box, ShieldCheck, Zap, BarChart3, Users, Smartphone, Key } from "lucide-react";
import { OpsMockup, ResMockup, FinMockup } from "@/components/home/ProductShowcase";

export default function ProductPage() {
    return (
        <main className="bg-[#020617] min-h-screen text-white pt-32 pb-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-bold tracking-widest text-xs uppercase mb-8 shadow-sm backdrop-blur-md"
                    >
                        <Box size={14} /> The Platform
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05]"
                    >
                        Inside the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-primary">Core Engine.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Nest n Wings is built on four fundamental pillars, seamlessly connecting every aspect of your hostel's operations, finances, and resident experience.
                    </motion.p>
                </div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
                    
                    {/* BENTO 1: Command Center (Spans full width top) */}
                    <div className="md:col-span-12 rounded-[32px] bg-[#0A101D] border border-white/10 p-8 md:p-12 relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                                    <BarChart3 size={24} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Operations Dashboard</h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    A centralized command center visualizing live occupancy, pending tickets, and overall campus health instantly. No more digging through spreadsheets.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Real-time occupancy forecasting",
                                        "Unified ticketing for maintenance & complaints",
                                        "Live gatepass and attendance monitoring",
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                                            <ShieldCheck size={18} className="text-blue-400" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full h-[350px] md:h-[450px] relative rounded-2xl border border-white/10 bg-[#020617] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] transition-shadow duration-700">
                                <OpsMockup />
                            </div>
                        </div>
                    </div>

                    {/* BENTO 2: Resident Management (Half width logic) */}
                    <div className="md:col-span-12 lg:col-span-6 rounded-[32px] bg-[#0A101D] border border-white/10 p-8 md:p-10 relative overflow-hidden group shadow-2xl flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="relative z-10 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Resident Management</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Maintain detailed profiles for every student. Track allotment history, payment status, and leave requests effortlessly.
                            </p>
                        </div>
                        <div className="mt-auto w-full h-[300px] relative rounded-t-2xl border border-white/10 border-b-0 bg-[#020617] overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="scale-[0.8] origin-top-left w-[125%] h-[125%]">
                                <ResMockup />
                            </div>
                        </div>
                    </div>

                    {/* BENTO 3: Financial Engine (Half width logic) */}
                    <div className="md:col-span-12 lg:col-span-6 rounded-[32px] bg-[#0A101D] border border-white/10 p-8 md:p-10 relative overflow-hidden group shadow-2xl flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="relative z-10 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/30">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Billing & Payments</h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Automated invoice generation, live collection stats, payment gateway sync, and 1-click complex ledger reporting.
                            </p>
                        </div>
                        <div className="mt-auto w-full h-[300px] relative rounded-t-2xl border border-white/10 border-b-0 bg-[#020617] overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="scale-[0.8] origin-top-left w-[125%] h-[125%]">
                                <FinMockup />
                            </div>
                        </div>
                    </div>

                    {/* BENTO 4: Mobile Experience (Full width bottom split) */}
                    <div className="md:col-span-12 rounded-[32px] bg-[#0A101D] border border-white/10 p-8 md:p-12 relative overflow-hidden group shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
                            <div className="lg:col-span-2">
                                <h3 className="text-3xl font-black text-white mb-4">Native Student App</h3>
                                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                    Put power in the hands of the residents. Our beautiful native iOS and Android apps allow students to pay rent, raise maintenance tickets, request leave, and participate in community polls instantly.
                                </p>
                            </div>
                            <div className="lg:col-span-1 flex flex-col gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                                    <Smartphone className="text-primary" size={24} />
                                    <div>
                                        <div className="text-white font-bold">Push Notifications</div>
                                        <div className="text-xs text-slate-400">Rent reminders & announcements</div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                                    <Key className="text-amber-400" size={24} />
                                    <div>
                                        <div className="text-white font-bold">Digital Gatepass</div>
                                        <div className="text-xs text-slate-400">QR-based entry & exit tracking</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Final CTA */}
                <div className="mt-24 text-center">
                    <Link
                        href="/book-demo"
                        className="inline-flex items-center justify-center gap-2 rounded-full text-base font-bold transition-all bg-white text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] h-14 px-10"
                    >
                        Schedule a Walkthrough <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
