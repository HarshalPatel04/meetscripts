import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Process from "@/components/home/Process";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <SelectedWork />
      <Process />
      <FinalCTA />

      <section className="flex min-h-screen items-center border-t border-white/10">
        <div className="site-container">
          <p className="technical mb-8 text-white/30">
            SECTION / 02
          </p>

          <h2 className="display-lg">
            WE BUILD
            <br />
            <span className="text-red">
              EXPERIENCES.
            </span>
          </h2>
        </div>
      </section>
    </main>
  );
}