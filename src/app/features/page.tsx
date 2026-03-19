"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
    Zap, Link2, ShieldCheck, PieChart, Users, Key, Building,
    MessageSquare, Smartphone, Clock, ArrowRight
} from "lucide-react";

const ENGINE_FEATURES = [
    {
        id: "fintech",
        title: "Fintech Integration",
        description: "Zero-touch reconciliations. Connect directly to your existing merchant processors without manual ledger entries.",
        icon: <PieChart className="text-white" size={32} strokeWidth={1.5} />,
        color: "blue",
    },
    {
        id: "access",
        title: "Smart Locks",
        description: "Instantly revoke or grant access to rooms based on real-time rent payment status and active leave logic.",
        icon: <Key className="text-white" size={32} strokeWidth={1.5} />,
        color: "teal",
    },
    {
        id: "community",
        title: "Community Forms",
        description: "Let residents self-organize events, buy/sell furniture, and chat without chaotic WhatsApp groups.",
        icon: <Users className="text-white" size={32} strokeWidth={1.5} />,
        color: "purple",
    },
    {
        id: "api",
        title: "GraphQL API",
        description: "Build custom integrations for your unique operational workflows using our expansive developer API.",
        icon: <Link2 className="text-white" size={32} strokeWidth={1.5} />,
        color: "slate",
    },
    {
        id: "mobile",
        title: "Native App",
        description: "Push notifications right to their pockets for rent reminders, package deliveries, and community news.",
        icon: <Smartphone className="text-white" size={32} strokeWidth={1.5} />,
        color: "emerald",
    },
    {
        id: "inventory",
        title: "Inventory",
        description: "Keep tabs on mattresses, AC remotes, and keys. Charge for missing items to the resident's ledger.",
        icon: <Building className="text-white" size={32} strokeWidth={1.5} />,
        color: "orange",
    },
    {
        id: "gatepass",
        title: "QR Gatepass",
        description: "Digital entry/exit logging. Parents, wardens, and security guards are instantly synced.",
        icon: <ShieldCheck className="text-white" size={32} strokeWidth={1.5} />,
        color: "rose",
    },
    {
        id: "polls",
        title: "Live Polling",
        description: "Collect daily mess capacity feedback to reduce food waste and let residents vote on weekend menus.",
        icon: <MessageSquare className="text-white" size={32} strokeWidth={1.5} />,
        color: "yellow",
    },
    {
        id: "automate",
        title: "Automated Fees",
        description: "Define grace periods and dynamic flat-rate or percentage-based late fee rules that apply instantly.",
        icon: <Clock className="text-white" size={32} strokeWidth={1.5} />,
        color: "pink",
    }
];

export default function FeaturesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    
    // Massive parallax effect for the background text
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.3, 0.1, 0]);

    return (
        <main ref={containerRef} className="bg-[#020617] min-h-[300vh] text-white relative selection:bg-teal-500/30">
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 pt-32 md:pt-48 pb-32">
                {/* Hero Sequence */}
                <div className="mb-24 md:mb-48">
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1] font-black uppercase tracking-tighter mb-6">
                            Everything you need.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700">Nothing you don&apos;t.</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-slate-400 max-w-2xl leading-snug">
                            Say goodbye to disjointed SaaS tools. Nest OS replaces 7 different apps with one deeply integrated core engine.
                        </p>
                    </motion.div>
                </div>

                {/* Staggered Scroll Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {ENGINE_FEATURES.map((feature, i) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: "easeOut" }}
                            className="group relative p-8 md:p-12 rounded-[2rem] bg-[#0A101D] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center border border-${feature.color}-500/20 mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-500 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-base text-slate-400 font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Hook with Parallax */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mt-32 md:mt-48 relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#11111a] to-[#020617] border border-white/10 p-10 md:p-24 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 relative z-10">
                        READY TO UPGRADE?
                    </h2>
                    <Link
                        href="/book-demo"
                        className="relative z-10 inline-flex items-center justify-center gap-4 rounded-full text-base md:text-lg font-black uppercase tracking-widest transition-all bg-white text-black shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] h-16 px-10 group"
                    >
                        SEE DEMO 
                        <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                            <ArrowRight size={28} />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
