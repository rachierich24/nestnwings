"use client";

import { motion } from "framer-motion";
import { Users, BedDouble, CheckCircle2, LayoutDashboard, FileSpreadsheet, AlertTriangle, ArrowRight, ChevronRight } from "lucide-react";

/* ============================================================
   Blog 1 Flow: Student Application → Smart Allocation → Warden Approval → Dashboard Update
   ============================================================ */
export function Blog1FlowMockup() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-[#020617] to-[#0B1120] rounded-[18px] p-5 flex flex-col gap-4 overflow-hidden relative border border-white/10 shadow-[0_0_40px_rgba(30,58,138,0.2)]">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            
            {/* Flow Steps */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className="flex items-stretch gap-3 flex-1 min-h-0 relative z-10"
            >
                {/* Step 1: Student Application */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 flex flex-col shadow-xl group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                            <Users size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide">App</span>
                    </div>
                    <div className="flex-1 space-y-1.5 overflow-hidden">
                        {[
                            { name: "Aryan S.", dept: "CS", yr: "3rd", status: "new" },
                            { name: "Priya M.", dept: "ECE", yr: "2nd", status: "new" },
                            { name: "Kunal R.", dept: "ME", yr: "1st", status: "reviewed" },
                        ].map((s, i) => (
                            <motion.div whileHover={{ x: 5 }} key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-white/5 border border-white/5 cursor-pointer">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[8px] font-bold text-blue-300 shrink-0">
                                    {s.name.charAt(0)}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-[9px] font-semibold text-slate-200 truncate">{s.name}</div>
                                    <div className="text-[8px] text-slate-500">{s.dept} · {s.yr}</div>
                                </div>
                                <motion.div animate={s.status === "new" ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } : {}} transition={{ repeat: Infinity, duration: 2 }} className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.status === "new" ? "bg-blue-400 shadow-[0_0_5px_#60a5fa]" : "bg-teal-400"}`} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex items-center shrink-0">
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <ChevronRight size={14} className="text-slate-600" />
                    </motion.div>
                </div>

                {/* Step 2: Smart Allocation */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 flex flex-col shadow-xl group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30 group-hover:scale-110 transition-transform">
                            <BedDouble size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Alloc</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1 flex-1">
                        {["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"].map((room, i) => {
                            const occ = [0, 3, 5, 7, 9].includes(i);
                            const assigning = [1, 4].includes(i);
                            return (
                                <motion.div
                                    key={room}
                                    whileHover={{ scale: 1.1, zIndex: 10 }}
                                    className={`rounded-md text-[7px] font-bold flex items-center justify-center border transition-all cursor-pointer ${assigning
                                        ? "bg-teal-500/20 shadow-[0_0_10px_rgba(20,184,166,0.5)] border-teal-400/50 text-teal-300"
                                        : occ
                                            ? "bg-white/5 border-white/10 text-slate-500"
                                            : "bg-[#0B1120] border-white/5 text-slate-600 hover:border-slate-400"
                                        }`}
                                >
                                    {room}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex items-center shrink-0">
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>
                        <ChevronRight size={14} className="text-slate-600" />
                    </motion.div>
                </div>

                {/* Step 3: Warden Approval */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 flex flex-col shadow-xl group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
                            <CheckCircle2 size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Review</span>
                    </div>
                    <div className="flex-1 space-y-1.5 overflow-hidden">
                        {[
                            { name: "Aryan S. → A-102", action: "Approve" },
                            { name: "Priya M. → B-201", action: "Approve" },
                        ].map((req, i) => (
                            <motion.div whileHover={{ y: -2 }} key={i} className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 shadow-sm cursor-pointer">
                                <div className="text-[8px] font-semibold text-amber-200 mb-1.5 truncate">{req.name}</div>
                                <div className="flex gap-1.5">
                                    <div className="px-2 py-0.5 bg-teal-500 text-slate-900 text-[7px] font-bold rounded shadow-[0_0_8px_rgba(20,184,166,0.4)] hover:scale-105 transition-transform">✓ Apprv</div>
                                    <div className="px-2 py-0.5 bg-transparent border border-white/20 text-slate-300 text-[7px] font-bold rounded hover:bg-white/5 transition-colors">✕ Rej</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex items-center shrink-0">
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>
                        <ChevronRight size={14} className="text-slate-600" />
                    </motion.div>
                </div>

                {/* Step 4: Dashboard Update */}
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex-1 flex flex-col gap-2">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-xl group hover:bg-purple-500/20 transition-all text-center flex-1 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none" />
                        <LayoutDashboard size={14} className="text-purple-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-[8px] text-purple-300 uppercase font-bold tracking-widest mb-1">Live Occ.</div>
                        <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", delay: 0.6 }}
                            className="text-2xl font-black text-white glow-text"
                        >
                            94%
                        </motion.div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden shadow-inner">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "94%" }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full shadow-[0_0_10px_#a855f7]"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

/* ============================================================
   Blog 2 Flow: Manual Process → Disconnected Tools → Unified Platform
   ============================================================ */
export function Blog2FlowMockup() {
    return (
        <div className="w-full h-full bg-[#020617] rounded-[18px] p-5 flex flex-col gap-4 overflow-hidden relative border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            <div className="flex items-stretch gap-3 flex-1 min-h-0 relative z-10">
                {/* Before: Manual Processes */}
                <motion.div 
                    whileHover={{ x: -2, y: 2, rotate: -1 }}
                    className="flex-1 flex flex-col gap-2 cursor-pointer group"
                >
                    <div className="text-[9px] font-bold text-rose-500 uppercase tracking-widest text-center mb-1 group-hover:text-rose-400 transition-colors">Before</div>

                    {/* Spreadsheet mock */}
                    <div className="flex-1 bg-[#0A101D] rounded-xl border border-rose-500/30 p-2.5 flex flex-col shadow-[0_0_15px_rgba(244,63,94,0.1)] group-hover:border-rose-500/50 transition-colors">
                        <div className="flex flex-col gap-1 mb-2 border-b border-white/5 pb-2">
                            <div className="flex items-center gap-1.5">
                                <FileSpreadsheet size={12} className="text-rose-400" />
                                <span className="text-[9px] font-bold text-slate-300">room_allotment_final_v3.xlsx</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="h-1 w-8 bg-rose-500/40 rounded animate-pulse" />
                                <div className="h-1 w-4 bg-white/10 rounded" />
                                <div className="h-1 w-12 bg-rose-500/20 rounded" />
                            </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <table className="w-full text-[7px] font-mono">
                                <tbody>
                                    {[
                                        { r: "A-101", s: "Aryan S.", st: "Paid", err: false },
                                        { r: "A-102", s: "#VALUE!", st: "Pending", err: true },
                                        { r: "A-103", s: "ERROR", st: "#REF!", err: true },
                                        { r: "B-201", s: "Priya M.", st: "Paid", err: false },
                                    ].map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${row.err ? "bg-rose-500/10" : ""}`}>
                                            <td className="p-1 text-slate-500">{row.r}</td>
                                            <td className={`p-1 ${row.err ? "text-rose-400 font-bold" : "text-slate-400"}`}>{row.s}</td>
                                            <td className={`p-1 ${row.st === "#REF!" ? "text-rose-400 font-bold bg-rose-500/20" : row.st === "Pending" ? "text-amber-400" : "text-slate-500"}`}>{row.st}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                {/* Transition Arrow */}
                <div className="flex flex-col items-center justify-center shrink-0 gap-1 opacity-50">
                    <div className="w-px h-8 bg-gradient-to-b from-transparent to-teal-500/50" />
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    >
                        <ArrowRight size={14} className="text-teal-400" />
                    </motion.div>
                    <div className="w-px h-8 bg-gradient-to-t from-transparent to-teal-500/50" />
                </div>

                {/* After: Unified Platform */}
                <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 flex flex-col gap-2 cursor-pointer group"
                >
                    <div className="text-[9px] font-bold text-teal-400 uppercase tracking-widest text-center mb-1 drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]">After</div>

                    {/* Modern Dashboard mock */}
                    <div className="flex-1 bg-[#0A101D] rounded-xl border border-teal-500/30 p-2.5 flex flex-col shadow-[0_0_20px_rgba(20,184,166,0.15)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none" />
                        
                        <div className="flex items-center gap-1.5 mb-2 relative z-10">
                            <LayoutDashboard size={12} className="text-teal-400" />
                            <span className="text-[9px] font-bold text-white">Nest OS</span>
                            <div className="ml-auto flex items-center gap-1 px-1.5 py-0.5 bg-teal-500/20 rounded border border-teal-500/30 text-[7px] font-bold text-teal-300">
                                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_5px_#2dd4bf]" /> LIVE
                            </div>
                        </div>

                        {/* Mini metrics */}
                        <div className="grid grid-cols-2 gap-1.5 mb-2 relative z-10">
                            {[
                                { l: "Allotted", v: "1,366", c: "teal" },
                                { l: "Revenue", v: "$84K", c: "blue" },
                            ].map((m, i) => (
                                <motion.div whileHover={{ y: -2 }} key={i} className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-center shadow-lg">
                                    <div className={`text-[7px] text-${m.c}-400 font-semibold uppercase tracking-wider`}>{m.l}</div>
                                    <div className="text-xs font-black text-white">{m.v}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mini table */}
                        <div className="flex-1 overflow-hidden relative z-10">
                            <table className="w-full text-[7px]">
                                <tbody>
                                    {[
                                        { r: "A-101", s: "Aryan Sharma", st: "✓ Paid" },
                                        { r: "A-102", s: "Priya Mehta", st: "✓ Paid" },
                                        { r: "B-201", s: "Kunal Roy", st: "⚡ Processing" },
                                    ].map((row, i) => (
                                        <motion.tr 
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            key={i} 
                                            className="border-t border-white/5 hover:bg-white/5 transition-colors"
                                        >
                                            <td className="p-1 text-slate-400 font-medium">{row.r}</td>
                                            <td className="p-1 text-slate-200 font-medium">{row.s}</td>
                                            <td className={`p-1 font-bold ${row.st.includes("Paid") ? "text-teal-400" : "text-amber-400"}`}>{row.st}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

/* ============================================================
   Inline Article Flow Diagram: Student → Allocation → Approval → Confirmation
   ============================================================ */
export function AllotmentFlowDiagram() {
    const steps = [
        { icon: Users, label: "Student applies", color: "blue", detail: "Form with exact preferences" },
        { icon: BedDouble, label: "Smart Engine", color: "teal", detail: "Auto match capacity" },
        { icon: CheckCircle2, label: "Warden Review", color: "amber", detail: "1-click approve/reject" },
        { icon: LayoutDashboard, label: "System Sync", color: "purple", detail: "Email + Dashboard live" },
    ];

    return (
        <div className="my-10 p-5 md:p-8 bg-[#0A101D] border border-white/10 rounded-2xl shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-8 text-center relative z-10">Automated Allotment Workflow</div>
            
            <div className="flex flex-col md:flex-row items-stretch gap-4 relative z-10">
                {steps.map((step, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex-1 flex flex-col md:flex-row items-center gap-4 cursor-pointer"
                    >
                        <div className="w-full h-full p-4 rounded-xl bg-white/5 border border-white/10 text-center shadow-lg hover:bg-white/10 transition-colors relative overflow-hidden">
                            <step.icon size={24} className={`mx-auto mb-3 text-${step.color}-400 drop-shadow-[0_0_8px_currentColor]`} />
                            <div className="text-sm font-bold text-white mb-2 leading-tight">{step.label}</div>
                            <div className="text-[10px] text-slate-400 leading-snug">{step.detail}</div>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="hidden md:flex items-center shrink-0">
                                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    <ArrowRight size={20} className="text-slate-600" />
                                </motion.div>
                            </div>
                        )}
                        {i < steps.length - 1 && (
                            <div className="md:hidden flex justify-center py-2">
                                <ArrowRight size={20} className="text-slate-600 rotate-90" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
