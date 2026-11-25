import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
    { label: "Graphics Design", href: "/services/design" },
    { label: "Printing Solutions", href: "/services/printing" },
    { label: "Video Animation", href: "/services/video" },
    { label: "Website", href: "/services/websites" },
    { label: "Marketing", href: "/services/marketing" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Our Process", href: "/process" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
                {/* MAIN FOOTER */}
                <div className="grid gap-14 py-10 sm:py-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:gap-12 lg:py-10">
                    {/* BRAND */}
                    <div>
                        <Link href="/" className="inline-flex flex-col leading-none">
                            <span className="text-3xl font-black tracking-[-0.07em] sm:text-4xl">
                                MEETSCRIPTS<span className="text-[#df2929]">.</span>
                            </span>

                            <span className="mt-2 text-[10px] font-semibold tracking-[0.32em] text-white/50">
                                TECHNOLOGIES
                            </span>
                        </Link>

                        <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/55 sm:text-base">
                            A creative partner for businesses looking to build a stronger
                            brand, create meaningful experiences and grow their presence.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-5 border-b border-[#df2929] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#df2929]"
                        >
                            LET&apos;S CREATE SOMETHING
                            <ArrowUpRight size={17} />
                        </Link>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                            SERVICES
                        </h3>

                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#df2929]"
                                    >
                                        {service.label}
                                        <span className="text-xs opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                                            ↗
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                            COMPANY
                        </h3>

                        <ul className="space-y-4">
                            {companyLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#df2929]"
                                    >
                                        {item.label}
                                        <span className="text-xs opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                                            ↗
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                            GET IN TOUCH
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                                    EMAIL
                                </p>

                                <a
                                    href="mailto:ms@meetscriptstech.com"
                                    className="break-all text-sm text-white/75 transition-colors hover:text-[#df2929]"
                                >
                                    ms@meetscriptstech.com
                                </a>
                            </div>

                            <div>
                                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                                    PHONE
                                </p>

                                <a
                                    href="tel:+919854090395"
                                    className="text-sm text-white/75 transition-colors hover:text-[#df2929]"
                                >
                                    +91 98540 90395
                                </a>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#df2929] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                            >
                                CONTACT OUR TEAM
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BRAND STATEMENT */}
                <div className="border-t border-white/10 py-8">
                    <p className="text-center text-[clamp(2.5rem,9vw,8rem)] font-black leading-none tracking-[-0.08em] text-white/[0.07]">
                        MEETSCRIPTS<span className="text-[#df2929]">.</span>
                    </p>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] font-medium uppercase tracking-[0.12em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} MEETSCRIPTS TECHNOLOGIES. ALL RIGHTS
                        RESERVED.
                    </p>

                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="/"
                            className="transition-colors hover:text-white"
                        >
                            HOME
                        </Link>

                        <Link
                            href="/services"
                            className="transition-colors hover:text-white"
                        >
                            SERVICES
                        </Link>

                        <Link
                            href="/contact"
                            className="transition-colors hover:text-white"
                        >
                            CONTACT
                        </Link>
                    </div>

                    <span>MADE WITH PURPOSE.</span>
                </div>
            </div>
        </footer>
    );
}