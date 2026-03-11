"use client";

import { motion } from "framer-motion";
import { ResMockup, FinMockup } from "@/components/home/ProductShowcase";
import Link from "next/link";
import {
    Zap, Link2, ShieldCheck, PieChart, Users, Key, Building,
    MessageSquare, Smartphone, Clock
} from "lucide-react";

const ENGINE_FEATURES = [
    {
        id: "fintech",
        title: "Fintech Integration",
        description: "Zero-touch reconciliations. Connect directly to your existing merchant processors without manual ledger entries.",
        icon: <PieChart className="w-8 h-8 text-blue-400" />,
        size: "large",
        mockup: <FinMockup />,
        gradient: "from-blue-600/10 to-transparent",
        category: "Finance",
    },
    {
        id: "access",
        title: "Smart Locks",
        description: "Instantly revoke or grant access to rooms based on real-time rent payment status.",
        icon: <Key className="w-8 h-8 text-teal-400" />,
        size: "small",
        gradient: "from-teal-600/10 to-transparent",
        category: "Operations",
    },
    {
        id: "community",
        title: "Community Forums",
        description: "Let residents self-organize events, buy/sell furniture, and chat without WhatsApp groups.",
        icon: <Users className="w-8 h-8 text-purple-400" />,
        size: "small",
        gradient: "from-purple-600/10 to-transparent",
        category: "Residents",
    },
    {
        id: "api",
        title: "GraphQL API",
        description: "Build custom integrations for your unique operational workflows using our expansive developer API.",
        icon: <Link2 className="w-8 h-8 text-slate-400" />,
        size: "medium",
        gradient: "from-slate-600/10 to-transparent",
        category: "Operations",
    },
    {
        id: "mobile",
        title: "Native iOS & Android",
        description: "Push notifications right to their pockets for rent reminders, package deliveries, and community news.",
        icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
        size: "medium",
        gradient: "from-emerald-600/10 to-transparent",
        category: "Residents",
    },
    {
        id: "inventory",
        title: "Inventory Tracking",
        description: "Keep tabs on mattresses, AC remotes, and keys. Charge for missing items with two clicks.",
        icon: <Building className="w-8 h-8 text-orange-400" />,
        size: "large",
        mockup: <ResMockup />,
        gradient: "from-orange-600/10 to-transparent",
        category: "Operations",
    },
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
                <div className="max-w-4xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold tracking-wide text-sm mb-8">
                        <Zap className="w-4 h-4 text-primary" />
                        The Engine Room
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
                        Everything you need.<br />
                        <span className="text-slate-600">Nothing you don&apos;t.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                        Say goodbye to disjointed SaaS tools. Nest n Wings replaces 7 different apps with one deeply integrated platform.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Massive Bento Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]"
                >
                    {filteredFeatures.map((feature, i) => (
                        <motion.div
                            layout
                            key={feature.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
                            className={`group relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0B1120]/50 backdrop-blur-md p-8 sm:p-10 hover:border-white/30 transition-colors duration-500
                                ${feature.size === "large" ? "md:col-span-2 lg:col-span-2 row-span-2" : ""}
                                ${feature.size === "medium" ? "md:col-span-2 lg:col-span-2 row-span-1" : ""}
                                ${feature.size === "small" ? "col-span-1 row-span-1" : ""}
                            `}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <h3 className={`font-bold text-white mb-3 ${feature.size === 'large' ? 'text-3xl xl:text-4xl' : 'text-2xl'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Optional Large Mockup for Large Cards */}
                            {feature.size === "large" && feature.mockup && (
                                <div className="absolute top-[40%] left-[40%] w-full h-[300px] opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none filter saturate-0 group-hover:saturate-100">
                                    <div className="w-[800px] h-[500px] origin-top-left scale-[0.4] sm:scale-[0.5] md:scale-[0.55] lg:scale-[0.6]">
                                        {feature.mockup}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Final Hook */}
                <div className="mt-32 text-center">
                    <Link
                        href="/book-demo"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-bold transition-all bg-primary text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] h-14 px-10 cursor-pointer"
                    >
                        Explore all 50+ features on a live demo
                    </Link>
                </div>
            </div>
        </main>
    );
}
