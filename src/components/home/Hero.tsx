"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, User, Home, Activity, CheckCircle2 } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const uiY = useTransform(scrollYProgress, [0, 1], ["0px", "-15px"]);
    const auraY = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);
    const illustrationY = useTransform(scrollYProgress, [0, 1], ["0px", "-10px"]);
    const backgroundColor = useTransform(scrollYProgress, [0.7, 1], ["#FAFAFA", "#0F172A"]);

    return (
        <motion.section
            ref={containerRef}
            style={{ backgroundColor }}
            className="relative min-h-[85vh] md:min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-[100px] md:pt-[180px] pb-[48px] md:pb-[80px]"
        >
            {/* The $1B Aesthetic Background: Massive, heavily blurred organic brand aura */}
            <motion.div
                style={{ y: auraY, opacity }}
                className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
            >
                {/* Orange/Blue Mesh Gradient Aura */}
                <div className="absolute top-[20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-[#14B8A6]/10 blur-[80px] md:blur-[120px] mix-blend-multiply" />
                <div className="absolute top-[10%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#2563EB]/10 blur-[80px] md:blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-[-10%] left-[20%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-[#22D3EE]/10 blur-[100px] md:blur-[150px] mix-blend-multiply" />

                {/* Subtle noise texture overlay for organic feel */}
                <div
                    className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </motion.div>

            {/* Layer 2: Hostel Illustration Merged Background */}
            <motion.div style={{ y: illustrationY }} className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-end overflow-hidden opacity-40 mix-blend-multiply">
                <motion.div
                    className="absolute right-[-80px] bottom-[-40px] w-[140%] md:w-[130%] lg:w-[100%] max-w-[1200px]"
                    style={{
                        transform: "scale(1.15)",
                    }}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image
                        src="/hero-illustration.png"
                        alt="Modern Hostel Campus Background"
                        width={1200}
                        height={800}
                        priority
                        className="w-full h-auto object-contain transform-gpu"
                        style={{
                            filter: "blur(0.4px)",
                        }}
                    />
                </motion.div>

                {/* Aggressive radial fade on the left side to merge into text area and remove the vertical split */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: 'radial-gradient(circle at 30% 50%, rgba(250,250,250,1) 0%, rgba(250,250,250,0.95) 25%, rgba(250,250,250,0.6) 45%, rgba(250,250,250,0) 65%)'
                    }}
                />
            </motion.div>

            <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 relative z-10 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Left Side: Copy */}
                    <motion.div
                        style={{ y: textY, opacity }}
                        className="lg:col-span-5 relative z-30"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            {/* Refined Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-[12px] py-[6px] rounded-full bg-white border border-black/[0.08] shadow-sm text-[#020617] text-[12px] font-semibold mb-[20px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#2563EB] animate-pulse" />
                                Next Generation Hostel Platform
                            </div>

                            <h1 className="font-heading text-[36px] md:text-[50px] lg:text-[64px] font-bold tracking-[-0.04em] text-[#020617] mb-6 leading-[1.05] max-w-[600px] text-center lg:text-left">
                                Run Your Hostel <br className="hidden md:block" />
                                Like Modern <br className="hidden md:block" />
                                <span className="text-[#020617]">Software.</span>
                            </h1>

                            {/* Subtext */}
                            <p className="text-[16px] md:text-[19px] text-[#475569] mb-8 mt-2 max-w-[480px] leading-[1.6] font-medium tracking-tight mx-auto lg:mx-0">
                                Automate allotment, payments, attendance and operations in one dashboard.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
                                <Link
                                    href="/book-demo"
                                    className="group inline-flex items-center justify-center gap-2 h-14 px-[28px] py-[14px] rounded-full bg-[#020617] text-white font-medium text-base transition-all duration-300 hover:bg-[#1e293b] hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                                >
                                    👉 Book a Demo
                                </Link>
                                <Link
                                    href="/product"
                                    className="group inline-flex items-center justify-center gap-2 h-14 px-[28px] py-[14px] rounded-full bg-white border border-black/[0.08] shadow-sm text-[#020617] font-medium text-base transition-all duration-300 hover:border-black/[0.12] hover:bg-gray-50 active:scale-[0.98]"
                                >
                                    👉 See How It Works
                                </Link>
                            </div>

                            {/* Micro-trust */}
                            <div className="flex items-center gap-3 text-[13px] text-slate-500 font-medium">
                                <div className="flex -space-x-2">
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-[#FAFAFA]" />
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 border-2 border-[#FAFAFA]" />
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 border-2 border-[#FAFAFA]" />
                                </div>
                                <p className="text-center lg:text-left">Used by modern campuses & co-living operators</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: High-Fidelity UI Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 relative h-[340px] md:h-[500px] lg:h-[650px] w-full mt-6 md:mt-12 lg:mt-0 flex flex-col lg:block z-20 perspective-[2000px]"
                    >
                        <AllocationFlow />
                    </motion.div>

                </div>
            </div>


        </motion.section>
    );
}

// New Interactive Allocation Flow Visualizer
function AllocationFlow() {
    return (
        <div className="w-full h-full relative flex items-start md:items-center justify-center perspective-[2000px]">
            {/* Background glowing orb */}
            <div className="absolute w-[300px] h-[300px] bg-[#14B8A6]/15 rounded-full blur-[80px]" />
            <div className="absolute w-[200px] h-[200px] bg-[#2563EB]/15 rounded-full blur-[60px] translate-x-20 translate-y-20" />

            <motion.div
                animate={{ rotateY: [-2, 2, -2], rotateX: [1, -1, 1], y: [-5, 5, -5] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="relative w-full max-w-[420px] bg-white/90 backdrop-blur-2xl border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)] rounded-3xl p-6 flex flex-col gap-8 transform-style-3d"
            >
                <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                            <Activity size={14} className="text-white" />
                        </div>
                        <span className="text-sm font-bold text-slate-800 tracking-tight">Smart Match Engine</span>
                    </div>
                    <div className="px-2.5 py-1 bg-emerald-100/50 text-emerald-600 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Running
                    </div>
                </div>

                <div className="relative h-[120px] w-full mt-4 z-10">
                    {/* Background Connection Path */}
                    <svg className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-16 overflow-hidden pointer-events-none" viewBox="0 0 400 64" preserveAspectRatio="xMidYMid meet">
                        <path d="M 20,32 C 80,32 130,-10 200,32 C 270,74 320,32 380,32" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                        <motion.path
                            d="M 20,32 C 80,32 130,-10 200,32 C 270,74 320,32 380,32"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-between px-2">
                        {/* 1. Student */}
                        <motion.div
                            className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center justify-center gap-1 z-10"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <User size={18} className="text-blue-500" />
                            <span className="text-[9px] font-bold text-slate-500">New App</span>
                        </motion.div>

                        {/* 2. Room Algorithm */}
                        <motion.div
                            className="w-16 h-16 bg-[#0F172A] rounded-2xl shadow-xl border border-slate-800 flex flex-col items-center justify-center gap-1.5 z-10"
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <Activity size={20} className="text-teal-400" />
                            <span className="text-[9px] font-bold text-slate-300">Matching</span>
                        </motion.div>

                        {/* 3. Approved Room */}
                        <motion.div
                            className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-emerald-100 flex flex-col items-center justify-center gap-1 z-10"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <Home size={18} className="text-emerald-500" />
                            <span className="text-[9px] font-bold text-slate-500">Assigned</span>
                        </motion.div>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mt-2 z-10">
                    <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={16} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-800">Auto-Approved: Block B, Room 302</div>
                            <div className="text-[10px] text-slate-500 font-medium">Payment link dispatched automatically.</div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
