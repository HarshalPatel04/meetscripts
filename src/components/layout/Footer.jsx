"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
    explore: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        { label: "Contact", href: "/contact" },
    ],
    services: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Meta Ads", href: "/services/meta-ads" },
        { label: "Graphic Design", href: "/services/graphic-design" },
        { label: "Social Media", href: "/services/social-media" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#090909] text-white">
            {/* TOP BORDER */}

            <div className="h-px w-full bg-white/10" />

            {/* MAIN FOOTER */}

            <div className="px-5 pb-10 pt-20 md:px-10 md:pb-12 md:pt-28">
                <div className="grid gap-16 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
                    {/* BRAND */}

                    <div>
                        <a
                            href="/"
                            className="inline-block"
                            data-cursor="link"
                        >
                            <div className="text-2xl font-bold tracking-[-0.06em]">
                                MEET
                                <span className="text-[#e02020]">
                                    SCRIPTS
                                </span>
                            </div>

                            <div className="mt-1 text-[7px] tracking-[0.35em] text-white/35">
                                TECHNOLOGIES
                            </div>
                        </a>

                        <p className="mt-8 max-w-md text-sm leading-relaxed text-white/40 md:text-base">
                            Digital experiences, creative technology and
                            growth systems for businesses that want to
                            move forward.
                        </p>

                        <a
                            href="mailto:hello@meetscripts.com"
                            data-cursor="cta"
                            className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                border-b
                border-white/20
                pb-2
                text-sm
                transition-colors
                duration-300
                hover:border-[#e02020]
                hover:text-[#e02020]
              "
                        >
                            hello@meetscripts.com

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.5}
                                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
                            />
                        </a>
                    </div>

                    {/* EXPLORE */}

                    <div>
                        <span className="technical text-[9px] tracking-[0.2em] text-[#e02020]">
                            EXPLORE
                        </span>

                        <nav className="mt-6 flex flex-col gap-3">
                            {footerLinks.explore.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    data-cursor="link"
                                    className="
                    w-fit
                    text-sm
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* SERVICES */}

                    <div>
                        <span className="technical text-[9px] tracking-[0.2em] text-[#e02020]">
                            SERVICES
                        </span>

                        <nav className="mt-6 flex flex-col gap-3">
                            {footerLinks.services.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    data-cursor="link"
                                    className="
                    w-fit
                    text-sm
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* HUGE BRAND MARK */}

            <div className="overflow-hidden border-t border-white/10 px-5 pt-10 md:px-10 md:pt-16">
                <div
                    className="
            whitespace-nowrap
            text-[22vw]
            font-bold
            leading-[0.7]
            tracking-[-0.1em]
            text-white/[0.035]
          "
                >
                    MEETSCRIPTS
                </div>
            </div>

            {/* BOTTOM BAR */}

            <div className="px-5 pb-6 pt-10 md:px-10 md:pt-14">
                <div className="flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                    <span className="technical text-[9px] tracking-[0.15em] text-white/30">
                        © {new Date().getFullYear()} MEETSCRIPTS TECHNOLOGIES
                    </span>

                    <div className="flex gap-6">
                        <a
                            href="/privacy"
                            data-cursor="link"
                            className="technical text-[9px] tracking-[0.15em] text-white/30 transition-colors hover:text-white"
                        >
                            PRIVACY
                        </a>

                        <a
                            href="/terms"
                            data-cursor="link"
                            className="technical text-[9px] tracking-[0.15em] text-white/30 transition-colors hover:text-white"
                        >
                            TERMS
                        </a>
                    </div>

                    <span className="technical text-[9px] tracking-[0.15em] text-white/30">
                        DIGITAL MOTION LAB
                    </span>
                </div>
            </div>
        </footer>
    );
}