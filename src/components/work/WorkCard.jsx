"use client";

import { ArrowUpRight } from "lucide-react";

export default function WorkCard({
    project,
    reverse = false,
}) {
    return (
        <article className="work-card group">

            <a
                href={project.href}
                data-cursor="view"
                className={`
                    grid
                    md:grid-cols-2
                    md:items-stretch
                    ${reverse ? "md:flex-row-reverse" : ""}
                `}
            >

                {/* IMAGE */}
                <div
                    className={`
                        relative
                        aspect-[4/3]
                        overflow-hidden
                        bg-[#151515]
                        md:aspect-auto
                        md:min-h-[520px]
                        ${reverse ? "md:order-2" : "md:order-1"}
                    `}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-[1400ms]
                            ease-[cubic-bezier(.16,1,.3,1)]
                            group-hover:scale-[1.04]
                        "
                    />

                    {/* IMAGE OVERLAY */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-black/0
                            transition-colors
                            duration-500
                            group-hover:bg-black/15
                        "
                    />

                    {/* ARROW */}
                    <div
                        className="
                            absolute
                            right-5
                            top-5
                            flex
                            h-12
                            w-12
                            translate-y-2
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-black
                            opacity-0
                            transition-all
                            duration-500
                            group-hover:translate-y-0
                            group-hover:rotate-45
                            group-hover:opacity-100
                        "
                    >
                        <ArrowUpRight
                            size={17}
                            strokeWidth={1.5}
                        />
                    </div>
                </div>

                {/* DETAILS */}
                <div
                    className={`
                        flex
                        min-h-[400px]
                        flex-col
                        justify-between
                        border-t
                        border-white/10
                        px-5
                        py-8
                        md:min-h-[520px]
                        md:px-[4vw]
                        md:py-[3vw]
                        ${reverse
                            ? "md:order-1 md:border-l-0 md:border-r"
                            : "md:order-2 md:border-l"
                        }
                    `}
                >

                    {/* TOP */}
                    <div>

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">

                                <span className="technical text-[9px] tracking-[0.15em] text-[#e02020]">
                                    {project.number}
                                </span>

                                <span className="h-px w-5 bg-white/20" />

                                <span className="technical text-[9px] tracking-[0.12em] text-white/35">
                                    {project.category}
                                </span>

                            </div>

                            <span className="technical text-[9px] tracking-[0.12em] text-white/30">
                                {project.year}
                            </span>

                        </div>

                        <h2
                            className="
                                mt-16
                                text-[clamp(3rem,6vw,6rem)]
                                leading-[0.82]
                                tracking-[-0.07em]
                                text-white
                                transition-colors
                                duration-500
                                group-hover:text-[#e02020]
                            "
                        >
                            {project.title}
                        </h2>

                    </div>

                    {/* BOTTOM */}
                    <div className="mt-16">

                        <p
                            className="
                                max-w-md
                                text-sm
                                leading-7
                                text-white/45
                                transition-colors
                                duration-500
                                group-hover:text-white/65
                            "
                        >
                            {project.description}
                        </p>

                        <div
                            className="
                                mt-10
                                flex
                                items-center
                                justify-between
                                border-t
                                border-white/10
                                pt-5
                            "
                        >

                            <span className="technical text-[9px] tracking-[0.15em] text-white/30">
                                {project.client}
                            </span>

                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-[10px]
                                    tracking-[0.15em]
                                    text-white/45
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#e02020]
                                "
                            >
                                VIEW CASE

                                <ArrowUpRight
                                    size={13}
                                    strokeWidth={1.5}
                                    className="
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />
                            </span>

                        </div>

                    </div>

                </div>

            </a>

        </article>
    );
}