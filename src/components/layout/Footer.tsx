import Link from "next/link";
import { Twitter, Linkedin, Github, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-[#020617] pt-32 pb-12 overflow-hidden border-t border-white/10">
            {/* Cinematic Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                {/* Top Section: Newsletter / Lead Gen */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-24 pb-16 border-b border-white/10 gap-10">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Ready to master your operations?</h2>
                        <p className="text-slate-400 text-lg">Join 400+ operators getting weekly insights on hostel management, revenue optimization, and community building.</p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0">
                        <div className="relative flex items-center w-full md:w-[400px] h-14 rounded-full bg-white/5 border border-white/10 p-1 pl-6 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="bg-transparent border-none text-white focus:outline-none w-full text-sm placeholder:text-slate-500"
                            />
                            <button className="h-full px-6 bg-primary hover:bg-blue-600 text-white font-bold text-sm rounded-full transition-colors flex items-center gap-2">
                                Subscribe <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <img src="/nest-n-wings-logo.png" alt="Nest n Wings Logo" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                            The operating system for modern hostels and co-living spaces. We automate the chaos so you can focus on building a community people love coming home to.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"><Github size={18} /></a>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Product</h3>
                        <ul className="space-y-4">
                            <li><Link href="/features" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Platform Features</Link></li>
                            <li><Link href="/product" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Command Center</Link></li>
                            <li><Link href="/pricing" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Pricing & Plans</Link></li>
                            <li><Link href="/security" className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex justify-between items-center group">Security <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span></Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Resources</h3>
                        <ul className="space-y-4">
                            <li><Link href="/blog" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">The Journal (Blog)</Link></li>
                            <li><Link href="/help" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Help Center</Link></li>
                            <li><Link href="/api" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">API Documentation</Link></li>
                            <li><Link href="/changelog" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Contact</Link></li>
                            <li><Link href="/legal" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Legal & Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-slate-500 font-medium">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Nest n Wings Inc. Built with execution in mind.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" title="All systems operational" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
