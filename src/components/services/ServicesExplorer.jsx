"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

import { services } from "@/data/services";

export default function ServicesExplorer() {
    const [active, setActive] = useState(0);

    const service = services[active];

    return (
        <section className="bg-[#f3f3f0] px-5 py-28 text-[#090909] md:px-10 md:py-40">
            <div className="mx-auto max-w-[1500px]">
                {/* HEADER */}

                <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
                    <div>
                        <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                            02 / EXPERTISE
                        </span>

                        <h2 className="mt-7 text-[clamp(3.5rem,9vw,9rem)] font-bold leading-[0.78] tracking-[-0.075em]">
                            BUILT
                            <br />
                            TO <span className="text-[#e02020]">MOVE.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-black/45 md:text-base">
                        Choose a discipline to explore what we can
                        build, create and grow together.
                    </p>
                </div>

                {/* DESKTOP EXPLORER */}

                <div className="hidden border-t border-black/15 md:grid md:grid-cols-[1.2fr_1fr]">
                    {/* SERVICE LIST */}

                    <div className="border-r border-black/15">
                        {services.map((item, index) => {
                            const isActive = index === active;

                            return (
                                <button
                                    key={item.number}
                                    type="button"
                                    onMouseEnter={() => setActive(index)}
                                    onFocus={() => setActive(index)}
                                    onClick={() => setActive(index)}
                                    className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-6
                    border-b
                    border-black/10
                    px-6
                    py-7
                    text-left
                    transition-all
                    duration-500
                    ${isActive
                                            ? "bg-[#090909] text-white"
                                            : "text-black hover:bg-black/[0.03]"
                                        }
                  `}
                                    data-cursor="link"
                                >
                                    <span
                                        className={`
                      font-mono
                      text-xs
                      ${isActive
                                                ? "text-[#e02020]"
                                                : "text-black/30"
                                            }
                    `}
                                    >
                                        {item.number}
                                    </span>

                                    <span
                                        className="
                      text-[clamp(1.5rem,3vw,3.5rem)]
                      font-bold
                      leading-none
                      tracking-[-0.05em]
                    "
                                    >
                                        {item.title}
                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        strokeWidth={1.5}
                                        className={`
                      ml-auto
                      shrink-0
                      transition-all
                      duration-500
                      ${isActive
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-3 opacity-0"
                                            }
                    `}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* DETAIL PANEL */}

                    <div className="flex min-h-[620px] flex-col justify-start p-10">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="technical text-[10px] tracking-[0.2em] text-[#e02020]">
                                    {service.category}
                                </span>

                                <span className="font-mono text-xs text-black/30">
                                    {service.number} / 08
                                </span>
                            </div>

                            <div className="mt-20">
                                <h3 className="text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.8] tracking-[-0.07em]">
                                    {service.shortTitle}
                                    <span className="text-[#e02020]">
                                        .
                                    </span>
                                </h3>

                                <p className="mt-8 max-w-lg text-base leading-relaxed text-black/50">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        <div>
                            <span className="technical text-[9px] tracking-[0.2em] text-black/30">
                                CAPABILITIES
                            </span>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {service.capabilities.map((capability) => (
                                    <span
                                        key={capability}
                                        className="rounded-full border border-black/15 px-4 py-2 text-xs text-black/55"
                                    >
                                        {capability}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={`/services/${service.slug}`}
                                data-cursor="cta"
                                className="
        group/cta
        mt-10
        inline-flex
        items-center
        gap-5
        text-xs
        font-medium
        tracking-[0.18em]
        rounded-full
    "
                            >
                                <span className="relative overflow-hidden pb-2">
                                    <span className="block transition-transform duration-500 text-[#e02020] group-hover/cta:-translate-y-full">
                                        EXPLORE SERVICE
                                    </span>

                                    <span className="absolute left-0 top-full block  transition-transform duration-500 group-hover/cta:-translate-y-full">
                                        EXPLORE SERVICE
                                    </span>

                                    <span
                                        className="
                absolute
                bottom-0
                left-0
                h-px
                w-full
                origin-left
                bg-black
                transition-transform
                duration-500
                group-hover/cta:scale-x-0
            "
                                    />
                                </span>

                                <span
                                    className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#e02020]
            bg-[#e02020]
            transition-all
            duration-500
            group-hover/cta:border-[#e02020]
            group-hover/cta:bg-[#e02020]
            group-hover/cta:text-white
            group-hover/cta:rotate-45
        "
                                >
                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.5}
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* MOBILE ACCORDION */}

                <div className="border-t border-black/15 md:hidden">
                    {services.map((item, index) => {
                        const isActive = index === active;

                        return (
                            <div
                                key={item.number}
                                className="border-b border-black/15"
                            >
                                <button
                                    type="button"
                                    onClick={() => setActive(isActive ? -1 : index)}
                                    className="flex w-full items-center gap-4 py-6 text-left"
                                >
                                    <span className="font-mono text-xs text-[#e02020]">
                                        {item.number}
                                    </span>

                                    <span className="flex-1 text-xl font-bold tracking-[-0.04em]">
                                        {item.title}
                                    </span>

                                    <Plus
                                        size={20}
                                        strokeWidth={1.5}
                                        className={`
                      transition-transform
                      duration-300
                      ${isActive
                                                ? "rotate-45"
                                                : ""
                                            }
                    `}
                                    />
                                </button>

                                <div
                                    className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ${isActive
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }
                  `}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-7 pl-8">
                                            <p className="text-sm leading-relaxed text-black/50">
                                                {item.description}
                                            </p>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {item.capabilities.map(
                                                    (capability) => (
                                                        <span
                                                            key={capability}
                                                            className="rounded-full border border-black/15 px-3 py-2 text-[11px] text-black/55"
                                                        >
                                                            {capability}
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <a
                                                href={`/services/${service.slug}`}
                                                data-cursor="cta"
                                                className="
        group/cta
        mt-10
        inline-flex
        items-center
        gap-5
        text-xs
        font-medium
        tracking-[0.18em]
        rounded-full
    "
                                            >
                                                <span className="relative overflow-hidden pb-2">
                                                    <span className="block transition-transform duration-500 text-[#e02020] group-hover/cta:-translate-y-full">
                                                        EXPLORE SERVICE
                                                    </span>

                                                    <span className="absolute left-0 top-full block  transition-transform duration-500 group-hover/cta:-translate-y-full">
                                                        EXPLORE SERVICE
                                                    </span>

                                                    <span
                                                        className="
                absolute
                bottom-0
                left-0
                h-px
                w-full
                origin-left
                bg-black
                transition-transform
                duration-500
                group-hover/cta:scale-x-0
            "
                                                    />
                                                </span>

                                                <span
                                                    className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#e02020]
            bg-[#e02020]
            transition-all
            duration-500
            group-hover/cta:border-[#e02020]
            group-hover/cta:bg-[#e02020]
            group-hover/cta:text-white
            group-hover/cta:rotate-45
        "
                                                >
                                                    <ArrowUpRight
                                                        size={16}
                                                        strokeWidth={1.5}
                                                    />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}