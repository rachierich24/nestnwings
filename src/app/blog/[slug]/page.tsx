"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, MessageSquare } from "lucide-react";
import { useParams } from "next/navigation";

const blogPosts = {
    "allocation-pipeline": {
        title: "The 4-Step Allocation Pipeline",
        category: "Architecture",
        date: "Mar 12, 2026",
        readTime: "8 min read",
        author: "Engineering Team",
        content: `
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium italic border-l-4 border-purple-500 pl-6">
                Assigning rooms for 1,000 students used to take a week of sleepless nights. Today, it takes 4 clicks and 12 seconds. Here is how we rebuilt the core of hostel operations.
            </p>
            
            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Stage 1: The Validation Filter</h2>
            <p className="text-lg text-slate-400 mb-6">
                Before a single room can be assigned, every resident profile must pass the security and financial validation filter. Our engine automatically checks fee records, previous conduct history, and academic year eligibility in real-time.
            </p>
            
            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Stage 2: Preference Weighting</h2>
            <p className="text-lg text-slate-400 mb-6">
                Students aren't just data points; they have preferences. Whether it's proximity to a library or a specific block preference, our algorithm assigns weights to each request, ensuring the highest possible satisfaction score across the entire cohort.
            </p>

            <div className="my-12 p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center">
                <div className="text-5xl font-black text-purple-400 mb-4">98.2%</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Preference Match Accuracy</div>
            </div>

            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Stage 3: The Match Engine</h2>
            <p className="text-lg text-slate-400 mb-6">
                The core logic. It balances gender-segregated blocks, academic year distribution, and room capacity constraints simultaneously. No two students ever end up in the same bed, and no room is ever over-allocated.
            </p>

            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Stage 4: Automated Dispatch</h2>
            <p className="text-lg text-slate-400 mb-6">
                Once the run is finalized, the system automatically dispatches allotment passes, payment links, and check-in instructions. The warden simply watches the dashboard turn green.
            </p>
        `
    },
    "death-of-manual-ops": {
        title: "The Death of Manual Ops",
        category: "Engineering",
        date: "Feb 28, 2026",
        readTime: "6 min read",
        author: "Ops Strategy",
        content: `
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium italic border-l-4 border-teal-500 pl-6">
                Spreadsheets are where data goes to die. In a modern hostel, they are a liability.
            </p>
            
            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">The #REF! Nightmare</h2>
            <p className="text-lg text-slate-400 mb-6">
                We've seen it everywhere: the one "Master Sheet" that everyone is afraid to touch. One wrong delete and the entire hostel's revenue data is gone. Fragmentation leads to friction, and friction leads to loss.
            </p>
            
            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Single Source of Truth</h2>
            <p className="text-lg text-slate-400 mb-6">
                A unified platform isn't just about "better UI". It's about data integrity. When a student pays their fee, the warden knows instantly, the gate security sees the updated 'Active Pass', and the financial ledger balances itself.
            </p>
        `
    },
    "psychology-of-space": {
        title: "The Psychology of Space",
        category: "Strategy",
        date: "Feb 15, 2026",
        readTime: "10 min read",
        author: "Behavioral Science",
        content: `
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium italic border-l-4 border-amber-500 pl-6">
                Hostels are social ecosystems. How you place people matters more than the furniture you provide.
            </p>
            
            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Social-Graph Matching</h2>
            <p className="text-lg text-slate-400 mb-6">
                By analyzing previous roommate interactions and shared academic interests, our engine can predict conflict zones. 
                We use social-graph matching to pair students who are likely to collaborate, not just co-exist.
            </p>

            <div className="my-12 p-8 rounded-[2rem] bg-amber-500/10 border border-amber-500/20 text-center">
                <div className="text-5xl font-black text-amber-400 mb-4">60%</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Reduction in Roommate Conflicts</div>
            </div>
            
            <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Retention by Design</h2>
            <p className="text-lg text-slate-400 mb-6">
                Students who feel socially integrated at the room level are 75% more likely to renew their stay for the following year. 
                Good allotment isn't just ops; it's your biggest revenue driver.
            </p>
        `
    }
};

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-black text-4xl">404: POST NOT FOUND</div>;

    return (
        <main className="bg-[#020617] min-h-screen text-white pt-32 pb-32">
            <div className="container mx-auto px-4 md:px-8 max-w-[800px] relative z-10">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs">
                    <ArrowLeft size={16} /> Back to Nest Logs
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex gap-4 items-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                        <span className={`px-3 py-1 rounded bg-white/5 border border-white/10 ${post.category === 'Architecture' ? 'text-purple-400' : post.category === 'Engineering' ? 'text-teal-400' : 'text-amber-400'}`}>{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between py-6 border-y border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-black">NW</div>
                            <div>
                                <div className="text-sm font-bold text-white">{post.author}</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Industry Expert</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full hover:bg-white/5 text-slate-400 transition-colors"><Share2 size={20} /></button>
                            <button className="p-2 rounded-full hover:bg-white/5 text-slate-400 transition-colors"><MessageSquare size={20} /></button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <article 
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer CTA */}
                <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 text-center">
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Ready to modernize your campus?</h3>
                    <Link href="/book-demo" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-slate-200 transition-colors">
                        Book a Discovery Call
                    </Link>
                </div>
            </div>
        </main>
    );
}
