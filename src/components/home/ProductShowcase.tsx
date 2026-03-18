"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineChart, Users, Wallet, ShieldCheck, TrendingUp, CheckCircle2, BedDouble, AlertCircle } from "lucide-react";

// --- High-Fidelity UI Mockups --- 

export function OpsMockup() {
    return (
        <div className="w-full h-full bg-[#0B1120] rounded-xl border border-white/10 p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden font-sans">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
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
                    <div className="w-10 h-10 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center text-slate-300 font-bold text-sm">
                        AD
                    </div>
                </div>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-4 gap-4 relative z-10">
                {[
                    { label: "Total Capacity", val: "1,450", sub: "Beds", color: "blue", trend: "+0" },
                    { label: "Live Occupancy", val: "94.2%", sub: "1,366 Allotted", color: "emerald", trend: "+1.2%" },
                    { label: "Pending Dues", val: "₹4.2M", sub: "82% Collected", color: "amber", trend: "-5.4%" },
                    { label: "Open Tickets", val: "18", sub: "12 Critical", color: "rose", trend: "+3" }
                ].map((m, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-1 relative overflow-hidden group">
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-${m.color}-500/10 rounded-full blur-2xl group-hover:bg-${m.color}-500/20 transition-all`} />
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{m.label}</span>
                        <div className="text-2xl font-black text-white mt-1">{m.val}</div>
                        <div className="flex justify-between items-center mt-auto pt-2">
                            <span className="text-xs text-slate-500">{m.sub}</span>
                            <span className={`text-[10px] font-bold text-${m.color}-400 bg-${m.color}-500/10 px-1.5 py-0.5 rounded`}>{m.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="flex gap-4 flex-grow relative z-10 min-h-0">
                {/* Chart Section */}
                <div className="w-2/3 bg-white/5 border border-white/5 rounded-xl p-5 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-bold text-white">Utilization Trend (30 Days)</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500" /> <span className="text-xs text-slate-400">Boys</span>
                            <div className="w-2 h-2 rounded-full bg-purple-500 ml-2" /> <span className="text-xs text-slate-400">Girls</span>
                        </div>
                    </div>
                    <div className="flex-grow flex items-end gap-2 relative">
                        {/* Mock grid lines */}
                        <div className="absolute inset-x-0 bottom-1/4 h-px bg-white/5" />
                        <div className="absolute inset-x-0 bottom-2/4 h-px bg-white/5" />
                        <div className="absolute inset-x-0 bottom-3/4 h-px bg-white/5" />

                        {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 55, 95, 70, 85, 60].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full group">
                                <div className="w-full bg-gradient-to-t from-purple-500/80 to-purple-400/80 rounded-t-[2px] relative transition-all group-hover:from-purple-400 group-hover:to-purple-300" style={{ height: `${h * 0.4}%` }} />
                                <div className="w-full bg-gradient-to-t from-blue-500/80 to-blue-400/80 rounded-[2px] relative transition-all group-hover:from-blue-400 group-hover:to-blue-300" style={{ height: `${h * 0.6}%` }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="w-1/3 flex flex-col gap-4">
                    <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-5 flex flex-col">
                        <span className="text-sm font-bold text-white mb-4">Urgent Actions</span>
                        <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                            {[
                                { t: "Room Transfer Req", b: "Aryan S. to B-201", c: "amber" },
                                { t: "AC Maintenance", b: "Room C-104", c: "rose" },
                                { t: "Late Entry Flag", b: "Kunal M. - 02:15 AM", c: "rose" },
                                { t: "Fee Default", b: "Block A - 12 Students", c: "amber" }
                            ].map((act, i) => (
                                <div key={i} className="flex gap-3 items-start p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 cursor-pointer">
                                    <div className={`mt-1 w-2 h-2 rounded-full bg-${act.c}-500 shadow-[0_0_8px_rgba(var(--${act.c}-500),0.8)]`} />
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
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-200 bg-white flex flex-col p-4">
                <div className="flex items-center gap-2 text-slate-800 font-bold mb-8 px-2">
                    <Users className="text-blue-600" size={20} /> Directory
                </div>
                <div className="space-y-1">
                    <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold flex justify-between items-center cursor-pointer">
                        All Residents <span className="text-xs bg-blue-100 px-2 py-0.5 rounded-full">1,248</span>
                    </div>
                    <div className="px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium flex justify-between items-center cursor-pointer transition-colors">
                        Pending Approvals <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">12</span>
                    </div>
                    <div className="px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium flex justify-between items-center cursor-pointer transition-colors">
                        Defaulters <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">45</span>
                    </div>
                    <div className="px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium cursor-pointer transition-colors">
                        Room Layouts
                    </div>
                </div>
                <div className="mt-auto px-2">
                    <div className="w-full h-px bg-slate-200 mb-4" />
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-slate-200 shadow-sm overflow-hidden bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">JD</div>
                        <div className="text-xs font-semibold text-slate-700">Warden Desk</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col bg-slate-50/50">
                {/* Topbar */}
                <div className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between">
                    <div className="relative w-64">
                        <input
                            type="text"
                            disabled
                            placeholder="Search residents by name, roll..."
                            className="w-full pl-8 pr-3 py-1.5 text-sm bg-slate-100 border-none rounded-md text-slate-500"
                        />
                        <div className="absolute left-2.5 top-2 text-slate-400"><Users size={14} /></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm">Filter</div>
                        <div className="px-3 py-1.5 bg-blue-600 rounded-lg text-sm font-semibold text-white shadow-sm shadow-blue-600/20">Add New</div>
                    </div>
                </div>

                {/* Table Area */}
                <div className="flex-grow p-6 overflow-hidden flex flex-col">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex-grow flex flex-col overflow-hidden">
                        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-slate-200 bg-slate-50/80 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            <div className="col-span-4">Resident Name</div>
                            <div className="col-span-2">Room Info</div>
                            <div className="col-span-3">Status Flags</div>
                            <div className="col-span-3 text-right">Actions</div>
                        </div>

                        <div className="flex-col divide-y divide-slate-100 overflow-y-auto min-h-0">
                            {[
                                { n: "Aryan Sharma", p: "B.Tech CS - Year 3", r: "A-204", f: ["Fees Cleared", "Pass Active"], c: ["emerald", "blue"] },
                                { n: "Kunal Mathur", p: "B.Tech ME - Year 2", r: "B-110", f: ["Pending Dues"], c: ["amber"] },
                                { n: "Ritvik Kumar", p: "MBA - Year 1", r: "C-305", f: ["Fees Cleared"], c: ["emerald"] },
                                { n: "Devansh Patel", p: "B.Tech EC - Year 4", r: "A-412", f: ["Leave Request", "Pass Inactive"], c: ["purple", "slate"] },
                                { n: "Abhinav Singh", p: "B.Tech CS - Year 2", r: "D-101", f: ["Fees Cleared"], c: ["emerald"] }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-slate-50 transition-colors cursor-pointer group">
                                    <div className="col-span-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-400 text-xs group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            {row.n.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">{row.n}</div>
                                            <div className="text-[11px] text-slate-500 mt-0.5">{row.p}</div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex flex-col justify-center">
                                        <div className="text-sm font-semibold text-slate-700">{row.r}</div>
                                        <div className="text-[10px] text-slate-400 uppercase">Double</div>
                                    </div>
                                    <div className="col-span-3 flex gap-2 flex-wrap items-center">
                                        {row.f.map((flag, idx) => (
                                            <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-bold border bg-${row.c[idx]}-50 text-${row.c[idx]}-600 border-${row.c[idx]}-200`}>
                                                {flag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="col-span-3 flex justify-end gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded font-medium shadow-sm hover:border-slate-300">Edit</div>
                                        <div className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 text-xs rounded font-medium hover:bg-blue-100">Profile</div>
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
        <div className="w-full h-full bg-[#110C1B] rounded-xl border border-purple-900/40 p-6 shadow-2xl relative overflow-hidden flex flex-col gap-6 font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.1),transparent_40%)] pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        <Wallet size={20} />
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">Financial Analytics</div>
                        <div className="text-slate-400 text-xs font-medium">Q3 Total Revenue Ledger</div>
                    </div>
                </div>
                <div className="px-4 py-2 bg-purple-600 hover:bg-purple-500 cursor-pointer transition-colors rounded-lg text-sm font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    Generate Report
                </div>
            </div>

            {/* Scorecards */}
            <div className="grid grid-cols-3 gap-6 relative z-10">
                {[
                    { l: "Collected (YTD)", v: "₹18.4M", p: "+15.2%", c: "emerald" },
                    { l: "Pending Dues", v: "₹4.2M", p: "-2.1%", c: "amber" },
                    { l: "Refunds Processed", v: "₹840K", p: "+0.4%", c: "rose" }
                ].map((card, i) => (
                    <div key={i} className="h-28 bg-[#1B1428]/80 backdrop-blur-sm rounded-xl p-5 border border-purple-900/30 flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
                        <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">{card.l}</span>
                        <div className="flex justify-between items-end">
                            <span className="text-3xl font-black text-white">{card.v}</span>
                            <span className={`text-xs font-bold text-${card.c}-400 bg-${card.c}-500/10 px-2 py-1 rounded-md`}>{card.p}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="flex gap-6 flex-grow relative z-10 min-h-0">
                <div className="w-2/3 bg-[#1B1428]/80 backdrop-blur-sm border border-purple-900/30 rounded-xl p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-bold text-white">Revenue vs Deficit</span>
                        <div className="flex gap-2 text-xs text-slate-400">
                            <span className="px-2 py-1 rounded bg-white/5 cursor-pointer">1M</span>
                            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30 cursor-pointer">6M</span>
                            <span className="px-2 py-1 rounded bg-white/5 cursor-pointer">1Y</span>
                        </div>
                    </div>
                    {/* Simulated SVG Graph for cinematic effect */}
                    <div className="flex-grow relative mt-4">
                        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                            <path d="M0 45 Q 10 40, 20 35 T 40 25 T 60 15 T 80 20 T 100 10" fill="none" stroke="#A855F7" strokeWidth="2.5" className="animate-[dash_3s_ease-out_forwards]" strokeDasharray="200" strokeDashoffset="0" />
                            <path d="M0 45 Q 10 40, 20 35 T 40 25 T 60 15 T 80 20 T 100 10 L 100 50 L 0 50 Z" fill="url(#purpleGrad)" opacity="0.3" />
                            <defs>
                                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#A855F7" />
                                    <stop offset="100%" stopColor="#110C1B" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        {/* Data points */}
                        {[10, 35, 60, 85].map((left, i) => (
                            <div key={i} className="absolute w-2.5 h-2.5 rounded-full bg-[#110C1B] border-2 border-purple-400 shadow-[0_0_10px_#A855F7] z-10" style={{ left: `${left}%`, bottom: `${20 + i * 15}%` }} />
                        ))}
                    </div>
                </div>

                <div className="w-1/3 flex flex-col gap-6">
                    <div className="h-1/2 bg-[#1B1428]/80 backdrop-blur-sm border border-purple-900/30 rounded-xl p-5 flex flex-col">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Collection Channels</span>
                        <div className="flex justify-center flex-grow relative">
                            {/* SVG Donut Chart */}
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
                    <div className="flex-1 bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/30 rounded-xl flex items-center justify-center cursor-pointer group hover:from-purple-800/50 hover:to-pink-800/30 transition-all overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors z-0" />
                        <div className="text-center relative z-10">
                            <div className="w-10 h-10 mx-auto rounded-full bg-purple-500/20 border border-purple-400 text-purple-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                <AlertCircle size={18} />
                            </div>
                            <span className="text-sm font-bold text-white group-hover:text-purple-200">Send Payment Reminders</span>
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

    // Translate on the X axis to slide through the modules
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-106vw"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#020617] mt-12 md:mt-24">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 mb-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-heading text-4xl md:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
                            One Dashboard. <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#2563EB]">Total Control.</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Scroll to swipe through our powerful interfaces, perfectly crafted for performance and ease of use.
                        </p>
                    </motion.div>
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Glow behind product area */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10" />

                    <motion.div
                        style={{ x }}
                        className="flex gap-10 md:gap-16 px-4 md:px-[5vw] pb-12 w-max"
                    >
                        {dashboards.map((dashboard, index) => (
                            <div
                                key={dashboard.id}
                                className="w-[85vw] lg:w-[65vw] flex-shrink-0 flex flex-col gap-6"
                            >
                                <div className="px-2 md:px-4">
                                     <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold tracking-widest text-[10px] md:text-xs uppercase mb-4 backdrop-blur-md">
                                        Module 0{index + 1}
                                    </div>
                                    <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                                        {dashboard.title}
                                    </h3>
                                    <p className="text-slate-400 text-lg max-w-xl">
                                        {dashboard.description}
                                    </p>
                                </div>

                                <div className="w-full aspect-[16/10] md:aspect-[16/9] relative z-20 perspective-[2000px]">
                                    <div className="w-full h-full p-[1px] md:rounded-[1.5rem] rounded-xl bg-gradient-to-b from-white/20 to-transparent shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
                                        {dashboard.image}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
