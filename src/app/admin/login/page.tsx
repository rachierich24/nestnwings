"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("admin@nestnwings.com");
    const [password, setPassword] = useState("nestadmin123");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid email or password");
                setIsLoading(false);
            } else {
                router.push("/admin/blog");
                router.refresh();
            }
        } catch (error) {
            setError("An unexpected error occurred.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Cinematic Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Back to Home Logo */}
            <Link href="/" className="absolute top-8 left-8 hover:scale-105 transition-transform">
                <img src="/nest-n-wings-logo.png" alt="Nest n Wings" className="h-8 brightness-0 invert opacity-60 hover:opacity-100" />
            </Link>

            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <Lock size={20} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">System Access</h1>
                    <p className="text-sm text-slate-400 mt-1">Authorized personnel only.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Admin Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                            placeholder="admin@nestnwings.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Secure Passphase</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 font-mono"
                            placeholder="••••••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full !mt-8 bg-white hover:bg-slate-200 text-[#020617] font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                    >
                        {isLoading ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            <>
                                Authenticate <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

            </div>
        </div>
    );
}
