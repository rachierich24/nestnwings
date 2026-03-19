"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react";
import { Blog1FlowMockup, Blog2FlowMockup, AllotmentFlowDiagram } from "@/components/blog/BlogMockups";

export default function BlogPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    
    // Parallax
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <main ref={containerRef} className="bg-[#020617] min-h-[300vh] text-white relative selection:bg-purple-500/30 overflow-hidden">
            {/* Background Narrative Text */}
            <div className="fixed top-1/4 left-0 w-full pointer-events-none z-0 flex justify-center opacity-5">
                <motion.h1 style={{ y: yTransform }} className="text-[25vw] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-[#020617] whitespace-nowrap leading-none tracking-tighter">
                    THE LOGS
                </motion.h1>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10 pt-48 pb-32">
                
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mb-32 md:mb-48"
                >
                    <h1 className="text-6xl md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-8">
                        Nest Logs.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Industry Insights.</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-medium text-slate-400 max-w-3xl leading-snug">
                        Deep dives into hostel management architecture, student psychology, and operational scale.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-24 md:gap-48">
                    {/* Article 1 */}
                    <motion.article 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2 }}
                        className="group"
                    >
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                <div className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                                    <span className="text-purple-400">Architecture</span>
                                    <span>•</span>
                                    <span>Mar 12, 2026</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 group-hover:text-purple-400 transition-colors duration-500">
                                    The 4-Step Allocation Pipeline
                                </h2>
                                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                                    How we transformed a chaotic, error-prone week-long room assignment process into a beautiful 4-step digital pipeline that executes perfectly.
                                </p>
                                <Link href="#" className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors">
                                    Read Article <ArrowRight size={20} />
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <div className="h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden bg-[#0A101D] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] group-hover:scale-[1.02] group-hover:border-purple-500/30 transition-all duration-700 p-2 relative">
                                    <div className="absolute inset-0 bg-purple-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <div className="relative z-10 w-full h-full">
                                        <Blog1FlowMockup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <AllotmentFlowDiagram />
                        </div>
                    </motion.article>

                    {/* Article 2 */}
                    <motion.article 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2 }}
                        className="group"
                    >
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden bg-[#0A101D] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] group-hover:scale-[1.02] group-hover:border-teal-500/30 transition-all duration-700 p-2 relative">
                                    <div className="absolute inset-0 bg-teal-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <div className="relative z-10 w-full h-full">
                                        <Blog2FlowMockup />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                                    <span className="text-teal-400">Engineering</span>
                                    <span>•</span>
                                    <span>Feb 28, 2026</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 group-hover:text-teal-400 transition-colors duration-500">
                                    Killing the Spreadsheet
                                </h2>
                                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                                    Why building your operations on top of `room_allotment_final_v3.xlsx` is a ticking time bomb, and how a unified platform eliminates `#REF!` forever.
                                </p>
                                <Link href="#" className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-white hover:text-teal-400 transition-colors">
                                    Read Article <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.article>
                </div>
            </div>
        </main>
    );
}
