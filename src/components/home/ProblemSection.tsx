"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { FileText, Unplug, UserX } from "lucide-react";

const problems = [
    {
        number: "01",
        icon: FileText,
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/10",
        title: "Manual & Paper Systems",
        description: "Applications, approvals, and room allotments are still tracked offline, leading to lost records and miscommunication.",
    },
    {
        number: "02",
        icon: Unplug,
        iconColor: "text-rose-400",
        iconBg: "bg-rose-500/10",
        title: "Disconnected Tools",
        description: "Payments, attendance, and administrative records exist in entirely separate systems that never talk to each other.",
    },
    {
        number: "03",
        icon: UserX,
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10",
        title: "Operational Chaos",
        description: "Wardens and administrators burn countless hours manually resolving basic requests instead of managing the community.",
    },
];

export function ProblemSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Slight parallax for background elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "20%"]);

    // Cinematic Mask Reveal Variants
    const maskReveal = {
        hidden: { y: "120%" },
        visible: {
            y: "0%",
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative py-12 md:py-20 bg-[#0F172A] overflow-hidden"
        >
            {/* Cinematic Background Glows */}
            {!isMobile && (
                <>
                    <motion.div
                        style={{ y: bgY }}
                        className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[50%] h-[300px] md:h-[50%] rounded-full bg-[#14B8A6]/5 blur-[80px] md:blur-[120px] pointer-events-none"
                    />
                    <motion.div
                        style={{ y: bgY }}
                        className="absolute bottom-[-20%] right-[-10%] w-[250px] md:w-[40%] h-[250px] md:h-[40%] rounded-full bg-[#2563EB]/10 blur-[70px] md:blur-[100px] pointer-events-none"
                    />
                </>
            )}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Lando-style Masked Typography Reveal */}
                <div className="max-w-3xl mb-16 md:mb-20 mx-auto">
                    {/* Small accent label */}
                    <div className="flex justify-center mb-6 overflow-hidden">
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={maskReveal}
                            className="inline-flex items-center gap-3"
                        >
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            <span className="text-[12px] tracking-[0.2em] text-white/60 uppercase whitespace-nowrap">The Broken Status Quo</span>
                            <span className="w-8 h-[1px] bg-white/20"></span>
                        </motion.div>
                    </div>

                    {/* Massive Typography Set */}
                    <h2 className="font-heading text-4xl md:text-[56px] font-bold tracking-[-0.03em] leading-[1.1] text-center">
                        <div className="overflow-hidden py-1">
                            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={maskReveal} transition={{ delay: 0.1 }} className="text-white">
                                Hostel management
                            </motion.div>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.div
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={maskReveal}
                                style={{
                                    WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                                    color: "transparent"
                                }}
                                className="hidden md:block"
                            >
                                is still stuck
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={maskReveal}
                                className="md:hidden text-white/20"
                            >
                                is still stuck
                            </motion.div>
                        </div>
                        <div className="overflow-hidden py-1">
                            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={maskReveal} transition={{ delay: 0.2 }} className="text-white">
                                in the past.
                            </motion.div>
                        </div>
                    </h2>
                </div>

                {/* Problems Grid List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problems.map((problem, idx) => (
                        <motion.div
                            key={problem.number}
                            initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col items-start gap-6 p-6 md:p-8 rounded-2xl bg-[#1E293B]/30 border border-white/5 backdrop-blur-md hover:bg-[#1E293B]/60 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] transition-all duration-500 overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Hover animated background glow inside card */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/0 via-[#2563EB]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                            <div className="flex items-center justify-between w-full">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${problem.iconBg} ${problem.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                                    <problem.icon size={24} />
                                </div>
                                <div className="text-3xl font-black text-white/40 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#14B8A6]/60 group-hover:to-[#2563EB]/60 transition-all duration-500 font-heading">
                                    {problem.number}
                                </div>
                            </div>

                            <div className="flex-1 mt-2">
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#14B8A6] group-hover:to-[#2563EB] transition-colors duration-300">
                                    {problem.title}
                                </h3>
                                <p className="text-[#94A3B8] text-base leading-relaxed font-medium">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
