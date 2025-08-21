"use client";

import React, { useEffect, useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import LocomotivePage from "./components/LocomotivePage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageContent = () => {
  const canvasRef = useRef(null);
  const frameCount = 66;
  const images = useRef([]);
  const frame = useRef({ value: 0 });

  const currentFrame = (index) =>
    `/Assets/Frames/frames${index.toString().padStart(5, "0")}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frame = { value: 0 };

    // ✅ Move drawCoverImage ABOVE
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

    // Preload images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

    // Draw first frame ✅ works now
    images.current[0].onload = () => drawCoverImage(images.current[0]);

    // GSAP ScrollTrigger
    gsap.to(frame, {
      value: frameCount - 1,
      roundProps: "value",
      ease: "none",
      scrollTrigger: {
        trigger: ".page3",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        scroller: ".main", // Locomotive container
      },
      onUpdate: () => {
        drawCoverImage(images.current[frame.value]);
      },
    });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);



  return (
    <div className="main">
      {/* Page 1 - Hero Section */}
      <div
        className="page1 relative h-screen overflow-hidden" data-scroll-section>
        <video
          data-scroll
          data-scroll-speed="-5"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2"
          autoPlay
          loop
          muted
          playsInline
        />
        <nav className="flex justify-between items-center px-16 py-6 absoulte z-10">
          <img src="/Assets/logo.png" alt="Logo" className="h-12" />
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
              Book a Demo
            </button>
            <button className="p-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
              <IoMenuOutline size={24} />
            </button>
          </div>
        </nav>

        <div
          data-scroll
          data-scroll-speed="-5"
          className="flex flex-col items-start justify-center h-full px-16 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Experience Real <br /> Estate Agility
          </h1>
          <div className="mt-6">
            <h4 className="text-lg md:text-xl text-white max-w-xl">
              Create a digital twin of your existing building <br />
              and release the potential of Web3.
            </h4>
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="page2 p-26 text-start text-white bg-[#0a3cce]" data-scroll-section>
        <h2 className="text-2xl font-semibold mb-10">
          CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT)
        </h2>
        <h1 className="mt-4 text-xl md:text-5xl font-semibold tracking-wide leading-[-5]">
          The Digital Twin Token is a unique digital <br /> asset backed by property
          data. Magma <br /> combines your building’s components and <br /> systems essential
          information into a DTT.
        </h1>
      </div>

      {/* Page 3 */}
      <div className="page3 bg-[#1137ca]" data-scroll-section>
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>


      {/* Page 4 */}
      <div className="page4 p-12 bg-[#1137ca] pl-20 text-white text-start" data-scroll-section>
        <h3 className="text-xl font-semibold">
          CONNECT THE BUILDING'S TWIN TO YOUR STAKEHOLDERS
        </h3>
        <h1 className="mt-6 text-2xl md:text-5xl font-lighter leading-16 max-w-5xl">
          Users connect directly to the DTT without any intermediaries. As
          Stakeholder, they have the power to upload and verify information
          that enriches the Digital Twin Token. A Stakeholder's ability to
          access validated-data to perform tasks depends on their specific
          role.
        </h1>
      </div>

      {/* Page 5 */}
      <div className="page5" data-scroll-section>
        <canvas ref={canvasRef} />
      </div>

      {/* Page 6 */}
      <div className="page6 p-12 bg-[#1137ca] text-start pl-20 text-white" data-scroll-section>
        <h3 className="text-xl font-semibold">
          INCREASE YOUR DIGITAL TWIN TOKEN’S VALUE
        </h3>
        <h1 className="mt-6 text-2xl md:text-5xl font-lighter max-w-5xl leading-16">
          DTT data increases the value of your digital asset by lowering
          operational costs, improving energy use, assisting commercialization,
          and boosting the liquidity of your building.
        </h1>
      </div>

      {/* Page 7 */}
      <div className="page7 relative" data-scroll-section>
        <div className="page7-cir border-1 rounded-full w-80 h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="page7-cir-inner border-1 rounded-full w-40 h-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <canvas ref={canvasRef} />
      </div>

      {/* Page 8 */}
      <div className="page8 relative h-screen overflow-hidden" data-scroll-section>
        <div className="page8-bottom absolute text-center bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-7xl font-lighter text-white">Magma DTT</h1>
          <button className="mt-4 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
            LEARN MORE
          </button>
        </div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="https://thisismagma.com/wp-content/themes/magma/assets/home/glass/1.webm?2"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Page 9 */}
      <div className="page9 flex p-12 max-w-6xl mx-auto text-white" data-scroll-section>
        {/* Left Section */}
        <div className="left9 w-1/2 flex">
          <h1 className="text-7xl font-light leading-tight">
            What is <br /> Magma?
          </h1>
        </div>

        {/* Right Section */}
        <div className="right9 w-2/2 flex justify-center items-center">
          <div className="right9-center">
            <img
              src="https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1.jpeg"
              alt="Magma showcase"
              className="w-full h-auto rounded-2xl shadow-lg"
            />

            <div className="mb-10 mt-20">
              <h1 className="mb-2 text-xl font-semibold">The Future of Real Estate Starts Here</h1>
              <p className="text-white/80 text-xl leading-8">Magma is reshaping the real estate landscape through the power of blockchain, AI, and decentralized infrastructure. At the heart of our platform is the Digital Twin Token (DTT®️), a groundbreaking digital asset backed by property data, unlocking unprecedented levels of transparency, efficiency, and sustainability.</p>
            </div>
            <div className="mb-10">
              <h1 className="mb-2 text-xl font-semibold">Transforming the World’s Largest Asset Class</h1>
              <p className="text-white/80 text-xl leading-8">Real estate, the world’s largest asset class with over $300 trillion in value, has long faced challenges—data asymmetry, inefficiencies, and environmental impact. Magma solves these problems by digitizing buildings into dynamic assets, integrating essential property data with AI-driven insights and autonomous management tools.</p>
            </div>
            <div className="mb-10">
              <h1 className="mb-2 text-xl font-semibold">Innovating Real Estate with Digital Twins & Blockchain</h1>
              <p className="text-white/80 text-xl leading-8">Magma uses blockchain technology to record essential data, which enables transparent, traceable, and immutable streams of information to be readily accessible to its users. Magma smart contracts are built with this blockchain data to expedite tasks like requests for proposals, lease agreements, and services arrangements.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Page 10 */}
      <div className="page10 p-28 bg-gray-200" data-scroll-section>
        <h1 className="text-7xl font-lighter mb-20">Recent Blog</h1>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="page11-inner flex gap-6 mb-6">
            <div className="left10 w-1/2">
              <img
                src="https://thisismagma.com/wp-content/uploads/2023/05/thisismagma.com-magma-a-la-3eme-edition-du-tech-talk-de-cbre-france-1684942208038.jpeg"
                alt="blogs"
                className="rounded-lg"
              />
            </div>
            <div className="right10 w-2/3 ml-30 flex flex-col justify-center">
              <h4 className="text-xl text-gray-500">MAY 30,2023</h4>
              <h1 className="text-2xl font-semibold">
                Magma At CBRE France's 3rd Tech Talk
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Page 11 */}
      <div className="p-12 text-center text-white" data-scroll-section>
        <div >
          <h1 className="text-6xl font-medium">Featured In</h1>
          <p className="mt-4 text-lg">
            Thrilled to have been featured in several prominent media <br />
            outlets and leading professionals across the world’s best <br /> real
            estate and web3 institutions.
          </p>
        </div>
      </div>

      {/* Page 12 */}
      <div className="p-28 text-start text-white bg-[#1e1e21]" data-scroll-section>
        <h1 className="text-8xl font-lighter">Become an <br /> early adopter</h1>
        <button className="relative mt-20 px-6 py-3 rounded-xl bg-[#0a3cce] cursor-pointer overflow-hidden group">
          {/* Text */}
          <span className="relative z-10 text-sm text-white transition-colors duration-500 ease-in-out group-hover:text-[#0a3cce]">
            BOOK A DEMO
          </span>

          {/* Animated overlay */}
          <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-500 ease-in-out group-hover:h-full"></span>
        </button>
      </div>

      {/* Page 13 */}
      <div className="bg-[#0f0f17] text-white" data-scroll-section>

        <div className="relative py-8 px-30 border-t border-gray-600/80 flex items-center justify-between overflow-hidden group">
          <h1 className="text-4xl font-semibold">Twitter</h1>
          <LuArrowUpRight className="text-2xl" />

          {/* Hover background effect */}
          <span className="absolute -z-10 left-0 top-1/2 h-0 w-full bg-[#0a3cce] transition-all duration-500 ease-in-out group-hover:top-0 group-hover:h-full "></span>
        </div>


        <div className="page14-inner relative py-8 px-30 border-t border-gray-600/80 flex items-center justify-between overflow-hidden group">
          <h1 className="text-4xl font-semibold">Linkedin</h1>
          <LuArrowUpRight className="text-2xl" />

          {/* Hover background effect */}
          <span className="absolute -z-10 left-0 top-1/2 h-0 w-full bg-[#0a3cce] transition-all duration-500 ease-in-out group-hover:top-0 group-hover:h-full "></span>
        </div>

        <div className="page14-inner relative py-8 px-30 border-t border-gray-600/80 flex items-center justify-between overflow-hidden group">
          <h1 className="text-4xl font-semibold">Instagram</h1>
          <LuArrowUpRight className="text-2xl" />

          {/* Hover background effect */}
          <span className="absolute -z-10 left-0 top-1/2 h-0 w-full bg-[#0a3cce] transition-all duration-500 ease-in-out group-hover:top-0 group-hover:h-full "></span>
        </div>

        <div className="page14-inner relative py-8 px-30 border-t border-gray-600/80 flex items-center justify-between overflow-hidden group">
          <h1 className="text-4xl font-semibold">Telegram</h1>
          <LuArrowUpRight className="text-2xl" />

          {/* Hover background effect */}
          <span className="absolute -z-10 left-0 top-1/2 h-0 w-full bg-[#0a3cce] transition-all duration-500 ease-in-out group-hover:top-0 group-hover:h-full "></span>
        </div>

        <div className="page14-inner relative py-8 px-30 border-t border-b border-gray-600/80 flex items-center justify-between overflow-hidden group">
          <h1 className="text-4xl font-semibold">Youtube</h1>
          <LuArrowUpRight className="text-2xl" />

          {/* Hover background effect */}
          <span className="absolute -z-10 left-0 top-1/2 h-0 w-full bg-[#0a3cce] transition-all duration-500 ease-in-out group-hover:top-0 group-hover:h-full "></span>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <LocomotivePage>
      <PageContent />
    </LocomotivePage>
  );
};

export default Page;
