import { ArrowUpRight } from "lucide-react";

const links = [
    {
        label: "EMAIL",
        value: "hello@meetscripts.com",
        href: "mailto:hello@meetscripts.com",
    },
    {
        label: "INSTAGRAM",
        value: "@meetscripts",
        href: "#",
    },
    {
        label: "LINKEDIN",
        value: "MEETSCRIPTS TECHNOLOGIES",
        href: "#",
    },
];

export default function ContactInfo() {
    return (
        <section
            className="
                bg-[#090909]
                px-5
                py-24
                text-white
                md:px-[6vw]
                md:py-[9vw]
            "
        >
            <div className="mx-auto max-w-[1500px]">

                <div className="border-t border-white/10">

                    {links.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="
                                group
                                grid
                                gap-3
                                border-b
                                border-white/10
                                py-7
                                transition-colors
                                hover:bg-white/[0.02]
                                md:grid-cols-12
                                md:items-center
                                md:py-8
                            "
                        >
                            <span className="technical text-[9px] tracking-[0.16em] text-white/30 md:col-span-3">
                                0{index + 1} — {link.label}
                            </span>

                            <span
                                className="
                                    text-xl
                                    tracking-[-0.03em]
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#e02020]
                                    md:col-span-8
                                    md:text-3xl
                                "
                            >
                                {link.value}
                            </span>

                            <span className="md:col-span-1 md:flex md:justify-end">
                                <ArrowUpRight
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />
                            </span>
                        </a>
                    ))}

                </div>

                <div className="mt-20 md:mt-[8vw]">
                    <p className="text-[12vw] leading-[0.8] tracking-[-0.08em] text-white/10 md:text-[9vw]">
                        MEETSCRIPTS
                    </p>
                </div>

            </div>
        </section>
    );
}