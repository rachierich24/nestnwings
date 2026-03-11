"use client";

import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { OpsMockup, ResMockup, FinMockup } from "@/components/home/ProductShowcase";
import { motion, useScroll } from "framer-motion";

export default function BlogPostClient({ postData, allPosts }: { postData: any, allPosts: any[] }) {
    const { scrollYProgress } = useScroll();

    // Filter out the current post to show recommendations
    const recommendedPosts = allPosts.filter(p => p.id !== postData.id).slice(0, 2);

    return (
        <article className="min-h-screen bg-[#020617] text-white pt-32 pb-32 relative">

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 z-50 origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group font-semibold">
                    <span className="transform transition-transform group-hover:-translate-x-1">←</span>
                    Back to Journal
                </Link>

                {/* Post Header */}
                <header className="mb-16">
                    {postData.category && (
                        <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-wider text-primary uppercase mb-6">
                            {postData.category}
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
                        {postData.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm font-medium text-slate-400 uppercase tracking-widest border-t border-white/10 pt-8 mt-8">
                        <time dateTime={postData.date}>
                            {format(parseISO(postData.date), "MMMM d, yyyy")}
                        </time>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        <span>By {postData.author}</span>
                    </div>
                </header>

                {/* Hero Image / Mockup */}
                {postData.image?.startsWith("mockup:") ? (
                    <div className="w-full relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-[0_0_50px_rgba(20,184,166,0.1)] bg-[#0B1120] flex items-center justify-center pointer-events-none z-0">
                        <div className="w-[1200px] h-[800px] origin-center scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.85] xl:scale-[0.9]">
                            {postData.image === "mockup:FinMockup" && <FinMockup />}
                            {postData.image === "mockup:ResMockup" && <ResMockup />}
                            {postData.image === "mockup:OpsMockup" && <OpsMockup />}
                        </div>
                    </div>
                ) : postData.image ? (
                    <div className="w-full relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-[0_0_50px_rgba(20,184,166,0.1)]">
                        <Image
                            src={postData.image}
                            alt={postData.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                ) : null}

                {/* Markdown Content (Prose) */}
                <div
                    className="prose prose-invert prose-lg lg:prose-xl max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:mb-6 
                        prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-8
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-bold
                        prose-blockquote:border-l-primary prose-blockquote:bg-white/5 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-white
                        prose-li:text-slate-300 prose-ul:mb-8 prose-ol:mb-8"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

                {/* Keep Reading Widget */}
                {recommendedPosts.length > 0 && (
                    <div className="mt-32 pt-16 border-t border-white/10">
                        <h3 className="text-2xl font-bold mb-8">Keep Reading</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {recommendedPosts.map(post => (
                                <Link href={`/blog/${post.id}`} key={post.id} className="group block">
                                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 border border-white/10 bg-white/5 z-0">
                                        {post.image?.startsWith("mockup:") ? (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[#0B1120] group-hover:bg-[#0f172a] transition-colors duration-700 opacity-90 z-0 scale-50 origin-top-left -ml-20">
                                                {post.image === "mockup:FinMockup" && <FinMockup />}
                                                {post.image === "mockup:ResMockup" && <ResMockup />}
                                                {post.image === "mockup:OpsMockup" && <OpsMockup />}
                                            </div>
                                        ) : post.image ? (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : null}
                                    </div>
                                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h4>
                                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">{post.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
