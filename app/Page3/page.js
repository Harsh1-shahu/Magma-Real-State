"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page3 = () => {
    const canvasRef = useRef(null);
    const frameCount = 66;

    const currentFrame = (index) =>
        `/Assets/Frames/frames${index.toString().padStart(5, "0")}.png`;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");

        // Resize canvas to full window
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // Object to animate with GSAP
        const frameState = { value: 0 };

        // Function to draw image centered on canvas
        const drawCoverImage = (img) => {
            if (!img || !img.width) return;
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShiftX = (canvas.width - img.width * ratio) / 2;
            const centerShiftY = (canvas.height - img.height * ratio) / 2;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(
                img,
                0, 0, img.width, img.height,
                centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
            );
        };

        // Preload all images
        const loadedImages = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                // Draw first frame immediately
                if (loadedCount === 1) drawCoverImage(img);

                // Start GSAP animation after all images are loaded
                if (loadedCount === frameCount) {
                    gsap.to(frameState, {
                        value: frameCount - 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".page3 canvas",
                            start: "top center",
                            end: "bottom bottom",
                            scrub: 1,
                            scroller: ".main",
                        },
                        onUpdate: () => {
                            const index = Math.round(frameState.value);
                            drawCoverImage(loadedImages[index]);
                        },
                    });
                }
            };
            loadedImages.push(img);
        }

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div
        data-scroll
        data-scroll-speed="-20"
        className="page3 bg-[#1137ca]" data-scroll-section>
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    )
}

export default page3