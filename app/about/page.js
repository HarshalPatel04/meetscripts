import Link from "next/link";

export const metadata = {
    title: "About Us | Meetscripts Technologies",
    description:
        "Meet Meetscripts Technologies — your creative partner for graphics design, printing, video production, websites and marketing.",
};

const capabilities = [
    {
        number: "01",
        title: "Graphics Design",
        description: "Create a distinctive and consistent visual identity.",
    },
    {
        number: "02",
        title: "Printing Solutions",
        description: "Bring your brand into the physical world.",
    },
    {
        number: "03",
        title: "Video Animation",
        description: "Tell your story through engaging visual content.",
    },
    {
        number: "04",
        title: "Website",
        description: "Build a strong and useful digital presence.",
    },
    {
        number: "05",
        title: "Marketing",
        description: "Connect with the right audience and grow your reach.",
    },
];

const values = [
    {
        number: "01",
        title: "Think creatively",
        description:
            "We look beyond the obvious to find ideas and approaches that help businesses communicate differently.",
    },
    {
        number: "02",
        title: "Keep it purposeful",
        description:
            "Every design, campaign and digital experience should have a clear reason behind it.",
    },
    {
        number: "03",
        title: "Focus on the details",
        description:
            "From the first concept to the final delivery, thoughtful execution makes the difference.",
    },
    {
        number: "04",
        title: "Work collaboratively",
        description:
            "We believe good outcomes come from understanding your business and working towards a shared goal.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>ABOUT MEETSCRIPTS</span>
                        <span>CREATIVITY WITH PURPOSE</span>
                    </div>

                    <div className="grid gap-12 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                A CREATIVE PARTNER FOR YOUR BUSINESS
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[88px]">
                                We make
                                <br />
                                ideas <span className="text-[#df2929]">matter.</span>
                            </h1>
                        </div>

                        <div className="max-w-lg lg:justify-self-end">
                            <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                Meetscripts Technologies brings creative thinking, design,
                                digital solutions and marketing together to help businesses
                                move forward.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                We work across different creative disciplines, helping
                                businesses present themselves professionally, communicate
                                their value and connect with their audience.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111] pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929]"
                            >
                                LET&apos;S WORK TOGETHER
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>
                    </div>

                    {/* BRAND STATEMENT */}
                    <div className="relative mt-16 overflow-hidden bg-[#111111] px-7 py-12 text-white sm:px-12 sm:py-10 lg:mt-10 lg:px-16 lg:py-10">
                        <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 sm:h-96 sm:w-96" />
                        <div className="absolute -right-5 -top-12 h-48 w-48 rounded-full border border-[#df2929]/50 sm:h-72 sm:w-72" />

                        <div className="relative z-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                                    OUR BELIEF
                                </span>

                                <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                                    Good work gets
                                    <br />
                                    noticed. Great work
                                    <br />
                                    <span className="text-[#df2929]">gets remembered.</span>
                                </h2>
                            </div>

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                                MEETSCRIPTS / ESTABLISH YOUR PRESENCE
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>01 — WHO WE ARE</span>
                        <span>BEHIND THE WORK</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-16">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Different skills.
                                <br />
                                <span className="text-[#df2929]">One direction.</span>
                            </h2>
                        </div>

                        <div className="max-w-xl">
                            <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                Every business has a story to tell and a reason to stand out.
                                Our role is to help bring that story to life through the right
                                creative and digital solutions.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                Instead of treating design, printing, video, websites and
                                marketing as completely separate activities, we bring them
                                together under one creative partner. This helps keep your
                                brand communication more connected and consistent.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                Whether you are starting a new business, introducing a
                                product or strengthening an existing brand, we focus on
                                understanding what you need and creating work that supports
                                your objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-end justify-between gap-5 border-b border-neutral-200 pb-7">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                02 — WHAT WE BRING TOGETHER
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Five creative pillars.
                            </h2>
                        </div>

                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 border-b border-neutral-300 pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929]"
                        >
                            EXPLORE SERVICES
                            <span className="text-lg">↗</span>
                        </Link>
                    </div>

                    <div className="mt-8 divide-y divide-neutral-200">
                        {capabilities.map((item) => (
                            <div
                                key={item.number}
                                className="group grid gap-3 py-7 transition-colors hover:bg-neutral-50 sm:grid-cols-[70px_0.8fr_1.2fr_40px] sm:items-center sm:gap-6 sm:px-4"
                            >
                                <span className="text-sm font-bold text-[#df2929]">
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

            {/* VALUES */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>03 — HOW WE THINK</span>
                        <span>THE WAY WE APPROACH OUR WORK</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-16">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Our work
                                <br />
                                <span className="text-[#df2929]">has a purpose.</span>
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500 sm:text-base">
                                These principles guide how we approach projects, solve
                                problems and work with businesses.
                            </p>
                        </div>

                        <div className="grid gap-x-8 sm:grid-cols-2">
                            {values.map((value) => (
                                <article
                                    key={value.number}
                                    className="border-t border-neutral-200 py-7"
                                >
                                    <span className="text-xs font-bold text-[#df2929]">
                                        {value.number}
                                    </span>

                                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                                        {value.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>04 — WORKING TOGETHER</span>
                        <span>A CLEARER WAY FORWARD</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-16">
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                            From your idea
                            <br />
                            <span className="text-[#df2929]">to the outcome.</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#df2929] text-sm font-bold text-white">
                                    01
                                </span>

                                <div>
                                    <h3 className="text-xl font-semibold">We listen</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                        We understand your business, requirements and what you
                                        want to achieve.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#111111] text-sm font-bold text-white">
                                    02
                                </span>

                                <div>
                                    <h3 className="text-xl font-semibold">We create</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                        We plan the right direction and turn your requirements
                                        into creative solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#111111] text-sm font-bold text-white">
                                    03
                                </span>

                                <div>
                                    <h3 className="text-xl font-semibold">We deliver</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                        We refine the work and deliver it with attention to the
                                        details that matter.
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/process"
                                className="inline-flex items-center gap-4 border-b border-[#111111] pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929]"
                            >
                                EXPLORE OUR PROCESS
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
                        <span>THIS COULD BE THE START OF SOMETHING GOOD</span>
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">
                        <div>
                            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Have a vision?
                                <br />
                                <span className="text-[#df2929]">Let's build it.</span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                                Tell us where you want to go. We&apos;ll help you figure out
                                how to get there.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                        >
                            GET IN TOUCH
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}