"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutPillars } from "@/data/about";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPillars() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".pillar-heading",
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            const cards = gsap.utils.toArray(".pillar-card");

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        y: 80,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            once: true,
                        },
                    }
                );
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
        overflow-hidden
        bg-[#090909]
        px-5
        py-28
        text-white
        md:px-10
        md:py-40
      "
        >
            <div className="mx-auto max-w-[1500px]">
                {/* HEADER */}

                <div className="pillar-heading mb-20 flex flex-col justify-between gap-8 opacity-0 md:flex-row md:items-end">
                    <div>
                        <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                            03 / WHAT WE DO
                        </span>

                        <h2 className="mt-7 text-[clamp(3.5rem,9vw,9rem)] font-bold leading-[0.78] tracking-[-0.075em]">
                            THREE
                            <br />
                            <span className="text-[#e02020]">
                                DIRECTIONS.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                        Different disciplines. One connected digital
                        experience.
                    </p>
                </div>

                {/* PILLARS */}

                <div className="border-t border-white/10">
                    {aboutPillars.map((pillar) => (
                        <article
                            key={pillar.number}
                            className="
                pillar-card
                group
                grid
                gap-8
                border-b
                border-white/10
                py-12
                opacity-0

                md:grid-cols-[120px_1fr_1fr]
                md:items-center
                md:gap-12
                md:py-16
              "
                        >
                            {/* NUMBER */}

                            <span className="font-mono text-sm text-[#e02020]">
                                {pillar.number}
                            </span>

                            {/* TITLE */}

                            <h3
                                className="
                  text-[clamp(3rem,6vw,7rem)]
                  font-bold
                  leading-[0.8]
                  tracking-[-0.07em]
                  transition-transform
                  duration-700
                  group-hover:translate-x-3
                "
                            >
                                {pillar.title}
                                <span className="text-[#e02020]">
                                    .
                                </span>
                            </h3>

                            {/* DESCRIPTION */}

                            <p className="max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                                {pillar.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}