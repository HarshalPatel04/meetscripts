"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/services";
import ServiceVisual from "./ServiceVisual";

export default function Services() {
    const sectionRef = useRef(null);
    const previewRef = useRef(null);
    const listRef = useRef(null);

    const [activeService, setActiveService] = useState(
        services[0]
    );

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            /*
             * --------------------------------
             * SECTION INTRO
             * --------------------------------
             */

            gsap.fromTo(
                ".services-eyebrow",
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".services-title",
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
                        start: "top 70%",
                        once: true,
                    },
                }
            );

            /*
             * --------------------------------
             * SERVICE ITEMS
             * --------------------------------
             */

            gsap.fromTo(
                ".service-row",
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.07,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            /*
             * --------------------------------
             * RED LINE
             * --------------------------------
             */

            gsap.fromTo(
                ".services-red-line",
                {
                    scaleX: 0,
                },
                {
                    scaleX: 1,
                    duration: 1.3,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: ".services-red-line",
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleServiceEnter = (service) => {
        setActiveService(service);

        if (!previewRef.current) return;

        gsap.fromTo(
            previewRef.current,
            {
                opacity: 0.4,
                scale: 0.97,
                y: 12,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out",
            }
        );
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#090909] text-white"
        >
            {/* --------------------------------
          HEADER
      -------------------------------- */}

            <div className="site-container pt-32 md:pt-48">
                <div className="services-eyebrow flex items-center justify-between opacity-0">
                    <div className="flex items-center gap-3">
                        <span className="red-dot" />

                        <span className="technical text-white/40">
                            SECTION / 03
                        </span>
                    </div>

                    <span className="technical hidden text-white/25 md:block">
                        CAPABILITIES
                    </span>
                </div>

                <div className="services-title mt-16 opacity-0 md:mt-24">
                    <h2 className="display-lg">
                        WHAT
                        <br />
                        <span className="text-[#e02020]">
                            WE DO.
                        </span>
                    </h2>

                    <p className="mt-10 max-w-lg text-sm leading-relaxed text-white/45 md:text-base">
                        From the first idea to the final result,
                        we combine technology, design,
                        content and growth under one roof.
                    </p>
                </div>

                <div className="services-red-line mt-20 h-px origin-left scale-x-0 bg-[#e02020] md:mt-28" />
            </div>

            {/* --------------------------------
          DESKTOP SERVICES
      -------------------------------- */}

            <div
                ref={listRef}
                className="site-container hidden py-20 lg:block lg:py-28"
            >
                <div className="grid grid-cols-12 gap-10">
                    {/* Service list */}
                    <div className="col-span-7">
                        {services.map((service) => {
                            const active =
                                activeService.slug === service.slug;

                            return (
                                <div
                                    key={service.slug}
                                    data-cursor="view"
                                    className={`service-row group relative border-b border-white/10 opacity-0 ${active ? "z-10" : ""
                                        }`}
                                    onMouseEnter={() =>
                                        handleServiceEnter(service)
                                    }
                                >
                                    <button
                                        type="button"
                                        className="flex w-full items-center py-7 text-left xl:py-8"
                                    >
                                        <span
                                            className={`technical mr-7 w-7 transition-colors duration-300 ${active
                                                ? "text-[#e02020]"
                                                : "text-white/25"
                                                }`}
                                        >
                                            {service.slug}
                                        </span>

                                        <span
                                            className={`text-[clamp(2rem,3.3vw,4rem)] font-bold leading-none tracking-[-0.055em] transition-all duration-500 ${active
                                                ? "translate-x-3 text-white"
                                                : "text-white/45 group-hover:translate-x-2 group-hover:text-white"
                                                }`}
                                        >
                                            {service.title}
                                        </span>

                                        <ArrowUpRight
                                            size={20}
                                            strokeWidth={1.2}
                                            className={`ml-auto transition-all duration-500 ${active
                                                ? "translate-x-0 -translate-y-1 text-[#e02020] opacity-100"
                                                : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                                                }`}
                                        />
                                    </button>

                                    {/* Active description */}
                                    <div
                                        className={`grid transition-all duration-500 ${active
                                            ? "grid-rows-[1fr] pb-7"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden pl-14">
                                            <p className="max-w-lg text-sm leading-relaxed text-white/40">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Preview */}
                    <div className="col-span-5">
                        <div className="sticky top-32">
                            <div
                                ref={previewRef}
                                className="overflow-hidden border border-white/10"
                                data-cursor="view"
                            >
                                <ServiceVisual service={activeService} />
                            </div>

                            <div className="mt-5 flex items-center justify-between">
                                <span className="technical text-white/30">
                                    LIVE SERVICE PREVIEW
                                </span>

                                <span className="technical text-[#e02020]">
                                    {activeService.slug} / 08
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------------
          MOBILE SERVICES
      -------------------------------- */}

            <MobileServices
                activeService={activeService}
                setActiveService={setActiveService}
            />

            {/* --------------------------------
          BOTTOM MARQUEE
      -------------------------------- */}

            <div className="overflow-hidden border-t border-white/10 py-5">
                <div className="flex w-max animate-[marquee_24s_linear_infinite] items-center gap-8 whitespace-nowrap">
                    {services.concat(services).map(
                        (service, index) => (
                            <div
                                key={`${service.slug}-${index}`}
                                className="flex items-center gap-8"
                            >
                                <span className="text-xs font-bold tracking-[0.14em] text-white/60">
                                    {service.shortTitle}
                                </span>

                                <span className="h-1.5 w-1.5 rounded-full bg-[#e02020]" />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

/* --------------------------------
   MOBILE SERVICES
-------------------------------- */

function MobileServices({
    activeService,
    setActiveService,
}) {
    return (
        <div className="site-container py-16 lg:hidden">
            <div className="space-y-0 border-t border-white/10">
                {services.map((service) => {
                    const active =
                        activeService.slug === service.slug;

                    return (
                        <div
                            key={service.slug}
                            className="border-b border-white/10"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveService(
                                        active
                                            ? services[0]
                                            : service
                                    )
                                }
                                className="flex w-full items-center py-6 text-left"
                            >
                                <span
                                    className={`technical mr-5 transition-colors ${active
                                        ? "text-[#e02020]"
                                        : "text-white/25"
                                        }`}
                                >
                                    {service.slug}
                                </span>

                                <span
                                    className={`text-[clamp(1.55rem,7vw,2.7rem)] font-bold leading-none tracking-[-0.05em] ${active
                                        ? "text-white"
                                        : "text-white/55"
                                        }`}
                                >
                                    {service.title}
                                </span>

                                <span
                                    className={`ml-auto text-2xl font-light transition-transform duration-500 ${active
                                        ? "rotate-45 text-[#e02020]"
                                        : "text-white/40"
                                        }`}
                                >
                                    +
                                </span>
                            </button>

                            <div
                                className={`grid transition-all duration-500 ${active
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="pb-7 pl-9">
                                        <p className="mb-6 text-sm leading-relaxed text-white/40">
                                            {service.description}
                                        </p>

                                        <div className="mb-7 flex flex-wrap gap-2">
                                            {service.capabilities.map(
                                                (capability) => (
                                                    <span
                                                        key={capability}
                                                        className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-wider text-white/50"
                                                    >
                                                        {capability}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                            Explore service

                                            <ArrowUpRight
                                                size={15}
                                                className="text-[#e02020] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}