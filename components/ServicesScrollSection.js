"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
    {
        number: "01",
        title: "Graphics Design",
        description:
            "Create a distinctive visual identity that makes your business recognisable and memorable.",
        categories: [
            "Branding",
            "Logo Design",
            "Label Design",
            "Packaging Design",
            "Box Design",
            "Post Design",
        ],
        href: "/services/design",
    },
    {
        number: "02",
        title: "Printing Solutions",
        description:
            "Bring your brand into the physical world with professionally designed and printed materials.",
        categories: [
            "Brochure Printing",
            "Visiting Cards",
            "Pamphlets",
            "Flex Banners",
            "Customised Printing",
        ],
        href: "/services/printing",
    },
    {
        number: "03",
        title: "Video Animation",
        description:
            "Turn ideas into engaging visual stories through video production, motion and animation.",
        categories: [
            "Reels",
            "Video Shooting",
            "2D Animation",
            "3D Animation",
            "AI Animation",
            "Storytelling Video",
            "Podcast Shooting",
        ],
        href: "/services/video",
    },
    {
        number: "04",
        title: "Website Development",
        description:
            "Build a powerful digital presence with websites designed around your business goals.",
        categories: [
            "Static Websites",
            "Dynamic Websites",
            "E-commerce Websites",
        ],
        href: "/services/websites",
    },
    {
        number: "05",
        title: "Marketing",
        description:
            "Reach the right audience, strengthen your brand presence and turn attention into opportunities.",
        categories: [
            "Social Media Marketing",
            "Digital Marketing",
            "SEO",
            "Google Ads",
            "Influencer Marketing",
        ],
        href: "/services/marketing",
    },
];

export default function ServicesScrollSection() {
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);
    const arcRef = useRef(null);
    const animationFrame = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const activeIndexRef = useRef(0);

    // --------------------------------------------------
    // 1. OBSERVE FIVE SCROLL MARKERS
    // --------------------------------------------------

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let observer;

        const createObserver = () => {
            if (observer) observer.disconnect();

            const centerInset = Math.round(
                window.innerHeight * 0.45
            );

            observer = new IntersectionObserver(
                (entries) => {
                    const visibleMarkers = entries
                        .filter((entry) => entry.isIntersecting)
                        .sort(
                            (a, b) =>
                                Math.abs(
                                    a.boundingClientRect.top - window.innerHeight / 2
                                ) -
                                Math.abs(
                                    b.boundingClientRect.top - window.innerHeight / 2
                                )
                        );

                    if (visibleMarkers.length === 0) return;

                    const nextIndex = Number(
                        visibleMarkers[0].target.dataset.stage
                    );

                    if (
                        Number.isNaN(nextIndex) ||
                        nextIndex === activeIndexRef.current
                    ) {
                        return;
                    }

                    activeIndexRef.current = nextIndex;
                    setActiveIndex(nextIndex);
                },
                {
                    root: null,
                    rootMargin: `-${centerInset}px 0px -${centerInset}px 0px`,
                    threshold: 0,
                }
            );

            section
                .querySelectorAll("[data-service-stage]")
                .forEach((marker) => observer.observe(marker));
        };

        createObserver();

        window.addEventListener("resize", createObserver);

        return () => {
            if (observer) observer.disconnect();
            window.removeEventListener("resize", createObserver);
        };
    }, []);

    // --------------------------------------------------
    // 2. MOVE THE ARC WITH SCROLL
    // --------------------------------------------------

    useEffect(() => {
        const updateArc = () => {
            if (animationFrame.current !== null) return;

            animationFrame.current = requestAnimationFrame(() => {
                animationFrame.current = null;

                const section = sectionRef.current;
                const sticky = stickyRef.current;
                const arc = arcRef.current;

                if (!section || !sticky || !arc) return;

                const rect = section.getBoundingClientRect();

                const availableScroll =
                    section.offsetHeight - sticky.offsetHeight;

                if (availableScroll <= 0) return;

                const progress = Math.max(
                    0,
                    Math.min(
                        1,
                        (80 - rect.top) / availableScroll
                    )
                );

                const controlY = 130 - progress * 35;
                const controlLeft = 220 - progress * 90;
                const controlRight = 780 - progress * 90;

                arc.setAttribute(
                    "d",
                    `M 0 460 C ${controlLeft} ${controlY}, ${controlRight} ${controlY}, 1000 460`
                );
            });
        };

        updateArc();

        window.addEventListener("scroll", updateArc, {
            passive: true,
        });

        window.addEventListener("resize", updateArc);

        return () => {
            window.removeEventListener("scroll", updateArc);
            window.removeEventListener("resize", updateArc);

            if (animationFrame.current !== null) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative h-[500vh] bg-white"
        >

            {/* INVISIBLE SCROLL MARKERS */}
            {services.map((service, index) => (
                <div
                    key={service.number}
                    data-service-stage
                    data-stage={index}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 h-2 w-2 opacity-0"
                    style={{
                        top: `calc(${50 + index * 80}vh - 5rem)`,
                    }}
                />
            ))}

            {/* STICKY VIEWPORT */}
            <div
                ref={stickyRef}
                className="sticky top-20 h-[calc(100svh-5rem)] min-h-[500px] overflow-hidden bg-white"
            >

                {/* HEADER */}
                <div className="absolute left-5 right-5 top-6 z-[100] flex items-start justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929] sm:text-xs">
                            WHAT WE DO
                        </p>

                        <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-[10px]">
                            FIVE CREATIVE DISCIPLINES
                        </p>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-400 sm:text-[10px]">
                        MEETSCRIPTS / 2026
                    </span>
                </div>

                {/* OPEN RED ARC */}
                <svg
                    viewBox="0 0 1000 500"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute left-0 top-[14%] z-0 h-[80%] w-full overflow-visible"
                >
                    <path
                        ref={arcRef}
                        d="M 0 460 C 220 130, 780 130, 1000 460"
                        fill="none"
                        stroke="#df2929"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* SERVICE SLIDES */}
                <div className="absolute inset-0 z-10">

                    {services.map((service, index) => {
                        const isActive = index === activeIndex;

                        // Every service has a defined starting side.
                        // Previous services stay to the left.
                        // Upcoming services stay to the right.
                        const horizontalPosition = isActive
                            ? 0
                            : index < activeIndex
                                ? -110
                                : 110;

                        return (
                            <article
                                key={service.number}
                                aria-hidden={!isActive}
                                className="absolute inset-0 transition-[transform,opacity,filter] duration-700 ease-out"
                                style={{
                                    transform: `translate3d(${horizontalPosition}vw, 0, 0)`,
                                    opacity: isActive ? 1 : 0,
                                    filter: isActive ? "blur(0px)" : "blur(12px)",
                                    zIndex: isActive ? 20 : 10,
                                    pointerEvents: isActive ? "auto" : "none",
                                    willChange: "transform, opacity, filter",
                                }}
                            >

                                {/* SERVICE TITLE ABOVE ARC */}
                                <div className="absolute left-5 right-5 top-[20%] text-center sm:left-8 sm:right-8">

                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#df2929] sm:text-xs">
                                        SERVICE {service.number}
                                    </p>

                                    <h2 className="text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
                                        {service.title}
                                    </h2>

                                </div>

                                {/* DETAILS BELOW ARC */}
                                <div className="absolute left-5 right-5 top-[55%] flex flex-col items-center text-center sm:left-8 sm:right-8">

                                    <p className="max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base lg:text-lg">
                                        {service.description}
                                    </p>

                                    <div className="mt-7 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-9">
                                        {service.categories.map((category) => (
                                            <span
                                                key={category}
                                                className="flex items-center gap-2 text-xs font-medium text-neutral-600 sm:text-sm"
                                            >
                                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#df2929]" />
                                                {category}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={service.href}
                                        tabIndex={isActive ? 0 : -1}
                                        className="mt-8 inline-flex items-center gap-4 border-b border-[#df2929] pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#df2929] transition-colors hover:border-[#111111] hover:text-[#111111] sm:text-xs"
                                    >
                                        EXPLORE SERVICE
                                        <span className="text-lg">↗</span>
                                    </Link>

                                </div>
                            </article>
                        );
                    })}

                </div>

                {/* BOTTOM PROGRESS */}
                <div className="absolute bottom-5 left-5 right-5 z-[100] sm:bottom-7 sm:left-8 sm:right-8 lg:left-12 lg:right-12">

                    <div className="mb-4 flex items-center justify-between">

                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-[#df2929]" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400 sm:text-[10px]">
                                SCROLL TO EXPLORE
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold tabular-nums">
                            <span className="text-[#df2929]">
                                0{activeIndex + 1}
                            </span>

                            <span className="text-neutral-300">/</span>

                            <span className="text-neutral-400">05</span>
                        </div>

                    </div>

                    <div className="h-[2px] w-full bg-neutral-200">
                        <div
                            className="h-full bg-[#df2929] transition-all duration-500"
                            style={{
                                width: `${((activeIndex + 1) / services.length) * 100}%`,
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}