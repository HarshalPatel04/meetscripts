import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const revealUp = (element, options = {}) => {
    if (!element) return;

    const {
        duration = 1,
        delay = 0,
        y = 80,
        ease = "power4.out",
    } = options;

    gsap.fromTo(
        element,
        {
            y,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
            },
        }
    );
};

export const revealScale = (element, options = {}) => {
    if (!element) return;

    const {
        duration = 1.2,
        delay = 0,
        scale = 0.85,
    } = options;

    gsap.fromTo(
        element,
        {
            scale,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            duration,
            delay,
            ease: "power4.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
            },
        }
    );
};

export const staggerReveal = (elements, options = {}) => {
    if (!elements?.length) return;

    const {
        duration = 0.9,
        stagger = 0.08,
        y = 60,
    } = options;

    gsap.fromTo(
        elements,
        {
            y,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration,
            stagger,
            ease: "power4.out",
            scrollTrigger: {
                trigger: elements[0],
                start: "top 85%",
                once: true,
            },
        }
    );
};