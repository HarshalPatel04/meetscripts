"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function PageTransition() {
    const overlayRef = useRef(null);
    const pathname = usePathname();
    const previousPath = useRef(pathname);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            previousPath.current = pathname;
            return;
        }

        if (previousPath.current === pathname) {
            return;
        }

        const overlay = overlayRef.current;

        if (!overlay) return;

        const tl = gsap.timeline();

        tl.set(overlay, {
            display: "flex",
            clipPath: "inset(100% 0 0 0)",
        });

        tl.to(overlay, {
            clipPath: "inset(0% 0 0 0)",
            duration: 0.6,
            ease: "power4.inOut",
        });

        tl.to(overlay, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.7,
            delay: 0.15,
            ease: "power4.inOut",
            onComplete: () => {
                gsap.set(overlay, {
                    display: "none",
                });
            },
        });

        previousPath.current = pathname;

        return () => {
            tl.kill();
        };
    }, [pathname]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[998] hidden items-center justify-center bg-[#e02020]"
            style={{
                clipPath: "inset(100% 0 0 0)",
            }}
        >
            <div className="text-center text-black">
                <p className="text-[clamp(2rem,7vw,7rem)] font-bold leading-none tracking-[-0.07em]">
                    MEET
                    <br />
                    SCRIPTS.
                </p>

                <p className="mt-5 font-mono text-[9px] tracking-[0.25em]">
                    WHERE CODE MEETS CREATIVITY
                </p>
            </div>
        </div>
    );
}