"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
                {/* LOGO */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="group flex flex-col leading-none"
                    aria-label="Meetscripts Technologies home"
                >
                    <span className="text-[25px] font-black tracking-[-0.07em] text-[#111111] transition-colors group-hover:text-[#df2929] sm:text-[28px]">
                        MEETSCRIPTS<span className="text-[#df2929]">.</span>
                    </span>

                    <span className="mt-1 text-[9px] font-semibold tracking-[0.32em] text-neutral-500">
                        TECHNOLOGIES
                    </span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden items-center gap-9 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative py-2 text-[13px] font-semibold text-neutral-600 transition-colors hover:text-[#df2929]"
                        >
                            {item.label}

                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#df2929] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* DESKTOP CTA */}
                <Link
                    href="/contact"
                    className="hidden items-center gap-5 bg-[#df2929] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#111111] lg:inline-flex"
                >
                    LET&apos;S TALK
                    <ArrowUpRight size={16} />
                </Link>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex h-11 w-11 items-center justify-center border border-neutral-200 text-[#111111] transition-colors hover:border-[#df2929] hover:text-[#df2929] lg:hidden"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>

            {/* MOBILE NAVIGATION */}
            <div
                id="mobile-navigation"
                className={`absolute left-0 right-0 top-full overflow-hidden border-b border-neutral-200 bg-white transition-all duration-300 lg:hidden ${menuOpen
                        ? "max-h-[500px] opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                    }`}
                aria-hidden={!menuOpen}
            >
                <nav className="px-5 pb-6 pt-3 sm:px-8">
                    {navigation.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            tabIndex={menuOpen ? 0 : -1}
                            className="flex items-center justify-between border-b border-neutral-100 py-5 text-xl font-semibold tracking-[-0.03em] text-[#111111] transition-colors hover:text-[#df2929]"
                        >
                            <span>{item.label}</span>
                            <span className="text-lg font-normal text-[#df2929]">
                                ↗
                            </span>
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        tabIndex={menuOpen ? 0 : -1}
                        className="mt-6 flex items-center justify-between bg-[#df2929] px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#111111]"
                    >
                        LET&apos;S TALK ABOUT YOUR PROJECT
                        <ArrowUpRight size={18} />
                    </Link>

                    <div className="mt-7 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                        <span>CREATIVITY WITH PURPOSE</span>
                    </div>
                </nav>
            </div>
        </header>
    );
}