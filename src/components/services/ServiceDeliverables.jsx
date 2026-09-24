"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDeliverables({
    service,
}) {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".deliverable-item",
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
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
            className="bg-[#090909] px-5 py-28 text-white md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                            03 / DELIVERABLES
                        </span>

                        <h2 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.78] tracking-[-0.075em]">
                            WHAT YOU
                            <br />
                            <span className="text-[#e02020]">
                                GET.
                            </span>
                        </h2>
                    </div>

                    <span className="hidden font-mono text-xs text-white/25 md:block">
                        {service.number} / 08
                    </span>
                </div>

                <div className="border-t border-white/10">
                    {service.deliverables.map(
                        (deliverable, index) => (
                            <div
                                key={deliverable}
                                className="
                  deliverable-item
                  group
                  flex
                  items-center
                  gap-6
                  border-b
                  border-white/10
                  py-7
                  transition-colors
                  duration-500
                  hover:bg-white/[0.025]
                  md:py-9
                "
                            >
                                <span className="font-mono text-xs text-[#e02020]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="flex-1 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
                                    {deliverable}
                                </span>

                                <ArrowUpRight
                                    size={20}
                                    strokeWidth={1.5}
                                    className="
                    text-white/20
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#e02020]
                  "
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}