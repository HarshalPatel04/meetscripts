import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServiceNavigation({
    previous,
    next,
}) {
    return (
        <section className="bg-[#090909] px-5 pb-20 text-white md:px-10 md:pb-28">
            <div className="mx-auto grid max-w-[1450px] gap-px bg-white/10 md:grid-cols-2">
                {previous ? (
                    <Link
                        href={`/services/${previous.slug}`}
                        data-cursor="link"
                        className="group bg-[#090909] p-7 transition-colors duration-500 hover:bg-white/[0.03] md:p-10"
                    >
                        <span className="technical text-[9px] tracking-[0.2em] text-white/30">
                            PREVIOUS SERVICE
                        </span>

                        <div className="mt-8 flex items-end justify-between gap-5">
                            <h3 className="text-3xl font-bold tracking-[-0.05em] md:text-5xl">
                                {previous.shortTitle}
                                <span className="text-[#e02020]">
                                    .
                                </span>
                            </h3>

                            <ArrowLeft
                                size={22}
                                strokeWidth={1.5}
                                className="text-[#e02020] transition-transform duration-500 group-hover:-translate-x-2"
                            />
                        </div>
                    </Link>
                ) : (
                    <div className="hidden md:block" />
                )}

                {next ? (
                    <Link
                        href={`/services/${next.slug}`}
                        data-cursor="link"
                        className="group bg-[#090909] p-7 text-right transition-colors duration-500 hover:bg-white/[0.03] md:p-10"
                    >
                        <span className="technical text-[9px] tracking-[0.2em] text-white/30">
                            NEXT SERVICE
                        </span>

                        <div className="mt-8 flex items-end justify-between gap-5">
                            <h3 className="flex-1 text-3xl font-bold tracking-[-0.05em] md:text-5xl">
                                {next.shortTitle}
                                <span className="text-[#e02020]">
                                    .
                                </span>
                            </h3>

                            <ArrowRight
                                size={22}
                                strokeWidth={1.5}
                                className="text-[#e02020] transition-transform duration-500 group-hover:translate-x-2"
                            />
                        </div>
                    </Link>
                ) : null}
            </div>
        </section>
    );
}