"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPProvider() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.config({
            limitCallbacks: true,
            ignoreMobileResize: true,
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return null;
}