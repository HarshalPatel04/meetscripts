export default function Websites() {
    return (
        <main>

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="website-service-hero">
                <div className="site-container">

                    <div className="section-topline">
                        <span>WEBSITE DEVELOPMENT</span>
                        <span>01 — SERVICES</span>
                    </div>

                    <div className="website-hero-grid">

                        <div className="website-hero-copy">

                            <p className="website-eyebrow">
                                DESIGN × DEVELOPMENT
                            </p>

                            <h1>
                                Websites that
                                <br />
                                <span>work for you.</span>
                            </h1>

                            <p className="website-hero-description">
                                We design and develop modern, high-performing websites
                                that help businesses build a stronger digital presence
                                and generate real growth.
                            </p>

                            <div className="hero-actions">

                                <a
                                    href="/contact"
                                    className="hero-primary"
                                >
                                    Start a website
                                    <span>↗</span>
                                </a>

                                <a
                                    href="#features"
                                    className="hero-secondary"
                                >
                                    Explore features
                                </a>

                            </div>

                        </div>


                        <div className="website-hero-visual">

                            <div className="website-browser">

                                <div className="website-browser-bar">

                                    <div className="browser-dots">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>

                                    <span>solartech.com</span>

                                </div>

                                <img
                                    src="/work/work-2.jpg"
                                    alt="Solar website design"
                                />

                            </div>

                            <div className="website-phone">

                                <img
                                    src="/work/work-4.jpg"
                                    alt="Responsive website on mobile"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
          FEATURES
      ===================================================== */}

            <section
                className="website-features"
                id="features"
            >

                <div className="site-container">

                    <div className="section-topline">
                        <span>WHAT YOU GET</span>
                        <span>02 — FEATURES</span>
                    </div>


                    <div className="website-features-heading">

                        <h2>
                            Built around
                            <br />
                            <span>your business.</span>
                        </h2>

                        <p>
                            Every website is designed with your brand, customers
                            and business goals in mind.
                        </p>

                    </div>


                    <div className="website-feature-grid">

                        <div className="website-feature">
                            <span>01</span>

                            <div>
                                <h3>Custom UI/UX</h3>

                                <p>
                                    A unique visual experience created around
                                    your brand instead of a generic template.
                                </p>
                            </div>
                        </div>


                        <div className="website-feature">
                            <span>02</span>

                            <div>
                                <h3>Responsive Design</h3>

                                <p>
                                    A consistent experience across desktop,
                                    tablet and mobile devices.
                                </p>
                            </div>
                        </div>


                        <div className="website-feature">
                            <span>03</span>

                            <div>
                                <h3>High Performance</h3>

                                <p>
                                    Lightweight development focused on speed,
                                    usability and smooth interaction.
                                </p>
                            </div>
                        </div>


                        <div className="website-feature">
                            <span>04</span>

                            <div>
                                <h3>SEO Ready</h3>

                                <p>
                                    Clean structure and technical foundations
                                    prepared for search visibility.
                                </p>
                            </div>
                        </div>


                        <div className="website-feature">
                            <span>05</span>

                            <div>
                                <h3>CMS Integration</h3>

                                <p>
                                    Make content updates easier without changing
                                    the entire website.
                                </p>
                            </div>
                        </div>


                        <div className="website-feature">
                            <span>06</span>

                            <div>
                                <h3>Lead Generation</h3>

                                <p>
                                    Contact forms, WhatsApp, CTAs and conversion
                                    focused page structures.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          WEBSITE TYPES
      ===================================================== */}

            <section className="website-types">

                <div className="site-container">

                    <div className="section-topline">
                        <span>WHAT WE BUILD</span>
                        <span>03 — WEBSITES</span>
                    </div>


                    <div className="website-types-heading">

                        <h2>
                            One website.
                            <br />
                            <span>Different possibilities.</span>
                        </h2>

                    </div>


                    <div className="website-types-grid">

                        <div className="website-type">
                            <span>01</span>

                            <h3>
                                Business Websites
                            </h3>

                            <p>
                                Professional websites for companies that
                                need a strong digital presence.
                            </p>
                        </div>


                        <div className="website-type">
                            <span>02</span>

                            <h3>
                                Landing Pages
                            </h3>

                            <p>
                                Focused pages designed for campaigns,
                                advertisements and lead generation.
                            </p>
                        </div>


                        <div className="website-type">
                            <span>03</span>

                            <h3>
                                E-commerce
                            </h3>

                            <p>
                                Product-focused online stores designed
                                around a smooth buying experience.
                            </p>
                        </div>


                        <div className="website-type">
                            <span>04</span>

                            <h3>
                                Portfolio Websites
                            </h3>

                            <p>
                                Creative websites that present your work,
                                projects and personal brand.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CTA
      ===================================================== */}

            <section className="website-service-cta">

                <div className="site-container">

                    <p>
                        HAVE A WEBSITE IN MIND?
                    </p>

                    <h2>
                        Let's build something
                        <br />
                        <span>worth visiting.</span>
                    </h2>

                    <a
                        href="/contact"
                        className="hero-primary"
                    >
                        Start a website
                        <span>↗</span>
                    </a>

                </div>

            </section>

        </main>
    );
}