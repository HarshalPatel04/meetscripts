"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function AboutHero() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const words = gsap.utils.toArray(".about-word");

            gsap.fromTo(
                words,
                {
                    y: 120,
                    opacity: 0,
                    rotateX: 70,
                },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.1,
                    stagger: 0.12,
                    ease: "power4.out",
                }
            );

            gsap.fromTo(
                ".about-hero-meta",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.7,
                    ease: "power3.out",
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
        relative
        flex
        min-h-screen
        items-end
        overflow-hidden
        bg-[#090909]
        px-5
        pb-16
        pt-32
        text-white
        md:px-10
        md:pb-20
      "
        >
            <div className="absolute right-[8%] top-[25%] hidden h-48 w-48 rounded-full border border-[#e02020]/20 md:block" />

            <div className="absolute right-[12%] top-[30%] hidden h-2 w-2 bg-[#e02020] md:block" />

            <div className="relative z-10 w-full">
                <div className="about-hero-meta mb-8 flex items-center justify-between opacity-0">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        04 / ABOUT
                    </span>

                    <span className="technical hidden text-[10px] tracking-[0.2em] text-white/30 md:block">
                        MEETSCRIPTS TECHNOLOGIES
                    </span>
                </div>

                <h1
                    ref={titleRef}
                    className="
            max-w-[1500px]
            text-[clamp(4rem,12vw,12rem)]
            font-bold
            leading-[0.74]
            tracking-[-0.085em]
          "
                >
                    <span className="about-word inline-block">
                        WE BUILD
                    </span>
                    <br />

                    <span className="about-word inline-block text-[#e02020]">
                        DIGITAL
                    </span>
                    <br />

                    <span className="about-word inline-block">
                        MOMENTUM.
                    </span>
                </h1>

                <div className="about-hero-meta mt-12 flex items-center justify-between opacity-0">
                    <p className="max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                        Creative technology, digital experiences and
                        growth systems for ambitious businesses.
                    </p>

                    <ArrowDown
                        size={24}
                        strokeWidth={1}
                        className="hidden text-[#e02020] md:block"
                    />
                </div>
            </div>
        </section>
    );
}