import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import AdminDashboardClient from "./AdminDashboardClient";

export default async function AdminBlogDashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    const posts = await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
        include: { author: { select: { email: true } } }
    });

    return <AdminDashboardClient initialPosts={posts} userEmail={session.user?.email} />;
}
