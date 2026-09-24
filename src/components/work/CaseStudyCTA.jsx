import { ArrowUpRight } from "lucide-react";

export default function CaseStudyCTA({ project }) {
    return (
        <section
            className="
                bg-[#090909]
                px-5
                py-28
                text-white
                md:px-[6vw]
                md:py-[12vw]
            "
        >
            <div className="mx-auto max-w-[1500px]">

                <p className="technical mb-8 text-[9px] tracking-[0.16em] text-[#e02020]">
                    WORK WITH US
                </p>

                <h2
                    className="
                        max-w-5xl
                        text-[13vw]
                        leading-[0.82]
                        tracking-[-0.075em]
                        md:text-[9vw]
                    "
                >
                    HAVE A
                    <br />
                    <span className="text-white/20">
                        PROJECT?
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
                        border
                        border-white/20
                        px-6
                        py-4
                        text-xs
                        tracking-[0.16em]
                        transition-all
                        duration-500
                        hover:border-[#e02020]
                        hover:bg-[#e02020]
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
                            bg-white/10
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