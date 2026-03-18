import Link from "next/link";
import { Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    return (
        <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Cinematic Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-blue-600/5 to-transparent blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl flex flex-col items-center text-center">

                {/* Brand Logo & Core Message */}
                <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105 active:scale-95">
                    <Logo className="h-10 md:h-12 w-auto brightness-0 invert opacity-90" />
                </Link>

                <h2 className="text-xl md:text-3xl font-black text-white mb-8 tracking-tight max-w-2xl leading-snug">
                    We are working to build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">operating system</span> for modern hostels and co-living spaces.
                </h2>

                <p className="text-slate-400 text-base md:text-lg mb-12 max-w-xl leading-relaxed">
                    Automate the chaos, maximize your revenue, and focus on building a community your residents love coming home to.
                </p>

                {/* Socials & Contact */}
                <div className="flex items-center gap-4 mb-20">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl"><Twitter size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl"><Linkedin size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xl"><Github size={20} /></a>
                </div>

                {/* Bottom Bar: Ultra Minimal */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-slate-500 font-medium">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Nest n Wings Inc.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold text-[10px] tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]" />
                            System Live
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
