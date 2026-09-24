"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceOverview({ service }) {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".overview-copy",
                {
                    y: 80,
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

            gsap.fromTo(
                ".capability-item",
                {
                    x: 60,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: "power3.out",
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
            className="bg-[#f3f3f0] px-5 py-28 text-[#090909] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="grid gap-16 md:grid-cols-[1fr_0.8fr] md:gap-24">
                    <div className="overview-copy">
                        <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                            02 / OVERVIEW
                        </span>

                        <h2 className="mt-8 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                            {service.intro}
                        </h2>
                    </div>

                    <div>
                        <span className="technical text-[10px] tracking-[0.22em] text-black/30">
                            CAPABILITIES
                        </span>

                        <div className="mt-8 border-t border-black/15">
                            {service.capabilities.map(
                                (capability, index) => (
                                    <div
                                        key={capability}
                                        className="
                      capability-item
                      flex
                      items-center
                      justify-between
                      border-b
                      border-black/15
                      py-5
                    "
                                    >
                                        <span className="font-mono text-xs text-[#e02020]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm font-medium">
                                            {capability}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}