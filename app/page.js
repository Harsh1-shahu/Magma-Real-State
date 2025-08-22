"use client";

import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import LocomotivePage from "./components/LocomotivePage";
import Page3 from "./Page3/page";
import Page5 from "./Page5/page";
import Page7 from "./Page7/page";
import Page11 from "./Page11/page";

const PageContent = () => {
  return (
    <div className="main">
      {/* Page 1 - Hero Section */}
      <div className="page1 relative h-screen overflow-hidden" data-scroll-section>
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
        <nav className="flex justify-between items-center px-6 md:px-16 py-4 absolute top-0 w-full z-10">
          <img src="/Assets/logo.png" alt="Logo" className="h-10 md:h-12" />
          <div className="flex gap-3 md:gap-4">
            <button className="px-3 md:px-4 py-2 bg-white text-black text-sm md:text-base rounded-lg shadow-md hover:bg-gray-200 transition">
              Book a Demo
            </button>
            <button className="p-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
              <IoMenuOutline size={22} className="md:size-24" />
            </button>
          </div>
        </nav>

        <div
          data-scroll
          data-scroll-speed="-5"
          className="flex flex-col items-start justify-center h-full px-6 md:px-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Experience Real <br /> Estate Agility
          </h1>
          <div className="mt-4 md:mt-6">
            <h4 className="text-base md:text-xl text-white max-w-lg md:max-w-xl">
              Create a digital twin of your existing building <br />
              and release the potential of Web3.
            </h4>
            <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="page2 px-6 md:px-20 py-12 text-start text-white bg-[#0a3cce]" data-scroll-section>
        <h2 className="text-lg md:text-2xl font-semibold mb-6 md:mb-10">
          CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT)
        </h2>
        <p className="mt-2 md:mt-4 text-lg md:text-4xl font-semibold tracking-wide leading-relaxed">
          The Digital Twin Token is a unique digital <br className="hidden md:block" />
          asset backed by property data. Magma <br className="hidden md:block" />
          combines your building’s components and <br className="hidden md:block" />
          systems essential information into a DTT.
        </p>
      </div>

      {/* Page 3 */}
      <Page3 />

      {/* Page 4 */}
      <div className="page4 px-6 md:px-20 py-12 bg-[#1137ca] text-white text-start" data-scroll-section>
        <h3 className="text-lg md:text-xl font-semibold">
          CONNECT THE BUILDING'S TWIN TO YOUR STAKEHOLDERS
        </h3>
        <h1 className="mt-4 md:mt-6 text-xl md:text-4xl font-light leading-relaxed max-w-5xl">
          Users connect directly to the DTT without any intermediaries. As
          Stakeholder, they have the power to upload and verify information
          that enriches the Digital Twin Token. A Stakeholder's ability to
          access validated-data to perform tasks depends on their specific role.
        </h1>
      </div>

      {/* Page 5 */}
      <Page5 />

      {/* Page 6 */}
      <div className="page6 px-6 md:px-20 py-12 bg-[#1137ca] text-start text-white" data-scroll-section>
        <h3 className="text-lg md:text-xl font-semibold">
          INCREASE YOUR DIGITAL TWIN TOKEN’S VALUE
        </h3>
        <h1 className="mt-4 md:mt-6 text-xl md:text-4xl font-light leading-relaxed max-w-5xl">
          DTT data increases the value of your digital asset by lowering
          operational costs, improving energy use, assisting commercialization,
          and boosting the liquidity of your building.
        </h1>
      </div>

      {/* Page 7 */}
      <Page7 />

      {/* Page 8 */}
      <div className="page8 relative h-screen overflow-hidden" data-scroll-section>
        <div className="page8-bottom absolute text-center bottom-10 md:bottom-14 left-1/2 transform -translate-x-1/2 z-10">
          <h1 className="text-4xl md:text-7xl font-light text-white">Magma DTT</h1>
          <button className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition">
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
      <div className="page9 flex flex-col md:flex-row gap-10 px-6 md:px-12 py-12 max-w-6xl mx-auto text-white" data-scroll-section>
        {/* Left */}
        <div className="left9 w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            What is <br /> Magma?
          </h1>
        </div>

        {/* Right */}
        <div className="right9 w-full md:w-1/2 flex justify-center items-center">
          <div className="right9-center">
            <img
              src="https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1.jpeg"
              alt="Magma showcase"
              className="w-full h-auto rounded-2xl shadow-lg"
            />

            <div className="space-y-8 mt-10 md:mt-20">
              <div>
                <h1 className="mb-2 text-lg md:text-xl font-semibold">
                  The Future of Real Estate Starts Here
                </h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Magma is reshaping the real estate landscape through the power of blockchain, AI...
                </p>
              </div>
              <div>
                <h1 className="mb-2 text-lg md:text-xl font-semibold">
                  Transforming the World’s Largest Asset Class
                </h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Real estate, the world’s largest asset class with over $300 trillion...
                </p>
              </div>
              <div>
                <h1 className="mb-2 text-lg md:text-xl font-semibold">
                  Innovating Real Estate with Digital Twins & Blockchain
                </h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Magma uses blockchain technology to record essential data...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 10 - Blogs */}
      <div className="page10 px-6 md:px-28 py-16 bg-gray-200" data-scroll-section>
        <h1 className="text-4xl md:text-7xl font-light mb-10 md:mb-20">Recent Blog</h1>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="page11-inner flex flex-col md:flex-row gap-6 mb-8">
            <div className="left10 w-full md:w-1/2">
              <img
                src="https://thisismagma.com/wp-content/uploads/2023/05/thisismagma.com-magma-a-la-3eme-edition-du-tech-talk-de-cbre-france-1684942208038.jpeg"
                alt="blogs"
                className="rounded-lg"
              />
            </div>
            <div className="right10 w-full md:w-2/3 flex flex-col justify-center">
              <h4 className="text-sm md:text-xl text-gray-500">MAY 30, 2023</h4>
              <h1 className="text-lg md:text-2xl font-semibold">
                Magma At CBRE France's 3rd Tech Talk
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Page 11 */}
      <Page11 />

      {/* Page 12 */}
      <div className="px-6 md:px-28 py-16 text-start text-white bg-[#1e1e21]" data-scroll-section>
        <h1 className="text-5xl md:text-8xl font-light">
          Become an <br /> early adopter
        </h1>
        <button className="relative mt-10 md:mt-20 px-6 py-3 rounded-xl bg-[#0a3cce] cursor-pointer overflow-hidden group">
          <span className="relative z-10 text-sm md:text-base text-white transition-colors duration-500 ease-in-out group-hover:text-[#0a3cce]">
            BOOK A DEMO
          </span>
          <span className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-500 ease-in-out group-hover:h-full"></span>
        </button>
      </div>

      {/* Page 13 - Social Links */}
      <div className="bg-[#0f0f17] text-white" data-scroll-section>
        {["Twitter", "Linkedin", "Instagram", "Telegram", "Youtube"].map((item, i) => (
          <div
            key={i}
            className="relative py-6 md:py-8 px-6 md:px-30 border-t border-gray-600/80 flex items-center justify-between overflow-hidden group">
            <h1 className="text-2xl md:text-4xl font-semibold">{item}</h1>
            <LuArrowUpRight className="text-xl md:text-2xl" />
            <span className="absolute -z-10 left-0 top-1/2 h-0 w-full bg-[#0a3cce] transition-all duration-500 ease-in-out group-hover:top-0 group-hover:h-full"></span>
          </div>
        ))}
      </div>

      {/* Page 14 - Footer */}
      <div className="bg-[#0f0f17] text-white flex flex-col md:flex-row justify-between gap-10 md:gap-0 px-6 md:px-30 py-10 md:py-14" data-scroll-section>
        <div className="flex gap-10 md:gap-30">
          <div className="text-base md:text-xl font-medium space-y-2 md:space-y-4">
            <h1>MISSION</h1>
            <h1>PRODUCT</h1>
            <h1>BLOG</h1>
            <h1>FAQ</h1>
          </div>
          <div className="text-base md:text-xl font-medium space-y-2 md:space-y-4">
            <h1>CONTACT</h1>
            <h1>PRIVACY POLICY</h1>
            <h1>TERMS</h1>
          </div>
        </div>
        <div className="text-base md:text-xl font-medium space-y-2 md:space-y-4">
          <h1>Subscribe</h1>
          <h1>E-mail</h1>
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
