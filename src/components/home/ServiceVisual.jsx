"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ServiceVisual({ service }) {
    const containerRef = useRef(null);
    const previousVisual = useRef(service.visual);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".service-visual-content",
                {
                    opacity: 0,
                    scale: 0.92,
                    y: 20,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power4.out",
                }
            );

            gsap.fromTo(
                ".service-visual-element",
                {
                    opacity: 0,
                    y: 30,
                    rotate: -5,
                },
                {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    duration: 0.8,
                    stagger: 0.06,
                    ease: "power4.out",
                }
            );
        }, containerRef);

        previousVisual.current = service.visual;

        return () => ctx.revert();
    }, [service]);

    return (
        <div
            ref={containerRef}
            className="relative h-full min-h-[420px] overflow-hidden bg-[#151515]"
        >
            {/* Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
                    backgroundSize: "42px 42px",
                }}
            />

            {/* Red glow */}
            <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e02020]/15 blur-[90px]" />

            <div className="service-visual-content relative flex h-full min-h-[420px] flex-col justify-between p-7 md:p-10">
                {/* Top */}
                <div className="flex items-start justify-between">
                    <span className="technical text-white/40">
                        SERVICE / {service.id}
                    </span>

                    <span className="technical text-[#e02020]">
                        {service.shortTitle}
                    </span>
                </div>

                {/* Center */}
                <div className="relative flex flex-1 items-center justify-center py-12">
                    {service.visual === "WEB" && (
                        <WebVisual />
                    )}

                    {service.visual === "GROW" && (
                        <GrowthVisual />
                    )}

                    {service.visual === "META" && (
                        <MetaVisual />
                    )}

                    {service.visual === "DESIGN" && (
                        <DesignVisual />
                    )}

                    {service.visual === "SOCIAL" && (
                        <SocialVisual />
                    )}

                    {service.visual === "VIDEO" && (
                        <VideoVisual />
                    )}

                    {service.visual === "3D" && (
                        <ThreeDVisual />
                    )}

                    {service.visual === "BUSINESS" && (
                        <BusinessVisual />
                    )}
                </div>

                {/* Bottom */}
                <div className="flex items-end justify-between">
                    <span className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.08]">
                        {service.id}
                    </span>

                    <span className="technical text-white/30">
                        MEETSCRIPTS
                    </span>
                </div>
            </div>
        </div>
    );
}

/* --------------------------------
   WEB
-------------------------------- */

function WebVisual() {
    return (
        <div className="service-visual-element relative w-[78%] max-w-[470px]">
            <div className="absolute -inset-5 rounded-[2px] border border-[#e02020]/20" />

            <div className="overflow-hidden rounded-sm border border-white/15 bg-[#0d0d0d] shadow-2xl">
                <div className="flex h-8 items-center gap-2 border-b border-white/10 px-3">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>

                <div className="p-5">
                    <div className="mb-8 h-2 w-20 bg-[#e02020]" />

                    <div className="h-5 w-[80%] bg-white/80" />
                    <div className="mt-2 h-5 w-[55%] bg-white/20" />

                    <div className="mt-8 grid grid-cols-3 gap-2">
                        <div className="h-20 bg-white/10" />
                        <div className="h-20 bg-[#e02020]/30" />
                        <div className="h-20 bg-white/10" />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* --------------------------------
   GROWTH
-------------------------------- */

function GrowthVisual() {
    return (
        <div className="service-visual-element relative h-[230px] w-[78%] max-w-[440px]">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

            <div className="absolute bottom-0 left-[8%] h-[35%] w-[12%] bg-white/10" />

            <div className="absolute bottom-0 left-[27%] h-[52%] w-[12%] bg-white/15" />

            <div className="absolute bottom-0 left-[46%] h-[68%] w-[12%] bg-[#e02020]/50" />

            <div className="absolute bottom-0 left-[65%] h-[84%] w-[12%] bg-white/20" />

            <svg
                viewBox="0 0 400 220"
                className="absolute inset-0 h-full w-full"
                fill="none"
            >
                <path
                    d="M20 190 C80 175 105 150 145 160 C195 175 220 105 260 115 C300 125 325 55 380 25"
                    stroke="#e02020"
                    strokeWidth="3"
                />

                <circle
                    cx="380"
                    cy="25"
                    r="5"
                    fill="#e02020"
                />
            </svg>

            <span className="absolute right-0 top-0 font-mono text-[10px] text-[#e02020]">
                +GROWTH
            </span>
        </div>
    );
}

/* --------------------------------
   META
-------------------------------- */

function MetaVisual() {
    return (
        <div className="service-visual-element w-[78%] max-w-[420px]">
            <div className="grid grid-cols-2 gap-3">
                <div className="border border-white/10 bg-white/5 p-5">
                    <span className="technical text-white/40">
                        REACH
                    </span>

                    <p className="mt-6 text-4xl font-bold">
                        84.2K
                    </p>

                    <div className="mt-5 h-1 bg-white/10">
                        <div className="h-full w-[72%] bg-[#e02020]" />
                    </div>
                </div>

                <div className="border border-white/10 bg-white/5 p-5">
                    <span className="technical text-white/40">
                        CTR
                    </span>

                    <p className="mt-6 text-4xl font-bold">
                        4.8%
                    </p>

                    <div className="mt-5 h-1 bg-white/10">
                        <div className="h-full w-[58%] bg-[#e02020]" />
                    </div>
                </div>

                <div className="col-span-2 border border-white/10 bg-white/5 p-5">
                    <div className="flex items-end gap-2">
                        {[35, 50, 42, 72, 58, 88, 75, 95].map(
                            (height, index) => (
                                <div
                                    key={index}
                                    className="flex-1 bg-[#e02020]/60"
                                    style={{
                                        height: `${height}px`,
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* --------------------------------
   DESIGN
-------------------------------- */

function DesignVisual() {
    return (
        <div className="service-visual-element relative h-[280px] w-[280px]">
            <div className="absolute left-[10%] top-[10%] h-[70%] w-[70%] rotate-[-10deg] border border-white/20 bg-white/5" />

            <div className="absolute right-0 top-[25%] h-[60%] w-[60%] rotate-[8deg] bg-[#e02020]" />

            <div className="absolute left-[25%] top-[25%] z-10 flex h-[65%] w-[65%] items-center justify-center bg-[#f1f1ed]">
                <span className="text-[4rem] font-bold tracking-[-0.08em] text-black">
                    M.
                </span>
            </div>

            <span className="absolute bottom-0 left-0 font-mono text-[9px] text-white/30">
                VISUAL SYSTEM / 04
            </span>
        </div>
    );
}

/* --------------------------------
   SOCIAL
-------------------------------- */

function SocialVisual() {
    return (
        <div className="service-visual-element grid w-[75%] max-w-[400px] grid-cols-3 gap-2">
            {[
                "bg-[#e02020]",
                "bg-white/10",
                "bg-white/5",
                "bg-white/10",
                "bg-[#e02020]/50",
                "bg-white/10",
                "bg-white/5",
                "bg-white/10",
                "bg-white/5",
            ].map((color, index) => (
                <div
                    key={index}
                    className={`aspect-square ${color}`}
                >
                    {index === 4 && (
                        <div className="flex h-full items-center justify-center">
                            <span className="text-xl font-bold">
                                +
                            </span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

/* --------------------------------
   VIDEO
-------------------------------- */

function VideoVisual() {
    return (
        <div className="service-visual-element relative w-[82%] max-w-[450px] overflow-hidden border border-white/10 bg-[#0c0c0c]">
            <div className="aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e02020]/50 via-transparent to-white/5" />

                <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40">
                    <span className="ml-1 text-white">
                        ▶
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                <span className="technical text-white/40">
                    MOTION / 06
                </span>

                <span className="font-mono text-[9px] text-[#e02020]">
                    00:24
                </span>
            </div>
        </div>
    );
}

/* --------------------------------
   3D
-------------------------------- */

function ThreeDVisual() {
    return (
        <div className="service-visual-element relative h-[250px] w-[250px]">
            <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] border-2 border-[#e02020] [transform-style:preserve-3d]" />

            <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] border border-white/30" />

            <div className="absolute left-1/2 top-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] bg-white/10" />

            <span className="absolute bottom-0 left-0 font-mono text-[9px] text-white/30">
                DEPTH / MOTION / 07
            </span>
        </div>
    );
}

/* --------------------------------
   BUSINESS
-------------------------------- */

function BusinessVisual() {
    return (
        <div className="service-visual-element relative h-[250px] w-[80%] max-w-[430px]">
            <div className="absolute left-0 top-1/2 h-px w-full bg-white/15" />

            <div className="absolute left-[10%] top-[25%] h-3 w-3 rounded-full bg-white/50" />

            <div className="absolute left-[35%] top-[40%] h-3 w-3 rounded-full bg-[#e02020]" />

            <div className="absolute left-[60%] top-[22%] h-3 w-3 rounded-full bg-white/50" />

            <div className="absolute left-[82%] top-[60%] h-3 w-3 rounded-full bg-[#e02020]" />

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 430 250"
                fill="none"
            >
                <path
                    d="M40 80 L150 125 L260 70 L355 150"
                    stroke="rgba(255,255,255,.2)"
                    strokeWidth="1"
                />
            </svg>

            <span className="absolute bottom-0 left-0 font-mono text-[9px] text-white/30">
                CONNECTIONS / OPPORTUNITIES / 08
            </span>
        </div>
    );
}