"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isDarkPage = pathname === "/book-demo" || pathname === "/admin/login";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
            <header
                className={cn(
                    "pointer-events-auto transition-all duration-500 rounded-full border",
                    scrolled
                        ? "bg-white/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] border-white/20 py-3 px-6 text-slate-900 w-full max-w-5xl"
                        : "bg-white/5 backdrop-blur-sm border-transparent py-4 px-6 w-full max-w-7xl",
                    !scrolled && isDarkPage ? "text-white" : "text-slate-900"
                )}
            >
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className="flex items-center gap-2 z-10">
                        <img
                            src="/nest-n-wings-logo.png"
                            alt="Nest n Wings Logo"
                            className={cn(
                                "w-auto object-contain transition-all duration-300",
                                scrolled ? "h-12" : "h-16"
                            )}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {["Product", "Features", "Blog"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={cn(
                                    "relative text-sm font-semibold transition-colors group",
                                    scrolled
                                        ? "text-slate-600 hover:text-primary font-bold"
                                        : isDarkPage ? "text-white/80 hover:text-white" : "text-slate-700/80 hover:text-primary"
                                )}
                            >
                                {item}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                    scrolled ? "bg-primary" : "bg-primary"
                                )} />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4 z-10">
                        <Link
                            href="/book-demo"
                            className="relative group overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all bg-primary text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] h-10 px-6 py-2"
                        >
                            <span className="relative z-10">Book Demo</span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "md:hidden flex items-center justify-center p-2 z-10 transition-colors",
                            scrolled ? "text-slate-800" : (isDarkPage ? "text-white" : "text-slate-800")
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 bg-[#0B1120]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl flex flex-col p-6 gap-4 text-white pointer-events-auto">
                    <Link href="/product" className="text-sm font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Product</Link>
                    <Link href="/features" className="text-sm font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                    <Link href="/blog" className="text-sm font-medium p-2" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <div className="h-px w-full bg-white/10 my-2" />
                    <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)} className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all bg-primary text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] h-11 px-4 py-2 mt-2">
                        Book Demo
                    </Link>
                </div>
            )}
        </div>
    );
}
