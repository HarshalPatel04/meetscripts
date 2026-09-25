import Link from "next/link";

export default function About() {
    return (
        <main>

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="about-page-hero">
                <div className="site-container">

                    <div className="section-topline">
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                        <span>03 — ABOUT</span>
                    </div>

                    <div className="about-page-heading">

                        <p className="about-page-eyebrow">
                            WHO WE ARE
                        </p>

                        <h1>
                            We build
                            <br />
                            <span>things that matter.</span>
                        </h1>

                        <p className="about-page-intro">
                            Meetscripts Technologies is a digital company helping
                            businesses build a stronger presence through technology,
                            creative design and digital marketing.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
          INTRO
      ===================================================== */}

            <section className="about-intro">
                <div className="site-container">

                    <div className="section-topline">
                        <span>OUR APPROACH</span>
                        <span>01 — THINK</span>
                    </div>

                    <div className="about-intro-grid">

                        <div className="about-intro-statement">
                            <h2>
                                Technology is only
                                <br />
                                <span>half the story.</span>
                            </h2>
                        </div>

                        <div className="about-intro-copy">

                            <p>
                                A good website is more than code. A good design is more
                                than visuals. And marketing is more than putting an ad
                                in front of someone.
                            </p>

                            <p>
                                We bring these pieces together to create digital
                                experiences that look good, communicate clearly and
                                help businesses move forward.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
    WHAT WE DO
===================================================== */}

            <section className="about-services">

                <div className="site-container">

                    <div className="section-topline">
                        <span>WHAT WE DO</span>
                        <span>02 — CAPABILITIES</span>
                    </div>

                    <div className="about-services-list">

                        {/* WEBSITE */}

                        <Link
                            href="/services/websites"
                            className="about-service-row"
                        >
                            <span>01</span>

                            <div>
                                <h3>Build</h3>

                                <p>
                                    Websites and digital experiences designed around
                                    the way your business actually works.
                                </p>
                            </div>

                            <span className="about-service-arrow">↗</span>
                        </Link>


                        {/* DESIGN */}

                        <Link
                            href="/services/design"
                            className="about-service-row"
                        >
                            <span>02</span>

                            <div>
                                <h3>Design</h3>

                                <p>
                                    Visual identities, social creatives and content
                                    that make your brand easier to recognize.
                                </p>
                            </div>

                            <span className="about-service-arrow">↗</span>
                        </Link>


                        {/* SOCIAL MEDIA */}

                        <Link
                            href="/services/social-media"
                            className="about-service-row"
                        >
                            <span>03</span>

                            <div>
                                <h3>Manage</h3>

                                <p>
                                    Social profiles and digital content kept active,
                                    consistent and relevant.
                                </p>
                            </div>

                            <span className="about-service-arrow">↗</span>
                        </Link>


                        {/* BUSINESS GROWTH */}

                        <Link
                            href="/services/business-growth"
                            className="about-service-row"
                        >
                            <span>04</span>

                            <div>
                                <h3>Grow</h3>

                                <p>
                                    Meta advertising and digital growth systems built
                                    around measurable business goals.
                                </p>
                            </div>

                            <span className="about-service-arrow">↗</span>
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
          PRINCIPLES
      ===================================================== */}

            <section className="about-principles">

                <div className="site-container">

                    <div className="section-topline">
                        <span>HOW WE THINK</span>
                        <span>03 — PRINCIPLES</span>
                    </div>

                    <div className="about-principles-grid">

                        <div className="about-principle-card">
                            <span>01</span>

                            <h3>
                                Keep it
                                <br />
                                <span>simple.</span>
                            </h3>

                            <p>
                                Clear ideas, clean interfaces and communication
                                that does not make people work to understand you.
                            </p>
                        </div>


                        <div className="about-principle-card">
                            <span>02</span>

                            <h3>
                                Make it
                                <br />
                                <span>useful.</span>
                            </h3>

                            <p>
                                Everything we create should have a reason to exist
                                and contribute to the bigger business goal.
                            </p>
                        </div>


                        <div className="about-principle-card">
                            <span>03</span>

                            <h3>
                                Build for
                                <br />
                                <span>growth.</span>
                            </h3>

                            <p>
                                We think beyond launch and create digital systems
                                that can evolve as the business grows.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          THE DIFFERENCE
      ===================================================== */}

            <section className="about-difference">

                <div className="site-container">

                    <div className="about-difference-inner">

                        <div>
                            <p className="about-page-eyebrow">
                                WHY MEETSCRIPTS
                            </p>

                            <h2>
                                One team.
                                <br />
                                <span>Multiple disciplines.</span>
                            </h2>
                        </div>

                        <div className="about-difference-copy">

                            <p>
                                Instead of treating your website, design, social
                                media and advertising as separate pieces, we look
                                at how they work together.
                            </p>

                            <p>
                                That means your brand can stay consistent from the
                                first impression to the first conversation.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CTA
      ===================================================== */}

            <section className="about-page-cta">

                <div className="site-container">

                    <p>
                        HAVE SOMETHING IN MIND?
                    </p>

                    <h2>
                        Let's build
                        <br />
                        <span>what's next.</span>
                    </h2>

                    <a
                        href="/contact"
                        className="hero-primary"
                    >
                        Start a project
                        <span>↗</span>
                    </a>

                </div>

            </section>

        </main>
    );
}