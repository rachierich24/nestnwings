import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { slugify } from '@/lib/utils'; // We need to write this utility

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');

    try {
        const posts = await prisma.post.findMany({
            where: published ? { published: published === 'true' } : undefined,
            orderBy: { createdAt: 'desc' },
            include: { author: { select: { id: true, email: true } } }
        });

        return NextResponse.json(posts);
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, content, image, category, authorId, published } = body;

        // Automatically generate a URL-friendly slug from the title
        const slug = slugify(title);

        const newPost = await prisma.post.create({
            data: {
                title,
                slug,
                description,
                content,
                image,
                category,
                authorId,
                published: published ?? false,
            }
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error("Failed to create post:", error);
        return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }
}
