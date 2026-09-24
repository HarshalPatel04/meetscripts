"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".story-label",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".story-line",
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.12,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".story-accent",
                {
                    scaleX: 0,
                },
                {
                    scaleX: 1,
                    duration: 1,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        once: true,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
        overflow-hidden
        bg-[#f3f3f0]
        px-5
        py-28
        text-[#090909]
        md:px-10
        md:py-40
      "
        >
            <div className="mx-auto max-w-[1500px]">
                {/* LABEL */}

                <div className="story-label mb-16 flex items-center justify-between opacity-0">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        02 / WHO WE ARE
                    </span>

                    <span className="technical hidden text-[10px] tracking-[0.18em] text-black/30 md:block">
                        CREATIVE TECHNOLOGY / DIGITAL GROWTH
                    </span>
                </div>

                {/* STATEMENT */}

                <div className="max-w-[1250px]">
                    <p className="story-line overflow-hidden text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                        WE BELIEVE DIGITAL
                    </p>

                    <p className="story-line overflow-hidden text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                        SHOULD FEEL{" "}
                        <span className="text-[#e02020]">
                            HUMAN.
                        </span>
                    </p>

                    <p className="story-line mt-8 max-w-3xl text-base leading-relaxed text-black/50 md:mt-12 md:text-xl">
                        MEETSCRIPTS TECHNOLOGIES brings together
                        development, design, marketing and creative
                        technology to help businesses build a stronger
                        digital presence.
                    </p>
                </div>

                {/* DIVIDER */}

                <div className="story-accent mt-20 h-px w-full origin-left bg-black/15" />

                {/* DETAILS */}

                <div className="mt-10 grid gap-10 md:grid-cols-3">
                    <div>
                        <span className="technical text-[9px] tracking-[0.2em] text-black/30">
                            WHAT WE DO
                        </span>

                        <p className="mt-4 text-sm leading-relaxed text-black/55">
                            We create websites, digital campaigns,
                            identities, social content and technology
                            systems designed around real business goals.
                        </p>
                    </div>

                    <div>
                        <span className="technical text-[9px] tracking-[0.2em] text-black/30">
                            HOW WE THINK
                        </span>

                        <p className="mt-4 text-sm leading-relaxed text-black/55">
                            Strategy comes first. Every visual,
                            interaction and line of code should have a
                            reason to exist.
                        </p>
                    </div>

                    <div>
                        <span className="technical text-[9px] tracking-[0.2em] text-black/30">
                            WHAT MATTERS
                        </span>

                        <p className="mt-4 text-sm leading-relaxed text-black/55">
                            Clarity, creativity, performance and
                            experiences that people actually remember.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}