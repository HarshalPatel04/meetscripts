"use client";

import { ArrowUpRight } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

export default function ServicesCTA() {
    return (
        <section className="bg-[#f3f3f0] px-5 py-32 text-[#090909] md:px-10 md:py-48">
            <div className="mx-auto max-w-[1450px]">
                <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                    04 / START A PROJECT
                </span>

                <h2 className="mt-10 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.76] tracking-[-0.08em]">
                    HAVE A
                    <br />
                    <span className="text-[#e02020]">
                        PROJECT?
                    </span>
                </h2>

                <div className="mt-12 flex flex-col justify-between gap-10 border-t border-black/15 pt-8 md:flex-row md:items-end">
                    <p className="max-w-lg text-sm leading-relaxed text-black/45 md:text-base">
                        Tell us what you're trying to build, grow or
                        communicate. We'll figure out the right digital
                        approach together.
                    </p>

                    <MagneticButton
                        href="/contact"
                        dataCursor="cta"
                        className="
              group
              inline-flex
              w-fit
              items-center
              gap-4
              bg-[#090909]
              px-6
              py-4
              text-xs
              tracking-[0.15em]
              text-red
              transition-colors
              duration-500
              hover:bg-[#e02020]
            "
                    >
                        LET'S TALK

                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.5}
                            className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}