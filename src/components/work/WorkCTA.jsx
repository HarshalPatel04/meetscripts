"use client";

import { ArrowUpRight } from "lucide-react";

export default function WorkCTA() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#f3f3f0]
                px-5
                py-28
                text-black
                md:px-[6vw]
                md:py-[12vw]
            "
        >
            <div className="mx-auto max-w-[1500px]">
                <p className="technical mb-8 text-[10px] text-[#e02020]">
                    HAVE A PROJECT?
                </p>

                <h2 className="max-w-5xl text-[13vw] leading-[0.85] tracking-[-0.07em] md:text-[9vw]">
                    LET'S BUILD
                    <br />
                    <span className="text-black/20">
                        SOMETHING.
                    </span>
                </h2>

                <a
                    href="/contact"
                    data-cursor="cta"
                    className="
                        group
                        mt-12
                        inline-flex
                        items-center
                        gap-5
                        rounded-full
                        bg-black
                        px-6
                        py-4
                        text-xs
                        tracking-[0.16em]
                        text-red
                        transition-all
                        duration-500
                        hover:bg-[#e02020]
                        hover:text-black
                        hover:gap-7
                    "
                >
                    START A PROJECT

                    <span
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            transition-transform
                            duration-500
                            group-hover:rotate-45
                        "
                    >
                        <ArrowUpRight size={15} />
                    </span>
                </a>
            </div>
        </section>
    );
}