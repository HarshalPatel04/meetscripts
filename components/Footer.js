import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">

            <div className="site-container">

                <div className="footer-top">

                    {/* Statement */}

                    <div className="footer-statement">

                        <p className="footer-label">
                            MEETSCRIPTS TECHNOLOGIES
                        </p>

                        <h2>
                            Where code
                            <br />
                            meets <span>creativity.</span>
                        </h2>

                    </div>


                    {/* Links */}

                    <div className="footer-links">

                        <div>

                            <p className="footer-label">
                                EXPLORE
                            </p>

                            <Link href="/services">
                                Services
                            </Link>

                            <Link href="/work">
                                Work
                            </Link>

                            <Link href="/about">
                                About
                            </Link>

                            <Link href="/process">
                                Process
                            </Link>

                            <Link href="/contact">
                                Contact
                            </Link>

                        </div>


                        <div>

                            <p className="footer-label">
                                CONNECT
                            </p>

                            <a href="#" target="_blank">
                                Instagram
                            </a>

                            <a href="#" target="_blank">
                                Facebook
                            </a>

                            <a href="#" target="_blank">
                                LinkedIn
                            </a>

                            <a href="mailto:hello@meetscripts.com">
                                Email
                            </a>

                        </div>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 Meetscripts Technologies
                    </span>

                    <span>
                        Built around ideas that move business forward.
                    </span>

                </div>

            </div>

        </footer>
    );
}