import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Meetscripts Technologies",
  description:
    "Where code meets creativity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}