import Link from "next/link";
import { ArrowRight, Clock, Mail } from "lucide-react";
import type { Metadata } from "next";
import { Blog1FlowMockup, Blog2FlowMockup } from "@/components/blog/BlogMockups";

export const metadata: Metadata = {
    title: "Blog - Nest n Wings",
    description: "Insights, product updates, and thought leadership for modern co-living and hostel management.",
    keywords: [
        "hostel management software",
        "student accommodation management",
        "university hostel automation",
        "hostel management problems",
        "hostel administration software",
        "student housing technology",
    ],
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
        keywords: ["hostel management software", "student accommodation management", "university hostel automation"],
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
        keywords: ["hostel management problems", "hostel administration software", "student housing technology"],
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
        <div className="min-h-screen bg-white">
            {/* ========== Hero Section ========== */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-[100px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold tracking-widest text-[10px] md:text-xs uppercase mb-6">
                        Blog
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Nest n Wings{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Journal
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Insights and guides for running smarter hostel operations using modern technology.
                    </p>
                </div>
            </section>

            {/* ========== Featured Post ========== */}
            <section className="container mx-auto px-4 md:px-6 max-w-6xl pb-16">
                <Link
                    href={`/blog/${featured.slug}`}
                    className="group block bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 border border-slate-100"
                    style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.08)" }}
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Mockup */}
                        <div className="aspect-[4/3] md:aspect-auto bg-slate-50 p-4">
                            {getMockup(featured.mockup)}
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                                    {featured.category}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">Featured</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                {featured.title}
                            </h2>

                            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                                {featured.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                                    <time dateTime={featured.date}>
                                        {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                    </time>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {featured.readTime}
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    Read <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* ========== Blog Grid ========== */}
            {rest.length > 0 && (
                <section className="container mx-auto px-4 md:px-6 max-w-6xl pb-20">
                    <h3 className="text-xl font-bold text-slate-800 mb-8">More Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 border border-slate-100"
                                style={{
                                    padding: "0",
                                    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                                }}
                            >
                                {/* Mockup */}
                                <div className="aspect-[16/10] bg-slate-50 p-3">
                                    {getMockup(post.mockup)}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                                            <Clock size={10} /> {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                        {post.description}
                                    </p>

                                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all">
                                        Read Article <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* ========== Newsletter CTA ========== */}
            <section className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                        <Mail size={22} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Stay in the loop
                    </h3>
                    <p className="text-slate-500 text-base mb-8 max-w-lg mx-auto">
                        Get the latest insights on hostel management, product updates, and operational best practices delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="you@university.edu"
                            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                        <button className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-3">No spam. Unsubscribe anytime.</p>
                </div>
            </section>
        </div>
    );
}
