"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceProcess({ service }) {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const steps = gsap.utils.toArray(
                ".service-process-step"
            );

            steps.forEach((step) => {
                gsap.fromTo(
                    step,
                    {
                        y: 70,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: step,
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
            className="bg-[#f3f3f0] px-5 py-28 text-[#090909] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="mb-16">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        04 / PROCESS
                    </span>

                    <h2 className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.78] tracking-[-0.075em]">
                        HOW WE
                        <br />
                        <span className="text-[#e02020]">
                            BUILD.
                        </span>
                    </h2>
                </div>

                <div className="border-t border-black/15">
                    {service.process.map((step, index) => (
                        <div
                            key={step}
                            className="
                service-process-step
                grid
                grid-cols-[55px_1fr]
                gap-5
                border-b
                border-black/15
                py-8

                md:grid-cols-[100px_1fr_120px]
                md:items-center
                md:gap-10
                md:py-10
              "
                        >
                            <span className="font-mono text-xs text-[#e02020]">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
                                {step}
                            </span>

                            <span className="hidden text-right font-mono text-[10px] text-black/30 md:block">
                                STEP {index + 1}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}