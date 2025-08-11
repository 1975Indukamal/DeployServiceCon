"use client";
import React from "react";
import Image from "next/image";
import LeftBottom from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/LeftBottom.webp";
import RightTop from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/RightTop.webp";
import Button from "./Button";

const features = [
  {
    title: "Fast Match",
    desc: "Instant connection to professionals ready to serve you.",
    // bg: "/assets/images/circle-bg1.webp",
  },
  {
    title: "Trusted Pros",
    desc: "Verified and highly rated service providers you can count on.",
    // bg: "/assets/images/circle-bg2.webp",
  },
  {
    title: "24/7 Help",
    desc: "Our support team is always available to assist you.",
    // bg: "/assets/images/circle-bg3.webp",
  },
  {
    title: "Personalized Service",
    desc: "Tailored recommendations just for your needs.",
    // bg: "/assets/images/circle-bg4.webp",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Decorative BG */}
      <Image
        src={LeftBottom}
        alt="Left Decoration"
        className="absolute left-0 bottom-0 pointer-events-none z-[-1]"
      />
      <Image
        src={RightTop}
        alt="Right Decoration"
        className="absolute right-0 -top-44 pointer-events-none z-[-1]"
      />

      <div className="container">
        {/* Text Section */}
        <div
          className="md:p-10 rounded-3xl shadow-xl text-white relative z-10 mb-16 border md:border-primary border-transparent"
          style={{
            backgroundImage: "url('/assets/images/blob-right-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
         <section className="bg-gradient-to-r from-bgc to-custombgc p-0 sm:p-10 rounded-3xl shadow-xl sm:border sm:border-gray-700 border-none">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-Quicksand leading-tight text-white">
      Why Choose <span className="text-primary font-semibold">ServiceConnect</span>?
    </h2>

    <p className="mt-4 text-lg font-[Poppins] text-white/80 leading-relaxed">
      ServiceConnect is built to give you seamless access to trusted service providers,
      ensuring confidence and clarity with every job.
    </p>
  </div>

  <div className="mt-10 grid gap-6 sm:grid-cols-2">
    {[
      "Tailored service recommendations",
      "Verified professionals, fully rated",
      "Secure messaging and payments",
      "Real-time job tracking",
      "Fast and friendly customer support",
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-start gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition duration-300"
      >
        <div className="text-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mt-1 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-white/90 font-medium text-base">{item}</p>
      </div>
    ))}
  </div>
   {/* Feature Cards Section */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary text-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:bg-primary/90"
              // style={{
              //   backgroundImage: `url('${feature.bg}')`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-white/90">{feature.desc}</p>
            </div>
          ))}
        </div>
</section>

          <div className="mt-8">
            <Button
              text="Get Started Today"
              className="px-8 py-2 max-w-[220px] text-primary border-primary hover:text-body hover:border-body bg-opacity-70 hover:bg-opacity-90 transition"
            />
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default WhyChoose;
