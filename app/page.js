import Link from "next/link";
import Image from "next/image";
import ServicesScrollSection from "@/components/ServicesScrollSection";

export const metadata = {
  title: "Meetscripts Technologies | Make It Matter",
  description:
    "Graphics design, printing solutions, video animation, website development and marketing for growing businesses.",
};

const categories = [
  {
    number: "01",
    title: "Graphics Design",
    description: "Build a visual identity people recognise and remember.",
    services: ["Branding", "Logo design", "Label design", "Packaging", "Box design", "Post design"],
    href: "/services/design",
  },
  {
    number: "02",
    title: "Printing Solutions",
    description: "Take your brand from screen to print.",
    services: ["Brochure printing", "Visiting cards", "Pamphlets", "Flex banners", "Customised printing"],
    href: "/services/printing",
  },
  {
    number: "03",
    title: "Video Animation",
    description: "Tell stronger stories through video, motion and animation.",
    services: ["Reels", "Video shooting", "2D animation", "3D animation", "AI animation", "Storytelling", "Podcast shooting"],
    href: "/services/video",
  },
  {
    number: "04",
    title: "Website",
    description: "Build a useful and credible online home for your business.",
    services: ["Static websites", "Dynamic websites", "E-commerce websites"],
    href: "/services/websites",
  },
  {
    number: "05",
    title: "Marketing",
    description: "Reach the right people and turn attention into opportunity.",
    services: ["Social media marketing", "Digital marketing", "SEO", "Google Ads", "Influencer marketing"],
    href: "/services/marketing",
  },
];

const projects = [
  {
    image: "/work/work-1.jpg",
    title: "Digital experiences",
    type: "WEBSITE",
  },
  {
    image: "/work/work-2.jpg",
    title: "Brand & product visuals",
    type: "CREATIVE",
  },
  {
    image: "/work/work-3.jpg",
    title: "Campaign creative",
    type: "CAMPAIGN",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your business, your audience and the outcome you want.",
  },
  {
    number: "02",
    title: "Plan & create",
    description:
      "We shape the direction, develop the creative and keep the process collaborative.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We refine the details and deliver work ready for the real world.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#111111]">
      {/* HERO */}
      <section className="px-5 pb-6 pt-10 sm:px-8 sm:pb-6 lg:px-12 lg:pt-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 sm:text-[10px]">
            <span>MEETSCRIPTS TECHNOLOGIES</span>
            <span>DESIGN · PRINT · VIDEO · WEB · MARKETING</span>
          </div>

          <div className="grid gap-12 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:pt-14">
            {/* POSTER */}
            <div className="mx-auto w-full max-w-xl">
              <div className="mb-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                <span>CREATIVE THINKING</span>
                <span>01 / 05</span>
              </div>

              <div className="relative aspect-[4/4.5] overflow-hidden bg-neutral-100 p-6 sm:p-9">
                <div className="absolute right-0 top-0 h-[36%] w-[38%] bg-[#df2929]" />
                <div className="absolute bottom-0 left-0 h-[28%] w-[28%] bg-[#111111]" />
                <div className="absolute bottom-[17%] right-[12%] h-[38%] w-[38%] rounded-full border-[18px] border-white sm:border-[26px]" />

                <div className="absolute left-[8%] top-[17%] z-10">
                  <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-500 sm:text-xs">
                    IDEAS INTO IMPACT
                  </p>

                  <h1 className="text-[clamp(4.5rem,12vw,9rem)] font-black leading-[0.76] tracking-[-0.1em] text-[#111111]">
                    MAKE
                    <br />
                    IT
                    <br />
                    <span className="text-[#df2929]">MATTER.</span>
                  </h1>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-[8px] font-bold uppercase tracking-[0.15em] text-neutral-500 sm:bottom-9 sm:left-9 sm:right-9 sm:text-[10px]">
                  <span>
                    THINK DIFFERENTLY.
                    <br />
                    BUILD WITH PURPOSE.
                  </span>
                  <span className="text-3xl text-[#df2929]">✳</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                <span>DESIGN THAT CONNECTS.</span>
                <span>↘</span>
              </div>
            </div>

            {/* PROJECT COLLAGE */}
            <div className="w-full">
              {/* HEADER */}
              <div className="mb-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                <span>SELECTED PROJECTS</span>
                <span>02 / 05</span>
              </div>

              {/* COLLAGE STAGE */}
              <div className="relative mx-auto h-[390px] w-full max-w-[620px] sm:h-[450px] lg:h-[500px]">

                {/* SUBTLE BACKGROUND DECORATION */}
                <div className="pointer-events-none absolute left-[13%] top-[7%] h-[75%] w-[72%] rounded-full border border-neutral-200/70" />

                <div className="pointer-events-none absolute left-[23%] top-[17%] h-[55%] w-[52%] rounded-full border border-neutral-200/60" />

                <span className="absolute bottom-[4%] left-[2%] text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  CREATIVE WORK / 2026
                </span>

                {/* PROJECT 01 — DIGITAL */}
                <Link
                  href="/work"
                  className="group absolute left-[3%] top-[7%] z-10 w-[43%] -rotate-[7deg] border-[5px] border-white bg-white p-1.5 shadow-lg shadow-black/10 transition-all duration-500 hover:z-40 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.03] sm:border-[6px]"
                >
                  <div className="relative aspect-[0.82/1] overflow-hidden bg-neutral-100">
                    <Image
                      src={projects[1].image}
                      alt={projects[1].title}
                      fill
                      priority
                      sizes="(max-width: 768px) 43vw, 260px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between px-1 pb-1 pt-2 text-[7px] font-black uppercase tracking-[0.1em] text-[#df2929] sm:text-[9px]">
                    <span>01 / DIGITAL</span>
                    <span className="text-sm">↗</span>
                  </div>
                </Link>

                {/* PROJECT 02 — CREATIVE */}
                <Link
                  href="/work"
                  className="group absolute right-[5%] top-[5%] z-30 w-[25%] rotate-[4deg] border-[5px] border-white bg-white p-1.5 shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.04] sm:border-[6px]"
                >
                  <div className="relative aspect-[0.62/1] overflow-hidden bg-neutral-100">
                    <Image
                      src={projects[2].image}
                      alt={projects[2].title}
                      fill
                      sizes="(max-width: 768px) 25vw, 155px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between px-1 pb-1 pt-2 text-[6px] font-black uppercase tracking-[0.06em] text-[#df2929] sm:text-[8px]">
                    <span>02 / CREATIVE</span>
                    <span>↗</span>
                  </div>
                </Link>

                {/* PROJECT 03 — CAMPAIGN */}
                <Link
                  href="/work"
                  className="group absolute bottom-[9%] left-[24%] z-20 w-[68%] border-[5px] border-white bg-white p-1.5 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 sm:border-[6px]"
                >
                  <div className="relative aspect-[1.65/1] overflow-hidden bg-neutral-100">
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      sizes="(max-width: 768px) 68vw, 410px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between px-1 pb-1 pt-2 text-[7px] font-black uppercase tracking-[0.1em] text-[#df2929] sm:text-[9px]">
                    <span>03 / CAMPAIGN</span>
                    <span className="text-sm">↗</span>
                  </div>
                </Link>

                {/* DECORATIVE PLUS */}
                <span className="absolute bottom-[10%] right-[3%] z-10 text-4xl font-light text-[#df2929]">
                  +
                </span>
              </div>

              {/* FOOTER */}
              <div className="mt-3 flex items-center justify-between gap-3 text-[8px] font-bold uppercase tracking-[0.12em] text-neutral-400 sm:text-[9px]">
                <span>CREATIVE WORK, MADE WITH PURPOSE.</span>

                <Link
                  href="/work"
                  className="shrink-0 text-[#111111] transition-colors hover:text-[#df2929]"
                >
                  VIEW ALL WORK ↗
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500 sm:text-[10px]">
            <span>ONE CREATIVE PARTNER. FIVE WAYS TO GROW.</span>
            <a
              href="#services"
              className="transition-colors hover:text-[#df2929]"
            >
              SCROLL TO EXPLORE ↓
            </a>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
            <span>01 — WHO WE ARE</span>
            <span>IDEAS MADE USEFUL</span>
          </div>

          <div className="grid gap-10 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:pt-16">
            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
              Creative work.
              <br />
              <span className="text-[#df2929]">Real-world impact.</span>
            </h2>

            <div className="max-w-xl">
              <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                We help businesses look their best, communicate clearly and
                grow with confidence.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
                From the first sketch of a logo to a printed brochure, a
                powerful video, a business website or a complete marketing
                campaign, we bring the right creative services together.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111] pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929]"
              >
                GET TO KNOW US
                <span className="text-xl">↗</span>
              </Link>
            </div>
          </div>

          {/* BOTTOM STATS STRIP */}
          <div className="mt-16 grid grid-cols-3 border-y border-neutral-300">
            {[
              ["5+", "Years of experience"],
              ["100+", "Projects delivered"],
              ["05", "Creative disciplines"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-b border-neutral-300 px-4 py-7 sm:border-b-0 sm:border-r sm:px-7 sm:py-9 sm:last:border-r-0"
              >
                <p className="text-4xl font-semibold tracking-[-0.06em] text-[#df2929] sm:text-5xl">
                  {value}
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.13em] text-neutral-500 sm:text-[10px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesScrollSection />

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-20 bg-[#df2929] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/25 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-[10px]">
            <span>02 — WHAT WE DO</span>
            <span>FIVE CORE CATEGORIES</span>
          </div>

          <div className="grid gap-8 pt-12 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:pt-16">
            <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
              Everything your brand needs.
              <br />
              <span className="text-[#111111]">All in one place.</span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base lg:justify-self-end">
              Choose one service or bring several together. We shape the work
              around your business, audience and goals.
            </p>
          </div>

          <div className="mt-12 divide-y divide-white/25 border-y border-white/25">
            {categories.map((category) => (
              <Link
                href={category.href}
                key={category.number}
                className="group grid gap-5 py-8 transition-colors hover:bg-white/[0.07] sm:grid-cols-[60px_1fr_40px] sm:items-start sm:gap-8 sm:px-4"
              >
                <span className="pt-2 text-xs font-bold text-white/60">
                  {category.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
                    {category.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.services.map((service) => (
                      <span
                        key={service}
                        className="border border-white/30 px-3 py-2 text-[10px] font-medium text-white/85 sm:text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="hidden text-3xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block">
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 sm:text-[10px]">
            <span>THOUGHTFUL CREATIVE. PRACTICAL EXECUTION.</span>
            <Link
              href="/services"
              className="text-white transition-colors hover:text-[#111111]"
            >
              EXPLORE ALL SERVICES ↗
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + PROJECTS */}
      <section className="bg-[#f5f5f3] px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-300 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 sm:text-[10px]">
            <span>03 — EXPERIENCE & SELECTED WORK</span>
            <span>THOUGHT. CREATIVITY. EXECUTION.</span>
          </div>

          <div className="grid gap-7 pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:pt-14">

            {/* EXPERIENCE PANEL */}
            <div className="relative flex min-h-[580px] flex-col justify-between overflow-hidden bg-[#111111] p-7 text-white sm:p-10 lg:min-h-full">

              {/* Decorative elements */}
              <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
              <div className="absolute -right-12 top-32 h-52 w-52 rounded-full border border-[#df2929]/50 sm:h-72 sm:w-72" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  OUR EXPERIENCE
                </span>
                <span className="text-[#df2929]">✳</span>
              </div>

              <div className="relative z-10 py-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                  FIVE CREATIVE DISCIPLINES
                </p>

                <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                  Different
                  <br />
                  skills.
                  <br />
                  <span className="text-[#df2929]">One vision.</span>
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/55 sm:text-base">
                  We bring design, printing, video production, website development
                  and marketing together to help businesses build a stronger presence.
                </p>
              </div>

              {/* EXPERIENCE HIGHLIGHTS */}
              <div className="relative z-10 space-y-4 border-t border-white/15 pt-6">
                {[
                  ["01", "Creative thinking"],
                  ["02", "Digital experiences"],
                  ["03", "Brand communication"],
                  ["04", "Marketing execution"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="group flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold text-[#df2929]">
                        {number}
                      </span>
                      <span className="text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                        {title}
                      </span>
                    </div>
                    <span className="text-sm text-white/30 transition-colors group-hover:text-[#df2929]">
                      ↗
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating decorative symbol */}
              <div className="absolute bottom-40 right-8 animate-[spin_18s_linear_infinite] text-6xl text-[#df2929]/80 sm:text-8xl">
                ✳
              </div>
            </div>

            {/* PROJECTS PANEL */}
            <div className="flex flex-col">

              <div className="flex items-end justify-between gap-4 pb-7">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                    A CLOSER LOOK AT OUR WORK
                  </p>
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                    Look projects.
                  </h3>
                </div>

                <Link
                  href="/work"
                  className="hidden items-center gap-3 border-b border-[#111111] pb-2 text-[10px] font-bold uppercase tracking-wider transition-colors hover:border-[#df2929] hover:text-[#df2929] sm:inline-flex"
                >
                  VIEW ALL <span className="text-lg">↗</span>
                </Link>
              </div>

              {/* FEATURED PROJECT */}
              <Link
                href="/work"
                className="group relative block overflow-hidden bg-neutral-200"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/work/work-1.jpg"
                    alt="Featured Meetscripts project"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#111111] transition-colors group-hover:bg-[#df2929] group-hover:text-white">
                    ↗
                  </span>

                  <div className="absolute bottom-5 left-5 text-white sm:bottom-8 sm:left-8">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                      FEATURED WORK / 01
                    </span>
                    <h4 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      Creative experiences.
                    </h4>
                  </div>
                </div>
              </Link>

              {/* SECONDARY PROJECTS */}
              <div className="mt-5 grid grid-cols-2 gap-5">

                <Link href="/work" className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src="/work/work-2.jpg"
                      alt="Meetscripts creative project"
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-white text-lg transition-colors group-hover:bg-[#df2929] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold">Creative design</span>
                    <span className="text-[9px] font-bold text-neutral-400">02</span>
                  </div>
                </Link>

                <Link href="/work" className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src="/work/work-3.jpg"
                      alt="Meetscripts campaign project"
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-white text-lg transition-colors group-hover:bg-[#df2929] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold">Visual campaigns</span>
                    <span className="text-[9px] font-bold text-neutral-400">03</span>
                  </div>
                </Link>

              </div>

              <Link
                href="/work"
                className="mt-7 inline-flex w-fit items-center gap-4 border-b border-[#111111] pb-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929] sm:hidden"
              >
                VIEW ALL PROJECTS <span className="text-xl">↗</span>
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:text-[10px]">
            <span>04 — HOW WE WORK</span>
            <span>FROM FIRST THOUGHT TO FINAL DELIVERY</span>
          </div>

          <div className="grid gap-12 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-16">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                Clear thinking.
                <br />
                <span className="text-[#df2929]">Creative doing.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
                A straightforward process helps us understand your needs,
                focus on the right ideas and deliver work with purpose.
              </p>

              <Link
                href="/process"
                className="mt-8 inline-flex items-center gap-4 border-b border-[#111111] pb-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:text-[#df2929]"
              >
                DISCOVER OUR PROCESS
                <span className="text-xl">↗</span>
              </Link>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 py-7 sm:grid-cols-[60px_1fr] sm:gap-6"
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
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
            <span>05 — START A PROJECT</span>
            <span>LET&apos;S MAKE IT HAPPEN</span>
          </div>

          <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-20">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#df2929]">
                HAVE AN IDEA, A BRIEF OR A BUSINESS GOAL?
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Let&apos;s make
                <br />
                <span className="text-[#df2929]">it matter.</span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
                Tell us what you have in mind. Let&apos;s find the right
                creative solution for your business.
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

          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 sm:text-[10px]">
            <span>GRAPHICS DESIGN</span>
            <span>PRINTING</span>
            <span>VIDEO ANIMATION</span>
            <span>WEBSITE</span>
            <span>MARKETING</span>
          </div>
        </div>
      </section>
    </main>
  );
}