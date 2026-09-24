"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function ProjectCard({ project, index }) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const image = imageRef.current;

        if (!card || !image) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -4;
        const rotateY = ((x / rect.width) - 0.5) * 4;

        gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.6,
            ease: "power3.out",
            transformPerspective: 1200,
        });

        gsap.to(image, {
            x: (x / rect.width - 0.5) * 18,
            y: (y / rect.height - 0.5) * 18,
            scale: 1.06,
            duration: 0.8,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        gsap.to(imageRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
        });
    };

    return (
        <article
            ref={cardRef}
            className="
  project-card
  relative
  h-[68vh]
  w-full
  overflow-hidden
  bg-[#151515]

  md:h-[76vh]
  md:w-[72vw]
  md:shrink-0
"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-cursor="drag"
        >
            {/* IMAGE */}

            <div className="absolute inset-0 overflow-hidden">
                <img
                    ref={imageRef}
                    src={project.image}
                    alt={project.title}
                    className="
            h-full
            w-full
            object-cover
            transition-[filter]
            duration-700
          "
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>

            {/* TOP INFO */}

            <div className="absolute left-5 right-5 top-5 flex items-start justify-between text-white md:left-8 md:right-8 md:top-8">
                <div>
                    <span className="technical text-xs tracking-[0.18em] text-white/60">
                        {project.category}
                    </span>

                    <p className="mt-2 text-xs text-white/40">
                        {project.client} — {project.year}
                    </p>
                </div>

                <span className="font-mono text-xs text-white/50">
                    {project.number}
                </span>
            </div>

            {/* BOTTOM CONTENT */}

            <div className="absolute bottom-5 left-5 right-5 text-white md:bottom-8 md:left-8 md:right-8">
                <div className="mb-5 flex items-end justify-between gap-6">
                    <div>
                        <h3
                            className="
                text-[clamp(3.5rem,9vw,8rem)]
                font-bold
                leading-[0.78]
                tracking-[-0.07em]
              "
                        >
                            {project.title}
                        </h3>

                        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                            {project.description}
                        </p>
                    </div>

                    <a
                        href={project.href}
                        data-cursor="cta"
                        className="
              hidden
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              transition-all
              duration-500
              hover:border-[#e02020]
              hover:bg-[#e02020]
              md:flex
            "
                        aria-label={`View ${project.title}`}
                    >
                        <ArrowUpRight size={21} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="h-px w-full bg-white/20">
                    <div className="h-full w-0 bg-[#e02020] transition-all duration-700 group-hover:w-full" />
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <span className="technical text-[10px] tracking-[0.2em] text-white/40">
                        SELECTED WORK
                    </span>

                    <span className="technical text-[10px] tracking-[0.2em] text-white/40">
                        VIEW CASE STUDY ↗
                    </span>
                </div>
            </div>
        </article>
    );
}