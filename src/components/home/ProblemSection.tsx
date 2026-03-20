"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
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

// Move variants outside to prevent re-renders
const maskReveal: Variants = {
    hidden: { y: "110%" },
    visible: {
        y: "0%",
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
};

const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: i * 0.15,
            ease: [0.16, 1, 0.3, 1]
        }
    })
};

export function ProblemSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-15% 0px" });

    // Parallax logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section
            ref={containerRef}
            className="relative py-20 md:py-32 bg-[#0F172A] overflow-hidden"
        >
            {/* Cinematic Background Glows - Using CSS for responsiveness to avoid JS flickering */}
            <motion.div
                style={{ y: bgY }}
                className="absolute top-[-10%] left-[-5%] w-[60%] h-[50%] rounded-full bg-[#14B8A6]/10 blur-[120px] pointer-events-none hidden md:block"
            />
            <motion.div
                style={{ y: bgY }}
                className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none hidden md:block"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mb-20 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">


                    {/* Typography Set */}
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] text-balance text-center md:text-left w-full">
                        <div className="overflow-hidden pb-2">
                            <motion.span
                                variants={maskReveal}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="block text-white"
                            >
                                Hostel management
                            </motion.span>
                        </div>
                        <div className="overflow-hidden pb-2">
                            <motion.span
                                variants={maskReveal}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.1 }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5"
                                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                            >
                                is still stuck
                            </motion.span>
                        </div>
                        <div className="overflow-hidden pb-2">
                            <motion.span
                                variants={maskReveal}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.2 }}
                                className="block text-white"
                            >
                                in the past.
                            </motion.span>
                        </div>
                    </h2>
                </div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, idx) => (
                        <motion.div
                            key={problem.number}
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariant}
                            className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-500"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-3 rounded-2xl ${problem.iconBg} ${problem.iconColor}`}>
                                    <problem.icon size={28} />
                                </div>
                                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                                    {problem.number}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-4">
                                {problem.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {problem.description}
                            </p>

                            {/* Subtle bottom highlight */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}