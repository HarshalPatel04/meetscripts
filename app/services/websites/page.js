import Link from "next/link";

export const metadata = {
    title: "Website Design & Development | Meetscripts Technologies",
    description:
        "Professional static, dynamic and e-commerce website design and development for businesses.",
};

const offerings = [
    {
        number: "01",
        title: "Static Website",
        description:
            "Fast, focused websites for businesses that need a clear and professional online presence.",
        features: ["Business websites", "Landing pages", "Portfolio websites"],
    },
    {
        number: "02",
        title: "Dynamic Website",
        description:
            "Flexible websites with editable content and features that can grow alongside your business.",
        features: ["Content management", "Custom functionality", "Business platforms"],
    },
    {
        number: "03",
        title: "E-commerce Website",
        description:
            "Online stores designed to present products clearly and make purchasing straightforward.",
        features: ["Product catalogues", "Shopping experience", "Store management"],
    },
];

const principles = [
    {
        number: "01",
        title: "Designed for people",
        description:
            "Clear layouts and intuitive navigation help visitors find what they need.",
    },
    {
        number: "02",
        title: "Built for performance",
        description:
            "Responsive, carefully developed websites designed to load smoothly across devices.",
    },
    {
        number: "03",
        title: "Focused on your goals",
        description:
            "Every page has a purpose, whether that is generating enquiries, explaining services or selling products.",
    },
];

export default function WebsitesPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>OUR SERVICES / WEBSITE</span>
                        <span>04 — 05</span>
                    </div>

                    <div className="grid items-center gap-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                YOUR BUSINESS DESERVES A BETTER WEBSITE
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
                                Built for your
                                <br />
                                <span className="text-[#df2929]">next step.</span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                                We design and develop websites that help people understand
                                your business, explore your offering and take the next step
                                with confidence.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#111111]"
                            >
                                DISCUSS YOUR WEBSITE
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>

                        {/* WEBSITE VISUAL */}
                        <div className="relative mx-auto aspect-[4/4.5] w-full max-w-lg bg-neutral-100 p-5 sm:p-8">
                            <div className="absolute right-5 top-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:right-8 sm:top-8">
                                DIGITAL STUDIO / 004
                            </div>

                            <div className="absolute left-[9%] top-[19%] w-[82%] rotate-[-3deg] border border-neutral-200 bg-white shadow-2xl shadow-black/10">
                                <div className="flex items-center gap-1.5 border-b border-neutral-200 px-4 py-3">
                                    <span className="h-2 w-2 rounded-full bg-[#df2929]" />
                                    <span className="h-2 w-2 rounded-full bg-neutral-300" />
                                    <span className="h-2 w-2 rounded-full bg-neutral-300" />

                                    <div className="ml-3 flex-1 bg-neutral-100 px-3 py-1 text-[8px] tracking-wider text-neutral-400">
                                        YOURBRAND.COM
                                    </div>
                                </div>

                                <div className="p-5 sm:p-7">
                                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#df2929]">
                                        BUILT AROUND YOUR BUSINESS
                                    </p>

                                    <h2 className="mt-5 text-4xl font-black leading-[0.85] tracking-[-0.08em] sm:text-6xl">
                                        MAKE
                                        <br />
                                        IT <span className="text-[#df2929]">WORK.</span>
                                    </h2>

                                    <div className="mt-6 h-1 w-16 bg-[#df2929]" />

                                    <div className="mt-6 grid grid-cols-3 gap-2">
                                        <div className="h-12 bg-neutral-100 sm:h-16" />
                                        <div className="h-12 bg-neutral-200 sm:h-16" />
                                        <div className="h-12 bg-neutral-100 sm:h-16" />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-[12%] right-[9%] flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-[#df2929] text-center text-[9px] font-bold uppercase leading-tight tracking-wider text-white sm:h-24 sm:w-24">
                                DESIGN
                                <br />
                                DEVELOP
                                <br />
                                GROW
                            </div>

                            <div className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:bottom-8 sm:left-8">
                                BUILT WITH PURPOSE
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-3">
                        {["Business Websites", "Custom Platforms", "Online Stores"].map(
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
                        <span>01 — USEFUL BY DESIGN</span>
                        <span>WEBSITE DEVELOPMENT</span>
                    </div>

                    <div className="grid gap-8 pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-16">
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                            Your website
                            <br />
                            <span className="text-[#df2929]">works for you.</span>
                        </h2>

                        <div className="max-w-xl">
                            <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                Your website should do more than look good. It should explain
                                what you offer, build trust, work smoothly on mobile and make
                                it easy for visitors to contact you or buy from you.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                We focus on the right structure, clean design and practical
                                functionality to create a website that supports your business
                                goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WEBSITE TYPES */}
            <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-end justify-between gap-5 border-b border-neutral-200 pb-7">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                OUR CAPABILITIES
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                The right website.
                            </h2>
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            03 WEBSITE TYPES
                        </span>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {offerings.map((item) => (
                            <article
                                key={item.number}
                                className="group flex flex-col border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#df2929]/50 hover:shadow-xl hover:shadow-black/[0.04] sm:p-9"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-[#df2929]">
                                        {item.number}
                                    </span>

                                    <span className="text-2xl text-neutral-300 transition-colors group-hover:text-[#df2929]">
                                        ↗
                                    </span>
                                </div>

                                <h3 className="mt-12 text-3xl font-semibold tracking-[-0.05em]">
                                    {item.title}
                                </h3>

                                <p className="mt-4 min-h-20 text-sm leading-relaxed text-neutral-500">
                                    {item.description}
                                </p>

                                <div className="mt-8 border-t border-neutral-200 pt-6">
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                                        POSSIBILITIES
                                    </p>

                                    <ul className="space-y-3">
                                        {item.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-sm text-neutral-600"
                                            >
                                                <span className="h-1.5 w-1.5 bg-[#df2929]" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRINCIPLES */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                02 — OUR APPROACH
                            </p>

                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Not just a
                                <br />
                                <span className="text-[#df2929]">good-looking</span>
                                <br />
                                website.
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500 sm:text-base">
                                We think about the people using your website and what your
                                business needs them to do.
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
                        <span>READY TO BUILD YOUR ONLINE PRESENCE?</span>
                        <span>LET&apos;S GET STARTED</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">
                        <div>
                            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Let&apos;s build
                                <br />
                                a <span className="text-[#df2929]">better</span>
                                <br />
                                website.
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                                Tell us about your business and what you want your website to
                                achieve. We&apos;ll help you find the right direction.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                        >
                            START A WEBSITE PROJECT
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}