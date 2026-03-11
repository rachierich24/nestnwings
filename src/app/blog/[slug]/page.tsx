import { getAllPostIds, getPostData, getSortedPostsData } from "@/lib/markdown";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { OpsMockup, ResMockup, FinMockup } from "@/components/home/ProductShowcase";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

// Generate static params for all markdown posts at build time
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);
    if (!postData) {
        return { title: 'Post Not Found | Nest n Wings Blog' };
    }
    return {
        title: `${postData.title} | Nest n Wings`,
        description: postData.description,
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);
    const allPosts = getSortedPostsData();

    if (!postData) {
        notFound();
    }

    return <BlogPostClient postData={postData} allPosts={allPosts} />;
}
