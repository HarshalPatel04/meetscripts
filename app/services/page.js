import Link from "next/link";

const services = [
    {
        number: "01",
        title: "Graphics Design",
        description:
            "Build a visual identity that makes your business recognisable, memorable and consistent.",
        items: [
            "Branding",
            "Logo design",
            "Label design",
            "Packaging design",
            "Box design",
            "Social media post design",
        ],
        href: "/services/design",
        accent: "bg-red-50",
    },
    {
        number: "02",
        title: "Printing Solutions",
        description:
            "Bring your brand into the physical world with professional printing solutions.",
        items: [
            "Brochure printing",
            "Visiting cards",
            "Pamphlets",
            "Flex banners",
            "Customised printing",
        ],
        href: "/services/printing",
        accent: "bg-neutral-100",
    },
    {
        number: "03",
        title: "Video Animation",
        description:
            "Capture attention and communicate your message through engaging video content.",
        items: [
            "Reels",
            "Video shooting",
            "2D animation",
            "3D animation",
            "AI animation",
            "Storytelling videos",
            "Podcast shooting",
        ],
        href: "/services/video",
        accent: "bg-red-50",
    },
    {
        number: "04",
        title: "Website",
        description:
            "Create a strong digital presence with websites built around your business goals.",
        items: [
            "Static websites",
            "Dynamic websites",
            "E-commerce websites",
        ],
        href: "/services/websites",
        accent: "bg-neutral-100",
    },
    {
        number: "05",
        title: "Marketing",
        description:
            "Reach the right audience, strengthen your online presence and grow your business.",
        items: [
            "Social media marketing",
            "Digital marketing",
            "SEO",
            "Google Ads",
            "Influencer marketing",
        ],
        href: "/services/marketing",
        accent: "bg-red-50",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                        <span>OUR SERVICES / 01—05</span>
                    </div>

                    <div className="grid gap-12 pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                WHAT WE BRING TO THE TABLE
                            </p>

                            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[88px]">
                                More than
                                <br />
                                services.
                                <br />
                                <span className="text-[#df2929]">A creative partner.</span>
                            </h1>
                        </div>

                        <div className="max-w-md lg:justify-self-end">
                            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
                                From building your brand identity to reaching your next
                                customer, we bring creative, digital and marketing solutions
                                together under one roof.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111] pb-2 text-sm font-bold uppercase tracking-wider transition-colors hover:border-[#df2929] hover:text-[#df2929]"
                            >
                                LET&apos;S DISCUSS YOUR PROJECT
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 border-t border-neutral-200 pt-6 sm:grid-cols-3 lg:grid-cols-5">
                        {services.map((service) => (
                            <a
                                key={service.number}
                                href={`#service-${service.number}`}
                                className="group border-b border-neutral-200 py-4 pr-3 transition-colors hover:text-[#df2929] sm:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0"
                            >
                                <span className="block text-xs text-neutral-400">
                                    {service.number}
                                </span>
                                <span className="mt-2 block text-sm font-semibold">
                                    {service.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                OUR EXPERTISE
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                What we do best.
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                            Explore our five core service categories and discover how we can
                            help move your business forward.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {services.map((service) => (
                            <article
                                id={`service-${service.number}`}
                                key={service.number}
                                className="group scroll-mt-28 grid overflow-hidden border border-neutral-200 rounded-2xl bg-white transition-all duration-300 hover:border-[#df2929]/50 hover:shadow-xl hover:shadow-black/[0.04] lg:grid-cols-[0.8fr_1.2fr]"
                            >
                                {/* LEFT */}
                                <div className={`flex min-h-64 flex-col justify-between p-7 sm:p-10 ${service.accent}`}>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold tracking-[0.15em] text-neutral-500">
                                            SERVICE {service.number}
                                        </span>

                                        <span className="text-2xl text-[#df2929] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                            ↗
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="max-w-md text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-col justify-between p-7 sm:p-10">
                                    <div>
                                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                                            WHAT&apos;S INCLUDED
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {service.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-600 transition-colors group-hover:border-neutral-300 group-hover:text-[#111111] sm:px-4 sm:text-sm"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={service.href}
                                        className="mt-10 inline-flex w-fit items-center gap-3 border-b border-neutral-300 pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-all hover:border-[#df2929] hover:text-[#df2929]"
                                    >
                                        EXPLORE SERVICE
                                        <span className="text-lg">↗</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                        <span>HAVE A PROJECT IN MIND?</span>
                        <span>LET&apos;S CREATE SOMETHING GREAT</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">
                        <div>
                            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Your next idea
                                <br />
                                starts <span className="text-[#df2929]">here.</span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                                Tell us what you have in mind. Let&apos;s find the right
                                creative solution for your business.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                        >
                            START A PROJECT
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}