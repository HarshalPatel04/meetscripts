"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutManifesto() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const words = gsap.utils.toArray(
                ".manifesto-word"
            );

            gsap.fromTo(
                words,
                {
                    opacity: 0.12,
                },
                {
                    opacity: 1,
                    stagger: 0.08,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        end: "bottom 55%",
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
        bg-[#090909]
        px-5
        py-32
        text-white
        md:px-10
        md:py-48
      "
        >
            <div className="mx-auto max-w-[1450px]">
                <div className="mb-12 flex items-center justify-between">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        05 / MANIFESTO
                    </span>

                    <span className="technical hidden text-[10px] tracking-[0.2em] text-white/25 md:block">
                        CODE / DESIGN / GROWTH
                    </span>
                </div>

                <p
                    className="
            max-w-[1400px]
            text-[clamp(3rem,8.5vw,9rem)]
            font-bold
            leading-[0.84]
            tracking-[-0.075em]
          "
                >
                    <span className="manifesto-word">
                        CODE
                    </span>{" "}
                    <span className="manifesto-word text-[#e02020]">
                        IS
                    </span>{" "}
                    <span className="manifesto-word">
                        OUR
                    </span>{" "}
                    <span className="manifesto-word">
                        MEDIUM.
                    </span>
                    <br />
                    <span className="manifesto-word">
                        CREATIVITY
                    </span>{" "}
                    <span className="manifesto-word">
                        IS
                    </span>{" "}
                    <span className="manifesto-word">
                        OUR
                    </span>{" "}
                    <span className="manifesto-word text-[#e02020]">
                        DIFFERENCE.
                    </span>
                </p>

                <div className="mt-20 max-w-xl border-l border-[#e02020] pl-5 md:mt-28 md:pl-7">
                    <p className="text-sm leading-relaxed text-white/40 md:text-base">
                        Technology gives us the tools. Strategy gives
                        us direction. Creativity makes people care.
                    </p>
                </div>
            </div>
        </section>
    );
}