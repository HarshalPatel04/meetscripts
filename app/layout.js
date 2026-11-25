import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Meetscripts Technologies | Creative, Digital & Marketing Solutions",
  description:
    "Meetscripts Technologies helps businesses grow through graphics design, printing solutions, video animation, website development and digital marketing.",
  applicationName: "Meetscripts Technologies",
  keywords: [
    "Meetscripts Technologies",
    "Graphics Design",
    "Printing Solutions",
    "Video Animation",
    "Website Development",
    "Digital Marketing",
    "Branding",
    "Creative Agency",
  ],
  openGraph: {
    title: "Meetscripts Technologies",
    description:
      "Creative thinking, digital solutions and marketing for growing businesses.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#111111] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}