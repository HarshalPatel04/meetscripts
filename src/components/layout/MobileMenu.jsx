"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, X } from "lucide-react";

const menuItems = [
    { number: "01", label: "WORK", href: "/work" },
    { number: "02", label: "SERVICES", href: "/services" },
    { number: "03", label: "ABOUT", href: "/about" },
    { number: "04", label: "PROCESS", href: "/process" },
    { number: "05", label: "CONTACT", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
    const menuRef = useRef(null);
    const itemsRef = useRef([]);
    const footerRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        if (!menuRef.current) return;

        if (isOpen) {
            document.body.style.overflow = "hidden";

            gsap.set(menuRef.current, {
                display: "flex",
            });

            const tl = gsap.timeline();

            tl.fromTo(
                menuRef.current,
                {
                    clipPath: "inset(0 0 100% 0)",
                },
                {
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.8,
                    ease: "power4.inOut",
                }
            );

            tl.fromTo(
                itemsRef.current,
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: "power4.out",
                },
                "-=0.35"
            );

            tl.fromTo(
                lineRef.current,
                {
                    scaleX: 0,
                },
                {
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power3.inOut",
                },
                "-=0.45"
            );

            tl.fromTo(
                footerRef.current,
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out",
                },
                "-=0.4"
            );
        } else {
            document.body.style.overflow = "";

            gsap.to(menuRef.current, {
                clipPath: "inset(0 0 100% 0)",
                duration: 0.6,
                ease: "power4.inOut",
                onComplete: () => {
                    gsap.set(menuRef.current, {
                        display: "none",
                    });
                },
            });
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div
            ref={menuRef}
            className="fixed inset-0 z-[90] hidden flex-col bg-[#090909] text-white"
            style={{
                clipPath: "inset(0 0 100% 0)",
            }}
        >
            {/* Top bar */}
            <div className="flex h-[84px] items-center justify-between border-b border-white/10 px-4 md:px-10">
                <Link
                    href="/"
                    onClick={onClose}
                    className="text-sm font-bold tracking-[0.15em]"
                >
                    MEETSCRIPTS
                    <span className="ml-1 text-[#e02020]">®</span>
                </Link>

                <button
                    onClick={onClose}
                    aria-label="Close menu"
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#e02020] hover:bg-[#e02020]"
                >
                    <X
                        size={21}
                        strokeWidth={1.5}
                        className="transition-transform duration-500 group-hover:rotate-90"
                    />
                </button>
            </div>

            {/* Navigation */}
            <div className="flex flex-1 flex-col justify-center px-4 md:px-10">
                <div className="mb-8">
                    <span className="technical text-white/40">
                        NAVIGATION / 00
                    </span>
                </div>

                <nav>
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose}
                            ref={(element) => {
                                itemsRef.current[index] = element;
                            }}
                            className="group flex items-center border-t border-white/10 py-4 md:py-5"
                        >
                            <span className="technical mr-5 w-8 text-white/30 transition-colors group-hover:text-[#e02020]">
                                {item.number}
                            </span>

                            <span className="text-[clamp(2.8rem,9vw,7rem)] font-bold leading-[0.85] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-3">
                                {item.label}
                            </span>

                            <ArrowUpRight
                                className="ml-auto opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                size={30}
                                strokeWidth={1.5}
                            />
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Bottom */}
            <div
                ref={footerRef}
                className="px-4 pb-6 opacity-0 md:px-10 md:pb-8"
            >
                <div
                    ref={lineRef}
                    className="mb-5 h-px origin-left scale-x-0 bg-[#e02020]"
                />

                <div className="flex flex-col justify-between gap-5 text-xs md:flex-row md:items-end">
                    <div>
                        <p className="technical mb-2 text-white/40">CONTACT</p>

                        <a
                            href="mailto:hello@meetscripts.com"
                            className="transition-colors hover:text-[#e02020]"
                        >
                            hello@meetscripts.com
                        </a>
                    </div>

                    <div>
                        <p className="technical mb-2 text-white/40">SOCIAL</p>

                        <div className="flex gap-5">
                            <a
                                href="#"
                                className="transition-colors hover:text-[#e02020]"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-[#e02020]"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-[#e02020]"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        onClick={onClose}
                        data-cursor="cta"
                        className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider transition-colors hover:text-[#e02020]"
                    >
                        Start a project
                        <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>
        </div>
    );
}