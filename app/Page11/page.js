"use client";

import React, { useEffect } from "react";
import { animate } from "motion";

const Page11 = () => {
  useEffect(() => {
    // Continuous marquee effect
    animate(
      ".slider",
      { x: ["0%", "-50%"] }, // shift half (since we duplicated items)
      {
        duration: 15, // adjust speed
        easing: "linear",
        repeat: Infinity,
      }
    );
  }, []);

  return (
    <div className="p-12 text-center text-white overflow-hidden" data-scroll-section>
      <div>
        <h1 className="text-6xl font-medium">Featured In</h1>
        <p className="mt-4 text-lg">
          Thrilled to have been featured in several prominent media <br />
          outlets and leading professionals across the world’s best <br />
          real estate and web3 institutions.
        </p>

        {/* Slider wrapper */}
        <div className="relative w-full overflow-hidden mt-14">
          <div className="slider flex gap-20 text-4xl font-semibold whitespace-nowrap">
            {/* Original */}
            <h1>SHOKWORKS</h1>
            <h1>AUTODESK</h1>
            <h1>FIBREE</h1>
            <h1>NUKLAI</h1>
            <h1>SAFETECH</h1>
            <h1>AKILA</h1>

            {/* Duplicate for seamless loop */}
            <h1>SHOKWORKS</h1>
            <h1>AUTODESK</h1>
            <h1>FIBREE</h1>
            <h1>NUKLAI</h1>
            <h1>SAFETECH</h1>
            <h1>AKILA</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page11;
