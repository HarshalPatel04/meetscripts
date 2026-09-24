"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const sectionRef = useRef(null);
    const statementRef = useRef(null);
    const lineRef = useRef(null);
    const wordsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            /*
             * --------------------------------
             * MAIN STATEMENT
             * --------------------------------
             */

            gsap.fromTo(
                statementRef.current,
                {
                    y: 120,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: statementRef.current,
                        start: "top 82%",
                        end: "top 45%",
                        scrub: 0.8,
                    },
                }
            );

            /*
             * --------------------------------
             * RED LINE
             * --------------------------------
             */

            gsap.fromTo(
                lineRef.current,
                {
                    scaleX: 0,
                },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 85%",
                        end: "top 55%",
                        scrub: 1,
                    },
                }
            );

            /*
             * --------------------------------
             * CAPABILITY WORDS
             * --------------------------------
             */

            wordsRef.current.forEach((word, index) => {
                if (!word) return;

                gsap.fromTo(
                    word,
                    {
                        x: index % 2 === 0 ? -100 : 100,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: word,
                            start: "top 88%",
                            end: "top 60%",
                            scrub: 0.8,
                        },
                    }
                );
            });

            /*
             * --------------------------------
             * BACKGROUND NUMBER
             * --------------------------------
             */

            gsap.to(".intro-background-number", {
                yPercent: -25,
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });

            /*
             * --------------------------------
             * RED DOT
             * --------------------------------
             */

            gsap.to(".intro-red-dot", {
                scale: 1.8,
                opacity: 0.35,
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#f3f3f0] text-[#090909]"
        >
            {/* --------------------------------
          BACKGROUND
      -------------------------------- */}

            <div
                className="intro-background-number pointer-events-none absolute right-[-5vw] top-[10%] select-none font-bold leading-none tracking-[-0.12em] text-black/[0.035]"
                style={{
                    fontSize: "clamp(15rem, 35vw, 40rem)",
                }}
            >
                02
            </div>

            {/* --------------------------------
          TOP
      -------------------------------- */}

            <div className="site-container relative z-10 pt-28 md:pt-40">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="intro-red-dot h-2 w-2 rounded-full bg-[#e02020]" />

                        <span className="technical text-black/45">
                            SECTION / 02
                        </span>
                    </div>

                    <span className="technical hidden text-black/35 md:block">
                        INTRODUCTION
                    </span>
                </div>

                {/* --------------------------------
            STATEMENT
        -------------------------------- */}

                <div className="mt-24 max-w-[1200px] md:mt-36">
                    <p className="mb-7 max-w-sm text-sm leading-relaxed text-black/45 md:mb-10 md:text-base">
                        Digital experiences built at the
                        intersection of technology,
                        creativity and business.
                    </p>

                    <div
                        ref={statementRef}
                        className="will-change-transform"
                    >
                        <h2 className="text-[clamp(3.4rem,8.7vw,9rem)] font-bold leading-[0.86] tracking-[-0.065em]">
                            WE DON'T JUST
                            <br />
                            BUILD
                            <br />
                            <span className="text-[#e02020]">
                                WEBSITES.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* --------------------------------
            DIVIDER
        -------------------------------- */}

                <div className="mt-24 md:mt-36">
                    <div
                        ref={lineRef}
                        className="h-px origin-left scale-x-0 bg-[#e02020]"
                    />
                </div>

                {/* --------------------------------
            SECOND STATEMENT
        -------------------------------- */}

                <div className="py-28 md:py-44">
                    <p className="technical mb-8 text-black/40">
                        WE BUILD
                    </p>

                    <h3 className="text-[clamp(3.5rem,9vw,9rem)] font-bold leading-[0.82] tracking-[-0.07em]">
                        DIGITAL
                        <br />
                        <span className="text-black/20">
                            EXPERIENCES.
                        </span>
                    </h3>
                </div>
            </div>

            {/* --------------------------------
          CAPABILITIES
      -------------------------------- */}

            <div className="relative z-10 border-t border-black/10">
                <div className="site-container">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        {/* Left */}
                        <div className="border-b border-black/10 py-10 md:col-span-3 md:border-b-0 md:border-r md:py-16">
                            <p className="technical text-black/40">
                                OUR CORE
                            </p>

                            <p className="mt-2 text-sm text-black/50">
                                CAPABILITIES
                            </p>
                        </div>

                        {/* Right */}
                        <div className="md:col-span-9">
                            {/* BUILD */}
                            <div
                                ref={(element) => {
                                    wordsRef.current[0] = element;
                                }}
                                className="group flex items-center justify-between border-b border-black/10 py-10 transition-colors duration-500 md:py-14"
                            >
                                <div className="flex items-baseline gap-5 md:gap-8">
                                    <span className="technical text-black/30">
                                        01
                                    </span>

                                    <h4 className="text-[clamp(3rem,7vw,7rem)] font-bold leading-none tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-3">
                                        BUILD
                                    </h4>
                                </div>

                                <span className="hidden max-w-[250px] text-sm leading-relaxed text-black/45 md:block">
                                    Websites, applications and
                                    digital products engineered
                                    for real businesses.
                                </span>

                                <span className="text-2xl font-light text-[#e02020] transition-transform duration-500 group-hover:rotate-45">
                                    +
                                </span>
                            </div>

                            {/* CREATE */}
                            <div
                                ref={(element) => {
                                    wordsRef.current[1] = element;
                                }}
                                className="group flex items-center justify-between border-b border-black/10 py-10 transition-colors duration-500 md:py-14"
                            >
                                <div className="flex items-baseline gap-5 md:gap-8">
                                    <span className="technical text-black/30">
                                        02
                                    </span>

                                    <h4 className="text-[clamp(3rem,7vw,7rem)] font-bold leading-none tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-3">
                                        CREATE
                                    </h4>
                                </div>

                                <span className="hidden max-w-[250px] text-sm leading-relaxed text-black/45 md:block">
                                    Graphics, social content,
                                    video, 3D, animation and
                                    visual storytelling.
                                </span>

                                <span className="text-2xl font-light text-[#e02020] transition-transform duration-500 group-hover:rotate-45">
                                    +
                                </span>
                            </div>

                            {/* GROW */}
                            <div
                                ref={(element) => {
                                    wordsRef.current[2] = element;
                                }}
                                className="group flex items-center justify-between py-10 md:py-14"
                            >
                                <div className="flex items-baseline gap-5 md:gap-8">
                                    <span className="technical text-black/30">
                                        03
                                    </span>

                                    <h4 className="text-[clamp(3rem,7vw,7rem)] font-bold leading-none tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-3">
                                        GROW
                                    </h4>
                                </div>

                                <span className="hidden max-w-[250px] text-sm leading-relaxed text-black/45 md:block">
                                    Digital marketing, Meta Ads,
                                    social media management and
                                    business development.
                                </span>

                                <span className="text-2xl font-light text-[#e02020] transition-transform duration-500 group-hover:rotate-45">
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------------
          BOTTOM MARQUEE
      -------------------------------- */}

            <div className="overflow-hidden border-t border-black/10 py-5">
                <div className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-8 whitespace-nowrap">
                    {[
                        "WEB",
                        "DESIGN",
                        "MARKETING",
                        "CONTENT",
                        "TECHNOLOGY",
                        "GROWTH",
                        "WEB",
                        "DESIGN",
                        "MARKETING",
                        "CONTENT",
                        "TECHNOLOGY",
                        "GROWTH",
                    ].map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="flex items-center gap-8"
                        >
                            <span className="text-sm font-bold tracking-[0.15em]">
                                {item}
                            </span>

                            <span className="h-1.5 w-1.5 rounded-full bg-[#e02020]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}