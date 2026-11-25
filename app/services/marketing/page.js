import Link from "next/link";

export const metadata = {
    title: "Marketing Services | Meetscripts Technologies",
    description:
        "Grow your business with social media marketing, digital marketing, SEO, Google Ads and influencer marketing.",
};

const services = [
    {
        number: "01",
        title: "Social Media Marketing",
        description:
            "Build a consistent social media presence with creative content, platform management and audience-focused communication.",
        tag: "BUILD YOUR PRESENCE",
    },
    {
        number: "02",
        title: "Digital Marketing",
        description:
            "Connect your digital channels with a clear strategy designed around your brand, audience and business objectives.",
        tag: "REACH THE RIGHT PEOPLE",
    },
    {
        number: "03",
        title: "SEO",
        description:
            "Improve your website's visibility in search engines through relevant content and search-friendly optimisation.",
        tag: "BE EASIER TO FIND",
    },
    {
        number: "04",
        title: "Google Ads",
        description:
            "Reach people searching for relevant products and services through targeted Google advertising campaigns.",
        tag: "REACH WITH INTENT",
    },
    {
        number: "05",
        title: "Influencer Marketing",
        description:
            "Collaborate with relevant creators to introduce your brand to audiences through authentic content.",
        tag: "CREATE CONNECTIONS",
    },
];

const principles = [
    {
        number: "01",
        title: "Understand",
        description:
            "We learn about your business, audience, competitors and marketing objectives.",
    },
    {
        number: "02",
        title: "Build a strategy",
        description:
            "We identify relevant channels and plan how your brand should communicate with its audience.",
    },
    {
        number: "03",
        title: "Execute & improve",
        description:
            "We create and manage campaigns, review performance and identify opportunities to improve.",
    },
];

export default function MarketingPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>OUR SERVICES / MARKETING</span>
                        <span>05 — 05</span>
                    </div>

                    <div className="grid items-center gap-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                MAKE YOUR BRAND IMPOSSIBLE TO IGNORE
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
                                Attention
                                <br />
                                is earned.
                                <br />
                                <span className="text-[#df2929]">Growth is built.</span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                                We help businesses reach the right audience, communicate
                                consistently and build their digital presence through
                                thoughtful marketing strategies and execution.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#111111]"
                            >
                                DISCUSS YOUR MARKETING
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>

                        {/* MARKETING VISUAL */}
                        <div className="relative mx-auto aspect-[4/4.5] w-full max-w-lg overflow-hidden bg-[#111111] p-6 text-white sm:p-9">
                            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                                <span>MARKETING STUDIO / 005</span>
                                <span>IDEAS INTO ACTION</span>
                            </div>

                            <div className="absolute right-[-12%] top-[15%] h-64 w-64 rounded-full bg-[#df2929] sm:h-80 sm:w-80" />

                            <div className="absolute right-[8%] top-[23%] h-48 w-48 rounded-full border border-white/40 sm:h-64 sm:w-64" />

                            <div className="absolute left-[10%] top-[26%] z-10">
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                                    BE SEEN. BE REMEMBERED.
                                </span>

                                <h2 className="mt-5 text-5xl font-black leading-[0.82] tracking-[-0.08em] sm:text-7xl">
                                    THINK
                                    <br />
                                    BIG.
                                    <br />
                                    <span className="text-[#df2929]">GROW</span>
                                    <br />
                                    SMART.
                                </h2>
                            </div>

                            <div className="absolute bottom-[12%] left-6 right-6 z-10 flex items-center justify-between border-t border-white/25 pt-4 text-[8px] font-bold uppercase tracking-[0.15em] text-white/60 sm:left-9 sm:right-9">
                                <span>STRATEGY / CREATIVITY / EXECUTION</span>
                                <span>MS — 005</span>
                            </div>

                            <div className="absolute bottom-7 right-7 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#df2929] sm:bottom-9 sm:right-9">
                                ↗
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-3">
                        {["Social Media", "Search & Advertising", "Digital Growth"].map(
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
                        <span>01 — MARKETING WITH PURPOSE</span>
                        <span>RELEVANCE OVER NOISE</span>
                    </div>

                    <div className="grid gap-8 pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-16">
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                            Don't just
                            <br />
                            <span className="text-[#df2929]">reach people.</span>
                            <br />
                            Reach the right ones.
                        </h2>

                        <div className="max-w-xl">
                            <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                Effective marketing starts with understanding who you want
                                to reach and why they should choose your business.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                We bring together content, search visibility, advertising and
                                creator collaborations to help your business communicate
                                clearly across relevant digital channels.
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
                                OUR CAPABILITIES
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Marketing that connects.
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
                                className="group grid gap-5 py-8 transition-colors hover:bg-neutral-50 sm:grid-cols-[70px_0.9fr_1.1fr_40px] sm:items-center sm:gap-6 sm:px-4"
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

            {/* PROCESS */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>02 — OUR APPROACH</span>
                        <span>STRATEGY TO EXECUTION</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-16">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Marketing
                                <br />
                                <span className="text-[#df2929]">with direction.</span>
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500 sm:text-base">
                                Every business has different goals. We build our approach
                                around your audience, your offering and the results you want
                                to work towards.
                            </p>
                        </div>

                        <div className="divide-y divide-neutral-200">
                            {principles.map((item) => (
                                <div
                                    key={item.number}
                                    className="grid gap-3 py-7 sm:grid-cols-[60px_1fr] sm:gap-5"
                                >
                                    <span className="text-sm font-bold text-[#df2929]">
                                        {item.number}
                                    </span>

                                    <div>
                                        <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                        <span>READY TO GROW YOUR BRAND?</span>
                        <span>LET&apos;S MAKE A PLAN</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">
                        <div>
                            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Let's get your
                                <br />
                                brand <span className="text-[#df2929]">noticed.</span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                                Tell us about your business, audience and marketing goals.
                                Let's work out the right way to move forward.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                        >
                            TALK TO OUR TEAM
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}