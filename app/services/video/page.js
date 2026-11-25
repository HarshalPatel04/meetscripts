import Link from "next/link";

export const metadata = {
    title: "Video Animation | Meetscripts Technologies",
    description:
        "Professional video production, reels, 2D and 3D animation, AI animation, storytelling videos and podcast shooting.",
};

const services = [
    {
        number: "01",
        title: "Reels",
        description:
            "Short-form videos designed to capture attention, communicate your message and keep your audience engaged.",
        tag: "SHORT-FORM CONTENT",
    },
    {
        number: "02",
        title: "Video Shooting",
        description:
            "Professional video shoots for businesses, products, brands, campaigns and promotional content.",
        tag: "VIDEO PRODUCTION",
    },
    {
        number: "03",
        title: "2D Animation",
        description:
            "Bring ideas to life through animated illustrations, motion graphics and engaging visual storytelling.",
        tag: "MOTION & ILLUSTRATION",
    },
    {
        number: "04",
        title: "3D Animation",
        description:
            "Create depth and visual impact with 3D product visuals, animations and creative presentations.",
        tag: "THREE-DIMENSIONAL VISUALS",
    },
    {
        number: "05",
        title: "AI Animation",
        description:
            "Explore creative AI-assisted animation and visual production for distinctive content.",
        tag: "AI-ASSISTED CREATIVITY",
    },
    {
        number: "06",
        title: "Storytelling Video",
        description:
            "Turn your business message, product journey or brand story into a compelling video.",
        tag: "STORY-LED CONTENT",
    },
    {
        number: "07",
        title: "Podcast Shooting",
        description:
            "Create video podcast content with a focus on clear communication and a professional presentation.",
        tag: "PODCAST PRODUCTION",
    },
];

const productionSteps = [
    {
        number: "01",
        title: "The idea",
        description:
            "We understand your objective, audience and the message you want to communicate.",
    },
    {
        number: "02",
        title: "Plan & produce",
        description:
            "We develop the creative direction and bring the concept to life through production or animation.",
    },
    {
        number: "03",
        title: "Edit & deliver",
        description:
            "We refine the visuals, pacing and presentation before delivering the final content.",
    },
];

export default function VideoAnimationPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>OUR SERVICES / VIDEO ANIMATION</span>
                        <span>03 — 05</span>
                    </div>

                    <div className="grid items-center gap-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                STORIES THAT MOVE PEOPLE
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
                                Motion with
                                <br />
                                <span className="text-[#df2929]">meaning.</span>
                                <br />
                                Stories with impact.
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                                From social media reels and video shoots to 2D, 3D and AI
                                animation, we create visual content that helps your business
                                tell its story and connect with people.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#111111]"
                            >
                                START A VIDEO PROJECT
                                <span className="text-xl">↗</span>
                            </Link>
                        </div>

                        {/* VIDEO-INSPIRED VISUAL */}
                        <div className="relative mx-auto aspect-[4/4.5] w-full max-w-lg overflow-hidden bg-[#111111] p-6 text-white sm:p-9">
                            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                                <span>VISUAL STUDIO / 003</span>
                                <span>REC ●</span>
                            </div>

                            <div className="absolute -right-20 top-[17%] h-64 w-64 rounded-full border border-white/15 sm:h-80 sm:w-80" />

                            <div className="absolute -right-8 top-[25%] h-48 w-48 rounded-full border border-[#df2929]/70 sm:h-64 sm:w-64" />

                            <div className="absolute left-[12%] top-[25%] flex h-[48%] w-[76%] items-center justify-center border border-white/20 bg-white/[0.04] backdrop-blur-sm">
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#df2929] pl-2 text-4xl text-white shadow-2xl shadow-red-900/30 transition-transform duration-300 hover:scale-110 sm:h-32 sm:w-32 sm:text-5xl">
                                    ▶
                                </div>

                                <span className="absolute bottom-4 left-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white/50">
                                    FRAME 001 / 024
                                </span>
                            </div>

                            <div className="absolute bottom-[13%] left-6 right-6 sm:left-9 sm:right-9">
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                    EVERY FRAME HAS A PURPOSE
                                </p>

                                <h2 className="mt-3 text-4xl font-black leading-[0.85] tracking-[-0.07em] sm:text-6xl">
                                    TELL
                                    <br />
                                    YOUR
                                    <br />
                                    <span className="text-[#df2929]">STORY.</span>
                                </h2>
                            </div>

                            <div className="absolute bottom-6 right-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:bottom-9 sm:right-9">
                                PLAY / PAUSE / REPEAT
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-3">
                        {["Video Production", "Animation", "Content Creation"].map(
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
                        <span>01 — VISUAL COMMUNICATION</span>
                        <span>MORE THAN JUST VIDEO</span>
                    </div>

                    <div className="grid gap-8 pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-16">
                        <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                            Don't just
                            <br />
                            <span className="text-[#df2929]">show your brand.</span>
                            <br />
                            Tell its story.
                        </h2>

                        <div className="max-w-xl">
                            <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                A well-made video can explain an idea, introduce a product,
                                showcase a service or create a stronger connection with your
                                audience.
                            </p>

                            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                We combine creative direction, production, editing and
                                animation to create content around your communication goals
                                and the platforms where your audience spends time.
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
                                Made to move.
                            </h2>
                        </div>

                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                            07 SERVICES
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
                        <span>IDEA TO FINAL FRAME</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-16">
                        <div>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                From concept
                                <br />
                                <span className="text-[#df2929]">to creation.</span>
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500 sm:text-base">
                                Every project starts with a purpose. Our process keeps the
                                creative direction aligned with what your business needs to
                                communicate.
                            </p>
                        </div>

                        <div className="divide-y divide-neutral-200">
                            {productionSteps.map((step) => (
                                <div
                                    key={step.number}
                                    className="grid gap-3 py-7 sm:grid-cols-[60px_1fr] sm:gap-5"
                                >
                                    <span className="text-sm font-bold text-[#df2929]">
                                        {step.number}
                                    </span>

                                    <div>
                                        <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                                            {step.description}
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
                        <span>HAVE A STORY TO TELL?</span>
                        <span>LET&apos;S CREATE IT</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">
                        <div>
                            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Make people
                                <br />
                                stop, watch
                                <br />
                                <span className="text-[#df2929]">and remember.</span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                                Tell us about your video, animation or content idea. Let&apos;s
                                bring it to life.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-8 bg-[#df2929] px-7 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                        >
                            DISCUSS YOUR IDEA
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}