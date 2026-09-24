"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutApproach } from "@/data/about";

gsap.registerPlugin(ScrollTrigger);

export default function AboutApproach() {
    const sectionRef = useRef(null);
    const progressRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const steps = gsap.utils.toArray(".approach-step");

            steps.forEach((step) => {
                const number = step.querySelector(".approach-number");
                const title = step.querySelector(".approach-title");

                gsap.fromTo(
                    number,
                    {
                        opacity: 0.15,
                        scale: 0.8,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 75%",
                            end: "top 35%",
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
                            start: "top 75%",
                            end: "top 45%",
                            scrub: true,
                        },
                    }
                );
            });

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
                        start: "top 70%",
                        end: "bottom 80%",
                        scrub: true,
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
        relative
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
                {/* HEADER */}

                <div className="mb-20 md:mb-28">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        04 / OUR APPROACH
                    </span>

                    <h2
                        className="
              mt-7
              max-w-5xl
              text-[clamp(3.5rem,9vw,9rem)]
              font-bold
              leading-[0.78]
              tracking-[-0.075em]
            "
                    >
                        THINK.
                        <br />
                        MAKE.
                        <br />
                        <span className="text-[#e02020]">
                            MOVE.
                        </span>
                    </h2>
                </div>

                {/* TIMELINE */}

                <div className="relative">
                    {/* DESKTOP LINE */}

                    <div
                        className="
              absolute
              bottom-0
              left-[35px]
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

                    {aboutApproach.map((step) => (
                        <article
                            key={step.number}
                            className="
                approach-step
                relative
                grid
                grid-cols-[55px_1fr]
                gap-6
                border-t
                border-black/10
                py-12

                md:grid-cols-[120px_1fr]
                md:gap-16
                md:py-20
                md:pl-20
              "
                        >
                            <span
                                className="
                  approach-number
                  font-mono
                  text-sm
                  text-[#e02020]
                  md:text-base
                "
                            >
                                {step.number}
                            </span>

                            <h3
                                className="
                  approach-title
                  text-[clamp(2.8rem,7vw,7rem)]
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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}