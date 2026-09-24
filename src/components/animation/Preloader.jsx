"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const numberRef = useRef(null);
  const logoRef = useRef(null);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const progressBar = progressRef.current;
    const number = numberRef.current;
    const logo = logoRef.current;

    if (!container || !progressBar || !number || !logo) {
      setVisible(false);
      return;
    }

    const isMobile =
      window.matchMedia("(max-width: 767px)").matches;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    /*
     * --------------------------------
     * MOBILE / REDUCED MOTION
     * --------------------------------
     */

    if (reducedMotion) {
      gsap.set(progressBar, {
        width: "100%",
      });

      number.textContent = "100";

      gsap.set(logo, {
        opacity: 1,
        y: 0,
      });

      gsap.to(container, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          setVisible(false);
        },
      });

      return;
    }

    /*
     * --------------------------------
     * LOADING OBJECT
     * --------------------------------
     */

    const progress = {
      value: 0,
    };

    const duration = isMobile ? 1.35 : 1.8;

    let finished = false;

    const finish = () => {
      if (finished) return;

      finished = true;

      gsap.killTweensOf(progress);

      gsap.to(progressBar, {
        width: "100%",
        duration: 0.15,
        ease: "power2.out",
      });

      number.textContent = "100";

      gsap.to(logo, {
        y: -10,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(container, {
        clipPath: "inset(0 0 100% 0)",
        duration: isMobile ? 0.55 : 0.8,
        delay: 0.4,
        ease: "power4.inOut",

        onComplete: () => {
          setVisible(false);
        },
      });
    };

    /*
     * --------------------------------
     * PROGRESS
     * --------------------------------
     */

    gsap.to(progress, {
      value: 100,
      duration,
      ease: "power2.inOut",

      onUpdate: () => {
        const value = Math.round(progress.value);

        if (number) {
          number.textContent = value
            .toString()
            .padStart(2, "0");
        }

        if (progressBar) {
          progressBar.style.width = `${value}%`;
        }
      },

      onComplete: finish,
    });

    /*
     * --------------------------------
     * FALLBACK
     *
     * Prevents the loader from ever
     * blocking the website.
     * --------------------------------
     */

    const fallback = window.setTimeout(
      finish,
      isMobile ? 3000 : 4000
    );

    return () => {
      window.clearTimeout(fallback);
      gsap.killTweensOf(progress);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex flex-col justify-between bg-[#090909] px-5 py-6 text-white md:px-10 md:py-8"
    >
      {/* TOP */}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold tracking-[-0.03em]">
            MEET
            <span className="text-[#e02020]">
              SCRIPTS
            </span>
          </p>

          <p className="mt-1 text-[7px] tracking-[0.3em] text-white/40">
            TECHNOLOGIES
          </p>
        </div>

        <p className="technical hidden text-white/40 sm:block">
          DIGITAL MOTION LAB
        </p>
      </div>

      {/* CENTER */}

      <div>
        <div
          ref={logoRef}
          className="translate-y-8 opacity-0"
        >
          <p className="technical mb-5 text-[#e02020]">
            WHERE CODE MEETS CREATIVITY
          </p>

          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-bold leading-[0.8] tracking-[-0.07em]">
            MEET
            <br />
            <span className="text-[#e02020]">
              SCRIPTS.
            </span>
          </h1>
        </div>
      </div>

      {/* BOTTOM */}

      <div>
        <div className="mb-4 flex items-end justify-between">
          <p className="technical text-white/40">
            INITIALIZING EXPERIENCE
          </p>

          <p
            ref={numberRef}
            className="font-mono text-sm text-white"
          >
            00
          </p>
        </div>

        <div className="h-[2px] w-full overflow-hidden bg-white/10">
          <div
            ref={progressRef}
            className="h-full w-0 bg-[#e02020]"
          />
        </div>
      </div>
    </div>
  );
}