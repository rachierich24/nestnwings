"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ClipboardCheck, CheckCircle2, BedDouble, Users, Wallet, LayoutDashboard } from "lucide-react";

const features = [
    { id: "apps", title: "Applications", icon: ClipboardCheck, top: "20%", left: "15%", description: "Streamline intake" },
    { id: "approve", title: "Approval Flow", icon: CheckCircle2, top: "45%", left: "25%", description: "1-click verification" },
    { id: "allot", title: "Smart Allotment", icon: BedDouble, top: "30%", left: "75%", description: "AI-driven mapping" },
    { id: "manage", title: "Resident Management", icon: Users, top: "65%", left: "80%", description: "Full directories" },
    { id: "pay", title: "Payments & Fines", icon: Wallet, top: "75%", left: "40%", description: "Automated billing" },
];

export function SolutionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeFeature, setActiveFeature] = useState<string | null>(null);

    // 3D Parallax Scroll Setup
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[150vh] bg-[#0F172A] overflow-hidden flex flex-col items-center pt-32 pb-48"
        >
            {/* Cinematic Background Glows */}
            <motion.div
                style={{ y: bgY }}
                className="absolute top-0 right-[-10%] w-[60%] h-[60%] rounded-full bg-[#1D2A78]/30 blur-[150px] pointer-events-none"
            />

            {/* Context Header */}
            <div className="container mx-auto px-4 relative z-20 text-center mb-16 md:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6"
                >
                    The Hostel <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #2563EB, #22D3EE)" }}>Command Center</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto font-medium"
                >
                    One unified dashboard to control the entire lifecycle of your community, from the first application to the final checkout.
                </motion.p>
            </div>

            {/* Huge Sticky 3D Dashboard Showcase */}
            <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto relative z-10 sticky top-[15vh]" style={{ perspective: "2000px" }}>
                <motion.div
                    style={{
                        scale,
                        rotateX,
                        opacity,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl md:rounded-[40px] bg-[#1E293B]/60 border border-white/10 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center p-8 md:p-12"
                >
                    {/* Inner glowing edge */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl md:rounded-[40px] pointer-events-none" />

                    {/* Placeholder for the actual app UI Graphic */}
                    <div className="w-full h-full rounded-2xl md:rounded-3xl bg-[#0F172A]/80 border border-white/5 relative overflow-hidden shadow-2xl flex flex-col">
                        {/* Mock App Header */}
                        <div className="h-16 border-b border-white/5 flex items-center px-8 gap-4 bg-white/[0.02]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="w-64 h-6 rounded-md bg-white/5 ml-8" />
                        </div>

                        {/* Mock App Body */}
                        <div className="flex-1 flex p-8 gap-8">
                            {/* Mock Sidebar */}
                            <div className="w-48 hidden md:flex flex-col gap-4">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className={`h-10 rounded-lg ${i === 0 ? 'bg-[#3B82F6]/20' : 'bg-white/5'}`} />
                                ))}
                            </div>
                            {/* Mock Main Content Area */}
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex gap-6">
                                    <div className="flex-1 h-32 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-transparent border border-[#3B82F6]/20" />
                                    <div className="flex-1 h-32 rounded-xl bg-white/5 border border-white/5" />
                                    <div className="flex-1 h-32 rounded-xl bg-white/5 border border-white/5" />
                                </div>
                                <div className="flex-1 rounded-xl bg-white/5 border border-white/5" />
                            </div>
                        </div>

                        {/* Interactive Floating Hotspots */}
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            const isActive = activeFeature === feature.id;

                            return (
                                <div
                                    key={feature.id}
                                    className="absolute hidden md:block" // Hidden on small mobile to prevent overlap
                                    style={{ top: feature.top, left: feature.left }}
                                    onMouseEnter={() => setActiveFeature(feature.id)}
                                    onMouseLeave={() => setActiveFeature(null)}
                                >
                                    {/* The node/dot */}
                                    <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                                        <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#3B82F6]' : 'bg-[#1D2A78]'}`} />
                                        <div className="absolute inset-0 rounded-full bg-[#3B82F6] animate-ping opacity-20" />
                                        <div className="w-2 h-2 rounded-full bg-white z-10" />
                                    </div>

                                    {/* The Tooltip/Card */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-12 left-1/2 -translate-x-1/2 w-48 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)] z-50 text-white flex flex-col items-center text-center"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center mb-3">
                                                    <Icon size={20} />
                                                </div>
                                                <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                                                <p className="text-xs text-[#94A3B8]">{feature.description}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            );
                        })}

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
