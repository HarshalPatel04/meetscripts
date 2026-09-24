"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                headingRef.current,
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
                    06 / WHAT'S NEXT
                </span>

                <div className="mt-10 overflow-hidden">
                    <h2
                        ref={headingRef}
                        className="
              max-w-6xl
              text-[clamp(4rem,10vw,10rem)]
              font-bold
              leading-[0.76]
              tracking-[-0.08em]
            "
                    >
                        HAVE AN
                        <br />
                        <span className="text-[#e02020]">
                            IDEA?
                        </span>
                    </h2>
                </div>

                <div className="mt-12 flex flex-col gap-10 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-lg text-sm leading-relaxed text-white/40 md:text-base">
                        Tell us what you're building, what you're
                        trying to solve, or simply where you want to
                        go next.
                    </p>

                    <MagneticButton
                        href="/contact"
                        dataCursor="cta"
                        className="
              group
              inline-flex
              w-fit
              items-center
              gap-4
              border
              border-white/20
              px-6
              py-4
              text-xs
              tracking-[0.15em]
              transition-all
              duration-500
              hover:border-[#e02020]
              hover:bg-[#e02020]
            "
                    >
                        START A CONVERSATION

                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.5}
                            className="
                transition-transform
                duration-500
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
                        />
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}