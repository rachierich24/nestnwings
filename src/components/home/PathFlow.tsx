"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, CheckCircle2, BedDouble, Users, Wallet, Activity } from "lucide-react";

const steps = [
    {
        id: "apply",
        title: "Digital Applications",
        description: "Students submit forms and documents through a branded portal via QR code or link.",
        icon: ClipboardCheck,
    },
    {
        id: "approve",
        title: "1-Click Approvals",
        description: "Admins review documents and approve or waitlist applicants instantly.",
        icon: CheckCircle2,
    },
    {
        id: "allot",
        title: "Smart Allotment",
        description: "Rooms are automatically assigned based on preferences, course, and availability.",
        icon: BedDouble,
    },
    {
        id: "manage",
        title: "Resident Directory",
        description: "Centralized database of all residents, their status, and historical data.",
        icon: Users,
    },
    {
        id: "pay",
        title: "Automated Billing",
        description: "Generate rent invoices, track payments, and apply fines automatically.",
        icon: Wallet,
    },
    {
        id: "monitor",
        title: "Live Insights",
        description: "Monitor occupancy rates, revenue, and daily operations in real-time.",
        icon: Activity,
    }
];

export function PathFlow() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="py-32 bg-[#020617] relative overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        The Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#2563EB]">Workflow</span>
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        From the moment a student applies to the day they check out, every step is automated, tracked, and synchronized.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
                    {/* The structural background line */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full" />

                    {/* The animated animated line */}
                    <motion.div
                        style={{ height: pathHeight }}
                        className="absolute top-0 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-[#14B8A6] to-[#2563EB] md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] origin-top"
                    />

                    <div className="flex flex-col gap-12 md:gap-24">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                                    {/* Line Node / Dot - Exact center */}
                                    <div className="absolute left-[-16px] md:left-1/2 w-8 h-8 md:-translate-x-1/2 rounded-full bg-[#020617] border-2 border-white/10 flex items-center justify-center z-20">
                                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#2563EB]" />
                                    </div>

                                    {/* Desktop Layout - Alternating sides */}
                                    <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-12 mr-auto' : 'pl-12 ml-auto text-left'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.7, ease: "easeOut" }}
                                            className="inline-block"
                                        >
                                            <div className={`mb-4 inline-flex w-14 h-14 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-white ${isEven ? 'ml-auto' : ''}`}>
                                                <Icon size={24} />
                                            </div>
                                            <h3 className="font-heading text-2xl font-bold text-white mb-3">{step.title}</h3>
                                            <p className="text-[#94A3B8] text-[17px] leading-relaxed">{step.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Mobile Layout - Always right of the line */}
                                    <div className="md:hidden w-full pl-12 py-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="mb-4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                                <Icon size={20} />
                                            </div>
                                            <h3 className="font-heading text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-[#94A3B8] text-base leading-relaxed">{step.description}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
