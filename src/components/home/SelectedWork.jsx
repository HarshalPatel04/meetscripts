"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const progressRef = useRef(null);
    const countRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* =========================================
               DESKTOP ONLY
            ========================================= */

            mm.add("(min-width: 768px)", () => {
                const getDistance = () =>
                    track.scrollWidth - window.innerWidth;

                gsap.to(track, {
                    x: () => -getDistance(),
                    ease: "none",

                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${getDistance()}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,

                        onUpdate: (self) => {
                            const progressValue = self.progress;

                            if (progressRef.current) {
                                progressRef.current.style.width =
                                    `${progressValue * 100}%`;
                            }

                            const currentIndex = Math.min(
                                projects.length - 1,
                                Math.floor(
                                    progressValue * projects.length
                                )
                            );

                            if (countRef.current) {
                                countRef.current.textContent =
                                    String(currentIndex + 1).padStart(2, "0");
                            }
                        },
                    },
                });
            });

            /* =========================================
               MOBILE ONLY
            ========================================= */

            mm.add("(max-width: 767px)", () => {
                const cards = gsap.utils.toArray(
                    ".project-card"
                );

                cards.forEach((card) => {
                    gsap.fromTo(
                        card,
                        {
                            y: 60,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power3.out",

                            scrollTrigger: {
                                trigger: card,
                                start: "top 90%",
                                once: true,
                            },
                        }
                    );
                });
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
        overflow-hidden
        bg-[#090909]
        text-white
      "
        >
            {/* =========================================
          HEADER
      ========================================= */}

            <div
                className="
          work-heading
          relative
          z-10
          px-5
          pb-12
          pt-28

          md:absolute
          md:left-10
          md:top-0
          md:w-[420px]
          md:px-0
          md:pb-0
          md:pt-12
        "
            >
                <div className="mb-5 flex items-center justify-between md:block">
                    <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                        03 / SELECTED WORK
                    </span>

                    <span
                        ref={countRef}
                        className="
              font-mono
              text-xs
              text-white/40
              md:hidden
            "
                    >
                        01
                    </span>
                </div>

                <h2
                    className="
            text-[clamp(3.5rem,9vw,8rem)]
            font-bold
            leading-[0.78]
            tracking-[-0.07em]
          "
                >
                    SELECTED
                    <br />
                    <span className="text-[#e02020]">
                        WORK.
                    </span>
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/40">
                    A selection of digital experiences, products
                    and identities we've helped bring to life.
                </p>
            </div>

            {/* =========================================
          PROJECT TRACK
      ========================================= */}

            <div
                ref={trackRef}
                className="
          flex
          flex-col
          gap-6
          px-5
          pb-24

          md:h-screen
          md:w-max
          md:flex-row
          md:items-center
          md:gap-[4vw]
          md:px-[10vw]
          md:pb-0
        "
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                        index={index}
                    />
                ))}

                {/* DESKTOP END CARD */}

                <div
                    className="
            hidden
            h-[76vh]
            w-[35vw]
            shrink-0
            items-center
            justify-center
            md:flex
          "
                >
                    <div className="text-center">
                        <span className="technical text-xs tracking-[0.2em] text-white/30">
                            MORE COMING
                        </span>

                        <div className="mx-auto mt-6 h-px w-24 bg-[#e02020]" />

                        <p className="mt-6 text-2xl font-semibold tracking-tight">
                            LET'S BUILD
                            <br />
                            SOMETHING.
                        </p>
                    </div>
                </div>
            </div>

            {/* =========================================
          DESKTOP PROGRESS
      ========================================= */}

            <div className="absolute bottom-7 left-5 right-5 hidden md:block">
                <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] text-white/30">
                        01
                    </span>

                    <div className="h-px flex-1 overflow-hidden bg-white/10">
                        <div
                            ref={progressRef}
                            className="h-full w-0 bg-[#e02020]"
                        />
                    </div>

                    <span className="font-mono text-[10px] text-white/30">
                        {String(projects.length).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </section>
    );
}