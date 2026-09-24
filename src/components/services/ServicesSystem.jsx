"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSystem() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".system-word",
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
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".system-line",
                {
                    scaleX: 0,
                },
                {
                    scaleX: 1,
                    duration: 1.2,
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
        bg-[#090909]
        px-5
        py-32
        text-white
        md:px-10
        md:py-48
      "
        >
            <div className="mx-auto max-w-[1450px]">
                <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                    03 / THE SYSTEM
                </span>

                <div className="mt-12 overflow-hidden">
                    <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-bold leading-[0.78] tracking-[-0.075em]">
                        <span className="system-word inline-block">
                            ONE
                        </span>{" "}
                        <span className="system-word inline-block text-[#e02020]">
                            TEAM.
                        </span>
                        <br />

                        <span className="system-word inline-block">
                            MANY
                        </span>{" "}
                        <span className="system-word inline-block">
                            DISCIPLINES.
                        </span>
                    </h2>
                </div>

                <div className="system-line mt-16 h-px origin-left bg-white/15" />

                <div className="mt-10 grid gap-10 md:grid-cols-3">
                    <div>
                        <span className="font-mono text-xs text-[#e02020]">
                            01
                        </span>

                        <h3 className="mt-4 text-xl font-semibold">
                            STRATEGY
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-white/40">
                            We start with the business problem and
                            identify what the digital experience needs to
                            achieve.
                        </p>
                    </div>

                    <div>
                        <span className="font-mono text-xs text-[#e02020]">
                            02
                        </span>

                        <h3 className="mt-4 text-xl font-semibold">
                            CREATIVE
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-white/40">
                            Design, content and motion come together to
                            create a clear and memorable identity.
                        </p>
                    </div>

                    <div>
                        <span className="font-mono text-xs text-[#e02020]">
                            03
                        </span>

                        <h3 className="mt-4 text-xl font-semibold">
                            EXECUTION
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-white/40">
                            Technology and growth systems turn the
                            creative direction into something measurable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}