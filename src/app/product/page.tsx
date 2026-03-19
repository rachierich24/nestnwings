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
                
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mb-24 md:mb-32"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1] font-black uppercase tracking-tighter mb-6">
                        The Core Engine.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Built for scale.</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-medium text-slate-400 max-w-2xl leading-snug">
                        Nest OS is not just a dashboard. It is a highly robust infrastructure layer designed specifically for high-volume hostel & PG operations.
                    </p>
                </motion.div>

                {/* Massive Bento / Scroll Sequence */}
                <div className="flex flex-col gap-10 md:gap-24">
                    
                    {/* BENTO 1: Operations */}
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between rounded-[3rem] bg-[#0A101D] border border-white/10 p-8 md:p-16 relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/10 to-transparent pointer-events-none" />
                        <div className="lg:w-1/2 relative z-10 flex flex-col">
                            <Zap className="text-blue-500 mb-8 w-12 h-12 md:w-16 md:h-16" />
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Operations Matrix</h2>
                            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg">
                                Real-time visibility into your entire campus. See occupancy rates, pending maintenance, and staff availability in one unified command center.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full min-h-[500px] md:h-[550px] lg:h-[600px] rounded-[2rem] overflow-hidden border border-white/5 relative bg-[#020617] group-hover:border-blue-500/30 transition-colors duration-700">
                            <OpsMockup />
                        </div>
                    </motion.div>

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
            </div>
        </main>
    );
}
