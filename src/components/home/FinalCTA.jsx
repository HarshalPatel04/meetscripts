"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const lineRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* =========================================
               DESKTOP
            ========================================= */

            mm.add("(min-width: 768px)", () => {
                gsap.fromTo(
                    headingRef.current,
                    {
                        y: 140,
                        opacity: 0,
                        skewY: 5,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        skewY: 0,
                        duration: 1.2,
                        ease: "power4.out",

                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                            once: true,
                        },
                    }
                );

                gsap.fromTo(
                    lineRef.current,
                    {
                        scaleX: 0,
                    },
                    {
                        scaleX: 1,
                        duration: 1.2,
                        ease: "power4.inOut",

                        scrollTrigger: {
                            trigger: section,
                            start: "top 65%",
                            once: true,
                        },
                    }
                );
            });

            /* =========================================
               MOBILE
            ========================================= */

            mm.add("(max-width: 767px)", () => {
                gsap.fromTo(
                    headingRef.current,
                    {
                        y: 60,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: section,
                            start: "top 82%",
                            once: true,
                        },
                    }
                );

                gsap.fromTo(
                    lineRef.current,
                    {
                        scaleX: 0,
                    },
                    {
                        scaleX: 1,
                        duration: 0.8,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: section,
                            start: "top 75%",
                            once: true,
                        },
                    }
                );
            });

            /* =========================================
               RED GLOW
            ========================================= */

            gsap.to(glowRef.current, {
                x: 120,
                y: -60,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
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
        min-h-screen
        overflow-hidden
        bg-[#090909]
        text-white
      "
        >
            {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

            <div
                ref={glowRef}
                className="
          pointer-events-none
          absolute
          right-[-15%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#e02020]/10
          blur-[140px]
        "
            />

            {/* =========================================
          TOP LABEL
      ========================================= */}

            <div className="relative z-10 px-5 pt-24 md:px-10 md:pt-32">
                <div className="flex items-center justify-between">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        05 / START SOMETHING
                    </span>

                    <span className="technical hidden text-[10px] tracking-[0.2em] text-white/30 md:block">
                        DIGITAL MOTION LAB
                    </span>
                </div>
            </div>

            {/* =========================================
          MAIN HEADING
      ========================================= */}

            <div className="relative z-10 px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40">
                <div className="overflow-hidden">
                    <h2
                        ref={headingRef}
                        className="
              max-w-[1400px]
              text-[clamp(4rem,11vw,11rem)]
              font-bold
              leading-[0.76]
              tracking-[-0.08em]
            "
                    >
                        LET'S MAKE
                        <br />
                        <span className="text-[#e02020]">
                            SOMETHING.
                        </span>
                    </h2>
                </div>

                <div
                    ref={lineRef}
                    className="
            mt-12
            h-px
            w-full
            origin-left
            bg-white/15
          "
                />

                <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
                    <p className="max-w-xl text-base leading-relaxed text-white/45 md:text-lg">
                        Have an idea, a business or a digital problem
                        that needs solving? Let's turn it into something
                        people remember.
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
              font-medium
              tracking-[0.15em]
              transition-all
              duration-500
              hover:border-[#e02020]
              hover:bg-[#e02020]
            "
                    >
                        START A PROJECT

                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.5}
                            className="
                transition-transform
                duration-500
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
                        />
                    </MagneticButton>
                </div>
            </div>

            {/* =========================================
          CONTACT DETAILS
      ========================================= */}

            <div className="relative z-10 border-t border-white/10">
                <div
                    className="
            grid
            grid-cols-1
            divide-y
            divide-white/10

            md:grid-cols-3
            md:divide-x
            md:divide-y-0
          "
                >
                    {/* EMAIL */}

                    <a
                        href="mailto:hello@meetscripts.com"
                        data-cursor="link"
                        className="
              group
              flex
              items-center
              gap-5
              px-5
              py-8
              transition-colors
              duration-500
              hover:bg-white/[0.03]
              md:px-10
              md:py-10
            "
                    >
                        <Mail
                            size={20}
                            strokeWidth={1.5}
                            className="text-[#e02020]"
                        />

                        <div>
                            <span className="technical block text-[9px] tracking-[0.2em] text-white/30">
                                EMAIL
                            </span>

                            <span className="mt-2 block text-sm text-white/75">
                                hello@meetscripts.com
                            </span>
                        </div>
                    </a>

                    {/* PHONE */}

                    <a
                        href="tel:+910000000000"
                        data-cursor="link"
                        className="
              group
              flex
              items-center
              gap-5
              px-5
              py-8
              transition-colors
              duration-500
              hover:bg-white/[0.03]
              md:px-10
              md:py-10
            "
                    >
                        <Phone
                            size={20}
                            strokeWidth={1.5}
                            className="text-[#e02020]"
                        />

                        <div>
                            <span className="technical block text-[9px] tracking-[0.2em] text-white/30">
                                CALL
                            </span>

                            <span className="mt-2 block text-sm text-white/75">
                                +91 00000 00000
                            </span>
                        </div>
                    </a>

                    {/* SOCIAL */}

                    <a
                        href="#"
                        data-cursor="link"
                        className="
              group
              flex
              items-center
              justify-between
              px-5
              py-8
              transition-colors
              duration-500
              hover:bg-white/[0.03]
              md:px-10
              md:py-10
            "
                    >
                        <div>
                            <span className="technical block text-[9px] tracking-[0.2em] text-white/30">
                                SOCIAL
                            </span>

                            <span className="mt-2 block text-sm text-white/75">
                                Instagram / LinkedIn
                            </span>
                        </div>

                        <ArrowUpRight
                            size={20}
                            strokeWidth={1.5}
                            className="
                text-white/40
                transition-all
                duration-500
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-[#e02020]
              "
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}