export default function CaseStudyDetails({ project }) {
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
            <div className="mx-auto max-w-[1500px]">

                <div className="grid gap-16 md:grid-cols-2">

                    <div>
                        <p className="technical mb-6 text-[9px] tracking-[0.16em] text-[#e02020]">
                            THE CHALLENGE
                        </p>

                        <p className="max-w-xl text-2xl leading-[1.15] tracking-[-0.03em] md:text-4xl">
                            {project.challenge}
                        </p>
                    </div>

                    <div>
                        <p className="technical mb-6 text-[9px] tracking-[0.16em] text-[#e02020]">
                            THE SOLUTION
                        </p>

                        <p className="max-w-xl text-2xl leading-[1.15] tracking-[-0.03em] md:text-4xl">
                            {project.solution}
                        </p>
                    </div>

                </div>

                <div
                    className="
                        mt-20
                        grid
                        gap-12
                        border-t
                        border-black/10
                        pt-8
                        md:mt-[10vw]
                        md:grid-cols-2
                    "
                >
                    <div>
                        <p className="technical mb-5 text-[9px] tracking-[0.16em] text-black/40">
                            SERVICES
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.services.map((item) => (
                                <span
                                    key={item}
                                    className="
                                        rounded-full
                                        border
                                        border-black/15
                                        px-4
                                        py-2
                                        text-xs
                                    "
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="technical mb-5 text-[9px] tracking-[0.16em] text-black/40">
                            TECHNOLOGY
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technology.map((item) => (
                                <span
                                    key={item}
                                    className="
                                        rounded-full
                                        bg-black
                                        px-4
                                        py-2
                                        text-xs
                                        text-white
                                    "
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}