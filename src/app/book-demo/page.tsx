"use client";

import { InlineWidget } from "react-calendly";
import { CheckCircle2, Star, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function BookDemoPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white pt-28 pb-12 relative overflow-hidden">
            {/* Cinematic Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/10 via-blue-600/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Value Proposition */}
                    <div className="lg:col-span-5 flex flex-col justify-center h-full pt-4 lg:pt-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 w-fit backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Live Walkthrough
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
                            See <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Nest n Wings</span> in Action.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
                            Schedule a personalized 30-minute demo to see how our operating system can automate your specific hostel workflows and unlock new revenue streams.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Zap size={16} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Customized for your scale</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">We tailor the walkthrough based on whether you run a single boutique property or a 50+ location network.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                    <Shield size={16} className="text-emerald-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Live Q&A with an expert</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">No generic video recordings. Talk directly with an operations specialist who understands co-living.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 size={16} className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Pricing & Implementation</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Get a clear timeline on data migration and exactly what it costs to switch your operations over.</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof Mini */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-md">
                            <div className="flex items-center gap-1 text-amber-500 mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-slate-300 text-sm italic mb-4">"The demo completely changed how we viewed our operational bottlenecks. We deployed Nest n Wings across 3 properties within a week."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden relative">
                                    <Image src="https://i.pravatar.cc/150?u=nestnwings" alt="Testimonial Avatar" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Sarah Jenkins</p>
                                    <p className="text-xs text-slate-500">Operations Director, Nomad Haus</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Calendly Embed */}
                    <div className="lg:col-span-7 relative">
                        {/* Decorative glow behind the calendar */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 blur-3xl opacity-50 rounded-[40px] pointer-events-none" />

                        <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] relative z-10 p-2 md:p-4 border border-white/10">
                            {/* 
                                !IMPORTANT: Replace this URL with the actual Calendly event link later 
                                Currently using a placeholder for development.
                            */}
                            <div className="w-full h-[700px] overflow-hidden rounded-[24px]">
                                <InlineWidget
                                    url="https://calendly.com/rachitvij24/nest-n-wings-product-demo-consultation"
                                    styles={{
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '24px'
                                    }}
                                    pageSettings={{
                                        backgroundColor: 'ffffff',
                                        hideEventTypeDetails: false,
                                        hideLandingPageDetails: false,
                                        primaryColor: '2563eb', // Matches our primary blue
                                        textColor: '0f172a'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
