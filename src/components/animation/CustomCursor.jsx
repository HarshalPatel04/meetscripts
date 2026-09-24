"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const textRef = useRef(null);

    const mouse = useRef({
        x: 0,
        y: 0,
    });

    const current = useRef({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        // Don't use custom cursor on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const cursor = cursorRef.current;
        const follower = followerRef.current;
        const text = textRef.current;

        if (!cursor || !follower || !text) return;

        const moveCursor = (event) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
        };

        const render = () => {
            current.current.x +=
                (mouse.current.x - current.current.x) * 0.18;

            current.current.y +=
                (mouse.current.y - current.current.y) * 0.18;

            gsap.set(cursor, {
                x: mouse.current.x,
                y: mouse.current.y,
            });

            gsap.set(follower, {
                x: current.current.x,
                y: current.current.y,
            });

            requestAnimationFrame(render);
        };

        const handleMouseOver = (event) => {
            const target = event.target.closest("[data-cursor]");

            if (!target) {
                setCursor("default");
                return;
            }

            setCursor(target.dataset.cursor);
        };

        const setCursor = (type) => {
            if (!cursor || !follower || !text) return;

            gsap.killTweensOf([cursor, follower, text]);

            if (type === "view") {
                gsap.to(cursor, {
                    scale: 0,
                    duration: 0.25,
                    ease: "power3.out",
                });

                gsap.to(follower, {
                    width: 100,
                    height: 100,
                    backgroundColor: "#e02020",
                    borderColor: "#e02020",
                    duration: 0.4,
                    ease: "power3.out",
                });

                gsap.to(text, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.35,
                    ease: "back.out(1.5)",
                });

                text.textContent = "VIEW";
            }

            if (type === "drag") {
                gsap.to(cursor, {
                    scale: 0,
                    duration: 0.2,
                });

                gsap.to(follower, {
                    width: 90,
                    height: 90,
                    backgroundColor: "transparent",
                    borderColor: "#e02020",
                    duration: 0.35,
                    ease: "power3.out",
                });

                gsap.to(text, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                });

                text.textContent = "DRAG";
            }

            if (type === "cta") {
                gsap.to(cursor, {
                    scale: 0,
                    duration: 0.2,
                });

                gsap.to(follower, {
                    width: 110,
                    height: 110,
                    backgroundColor: "#f5f5f5",
                    borderColor: "#f5f5f5",
                    color: "#090909",
                    duration: 0.35,
                    ease: "power3.out",
                });

                gsap.to(text, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                });

                text.textContent = "LET'S TALK";
            }

            if (type === "link") {
                gsap.to(cursor, {
                    scale: 0,
                    duration: 0.2,
                });

                gsap.to(follower, {
                    width: 52,
                    height: 52,
                    backgroundColor: "transparent",
                    borderColor: "#e02020",
                    duration: 0.3,
                });

                gsap.to(text, {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.2,
                });
            }

            if (type === "default") {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power3.out",
                });

                gsap.to(follower, {
                    width: 34,
                    height: 34,
                    backgroundColor: "transparent",
                    borderColor: "rgba(255,255,255,0.4)",
                    duration: 0.35,
                    ease: "power3.out",
                });

                gsap.to(text, {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.2,
                });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseover", handleMouseOver);

        render();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
            aria-hidden="true"
        >
            {/* Small cursor */}
            <div
                ref={cursorRef}
                className="fixed -left-[4px] -top-[4px] h-2 w-2 rounded-full bg-[#e02020]"
            />

            {/* Main follower */}
            <div
                ref={followerRef}
                className="fixed -left-[17px] -top-[17px] flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/40 text-center"
            >
                <span
                    ref={textRef}
                    className="px-2 text-[8px] font-bold uppercase leading-[1] tracking-[0.08em] opacity-0"
                >
                    VIEW
                </span>
            </div>
        </div>
    );
}