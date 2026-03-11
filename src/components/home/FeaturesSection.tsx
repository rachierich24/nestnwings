"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BedDouble, Users, Wallet, ShieldCheck, MailPlus, LineChart, AlertCircle } from "lucide-react";

const features = [
    {
        title: "Smart Room Allotment",
        description: "Automatically assign rooms based on gender, academic year, preferences, and availability rules.",
        icon: BedDouble,
        ui: (
            <div className="absolute right-0 bottom-0 w-[85%] h-[80%] bg-[#0F172A] rounded-tl-xl border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-4 gap-3">
                {/* Auto Assign UI Replica */}
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <div className="text-xs font-semibold text-white">Allotment Queue</div>
                    <div className="h-6 px-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded text-[10px] font-bold flex items-center justify-center">Auto-Assign Active</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    {[
                        { n: "Aryan S.", s: 92 }, { n: "Kunal M.", s: 88 },
                        { n: "Ritvik K.", s: 85 }, { n: "Devansh", s: 79 }
                    ].map((st, i) => (
                        <div key={i} className="rounded-lg border border-white/5 bg-white/5 p-2 flex flex-col gap-2">
                            <div className="text-[10px] text-white font-medium">{st.n}</div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${st.s}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Resident Management",
        description: "Manage every resident profile in one place. Track details, allocation, and history.",
        icon: Users,
        ui: (
            <div className="absolute right-0 bottom-0 w-[85%] h-[80%] bg-[#0F172A] rounded-tl-xl border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-4">
                {/* Resident Profile Slice */}
                <div className="flex gap-3 items-center pb-3 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">JD</div>
                    <div className="flex flex-col">
                        <div className="text-sm font-semibold text-white">John Doe</div>
                        <div className="text-[10px] text-slate-400">Room 304 • Aryabhatta</div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium text-center">Fees Cleared</div>
                    <div className="flex-1 py-1.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium text-center">Active Pass</div>
                </div>
                <div className="space-y-1 mt-auto">
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-3/4 bg-white/5 rounded" />
                </div>
            </div>
        ),
    },
    {
        title: "Payments & Billing",
        description: "Track hostel fees and fines with automated billing, tracking, and receipts.",
        icon: Wallet,
        ui: (
            <div className="absolute right-0 bottom-0 w-[85%] h-[80%] bg-[#0F172A] rounded-tl-xl border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-3">
                {/* Billing Ledger */}
                <div className="flex justify-between items-center mb-1">
                    <div className="text-xs font-medium text-slate-400">Total Outstanding</div>
                    <div className="text-sm font-bold text-amber-400">₹42,500</div>
                </div>
                <div className="space-y-2 mt-2">
                    {[
                        { amt: "₹12,000", stat: "Paid", color: "text-emerald-400" },
                        { amt: "₹5,500", stat: "Pending", color: "text-amber-400" },
                        { amt: "₹25,000", stat: "Paid", color: "text-emerald-400" }
                    ].map((tx, i) => (
                        <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-white/5 border border-white/5">
                            <div className="text-xs text-white font-medium">{tx.amt}</div>
                            <div className={`text-[9px] font-bold ${tx.color} uppercase tracking-wider`}>{tx.stat}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Attendance & Security",
        description: "Digitally track hostel attendance, entry logs, and security records.",
        icon: ShieldCheck,
        ui: (
            <div className="absolute right-0 bottom-0 w-[85%] h-[80%] bg-[#0F172A] rounded-tl-xl border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] p-5">
                {/* Timeline UI */}
                <div className="text-xs font-medium text-white mb-4">Gate Logs - Today</div>
                <div className="relative pl-4 space-y-4 before:absolute before:inset-y-0 before:left-1.5 before:w-px before:bg-white/10">
                    {[
                        { t: "10:42 AM", act: "Exited Campus", c: "border-primary bg-[#0F172A]" },
                        { t: "09:15 AM", act: "Entered Campus", c: "border-emerald-500 bg-emerald-500" },
                        { t: "08:30 AM", act: "Breakfast Scan", c: "border-slate-500 bg-slate-500" }
                    ].map((log, i) => (
                        <div key={i} className="relative">
                            <div className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 ${log.c}`} />
                            <div className="text-[10px] text-slate-500 mb-0.5">{log.t}</div>
                            <div className="text-xs text-white font-medium">{log.act}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Requests & Approvals",
        description: "Handle operational requests like room swaps, maintenance, and leave requests effortlessly.",
        icon: MailPlus,
        ui: (
            <div className="absolute right-0 bottom-0 w-[85%] h-[80%] bg-[#0F172A] rounded-tl-xl border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-3">
                {/* Ticketing UI */}
                {[
                    { title: "AC Maintenance", type: "Urgent", color: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
                    { title: "Room Change", type: "Standard", color: "bg-white/5 text-slate-300 border-white/10" }
                ].map((req, i) => (
                    <div key={i} className="p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div className="text-xs font-semibold text-white">{req.title}</div>
                            <div className={`text-[9px] px-1.5 py-0.5 rounded border font-medium ${req.color}`}>{req.type}</div>
                        </div>
                        {i === 0 && (
                            <div className="flex gap-2 mt-2">
                                <div className="flex-1 py-1 rounded bg-white/5 text-slate-300 text-[9px] text-center border border-white/10">Reject</div>
                                <div className="flex-1 py-1 rounded bg-primary text-white text-[9px] font-medium text-center shadow-lg shadow-primary/20">Approve</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: "Operational Dashboard",
        description: "Complete visibility for wardens and admins. Track occupancy, revenue, and issues.",
        icon: LineChart,
        ui: (
            <div className="absolute right-0 bottom-0 w-[85%] h-[80%] bg-[#0F172A] rounded-tl-xl border-t border-l border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-4">
                {/* Mini Graph Slice */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 flex flex-col gap-1">
                        <div className="text-[9px] text-slate-400 uppercase tracking-wide">Occupancy</div>
                        <div className="text-sm font-bold text-white">94%</div>
                    </div>
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 flex flex-col gap-1">
                        <div className="text-[9px] text-slate-400 uppercase tracking-wide">Revenue</div>
                        <div className="text-sm font-bold text-white">82%</div>
                    </div>
                </div>
                <div className="flex-grow rounded-lg border border-white/5 flex items-end p-2 gap-1 overflow-hidden relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                    {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-[2px] relative z-10" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        ),
    },
];

export function FeaturesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeFeature, setActiveFeature] = useState<string | null>(null);

    // 3D Parallax Scroll Setup for Dashboard
    const { scrollYProgress: dashScrollY } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"],
    });

    const scale = useTransform(dashScrollY, [0, 0.5], [0.8, 1]);
    const rotateX = useTransform(dashScrollY, [0, 0.5], [20, 0]);
    const opacity = useTransform(dashScrollY, [0, 0.3], [0, 1]);
    const bgY = useTransform(dashScrollY, [0, 1], ["0%", "15%"]);

    // Dashboard hotspots data
    const dashboardFeatures = [
        { id: "apps", title: "Applications", icon: MailPlus, top: "20%", left: "15%", description: "Streamline intake" },
        { id: "approve", title: "Approval Flow", icon: ShieldCheck, top: "45%", left: "25%", description: "1-click verification" },
        { id: "allot", title: "Smart Allotment", icon: BedDouble, top: "30%", left: "75%", description: "AI-driven mapping" },
        { id: "manage", title: "Resident Management", icon: Users, top: "65%", left: "80%", description: "Full directories" },
        { id: "pay", title: "Payments & Fines", icon: Wallet, top: "75%", left: "40%", description: "Automated billing" },
    ];

    return (
        <section className="bg-[#0F172A] relative min-h-screen overflow-hidden">
            {/* --- PART 1: THE 3D COMMAND CENTER (Merged from SolutionSection) --- */}
            <div ref={containerRef} className="relative pt-32 pb-32 md:pb-48 flex flex-col items-center">

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
                        The Hostel <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #14B8A6, #2563EB)" }}>Command Center</span>
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
                <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto relative z-10" style={{ perspective: "2000px" }}>
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

                            {/* Mock App Body - Native Replica of "One Control" Dashboard */}
                            <div className="flex-1 w-full h-full flex bg-[#0B1120] text-slate-300 font-sans overflow-hidden">
                                {/* Left Sidebar - Exact Admin Navbar Structure */}
                                <div className="w-56 hidden lg:flex flex-col border-r border-white/10 bg-[#0F172A] p-4 gap-6 relative z-10">
                                    <div className="flex items-center gap-3 px-2">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/20">
                                            <ShieldCheck size={18} className="text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white tracking-tight leading-none">Admin Portal</div>
                                            <div className="text-[10px] font-medium text-slate-500 mt-1">DTU Allotment</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1 mt-2">
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Overview</div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
                                            <LineChart size={16} /> Analytics
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors text-slate-400">
                                            <BedDouble size={16} /> Allotments
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors text-slate-400">
                                            <Users size={16} /> Students
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1 mt-2">
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Operations</div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors text-slate-400">
                                            <MailPlus size={16} /> Requests
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors text-slate-400">
                                            <div className="flex items-center gap-3"><Wallet size={16} /> Refunds</div>
                                            <div className="w-2 h-2 rounded-full bg-rose-500" />
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors text-slate-400 border border-transparent">
                                            <AlertCircle size={16} /> Notices
                                        </div>
                                    </div>

                                    <div className="mt-auto px-2">
                                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                                                <Users size={14} className="text-slate-300" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold text-white">Chief Warden</span>
                                                <span className="text-[10px] text-emerald-400">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content Dashboard Area */}
                                <div className="flex-1 flex flex-col min-w-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B1120] to-[#0B1120]">
                                    {/* Top Utility Bar */}
                                    <div className="h-16 border-b border-white/10 px-8 flex items-center justify-between bg-[#0F172A]/80 backdrop-blur-md sticky top-0 z-20">
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <span>Dashboard</span>
                                            <span className="text-slate-600">/</span>
                                            <span className="text-white font-medium">Command Center</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> All Systems Nominal
                                            </div>
                                        </div>
                                    </div>

                                    {/* Central Command Grid */}
                                    <div className="flex-1 p-8 overflow-hidden flex flex-col gap-6">
                                        {/* Status row */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 relative overflow-hidden group">
                                                <div className="absolute right-0 top-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all opacity-50" />
                                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Occupancy Rate</div>
                                                <div className="text-3xl font-bold text-white tracking-tight flex items-end gap-2">94.2% <span className="text-emerald-400 text-sm font-medium mb-1">+1.2%</span></div>
                                                <div className="h-1.5 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                                                    <div className="h-full bg-primary w-[94.2%] rounded-full relative">
                                                        <div className="absolute inset-0 bg-white/20 w-1/2 rounded-full blur-[2px]" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 relative overflow-hidden group">
                                                <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all opacity-50" />
                                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Fee Collection</div>
                                                <div className="text-3xl font-bold text-white tracking-tight flex items-end gap-2">₹12.4M <span className="text-amber-400 text-sm font-medium mb-1">82%</span></div>
                                                <div className="h-1.5 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                                                    <div className="h-full bg-amber-500 w-[82%] rounded-full relative">
                                                        <div className="absolute inset-0 bg-white/20 w-1/2 rounded-full blur-[2px]" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 relative overflow-hidden group">
                                                <div className="absolute right-0 top-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all opacity-50" />
                                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Action Required</div>
                                                <div className="text-3xl font-bold text-white tracking-tight flex items-center justify-between">
                                                    18
                                                    <div className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full border border-red-500/20 font-medium">Resolve Now</div>
                                                </div>
                                                <div className="text-xs text-slate-500 mt-2">8 Refunds · 10 Maintenance</div>
                                            </div>
                                        </div>

                                        {/* Action Modules */}
                                        <div className="flex-1 grid grid-cols-2 gap-4">
                                            <div className="rounded-2xl border border-white/10 bg-[#0F172A]/50 p-6 flex flex-col">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="font-semibold text-white">Recent Allotments</h3>
                                                    <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View All</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    {[
                                                        { name: "Rahul Sharma", host: "Aryabhatta", stat: "Assigned" },
                                                        { name: "Priya Singh", host: "Kalpana", stat: "Pending docs" },
                                                        { name: "Amit Kumar", host: "CV Raman", stat: "Checked in" },
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                                                                    {item.name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm font-medium text-white">{item.name}</div>
                                                                    <div className="text-xs text-slate-500">{item.host}</div>
                                                                </div>
                                                            </div>
                                                            <div className={`text-xs px-2 py-1 rounded border ${item.stat === 'Assigned' ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' : item.stat === 'Checked in' ? 'text-blue-400 bg-blue-400/10 border-blue-400/20' : 'text-amber-400 bg-amber-400/10 border-amber-400/20'}`}>
                                                                {item.stat}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="rounded-2xl border border-white/10 bg-[#0F172A]/50 p-6 flex flex-col relative overflow-hidden">
                                                {/* Mini graph visualization */}
                                                <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 flex items-end justify-between px-2 gap-1 pointer-events-none">
                                                    {[20, 40, 30, 70, 50, 90, 60, 100, 80, 40, 60].map((h, i) => (
                                                        <div key={i} className="w-full bg-primary rounded-t-sm" style={{ height: `${h}%` }} />
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between mb-2 relative z-10">
                                                    <h3 className="font-semibold text-white">System Activity</h3>
                                                </div>
                                                <p className="text-xs text-slate-400 relative z-10 mb-6">Traffic and requests over the last 24 hours.</p>

                                                <div className="mt-auto relative z-10">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-4xl font-bold text-white tracking-tight">4,289</span>
                                                        <span className="text-sm font-medium text-slate-400">Requests handled</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Floating Hotspots */}
                            {dashboardFeatures.map((feature) => {
                                const Icon = feature.icon;
                                const isActive = activeFeature === feature.id;

                                return (
                                    <div
                                        key={feature.id}
                                        className="absolute hidden md:block"
                                        style={{ top: feature.top, left: feature.left }}
                                        onMouseEnter={() => setActiveFeature(feature.id)}
                                        onMouseLeave={() => setActiveFeature(null)}
                                    >
                                        <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                                            <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${isActive ? 'bg-gradient-to-r from-[#14B8A6] to-[#2563EB]' : 'bg-[#1D2A78]'}`} />
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#2563EB] animate-ping opacity-20" />
                                            <div className="w-2 h-2 rounded-full bg-white z-10" />
                                        </div>

                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                className="absolute top-12 left-1/2 -translate-x-1/2 w-48 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)] z-50 text-white flex flex-col items-center text-center"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#14B8A6]/20 to-[#2563EB]/20 text-white flex items-center justify-center mb-3">
                                                    <Icon size={20} />
                                                </div>
                                                <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                                                <p className="text-xs text-[#94A3B8]">{feature.description}</p>
                                            </motion.div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Feature Cards Grid (Bottom Half) */}
            <div className="relative z-10 container mx-auto px-4 mt-20">
                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading"
                    >
                        Everything you need to build a better community.
                    </motion.h3>
                    <p className="text-[#94A3B8] max-w-2xl mx-auto">
                        Powerful features designed specifically for the unique challenges of student housing and co-living spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative h-[380px] rounded-3xl bg-[#1E293B]/40 border border-white/5 overflow-hidden backdrop-blur-md hover:bg-[#1E293B]/60 transition-colors duration-500"
                        >
                            {/* Magnetic Hover Glow (requires client cursor tracking in a real app, simulated here via CSS) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="p-8 h-full flex flex-col relative z-20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center text-primary shadow-[0_4px_20px_rgba(20,184,166,0.2)] group-hover:scale-110 transition-transform duration-500">
                                        <feature.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white font-heading tracking-tight">{feature.title}</h4>
                                </div>
                                <p className="text-sm text-[#94A3B8] leading-relaxed relative z-20">
                                    {feature.description}
                                </p>

                                {/* The Native UI Replica */}
                                <div className="mt-8 flex-1 relative transition-transform duration-500 group-hover:-translate-y-2">
                                    {/* Subtle shadow beneath the mockup */}
                                    <div className="absolute bottom-0 right-0 w-[90%] h-1/2 bg-black/50 blur-2xl rounded-full" />
                                    {feature.ui}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
