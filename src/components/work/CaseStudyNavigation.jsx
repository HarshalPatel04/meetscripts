import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CaseStudyNavigation({
    previous,
    next,
}) {
    return (
        <section className="bg-[#090909] text-white">
            <div className="grid border-t border-white/10 md:grid-cols-2">

                {previous ? (
                    <Link
                        href={`/work/${previous.slug}`}
                        className="
                            group
                            border-b
                            border-white/10
                            p-8
                            transition-colors
                            hover:bg-white/[0.03]
                            md:border-r
                            md:border-b-0
                            md:p-[4vw]
                        "
                    >
                        <span className="technical text-[9px] text-white/30">
                            PREVIOUS PROJECT
                        </span>

                        <div className="mt-8 flex items-center justify-between">
                            <span className="text-4xl tracking-[-0.05em]">
                                {previous.title}
                            </span>

                            <ArrowLeft
                                size={20}
                                className="
                                    transition-transform
                                    duration-500
                                    group-hover:-translate-x-2
                                "
                            />
                        </div>
                    </Link>
                ) : (
                    <div />
                )}

                {next ? (
                    <Link
                        href={`/work/${next.slug}`}
                        className="
                            group
                            p-8
                            transition-colors
                            hover:bg-white/[0.03]
                            md:p-[4vw]
                        "
                    >
                        <span className="technical text-[9px] text-white/30">
                            NEXT PROJECT
                        </span>

                        <div className="mt-8 flex items-center justify-between">
                            <span className="text-4xl tracking-[-0.05em]">
                                {next.title}
                            </span>

                            <ArrowRight
                                size={20}
                                className="
                                    transition-transform
                                    duration-500
                                    group-hover:translate-x-2
                                "
                            />
                        </div>
                    </Link>
                ) : null}

            </div>
        </section>
    );
}