"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineChart, Users, Wallet, ShieldCheck, Activity, CheckCircle2, BedDouble, AlertCircle } from "lucide-react";

// --- High-Fidelity Interactive UI Mockups --- 

export function OpsMockup() {
    return (
        <div className="w-full h-full bg-[#0B1120] rounded-xl border border-white/10 p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden group/ops font-sans">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

            <div className="flex justify-between items-center border-b border-white/10 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover/ops:scale-110 transition-transform">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg leading-tight">Command Center</div>
                        <div className="text-slate-400 text-xs font-medium">DTU Main Campus</div>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-bold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 relative z-10">
                {[
                    { label: "Capacity", val: "1,450", color: "blue" },
                    { label: "Occupancy", val: "94.2%", color: "emerald" },
                    { label: "Dues", val: "₹4.2M", color: "amber" },
                    { label: "Tickets", val: "18", color: "rose" }
                ].map((m, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                        className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col gap-1 cursor-default transition-colors"
                    >
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{m.label}</span>
                        <div className="text-xl font-black text-white">{m.val}</div>
                    </motion.div>
                ))}
            </div>

            <div className="flex gap-4 flex-grow relative z-10 min-h-0">
                <div className="w-2/3 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-white">Utilization Trend</span>
                    </div>
                    <div className="flex-grow flex items-end gap-1.5">
                        {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 55, 95].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h * 0.6}%` }}
                                transition={{ delay: i * 0.05 }}
                                className="flex-1 bg-gradient-to-t from-blue-500/80 to-blue-400/80 rounded-t-[2px] hover:from-blue-400 hover:to-white transition-all cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/3 bg-white/5 border border-white/5 rounded-xl p-4 overflow-hidden">
                    <div className="text-xs font-bold text-white mb-3">Live Alerts</div>
                    <div className="space-y-2">
                        {[
                            { t: "C-104 AC", c: "amber" },
                            { t: "Late Entry", c: "rose" },
                            { t: "Fee Flag", c: "rose" }
                        ].map((act, i) => (
                            <div key={i} className="flex gap-2 items-center p-1.5 rounded bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer">
                                <Activity size={10} className={`text-${act.c}-500`} />
                                <span className="text-[10px] text-slate-300 font-medium truncate">{act.t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ResMockup() {
    return (
        <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-200 p-0 flex shadow-2xl relative overflow-hidden group/res font-sans">
            <div className="w-48 border-r border-slate-200 bg-white flex flex-col p-4 shrink-0">
                <div className="flex items-center gap-2 text-slate-800 font-bold mb-6 text-sm">
                    <Users className="text-blue-600" size={16} /> Directory
                </div>
                <div className="space-y-1">
                    {["All Residents", "Approvals", "Defaulters"].map((item, i) => (
                        <div key={i} className={`px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all ${i === 0 ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-grow flex flex-col bg-slate-50/50">
                <div className="h-12 border-b border-slate-200 bg-white px-4 flex items-center justify-between">
                    <div className="w-32 h-6 bg-slate-100 rounded-md animate-pulse" />
                    <div className="flex gap-2">
                        <div className="w-12 h-6 bg-blue-600 rounded-md shadow-sm shadow-blue-600/20" />
                    </div>
                </div>

                <div className="p-4 flex-grow">
                    <div className="bg-white border border-slate-200 rounded-lg shadow-sm h-full overflow-hidden">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-slate-100 hover:bg-blue-50/30 transition-colors cursor-pointer group-hover/res:translate-x-1 duration-300">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200" />
                                    <div className="space-y-1">
                                        <div className="w-20 h-2.5 bg-slate-200 rounded animate-pulse" />
                                        <div className="w-12 h-2 bg-slate-100 rounded" />
                                    </div>
                                </div>
                                <div className="w-16 h-5 bg-emerald-50 border border-emerald-100 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FinMockup() {
    return (
        <div className="w-full h-full bg-[#110C1B] rounded-xl border border-purple-900/40 p-6 shadow-2xl relative overflow-hidden flex flex-col gap-6 font-sans group/fin">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_40%)]" />

            <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                    <Wallet size={18} className="text-purple-400" />
                    <span className="text-white font-bold text-sm">Finances</span>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 py-1 text-[10px] font-bold bg-purple-600 text-white rounded cursor-pointer"
                >
                    Payouts
                </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-3 relative z-10">
                <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Total Revenue</div>
                    <div className="text-xl font-black text-white">₹18.4M</div>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Growth</div>
                    <div className="text-xl font-black text-emerald-400">+15.2%</div>
                </div>
            </div>

            <div className="flex-grow relative z-10 bg-white/5 border border-white/5 rounded-lg p-4 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <motion.path
                        d="M0 45 Q 10 40, 20 35 T 40 25 T 60 15 T 80 20 T 100 10"
                        fill="none"
                        stroke="#A855F7"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                    />
                </svg>
            </div>
        </div>
    );
}

const dashboards = [
    {
        id: 1,
        title: "Operations Center",
        description: "Live occupancy, ticket routing, and campus health at your fingertips.",
        color: "blue",
        image: <OpsMockup />,
    },
    {
        id: 2,
        title: "Resident Portal",
        description: "Manage thousands of profiles and approvals with zero friction.",
        color: "indigo",
        image: <ResMockup />,
    },
    {
        id: 3,
        title: "Financial Engine",
        description: "Automated billing and reconciliation in a single command dashboard.",
        color: "purple",
        image: <FinMockup />,
    },
];

export function ProductShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-66.6%"]);

    return (
        <section ref={containerRef} className="bg-[#020617] relative py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-16 relative z-10">
                <div className="max-w-2xl">
                    <h2 className="font-heading text-4xl md:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
                        One Dashboard. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#2563EB]">Total Control.</span>
                    </h2>
                    <p className="text-xl text-slate-400">
                        Explore our high-performance modules designed to scale.
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Content */}
            <div className="relative h-[400px] md:h-[600px] w-full">
                <motion.div
                    style={{ x }}
                    className="flex gap-8 px-4 md:px-12 h-full w-[300%] md:w-[250%]"
                >
                    {dashboards.map((dashboard) => (
                        <div
                            key={dashboard.id}
                            className="w-[90vw] md:w-[70vw] lg:w-[800px] flex flex-col gap-6 shrink-0 h-full"
                        >
                            <div className="flex flex-col gap-1">
                                <h3 className="text-2xl font-bold text-white">{dashboard.title}</h3>
                                <p className="text-slate-400 text-sm">{dashboard.description}</p>
                            </div>
                            <div className="flex-grow p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                <div className="w-full h-full relative z-10">
                                    {dashboard.image}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Progress Bar / Indicator */}
            <div className="container mx-auto px-4 mt-12 flex justify-start items-center gap-4">
                <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className="h-full bg-blue-500 origin-left"
                    />
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scroll to explore</span>
            </div>
        </section>
    );
}
