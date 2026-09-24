"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkHero() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".work-hero-line", {
                y: 100,
                opacity: 0,
                duration: 1.1,
                stagger: 0.1,
                ease: "power4.out",
            });

            gsap.to(".work-hero-number", {
                y: 80,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-[#090909]
                text-white
                pt-32
                md:pt-40
            "
        >
            <div
                className="
                    mx-auto
                    min-h-[68svh]
                    max-w-[1500px]
                    px-5
                    pb-20
                    md:min-h-[72vh]
                    md:px-[6vw]
                    md:pb-[7vw]
                "
            >
                {/* TOP META */}
                <div className="flex items-center justify-between">
                    <p className="work-hero-line technical text-[9px] tracking-[0.18em] text-[#e02020]">
                        SELECTED WORK
                    </p>

                    <span className="work-hero-number technical text-[9px] tracking-[0.15em] text-white/35">
                        02 — WORK
                    </span>
                </div>

                {/* TITLE */}
                <div className="mt-16 overflow-hidden md:mt-[7vw]">
                    <h1
                        className="
                            text-[19vw]
                            font-medium
                            leading-[0.78]
                            tracking-[-0.075em]
                            md:text-[10.5vw]
                        "
                    >
                        <span className="work-hero-line block">
                            WORK
                        </span>

                        <span className="work-hero-line block text-[#e02020]">
                            THAT
                        </span>

                        <span className="work-hero-line block">
                            MOVES.
                        </span>
                    </h1>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-12 md:ml-[28vw] md:mt-[4vw]">
                    <p
                        className="
                            max-w-lg
                            text-sm
                            leading-7
                            text-white/50
                            md:text-base
                        "
                    >
                        Digital experiences, brands and systems
                        built to make businesses impossible to
                        ignore.
                    </p>
                </div>
            </div>
        </section>
    );
}