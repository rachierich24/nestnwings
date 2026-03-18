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

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                "bg-white border-b",
                scrolled
                    ? "border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-lg bg-white/95"
                    : "border-transparent bg-white"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Logo className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Nav — centered */}
                    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {[
                            { label: "Product", href: "/product" },
                            { label: "Features", href: "/features" },
                            { label: "Blog", href: "/blog" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-semibold transition-colors group",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-slate-600 hover:text-slate-900"
                                )}
                            >
                                {item.label}
                                <span
                                    className={cn(
                                        "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                                        pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                                    )}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
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
                        className="md:hidden flex items-center justify-center p-2 text-slate-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                        {[
                            { label: "Product", href: "/product" },
                            { label: "Features", href: "/features" },
                            { label: "Blog", href: "/blog" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium px-3 py-2.5 rounded-lg transition-colors",
                                    pathname === item.href
                                        ? "bg-primary/5 text-primary font-semibold"
                                        : "text-slate-600 hover:bg-slate-50"
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
                            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all bg-primary text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] h-11 px-4 py-2 mt-1"
                        >
                            Book Demo
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
