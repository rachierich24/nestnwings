import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import prisma from "@/lib/prisma";
import { remark } from "remark";
import html from "remark-html";

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await prisma.post.findUnique({ where: { slug } });

    if (!post) {
        return { title: 'Post Not Found | Nest n Wings Blog' };
    }

    return {
        title: `${post.title} | Nest n Wings`,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await prisma.post.findUnique({
        where: { slug },
        include: { author: { select: { email: true } } }
    });

    if (!post || !post.published) {
        notFound();
    }

    // Convert markdown to HTML directly in the server component
    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    const postData = {
        id: post.slug,
        title: post.title,
        description: post.description,
        date: post.createdAt.toISOString(),
        author: "Admin Editor",
        image: post.image,
        category: post.category,
        contentHtml,
    };

    // Grab 3 recent raw posts for the "Keep Reading" widget
    const rawAllPosts = await prisma.post.findMany({
        where: { published: true, slug: { not: slug } },
        orderBy: { createdAt: 'desc' },
        take: 3
    });

    const allPosts = rawAllPosts.map(p => ({
        id: p.slug,
        title: p.title,
        description: p.description,
        date: p.createdAt.toISOString(),
        category: p.category
    }));

    return <BlogPostClient postData={postData} allPosts={allPosts} />;
}
