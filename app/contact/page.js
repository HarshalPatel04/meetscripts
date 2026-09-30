import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="contact-v2">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="contact-v2-hero">
                <div className="site-container">

                    <div className="contact-v2-topline">
                        <span>CONTACT</span>
                        <span>01 — LET&apos;S TALK</span>
                    </div>

                    <div className="contact-v2-hero-content">
                        <p className="contact-v2-eyebrow">
                            HAVE AN IDEA IN MIND?
                        </p>

                        <h1>
                            Let&apos;s build
                            <br />
                            something <span>great.</span>
                        </h1>

                        <p className="contact-v2-intro">
                            Whether you need a website, a new brand identity,
                            better content or a complete digital growth strategy,
                            tell us what you&apos;re working on.
                        </p>
                    </div>

                </div>
            </section>


            {/* =====================================================
          CONTACT AREA
      ===================================================== */}

            <section className="contact-v2-main">
                <div className="site-container">

                    <div className="contact-v2-main-grid">

                        {/* LEFT */}
                        <div className="contact-v2-info">

                            <div className="contact-v2-section-label">
                                <span>GET IN TOUCH</span>
                                <span>02 — CONTACT</span>
                            </div>

                            <h2>
                                Start with a
                                <br />
                                conversation.
                            </h2>

                            <p className="contact-v2-info-copy">
                                You don&apos;t need to know exactly what service you need.
                                Tell us what you&apos;re trying to achieve and we&apos;ll
                                help figure out the right direction together.
                            </p>

                            <div className="contact-v2-details">

                                <a href="mailto:ms@meetscriptstech.com">
                                    <span>EMAIL</span>
                                    ms@meetscriptstech.com
                                </a>

                                <a href="tel:+919854090395">
                                    <span>PHONE</span>
                                    +91 98540 90395
                                </a>

                                <div className="contact-v2-social">
                                    <span>SOCIAL</span>

                                    <div>
                                        <a href="#" target="_blank" rel="noreferrer">
                                            Instagram
                                        </a>

                                        <a href="#" target="_blank" rel="noreferrer">
                                            Facebook
                                        </a>

                                        <a href="#" target="_blank" rel="noreferrer">
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* RIGHT — FORM */}
                        <div className="contact-v2-form-wrap">

                            <div className="contact-v2-form-heading">
                                <span>03 — YOUR PROJECT</span>
                                <p>Tell us a little about what you&apos;re building.</p>
                            </div>

                            <form className="contact-v2-form">

                                <div className="contact-v2-form-grid">

                                    <div className="contact-v2-field">
                                        <label htmlFor="name">YOUR NAME</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="contact-v2-field">
                                        <label htmlFor="email">EMAIL ADDRESS</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                </div>


                                <div className="contact-v2-field">
                                    <label htmlFor="phone">PHONE NUMBER</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>


                                <div className="contact-v2-field">
                                    <label htmlFor="company">COMPANY / BRAND</label>
                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Your company"
                                    />
                                </div>


                                <div className="contact-v2-field">
                                    <label htmlFor="service">WHAT DO YOU NEED?</label>

                                    <select id="service" defaultValue="">
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option value="website">
                                            Website / Application
                                        </option>
                                        <option value="creative-design">
                                            Creative Design
                                        </option>
                                        <option value="product-design">
                                            Product Design
                                        </option>
                                        <option value="social-media">
                                            Social Media
                                        </option>
                                        <option value="meta-ads">
                                            Meta Ads
                                        </option>
                                        <option value="video">
                                            Video
                                        </option>
                                        <option value="business-growth">
                                            Business Growth
                                        </option>
                                        <option value="other">
                                            Something else
                                        </option>
                                    </select>
                                </div>


                                <div className="contact-v2-field">
                                    <label htmlFor="message">TELL US MORE</label>

                                    <textarea
                                        id="message"
                                        placeholder="Tell us about your business, project or idea..."
                                    />
                                </div>


                                <button
                                    type="submit"
                                    className="contact-v2-submit"
                                >
                                    <span>Start a conversation</span>
                                    <span className="contact-v2-submit-arrow">↗</span>
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
          SERVICES
      ===================================================== */}

            <section className="contact-v2-services">
                <div className="site-container">

                    <div className="contact-v2-section-label">
                        <span>WHAT WE CAN HELP WITH</span>
                        <span>04 — SERVICES</span>
                    </div>

                    <div className="contact-v2-services-heading">
                        <h2>
                            Not sure where
                            <br />
                            to <span>start?</span>
                        </h2>

                        <p>
                            Start with the problem. We&apos;ll help you figure
                            out the right solution.
                        </p>
                    </div>


                    <div className="contact-v2-service-list">

                        <Link href="/services/websites">
                            <span>01</span>
                            <strong>Website / Application</strong>
                            <em>↗</em>
                        </Link>

                        <Link href="/services/design">
                            <span>02</span>
                            <strong>Creative Design</strong>
                            <em>↗</em>
                        </Link>

                        <Link href="/services/product-design">
                            <span>03</span>
                            <strong>Product Design</strong>
                            <em>↗</em>
                        </Link>

                        <Link href="/services/social-media">
                            <span>04</span>
                            <strong>Social Media</strong>
                            <em>↗</em>
                        </Link>

                        <Link href="/services/meta-ads">
                            <span>05</span>
                            <strong>Meta Ads</strong>
                            <em>↗</em>
                        </Link>

                        <Link href="/services/video">
                            <span>06</span>
                            <strong>Video</strong>
                            <em>↗</em>
                        </Link>

                        <Link href="/services/business-growth">
                            <span>07</span>
                            <strong>Business Growth</strong>
                            <em>↗</em>
                        </Link>

                    </div>

                </div>
            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="contact-v2-final">
                <div className="site-container">

                    <p>GOOD IDEAS START WITH A CONVERSATION.</p>

                    <h2>
                        Have something
                        <br />
                        in <span>mind?</span>
                    </h2>

                    <a
                        href="mailto:ms@meetscriptstech.com"
                        className="contact-v2-final-button"
                    >
                        ms@meetscriptstech.com
                        <span>↗</span>
                    </a>

                </div>
            </section>

        </main>
    );
}