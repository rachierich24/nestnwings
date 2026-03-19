"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Building2, Check } from "lucide-react";

const personas = [
    {
        title: "Students / Residents",
        icon: GraduationCap,
        benefits: [
            "Clear allotment status",
            "Transparent payments & receipts",
            "Easy request submission"
        ],
        uiMockup: (
            <div className="absolute top-6 -right-16 md:-right-12 w-64 p-4 rounded-xl bg-[#0F172A] border border-white/10 shadow-2xl transform rotate-6 group-hover:rotate-2 group-hover:-translate-x-4 transition-all duration-500 z-0 scale-90 md:scale-100">
                <div className="flex gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 text-xs">RS</div>
                    <div>
                        <div className="text-white text-sm font-semibold">Rahul Sharma</div>
                        <div className="text-blue-400 text-[10px] font-medium">B.Tech • 2nd Year</div>
                    </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/5 mb-3">
                    <div className="text-[10px] text-slate-400 mb-1">Current Allotment</div>
                    <div className="text-white text-sm font-bold flex justify-between">
                        Room 402 <span className="text-emerald-400 text-xs px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10">Active</span>
                    </div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>Hostel: Aryabhatta</span>
                    <span className="text-blue-400 underline cursor-pointer">View Pass</span>
                </div>
            </div>
        ),
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-500/5",
        buttonText: "See student experience",
    },
    {
        title: "Wardens & Operations",
        icon: Briefcase,
        benefits: [
            "Automated approvals",
            "Less paperwork, more action",
            "Faster decision making"
        ],
        uiMockup: (
            <div className="absolute top-8 right-[-20px] md:right-[-10px] w-64 p-3 rounded-xl bg-[#0F172A] border border-white/10 shadow-2xl transform -rotate-3 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500 z-0 flex flex-col gap-2 scale-90 md:scale-100">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Pending Actions</div>
                    <div className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-300">12 Total</div>
                </div>
                {[
                    { t: "Late Entry Request", n: "Priya S.", c: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
                    { t: "Room Maintenance", n: "Room 105", c: "text-rose-400 bg-rose-400/10 border-rose-400/20" }
                ].map((req, i) => (
                    <div key={i} className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/5">
                        <div>
                            <div className="text-white text-[11px] font-medium">{req.t}</div>
                            <div className="text-slate-500 text-[9px]">{req.n}</div>
                        </div>
                        <div className={`px-2 py-1 rounded border text-[9px] font-bold ${req.c}`}>Review</div>
                    </div>
                ))}
            </div>
        ),
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-orange-500/5",
        buttonText: "See operational tools",
    },
    {
        title: "Hostel Management",
        icon: Building2,
        benefits: [
            "Full visibility into occupancy",
            "Real-time revenue tracking",
            "Better overall operational control"
        ],
        uiMockup: (
            <div className="absolute top-12 -right-12 md:-right-8 w-60 p-4 rounded-xl bg-[#0F172A] border border-white/10 shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-500 z-0 scale-90 md:scale-100">
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 flex flex-col">
                        <span className="text-[9px] text-emerald-400 uppercase tracking-widest">Revenue</span>
                        <span className="text-white text-sm font-bold">₹2.4M</span>
                    </div>
                    <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20 flex flex-col">
                        <span className="text-[9px] text-blue-400 uppercase tracking-widest">Occupancy</span>
                        <span className="text-white text-sm font-bold">96%</span>
                    </div>
                </div>
                <div className="flex items-end h-16 gap-1 bg-white/5 p-2 rounded border border-white/5 rounded-b-none">
                    {[30, 50, 40, 70, 60, 90, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400/50 rounded-sm" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        ),
        color: "from-emerald-400 to-green-600",
        bgColor: "bg-green-500/5",
        buttonText: "See management dashboard",
    },
];

export function PersonaCards() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#14B8A6]/5 to-[#2563EB]/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-[12px] py-[6px] rounded-full bg-white/5 border border-white/10 shadow-sm text-white/80 text-[12px] font-semibold mb-[20px]"
                    >
                        Built For Everyone
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
                    >
                        One platform, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#2563EB]">infinite adaptations.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[19px] text-[#94A3B8] max-w-2xl mx-auto"
                    >
                        Whether you&apos;re paying rent, approving leave, or analyzing portfolio revenue, the interface dynamically shapes itself to your role.
                    </motion.p>
                </div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {personas.map((persona, index) => {
                        const Icon = persona.icon;
                        return (
                            <MagneticCard key={index} index={index} persona={persona} Icon={Icon} isInView={isInView} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Magnetic Card Component for the "Flashlight" Hover Effect
function MagneticCard({ index, persona, Icon, isInView }: { index: number, persona: any, Icon: React.ElementType, isInView: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            className="flex flex-col h-[450px] md:h-[500px] bg-[#1E293B]/40 rounded-[32px] border border-white/[0.08] relative overflow-hidden group shadow-2xl"
            style={{ isolation: 'isolate' }}
        >
            {/* Magnetic Flashlight Glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`
                }}
            />

            {/* Subtle Brand Color Accent overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 z-0`} />

            {/* Top Interactive Bento Section */}
            <div className={`h-1/2 w-full relative overflow-hidden ${persona.bgColor} transition-colors duration-500 border-b border-white/5`}>
                {persona.uiMockup}
            </div>

            {/* Bottom Content Section */}
            <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-[#020617]/50">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:${persona.color}`}>
                    <Icon size={24} className="drop-shadow-sm" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-2 relative z-10 tracking-tight">
                    {persona.title}
                </h3>

                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-medium">
                    {persona.benefits.join(" • ")}
                </p>


            </div>
        </motion.div>
    );
}
