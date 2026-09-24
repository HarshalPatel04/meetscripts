"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight } from "lucide-react";

import { processSteps } from "@/data/process";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
    const sectionRef = useRef(null);
    const progressRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* =========================================
               DESKTOP
            ========================================= */

            mm.add("(min-width: 768px)", () => {
                const steps = gsap.utils.toArray(
                    ".process-step"
                );

                steps.forEach((step, index) => {
                    const number = step.querySelector(
                        ".process-number"
                    );

                    const title = step.querySelector(
                        ".process-title"
                    );

                    const content = step.querySelector(
                        ".process-content"
                    );

                    const line = step.querySelector(
                        ".process-line-fill"
                    );

                    gsap.fromTo(
                        number,
                        {
                            opacity: 0.12,
                            scale: 0.8,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            ease: "none",

                            scrollTrigger: {
                                trigger: step,
                                start: "top 65%",
                                end: "top 30%",
                                scrub: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        title,
                        {
                            x: 80,
                            opacity: 0.2,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            ease: "power3.out",

                            scrollTrigger: {
                                trigger: step,
                                start: "top 70%",
                                end: "top 40%",
                                scrub: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        content,
                        {
                            y: 40,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            ease: "power3.out",

                            scrollTrigger: {
                                trigger: step,
                                start: "top 65%",
                                end: "top 42%",
                                scrub: true,
                            },
                        }
                    );

                    if (line) {
                        gsap.fromTo(
                            line,
                            {
                                height: "0%",
                            },
                            {
                                height: "100%",
                                ease: "none",

                                scrollTrigger: {
                                    trigger: step,
                                    start: "top 70%",
                                    end: "bottom 65%",
                                    scrub: true,
                                },
                            }
                        );
                    }
                });

                /* Section heading */

                gsap.fromTo(
                    ".process-heading",
                    {
                        y: 100,
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

                /* Global progress */

                gsap.fromTo(
                    progressRef.current,
                    {
                        scaleY: 0,
                        transformOrigin: "top",
                    },
                    {
                        scaleY: 1,
                        ease: "none",

                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: true,
                        },
                    }
                );
            });

            /* =========================================
               MOBILE
            ========================================= */

            mm.add("(max-width: 767px)", () => {
                const steps = gsap.utils.toArray(
                    ".process-step"
                );

                steps.forEach((step) => {
                    gsap.fromTo(
                        step,
                        {
                            y: 60,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power3.out",

                            scrollTrigger: {
                                trigger: step,
                                start: "top 88%",
                                once: true,
                            },
                        }
                    );
                });
            });

            return () => mm.revert();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
        relative
        overflow-hidden
        bg-[#f3f3f0]
        text-[#090909]
      "
        >
            {/* =========================================
          HEADER
      ========================================= */}

            <div className="px-5 pb-20 pt-32 md:px-10 md:pb-32 md:pt-40">
                <div className="process-heading">
                    <div className="mb-6 flex items-center justify-between">
                        <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                            04 / PROCESS
                        </span>

                        <ArrowDownRight
                            size={24}
                            strokeWidth={1.5}
                            className="text-[#e02020]"
                        />
                    </div>

                    <h2
                        className="
              max-w-6xl
              text-[clamp(4rem,10vw,10rem)]
              font-bold
              leading-[0.78]
              tracking-[-0.075em]
            "
                    >
                        HOW WE
                        <br />
                        <span className="text-[#e02020]">
                            WORK.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-xl text-base leading-relaxed text-black/50 md:text-lg">
                        From the first idea to the final launch, we
                        combine strategy, design, technology and
                        motion to create digital experiences that
                        have a purpose.
                    </p>
                </div>
            </div>

            {/* =========================================
          PROCESS STEPS
      ========================================= */}

            <div className="relative px-5 pb-32 md:px-10">
                {/* Desktop global line */}

                <div
                    className="
            absolute
            bottom-0
            left-[10vw]
            top-0
            hidden
            w-px
            bg-black/10
            md:block
          "
                >
                    <div
                        ref={progressRef}
                        className="
              h-full
              w-full
              origin-top
              scale-y-0
              bg-[#e02020]
            "
                    />
                </div>

                <div className="mx-auto max-w-[1400px]">
                    {processSteps.map((step, index) => (
                        <article
                            key={step.number}
                            className="
    process-step
    relative
    min-h-[70vh]
    border-t
    border-black/10
    py-20
    pl-12

    md:grid
    md:min-h-[90vh]
    md:grid-cols-[180px_1fr]
    md:gap-16
    md:py-28
    md:pl-[12vw]
  "
                        >
                            {/* NUMBER */}

                            <div className="mb-12 md:mb-0">
                                <span
                                    className="
                    process-number
                    block
                    font-mono
                    text-5xl
                    font-medium
                    tracking-[-0.08em]
                    text-[#e02020]
                    md:text-7xl
                  "
                                >
                                    {step.number}
                                </span>
                            </div>

                            {/* CONTENT */}

                            <div>
                                <span
                                    className="
                    technical
                    text-[10px]
                    tracking-[0.2em]
                    text-black/40
                  "
                                >
                                    {step.eyebrow}
                                </span>

                                <h3
                                    className="
                    process-title
                    mt-5
                    text-[clamp(3.5rem,8vw,8rem)]
                    font-bold
                    leading-[0.8]
                    tracking-[-0.07em]
                  "
                                >
                                    {step.title}
                                    <span className="text-[#e02020]">
                                        .
                                    </span>
                                </h3>

                                <div className="process-content mt-10 max-w-xl">
                                    <p className="text-lg leading-relaxed text-black/55 md:text-xl">
                                        {step.description}
                                    </p>

                                    <div className="mt-10 flex flex-wrap gap-2">
                                        {step.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="
                          rounded-full
                          border
                          border-black/15
                          px-4
                          py-2
                          text-xs
                          tracking-wide
                          text-black/60
                        "
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE LINE */}

                            {index < processSteps.length - 0 && (
                                <div
                                    className="
    absolute
    bottom-0
    left-2
    top-[60px]
    w-px
    bg-black/10
    md:hidden
  "
                                >
                                    <div className="h-1/2 w-full bg-[#e02020]" />
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>

            {/* =========================================
          BOTTOM STATEMENT
      ========================================= */}

            <div className="border-t border-black/10 px-5 py-28 md:px-10 md:py-40">
                <p
                    className="
            mx-auto
            max-w-6xl
            text-center
            text-[clamp(2.5rem,6vw,6rem)]
            font-semibold
            leading-[1.1]
            tracking-[-0.026em]
          "
                >
                    IDEAS ARE EASY.
                    <br />
                    <span className="text-[#e02020]">
                        EXECUTION IS EVERYTHING.
                    </span>
                </p>
            </div>
        </section>
    );
}