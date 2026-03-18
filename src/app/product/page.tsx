"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { OpsMockup, ResMockup, FinMockup } from "@/components/home/ProductShowcase";
import { ArrowRight, CheckCircle2, BarChart3, Users, Shield } from "lucide-react";

export default function ProductPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={containerRef} className="bg-[#020617] min-h-screen text-white">
            {/* ========== Hero ========== */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold tracking-widest text-xs uppercase mb-6">
                            Product
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
                            Your Hostel's{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                                Operating System
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            One platform to manage room allotments, student records, fee collection, and daily operations — replacing spreadsheets, WhatsApp groups, and manual registers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-full bg-primary text-white font-bold text-base shadow-[0_0_24px_rgba(20,184,166,0.4)] hover:shadow-[0_0_36px_rgba(20,184,166,0.6)] transition-all"
                            >
                                Book a Demo
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/features"
                                className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all"
                            >
                                View All Features
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========== Command Center Dashboard ========== */}
            <section className="pb-24 md:pb-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Operations Dashboard</h2>
                            <p className="text-slate-400 max-w-xl mx-auto">
                                A centralized command center showing live occupancy, pending tickets, fee collection, and campus health at a glance.
                            </p>
                        </div>
                        <div className="w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                            <OpsMockup />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========== Feature Modules ========== */}
            <section className="pb-24 md:pb-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
                            Built for Every Department
                        </h2>
                        <p className="text-lg text-slate-400 max-w-xl mx-auto">
                            Purpose-built modules for hostel wardens, administrators, and finance teams.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {/* Module 1: Resident Management */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                                        <Users size={16} />
                                    </div>
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Student Management</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                    Complete Resident Directory
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Every student gets a profile with room assignment, payment history, leave records, and emergency contacts. Search by name, roll number, or room — no more digging through registers.
                                </p>
                                <ul className="space-y-3">
                                    {["Room allotment with preference matching", "Digital leave and gate-pass system", "Real-time occupancy tracking per block"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                            <CheckCircle2 size={14} className="text-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                                <ResMockup />
                            </div>
                        </motion.div>

                        {/* Module 2: Finance */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="order-2 lg:order-1 w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                                <FinMockup />
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                        <BarChart3 size={16} />
                                    </div>
                                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Fee Collection</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                    Automated Payment Tracking
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Track hostel fees, mess charges, and utility payments in one ledger. The system sends automatic reminders before due dates, applies late fees, and syncs UPI/card payments instantly.
                                </p>
                                <ul className="space-y-3">
                                    {["Auto-generated invoices and receipts", "Payment status dashboard per block", "One-click financial reports for audits"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                            <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========== Why Nest n Wings ========== */}
            <section className="pb-24 md:pb-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">Why Institutions Choose Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, title: "Built for Education", desc: "Designed specifically for universities, colleges, and PG hostels — not repurposed property software.", color: "primary" },
                            { icon: Users, title: "Zero Training Needed", desc: "Wardens and staff can start using it on day one. No IT team required for setup.", color: "blue" },
                            { icon: BarChart3, title: "Instant Reporting", desc: "Generate occupancy reports, fee collection summaries, and compliance documents in one click.", color: "purple" },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                                <div className={`w-10 h-10 rounded-xl bg-${item.color}-500/20 text-${item.color}-400 flex items-center justify-center mb-4`}>
                                    <item.icon size={18} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== Bottom CTA ========== */}
            <section className="pb-24 md:pb-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="p-12 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent text-center relative overflow-hidden">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Ready to modernize your hostel?</h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto">
                            See how Nest n Wings can replace manual processes with a single, unified platform.
                        </p>
                        <Link
                            href="/book-demo"
                            className="inline-flex items-center justify-center gap-2 rounded-full text-base font-bold transition-all bg-primary text-white shadow-[0_0_24px_rgba(20,184,166,0.4)] hover:shadow-[0_0_36px_rgba(20,184,166,0.6)] h-13 px-8"
                        >
                            Schedule a Demo
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
