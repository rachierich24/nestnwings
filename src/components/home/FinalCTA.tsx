"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function FinalCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["50%", isMobile ? "20%" : "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] bg-[#020617] flex items-center justify-center overflow-hidden py-32"
        >
            {/* Cinematic background: Slow moving, massive brand gradient orb */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                    style={isMobile ? { opacity: 0.6 } : { scale, opacity }}
                    className="absolute w-[300px] md:w-[800px] h-[300px] md:h-[800px] pointer-events-none"
                >
                    <div className="absolute inset-0 bg-[#14B8A6]/10 blur-[40px] md:blur-[150px] rounded-full mix-blend-screen" />
                    <div className="absolute inset-10 bg-[#2563EB]/20 blur-[30px] md:blur-[120px] rounded-full mix-blend-screen" />

                    {/* Slow breathing animation for the core glow - Disabled on mobile */}
                    {!isMobile && (
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-20 bg-[#3B82F6]/20 blur-[100px] rounded-full mix-blend-screen"
                        />
                    )}
                </motion.div>

                {/* Subtle Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    style={{ y, opacity }}
                    className="max-w-4xl mx-auto text-center flex flex-col items-center"
                >
                    {/* Floating Brand Mark */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
                        className="flex h-16 md:h-20 w-auto px-8 items-center justify-center gap-4 rounded-full bg-white/5 border border-white/10 text-white font-bold mb-10 relative overflow-hidden group shadow-2xl backdrop-blur-md"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6] to-[#2563EB] opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex items-center gap-3">
                            <div className="bg-white rounded-full p-2 flex items-center justify-center">
                                <Logo className="h-6 w-auto" />
                            </div>
                            <span className="font-bold tracking-[-0.01em] text-[20px] md:text-[24px] leading-none drop-shadow-md">
                                <span className="text-white">Nest </span>
                                <span className="text-[#14B8A6] italic drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]">n</span>
                                <span className="text-white"> Wings</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Refined Headline */}
                    <h2 className="font-heading text-5xl md:text-7xl lg:text-[88px] font-black tracking-[-0.04em] text-white mb-8 leading-[1.05] drop-shadow-lg">
                        Run your hostel <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#2563EB] to-[#22D3EE]">
                            like a modern system.
                        </span>
                    </h2>

                    <p className="text-[20px] text-[#94A3B8] mb-14 max-w-2xl leading-relaxed font-medium tracking-tight">
                        Nest n Wings connects allotment, payments, operations, and resident insights into one intelligent, unified platform. Skip the spreadsheets.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center">
                        <Link
                            href="/book-demo"
                            className="group relative inline-flex items-center justify-center gap-2 h-16 px-10 rounded-full bg-white text-[#020617] font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
                        >
                            Book a Demo
                            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/product"
                            className="group inline-flex items-center justify-center gap-2 h-16 px-10 rounded-full bg-transparent border border-white/20 text-white/90 font-medium text-lg transition-all duration-300 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]"
                        >
                            Explore Platform
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Hard fade to black at the very bottom, preparing for the footer */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#020617]" />
        </section>
    );
}
