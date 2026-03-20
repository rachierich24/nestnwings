"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UserPlus, BedDouble, Wallet, LayoutDashboard, ArrowRight } from "lucide-react";

const steps = [
    {
        id: "apply",
        number: "1",
        title: "Student applies",
        description: "Students submit forms through a branded portal via QR code or link.",
        icon: UserPlus,
    },
    {
        id: "allot",
        number: "2",
        title: "Smart room allotment",
        description: "Rooms are automatically assigned based on preferences, gender, and availability.",
        icon: BedDouble,
    },
    {
        id: "pay",
        number: "3",
        title: "Payments & attendance tracked",
        description: "Invoices generate automatically while biometric locks sync resident attendance in real-time.",
        icon: Wallet,
    },
    {
        id: "manage",
        number: "4",
        title: "Admin dashboard manages everything",
        description: "Wardens and operators monitor occupancy, resolve exact tickets, and oversee revenue from one screen.",
        icon: LayoutDashboard,
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
            className="py-12 md:py-20 bg-[#020617] relative overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-5xl">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="font-heading text-4xl md:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#2563EB]">Nest n Wings</span> Works
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        From the moment a student applies to the day they check out, every single phase of the resident journey is automated.
                    </p>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* The structural background line */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full" />

                    {/* The animated progression line */}
                    <motion.div
                        style={{ height: pathHeight }}
                        className="absolute top-0 left-8 md:left-1/2 w-[2px] bg-gradient-to-b from-[#14B8A6] to-[#2563EB] md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] origin-top"
                    />

                    <div className="flex flex-col gap-16 md:gap-24">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                                    {/* Numbered Central Node */}
                                    <div className="absolute left-[-16px] md:left-1/2 w-8 h-8 md:-translate-x-1/2 rounded-full bg-blue-600 border-2 border-blue-400/50 group-hover:border-[#14B8A6] transition-colors duration-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                        <div className="text-[10px] font-bold text-white leading-none">{step.number}</div>
                                        {/* Downward Flow Arrow on line */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 opacity-40">
                                                <motion.div
                                                    animate={{ y: [0, 5, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <ArrowRight size={12} className="rotate-90 text-blue-400 scale-y-150" />
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Desktop Animated Arrow (Pointing from Line to Card) */}
                                    <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-1/2 translate-x-4' : 'left-1/2 -translate-x-4'} w-12 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                                        <motion.div
                                            animate={{ x: isEven ? [0, -5, 0] : [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent relative"
                                        >
                                            <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-0 -rotate-[135deg]' : 'right-0 rotate-45'} w-2 h-2 border-t border-r border-[#2563EB] transform origin-center`} />
                                        </motion.div>
                                    </div>

                                    {/* Desktop Layout - Alternating sides */}
                                    <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-6' : 'pl-6 ml-auto text-left'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.7, ease: "easeOut" }}
                                            className="inline-block p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                                        >
                                            <div className={`mb-6 inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-[#14B8A6]/20 to-[#2563EB]/20 border border-white/10 items-center justify-center text-white ${isEven ? 'float-right ml-6' : 'float-left mr-6'}`}>
                                                <Icon size={24} />
                                            </div>
                                            <div className="clear-none">
                                                <h3 className="font-heading text-2xl font-bold text-white mb-3">{step.title}</h3>
                                                <p className="text-[#94A3B8] text-base leading-relaxed font-medium">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Mobile Layout - Always right of the line */}
                                    <div className="md:hidden w-full pl-10 py-2">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.5 }}
                                            className="flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14B8A6]/20 to-[#2563EB]/20 border border-white/10 flex items-center justify-center text-white">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-heading text-[20px] font-bold text-white mb-2 leading-tight">{step.title}</h3>
                                                <p className="text-[#94A3B8] text-[15px] leading-relaxed">{step.description}</p>
                                            </div>
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
