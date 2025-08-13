"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const services = [
  {
    title: "Custom Website Experiences",
    img: "/assets/image/our-services/website experience.webp",
    desc: `We design and develop visually stunning, responsive websites that tell your story, engage your audience, and convert visitors into loyal customers.`,
  },
  {
    title: "Mobile App Solutions",
    img: "/assets/image/our-services/mobile app.webp",
    desc: `Build feature-rich, intuitive mobile apps for iOS, Android, or both—with seamless performance, robust security, and user-first design.`,
  },
  {
    title: "Tailored Software Development",
    img: "/assets/image/our-services/tailor web.webp",
    desc: `From internal tools to customer-facing platforms, we craft scalable, secure software tailored precisely to your business goals.`,
  },
  {
    title: "Rapid MVP Launch",
    img: "/assets/image/our-services/rapid mvp lunch.webp",
    desc: `Test, validate, and iterate faster. We build lean MVPs that bring your product idea to life and help you attract early adopters or investors.`,
  },
  {
    title: "Legacy System Revamp",
    img: "/assets/image/our-services/l1.webp",
    desc: `Modernize outdated platforms with sleek UI, improved performance, and scalable architecture—without losing what works.`,
  },
  {
    title: "Website Refresh & Rebranding",
    img: "/assets/image/our-services/website refresh.webp",
    desc: `We upgrade old websites with modern design, better UX, and mobile optimization—giving your brand a powerful digital reboot.`,
  },
];


const Card = ({ title, img, desc }: { title: string; img: string; desc: string }) => {
  return (
    <div className="flex-shrink-0 group md:w-[430px] w-full relative h-[400px] md:h-[500px] overflow-hidden rounded-[15px]">
      
      {/* Image Wrapper */}
      <div className="h-full w-full rounded-[15px] overflow-hidden relative">
        <Image
          src={img}
          alt={title}
          width={400}
          height={500}
          className="w-full h-full object-content rounded-[15px]"
        />

        {/* Overlay (only shows on md and up) */}
        <div className="absolute inset-0 bg-bgc/70 opacity-90 sm:opacity-20  sm:group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />
      </div>

      {/* Text block: slide up on hover only on md+ */}
      <div className="absolute 
        bottom-0 md:-bottom-[13rem] sm:-bottom-[13rem] 
        h-[300px] sm:h-[250px] 
        sm:group-hover:bottom-0 
        transition-all duration-500 
        left-0 right-0 
        text-center 
        bg-gradient-to-b from-transparent via-black/30 to-black/70 
        rounded-[15px] px-2 md:px-10"
      >
        <h5 className="text-body text-[22px] font-semibold pb-5 ">{title}</h5>
        <p className="text-white text-base font-normal text-left">{desc}</p>
      </div>
    </div>
  );
};



const HorizontalSlide = () => {
  return (
    <div className="container">
      {/* Desktop Intro Section */}
      <div className="no-scrollbar md:flex block overflow-x-scroll lg:ml-0 p-5 md:mt-28 space-x-5 ">
        <div className="flex-shrink-0 hidden md:flex flex-col w-[450px] ml-20 xl:ml-0 text-start justify-center mr-auto">
          <h2 className="text-[48px] md:text-[58px] text-body leading-[72px] md:leading-[80px] font-[Quicksand]">
          What We  <span className="text-primary">Deliver</span>
          </h2>
          <p className="mt-8 text-body text-base font-light leading-7">
          Empowering your business with impactful digital solutions—from sleek websites to powerful mobile apps and beyond.
          </p>
          <div className="max-w-[200px] mt-5">
            <Button text="Request a Proposal" />
          </div>
        </div>

        {/* Desktop Service Cards */}
        <div className="md:flex hidden gap-5">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden ml-3 pr-3">
        <div className="text-start mt-5">
          <h2 className="text-[48px] text-body leading-[72px]">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-body text-base font-light leading-7">
            Craft a compelling online identity with our customized website and app solutions.
          </p>
          <div className="max-w-[200px] mt-5">
            <Button text="Request a Proposal" />
          </div>
        </div>

        <div className="flex gap-5 overflow-x-scroll mt-[70px] no-scrollbar">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlide;
