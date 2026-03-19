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
            setScrolled(window.scrollY > 10);
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
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-black/[0.04]"
                    : "bg-white border-b border-transparent"
            )}
        >
            <div className="container mx-auto px-5 md:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-[72px]">

                    {/* Logo + Brand Name */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
                        <Logo className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
                        <span className="text-[17px] font-bold tracking-[-0.01em] leading-none">
                            <span className="text-[#0f172a]">Nest </span>
                            <span className="text-[#14B8A6] italic">n</span>
                            <span className="text-[#0f172a]"> Wings</span>
                        </span>
                    </Link>

                    {/* Desktop Nav — left-aligned next to logo like Cryptique */}
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
                            className="text-[15px] font-medium text-slate-500 hover:text-[#0f172a] transition-colors duration-200 px-4 py-2"
                        >
                            Login
                        </Link>
                        <Link
                            href="/book-demo"
                            className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[14px] font-semibold transition-all duration-300 bg-[#0f172a] text-white hover:bg-[#1e293b] h-10 px-6 shadow-sm hover:shadow-md active:scale-[0.97]"
                        >
                            Get Started
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
                <div className="bg-white border-t border-slate-100 shadow-lg">
                    <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
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
                            className="text-[15px] font-medium text-slate-500 hover:text-[#0f172a] px-4 py-3 rounded-xl transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/book-demo"
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full text-[14px] font-semibold transition-all bg-[#0f172a] text-white h-12 px-4 py-2 mt-1 active:scale-[0.97]"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
