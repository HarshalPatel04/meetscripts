import "./globals.css";

import Header from "@/components/layout/Header";

import SmoothScroll from "@/components/animation/SmoothScroll";
import GSAPProvider from "@/components/animation/GSAPProvider";
import Preloader from "@/components/animation/Preloader";
import PageTransition from "@/components/animation/PageTransition";
import CustomCursor from "@/components/animation/CustomCursor";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "MEETSCRIPTS TECHNOLOGIES — Where Code Meets Creativity",
  description:
    "MEETSCRIPTS TECHNOLOGIES — Website development, digital marketing, Meta Ads, graphic design, social media, video, 3D and creative technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />

        <PageTransition />

        <CustomCursor />

        <GSAPProvider />

        <SmoothScroll>
          <Header />

          {children}

          <Footer />
        </SmoothScroll>

        <div className="site-noise" />

      </body>
    </html>
  );
}