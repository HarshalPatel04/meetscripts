"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyGallery({ project }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".case-gallery-image", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
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
                py-20
                md:px-[6vw]
                md:py-[8vw]
            "
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="grid gap-6 md:grid-cols-2">

                    {project.gallery.map((image, index) => (
                        <div
                            key={`${project.slug}-gallery-${index}`}
                            className="
                                case-gallery-image
                                overflow-hidden
                                bg-[#151515]
                            "
                        >
                            <img
                                src={image}
                                alt={`${project.title} project view ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}