export default function Home() {
  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="site-container hero-inner">

          {/* LEFT — HERO COPY */}

          <div className="hero-copy">

            <p className="hero-eyebrow">
              MEETSCRIPTS TECHNOLOGIES
            </p>

            <h1>
              We build
              <br />
              <span>digital presence.</span>
            </h1>

            <p className="hero-description">
              Websites, creative design, social media management and
              digital marketing that help businesses look better,
              connect better and grow.
            </p>

            <div className="hero-actions">

              <a
                href="/contact"
                className="hero-primary"
              >
                Start a project
                <span>↗</span>
              </a>

              <a
                href="/work"
                className="hero-secondary"
              >
                See our work
              </a>

            </div>

          </div>


          {/* RIGHT — SELECTED WORK */}

          <div className="hero-work">

            <div className="work-caption">
              <span>SELECTED WORK</span>
              <strong>03 PROJECTS</strong>
            </div>


            {/* MAIN PROJECT */}

            <div className="work-main">

              <div className="browser-bar">

                <div className="browser-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>
                  meetscripts.com
                </span>

                <span className="browser-arrow">
                  ↗
                </span>

              </div>

              <img
                src="/work/work-1.jpg"
                alt="Featured Meetscripts project"
              />

            </div>


            {/* LEFT PROJECT */}

            <div className="work-small work-small-one">

              <img
                src="/work/work-2.jpg"
                alt="Meetscripts project"
              />

            </div>


            {/* TOP RIGHT PROJECT */}

            <div className="work-small work-small-two">

              <img
                src="/work/work-3.jpg"
                alt="Meetscripts project"
              />

            </div>


            {/* PROJECT INDEX */}

            <div className="work-index">
              <span>01</span>
              <span>03</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-intro">

        <div className="site-container">


          {/* SECTION TOPLINE */}

          <div className="section-topline">

            <span>
              WHAT WE DO
            </span>

            <span>
              01 — SERVICES
            </span>

          </div>


          {/* SERVICES INTRO */}

          <div className="services-heading">

            <h2>
              We help businesses
              <br />
              <span>look better and grow.</span>
            </h2>

            <p>
              From building your website to managing your social
              presence, we bring design, technology and marketing
              together.
            </p>

          </div>


          {/* SERVICES LIST */}

          <div className="services-list">


            {/* SERVICE 01 */}

            <a
              href="/services"
              className="service-item"
            >

              <div className="service-number">
                01
              </div>

              <div className="service-name">

                <h3>
                  Websites
                </h3>

                <p>
                  Modern websites built around your brand
                  and business goals.
                </p>

              </div>

              <div className="service-arrow">
                ↗
              </div>

            </a>


            {/* SERVICE 02 */}

            <a
              href="/services"
              className="service-item"
            >

              <div className="service-number">
                02
              </div>

              <div className="service-name">

                <h3>
                  Creative Design
                </h3>

                <p>
                  Social posts, reels and visual content
                  designed to stand out.
                </p>

              </div>

              <div className="service-arrow">
                ↗
              </div>

            </a>


            {/* SERVICE 03 */}

            <a
              href="/services"
              className="service-item"
            >

              <div className="service-number">
                03
              </div>

              <div className="service-name">

                <h3>
                  Social Media
                </h3>

                <p>
                  Consistent content management across
                  Instagram and Facebook.
                </p>

              </div>

              <div className="service-arrow">
                ↗
              </div>

            </a>


            {/* SERVICE 04 */}

            <a
              href="/services"
              className="service-item"
            >

              <div className="service-number">
                04
              </div>

              <div className="service-name">

                <h3>
                  Meta Ads
                </h3>

                <p>
                  Campaigns focused on reaching the right
                  audience and growing your business.
                </p>

              </div>

              <div className="service-arrow">
                ↗
              </div>

            </a>

            <a
              href="/services"
              className="service-item"
            >
              <div className="service-number">
                05
              </div>

              <div className="service-name">
                <h3>
                  Business Growth
                </h3>

                <p>
                  Digital strategies, lead generation and ongoing support
                  to help your business grow.
                </p>
              </div>

              <div className="service-arrow">
                ↗
              </div>
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section className="selected-work">

        <div className="site-container">

          {/* SECTION TOPLINE */}

          <div className="section-topline work-topline">
            <span>
              SELECTED WORK
            </span>

            <span>
              02 — PROJECTS
            </span>
          </div>


          {/* INTRO */}

          <div className="work-heading">

            <h2>
              Ideas turned into
              <br />
              <span>digital experiences.</span>
            </h2>

            <a
              href="/work"
              className="work-view-all"
            >
              View all work
              <span>↗</span>
            </a>

          </div>


          {/* PROJECTS */}

          <div className="projects-grid">


            {/* PROJECT 01 */}

            <a
              href="/work"
              className="project-card project-large"
            >

              <div className="project-image">

                <img
                  src="/work/work-1.jpg"
                  alt="Featured website project"
                />

              </div>

              <div className="project-info">

                <div>
                  <span className="project-number">
                    01
                  </span>

                  <h3>
                    Digital Experience
                  </h3>
                </div>

                <span className="project-category">
                  WEBSITE / DEVELOPMENT
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

            </a>


            {/* PROJECT 02 */}

            <a
              href="/work"
              className="project-card"
            >

              <div className="project-image">

                <img
                  src="/work/work-2.jpg"
                  alt="Creative design project"
                />

              </div>

              <div className="project-info">

                <div>
                  <span className="project-number">
                    02
                  </span>

                  <h3>
                    Brand & Creative
                  </h3>
                </div>

                <span className="project-category">
                  CREATIVE / DESIGN
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

            </a>


            {/* PROJECT 03 */}

            <a
              href="/work"
              className="project-card"
            >

              <div className="project-image">

                <img
                  src="/work/work-3.jpg"
                  alt="Digital marketing project"
                />

              </div>

              <div className="project-info">

                <div>
                  <span className="project-number">
                    03
                  </span>

                  <h3>
                    Growth Campaign
                  </h3>
                </div>

                <span className="project-category">
                  SOCIAL / MARKETING
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY MEETSCRIPTS
      ===================================================== */}

      <section className="about-intro">

        <div className="site-container">

          <div className="section-topline">
            <span>WHY MEETSCRIPTS</span>
            <span>03 — ABOUT</span>
          </div>


          <div className="about-layout">

            <div className="about-heading">

              <p className="about-small-label">
                DESIGN × TECHNOLOGY × GROWTH
              </p>

              <h2>
                We don't just
                <br />
                <span>make things look good.</span>
              </h2>

            </div>


            <div className="about-content">

              <p className="about-lead">
                We build digital experiences that make businesses
                easier to discover, easier to understand and easier
                to choose.
              </p>

              <p>
                Meetscripts Technologies brings website development,
                creative design, social media and digital marketing
                together under one roof.
              </p>

              <a
                href="/about"
                className="about-link"
              >
                More about us
                <span>↗</span>
              </a>

            </div>

          </div>


          <div className="about-points">

            <div className="about-point">

              <span>01</span>

              <h3>
                Think first.
              </h3>

              <p>
                We understand the business before
                designing the solution.
              </p>

            </div>


            <div className="about-point">

              <span>02</span>

              <h3>
                Design clearly.
              </h3>

              <p>
                Simple interfaces that communicate
                without unnecessary noise.
              </p>

            </div>


            <div className="about-point">

              <span>03</span>

              <h3>
                Build properly.
              </h3>

              <p>
                Modern, responsive and reliable
                digital experiences.
              </p>

            </div>


            <div className="about-point">

              <span>04</span>

              <h3>
                Grow together.
              </h3>

              <p>
                Digital work designed to support
                real business goals.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process-section">

        <div className="site-container">

          <div className="section-topline">
            <span>HOW WE WORK</span>
            <span>04 — PROCESS</span>
          </div>


          <div className="process-heading">

            <h2>
              From first idea
              <br />
              <span>to final launch.</span>
            </h2>

            <p>
              A straightforward process keeps every project focused,
              transparent and moving forward.
            </p>

          </div>


          <div className="process-list">

            {/* STEP 01 */}

            <div className="process-item">

              <div className="process-number">
                01
              </div>

              <div className="process-main">

                <h3>
                  Discover
                </h3>

                <p>
                  We learn about your business, audience,
                  goals and what you need to achieve.
                </p>

              </div>

              <div className="process-tag">
                UNDERSTAND
              </div>

            </div>


            {/* STEP 02 */}

            <div className="process-item">

              <div className="process-number">
                02
              </div>

              <div className="process-main">

                <h3>
                  Design
                </h3>

                <p>
                  We turn the strategy into a clear visual
                  direction and user experience.
                </p>

              </div>

              <div className="process-tag">
                CREATE
              </div>

            </div>


            {/* STEP 03 */}

            <div className="process-item">

              <div className="process-number">
                03
              </div>

              <div className="process-main">

                <h3>
                  Build
                </h3>

                <p>
                  We develop, test and refine everything
                  until the experience works smoothly.
                </p>

              </div>

              <div className="process-tag">
                DEVELOP
              </div>

            </div>


            {/* STEP 04 */}

            <div className="process-item">

              <div className="process-number">
                04
              </div>

              <div className="process-main">

                <h3>
                  Launch
                </h3>

                <p>
                  Your project goes live and we stay around
                  for the next stage of growth.
                </p>

              </div>

              <div className="process-tag">
                GROW
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="final-cta">

        <div className="site-container">

          <div className="final-cta-topline">
            <span>START A PROJECT</span>
            <span>05 — CONTACT</span>
          </div>


          <div className="final-cta-content">

            <p className="final-cta-eyebrow">
              GOT AN IDEA?
            </p>

            <h2>
              Let's make
              <br />
              <span>something happen.</span>
            </h2>

            <p className="final-cta-description">
              Tell us what you're building, what you're trying to
              achieve, or simply where you want to go next.
            </p>

            <a
              href="/contact"
              className="final-cta-button"
            >
              Start a conversation
              <span>↗</span>
            </a>

          </div>


          <div className="final-cta-bottom">

            <span>
              WEBSITES
            </span>

            <span>
              CREATIVE
            </span>

            <span>
              SOCIAL
            </span>

            <span>
              MARKETING
            </span>

            <span>
              BUSINESS GROWTH
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}