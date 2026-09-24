"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const services = [
    "Website Development",
    "Digital Marketing",
    "Meta Ads",
    "Graphic Design",
    "Social Media",
    "Video & Reels",
    "3D & Animation",
    "Business Development",
];

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        // Temporary frontend-only submission.
        // We will connect this to your email/backend later.
        setSubmitted(true);
    }

    return (
        <section
            className="
                bg-[#f3f3f0]
                px-5
                py-24
                text-black
                md:px-[6vw]
                md:py-[10vw]
            "
        >
            <div
                className="
                    mx-auto
                    grid
                    max-w-[1500px]
                    gap-16
                    md:grid-cols-12
                    md:gap-[5vw]
                "
            >
                {/* LEFT */}
                <div className="md:col-span-4">
                    <p className="technical text-[9px] tracking-[0.18em] text-[#e02020]">
                        PROJECT INQUIRY
                    </p>

                    <h2
                        className="
                            mt-8
                            max-w-sm
                            text-4xl
                            leading-[0.95]
                            tracking-[-0.06em]
                            md:text-6xl
                        "
                    >
                        Tell us what
                        <br />
                        you&apos;re
                        <br />
                        building.
                    </h2>

                    <p className="mt-8 max-w-sm text-sm leading-7 text-black/50">
                        The more context you give us, the better we
                        can understand your project and how we can
                        help.
                    </p>
                </div>

                {/* FORM */}
                <div className="md:col-span-7 md:col-start-6">
                    {submitted ? (
                        <div
                            className="
                                flex
                                min-h-[500px]
                                flex-col
                                items-center
                                justify-center
                                border-t
                                border-black/15
                                text-center
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#e02020]
                                    text-white
                                "
                            >
                                <Check size={26} />
                            </div>

                            <h3 className="mt-8 text-4xl tracking-[-0.05em]">
                                MESSAGE RECEIVED.
                            </h3>

                            <p className="mt-4 max-w-md text-sm leading-7 text-black/50">
                                Thanks for reaching out. We&apos;ll
                                get back to you soon.
                            </p>

                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="
                                    mt-8
                                    text-xs
                                    tracking-[0.15em]
                                    text-[#e02020]
                                "
                            >
                                SEND ANOTHER
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="border-t border-black/15"
                        >
                            {/* NAME */}
                            <div className="border-b border-black/15 py-7">
                                <label className="technical mb-3 block text-[9px] tracking-[0.16em] text-black/40">
                                    01 — NAME
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="
                                        w-full
                                        bg-transparent
                                        text-xl
                                        outline-none
                                        placeholder:text-black/20
                                        md:text-2xl
                                    "
                                />
                            </div>

                            {/* EMAIL */}
                            <div className="border-b border-black/15 py-7">
                                <label className="technical mb-3 block text-[9px] tracking-[0.16em] text-black/40">
                                    02 — EMAIL
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@company.com"
                                    className="
                                        w-full
                                        bg-transparent
                                        text-xl
                                        outline-none
                                        placeholder:text-black/20
                                        md:text-2xl
                                    "
                                />
                            </div>

                            {/* COMPANY */}
                            <div className="border-b border-black/15 py-7">
                                <label className="technical mb-3 block text-[9px] tracking-[0.16em] text-black/40">
                                    03 — COMPANY
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company name"
                                    className="
                                        w-full
                                        bg-transparent
                                        text-xl
                                        outline-none
                                        placeholder:text-black/20
                                        md:text-2xl
                                    "
                                />
                            </div>

                            {/* SERVICE */}
                            <div className="border-b border-black/15 py-7">
                                <label className="technical mb-4 block text-[9px] tracking-[0.16em] text-black/40">
                                    04 — WHAT DO YOU NEED?
                                </label>

                                <div className="flex flex-wrap gap-2">
                                    {services.map((service) => (
                                        <label
                                            key={service}
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="service"
                                                value={service}
                                                className="peer sr-only"
                                                required
                                            />

                                            <span
                                                className="
                                                    block
                                                    rounded-full
                                                    border
                                                    border-black/15
                                                    px-4
                                                    py-2.5
                                                    text-xs
                                                    transition-all
                                                    duration-300
                                                    peer-checked:border-[#e02020]
                                                    peer-checked:bg-[#e02020]
                                                    peer-checked:text-white
                                                "
                                            >
                                                {service}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* MESSAGE */}
                            <div className="border-b border-black/15 py-7">
                                <label className="technical mb-3 block text-[9px] tracking-[0.16em] text-black/40">
                                    05 — TELL US MORE
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell us about your project, goals, timeline..."
                                    className="
                                        w-full
                                        resize-none
                                        bg-transparent
                                        text-xl
                                        leading-7
                                        outline-none
                                        placeholder:text-black/20
                                        md:text-2xl
                                    "
                                />
                            </div>

                            {/* SUBMIT */}
                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        gap-5
                                        rounded-full
                                        bg-black
                                        px-6
                                        py-4
                                        text-xs
                                        tracking-[0.16em]
                                        text-white
                                        transition-all
                                        duration-500
                                        hover:bg-[#e02020]
                                        hover:gap-7
                                    "
                                >
                                    SEND INQUIRY

                                    <span
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/10
                                            transition-transform
                                            duration-500
                                            group-hover:rotate-45
                                        "
                                    >
                                        <ArrowUpRight size={15} />
                                    </span>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}