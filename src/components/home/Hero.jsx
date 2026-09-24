"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef(null);

    const headlineRef = useRef(null);
    const lineRef = useRef(null);
    const gridRef = useRef(null);
    const orbRef = useRef(null);

    const wordRefs = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            /*
             * --------------------------------
             * HERO ENTRANCE
             * --------------------------------
             */

            const intro = gsap.timeline({
                delay: 2.7,
            });

            intro.fromTo(
                ".hero-eyebrow",
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power4.out",
                }
            );

            intro.fromTo(
                wordRefs.current,
                {
                    yPercent: 120,
                    rotateX: -70,
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.15,
                    stagger: 0.08,
                    ease: "power4.out",
                },
                "-=0.4"
            );

            intro.fromTo(
                ".hero-description",
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            );

            intro.fromTo(
                ".hero-cta",
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                },
                "-=0.5"
            );

            intro.fromTo(
                ".hero-meta",
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                },
                "-=0.3"
            );

            /*
             * --------------------------------
             * GRID MOVEMENT
             * --------------------------------
             */

            gsap.to(gridRef.current, {
                backgroundPosition: "120px 120px",
                duration: 18,
                repeat: -1,
                ease: "none",
            });

            /*
             * --------------------------------
             * FLOATING ORB
             * --------------------------------
             */

            gsap.to(orbRef.current, {
                x: 35,
                y: -25,
                rotation: 180,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /*
             * --------------------------------
             * SCROLL ANIMATION
             * --------------------------------
             */

            gsap.to(headlineRef.current, {
                yPercent: -28,
                scale: 0.82,
                opacity: 0.35,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(lineRef.current, {
                scaleX: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(".hero-background", {
                yPercent: 18,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.2,
                },
            });

            /*
             * --------------------------------
             * MOUSE PARALLAX
             * --------------------------------
             */

            const handleMouseMove = (event) => {
                const x =
                    (event.clientX / window.innerWidth - 0.5) * 2;

                const y =
                    (event.clientY / window.innerHeight - 0.5) * 2;

                gsap.to(".hero-parallax-slow", {
                    x: x * 12,
                    y: y * 12,
                    duration: 1.2,
                    ease: "power3.out",
                });

                gsap.to(".hero-parallax-medium", {
                    x: x * 25,
                    y: y * 25,
                    duration: 0.9,
                    ease: "power3.out",
                });

                gsap.to(".hero-parallax-fast", {
                    x: x * 45,
                    y: y * 45,
                    duration: 0.7,
                    ease: "power3.out",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);

            /*
             * --------------------------------
             * SCROLL VELOCITY
             * --------------------------------
             */

            let scrollTimeout;

            const handleScroll = () => {
                const velocity = Math.min(
                    Math.abs(window.scrollY - (window.__lastScrollY || 0)),
                    30
                );

                window.__lastScrollY = window.scrollY;

                gsap.to(headlineRef.current, {
                    skewY: velocity * 0.08,
                    duration: 0.25,
                    ease: "power2.out",
                });

                clearTimeout(scrollTimeout);

                scrollTimeout = setTimeout(() => {
                    gsap.to(headlineRef.current, {
                        skewY: 0,
                        duration: 0.6,
                        ease: "elastic.out(1, 0.5)",
                    });
                }, 80);
            };

            window.addEventListener("scroll", handleScroll, {
                passive: true,
            });

            return () => {
                window.removeEventListener(
                    "mousemove",
                    handleMouseMove
                );

                window.removeEventListener(
                    "scroll",
                    handleScroll
                );

                clearTimeout(scrollTimeout);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addWordRef = (element) => {
        if (
            element &&
            !wordRefs.current.includes(element)
        ) {
            wordRefs.current.push(element);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[100svh] overflow-hidden bg-[#090909]"
        >
            {/* --------------------------------
          BACKGROUND
      -------------------------------- */}

            <div className="hero-background absolute inset-0">
                {/* Grid */}
                <div
                    ref={gridRef}
                    className="absolute inset-[-120px] opacity-[0.16]"
                    style={{
                        backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.07) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.07) 1px,
                transparent 1px
              )
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Radial red glow */}
                <div className="absolute left-[45%] top-[38%] h-[35vw] w-[35vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e02020]/10 blur-[130px]" />

                {/* Large technical circle */}
                <div
                    ref={orbRef}
                    className="hero-parallax-slow absolute left-[72%] top-[28%] h-[clamp(180px,24vw,420px)] w-[clamp(180px,24vw,420px)] rounded-full border border-[#e02020]/30"
                >
                    <div className="absolute inset-[12%] rounded-full border border-white/10" />

                    <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -rotate-45 bg-[#e02020]/50" />

                    <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e02020]" />
                </div>

                {/* Crosshair */}
                <div className="hero-parallax-fast absolute left-[9%] top-[30%] h-16 w-16 opacity-50 md:h-24 md:w-24">
                    <span className="absolute left-1/2 top-0 h-full w-px bg-white/20" />
                    <span className="absolute left-0 top-1/2 h-px w-full bg-white/20" />

                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e02020]" />
                </div>

                {/* Red vertical line */}
                <div className="hero-parallax-medium absolute right-[16%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e02020]/30 to-transparent" />

                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.035] [background-image:url('/images/noise.png')]" />
            </div>

            {/* --------------------------------
          TOP INFORMATION
      -------------------------------- */}

            <div className="site-container relative z-10 flex min-h-[100svh] flex-col">
                <div className="hero-eyebrow flex items-center justify-between pt-[120px] opacity-0 md:pt-[150px]">
                    <div className="flex items-center gap-3">
                        <span className="red-dot" />

                        <span className="technical text-white/60">
                            CREATIVE TECHNOLOGY STUDIO
                        </span>
                    </div>

                    <span className="technical hidden text-white/30 md:block">
                        STUDIO / 001
                    </span>
                </div>

                {/* --------------------------------
            MAIN CONTENT
        -------------------------------- */}

                <div className="flex flex-1 items-center py-16">
                    <div className="w-full">
                        <div
                            ref={headlineRef}
                            className="relative z-10 will-change-transform"
                            style={{
                                perspective: "1000px",
                            }}
                        >
                            <div className="overflow-hidden">
                                <h1
                                    ref={addWordRef}
                                    className="display-xl"
                                >
                                    WE MAKE
                                </h1>
                            </div>

                            <div className="overflow-hidden">
                                <h1
                                    ref={addWordRef}
                                    className="display-xl text-[#e02020]"
                                >
                                    DIGITAL
                                </h1>
                            </div>

                            <div className="flex items-end gap-4 overflow-hidden">
                                <h1
                                    ref={addWordRef}
                                    className="display-xl"
                                >
                                    THINGS.
                                </h1>

                                <span className="mb-[1.5vw] hidden font-mono text-[10px] text-white/30 md:block">
                                    / 001
                                </span>
                            </div>
                        </div>

                        {/* --------------------------------
                DESCRIPTION
            -------------------------------- */}

                        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
                            <div className="hero-description opacity-0 md:col-span-5 md:col-start-1">
                                <p className="max-w-md text-base leading-relaxed text-white/55 md:text-lg">
                                    We build digital experiences,
                                    create brands, grow businesses
                                    and turn ideas into something
                                    people remember.
                                </p>
                            </div>

                            <div className="hero-cta opacity-0 md:col-span-4 md:col-start-8">
                                <MagneticButton>
                                    START A PROJECT
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --------------------------------
            BOTTOM INFORMATION
        -------------------------------- */}

                <div className="hero-meta pb-6 opacity-0 md:pb-8">
                    <div
                        ref={lineRef}
                        className="mb-5 h-px origin-left scale-x-0 bg-white/15"
                    />

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div>
                            <p className="technical mb-2 text-white/30">
                                CAPABILITY
                            </p>

                            <p className="text-xs text-white/65">
                                BUILD
                            </p>
                        </div>

                        <div>
                            <p className="technical mb-2 text-white/30">
                                CAPABILITY
                            </p>

                            <p className="text-xs text-white/65">
                                CREATE
                            </p>
                        </div>

                        <div>
                            <p className="technical mb-2 text-white/30">
                                CAPABILITY
                            </p>

                            <p className="text-xs text-white/65">
                                GROW
                            </p>
                        </div>

                        <div className="flex items-end justify-between md:justify-end">
                            <div className="flex items-center gap-3 md:ml-auto">
                                <span className="technical text-white/40">
                                    SCROLL
                                </span>

                                <ArrowDown
                                    size={15}
                                    strokeWidth={1.2}
                                    className="animate-bounce text-[#e02020]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------------
          SIDE LABEL
      -------------------------------- */}

            <div className="hero-parallax-fast absolute bottom-[25%] right-[-28px] hidden rotate-90 md:block">
                <span className="technical text-white/20">
                    CODE × CREATIVITY × GROWTH
                </span>
            </div>
        </section>
    );
}