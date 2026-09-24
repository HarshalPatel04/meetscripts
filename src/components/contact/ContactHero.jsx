"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-hero-item", {
                y: 100,
                opacity: 0,
                duration: 1.1,
                stagger: 0.1,
                ease: "power4.out",
            });

            gsap.to(".contact-hero-bg", {
                yPercent: 15,
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
                min-h-[75svh]
                overflow-hidden
                bg-[#090909]
                px-5
                pb-20
                pt-32
                text-white
                md:min-h-[82vh]
                md:px-[6vw]
                md:pb-[7vw]
                md:pt-40
            "
        >
            {/* BACKGROUND DETAIL */}
            <div
                className="
                    contact-hero-bg
                    pointer-events-none
                    absolute
                    -right-[15vw]
                    top-[15%]
                    h-[50vw]
                    w-[50vw]
                    rounded-full
                    border
                    border-[#e02020]/10
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-[5vw]
                    top-[25%]
                    h-[30vw]
                    w-[30vw]
                    rounded-full
                    border
                    border-white/5
                "
            />

            <div className="relative min-h-screen mx-auto max-w-[1500px]">

                {/* META */}
                <div className="flex items-center justify-between">
                    <p className="contact-hero-item technical text-[9px] tracking-[0.18em] text-[#e02020]">
                        START A CONVERSATION
                    </p>

                    <span className="contact-hero-item technical text-[9px] tracking-[0.15em] text-white/30">
                        05 — CONTACT
                    </span>
                </div>

                {/* TITLE */}
                <div className="mt-10 overflow-hidden md:mt-[5vw]">
                    <h1
                        className="
                            text-[17vw]
                            leading-[0.78]
                            tracking-[-0.08em]
                            md:text-[10.5vw]
                        "
                    >
                        <span className="contact-hero-item block">
                            LET&apos;S
                        </span>

                        <span className="contact-hero-item block text-[#e02020]">
                            MAKE
                        </span>

                        <span className="contact-hero-item block">
                            SOMETHING.
                        </span>
                    </h1>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-12 md:ml-[30vw] md:mt-[4vw]">
                    <p
                        className="
                            contact-hero-item
                            max-w-xl
                            text-sm
                            leading-7
                            text-white/50
                            md:text-base
                        "
                    >
                        Have an idea, a business that needs a digital
                        presence, or a brand ready to move forward?
                        Tell us what you&apos;re building.
                    </p>
                </div>

            </div>
        </section>
    );
}