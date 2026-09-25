export default function Services() {
    return (
        <main>

            {/* =====================================================
          SERVICES HERO
      ===================================================== */}

            <section className="services-page-hero">
                <div className="site-container">

                    <div className="section-topline">
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                        <span>01 — SERVICES</span>
                    </div>

                    <div className="services-page-heading">

                        <p className="services-page-eyebrow">
                            WHAT WE DO
                        </p>

                        <h1>
                            Digital work
                            <br />
                            <span>built for growth.</span>
                        </h1>

                        <p className="services-page-intro">
                            We combine websites, creative design, social media,
                            advertising and business growth to help brands build
                            a stronger digital presence.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
          SERVICES
      ===================================================== */}

            <section className="services-page-list">

                <div className="site-container">

                    {/* WEBSITE */}

                    <a
                        href="/services/websites"
                        className="service-page-item"
                    >

                        <div className="service-page-number">
                            01
                        </div>

                        <div className="service-page-main">

                            <p className="service-page-label">
                                DEVELOPMENT
                            </p>

                            <h2>
                                Websites
                            </h2>

                            <p className="service-page-description">
                                Modern, responsive websites designed around
                                your brand, audience and business goals.
                            </p>

                            <div className="service-feature-list">
                                <span>Custom UI/UX</span>
                                <span>Responsive Design</span>
                                <span>Performance</span>
                                <span>SEO Ready</span>
                                <span>CMS</span>
                                <span>Lead Generation</span>
                            </div>

                        </div>

                        <div className="service-page-arrow">
                            ↗
                        </div>

                    </a>


                    {/* CREATIVE DESIGN */}

                    <a
                        href="/services/design"
                        className="service-page-item"
                    >

                        <div className="service-page-number">
                            02
                        </div>

                        <div className="service-page-main">

                            <p className="service-page-label">
                                CREATIVE
                            </p>

                            <h2>
                                Creative Design
                            </h2>

                            <p className="service-page-description">
                                Visual content that gives your brand a consistent
                                and recognizable presence across digital platforms.
                            </p>

                            <div className="service-feature-list">
                                <span>Instagram Posts</span>
                                <span>Facebook Posts</span>
                                <span>Reels</span>
                                <span>Campaign Creatives</span>
                                <span>Brand Graphics</span>
                                <span>Promotional Design</span>
                            </div>

                        </div>

                        <div className="service-page-arrow">
                            ↗
                        </div>

                    </a>


                    {/* SOCIAL MEDIA */}

                    <a
                        href="/services/social-media"
                        className="service-page-item"
                    >

                        <div className="service-page-number">
                            03
                        </div>

                        <div className="service-page-main">

                            <p className="service-page-label">
                                MANAGEMENT
                            </p>

                            <h2>
                                Social Media
                            </h2>

                            <p className="service-page-description">
                                Consistent social media management that keeps
                                your brand active, relevant and connected.
                            </p>

                            <div className="service-feature-list">
                                <span>Content Planning</span>
                                <span>Instagram</span>
                                <span>Facebook</span>
                                <span>Post Management</span>
                                <span>Reels</span>
                                <span>Publishing</span>
                            </div>

                        </div>

                        <div className="service-page-arrow">
                            ↗
                        </div>

                    </a>


                    {/* META ADS */}

                    <a
                        href="/services/meta-ads"
                        className="service-page-item"
                    >

                        <div className="service-page-number">
                            04
                        </div>

                        <div className="service-page-main">

                            <p className="service-page-label">
                                MARKETING
                            </p>

                            <h2>
                                Meta Ads
                            </h2>

                            <p className="service-page-description">
                                Paid campaigns designed to reach relevant
                                audiences and generate meaningful business results.
                            </p>

                            <div className="service-feature-list">
                                <span>Campaign Strategy</span>
                                <span>Audience Targeting</span>
                                <span>Creative Testing</span>
                                <span>Lead Campaigns</span>
                                <span>Retargeting</span>
                                <span>Performance Tracking</span>
                            </div>

                        </div>

                        <div className="service-page-arrow">
                            ↗
                        </div>

                    </a>


                    {/* BUSINESS GROWTH */}

                    <a
                        href="/services/business-growth"
                        className="service-page-item"
                    >

                        <div className="service-page-number">
                            05
                        </div>

                        <div className="service-page-main">

                            <p className="service-page-label">
                                GROWTH
                            </p>

                            <h2>
                                Business Growth
                            </h2>

                            <p className="service-page-description">
                                Digital strategies, lead generation and ongoing
                                support focused on helping your business move forward.
                            </p>

                            <div className="service-feature-list">
                                <span>Digital Strategy</span>
                                <span>Lead Generation</span>
                                <span>Growth Planning</span>
                                <span>Business Support</span>
                                <span>Digital Presence</span>
                                <span>Ongoing Optimization</span>
                            </div>

                        </div>

                        <div className="service-page-arrow">
                            ↗
                        </div>

                    </a>

                </div>

            </section>


            {/* =====================================================
          SERVICES CTA
      ===================================================== */}

            <section className="services-page-cta">

                <div className="site-container">

                    <p>
                        NOT SURE WHAT YOU NEED?
                    </p>

                    <h2>
                        Let's figure it
                        <br />
                        <span>out together.</span>
                    </h2>

                    <a
                        href="/contact"
                        className="hero-primary"
                    >
                        Talk to us
                        <span>↗</span>
                    </a>

                </div>

            </section>

        </main>
    );
}