"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineChart, Users, Wallet, ShieldCheck, TrendingUp, CheckCircle2, BedDouble, AlertCircle } from "lucide-react";

// --- High-Fidelity UI Mockups --- 

export function OpsMockup() {
    return (
        <div className="w-full h-full bg-[#0B1120] rounded-xl border border-white/10 p-3 md:p-6 flex flex-col gap-3 md:gap-6 shadow-2xl relative overflow-hidden font-sans">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-3 md:pb-4 relative z-10">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                        <ShieldCheck size={14} className="md:hidden" />
                        <ShieldCheck size={20} className="hidden md:block" />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm md:text-lg leading-tight">Command Center</div>
                        <div className="text-slate-400 text-[10px] md:text-xs font-medium">DTU Main Campus</div>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-3 items-center">
                    <div className="px-2 md:px-3 py-1 md:py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md md:rounded-lg text-emerald-400 text-[10px] md:text-xs font-bold flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                    </div>
                    <div className="w-7 h-7 md:w-10 md:h-10 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center text-slate-300 font-bold text-[10px] md:text-sm">
                        AD
                    </div>
                </div>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 relative z-10">
                {[
                    { label: "Capacity", val: "1,450", sub: "Beds", color: "blue", trend: "+0" },
                    { label: "Occupancy", val: "94.2%", sub: "1,366", color: "emerald", trend: "+1.2%" },
                    { label: "Dues", val: "₹4.2M", sub: "82%", color: "amber", trend: "-5.4%" },
                    { label: "Tickets", val: "18", sub: "12 Crit", color: "rose", trend: "+3" }
                ].map((m, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-lg md:rounded-xl p-2 md:p-4 flex flex-col gap-0.5 md:gap-1 relative overflow-hidden">
                        <span className="text-[8px] md:text-xs text-slate-400 font-medium uppercase tracking-wider">{m.label}</span>
                        <div className="text-base md:text-2xl font-black text-white">{m.val}</div>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-[8px] md:text-xs text-slate-500">{m.sub}</span>
                            <span className={`text-[8px] md:text-[10px] font-bold text-${m.color}-400 bg-${m.color}-500/10 px-1 md:px-1.5 py-0.5 rounded`}>{m.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 flex-grow relative z-10 min-h-0">
                {/* Chart Section */}
                <div className="md:w-2/3 bg-white/5 border border-white/5 rounded-lg md:rounded-xl p-3 md:p-5 flex flex-col min-h-[120px] md:min-h-0">
                    <div className="flex justify-between items-center mb-3 md:mb-6">
                        <span className="text-[10px] md:text-sm font-bold text-white">Utilization (30d)</span>
                        <div className="hidden md:flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500" /> <span className="text-xs text-slate-400">Boys</span>
                            <div className="w-2 h-2 rounded-full bg-purple-500 ml-2" /> <span className="text-xs text-slate-400">Girls</span>
                        </div>
                    </div>
                    <div className="flex-grow flex items-end gap-1 md:gap-2 relative">
                        <div className="absolute inset-x-0 bottom-1/4 h-px bg-white/5" />
                        <div className="absolute inset-x-0 bottom-2/4 h-px bg-white/5" />
                        {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 55, 95, 70, 85, 60].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end gap-0.5 h-full">
                                <div className="w-full bg-gradient-to-t from-purple-500/80 to-purple-400/80 rounded-t-[2px]" style={{ height: `${h * 0.4}%` }} />
                                <div className="w-full bg-gradient-to-t from-blue-500/80 to-blue-400/80 rounded-[2px]" style={{ height: `${h * 0.6}%` }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity — hidden on mobile */}
                <div className="hidden md:flex md:w-1/3 flex-col gap-4">
                    <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-5 flex flex-col">
                        <span className="text-sm font-bold text-white mb-4">Urgent Actions</span>
                        <div className="space-y-3 overflow-y-auto pr-2">
                            {[
                                { t: "Room Transfer Req", b: "Aryan S. to B-201", c: "amber" },
                                { t: "AC Maintenance", b: "Room C-104", c: "rose" },
                                { t: "Late Entry Flag", b: "Kunal M. - 02:15 AM", c: "rose" },
                                { t: "Fee Default", b: "Block A - 12 Students", c: "amber" }
                            ].map((act, i) => (
                                <div key={i} className="flex gap-3 items-start p-2 rounded-lg bg-white/5">
                                    <div className={`mt-1 w-2 h-2 rounded-full bg-${act.c}-500`} />
                                    <div>
                                        <div className="text-xs font-bold text-white">{act.t}</div>
                                        <div className="text-[10px] text-slate-400 mt-0.5">{act.b}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ResMockup() {
    return (
        <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-200 p-0 flex shadow-2xl relative overflow-hidden font-sans">
            {/* Sidebar — hidden on mobile */}
            <div className="hidden md:flex w-64 border-r border-slate-200 bg-white flex-col p-4">
                <div className="flex items-center gap-2 text-slate-800 font-bold mb-8 px-2">
                    <Users className="text-blue-600" size={20} /> Directory
                </div>
                <div className="space-y-1">
                    <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold flex justify-between items-center">
                        All Residents <span className="text-xs bg-blue-100 px-2 py-0.5 rounded-full">1,248</span>
                    </div>
                    <div className="px-3 py-2 text-slate-600 rounded-lg text-sm font-medium flex justify-between items-center">
                        Pending Approvals <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">12</span>
                    </div>
                    <div className="px-3 py-2 text-slate-600 rounded-lg text-sm font-medium flex justify-between items-center">
                        Defaulters <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">45</span>
                    </div>
                    <div className="px-3 py-2 text-slate-600 rounded-lg text-sm font-medium">
                        Room Layouts
                    </div>
                </div>
                <div className="mt-auto px-2">
                    <div className="w-full h-px bg-slate-200 mb-4" />
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">JD</div>
                        <div className="text-xs font-semibold text-slate-700">Warden Desk</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col bg-slate-50/50">
                {/* Topbar */}
                <div className="h-10 md:h-16 border-b border-slate-200 bg-white px-3 md:px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 md:hidden">
                        <Users className="text-blue-600" size={14} />
                        <span className="text-xs font-bold text-slate-700">Directory</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">1,248</span>
                    </div>
                    <div className="relative hidden md:block w-64">
                        <input type="text" disabled placeholder="Search residents..." className="w-full pl-8 pr-3 py-1.5 text-sm bg-slate-100 border-none rounded-md text-slate-500" />
                        <div className="absolute left-2.5 top-2 text-slate-400"><Users size={14} /></div>
                    </div>
                    <div className="flex gap-1.5 md:gap-2">
                        <div className="px-2 md:px-3 py-1 md:py-1.5 bg-white border border-slate-200 rounded-md md:rounded-lg text-[10px] md:text-sm font-medium text-slate-600">Filter</div>
                        <div className="px-2 md:px-3 py-1 md:py-1.5 bg-blue-600 rounded-md md:rounded-lg text-[10px] md:text-sm font-semibold text-white">Add New</div>
                    </div>
                </div>

                {/* Table Area */}
                <div className="flex-grow p-2 md:p-6 overflow-hidden flex flex-col">
                    <div className="bg-white border border-slate-200 rounded-lg md:rounded-xl shadow-sm flex-grow flex flex-col overflow-hidden">
                        {/* Header — simplified on mobile */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-slate-200 bg-slate-50/80 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            <div className="col-span-4">Resident Name</div>
                            <div className="col-span-2">Room</div>
                            <div className="col-span-3">Status</div>
                            <div className="col-span-3 text-right">Actions</div>
                        </div>

                        <div className="flex-col divide-y divide-slate-100 overflow-y-auto min-h-0">
                            {[
                                { n: "Aryan Sharma", p: "CS - Yr 3", r: "A-204", f: ["Paid"], c: ["emerald"] },
                                { n: "Kunal Mathur", p: "ME - Yr 2", r: "B-110", f: ["Pending"], c: ["amber"] },
                                { n: "Ritvik Kumar", p: "MBA - Yr 1", r: "C-305", f: ["Paid"], c: ["emerald"] },
                                { n: "Devansh Patel", p: "EC - Yr 4", r: "A-412", f: ["Leave"], c: ["purple"] },
                                { n: "Abhinav Singh", p: "CS - Yr 2", r: "D-101", f: ["Paid"], c: ["emerald"] }
                            ].map((row, i) => (
                                <div key={i} className="flex items-center gap-2 md:grid md:grid-cols-12 md:gap-4 px-2 md:px-6 py-2 md:py-4 hover:bg-slate-50 transition-colors">
                                    <div className="md:col-span-4 flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-400 text-[10px] md:text-xs shrink-0">
                                            {row.n.charAt(0)}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[11px] md:text-sm font-bold text-slate-800 truncate">{row.n}</div>
                                            <div className="text-[9px] md:text-[11px] text-slate-500">{row.p}</div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 shrink-0">
                                        <div className="text-[10px] md:text-sm font-semibold text-slate-700">{row.r}</div>
                                    </div>
                                    <div className="md:col-span-3 shrink-0">
                                        {row.f.map((flag, idx) => (
                                            <span key={idx} className={`px-1.5 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-bold border bg-${row.c[idx]}-50 text-${row.c[idx]}-600 border-${row.c[idx]}-200`}>
                                                {flag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="hidden md:flex md:col-span-3 justify-end gap-2 items-center">
                                        <div className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded font-medium">Edit</div>
                                        <div className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 text-xs rounded font-medium">Profile</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FinMockup() {
    return (
        <div className="w-full h-full bg-[#110C1B] rounded-xl border border-purple-900/40 p-3 md:p-6 shadow-2xl relative overflow-hidden flex flex-col gap-3 md:gap-6 font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.1),transparent_40%)] pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2.5 rounded-lg md:rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        <Wallet size={14} className="md:hidden" />
                        <Wallet size={20} className="hidden md:block" />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm md:text-lg">Financial Analytics</div>
                        <div className="text-slate-400 text-[10px] md:text-xs font-medium">Q3 Revenue Ledger</div>
                    </div>
                </div>
                <div className="px-2 md:px-4 py-1 md:py-2 bg-purple-600 rounded-md md:rounded-lg text-[10px] md:text-sm font-bold text-white">
                    Report
                </div>
            </div>

            {/* Scorecards */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 relative z-10">
                {[
                    { l: "Collected", v: "₹18.4M", p: "+15.2%", c: "emerald" },
                    { l: "Pending", v: "₹4.2M", p: "-2.1%", c: "amber" },
                    { l: "Refunds", v: "₹840K", p: "+0.4%", c: "rose" }
                ].map((card, i) => (
                    <div key={i} className="h-16 md:h-28 bg-[#1B1428]/80 rounded-lg md:rounded-xl p-2 md:p-5 border border-purple-900/30 flex flex-col justify-between">
                        <span className="text-[8px] md:text-xs font-medium text-slate-400 uppercase">{card.l}</span>
                        <div className="flex justify-between items-end">
                            <span className="text-sm md:text-3xl font-black text-white">{card.v}</span>
                            <span className={`hidden md:inline text-xs font-bold text-${card.c}-400 bg-${card.c}-500/10 px-2 py-1 rounded-md`}>{card.p}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 flex-grow relative z-10 min-h-0">
                <div className="md:w-2/3 bg-[#1B1428]/80 border border-purple-900/30 rounded-lg md:rounded-xl p-3 md:p-6 flex flex-col min-h-[100px] md:min-h-0">
                    <div className="flex justify-between items-center mb-3 md:mb-6">
                        <span className="text-[10px] md:text-sm font-bold text-white">Revenue vs Deficit</span>
                        <div className="hidden md:flex gap-2 text-xs text-slate-400">
                            <span className="px-2 py-1 rounded bg-white/5">1M</span>
                            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">6M</span>
                            <span className="px-2 py-1 rounded bg-white/5">1Y</span>
                        </div>
                    </div>
                    <div className="flex-grow relative mt-2 md:mt-4">
                        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                            <path d="M0 45 Q 10 40, 20 35 T 40 25 T 60 15 T 80 20 T 100 10" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeDasharray="200" strokeDashoffset="0" />
                            <path d="M0 45 Q 10 40, 20 35 T 40 25 T 60 15 T 80 20 T 100 10 L 100 50 L 0 50 Z" fill="url(#purpleGrad)" opacity="0.3" />
                            <defs>
                                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#A855F7" />
                                    <stop offset="100%" stopColor="#110C1B" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Sidebar — hidden on mobile */}
                <div className="hidden md:flex md:w-1/3 flex-col gap-6">
                    <div className="h-1/2 bg-[#1B1428]/80 border border-purple-900/30 rounded-xl p-5 flex flex-col">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Collection Channels</span>
                        <div className="flex justify-center flex-grow relative">
                            <svg className="w-full h-full pb-2" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#312e81" strokeWidth="12" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#A855F7" strokeWidth="12" strokeDasharray="160 250" strokeLinecap="round" className="origin-center -rotate-90" />
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#EC4899" strokeWidth="12" strokeDasharray="60 250" strokeDashoffset="-165" strokeLinecap="round" className="origin-center -rotate-90" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-xl font-bold text-white">65%</span>
                                <span className="text-[9px] text-slate-400">Online</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-10 h-10 mx-auto rounded-full bg-purple-500/20 border border-purple-400 text-purple-300 flex items-center justify-center mb-2">
                                <AlertCircle size={18} />
                            </div>
                            <span className="text-sm font-bold text-white">Send Reminders</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const dashboards = [
    {
        id: 1,
        title: "Operations Dashboard",
        description: "A centralized command center visualizing live occupancy, pending tickets, and overall campus health.",
        color: "from-blue-500/30 via-[#0a0a0a] to-blue-900/10",
        image: <OpsMockup />,
    },
    {
        id: 2,
        title: "Resident Management",
        description: "Directly manage student profiles, approve leaves, and oversee block allotments effortlessly.",
        color: "from-slate-500/30 via-[#0a0a0a] to-slate-900/10",
        image: <ResMockup />,
    },
    {
        id: 3,
        title: "Payments & Billing",
        description: "Automated invoice generation, live collection stats, and 1-click ledger reporting.",
        color: "from-purple-500/30 via-[#0a0a0a] to-pink-900/10",
        image: <FinMockup />,
    },
];

export function ProductShowcase() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-110vw"]);

    return (
        <section ref={targetRef} className="relative h-[350vh] bg-[#020617]">
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
                {/* Header */}
                <div className="w-full max-w-[1200px] mx-auto px-6 pt-24 pb-8 relative z-10 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-heading text-4xl md:text-[56px] font-bold tracking-tight text-white mb-4 leading-tight">
                            One Dashboard. <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#2563EB]">Total Control.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                            Scroll to explore our powerful interfaces — click any module to dive deeper.
                        </p>
                    </motion.div>
                </div>

                {/* Horizontal Slider — takes all remaining viewport height */}
                <div className="relative w-full overflow-hidden flex-1 min-h-0 flex items-center">
                    {/* Subtle ambient glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] bg-primary/8 rounded-full blur-[180px] pointer-events-none" />

                    <motion.div
                        style={{ x }}
                        className="flex gap-8 md:gap-14 px-6 md:px-[4vw] w-max items-stretch"
                        // Fill height minus some breathing room
                        // Each card stretches to this height
                    >
                        {dashboards.map((dashboard, index) => (
                            <motion.div
                                key={dashboard.id}
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="w-[90vw] md:w-[80vw] lg:w-[75vw] flex-shrink-0 flex flex-col gap-4 group cursor-pointer"
                                style={{ height: "calc(100vh - 220px)" }}
                            >
                                {/* Module Label + Title */}
                                <div className="px-1 md:px-2 shrink-0 flex items-end gap-6">
                                    <div>
                                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-semibold tracking-widest text-[10px] md:text-xs uppercase mb-2 backdrop-blur-md">
                                            Module 0{index + 1}
                                        </div>
                                        <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
                                            {dashboard.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-500 text-sm max-w-md hidden md:block mb-1">
                                        {dashboard.description}
                                    </p>
                                </div>

                                {/* Dashboard — fills remaining height, no cropping */}
                                <div className="flex-1 min-h-0 w-full relative rounded-2xl md:rounded-[1.5rem] overflow-hidden border border-white/[0.08] group-hover:border-white/20 transition-all duration-500 shadow-[0_20px_80px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_100px_rgba(20,184,166,0.15)]">
                                    {/* Gradient border glow on hover */}
                                    <div className="absolute inset-0 rounded-2xl md:rounded-[1.5rem] border border-transparent group-hover:border-primary/20 transition-all duration-500 pointer-events-none z-10" />
                                    {/* The actual mockup fills the container */}
                                    <div className="w-full h-full">
                                        {dashboard.image}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <div className="shrink-0 pb-6 flex justify-center">
                    <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center gap-2 text-slate-500 text-xs font-medium"
                    >
                        <span>Scroll to explore</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-slate-500">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
