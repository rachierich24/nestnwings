"use client";

import { motion } from "framer-motion";
import { BedDouble, Users, Wallet, ShieldCheck, MailPlus, LineChart } from "lucide-react";

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
                        <div className="text-sm font-semibold text-white">Rahul Sharma</div>
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
    return (
        <section className="bg-[#0F172A] relative py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-3xl md:text-5xl font-black tracking-tight text-white mb-4"
                    >
                        Everything You Need to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#2563EB]">
                            Run Your Hostel
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto"
                    >
                        Purpose-built features for student housing, PG hostels, and co-living operations.
                    </motion.p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative h-[360px] md:h-[380px] rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="p-6 md:p-8 h-full flex flex-col relative z-20">
                                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary border border-primary/50 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-primary group-hover:shadow-[0_0_30px_rgba(20,184,166,0.8)] transition-all duration-500 shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                                        <feature.icon size={26} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-white font-heading tracking-tight">
                                        {feature.title}
                                    </h4>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Mini UI mockup */}
                                <div className="mt-auto flex-1 relative pt-6 transition-transform duration-500 group-hover:-translate-y-1">
                                    <div className="absolute bottom-0 right-0 w-[90%] h-1/2 bg-black/40 blur-2xl rounded-full" />
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

