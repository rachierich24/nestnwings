"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Product", href: "/product" },
        { label: "Features", href: "/features" },
        { label: "Blog", href: "/blog" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
            style={{ padding: scrolled ? '8px 16px 0' : '0' }}
        >
            <div
                className={cn(
                    "mx-auto transition-all duration-500 ease-in-out",
                    scrolled
                        ? "max-w-5xl bg-white/75 backdrop-blur-2xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-black/[0.06] rounded-2xl"
                        : "max-w-7xl bg-white border-b border-transparent"
                )}
            >
                <div className={cn(
                    "flex items-center justify-between transition-all duration-500 px-5 md:px-6",
                    scrolled ? "h-14" : "h-[72px]"
                )}>

                    {/* Logo + Brand Name */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
                        <Logo className={cn(
                            "w-auto transition-all duration-500",
                            scrolled ? "h-6" : "h-8"
                        )} />
                        <span className={cn(
                            "font-bold tracking-[-0.01em] leading-none transition-all duration-500",
                            scrolled ? "text-[15px]" : "text-[17px]"
                        )}>
                            <span className="text-[#0f172a]">Nest </span>
                            <span className="text-[#14B8A6] italic">n</span>
                            <span className="text-[#0f172a]"> Wings</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 ml-12">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-200",
                                    pathname === item.href
                                        ? "text-[#0f172a] bg-slate-100"
                                        : "text-slate-500 hover:text-[#0f172a] hover:bg-slate-50"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side — Login + CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/book-demo"
                            className={cn(
                                "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-sm hover:shadow-md active:scale-[0.97]",
                                scrolled ? "text-[13px] h-9 px-5" : "text-[14px] h-10 px-6"
                            )}
                        >
                            Book Demo
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className={cn(
                    "border-t border-slate-100 shadow-lg mt-1",
                    scrolled
                        ? "bg-white/90 backdrop-blur-2xl mx-4 rounded-2xl border border-black/[0.06]"
                        : "bg-white"
                )}>
                    <div className="px-5 py-4 flex flex-col gap-1">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "text-[15px] font-medium px-4 py-3 rounded-xl transition-all duration-200",
                                    pathname === item.href
                                        ? "bg-slate-100 text-[#0f172a] font-semibold"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-[#0f172a]"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="h-px w-full bg-slate-100 my-2" />
                        <Link
                            href="/book-demo"
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full text-[14px] font-semibold transition-all bg-[#0f172a] text-white h-12 px-4 py-2 mt-1 active:scale-[0.97]"
                        >
                            Book Demo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
