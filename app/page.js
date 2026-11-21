export default function Home() {
  const services = [
    {
      number: "01",
      title: "Website / Application",
      description: "Digital experiences designed to make your business work better.",
      href: "/services/websites",
      tag: "DEVELOPMENT",
    },
    {
      number: "02",
      title: "Creative Design",
      description: "Visual content that gives your brand a distinctive presence.",
      href: "/services/design",
      tag: "CREATIVE",
    },
    {
      number: "03",
      title: "Product Design",
      description: "Packaging, labels and product visuals made to stand out.",
      href: "/services/product-design",
      tag: "PRODUCT",
    },
    {
      number: "04",
      title: "Social Media",
      description: "Consistent content and management for your digital presence.",
      href: "/services/social-media",
      tag: "MANAGEMENT",
    },
    {
      number: "05",
      title: "Meta Ads",
      description: "Campaigns focused on reaching the right people.",
      href: "/services/meta-ads",
      tag: "MARKETING",
    },
    {
      number: "06",
      title: "Video",
      description: "Editing, animation and motion that bring ideas to life.",
      href: "/services/video",
      tag: "MOTION",
    },
    {
      number: "07",
      title: "Business Growth",
      description: "Digital strategy and support built around business goals.",
      href: "/services/business-growth",
      tag: "GROWTH",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Website Development",
      category: "WEBSITE / DEVELOPMENT",
      image: "/work/work-1.jpg",
      className: "home-v2-project-featured",
    },
    {
      number: "02",
      title: "Brand & Creative",
      category: "CREATIVE / DESIGN",
      image: "/work/work-2.jpg",
      className: "home-v2-project-bimg",
    },
    {
      number: "03",
      title: "Growth Campaign",
      category: "SOCIAL / MARKETING",
      image: "/work/work-3.jpg",
      className: "home-v2-project-bimg",
    },
  ];

  return (
    <main className="home-v2">

      {/* HERO */}

      <section className="home-v2-hero h-screen">
        <div className="site-container">

          <div className="home-v2-hero-grid">

            {/* LEFT — CREATIVE COMPOSITION */}

            <div className="home-v2-hero-art">
              <div className="home-v2-art-label">
                <span>CREATIVE THINKING</span>
                <span>01 / 07</span>
              </div>

              <div className="home-v2-art-composition">
                <div className="home-v2-art-green"></div>
                <div className="home-v2-art-red"></div>
                <div className="home-v2-art-circle"></div>

                <div className="home-v2-art-word">
                  MAKE
                  <br />
                  IT
                  <br />
                  <span className="bg-black pr-2 m-9 md:m-20">
                    MATTER.
                  </span>
                </div>

                <div className="home-v2-art-bottom">
                  <span>THINK DIFFERENTLY.</span>
                  <span>BUILD WITH PURPOSE.</span>
                </div>
              </div>

              <div className="home-v2-art-footer">
                <span>DESIGN THAT CONNECTS.</span>
                <span>↘</span>
              </div>
            </div>


            {/* RIGHT — FLOATING PROJECTS */}

            <div className="home-v2-project-float">

              <div className="home-v2-float-heading">
                <span>SELECTED PROJECTS</span>
                <span>02 / 07</span>
              </div>

              <div className="home-v2-float-stage">

                <a
                  href="/work"
                  className="home-v2-float-card home-v2-float-card-one"
                >
                  <img
                    src="/work/work-3.jpg"
                    alt="Website development project"
                  />
                  <div className="home-v2-float-card-info">
                    <span>01 / DIGITAL</span>
                    <span>↗</span>
                  </div>
                </a>

                <a
                  href="/work"
                  className="home-v2-float-card home-v2-float-card-two"
                >
                  <img
                    src="/work/work-4.jpg"
                    alt="Creative design project"
                  />
                  <div className="home-v2-float-card-info">
                    <span>02 / CREATIVE</span>
                    <span>↗</span>
                  </div>
                </a>

                <a
                  href="/work"
                  className="home-v2-float-card home-v2-float-card-three"
                >
                  <img
                    src="/work/work-1.jpg"
                    alt="Marketing campaign project"
                  />
                  <div className="home-v2-float-card-info">
                    <span>03 / CAMPAIGN</span>
                    <span>↗</span>
                  </div>
                </a>

                <div className="home-v2-float-orbit"></div>
                <div className="home-v2-float-cross">+</div>

              </div>

              <div className="home-v2-float-footer">
                <span>CREATIVE WORK, MADE WITH PURPOSE.</span>
                <a href="/work">VIEW ALL WORK ↗</a>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* INTRO */}

      <section className="home-v2-intro">
        <div className="site-container">

          <div className="home-v2-section-label">
            <span>01 — WHO WE ARE</span>
            <span>BUILT AROUND YOUR BUSINESS</span>
          </div>

          <div className="home-v2-intro-grid">
            <h2>
              More than
              <br />
              <span>just digital.</span>
            </h2>

            <div className="home-v2-intro-copy">
              <p className="home-v2-intro-lead">
                We bring creativity, technology and marketing
                together to help businesses build a stronger presence.
              </p>

              <p>
                From your first website to your next campaign,
                Meetscripts Technologies helps turn ideas into
                clear, purposeful work.
              </p>

              <a href="/about" className="home-v2-inline-link">
                Get to know us <span>↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* SERVICES */}

      <section className="home-v2-services">
        <div className="site-container">

          <div className="home-v2-section-label home-v2-section-label-light">
            <span>02 — WHAT WE DO</span>
            <span>CREATIVE × DIGITAL × GROWTH</span>
          </div>

          <div className="home-v2-services-heading">
            <h2>
              The right skills.
              <br />
              <span>One creative partner.</span>
            </h2>

            <p>
              Everything your business needs to build,
              communicate and grow in the digital world.
            </p>
          </div>

          <div className="home-v2-service-list">
            {services.map((service) => (
              <a
                href={service.href}
                className="home-v2-service-row"
                key={service.number}
              >
                <span className="home-v2-service-number">
                  {service.number}
                </span>

                <div className="home-v2-service-main">
                  <span className="home-v2-service-tag">
                    {service.tag}
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <span className="home-v2-service-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="home-v2-services-bottom">
            <span>ONE TEAM. MULTIPLE WAYS TO MOVE FORWARD.</span>
            <a href="/services">Explore all services ↗</a>
          </div>

        </div>
      </section>


      {/* SELECTED WORK */}

      <section className="home-v2-work">
        <div className="site-container">

          <div className="home-v2-section-label">
            <span>03 — SELECTED WORK</span>
            <span>IDEAS MADE REAL</span>
          </div>

          <div className="home-v2-work-heading">
            <h2>
              Made with
              <br />
              <span>intention.</span>
            </h2>

            <a href="/work" className="home-v2-inline-link">
              View all work <span>↗</span>
            </a>
          </div>

          <div className="home-v2-project-grid">
            {projects.map((project) => (
              <a
                href="/work"
                className={`home-v2-project ${project.className}`}
                key={project.number}
              >
                <div className="home-v2-project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="home-v2-project-open">↗</span>
                </div>

                <div className="home-v2-project-info">
                  <div>
                    <span>{project.number}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <p>{project.category}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>


      {/* APPROACH */}

      <section className="home-v2-approach">
        <div className="site-container">

          <div className="home-v2-section-label">
            <span>04 — OUR APPROACH</span>
            <span>THOUGHTFUL BY DESIGN</span>
          </div>

          <div className="home-v2-approach-grid">
            <h2>
              Good work
              <br />
              starts with
              <br />
              <span>good thinking.</span>
            </h2>

            <div className="home-v2-approach-content">
              <p>
                We believe the best digital work starts with
                understanding the business behind it.
              </p>

              <div className="home-v2-approach-points">
                <div>
                  <span>01</span>
                  <h3>Understand</h3>
                  <p>Know your business, audience and goals.</p>
                </div>

                <div>
                  <span>02</span>
                  <h3>Create</h3>
                  <p>Build a clear and considered direction.</p>
                </div>

                <div>
                  <span>03</span>
                  <h3>Deliver</h3>
                  <p>Make work that supports real outcomes.</p>
                </div>
              </div>

              <a href="/process" className="home-v2-inline-link">
                See how we work <span>↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* FINAL CTA */}

      <section className="home-v2-cta">
        <div className="site-container">

          <div className="home-v2-section-label home-v2-section-label-light">
            <span>05 — START SOMETHING</span>
            <span>LET'S MAKE IT HAPPEN</span>
          </div>

          <div className="home-v2-cta-content">
            <p>HAVE AN IDEA IN MIND?</p>

            <h2>
              Let&apos;s make
              <br />
              it <span>matter.</span>
            </h2>

            <a href="/contact" className="home-v2-button home-v2-button-red">
              Start a conversation <span>↗</span>
            </a>
          </div>

          <div className="home-v2-cta-bottom">
            <span>WEBSITES</span>
            <span>CREATIVE</span>
            <span>PRODUCT DESIGN</span>
            <span>VIDEO</span>
            <span>MARKETING</span>
            <span>GROWTH</span>
          </div>

        </div>
      </section>

    </main>
  );
}
