"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
  const canvasRef = useRef(null);
  const frameCount = 53; 

  // Path to your frames
  const currentFrame = (index) =>
    `/Assets/bridges/bridges${index.toString().padStart(5, "0")}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    // Resize canvas to window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameState = { value: 0 };

    // Draw a single frame centered on canvas
    const drawFrame = (img) => {
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
        centerShiftX, centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Preload frames
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) drawFrame(img); // Draw first frame immediately

        if (loadedCount === frameCount) {
          // Start GSAP animation when all frames are loaded
          gsap.to(frameState, {
            value: frameCount - 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".page5 canvas",
              start: "top center",
              end: "bottom bottom",
              scrub: 1,
              scroller: ".main", // if using locomotive scroll
            },
            onUpdate: () => {
              const index = Math.round(frameState.value);
              drawFrame(loadedImages[index]);
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
    <div className="page5" data-scroll-section>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default Page5;
