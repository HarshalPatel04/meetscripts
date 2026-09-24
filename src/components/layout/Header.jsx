"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

import MobileMenu from "./MobileMenu";

const navItems = [
    {
        label: "SERVICES",
        href: "/services",
    },
    {
        label: "WORK",
        href: "/work",
    },
    {
        label: "PROCESS",
        href: "/process",
    },
    {
        label: "ABOUT",
        href: "/about",
    },
    {
        label: "CONTACT",
        href: "/contact",
    },
];

export default function Header() {
    const pathname = usePathname();

    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const navRef = useRef(null);
    const ctaRef = useRef(null);

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                {
                    y: -30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.25,
                    ease: "power4.out",
                }
            );

            gsap.fromTo(
                [logoRef.current, navRef.current, ctaRef.current],
                {
                    y: -15,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.08,
                    delay: 0.4,
                    ease: "power3.out",
                }
            );
        }, headerRef);

        return () => ctx.revert();
    }, []);

    const isActive = (href) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed left-0 top-0 z-[80] w-full transition-all duration-500 ${scrolled ? "pt-3" : "pt-0"
                    }`}
            >
                <div
                    className={`mx-auto flex h-[76px] items-center justify-between px-4 transition-all duration-500 md:h-[82px] md:px-8 ${scrolled
                        ? "w-[calc(100%-24px)] rounded-full border border-white/10 bg-[#111111]/85 shadow-2xl shadow-black/20 backdrop-blur-xl md:w-[calc(100%-48px)]"
                        : "w-full"
                        }`}
                >
                    {/* Logo */}
                    <Link
                        ref={logoRef}
                        href="/"
                        className="group flex items-center"
                        aria-label="MEETSCRIPTS Technologies"
                    >
                        <img
                            src="/images/logo/meetscripts-logo.png"
                            alt="MEETSCRIPTS Technologies"
                            className="h-auto w-[45px] object-contain brightness-0 invert md:w-[50px]"
                        />
                    </Link>

                    {/* Desktop navigation */}
                    <nav
                        ref={navRef}
                        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex xl:gap-9"
                    >
                        {navItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    data-cursor="link"
                                    className="group relative py-3"
                                >
                                    <span
                                        className={`technical transition-colors duration-300 ${active
                                            ? "text-white"
                                            : "text-white/50 group-hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </span>

                                    <span
                                        className={`absolute bottom-0 left-0 h-px origin-left bg-[#e02020] transition-transform duration-500 ${active
                                            ? "w-full scale-x-100"
                                            : "w-full scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <Link
                        ref={ctaRef}
                        href="/contact"
                        data-cursor="cta"
                        className="group hidden items-center gap-3 rounded-full border border-white/20 px-5 py-3 transition-all duration-500 hover:border-[#e02020] hover:bg-[#e02020] hover:innerte lg:flex"
                    >
                        <span className="technical text-white">
                            START A <span className="text-[#e02020] hover:text-white">PROJECT</span>
                        </span>

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-[#e02020] hover:bg-[#e02020] lg:hidden"
                    >
                        <Menu
                            size={20}
                            strokeWidth={1.5}
                            className="transition-transform duration-500 group-hover:scale-90"
                        />
                    </button>
                </div>
            </header>

            <MobileMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}