import Link from "next/link";

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-inner site-container">

                {/* Logo */}
                <Link href="/" className="site-logo">
                    <div className="logo-mark">
                        M
                    </div>

                    <div className="logo-text">
                        <strong>MEETSCRIPTS</strong>
                        <span>TECHNOLOGIES</span>
                    </div>
                </Link>


                {/* Desktop Navigation */}
                <nav className="desktop-nav">

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

                </nav>


                {/* CTA */}
                <Link
                    href="/contact"
                    className="header-cta"
                >
                    Let&apos;s talk
                    <span>↗</span>
                </Link>

            </div>
        </header>
    );
}