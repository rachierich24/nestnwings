"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
    {
        slug: "digital-hostel-management-transforming-universities",
        title: "How Digital Hostel Management Systems Are Transforming Universities",
        excerpt:
            "Universities across the world are moving from manual hostel operations to digital management platforms. Automating room allotment, payments, and student records helps institutions reduce administrative workload and improve transparency.",
        readTime: "5 min",
        keywords: ["hostel management software", "student accommodation management", "university hostel automation"],
        gradient: "from-blue-500/10 to-teal-500/10",
        accentColor: "text-blue-600",
        iconBg: "bg-blue-50",
    },
    {
        slug: "top-challenges-hostel-management-technology",
        title: "Top Challenges in Hostel Management and How Technology Solves Them",
        excerpt:
            "Managing hostels manually often leads to room allocation errors, payment delays, and operational confusion. Modern hostel management platforms simplify these tasks through automation and centralized dashboards.",
        readTime: "4 min",
        keywords: ["hostel management problems", "hostel administration software", "student housing technology"],
        gradient: "from-purple-500/10 to-pink-500/10",
        accentColor: "text-purple-600",
        iconBg: "bg-purple-50",
    },
];

export function BlogSection() {
    return (
        <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
            {/* Subtle background patterns */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold tracking-widest text-[10px] md:text-xs uppercase mb-6">
                        Blog
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5 leading-tight">
                        Insights for Modern{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Hostel Management
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
                        Guides and insights on running smarter hostel operations.
                    </p>
                </motion.div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group block">
                                <div
                                    className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 border border-slate-100"
                                    style={{
                                        padding: "24px",
                                        borderRadius: "16px",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    {/* Gradient accent bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Keywords as tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {post.keywords.map((kw) => (
                                            <span
                                                key={kw}
                                                className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold uppercase tracking-wider group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-300"
                                            >
                                                {kw}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                                        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                                            <Clock size={14} />
                                            <span className="font-medium">{post.readTime} read</span>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                            Read Article
                                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all duration-300"
                    >
                        View All Articles
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
