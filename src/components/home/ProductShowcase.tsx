"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineChart, Users, Wallet, ShieldCheck, TrendingUp, CheckCircle2, BedDouble, AlertCircle } from "lucide-react";

// --- High-Fidelity UI Mockups --- 

export function OpsMockup() {
    return (
        <div className="w-full h-full bg-[#0B1120] rounded-[24px] p-4 md:p-6 flex flex-col gap-5 md:gap-6 relative overflow-hidden font-sans group/ops border border-blue-900/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none z-0" />

            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-3 md:pb-4 relative z-10 transition-transform duration-500 group-hover/ops:translate-y-1">
                <div className="flex items-center gap-2 md:gap-4">
                    <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] cursor-pointer"
                    >
                        <ShieldCheck size={16} className="md:hidden" />
                        <ShieldCheck size={24} className="hidden md:block" />
                    </motion.div>
                    <div>
                        <div className="text-white font-bold text-sm md:text-xl leading-tight tracking-tight">Command Center</div>
                        <div className="text-blue-400 text-[10px] md:text-sm font-medium">DTU Main Campus</div>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-3 items-center">
                    <div className="px-2 md:px-3 py-1 md:py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md md:rounded-lg text-emerald-400 text-[10px] md:text-xs font-bold flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" /> Live Connect
                    </div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-7 h-7 md:w-10 md:h-10 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center text-slate-300 font-bold text-[10px] md:text-sm shadow-inner cursor-pointer"
                    >
                        AD
                    </motion.div>
                </div>
            </div>

            {/* Top Metrics - Single Row Force */}
            <div className="flex gap-2 min-w-full overflow-x-auto pb-2 scrollbar-hide relative z-10">
                {[
                    { label: "Total Capacity", val: "1,450", sub: "Beds Available", color: "blue", trend: "+0" },
                    { label: "Occupancy Rate", val: "94.2%", sub: "1,366 Filled", color: "emerald", trend: "+1.2%" },
                    { label: "Pending Dues", val: "₹4.2M", sub: "82% Collection", color: "amber", trend: "-5.4%" },
                    { label: "Open Tickets", val: "18", sub: "12 Critical", color: "rose", trend: "+3" }
                ].map((m, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)" }}
                        className="flex-1 min-w-[130px] bg-white/5 border border-white/5 rounded-xl p-3 md:p-4 flex flex-col gap-1 md:gap-1.5 relative overflow-hidden group cursor-pointer shrink-0"
                    >
                        <div className={`absolute top-0 left-0 w-full h-1 bg-${m.color}-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">{m.label}</span>
                        <div className="text-xl md:text-2xl font-black text-white">{m.val}</div>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-[10px] text-slate-500 hidden xl:block">{m.sub}</span>
                            <span className={`text-[10px] font-bold text-${m.color}-400 bg-${m.color}-500/10 px-1.5 py-0.5 rounded`}>{m.trend}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 flex-grow relative z-10 min-h-0">
                {/* Chart Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="md:w-2/3 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col min-h-[140px] md:min-h-0 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="flex justify-between items-center mb-4 md:mb-8 relative z-10">
                        <span className="text-xs md:text-base font-bold text-white tracking-wide">30-Day Utilization</span>
                        <div className="hidden md:flex items-center gap-3">
                            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer flex items-center gap-1.5 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20"><div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" /> <span className="text-xs text-blue-300 font-medium">Boys Block</span></motion.div>
                            <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer flex items-center gap-1.5 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 ml-2"><div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" /> <span className="text-xs text-purple-300 font-medium">Girls Block</span></motion.div>
                        </div>
                    </div>
                    <div className="flex-grow flex items-end gap-1.5 md:gap-3 relative z-10">
                        <div className="absolute inset-x-0 bottom-[33%] h-px bg-white/5" />
                        <div className="absolute inset-x-0 bottom-[66%] h-px bg-white/5" />
                        {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 55, 95, 70, 85, 60].map((h, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: '100%' }}
                                transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
                                className="flex-1 flex flex-col justify-end gap-1"
                            >
                                <motion.div whileHover={{ opacity: 0.8 }} className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-[3px] shadow-[0_0_10px_rgba(168,85,247,0.4)] cursor-pointer" style={{ height: `${h * 0.4}%` }} />
                                <motion.div whileHover={{ opacity: 0.8 }} className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-[3px] shadow-[0_0_10px_rgba(59,130,246,0.4)] cursor-pointer" style={{ height: `${h * 0.6}%` }} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Activity Feed */}
                <div className="hidden md:flex md:w-1/3 flex-col gap-4">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col"
                    >
                        <span className="text-base font-bold text-white mb-5 tracking-wide">Urgent Actions</span>
                        <div className="space-y-3 overflow-y-auto pr-2">
                            {[
                                { t: "Room Transfer Req", b: "Aryan S. to B-201", c: "amber", m: "Pending Approval" },
                                { t: "AC Maintenance", b: "Room C-104", c: "rose", m: "Escalated" },
                                { t: "Late Entry Flag", b: "Kunal M. - 02:15 AM", c: "rose", m: "Unjustified" },
                                { t: "Fee Default", b: "Block A - 12 Students", c: "amber", m: "2nd Notice Sent" }
                            ].map((act, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ scale: 1.02, x: 4, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    className="flex gap-4 items-start p-3 rounded-xl bg-white/[0.03] border border-white/[0.02] cursor-pointer transition-colors"
                                >
                                    <div className={`mt-1.5 w-2 h-2 rounded-full bg-${act.c}-500 shadow-[0_0_8px_rgba(var(--${act.c}-500),0.8)]`} />
                                    <div>
                                        <div className="text-sm font-bold text-white">{act.t}</div>
                                        <div className="text-xs text-slate-400 mt-1">{act.b}</div>
                                        <div className={`text-[9px] font-bold text-${act.c}-400 mt-2 tracking-widest uppercase`}>{act.m}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export function ResMockup() {
    return (
        <div className="w-full h-full bg-[#11111a] rounded-[22px] border border-white/10 p-4 md:p-6 flex relative overflow-hidden font-sans group">
            {/* White-themed Inset Mockup */}
            <div className="flex-grow flex bg-white rounded-xl overflow-hidden shadow-2xl relative z-10">
                {/* Sidebar */}
                <div className="hidden md:flex w-64 border-r border-slate-200 bg-slate-50 flex-col p-4 z-10">
                <div className="flex items-center gap-3 text-slate-900 font-black text-lg mb-8 px-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center border border-blue-600/20"><Users size={16} /></div> Directory
                </div>
                <div className="space-y-2">
                    <motion.div whileHover={{ scale: 1.02 }} className="px-4 py-3 bg-blue-600 text-white shadow-md shadow-blue-600/20 rounded-xl text-sm font-bold flex justify-between items-center cursor-pointer">
                        All Residents <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">1,248</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="px-4 py-3 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-bold flex justify-between items-center cursor-pointer transition-colors">
                        Pending Approvals <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">12</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="px-4 py-3 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-bold flex justify-between items-center cursor-pointer transition-colors">
                        Defaulters <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">45</span>
                    </motion.div>
                </div>
                <div className="mt-auto px-2">
                    <div className="w-full h-px bg-slate-200 mb-5" />
                    <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 rounded-full border-2 border-slate-200 bg-slate-800 flex items-center justify-center text-sm font-bold text-white shadow-sm">JD</div>
                        <div>
                            <div className="text-sm font-bold text-slate-900">Rahul Sharma</div>
                            <div className="text-xs text-slate-500 font-medium">Head Warden</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col bg-[#F8FAFC]">
                {/* Topbar */}
                <div className="h-14 md:h-20 border-b border-slate-200 bg-white px-4 md:px-8 flex items-center justify-between z-10 shadow-sm">
                    <div className="flex items-center gap-2 md:hidden">
                        <div className="p-1.5 rounded-lg bg-blue-600 text-white"><Users size={14} /></div>
                        <span className="text-sm font-bold text-slate-900">Directory</span>
                    </div>
                    <div className="relative hidden md:block w-80">
                        <input type="text" disabled placeholder="Search by name, room, or ID..." className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-100 border border-transparent focus:border-blue-500 rounded-xl text-slate-600 transition-all outline-none" />
                        <div className="absolute left-3.5 top-3 text-slate-400"><Users size={16} /></div>
                    </div>
                    <div className="flex gap-2.5 md:gap-3">
                        <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs md:text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">Filter</motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-blue-600 rounded-xl text-xs md:text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors">Add New</motion.button>
                    </div>
                </div>

                {/* Table Area */}
                <div className="flex-grow p-3 md:p-8 overflow-hidden flex flex-col">
                    <div className="bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-sm flex-grow flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 border-b border-slate-200 bg-slate-50/80 text-xs font-bold text-slate-500 uppercase tracking-widest">
                            <div className="col-span-4">Resident Profile</div>
                            <div className="col-span-2">Allotment</div>
                            <div className="col-span-3">Status</div>
                            <div className="col-span-3 text-right">Actions</div>
                        </div>

                        <div className="flex-col divide-y divide-slate-100 overflow-y-auto min-h-0 pt-1">
                            {[
                                { n: "Aryan Sharma", p: "B.Tech CS - Sem 6", r: "A-204", f: ["Dues Cleared"], c: ["emerald"] },
                                { n: "Kunal Mathur", p: "Mech Eng - Sem 4", r: "B-110", f: ["Late Payment", "Warning Sent"], c: ["amber", "amber"] },
                                { n: "Ritvik Kumar", p: "MBA - Sem 2", r: "C-305", f: ["Dues Cleared"], c: ["emerald"] },
                                { n: "Devansh Patel", p: "ECE - Sem 8", r: "A-412", f: ["Active Leave"], c: ["purple"] },
                                { n: "Abhinav Singh", p: "CS - Sem 4", r: "D-101", f: ["Dues Cleared"], c: ["emerald"] }
                            ].map((row, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-3 md:grid md:grid-cols-12 md:gap-4 px-4 md:px-8 py-3 md:py-5 hover:bg-blue-50/50 transition-colors cursor-pointer group/row"
                                >
                                    <div className="md:col-span-4 flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs md:text-sm shrink-0 group-hover/row:scale-110 group-hover/row:bg-blue-100 group-hover/row:text-blue-600 group-hover/row:border-blue-200 transition-all duration-300">
                                            {row.n.charAt(0)}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-sm md:text-base font-bold text-slate-900 truncate">{row.n}</div>
                                            <div className="text-xs text-slate-500 font-medium mt-0.5">{row.p}</div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 shrink-0 flex items-center">
                                        <div className="text-xs md:text-sm font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">{row.r}</div>
                                    </div>
                                    <div className="md:col-span-3 shrink-0 flex items-center gap-1 flex-wrap">
                                        {row.f.map((flag, idx) => (
                                            <span key={idx} className={`px-2 py-1 rounded-md text-[9px] md:text-[10px] font-bold border bg-${row.c[idx]}-50 text-${row.c[idx]}-700 border-${row.c[idx]}-200 uppercase tracking-wider shadow-sm`}>
                                                {flag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="hidden md:flex md:col-span-3 justify-end gap-2 items-center opacity-0 group-hover/row:opacity-100 transition-opacity translate-x-4 group-hover/row:translate-x-0 duration-300">
                                        <motion.button whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs rounded-lg font-bold shadow-sm hover:text-blue-600 hover:border-blue-200 transition-colors">Edit</motion.button>
                                        <motion.button whileHover={{ scale: 1.05 }} className="px-3 py-1.5 bg-blue-600 border border-blue-600 text-white text-xs rounded-lg font-bold shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all">Profile</motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export function FinMockup() {
    return (
        <div className="w-full h-full bg-[#0D0914] rounded-[22px] border border-fuchsia-900/40 p-4 md:p-8 relative overflow-hidden flex flex-col gap-4 md:gap-8 font-sans group/fin">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.15),transparent_50%)] pointer-events-none transition-opacity duration-1000 group-hover/fin:opacity-100 opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1),transparent_50%)] pointer-events-none transition-opacity duration-1000 group-hover/fin:opacity-100 opacity-50" />

            {/* Header */}
            <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3 md:gap-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_20px_rgba(217,70,239,0.2)] cursor-pointer">
                        <Wallet size={16} className="md:hidden" />
                        <Wallet size={24} className="hidden md:block" />
                    </motion.div>
                    <div>
                        <div className="text-white font-black text-base md:text-2xl tracking-tight">Ledger & Analytics</div>
                        <div className="text-fuchsia-300/70 text-xs md:text-sm font-semibold tracking-wide">Q3 Revenue Operations</div>
                    </div>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 md:px-6 py-2 md:py-2.5 bg-fuchsia-600 rounded-xl text-xs md:text-sm font-bold text-white shadow-[0_0_15px_rgba(217,70,239,0.4)] hover:bg-fuchsia-500 transition-colors">
                    Export Report
                </motion.button>
            </div>

            {/* Scorecards - 3 Equal Columns */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 relative z-10">
                {[
                    { l: "Collected (MTD)", v: "₹18.4M", p: "+15.2%", c: "emerald" },
                    { l: "Pending Dues", v: "₹4.2M", p: "-2.1%", c: "amber" },
                    { l: "Refunds Processed", v: "₹840K", p: "+0.4%", c: "rose" }
                ].map((card, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="h-24 md:h-32 bg-[#171124] rounded-xl md:rounded-2xl p-3 md:p-5 border border-fuchsia-900/40 flex flex-col justify-between cursor-pointer shadow-lg relative overflow-hidden group"
                    >
                        <div className={`absolute -right-10 -bottom-10 w-24 h-24 bg-${card.c}-500/20 blur-2xl rounded-full group-hover:bg-${card.c}-500/30 transition-all duration-500`} />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10 text-ellipsis overflow-hidden whitespace-nowrap">{card.l}</span>
                        <div className="flex justify-between items-end relative z-10">
                            <span className="text-xl md:text-3xl lg:text-4xl font-black text-white tracking-widest">{card.v}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-grow relative z-10 min-h-0">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="md:w-2/3 mb-[20px] bg-[#171124] border border-fuchsia-900/40 rounded-xl md:rounded-3xl p-4 md:p-8 flex flex-col shadow-xl overflow-hidden relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="flex justify-between items-center mb-4 md:mb-8 relative z-10">
                        <span className="text-xs md:text-base font-black text-white tracking-wide">Revenue Trajectory</span>
                        <div className="hidden md:flex gap-2 text-xs font-bold text-slate-400 bg-black/40 p-1 rounded-lg border border-white/5">
                            <motion.button whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }} className="px-3 py-1.5 rounded-md hover:text-white transition-colors">1M</motion.button>
                            <motion.button className="px-3 py-1.5 rounded-md bg-fuchsia-500 text-white shadow-[0_0_10px_rgba(217,70,239,0.5)]">6M</motion.button>
                            <motion.button whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }} className="px-3 py-1.5 rounded-md hover:text-white transition-colors">1Y</motion.button>
                        </div>
                    </div>
                    <div className="flex-grow relative mt-2 md:mt-4 z-10 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                            <motion.path 
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M0 45 Q 10 40, 20 35 T 40 25 T 60 15 T 80 20 T 100 10" 
                                fill="none" stroke="#D946EF" strokeWidth="2.5" 
                                style={{ filter: "drop-shadow(0 0 8px rgba(217,70,239,0.8))" }}
                            />
                            <motion.path 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ duration: 1, delay: 1 }}
                                d="M0 45 Q 10 40, 20 35 T 40 25 T 60 15 T 80 20 T 100 10 L 100 50 L 0 50 Z" 
                                fill="url(#purpleGrad)" 
                            />
                            <defs>
                                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#D946EF" />
                                    <stop offset="100%" stopColor="#110C1B" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </motion.div>

                {/* Sidebar */}
                <div className="hidden md:flex md:w-1/3 flex-col gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="h-1/2 bg-[#171124] border border-fuchsia-900/40 rounded-2xl p-6 flex flex-col shadow-xl cursor-pointer group hover:border-fuchsia-500/50 transition-colors"
                    >
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Collection Channels</span>
                        <div className="flex justify-center flex-grow relative">
                            <svg className="w-full h-full pb-2" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#2D1B4E" strokeWidth="12" />
                                <motion.circle 
                                    initial={{ strokeDasharray: "0 250" }}
                                    animate={{ strokeDasharray: "160 250" }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    cx="50" cy="50" r="40" fill="none" stroke="#D946EF" strokeWidth="12" strokeLinecap="round" className="origin-center -rotate-90 filter drop-shadow-[0_0_5px_rgba(217,70,239,0.6)]" 
                                />
                                <motion.circle 
                                    initial={{ strokeDasharray: "0 250" }}
                                    animate={{ strokeDasharray: "60 250" }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    cx="50" cy="50" r="40" fill="none" stroke="#EC4899" strokeWidth="12" strokeDashoffset="-165" strokeLinecap="round" className="origin-center -rotate-90" 
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-2xl font-black text-white tracking-tight group-hover:scale-110 transition-transform duration-300">65%</span>
                                <span className="text-[10px] font-bold text-fuchsia-300 uppercase tracking-wider">UPI / Online</span>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 bg-gradient-to-br from-fuchsia-600/30 to-rose-600/10 border border-fuchsia-500/40 rounded-2xl flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="text-center relative z-10">
                            <div className="w-12 h-12 mx-auto rounded-full bg-fuchsia-500/30 border border-fuchsia-400/50 text-white flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(217,70,239,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                <AlertCircle size={24} />
                            </div>
                            <span className="text-sm font-black text-white uppercase tracking-widest">Execute Reminders</span>
                        </div>
                    </motion.div>
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
    return (
        <section className="relative bg-[#020617] pt-24 pb-32 md:pb-48">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-32"
                >
                    <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                        ONE DASHBOARD.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">TOTAL CONTROL.</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium">
                        A cinematic command center for modern hostels.
                    </p>
                </motion.div>

                {/* Sticky Stack Layout (Flawless on Mobile & Desktop) */}
                <div className="flex flex-col gap-6 md:gap-[15vh] pb-[5vh]">
                    {dashboards.map((dashboard, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px", once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            key={dashboard.id}
                            className="sticky top-[10vh] w-full flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] overflow-hidden group"
                            style={{ 
                                backgroundColor: index === 0 ? "#0a0f1c" : index === 1 ? "#11111a" : "#170a1a",
                                zIndex: index * 10
                            }}
                        >
                            <div className="w-full md:w-[40%] flex flex-col justify-center relative z-10">
                                <div className="inline-block self-start px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-bold tracking-widest text-xs uppercase mb-6 backdrop-blur-md">
                                    Module 0{index + 1}
                                </div>
                                <h3 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase">
                                    {dashboard.title}
                                </h3>
                                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                    {dashboard.description}
                                </p>
                            </div>

                            <div className="w-full md:w-[60%] h-[400px] md:h-[600px] relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative z-10 group-hover:border-white/20 transition-all duration-700">
                                <div className="w-full h-full bg-[#020617]">
                                    {dashboard.image}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
