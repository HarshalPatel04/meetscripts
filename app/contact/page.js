export default function Contact() {
    return (
        <main>

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="contact-page-hero">

                <div className="site-container">

                    <div className="section-topline">
                        <span>MEETSCRIPTS TECHNOLOGIES</span>
                        <span>05 — CONTACT</span>
                    </div>

                    <div className="contact-page-heading">

                        <p className="contact-page-eyebrow">
                            START A CONVERSATION
                        </p>

                        <h1>
                            Have an idea?
                            <br />
                            <span>Let's talk.</span>
                        </h1>

                        <p className="contact-page-intro">
                            Tell us what you are building, what you want to improve,
                            or simply where you want to go next. We will take it
                            from there.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

            <section className="contact-main">

                <div className="site-container">

                    <div className="section-topline">
                        <span>GET IN TOUCH</span>
                        <span>01 — CONTACT</span>
                    </div>

                    <div className="contact-grid">

                        {/* LEFT */}

                        <div className="contact-info">

                            <p className="contact-info-label">
                                LET'S BUILD SOMETHING
                            </p>

                            <h2>
                                Your next
                                <br />
                                <span>project starts here.</span>
                            </h2>

                            <p className="contact-info-text">
                                Whether you need a website, creative design, social
                                media management, advertising or a complete digital
                                growth system, tell us what you have in mind.
                            </p>


                            <div className="contact-details">

                                <a href="mailto:hello@meetscripts.com">
                                    <span>EMAIL</span>
                                    hello@meetscripts.com
                                </a>

                                <a href="tel:+910000000000">
                                    <span>PHONE</span>
                                    +91 00000 00000
                                </a>

                            </div>

                        </div>


                        {/* RIGHT — FORM */}

                        <form className="contact-form">

                            <div className="contact-form-row">

                                <label>
                                    YOUR NAME
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                />

                            </div>


                            <div className="contact-form-row">

                                <label>
                                    EMAIL ADDRESS
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                />

                            </div>


                            <div className="contact-form-row">

                                <label>
                                    BUSINESS / COMPANY
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Your company"
                                />

                            </div>


                            <div className="contact-form-row">

                                <label>
                                    WHAT DO YOU NEED?
                                </label>

                                <select
                                    name="service"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>

                                    <option value="website">
                                        Website / Web Development
                                    </option>

                                    <option value="design">
                                        Graphic Design
                                    </option>

                                    <option value="social-media">
                                        Social Media Management
                                    </option>

                                    <option value="meta-ads">
                                        Meta Advertising
                                    </option>

                                    <option value="business-growth">
                                        Business Growth
                                    </option>

                                    <option value="other">
                                        Something else
                                    </option>
                                </select>

                            </div>


                            <div className="contact-form-row">

                                <label>
                                    TELL US ABOUT IT
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your project, goals or idea..."
                                />

                            </div>


                            <button
                                type="submit"
                                className="contact-submit"
                            >
                                Send enquiry
                                <span>↗</span>
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* =====================================================
          SERVICES QUICK LINKS
      ===================================================== */}

            <section className="contact-services">

                <div className="site-container">

                    <div className="section-topline">
                        <span>WHAT WE CAN HELP WITH</span>
                        <span>02 — SERVICES</span>
                    </div>

                    <div className="contact-service-grid">

                        <a href="/services/websites">
                            <span>01</span>
                            <strong>Websites</strong>
                            <em>↗</em>
                        </a>

                        <a href="/services/design">
                            <span>02</span>
                            <strong>Design</strong>
                            <em>↗</em>
                        </a>

                        <a href="/services/social-media">
                            <span>03</span>
                            <strong>Social Media</strong>
                            <em>↗</em>
                        </a>

                        <a href="/services/meta-ads">
                            <span>04</span>
                            <strong>Meta Ads</strong>
                            <em>↗</em>
                        </a>

                        <a href="/services/business-growth">
                            <span>05</span>
                            <strong>Business Growth</strong>
                            <em>↗</em>
                        </a>

                    </div>

                </div>

            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="contact-final">

                <div className="site-container">

                    <p>
                        NO BIG PRESENTATION NEEDED.
                    </p>

                    <h2>
                        Just tell us
                        <br />
                        <span>what you need.</span>
                    </h2>

                    <a
                        href="mailto:hello@meetscripts.com"
                        className="hero-primary"
                    >
                        Email us
                        <span>↗</span>
                    </a>

                </div>

            </section>

        </main>
    );
}