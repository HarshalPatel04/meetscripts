"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyHero({ project }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".case-hero-item", {
                y: 90,
                opacity: 0,
                duration: 1.1,
                stagger: 0.1,
                ease: "power4.out",
            });

            gsap.to(".case-hero-image", {
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);

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
                pb-16
                pt-32
                text-white
                md:px-[6vw]
                md:pb-[6vw]
                md:pt-40
            "
        >
            <div className="mx-auto max-w-[1500px]">

                <div className="flex items-center justify-between">
                    <p className="case-hero-item technical text-[9px] tracking-[0.16em] text-[#e02020]">
                        {project.number} — {project.category}
                    </p>

                    <p className="case-hero-item technical text-[9px] tracking-[0.16em] text-white/35">
                        {project.year}
                    </p>
                </div>

                <div className="mt-16 overflow-hidden md:mt-[8vw]">
                    <h1
                        className="
                            case-hero-item
                            text-[19vw]
                            leading-[0.78]
                            tracking-[-0.08em]
                            md:text-[12vw]
                        "
                    >
                        {project.title}
                    </h1>
                </div>

                <div className="mt-12 md:ml-[28vw] md:mt-[4vw]">
                    <p className="case-hero-item max-w-xl text-sm leading-7 text-white/50 md:text-base">
                        {project.description}
                    </p>
                </div>

                <div className="relative mt-16 overflow-hidden md:mt-[7vw]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                            case-hero-image
                            aspect-[16/10]
                            w-full
                            object-cover
                        "
                    />
                </div>

            </div>
        </section>
    );
}