import Link from "next/link";

export const metadata = {
    title: "Contact Us | Meetscripts Technologies",
    description:
        "Discuss your next graphics design, printing, video, website or marketing project with Meetscripts Technologies.",
};

const services = [
    "Graphics Design",
    "Printing Solutions",
    "Video Animation",
    "Website",
    "Marketing",
    "Not sure yet",
];

const inputStyle =
    "mt-2 w-full border border-neutral-200 bg-white px-4 py-4 text-sm text-[#111111] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#df2929]";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111]">
            {/* HERO */}
            <section className="px-5 pb-16 pt-6 sm:px-8 sm:pt-6 lg:px-12 lg:pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                        <span>CONTACT MEETSCRIPTS</span>
                        <span>LET&apos;S START A CONVERSATION</span>
                    </div>

                    <div className="grid gap-10 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:pt-20">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                <span className="h-px w-8 bg-[#df2929]" />
                                HAVE A PROJECT IN MIND?
                            </p>

                            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[88px]">
                                Let&apos;s make
                                <br />
                                <span className="text-[#df2929]">it matter.</span>
                            </h1>
                        </div>

                        <p className="max-w-lg text-lg leading-relaxed text-neutral-600 sm:text-xl lg:justify-self-end">
                            Tell us what you&apos;re building, promoting or improving.
                            Share a little about your project and we&apos;ll help you find
                            the right direction.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTACT CONTENT */}
            <section className="bg-neutral-50 px-5 py-10 sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    {/* CONTACT INFORMATION */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                GET IN TOUCH
                            </p>

                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                Start with
                                <br />
                                <span className="text-[#df2929]">a conversation.</span>
                            </h2>

                            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
                                Not sure which service fits your requirement? That&apos;s
                                okay. Start with your goal and we&apos;ll talk through the
                                options.
                            </p>
                        </div>

                        <div className="mt-12 space-y-8 border-t border-neutral-200 pt-8">
                            <div>
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    EMAIL
                                </p>

                                <a
                                    href="mailto:ms@meetscriptstech.com"
                                    className="break-all text-lg font-medium transition-colors hover:text-[#df2929] sm:text-xl"
                                >
                                    ms@meetscriptstech.com
                                </a>
                            </div>

                            <div>
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    PHONE
                                </p>

                                <a
                                    href="tel:+919854090395"
                                    className="text-lg font-medium transition-colors hover:text-[#df2929] sm:text-xl"
                                >
                                    +91 98540 90395
                                </a>
                            </div>

                            <div>
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    WHAT WE DO
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Graphics Design",
                                        "Printing",
                                        "Video",
                                        "Website",
                                        "Marketing",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-600"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ENQUIRY FORM */}
                    <div className="border border-neutral-200 bg-white p-6 sm:p-9 lg:p-11">
                        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-neutral-200 pb-7">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#df2929]">
                                    PROJECT ENQUIRY
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                                    Tell us about your project.
                                </h2>

                                <p className="mt-2 text-sm text-neutral-500">
                                    Share the basics. We&apos;ll take it from there.
                                </p>
                            </div>

                            <span className="text-3xl font-light text-[#df2929]">↗</span>
                        </div>

                        <form
                            action="mailto:ms@meetscriptstech.com"
                            method="post"
                            encType="text/plain"
                            className="mt-8 space-y-6"
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-600"
                                    >
                                        Your Name *
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="Name"
                                        type="text"
                                        placeholder="Enter your name"
                                        autoComplete="name"
                                        required
                                        className={inputStyle}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-600"
                                    >
                                        Email Address *
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="Email"
                                        type="email"
                                        placeholder="you@company.com"
                                        autoComplete="email"
                                        required
                                        className={inputStyle}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-phone"
                                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-600"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="contact-phone"
                                        name="Phone"
                                        type="tel"
                                        placeholder="+91"
                                        autoComplete="tel"
                                        className={inputStyle}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-service"
                                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-600"
                                    >
                                        What Do You Need? *
                                    </label>

                                    <select
                                        id="contact-service"
                                        name="Service"
                                        defaultValue=""
                                        required
                                        className={`${inputStyle} cursor-pointer`}
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>

                                        {services.map((service) => (
                                            <option value={service} key={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-600"
                                >
                                    Tell Us About Your Project
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="Project Details"
                                    rows={5}
                                    placeholder="A few details about your project, timeline or goals..."
                                    className={`${inputStyle} resize-y`}
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-between gap-5 bg-[#df2929] px-6 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#111111]"
                            >
                                SEND PROJECT ENQUIRY
                                <span className="text-xl">↗</span>
                            </button>

                            <p className="text-center text-xs leading-relaxed text-neutral-400">
                                Submitting opens your default email application with your
                                enquiry details. No information is stored on this website.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="bg-[#111111] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-10">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                            NOT READY TO SEND AN ENQUIRY?
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                            Explore what we do first.
                        </h2>
                    </div>

                    <Link
                        href="/services"
                        className="inline-flex w-fit items-center gap-6 border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[#df2929] hover:bg-[#df2929]"
                    >
                        EXPLORE OUR SERVICES
                        <span className="text-xl">↗</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}