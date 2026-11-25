import Link from "next/link";

export const metadata = {
    title: "Graphics Design | Meetscripts Technologies",
    description:
        "Build a memorable brand identity with logo, branding, label, packaging and social media design services.",
};

const offerings = [
    {
        number: "01",
        title: "Branding",
        description:
            "Create a consistent brand identity that communicates your business values and makes you recognisable.",
    },
    {
        number: "02",
        title: "Logo Design",
        description:
            "Get a distinctive logo that reflects your brand personality and makes a strong first impression.",
    },
    {
        number: "03",
        title: "Label Design",
        description:
            "Make your product information clear and your packaging visually appealing with thoughtful label design.",
    },
    {
        number: "04",
        title: "Packaging Design",
        description:
            "Create packaging that communicates quality, attracts attention and makes your product stand out.",
    },
    {
        number: "05",
        title: "Box Design",
        description:
            "Custom box designs developed around your product, brand identity and packaging requirements.",
    },
    {
        number: "06",
        title: "Post Design",
        description:
            "Consistent social media and promotional creatives that help your business communicate effectively.",
    },
];

export default function GraphicsDesignPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>OUR SERVICES / GRAPHICS DESIGN</span>
                        <span>01 — 05</span>
                    </div>

                    <div className="grid items-center gap-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                MAKE YOUR BRAND RECOGNISABLE
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
                                Design that
                                <br />
                                <span className="text-[#df2929]">makes you</span>
                                <br />
                                matter.
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                                We shape how your business looks and feels — from the first
                                logo impression to the packaging and content your customers
                                see every day.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#111111]"
                            >
                                START A DESIGN PROJECT
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>

                        {/* ABSTRACT DESIGN VISUAL */}
                        <div className="relative mx-auto aspect-[4/4.5] w-full max-w-lg bg-neutral-100 p-5 sm:p-8">
                            <div className="absolute right-5 top-5 text-[9px] font-bold tracking-[0.2em] text-neutral-400 sm:right-8 sm:top-8">
                                CREATIVE DEPARTMENT / 001
                            </div>

                            <div className="absolute left-[12%] top-[17%] h-[57%] w-[70%] bg-[#df2929]" />

                            <div className="absolute right-[7%] top-[9%] h-[35%] w-[32%] bg-[#111111]" />

                            <div className="absolute bottom-[13%] left-[8%] h-[30%] w-[30%] rounded-full border-[14px] border-white sm:border-[20px]" />

                            <div className="absolute left-[17%] top-[29%] text-[clamp(3rem,9vw,7.5rem)] font-black leading-[0.78] tracking-[-0.09em] text-white">
                                MAKE
                                <br />
                                A
                                <br />
                                <span className="text-[#111111]">MARK.</span>
                            </div>

                            <div className="absolute bottom-5 right-5 flex items-end justify-between gap-8 text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500 sm:bottom-8 sm:right-8 sm:text-[10px]">
                                <span>
                                    IDENTITY
                                    <br />
                                    VISUALS
                                    <br />
                                    PURPOSE
                                </span>
                                <span className="text-3xl text-[#df2929]">✳</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-3">
                        {[
                            "Brand Identity",
                            "Product Design",
                            "Marketing Creatives",
                        ].map((item, index) => (
                            <div key={item} className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#df2929]">
                                    0{index + 1}
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>01 — THE IMPORTANCE OF DESIGN</span>
                        <span>VISUAL COMMUNICATION</span>
                    </div>

                    <div className="grid gap-8 pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-16">
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                            One identity.
                            <br />
                            <span className="text-[#df2929]">Every touchpoint.</span>
                        </h2>

                        <div className="max-w-xl">
                            <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                Good design is more than decoration. It makes your brand
                                easier to recognise, your products easier to understand and
                                your message easier to remember.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                We create visual assets that work together across print and
                                digital channels, helping your business maintain a consistent
                                and professional appearance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OFFERINGS */}
            <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-end justify-between gap-5 border-b border-neutral-200 pb-7">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                OUR CAPABILITIES
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                What we create.
                            </h2>
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            06 SERVICES
                        </span>
                    </div>

                    <div className="divide-y divide-neutral-200">
                        {offerings.map((item) => (
                            <div
                                key={item.number}
                                className="group grid gap-4 py-8 transition-colors hover:bg-neutral-50 sm:grid-cols-[70px_0.8fr_1.2fr_40px] sm:items-center sm:gap-6 sm:px-4"
                            >
                                <span className="text-sm font-semibold text-[#df2929]">
                                    {item.number}
                                </span>

                                <h3 className="text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-[#df2929] sm:text-3xl">
                                    {item.title}
                                </h3>

                                <p className="max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                                    {item.description}
                                </p>

                                <span className="hidden text-2xl text-neutral-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#df2929] sm:block">
                                    ↗
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                        HAVE A BRAND OR PRODUCT IN MIND?
                    </p>

                    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Let&apos;s give it
                                <br />
                                a <span className="text-[#df2929]">stronger</span>
                                <br />
                                identity.
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                                Tell us about your brand, product or design requirement.
                                Let&apos;s create something people remember.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                        >
                            TALK TO OUR DESIGN TEAM
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}