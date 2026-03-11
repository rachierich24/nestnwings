import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { slugify } from '@/lib/utils';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const post = await prisma.post.findUnique({
            where: { id },
            include: { author: { select: { id: true, email: true } } }
        });

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { title, description, content, image, category, published } = body;

        const updateData: any = {
            description,
            content,
            image,
            category,
            published
        };

        if (title) {
            updateData.title = title;
            updateData.slug = slugify(title);
        }

        const updatedPost = await prisma.post.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error("Failed to update post:", error);
        return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.post.delete({
            where: { id }
        });

        return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
    }
}
