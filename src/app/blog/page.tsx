import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { OpsMockup, ResMockup, FinMockup } from "@/components/home/ProductShowcase";
import prisma from "@/lib/prisma";

export const metadata = {
    title: "Blog - Nest n Wings",
    description: "Insights, product updates, and thought leadership for modern co-living and hostel management.",
};

export const revalidate = 60; // Refresh every 60 seconds

export default async function BlogIndex() {
    const rawPosts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        include: { author: { select: { email: true } } }
    });

    const allPosts = rawPosts.map(post => ({
        id: post.slug,
        title: post.title,
        description: post.description,
        date: post.createdAt.toISOString(),
        author: "Admin Editor", // Simplified for MVP
        image: post.image,
        category: post.category
    }));

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header Sequence */}
                <div className="max-w-3xl mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Nest n Wings <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Journal</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                        Explore strategies for scaling operations, deep dives into our product engine, and stories from the fastest-growing properties on our network.
                    </p>
                </div>

                {/* Posts Grid */}
                {allPosts.length === 0 ? (
                    <div className="text-center py-20 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                        <p className="text-slate-400 text-xl font-medium">No posts published yet. Check back later.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {allPosts.map((post: any, index: number) => (
                            <Link
                                href={`/blog/${post.id}`}
                                key={post.id}
                                className={`group flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] ${index === 0 ? "md:col-span-2 lg:col-span-2 md:flex-row pb-0" : ""
                                    }`}
                            >
                                {/* Image Container */}
                                <div className={`relative overflow-hidden ${index === 0 ? "md:w-1/2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-60" />
                                    {post.image?.startsWith("mockup:") ? (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[#0B1120] group-hover:bg-[#0f172a] transition-colors duration-700 opacity-90 z-0">
                                            <div className="w-[800px] h-[500px] origin-center scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] group-hover:scale-[0.45] transition-transform duration-700">
                                                {post.image === "mockup:FinMockup" && <FinMockup />}
                                                {post.image === "mockup:ResMockup" && <ResMockup />}
                                                {post.image === "mockup:OpsMockup" && <OpsMockup />}
                                            </div>
                                        </div>
                                    ) : post.image ? (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                            <span className="text-slate-600 font-bold">No Image</span>
                                        </div>
                                    )}
                                    {post.category && (
                                        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-white uppercase">
                                            {post.category}
                                        </div>
                                    )}
                                </div>

                                {/* Content Container */}
                                <div className={`p-8 md:p-10 flex flex-col justify-between ${index === 0 ? "md:w-1/2" : ""}`}>
                                    <div>
                                        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">
                                            <time dateTime={post.date}>
                                                {format(new Date(post.date), "MMMM d, yyyy")}
                                            </time>
                                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                                            <span>{post.author}</span>
                                        </div>

                                        <h2 className={`font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all ${index === 0 ? "text-3xl md:text-4xl leading-tight" : "text-2xl"
                                            }`}>
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-400 leading-relaxed max-w-lg">
                                            {post.description}
                                        </p>
                                    </div>

                                    <div className="mt-8">
                                        <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-white transition-colors">
                                            Read Article
                                            <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
