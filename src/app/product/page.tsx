"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { OpsMockup, ResMockup, FinMockup } from "@/components/home/ProductShowcase";

export default function ProductPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main className="bg-[#020617] min-h-screen text-white pt-24 pb-32">
            {/* Cinematic Hero Segment */}
            <section ref={containerRef} className="relative h-[150vh] flex flex-col items-center">
                <motion.div
                    style={{ opacity }}
                    className="sticky top-1/4 z-20 text-center px-4 max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold tracking-widest text-xs uppercase mb-8">
                        The Core Engine
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
                        The Ultimate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                            Command Center
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A single unified dashboard that connects residents, revenue, and building maintenance effortlessly.
                    </p>
                </motion.div>

                {/* Hero Dashboard Reveal */}
                <div className="sticky top-1/4 w-full px-4 md:px-12 mt-[40vh] z-10 perspective-[2000px]">
                    <motion.div
                        style={{ scale }}
                        className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-2xl border border-white/10 bg-[#0B1120] shadow-[0_0_100px_rgba(37,99,235,0.2)] overflow-hidden"
                    >
                        <div className="w-full h-full flex pt-8 pl-8 md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 relative z-0">
                            <div className="w-[1200px] h-[800px] origin-top-left scale-[0.5] sm:scale-[0.6] md:scale-[0.8] lg:scale-[0.9] xl:scale-100 pb-20">
                                <OpsMockup />
                            </div>
                        </div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Sticky Split-Screen Scroll Story */}
            <section className="container mx-auto px-4 mt-32 md:mt-64 max-w-7xl relative pb-32">
                <div className="flex flex-col lg:flex-row gap-16 relative">
                    {/* Left Side: Scrolling Content */}
                    <div className="lg:w-1/2 relative z-10 py-[20vh] space-y-[60vh]">
                        {/* Story Block 1 (Tracks OpsMockup ideally, but let's map it to ResMockup for Resident Management) */}
                        <motion.div
                            className="min-h-[50vh] flex flex-col justify-center"
                            initial={{ opacity: 0.3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-40% 0px -40% 0px" }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Resident Ledger & Profiles</h2>
                            <h3 className="text-xl text-teal-400 mb-6 font-semibold">Know exactly who is in your building.</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Every resident gets a comprehensive profile tracking their payment history, maintenance requests, and contract active state. Stop searching through spreadsheets to find emergency contacts or rent status.
                            </p>
                            <ul className="space-y-4">
                                {["Automated background checks", "Digital lease signing", "Real-time occupancy status"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Story Block 2 (Tracks FinMockup) */}
                        <motion.div
                            className="min-h-[50vh] flex flex-col justify-center"
                            initial={{ opacity: 0.3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-40% 0px -40% 0px" }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Automated Receivables</h2>
                            <h3 className="text-xl text-blue-400 mb-6 font-semibold">Zero-touch rent collection.</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Reconcile accounts instantly. The system automatically sends invoices 3 days before rent is due, applies late fees on day 5, and logs instant UPI/Card payments directly to the resident ledger.
                            </p>
                            <ul className="space-y-4">
                                {["Intelligent late-fee application", "Multi-gateway sync", "One-click financial reporting"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Side: Sticky Device Box */}
                    <div className="hidden lg:block lg:w-1/2 relative h-[100vh] sticky top-0 flex items-center justify-center">
                        <div className="w-full aspect-square rounded-[40px] border border-white/10 bg-white/5 overflow-hidden relative shadow-[0_0_50px_rgba(20,184,166,0.1)] backdrop-blur-3xl flex items-center justify-center -translate-y-16">

                            {/* Layer 1: ResMockup */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none p-12"
                                style={{
                                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.6], [1, 1, 0]),
                                    scale: useTransform(scrollYProgress, [0.3, 0.5, 0.6], [1, 1, 0.9])
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-blue-500/10 opacity-50" />
                                <div className="relative w-[800px] h-[600px] origin-center scale-[0.6] xl:scale-[0.7] drop-shadow-2xl">
                                    <ResMockup />
                                </div>
                            </motion.div>

                            {/* Layer 2: FinMockup */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none p-12"
                                style={{
                                    opacity: useTransform(scrollYProgress, [0.55, 0.65, 0.9], [0, 1, 1]),
                                    scale: useTransform(scrollYProgress, [0.55, 0.65], [1.1, 1])
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 opacity-50" />
                                <div className="relative w-[800px] h-[600px] origin-center scale-[0.6] xl:scale-[0.7] drop-shadow-2xl">
                                    <FinMockup />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 mt-20 text-center max-w-4xl">
                <div className="p-16 rounded-[40px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10" />
                    <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to upgrade your stack?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Migrate from legacy software in under 48 hours with our dedicated onboarding team.
                    </p>
                    <Link
                        href="/book-demo"
                        className="inline-flex items-center justify-center gap-2 rounded-full text-lg font-bold transition-all bg-white text-black hover:bg-slate-200 h-14 px-8"
                    >
                        Schedule a Demo
                    </Link>
                </div>
            </section>
        </main>
    );
}
