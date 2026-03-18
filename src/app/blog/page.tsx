import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

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
    },
];

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-[#020617] text-white pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header */}
                <div className="max-w-3xl mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Nest n Wings <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Journal</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                        Explore strategies for scaling operations, deep dives into our product engine, and stories from the fastest-growing properties on our network.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {blogPosts.map((post, index) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
                        >
                            {/* Gradient Cover */}
                            <div className="relative aspect-[16/9] overflow-hidden bg-[#0B1120] flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-600/10 to-purple-600/10 group-hover:opacity-80 transition-opacity" />
                                <div className="relative z-10 text-center px-8">
                                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-wider text-primary uppercase mb-4">
                                        {post.category}
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {post.keywords.map((kw) => (
                                            <span key={kw} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                                                {kw}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">
                                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                                        <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-400 leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-white transition-colors">
                                        Read Article
                                        <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
