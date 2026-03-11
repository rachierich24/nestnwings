"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Plus, Edit2, Trash2, LogOut, ExternalLink, Loader2, RefreshCw } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function AdminDashboardClient({ initialPosts, userEmail }: { initialPosts: any[], userEmail?: string | null }) {
    const router = useRouter();
    const [posts, setPosts] = useState(initialPosts);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Form State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [published, setPublished] = useState(false);

    const openCreateNew = () => {
        setCurrentPost(null);
        setTitle("");
        setDescription("");
        setContent("");
        setImage("mockup:FinMockup"); // Default placeholder
        setCategory("Engineering");
        setPublished(false);
        setIsEditing(true);
    };

    const openEdit = (post: any) => {
        setCurrentPost(post);
        setTitle(post.title);
        setDescription(post.description);
        setContent(post.content);
        setImage(post.image || "");
        setCategory(post.category || "");
        setPublished(post.published);
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            await fetch(`/api/posts/${id}`, { method: 'DELETE' });
            setPosts(posts.filter(p => p.id !== id));
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = { title, description, content, image, category, published, authorId: currentPost?.authorId || "admin_seed_id" };

        try {
            if (currentPost) {
                // Update
                const res = await fetch(`/api/posts/${currentPost.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const updated = await res.json();
                setPosts(posts.map(p => p.id === updated.id ? updated : p));
            } else {
                // Create
                // In a real app we would get the authorId from the session properly, 
                // but we know there's only one user for this MVP.
                const userRes = await fetch('/api/auth/session');
                const session = await userRes.json();
                payload.authorId = session?.user?.id;

                const res = await fetch('/api/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const created = await res.json();
                setPosts([created, ...posts]);
            }
            setIsEditing(false);
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 font-sans">

            {/* Header Area */}
            <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 border-b border-white/10 pb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
                        <img src="/nest-n-wings-logo.png" className="h-8 brightness-0 invert" alt="Logo" />
                        CMS Dashboard
                    </h1>
                    <p className="text-slate-400 text-sm">Welcome back, {userEmail}</p>
                </div>

                <div className="flex gap-4">
                    <Link href="/blog" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors border border-white/10">
                        View Live Blog <ExternalLink size={16} />
                    </Link>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium transition-colors border border-red-500/20"
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto relative">

                {/* Editor View */}
                {isEditing ? (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                            <h2 className="text-2xl font-bold">{currentPost ? 'Edit Post' : 'Create New Post'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-sm text-slate-400 hover:text-white px-4 py-2">Cancel</button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Post Title</label>
                                    <input type="text" required value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white" placeholder="The Future of Housing..." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</label>
                                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white" placeholder="Operations, Finance, etc." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Short Description</label>
                                <textarea required value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white min-h-[80px]" placeholder="A brief summary for the cards..." />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                <div className="space-y-2 w-full">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex justify-between">
                                        <span>Cover Image URL or Mockup Tag</span>
                                        <span className="text-[10px] text-slate-500 normal-case">(e.g., mockup:FinMockup)</span>
                                    </label>
                                    <input type="text" value={image} onChange={e => setImage(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-white" placeholder="mockup:OpsMockup or https://..." />
                                </div>
                                <div className="pb-3 px-2 flex items-center gap-3">
                                    <input type="checkbox" id="published" checked={published} onChange={e => setPublished(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary accent-primary" />
                                    <label htmlFor="published" className="font-bold cursor-pointer text-emerald-400 select-none">Publish immediately</label>
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex justify-between">
                                    <span>Main Content (Markdown Supported)</span>
                                </label>
                                <textarea required value={content} onChange={e => setContent(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-white min-h-[400px] font-mono text-sm leading-relaxed" placeholder="# Your heading&#10;Start writing here..." />
                            </div>

                            <div className="pt-6 border-t border-white/10 flex justify-end">
                                <button type="submit" disabled={isLoading} className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    {isLoading ? <Loader2 className="animate-spin" size={18} /> : (currentPost ? <RefreshCw size={18} /> : <Plus size={18} />)}
                                    {currentPost ? 'Update Post' : 'Publish Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    /* Dashboard View */
                    <div className="space-y-6">
                        <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                            <div>
                                <h3 className="text-xl font-bold flex items-center gap-2">Published & Drafts <span className="bg-white/10 text-xs py-0.5 px-2 rounded-full">{posts.length}</span></h3>
                                <p className="text-sm text-slate-400 mt-1">Manage your content here.</p>
                            </div>
                            <button onClick={openCreateNew} className="bg-white text-black hover:bg-slate-200 font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-transform active:scale-95 text-sm">
                                <Plus size={16} /> New Post
                            </button>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-black/20 text-xs uppercase tracking-widest text-slate-400 font-bold">
                                            <th className="p-4">Title</th>
                                            <th className="p-4">Status</th>
                                            <th className="p-4">Date</th>
                                            <th className="p-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-sm">
                                        {posts.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="p-8 text-center text-slate-500">No posts found. Start writing!</td>
                                            </tr>
                                        ) : posts.map(post => (
                                            <tr key={post.id} className="hover:bg-white/5 transition-colors group">
                                                <td className="p-4">
                                                    <div className="font-bold text-white mb-1 truncate max-w-xs md:max-w-md">{post.title}</div>
                                                    <div className="text-slate-500 text-xs truncate max-w-xs md:max-w-md">{post.slug}</div>
                                                </td>
                                                <td className="p-4">
                                                    {post.published ? (
                                                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> LIVE
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-bold tracking-wider">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> DRAFT
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="p-4 text-slate-400 font-medium whitespace-nowrap">
                                                    {format(new Date(post.createdAt), "MMM d, yyyy")}
                                                </td>
                                                <td className="p-4 text-right">
                                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        {post.published && (
                                                            <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 text-slate-400 hover:text-white bg-black/40 hover:bg-black/60 rounded-md transition-colors" title="View Live">
                                                                <ExternalLink size={16} />
                                                            </Link>
                                                        )}
                                                        <button onClick={() => openEdit(post)} className="p-2 text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 rounded-md transition-colors" title="Edit">
                                                            <Edit2 size={16} />
                                                        </button>
                                                        <button onClick={() => handleDelete(post.id)} className="p-2 text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500/20 rounded-md transition-colors" title="Delete">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
