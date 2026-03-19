"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Info, Smartphone, Users, Zap } from "lucide-react";
import { FinMockup, OpsMockup, ResMockup } from "@/components/home/ProductShowcase";

export default function ProductPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    
    // Parallax
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <main ref={containerRef} className="bg-[#020617] min-h-[300vh] text-white relative selection:bg-blue-500/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 pt-32 md:pt-48 pb-32">
                {/* Hero / Operations Matrix (60/40 Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center mb-24 md:mb-32">
                    
                    {/* Left Column (60) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col pr-0 lg:pr-10" // 40px padding right equivalent
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                            Operations Dashboard
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-slate-400 mb-10 leading-snug">
                            A centralized command center visualizing live occupancy, pending tickets, and overall campus health in real-time.
                        </p>
                        
                        <div className="flex flex-col gap-5">
                            {[
                                "Real-time visibility into your entire campus.",
                                "Trace active maintenance issues automatically.",
                                "Manage staff shifts and availability instantly."
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30 shrink-0">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-base md:text-lg font-medium text-slate-300">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column (40) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-5 w-full min-h-[500px] md:h-[600px] rounded-[24px] overflow-hidden border border-white/5 relative bg-[#020617] shadow-2xl"
                    >
                        <OpsMockup />
                    </motion.div>
                </div>

                {/* BENTO 2 & 3: Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="rounded-[3rem] bg-[#0A101D] border border-white/10 p-8 md:p-12 relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none" />
                            <div className="relative z-10 mb-8">
                                <Users className="text-teal-400 mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">Resident Data</h3>
                                <p className="text-base md:text-lg text-slate-400">
                                    Maintain detailed profiles for every student. Track allotment history, payment status, and leave requests effortlessly.
                                </p>
                            </div>
                            <div className="w-full min-h-[500px] md:h-[500px] flex-grow rounded-2xl overflow-hidden bg-[#020617] border border-white/5 group-hover:border-teal-500/30 transition-all duration-700">
                                <ResMockup />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="rounded-[3rem] bg-[#0A101D] border border-white/10 p-8 md:p-12 relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
                            <div className="relative z-10 mb-8">
                                <Zap className="text-purple-400 mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">Financial Flow</h3>
                                <p className="text-base md:text-lg text-slate-400">
                                    Automated invoice generation, live collection stats, payment gateway sync, and 1-click complex ledger reporting.
                                </p>
                            </div>
                            <div className="w-full min-h-[500px] md:h-[500px] flex-grow rounded-2xl overflow-hidden bg-[#020617] border border-white/5 group-hover:border-purple-500/30 transition-all duration-700">
                                <FinMockup />
                            </div>
                        </motion.div>
                    </div>
            </div>
        </main>
    );
}
