"use client";

import React, { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocomotivePage({ children }) {
    useEffect(() => {
        let locomotiveScroll;

        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            const mainEl = document.querySelector(".main");

            if (mainEl) {
                // Initialize Locomotive Scroll on .main
                locomotiveScroll = new LocomotiveScroll({
                    el: mainEl,
                    smooth: true,
                    lerp: 0.08,
                });

                // Update ScrollTrigger on Locomotive scroll
                locomotiveScroll.on("scroll", ScrollTrigger.update);

                // ScrollTrigger proxy for Locomotive Scroll
                ScrollTrigger.scrollerProxy(mainEl, {
                    scrollTop(value) {
                        return arguments.length
                            ? locomotiveScroll.scrollTo(value, 0, 0)
                            : locomotiveScroll.scroll.instance.scroll.y;
                    },
                    getBoundingClientRect() {
                        return {
                            top: 0,
                            left: 0,
                            width: window.innerWidth,
                            height: window.innerHeight,
                        };
                    },
                    pinType: mainEl.style.transform ? "transform" : "fixed",
                });

                // Refresh ScrollTrigger after setup
                ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
                ScrollTrigger.refresh();
            }
        };

        initScroll();

        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
            ScrollTrigger.removeEventListener("refresh", () => locomotiveScroll.update());
        };
    }, []);

    return <div className="main" data-scroll-container>{children}</div>;
}
