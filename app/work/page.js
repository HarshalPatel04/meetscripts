import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Our Work | Meetscripts Technologies",
    description:
        "Explore websites, branding, product design and creative campaigns by Meetscripts Technologies.",
};

const projects = [
    {
        number: "01",
        title: "SKIK International",
        category: "WEBSITE DESIGN & DEVELOPMENT",
        description:
            "A premium digital experience for an international education and immigration consultancy.",
        image: "/services/website.png",
        href: "https://skikinternational.com",
        external: true,
        type: "website",
        background: "bg-[#e9edf5]",
    },
    {
        number: "02",
        title: "NUTSPPY",
        category: "BRANDING & PRODUCT DESIGN",
        description:
            "A distinctive visual direction for a modern watch brand, combining product aesthetics and digital presentation.",
        image: "/services/product-design.png",
        href: "/contact",
        external: false,
        type: "product",
        background: "bg-neutral-100",
    },
    {
        number: "03",
        title: "Social Media Campaigns",
        category: "GRAPHICS & CREATIVE",
        description:
            "Brand-focused social media creatives designed to communicate clearly and create visual consistency.",
        image: "/services/social-media.png",
        href: "/contact",
        external: false,
        type: "creative",
        background: "bg-neutral-100",
    },
    {
        number: "04",
        title: "Solar Business",
        category: "WEBSITE DESIGN",
        description:
            "A digital presence for a solar business, designed to present services and generate customer enquiries.",
        image: "/services/solar.jpg",
        href: "https://www.kkenterprisesolar.com",
        external: true,
        type: "website",
        background: "bg-[#edf3e9]",
    },
];

const capabilities = [
    {
        number: "01",
        title: "Graphics Design",
        items: "Branding · Logo · Packaging · Social creatives",
        href: "/services/design",
    },
    {
        number: "02",
        title: "Printing Solutions",
        items: "Brochures · Visiting cards · Banners · Custom printing",
        href: "/services/printing",
    },
    {
        number: "03",
        title: "Video Animation",
        items: "Reels · Video production · 2D · 3D · AI animation",
        href: "/services/video",
    },
    {
        number: "04",
        title: "Website",
        items: "Static · Dynamic · E-commerce",
        href: "/services/websites",
    },
    {
        number: "05",
        title: "Marketing",
        items: "Social media · SEO · Google Ads · Digital marketing",
        href: "/services/marketing",
    },
];

function ProjectCard({ project }) {
    const content = (
        <>
            <div
                className={`relative aspect-[4/3] overflow-hidden ${project.background}`}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center bg-white text-xl text-[#111111] transition-colors group-hover:bg-[#df2929] group-hover:text-white">
                    ↗
                </span>
            </div>

            <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#df2929] sm:text-[10px]">
                        {project.number} / {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] transition-colors group-hover:text-[#df2929] sm:text-3xl">
                        {project.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500">
                        {project.description}
                    </p>
                </div>

                <span className="mt-1 text-xl text-neutral-300 transition-colors group-hover:text-[#df2929]">
                    ↗
                </span>
            </div>
        </>
    );

    if (project.external) {
        return (
            <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={project.href} className="group block">
            {content}
        </Link>
    );
}

export default function WorkPage() {
    return (
        <main className="overflow-x-clip bg-white text-[#111111]">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="px-5 pb-10 pt-6 sm:px-8 sm:pb-24 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                        <span>02 — OUR WORK</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:pt-20">

                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                SELECTED WORK
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[88px]">
                                Work that
                                <br />
                                moves brands
                                <br />
                                <span className="text-[#df2929]">forward.</span>
                            </h1>
                        </div>

                        <div className="max-w-lg lg:justify-self-end">
                            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
                                Every project starts with an idea. We bring together creative
                                thinking, design and technology to turn those ideas into
                                meaningful experiences.
                            </p>

                            <a
                                href="#projects"
                                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111] pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929]"
                            >
                                EXPLORE OUR PROJECTS
                                <span className="text-xl">↓</span>
                            </a>
                        </div>

                    </div>

                    {/* HERO BOTTOM */}
                    <div className="mt-16 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-6 sm:grid-cols-4">
                        {[
                            ["01", "Digital experiences"],
                            ["02", "Brand identities"],
                            ["03", "Creative campaigns"],
                            ["04", "Business solutions"],
                        ].map(([number, label]) => (
                            <div key={number} className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#df2929]">
                                    {number}
                                </span>

                                <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-neutral-500 sm:text-[10px]">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}

            <section className="bg-neutral-50 px-5 py-10 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
                        <span>FEATURED PROJECT</span>
                        <span>01 — SPOTLIGHT</span>
                    </div>

                    <a
                        href={projects[3].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-10 grid overflow-hidden bg-white lg:grid-cols-[1.3fr_0.7fr]"
                    >

                        {/* IMAGE */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#edf3e9] lg:aspect-auto lg:min-h-[480px]">
                            <Image
                                src={projects[3].image}
                                alt="Solar business website project"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 70vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <span className="absolute left-5 top-5 bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#111111]">
                                FEATURED / WEBSITE
                            </span>

                            <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-[#df2929] text-2xl text-white transition-transform duration-300 group-hover:rotate-45">
                                ↗
                            </span>
                        </div>

                        {/* INFO */}
                        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#df2929]">
                                    WEBSITE DESIGN & DEVELOPMENT
                                </p>

                                <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                    Solar
                                    <br />
                                    business.
                                    <br />
                                    <span className="text-[#df2929]">Built for growth.</span>
                                </h2>

                                <p className="mt-7 text-sm leading-relaxed text-neutral-500 sm:text-base">
                                    A focused digital experience for a solar business, helping
                                    visitors explore its offerings and get in touch.
                                </p>
                            </div>

                            <div className="mt-12 border-t border-neutral-200 pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {["Website", "Business", "Digital Presence"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="border border-neutral-200 px-3 py-2 text-[10px] font-medium text-neutral-500"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-7 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
                                        VISIT LIVE WEBSITE
                                    </span>

                                    <span className="text-2xl text-[#df2929]">↗</span>
                                </div>
                            </div>
                        </div>

                    </a>
                </div>
            </section>

            {/* =====================================================
          PROJECT GRID
      ===================================================== */}

            <section
                id="projects"
                className="scroll-mt-10 px-5 py-10 sm:px-8 lg:px-12 lg:py-10"
            >
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-neutral-200 pb-7">
                        <div>
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                02 — THE PORTFOLIO
                            </p>

                            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                Selected projects.
                            </h2>
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                            A SELECTION OF OUR WORK
                        </span>
                    </div>

                    <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">

                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard
                                key={project.number}
                                project={project}
                            />
                        ))}

                    </div>

                    <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
                        <p className="max-w-md text-sm leading-relaxed text-neutral-500">
                            Each project is an opportunity to explore new ideas and create
                            something useful for a business.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-5 bg-[#111111] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#df2929]"
                        >
                            START YOUR PROJECT
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>

                </div>
            </section>

            {/* =====================================================
          CAPABILITIES
      ===================================================== */}

            <section className="bg-[#df2929] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/25 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
                        <span>03 — WHAT WE CAN BUILD</span>
                        <span>FIVE CREATIVE DISCIPLINES</span>
                    </div>

                    <div className="grid gap-8 pt-12 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:pt-16">
                        <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                            From the first idea
                            <br />
                            <span className="text-[#111111]">to the final result.</span>
                        </h2>

                        <p className="max-w-md text-sm leading-relaxed text-white/80 lg:justify-self-end sm:text-base">
                            Different projects need different combinations of creativity,
                            technology and communication. Explore how our services work
                            together.
                        </p>
                    </div>

                    <div className="mt-12 divide-y divide-white/25 border-y border-white/25">
                        {capabilities.map((item) => (
                            <Link
                                href={item.href}
                                key={item.number}
                                className="group grid gap-3 py-7 transition-colors hover:bg-white/[0.08] sm:grid-cols-[70px_0.8fr_1.2fr_40px] sm:items-center sm:gap-6 sm:px-4"
                            >
                                <span className="text-xs font-bold text-white/60">
                                    {item.number}
                                </span>

                                <h3 className="text-2xl font-semibold tracking-[-0.04em] transition-transform group-hover:translate-x-1 sm:text-3xl">
                                    {item.title}
                                </h3>

                                <p className="text-xs leading-relaxed text-white/75 sm:text-sm">
                                    {item.items}
                                </p>

                                <span className="hidden text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block">
                                    ↗
                                </span>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            {/* =====================================================
          CTA
      ===================================================== */}

            <section className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto max-w-7xl">

                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
                        <span>04 — YOUR PROJECT STARTS HERE</span>
                        <span>LET&apos;S MAKE IT MATTER</span>
                    </div>

                    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                HAVE A PROJECT IN MIND?
                            </p>

                            <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                                Let&apos;s make it
                                <br />
                                <span className="text-[#df2929]">worth seeing.</span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
                                Have an idea, a new business or an existing brand that needs
                                something more? Let&apos;s create the next project together.
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