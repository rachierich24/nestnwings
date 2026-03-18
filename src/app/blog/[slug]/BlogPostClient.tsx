"use client";

import { format, parseISO } from "date-fns";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { AllotmentFlowDiagram, Blog1FlowMockup, Blog2FlowMockup } from "@/components/blog/BlogMockups";

export default function BlogPostClient({ postData, allPosts }: { postData: any; allPosts: any[] }) {
    const { scrollYProgress } = useScroll();

    return (
        <article className="min-h-screen bg-white text-slate-900 pt-28 pb-32 relative">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 z-[60] origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors mb-10 group font-semibold text-sm"
                >
                    <ArrowLeft size={14} className="transform transition-transform group-hover:-translate-x-1" />
                    Back to Journal
                </Link>

                {/* Post Header */}
                <header className="mb-12">
                    {postData.category && (
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-5">
                            {postData.category}
                        </div>
                    )}

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-slate-900">
                        {postData.title}
                    </h1>

                    <p className="text-lg text-slate-500 leading-relaxed mb-6">
                        {postData.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm font-medium text-slate-400 border-t border-slate-100 pt-6 mt-6">
                        <time dateTime={postData.date}>
                            {format(parseISO(postData.date), "MMMM d, yyyy")}
                        </time>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>{postData.author}</span>
                        {postData.readTime && (
                            <>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {postData.readTime}
                                </span>
                            </>
                        )}
                    </div>
                </header>

                {/* Hero Mockup / UI Flow visual */}
                {postData.mockup && (
                    <div className="mb-12 aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                        {postData.mockup === "blog1" && <Blog1FlowMockup />}
                        {postData.mockup === "blog2" && <Blog2FlowMockup />}
                    </div>
                )}

                {/* Markdown Content (Prose) */}
                <div
                    className="prose prose-lg lg:prose-xl max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:mb-4 prose-headings:text-slate-900
                        prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12
                        prose-h3:text-xl prose-h3:md:text-2xl
                        prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-slate-800 prose-strong:font-bold
                        prose-blockquote:border-l-primary prose-blockquote:bg-slate-50 prose-blockquote:pl-6 prose-blockquote:py-3 prose-blockquote:rounded-r-xl prose-blockquote:italic
                        prose-li:text-slate-600 prose-ul:mb-6 prose-ol:mb-6
                        prose-li:marker:text-primary"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

                {/* Inline Allotment Flow Diagram */}
                {postData.mockup === "blog1" && (
                    <div className="my-16 p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-2xl">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">How It Works — Allotment Workflow</div>
                        <AllotmentFlowDiagram />
                    </div>
                )}

                {postData.mockup === "blog2" && (
                    <div className="my-16 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Before & After — The Transformation</div>
                        <div className="aspect-[16/9]">
                            <Blog2FlowMockup />
                        </div>
                    </div>
                )}

                {/* Keep Reading Widget */}
                {allPosts.length > 0 && (
                    <div className="mt-24 pt-12 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-8">Keep Reading</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {allPosts.map((post: any) => (
                                <Link
                                    href={`/blog/${post.id}`}
                                    key={post.id}
                                    className="group block bg-white rounded-[18px] border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                                    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
                                >
                                    {/* Mockup preview */}
                                    <div className="aspect-[16/9] bg-slate-50 p-3">
                                        {post.mockup === "blog1" && <Blog1FlowMockup />}
                                        {post.mockup === "blog2" && <Blog2FlowMockup />}
                                        {!post.mockup && (
                                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50 flex items-center justify-center">
                                                <span className="text-xs font-bold text-slate-400 uppercase">{post.category}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <h4 className="text-base font-bold text-slate-800 group-hover:text-primary transition-colors mb-1.5">
                                            {post.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm line-clamp-2">
                                            {post.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
