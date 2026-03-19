"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Zap, Link2, ShieldCheck, PieChart, Users, Key, Building,
    MessageSquare, Smartphone, Clock, ArrowRight
} from "lucide-react";

const ENGINE_FEATURES = [
    {
        id: "fintech",
        title: "Fintech Integration",
        description: "Zero-touch reconciliations. Connect directly to your existing merchant processors without manual ledger entries.",
        icon: <PieChart className="text-blue-400" size={28} />,
        gradient: "from-blue-600/10 to-transparent",
        category: "Finance",
    },
    {
        id: "access",
        title: "Smart Lock & Biometrics",
        description: "Instantly revoke or grant access to rooms based on real-time rent payment status and active leave logic.",
        icon: <Key className="text-teal-400" size={28} />,
        gradient: "from-teal-600/10 to-transparent",
        category: "Operations",
    },
    {
        id: "community",
        title: "Community Forums",
        description: "Let residents self-organize events, buy/sell furniture, and chat without chaotic WhatsApp groups.",
        icon: <Users className="text-purple-400" size={28} />,
        gradient: "from-purple-600/10 to-transparent",
        category: "Residents",
    },
    {
        id: "api",
        title: "GraphQL API Access",
        description: "Build custom integrations for your unique operational workflows using our expansive developer API.",
        icon: <Link2 className="text-slate-400" size={28} />,
        gradient: "from-slate-600/10 to-transparent",
        category: "Operations",
    },
    {
        id: "mobile",
        title: "Native iOS & Android",
        description: "Push notifications right to their pockets for rent reminders, package deliveries, and community news.",
        icon: <Smartphone className="text-emerald-400" size={28} />,
        gradient: "from-emerald-600/10 to-transparent",
        category: "Residents",
    },
    {
        id: "inventory",
        title: "Asset & Inventory tracking",
        description: "Keep tabs on mattresses, AC remotes, and keys. Charge for missing items to the resident's ledger with two clicks.",
        icon: <Building className="text-orange-400" size={28} />,
        gradient: "from-orange-600/10 to-transparent",
        category: "Operations",
    },
    {
        id: "gatepass",
        title: "QR Gatepass System",
        description: "Digital entry/exit logging. Parents, wardens, and security guards are instantly synced on resident whereabouts.",
        icon: <ShieldCheck className="text-rose-400" size={28} />,
        gradient: "from-rose-600/10 to-transparent",
        category: "Operations",
    },
    {
        id: "polls",
        title: "Food & Menu Polling",
        description: "Collect daily mess capacity feedback to reduce food waste and let residents vote on weekend menus.",
        icon: <MessageSquare className="text-yellow-400" size={28} />,
        gradient: "from-yellow-600/10 to-transparent",
        category: "Residents",
    },
    {
        id: "automate",
        title: "Automated Late Fees",
        description: "Define grace periods and dynamic flat-rate or percentage-based late fee rules that apply instantly at midnight.",
        icon: <Clock className="text-pink-400" size={28} />,
        gradient: "from-pink-600/10 to-transparent",
        category: "Finance",
    }
];

import { useState } from "react";

const CATEGORIES = ["All", "Operations", "Finance", "Residents"];

export default function FeaturesPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredFeatures = ENGINE_FEATURES.filter(
        (f) => activeCategory === "All" || f.category === activeCategory
    );

    return (
        <main className="bg-[#020617] min-h-screen text-white pt-32 pb-32">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header Sequence */}
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest text-xs uppercase mb-8 shadow-sm backdrop-blur-md">
                        <Zap size={14} /> Features Index
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
                        Everything you need.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Nothing you don&apos;t.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Say goodbye to disjointed SaaS tools. Nest n Wings replaces 7 different apps with one deeply integrated platform tailored for modern hostels.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                                activeCategory === cat
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Feature Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredFeatures.map((feature, i) => (
                        <motion.div
                            layout
                            key={feature.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A101D] p-8 hover:border-white/30 transition-all duration-500 shadow-xl"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#020617] flex items-center justify-center border border-white/10 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-white text-2xl mb-3 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Final Hook */}
                <div className="mt-28 text-center">
                    <Link
                        href="/book-demo"
                        className="inline-flex items-center justify-center gap-2 rounded-full text-base font-bold transition-all bg-primary text-white shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:shadow-[0_0_50px_rgba(20,184,166,0.5)] active:scale-[0.98] h-14 px-10"
                    >
                        Explore all features on a live demo <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
