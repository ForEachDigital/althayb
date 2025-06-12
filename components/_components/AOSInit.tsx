

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";          // ← global styles

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            once: true,        // animate only first time
            duration: 700,
            easing: "ease-out",
        });
    }, []);

    return null;
}
