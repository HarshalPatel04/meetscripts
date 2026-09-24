"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/data/projects";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

export default function WorkGrid() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".work-card", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="
                bg-[#090909]
                px-5
                pb-24
                text-white
                md:px-[6vw]
                md:pb-[10vw]
            "
        >
            <div className="mx-auto max-w-[1500px]">

                {/* SECTION HEADER */}
                <div
                    className="
                        mb-14
                        flex
                        items-end
                        justify-between
                        border-t
                        border-white/10
                        pt-5
                        md:mb-[6vw]
                    "
                >
                    <p className="technical text-[9px] tracking-[0.15em] text-white/35">
                        SELECTED PROJECTS
                    </p>

                    <p className="technical text-[9px] tracking-[0.15em] text-white/35">
                        04 CASE STUDIES
                    </p>
                </div>

                {/* PROJECTS */}
                <div className="grid gap-24 md:gap-[12vw]">
                    {projects.map((project, index) => (
                        <WorkCard
                            key={project.number}
                            project={project}
                            index={index}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}