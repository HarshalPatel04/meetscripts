import Link from "next/link";

export const metadata = {
    title: "Our Process | Meetscripts Technologies",
    description:
        "Discover how Meetscripts Technologies approaches projects through discovery, planning, creation, refinement and launch.",
};

const steps = [
    {
        number: "01",
        eyebrow: "START WITH WHY",
        title: "Discover",
        description:
            "We start by understanding your business, audience, goals and what you actually need. No assumptions, no jumping straight into execution.",
        details: [
            "Understand your business",
            "Identify your audience",
            "Discuss your goals",
            "Define requirements",
        ],
        label: "UNDERSTAND",
    },
    {
        number: "02",
        eyebrow: "TURN IDEAS INTO DIRECTION",
        title: "Plan",
        description:
            "We define the direction, structure and priorities before building. This keeps the project focused and prevents unnecessary work later.",
        details: [
            "Creative direction",
            "Project structure",
            "Strategy and planning",
            "Set clear priorities",
        ],
        label: "DEFINE",
    },
    {
        number: "03",
        eyebrow: "MAKE IT REAL",
        title: "Create",
        description:
            "Design, development and creative production come together to turn the approved direction into something real.",
        details: [
            "Design and development",
            "Content creation",
            "Creative production",
            "Build the solution",
        ],
        label: "BUILD",
    },
    {
        number: "04",
        eyebrow: "MAKE IT BETTER",
        title: "Refine",
        description:
            "We review the work, improve the details and make sure everything works together before it goes live.",
        details: [
            "Review the output",
            "Gather feedback",
            "Improve the details",
            "Final quality checks",
        ],
        label: "IMPROVE",
    },
    {
        number: "05",
        eyebrow: "PUT IT TO WORK",
        title: "Launch",
        description:
            "Once everything is ready, we launch and help turn the finished work into something your business can actually use.",
        details: [
            "Final delivery",
            "Launch preparation",
            "Implementation",
            "Ready for the real world",
        ],
        label: "LAUNCH",
    },
];

const principles = [
    {
        number: "01",
        title: "One clear direction.",
        description:
            "We establish the core direction before execution begins.",
    },
    {
        number: "02",
        title: "Practical decisions.",
        description:
            "We focus on decisions that improve the actual business outcome.",
    },
    {
        number: "03",
        title: "Work that keeps moving.",
        description:
            "Less unnecessary back-and-forth. More progress toward launch.",
    },
];

export default function ProcessPage() {
    return (
        <main className="bg-white text-[#111111]">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pb-10 sm:pt-6 lg:px-12 lg:pb-10">

                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                        <span>04 — OUR PROCESS</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:pt-20">

                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                HOW WE WORK
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[88px]">
                                Simple process.
                                <br />
                                <span className="text-[#df2929]">
                                    Serious work.
                                </span>
                            </h1>
                        </div>

                        <div className="max-w-lg lg:justify-self-end">

                            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
                                No unnecessary layers. We keep projects focused,
                                collaborative and clear from the first conversation to the
                                final launch.
                            </p>

                            <a
                                href="#process-steps"
                                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111] pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929]"
                            >
                                EXPLORE OUR PROCESS
                                <span className="text-xl">↓</span>
                            </a>

                        </div>

                    </div>

                    {/* HERO BOTTOM */}
                    <div className="mt-16 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-5">

                        {steps.map((step) => (
                            <div key={step.number} className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#df2929]">
                                    {step.number}
                                </span>

                                <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-neutral-500">
                                    {step.title}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* =====================================================
          PROCESS STEPS
      ===================================================== */}

            <section
                id="process-steps"
                className="scroll-mt-10 bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-end justify-between gap-5 border-b border-neutral-200 pb-7">

                        <div>
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                01 — THE PROCESS
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                Five steps. One direction.
                            </h2>
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                            FROM IDEA TO LAUNCH
                        </span>

                    </div>

                    {/* TIMELINE */}
                    <div className="mt-12">

                        {steps.map((step, index) => (
                            <article
                                key={step.number}
                                className="group relative grid gap-6 border-b border-neutral-200 py-10 transition-colors hover:bg-white sm:grid-cols-[80px_1fr_0.8fr] sm:gap-10 sm:px-5 lg:grid-cols-[100px_1.1fr_0.9fr_100px] lg:items-center lg:py-14"
                            >

                                {/* NUMBER */}
                                <div className="flex items-center gap-3 lg:block">
                                    <span className="text-sm font-bold text-[#df2929] lg:text-base">
                                        {step.number}
                                    </span>

                                    <span className="h-px w-8 bg-neutral-300 lg:hidden" />
                                </div>

                                {/* MAIN TITLE */}
                                <div>

                                    <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
                                        {step.eyebrow}
                                    </p>

                                    <h3 className="text-4xl font-semibold leading-none tracking-[-0.06em] transition-colors group-hover:text-[#df2929] sm:text-5xl lg:text-6xl">
                                        {step.title}
                                        <span className="ml-2 inline-block text-2xl font-normal text-[#df2929] transition-transform group-hover:translate-x-2">
                                            ↗
                                        </span>
                                    </h3>

                                </div>

                                {/* DESCRIPTION AND DETAILS */}
                                <div>

                                    <p className="max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                                        {step.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                                        {step.details.map((detail) => (
                                            <span
                                                key={detail}
                                                className="flex items-center gap-2 text-[10px] font-medium text-neutral-500 sm:text-xs"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#df2929]" />
                                                {detail}
                                            </span>
                                        ))}
                                    </div>

                                </div>

                                {/* SIDE NUMBER */}
                                <div className="hidden flex-col items-end lg:flex">
                                    <span className="text-5xl font-semibold tracking-[-0.08em] text-neutral-200 transition-colors group-hover:text-[#df2929]">
                                        {step.number}
                                    </span>

                                    <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                                        {step.label}
                                    </span>
                                </div>

                            </article>
                        ))}

                    </div>

                    {/* TIMELINE FOOTER */}
                    <div className="mt-8 flex items-center justify-between gap-5">

                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                            EVERY DETAIL HAS A PURPOSE.
                        </span>

                        <span className="text-xs font-semibold text-[#df2929]">
                            01 — 05
                        </span>

                    </div>

                </div>
            </section>

            {/* =====================================================
          COLLABORATION
      ===================================================== */}

            <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-10">

                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
                        <span>02 — COLLABORATION</span>
                        <span>BUILT TOGETHER</span>
                    </div>

                    <div className="grid gap-12 pt-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:pt-20">

                        {/* LEFT */}
                        <div>

                            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                GOOD WORK IS COLLABORATIVE
                            </p>

                            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                                Built
                                <br />
                                <span className="text-[#df2929]">
                                    together.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
                                The best work does not happen in isolation. You know your
                                business better than anyone, so your feedback is part of
                                every important decision.
                            </p>

                        </div>

                        {/* RIGHT */}
                        <div>

                            <p className="text-lg leading-relaxed text-neutral-700">
                                We keep communication direct, explain our decisions and
                                make sure you always know what is happening next.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                From the first discussion to final delivery, we believe
                                working together helps create a result that genuinely fits
                                your business.
                            </p>

                            {/* COLLABORATION POINTS */}
                            <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">

                                {[
                                    "Clear communication",
                                    "Regular feedback",
                                    "Focused execution",
                                ].map((point, index) => (
                                    <div
                                        key={point}
                                        className="flex items-center justify-between py-5"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-bold text-[#df2929]">
                                                0{index + 1}
                                            </span>

                                            <span className="text-sm font-semibold">
                                                {point}
                                            </span>
                                        </div>

                                        <span className="text-lg text-neutral-300">
                                            ↗
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
          WORKING MODEL
      ===================================================== */}

            <section className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">

                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                        <span>03 — WHAT TO EXPECT</span>
                        <span>OUR WORKING MODEL</span>
                    </div>

                    <div className="grid gap-8 pt-12 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:pt-16">

                        <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                            Clear thinking.
                            <br />
                            <span className="text-[#df2929]">
                                Better execution.
                            </span>
                        </h2>

                        <p className="max-w-md text-sm leading-relaxed text-white/50 sm:text-base lg:justify-self-end">
                            We keep the way we work straightforward, with a focus on
                            understanding the requirement and making meaningful progress.
                        </p>

                    </div>

                    <div className="mt-14 grid gap-0 border-y border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-white/15">

                        {principles.map((item) => (
                            <article
                                key={item.number}
                                className="group border-b border-white/15 py-9 sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
                            >

                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#df2929]">
                                        {item.number}
                                    </span>

                                    <span className="text-xl text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#df2929]">
                                        ↗
                                    </span>
                                </div>

                                <h3 className="mt-12 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                                    {item.title}
                                </h3>

                                <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
                                    {item.description}
                                </p>

                            </article>
                        ))}

                    </div>

                </div>
            </section>

            {/* =====================================================
          CTA
      ===================================================== */}

            <section className="bg-[#df2929] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">

                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/25 pb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
                        <span>04 — YOUR NEXT STEP</span>
                        <span>READY WHEN YOU ARE</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">

                        <div>

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                                HAVE AN IDEA, A GOAL OR A PROJECT?
                            </p>

                            <h2 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                                Let&apos;s start
                                <br />
                                <span className="text-[#111111]">
                                    with an idea.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
                                Tell us what you are planning. We&apos;ll understand your
                                requirements and work out the right way forward.
                            </p>

                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#111111] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
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