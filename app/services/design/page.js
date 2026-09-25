export default function Design() {
    return (
        <main>

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="design-service-hero">
                <div className="site-container">

                    <div className="section-topline">
                        <span>CREATIVE DESIGN</span>
                        <span>02 — SERVICES</span>
                    </div>

                    <div className="design-hero-grid">

                        <div className="design-hero-copy">

                            <p className="design-eyebrow">
                                DESIGN × CONTENT
                            </p>

                            <h1>
                                Make your brand
                                <br />
                                <span>impossible to ignore.</span>
                            </h1>

                            <p className="design-hero-description">
                                We create social media graphics, reels and campaign
                                creatives that give your business a clear and
                                recognizable visual identity.
                            </p>

                            <div className="hero-actions">

                                <a
                                    href="/contact"
                                    className="hero-primary"
                                >
                                    Start a design project
                                    <span>↗</span>
                                </a>

                                <a
                                    href="#design-work"
                                    className="hero-secondary"
                                >
                                    See what we create
                                </a>

                            </div>

                        </div>


                        <div className="design-hero-visual">

                            <div className="design-poster design-poster-one">
                                <div className="design-poster-inner">
                                    <span>01</span>
                                    <strong>YOUR<br />BRAND.</strong>
                                    <small>CREATIVE DIRECTION</small>
                                </div>
                            </div>

                            <div className="design-poster design-poster-two">
                                <div className="design-poster-inner">
                                    <span>02</span>
                                    <strong>MAKE<br />NOISE.</strong>
                                    <small>SOCIAL CAMPAIGN</small>
                                </div>
                            </div>

                            <div className="design-poster design-poster-three">
                                <div className="design-poster-inner">
                                    <span>03</span>
                                    <strong>STAY<br />VISIBLE.</strong>
                                    <small>CONTENT DESIGN</small>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
          WHAT WE CREATE
      ===================================================== */}

            <section
                className="design-work"
                id="design-work"
            >

                <div className="site-container">

                    <div className="section-topline">
                        <span>WHAT WE CREATE</span>
                        <span>02 — CREATIVE</span>
                    </div>


                    <div className="design-heading">

                        <h2>
                            Visuals built
                            <br />
                            <span>for attention.</span>
                        </h2>

                        <p>
                            Every creative has a purpose — whether it's building
                            your identity, promoting an offer or keeping your
                            audience engaged.
                        </p>

                    </div>


                    <div className="design-service-list">

                        <div className="design-service-item">

                            <span>01</span>

                            <div>
                                <h3>Social Media Posts</h3>

                                <p>
                                    Scroll-stopping graphics for Instagram,
                                    Facebook and other digital platforms.
                                </p>
                            </div>

                            <strong>POSTS</strong>

                        </div>


                        <div className="design-service-item">

                            <span>02</span>

                            <div>
                                <h3>Reels & Short Videos</h3>

                                <p>
                                    Short-form video content designed to communicate
                                    quickly and keep your audience watching.
                                </p>
                            </div>

                            <strong>VIDEO</strong>

                        </div>


                        <div className="design-service-item">

                            <span>03</span>

                            <div>
                                <h3>Campaign Creatives</h3>

                                <p>
                                    Visual systems for promotions, launches,
                                    offers and advertising campaigns.
                                </p>
                            </div>

                            <strong>CAMPAIGNS</strong>

                        </div>


                        <div className="design-service-item">

                            <span>04</span>

                            <div>
                                <h3>Brand Visuals</h3>

                                <p>
                                    Consistent visual language that helps your
                                    business become easier to recognize.
                                </p>
                            </div>

                            <strong>BRANDING</strong>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          DESIGN APPROACH
      ===================================================== */}

            <section className="design-approach">

                <div className="site-container">

                    <div className="section-topline">
                        <span>OUR APPROACH</span>
                        <span>03 — DESIGN</span>
                    </div>


                    <div className="design-approach-grid">

                        <h2>
                            Good design
                            <br />
                            <span>has a job.</span>
                        </h2>

                        <div className="design-approach-copy">

                            <p>
                                We don't design simply to fill a feed. Every visual
                                starts with a purpose — communicate, attract,
                                explain, promote or convert.
                            </p>

                            <div className="design-principles">

                                <div>
                                    <span>01</span>
                                    <strong>Clear</strong>
                                </div>

                                <div>
                                    <span>02</span>
                                    <strong>Recognizable</strong>
                                </div>

                                <div>
                                    <span>03</span>
                                    <strong>Consistent</strong>
                                </div>

                                <div>
                                    <span>04</span>
                                    <strong>Purposeful</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CTA
      ===================================================== */}

            <section className="design-service-cta">

                <div className="site-container">

                    <p>
                        NEED BETTER CONTENT?
                    </p>

                    <h2>
                        Let's give your
                        <br />
                        <span>brand a voice.</span>
                    </h2>

                    <a
                        href="/contact"
                        className="hero-primary"
                    >
                        Start a design project
                        <span>↗</span>
                    </a>

                </div>

            </section>

        </main>
    );
}