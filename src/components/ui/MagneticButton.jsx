"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MagneticButton({
    href = "/contact",
    children = "START A PROJECT",
    className = "",
}) {
    const buttonRef = useRef(null);
    const innerRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!buttonRef.current || !innerRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();

        const x =
            event.clientX -
            (rect.left + rect.width / 2);

        const y =
            event.clientY -
            (rect.top + rect.height / 2);

        gsap.to(buttonRef.current, {
            x: x * 0.18,
            y: y * 0.18,
            duration: 0.4,
            ease: "power3.out",
        });

        gsap.to(innerRef.current, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.4,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current || !innerRef.current) return;

        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)",
        });

        gsap.to(innerRef.current, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)",
        });
    };

    return (
        <Link
            ref={buttonRef}
            href={href}
            data-cursor="cta"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-6 py-4 ${className}`}
        >
            <span
                ref={innerRef}
                className="relative z-10 flex items-center gap-3"
            >
                <span className="technical">
                    {children}
                </span>

                <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
            </span>

            <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#e02020] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-y-100" />
        </Link>
    );
}