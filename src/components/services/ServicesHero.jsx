"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function ServicesHero() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".services-hero-word",
                {
                    y: 120,
                    opacity: 0,
                    rotateX: 60,
                },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.1,
                    stagger: 0.1,
                    ease: "power4.out",
                }
            );

            gsap.fromTo(
                ".services-hero-meta",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
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
        flex
        min-h-screen
        items-center
        md:items-end
        overflow-hidden
        bg-[#090909]
        px-5
        pb-16
        pt-32
        text-white
        md:px-10
        md:pb-20
      "
        >
            {/* Decorative circle */}

            <div
                className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[20%]
          hidden
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-[#e02020]/20
          md:block
        "
            />

            <div
                className="
          pointer-events-none
          absolute
          right-[18%]
          top-[35%]
          hidden
          h-2
          w-2
          bg-[#e02020]
          md:block
        "
            />

            <div className="relative z-10 w-full">
                <div className="services-hero-meta mb-8 flex items-center justify-between opacity-0">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        01 / SERVICES
                    </span>

                    <span className="technical hidden text-[10px] tracking-[0.2em] text-white/30 md:block">
                        DIGITAL / CREATIVE / GROWTH
                    </span>
                </div>

                <h1
                    className="
            max-w-[1500px]
            text-[clamp(4rem,12vw,12rem)]
            font-bold
            leading-[0.73]
            tracking-[-0.085em]
          "
                >
                    <span className="services-hero-word inline-block">
                        WHAT
                    </span>
                    <br />

                    <span className="services-hero-word inline-block">
                        WE
                    </span>{" "}
                    <span className="services-hero-word inline-block text-[#e02020]">
                        DO.
                    </span>
                </h1>

                <div className="services-hero-meta mt-12 flex items-end justify-between opacity-0">
                    <p className="max-w-xl text-sm leading-relaxed text-white/40 md:text-base">
                        Strategy, design, technology and growth —
                        connected into one digital system.
                    </p>

                    <ArrowDown
                        size={24}
                        strokeWidth={1}
                        className="hidden text-[#e02020] md:block"
                    />
                </div>
            </div>
        </section>
    );
}