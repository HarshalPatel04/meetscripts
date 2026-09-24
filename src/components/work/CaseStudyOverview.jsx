export default function CaseStudyOverview({ project }) {
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
                    gap-12
                    md:grid-cols-12
                "
            >
                <div className="md:col-span-4">
                    <p className="technical text-[9px] tracking-[0.16em] text-[#e02020]">
                        PROJECT OVERVIEW
                    </p>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                    <p
                        className="
                            text-[clamp(2rem,4vw,4.5rem)]
                            leading-[0.95]
                            tracking-[-0.06em]
                        "
                    >
                        {project.overview}
                    </p>
                </div>
            </div>
        </section>
    );
}