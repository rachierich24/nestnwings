import Link from "next/link";
import { ArrowRight, Clock, Mail, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { Blog1FlowMockup, Blog2FlowMockup } from "@/components/blog/BlogMockups";

export const metadata: Metadata = {
    title: "Blog - Nest n Wings",
    description: "Insights, product updates, and thought leadership for modern co-living and hostel management.",
};

const blogPosts = [
    {
        slug: "digital-hostel-management-transforming-universities",
        title: "How Digital Hostel Management Systems Are Transforming Universities",
        description:
            "Universities across the world are moving from manual hostel operations to digital management platforms. Automating room allotment, payments, and student records helps institutions reduce administrative workload and improve transparency.",
        readTime: "5 min",
        date: "2026-03-15",
        author: "Nest n Wings Team",
        category: "Industry Trends",
        mockup: "blog1",
    },
    {
        slug: "top-challenges-hostel-management-technology",
        title: "Top Challenges in Hostel Management and How Technology Solves Them",
        description:
            "Managing hostels manually often leads to room allocation errors, payment delays, and operational confusion. Modern hostel management platforms simplify these tasks through automation and centralized dashboards.",
        readTime: "4 min",
        date: "2026-03-10",
        author: "Nest n Wings Team",
        category: "Solutions",
        mockup: "blog2",
    },
];

function getMockup(type: string) {
    if (type === "blog1") return <Blog1FlowMockup />;
    if (type === "blog2") return <Blog2FlowMockup />;
    return null;
}

export default function BlogIndex() {
    const featured = blogPosts[0];
    const rest = blogPosts.slice(1);

    return (
        <div className="min-h-screen bg-[#020617] text-white">
            {/* ========== Hero Section ========== */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase mb-8 shadow-sm backdrop-blur-md">
                        <BookOpen size={14} /> Journal
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
                        Insights for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                            Modern Operators.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Thought leadership, product updates, and actionable guides for running smarter hostel operations using technology.
                    </p>
                </div>
            </section>

            {/* ========== Featured Post ========== */}
            <section className="container mx-auto px-4 md:px-6 max-w-6xl pb-20">
                <Link
                    href={`/blog/${featured.slug}`}
                    className="group block bg-[#0A101D] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/30 hover:-translate-y-2"
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Mockup */}
                        <div className="aspect-[4/3] md:aspect-auto bg-[#050A15] p-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-700">
                                {getMockup(featured.mockup)}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center relative">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/30">
                                    {featured.category}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">Featured Article</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                                {featured.title}
                            </h2>

                            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                                {featured.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                                    <time dateTime={featured.date}>
                                        {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                    </time>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {featured.readTime}
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary opacity-50 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    Read <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* ========== Blog Grid ========== */}
            {rest.length > 0 && (
                <section className="container mx-auto px-4 md:px-6 max-w-6xl pb-32">
                    <h3 className="text-2xl font-black text-white mb-10 tracking-tight">Latest Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block bg-[#0A101D] rounded-3xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:border-white/30 hover:-translate-y-2 flex flex-col"
                            >
                                {/* Mockup */}
                                <div className="aspect-[16/10] bg-[#050A15] p-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    <div className="w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-700">
                                        {getMockup(post.mockup)}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                                            <Clock size={12} /> {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">
                                        {post.description}
                                    </p>

                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all duration-300 mt-auto">
                                        Read Article <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* ========== Newsletter CTA ========== */}
            <section className="bg-[#0A101D] border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/50 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-8">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                        Stay in the loop.
                    </h3>
                    <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                        Get the latest insights on hostel management, product updates, and operational best practices delivered directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="you@university.edu"
                            className="flex-1 px-5 py-4 rounded-xl border border-white/10 bg-[#020617] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-6 font-medium">No spam. Unsubscribe anytime.</p>
                </div>
            </section>
        </div>
    );
}
