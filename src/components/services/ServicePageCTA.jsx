"use client";

import { ArrowUpRight } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

export default function ServicePageCTA({ service }) {
    return (
        <section className="bg-[#090909] px-5 py-32 text-white md:px-10 md:py-48">
            <div className="mx-auto max-w-[1450px]">
                <span className="technical text-[10px] tracking-[0.22em] text-[#e02020]">
                    05 / NEXT STEP
                </span>

                <h2 className="mt-10 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.76] tracking-[-0.08em]">
                    LET'S BUILD
                    <br />
                    <span className="text-[#e02020]">
                        {service.shortTitle}.
                    </span>
                </h2>

                <div className="mt-12 flex flex-col justify-between gap-10 border-t border-white/10 pt-8 md:flex-row md:items-end">
                    <p className="max-w-lg text-sm leading-relaxed text-white/40 md:text-base">
                        Ready to talk about {service.title.toLowerCase()}
                        ? Tell us what you're working on and let's
                        explore what we can create together.
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
              border
              border-white/20
              px-6
              py-4
              text-xs
              tracking-[0.15em]
              transition-all
              duration-500
              hover:border-[#e02020]
              hover:bg-[#e02020]
            "
                    >
                        START A PROJECT

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