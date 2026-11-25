import Link from "next/link";

export const metadata = {
    title: "Printing Solutions | Meetscripts Technologies",
    description:
        "Professional brochure, visiting card, pamphlet, flex banner and customised printing solutions for your business.",
};

const services = [
    {
        number: "01",
        title: "Brochure Printing",
        description:
            "Present your products, services and company information through professionally printed brochures.",
        tag: "BUSINESS COMMUNICATION",
    },
    {
        number: "02",
        title: "Visiting Cards",
        description:
            "Make every introduction memorable with professional visiting cards that represent your brand.",
        tag: "FIRST IMPRESSIONS",
    },
    {
        number: "03",
        title: "Pamphlets",
        description:
            "Promote offers, events and business information with clear, attention-grabbing printed pamphlets.",
        tag: "PROMOTIONAL PRINT",
    },
    {
        number: "04",
        title: "Flex Banners",
        description:
            "Make your message visible with banners for storefronts, events, promotions and outdoor advertising.",
        tag: "LARGE FORMAT PRINT",
    },
    {
        number: "05",
        title: "Customised Printing",
        description:
            "Have a specific printing requirement? Discuss your idea and we'll help find the right solution.",
        tag: "MADE TO YOUR NEEDS",
    },
];

export default function PrintingPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>OUR SERVICES / PRINTING SOLUTIONS</span>
                        <span>02 — 05</span>
                    </div>

                    <div className="grid items-center gap-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                BRING YOUR BRAND TO LIFE
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
                                Great ideas.
                                <br />
                                <span className="text-[#df2929]">Made tangible.</span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                                Your brand deserves to be seen beyond a screen. We help turn
                                your designs and business ideas into high-quality printed
                                materials that people can hold, read and remember.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#111111]"
                            >
                                DISCUSS YOUR PRINT REQUIREMENT
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>

                        {/* PRINT COMPOSITION */}
                        <div className="relative mx-auto aspect-[4/4.5] w-full max-w-lg overflow-hidden bg-neutral-100 p-5 sm:p-8">
                            <div className="absolute left-7 top-7 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:left-10 sm:top-10">
                                PRINT STUDIO / 002
                            </div>

                            <div className="absolute left-[12%] top-[20%] h-[57%] w-[70%] rotate-[-8deg] border border-neutral-200 bg-white shadow-xl shadow-black/10" />

                            <div className="absolute left-[20%] top-[25%] h-[55%] w-[67%] rotate-[5deg] bg-[#df2929] p-5 text-white shadow-2xl shadow-black/20 sm:p-8">
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                                    MAKE IT VISIBLE
                                </span>

                                <div className="mt-8 text-4xl font-black leading-[0.85] tracking-[-0.08em] sm:text-6xl">
                                    YOUR
                                    <br />
                                    BRAND.
                                    <br />
                                    <span className="text-[#111111]">YOUR</span>
                                    <br />
                                    STORY.
                                </div>

                                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/30 pt-3 text-[8px] font-bold uppercase tracking-[0.15em] sm:bottom-8 sm:left-8 sm:right-8">
                                    <span>PRINT WITH PURPOSE</span>
                                    <span>MS — 002</span>
                                </div>
                            </div>

                            <div className="absolute bottom-[9%] right-[7%] flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-[#111111] text-center text-[9px] font-bold uppercase leading-tight tracking-wider text-white sm:h-24 sm:w-24">
                                MADE
                                <br />
                                TO
                                <br />
                                STAND OUT
                            </div>

                            <div className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:bottom-8 sm:left-8">
                                DESIGN / PRINT / DELIVER
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-3">
                        {["Business Materials", "Promotional Prints", "Custom Requirements"].map(
                            (item, index) => (
                                <div key={item} className="flex items-center gap-3">
                                    <span className="text-xs font-bold text-[#df2929]">
                                        0{index + 1}
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                                        {item}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>01 — WHY PRINT MATTERS</span>
                        <span>BEYOND THE SCREEN</span>
                    </div>

                    <div className="grid gap-8 pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-16">
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                            Your brand,
                            <br />
                            <span className="text-[#df2929]">in the real world.</span>
                        </h2>

                        <div className="max-w-xl">
                            <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                Printed materials help your business communicate in a direct
                                and lasting way.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                Whether you need visiting cards for meetings, brochures for
                                presentations, pamphlets for promotions or banners for
                                visibility, we help bring your requirements together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-end justify-between gap-5 border-b border-neutral-200 pb-7">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                WHAT WE OFFER
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Print that works.
                            </h2>
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            05 SERVICES
                        </span>
                    </div>

                    <div className="divide-y divide-neutral-200">
                        {services.map((service) => (
                            <article
                                key={service.number}
                                className="group grid gap-5 py-9 transition-colors hover:bg-neutral-50 sm:grid-cols-[70px_0.9fr_1.1fr_40px] sm:items-center sm:gap-6 sm:px-4"
                            >
                                <span className="text-sm font-semibold text-[#df2929]">
                                    {service.number}
                                </span>

                                <div>
                                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                                        {service.tag}
                                    </span>

                                    <h3 className="text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-[#df2929] sm:text-3xl">
                                        {service.title}
                                    </h3>
                                </div>

                                <p className="max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                                    {service.description}
                                </p>

                                <span className="hidden text-2xl text-neutral-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#df2929] sm:block">
                                    ↗
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CUSTOM PRINT CTA */}
            <section className="bg-[#df2929] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/25 pb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                        <span>HAVE SOMETHING SPECIFIC IN MIND?</span>
                        <span>LET&apos;S TALK PRINT</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">
                        <div>
                            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Your idea.
                                <br />
                                <span className="text-[#111111]">Our print.</span>
                                <br />
                                One result.
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                                From everyday business stationery to custom printing
                                requirements, tell us what you need.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#111111] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                        >
                            GET A PRINT QUOTE
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}