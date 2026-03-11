"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, Users, ChevronDown, TrendingUp, Wallet, CheckCircle2, LineChart } from "lucide-react";
import { OpsMockup, ResMockup, FinMockup } from "./ProductShowcase";

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
            className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-[120px] pb-[140px]"
        >
            {/* The $1B Aesthetic Background: Massive, heavily blurred organic brand aura */}
            <motion.div
                style={{ y: auraY, opacity }}
                className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
            >
                {/* Orange/Blue Mesh Gradient Aura */}
                <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#14B8A6]/10 blur-[120px] mix-blend-multiply" />
                <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/10 blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-[#22D3EE]/10 blur-[150px] mix-blend-multiply" />

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
                        filter: "blur(0.4px)",
                    }}
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img
                        src="/hero-illustration.png"
                        alt="Modern Hostel Campus Background"
                        className="w-full h-auto object-contain transform-gpu"
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
                            className="flex flex-col items-start"
                        >
                            {/* Refined Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-[12px] py-[6px] rounded-full bg-white border border-black/[0.08] shadow-sm text-[#020617] text-[12px] font-semibold mb-[20px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#2563EB] animate-pulse" />
                                Next Generation Hostel Platform
                            </div>

                            {/* Ultra-Refined Slate Headline */}
                            <h1 className="font-heading text-5xl sm:text-[60px] lg:text-[72px] font-bold tracking-[-0.04em] text-[#020617] mb-6 leading-[1.05] max-w-[540px]">
                                The operating <br />
                                system for <br />
                                <span className="text-[#020617]">hostels.</span>
                            </h1>

                            {/* Subtext */}
                            <p className="text-[19px] text-[#475569] mb-8 mt-2 max-w-[480px] leading-[1.6] font-medium tracking-tight">
                                Automate allotment, payments, attendance and daily operations — all from one intelligent, unified dashboard.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link
                                    href="/book-demo"
                                    className="group inline-flex items-center justify-center gap-2 h-14 px-[28px] py-[14px] rounded-full bg-[#020617] text-white font-medium text-base transition-all duration-300 hover:bg-[#1e293b] hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                                >
                                    Book a Demo
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/product"
                                    className="group inline-flex items-center justify-center gap-2 h-14 px-[28px] py-[14px] rounded-full bg-white border border-black/[0.08] shadow-sm text-[#020617] font-medium text-base transition-all duration-300 hover:border-black/[0.12] hover:bg-gray-50 active:scale-[0.98]"
                                >
                                    Explore Platform
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: High-Fidelity UI Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ y: uiY }}
                        className="lg:col-span-7 relative h-[650px] w-full mt-4 lg:mt-0 flex flex-col lg:block z-20 perspective-[2000px]"
                    >
                        {/* Layer 3: Floating SaaS UI Cards (Desktop Cluster / Mobile Carousel) */}
                        <div className="relative z-20 w-full h-full flex items-center lg:block transform-style-3d">

                            <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 px-4 w-full scrollbar-hide">
                                <div className="snap-center shrink-0 w-[85%] sm:w-[320px]">
                                    <OccupancyCard />
                                </div>
                                <div className="snap-center shrink-0 w-[85%] sm:w-[320px]">
                                    <RevenueCard />
                                </div>
                                <div className="snap-center shrink-0 w-[85%] sm:w-[320px]">
                                    <AllotmentsCard />
                                </div>
                                <div className="snap-center shrink-0 w-[85%] sm:w-[280px]">
                                    <ResidentsCard />
                                </div>
                            </div>

                            <div className="hidden lg:block w-full h-full absolute inset-0">

                                {/* Main Centerpiece: Allotments */}
                                <motion.div
                                    className="absolute top-[25%] right-[20%]"
                                    style={{ zIndex: 30 }}
                                    animate={{
                                        y: [-8, 8, -8],
                                        rotateY: [-2, 2, -2],
                                        rotateX: [1, -1, 1]
                                    }}
                                    transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 0 }}
                                >
                                    <AllotmentsCard />
                                </motion.div>

                                {/* Occupancy: Top Right */}
                                <motion.div
                                    className="absolute top-[5%] right-[-5%]"
                                    style={{ zIndex: 20 }}
                                    animate={{
                                        y: [-5, 5, -5],
                                        rotateZ: [2, 4, 2]
                                    }}
                                    transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                                >
                                    <OccupancyCard />
                                </motion.div>

                                {/* Revenue: Bottom Right */}
                                <motion.div
                                    className="absolute top-[60%] right-[5%]"
                                    style={{ zIndex: 40 }}
                                    animate={{
                                        y: [-6, 6, -6],
                                        rotateZ: [-2, -4, -2]
                                    }}
                                    transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity, delay: 2 }}
                                >
                                    <RevenueCard />
                                </motion.div>

                                {/* Residents: Middle Left */}
                                <motion.div
                                    className="absolute top-[45%] left-[5%]"
                                    style={{ zIndex: 50 }}
                                    animate={{
                                        y: [-4, 4, -4],
                                    }}
                                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 3 }}
                                >
                                    <ResidentsCard />
                                </motion.div>

                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 z-30 pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-12 rounded-full border-2 border-black/10 flex items-start justify-center p-1"
                >
                    <div className="w-1.5 h-3 bg-black/20 rounded-full" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

// Reusable Glassmorphic Card Components 

function OccupancyCard() {
    return (
        <div className="w-full lg:w-[280px] p-5 rounded-2xl bg-white/90 backdrop-blur-[8px] border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.12),0_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-3 transition-transform hover:-translate-y-1 rotate-2">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 text-[#3B82F6]">
                    <div className="p-2 rounded-lg bg-[#3B82F6]/10">
                        <Users size={16} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">Live Occupancy</span>
                </div>
                <div className="px-2 py-1 rounded-md bg-[#10B981]/15 text-[#10B981] text-[10px] uppercase tracking-wider font-bold">Live</div>
            </div>
            <div className="text-4xl font-black text-[#0F172A] tracking-tight">94<span className="text-xl text-[#64748B] font-semibold">%</span></div>
            <div className="w-full h-1.5 bg-[#E2E8F0]/50 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] w-[94%] rounded-full relative">
                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-[2px] animate-[shimmer_2s_infinite]" />
                </div>
            </div>
        </div>
    );
}

function RevenueCard() {
    return (
        <div className="w-full lg:w-[260px] p-5 rounded-2xl bg-white/90 backdrop-blur-[8px] border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.12),0_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-3 transition-transform hover:-translate-y-1 -rotate-2">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 text-[#0ea5e9]">
                    <div className="p-2 rounded-lg bg-[#0ea5e9]/10">
                        <Wallet size={16} />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">Monthly Rev</span>
                </div>
                <TrendingUp size={16} className="text-[#10B981]" />
            </div>
            <div className="text-4xl font-black text-[#0F172A] tracking-tight"><span className="text-xl text-[#64748B] font-semibold">₹</span>4.2M</div>
            <div className="text-xs text-[#64748B] font-medium">+15% vs last month</div>
        </div>
    );
}

function AllotmentsCard() {
    return (
        <div className="w-full lg:w-[360px] rounded-2xl bg-white/90 backdrop-blur-[8px] border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.12),0_8px_16px_rgba(0,0,0,0.08)] p-6 flex flex-col transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-center mb-5">
                <div className="text-base font-bold text-[#1E293B] flex items-center gap-2">
                    Recent Allotments
                </div>
                <Users size={16} className="text-[#64748B]" />
            </div>
            <div className="space-y-4">
                {[
                    { name: "Rahul Sharma", room: "A-204", status: "Checked In", color: "bg-[#10B981]" },
                    { name: "Priya Patel", room: "B-110", status: "Pending", color: "bg-[#F59E0B]" },
                    { name: "Arjun Verma", room: "C-305", status: "Checked In", color: "bg-[#10B981]" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] flex items-center justify-center text-[#64748B] font-bold text-sm border border-white shadow-sm ring-1 ring-transparent group-hover:ring-[#3B82F6]/30 transition-all">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <div className="text-[15px] font-bold text-[#1E293B] tracking-tight">{item.name}</div>
                                <div className="text-xs text-[#64748B] font-medium mt-0.5">{item.room}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${item.color}`} />
                            <div className="text-xs font-semibold text-[#475569]">
                                {item.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ResidentsCard() {
    return (
        <div className="w-full lg:w-[220px] bg-white/90 backdrop-blur-[8px] px-4 py-3 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12),0_8px_16px_rgba(0,0,0,0.08)] border border-white/40 flex items-center gap-3 transition-transform hover:-translate-y-1">
            <div className="p-2 rounded-xl bg-[#1D2A78]/10 text-[#1D2A78]">
                <CheckCircle2 size={18} />
            </div>
            <div>
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wide">Residents</div>
                <div className="text-sm font-black text-[#0F172A]">128 Active</div>
            </div>
        </div>
    );
}
