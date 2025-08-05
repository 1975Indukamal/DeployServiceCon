"use client";
import React, { useState } from "react";
import Image from "next/image";

const OurCore = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const capabilities = [
    {
      title: "Smart Service Matching",
      description:
        "Our intelligent algorithm connects users with the most suitable service providers based on needs, ratings, and real-time availability — streamlining service discovery like never before.",
    },
    {
      title: "Reliable Provider Network",
      description:
        "We ensure all service providers go through rigorous vetting. This builds trust and helps customers choose confidently while maintaining high standards across categories.",
    },
    {
      title: "User-Centric Design",
      description:
        "ServiceConnekt’s interface is built with simplicity in mind — enabling both providers and users to access, offer, and manage services without complexity or confusion.",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Built on modern, cloud-native architecture, our platform scales effortlessly to support thousands of users and real-time service transactions across geographies.",
    },
    {
      title: "Secure & Transparent",
      description:
        "We prioritize data privacy and transactional integrity with built-in encryption, transparent reviews, and dispute resolution — fostering accountability and peace of mind.",
    },
  ];

  return (
    <section className="container my-20">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side Content */}
        <div className="lg:w-1/2">
        <h2 className="text-body text-4xl md:text-5xl font-semibold font-Quicksand leading-tight">
  What Drives Our Platform
</h2>
<p className="text-body mt-4 text-base leading-relaxed max-w-md">
  At ServiceConnekt, our core strengths lie in building seamless digital experiences, enabling efficient service delivery, and fostering trusted connections between users and providers.
</p>

          <hr className="h-[3px] w-[90px] bg-primary my-6" />

          {/* Illustration */}
          <Image
            src="/assets/images/services/capability.svg"
            alt="Service capabilities"
            width={480}
            height={340}
            className="rounded-lg"
          />
        </div>

        {/* Accordion List */}
        <div className="lg:w-1/2 w-full space-y-4">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 transition-all"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3
                  className={`text-lg font-semibold font-Quicksand transition-colors ${
                    activeIndex === index ? "text-primary" : "text-body"
                  }`}
                >
                  {item.title}
                </h3>
                <span className="text-2xl font-bold text-primary">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-body text-sm">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCore;
