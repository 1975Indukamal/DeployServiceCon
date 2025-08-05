"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    imageURL: "/assets/images/case-study/Reasoning.webp",
    title: "Reasoning",
    imageURL1: "/assets/images/case-study/reasoning.svg",
    features: [
      "Drawing constructive conclusions and making future-proof predictions backed by data for quick problem-solving",
    ],
  },
  {
    imageURL: "/assets/images/case-study/Recommend.webp",
    title: "Recommendation",
    imageURL1: "/assets/images/case-study/recommendationdoor.svg",
    features: [
      "Extracting detailed insights to redesign your strategies and planning your next move with smart recommendations",
    ],
  },
  {
    imageURL: "/assets/images/case-study/Learning.webp",
    title: "Learning",
    imageURL1: "/assets/images/case-study/learningdoor.svg",
    features: [
      "Seamless development process with clean, high quality codes to improve products’ efficiency and performance",
    ],
  },
];
const litag = [
  "Predictive Analysis",
  "What is predictive analytics?",
  "Data Gathering",
  "Upcoming Information!",
];

const Page = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const scrollIntoView = (index) => {
    const arr = [
      section1.current,
      section2.current,
      section3.current,
      section4.current,
   
    ];

    const elm = arr[index];
    window.scroll({
      behavior: "smooth",
      top: elm.offsetTop,
    });
  };

  const [active, setActive] = useState();

  useEffect(() => {
    const sections = [
      section1.current,
      section2.current,
      section3.current,
      section4.current,
   
    ];
    function navHighlighter() {
      let scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(parseInt(sectionId));
        }
      });
    }

    window.addEventListener("scroll", navHighlighter);
    return () => window.removeEventListener("scroll", navHighlighter);
  }, []);

  return (
    <>
      <div className="container xl:flex block  md:mt-[30px] mt-[10px]">
        <div className="xl:w-[30%]  w-full xl:h-[1000px] h-auto top-10  xl:sticky block">
          <p className="mb-10 text-[24px] leading-8 text-[#2C3441] font-[500]">
            Predictive Analysis
          </p>
          <ul className="space-y-[10px] pl-5 hidden xl:block text-[#CECECE] text-[16px] after:top-0 font-[400]after:content-[''] relative  after:absolute after:h-full h-max after:w-[3px] after:bg-[#eee] after:left-0">
            {litag.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => scrollIntoView(index)}
                  className={
                    active === index
                      ? "text-[#eb7373] font-[600] relative after:h-full after:w-[3px] after:bg-primary after:absolute after:content-[''] after:-left-5 z-10"
                      : "cursor-pointer"
                  }
                >
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex-1 block">
          <div className="relative">
            <Image
              src="/assets/images/case-study/recommendbanner1.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
              ref={section1}
              id="0"
            />
            <div className="absolute md:top-10 top-5 md:left-10 left-5">
              <h1 className="md:text-[40px] text-[20px] text-[#fff] font-[500] leading-0">
                Unrivalled
              </h1>
              <span className="md:text-[40px] text-[20px] text-[#fff] font-[500] z-50 md:leading-10 leading-0 relative after:['']  after:absolute after:-z-10 md:after:top-6 after:top-3 md:after:h-[25px] after:h-[15px] after:w-full after:bg-primary after:left-0">
                Predictive Analysis
              </span>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <span className="md:text-[16px]    text-primary font-[500] ">
              While it is possible to make decisions based on intuition,
              personal judgement, or experience, it is generally considered
              beneficial to incorporate data-driven decision-making whenever
              feasible.
            </span>
          </div>
          <p className="md:text-[16px]  text-[#2C3441]">
            Personal experiences, intuition, and judgmental decisions may
            sometimes be true but data-driven decisions are always accurate.
          </p>

          <p className="md:text-[16px]  text-[#2C3441]">
            Without data, decision-makers may lack a comprehensive understanding
            of the problem or situation at hand.
          </p>
          <p className="md:text-[16px]  text-[#2C3441]">
            Data provides insights, context, and relevant information that can
            help make more informed decisions.
          </p>
          <h3 className="text-primary md:text-[24px] text-[18px] md:font-[500] font-[500] mb-[10px]">
            What is predictive analytics?
          </h3>
          <p className="text-[16px] text-[#2C3441] mt-3 mb-3">
            Predictive analytics is the practice of analysing historical data,
            statistical algorithms, and machine learning techniques to make
            predictions about future events or outcomes.
          </p>
          <p className="text-[16px] text-[#2C3441] mt-3 mb-3">
            It involves extracting insights from data to identify patterns,
            trends, and relationships, and then using these insights to forecast
            what is likely to happen in the future.
          </p>
          <p className="text-[16px] text-[#2C3441] mt-3 mb-3">
            It involves extracting insights from data to identify patterns,
            trends, and relationships, and then using these insights to forecast
            what is likely to happen in the future.
          </p>
          <div ref={section2} id="1" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              Hexabellian’s way of Predictive Analytics
            </h3>
            <p className="md:mt-[20px] mt-2 md:text-[16px]    text-[#2C3441]">
              As a data-driven organisation, Hexabells has championed when it
              comes to dealing with the data. Be it structured or unstructured,
              we use the right tools and techniques to identify trends,
              patterns, and correlations, followed by prediction with highest
              possible accuracy.
            </p>
          </div>
          <div ref={section3} id="2" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              Data Gathering
            </h3>
            <p className="md:mt-[20px] mt-2 md:text-[16px]    text-[#2C3441]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </div>
          <p className="text-[16px] text-[#2C3441] mt-3 mb-3">
            It can be applied across various domains and industries, such as
            finance, marketing, healthcare, supply chain management, and fraud
            detection.
          </p>
          <div className="md:mt-[100px] mt-5" ref={section4} id="3">
            <h3 className="text-primary md:text-[24px] text-[18px] md:font-[600] font-[500] md:mt-[20px] mt-2">
              Upcoming Information!
            </h3>
            <div className="md:grid grid-cols-3 block md:gap-5 gap-0 md:mb-[100px] mb-10 ">
              {services.map((service, index) => (
                <div key={index} className="mt-[30px]">
                  <div className="relative  group overflow-hidden" >
                    <Image
                      src={service.imageURL}
                      width={380}
                      height={380}
                      alt="log2o"
                      className="w-full h-full "
                    />
                  
                    <div className="absolute  md:-bottom-20  -bottom-8 group-hover:bottom-28 duration-500 flex justify-center items-center flex-col ">
                      <div className="group-hover:scale-0 duration-0">
                        <Image
                          src={service.imageURL1}
                          width={100}
                          height={100}
                          alt="log2o"
                        />
                      </div>
                      <h3 className=" text-[#fff] text-[20px] font-[500] xl:mb-32 md:mb-24 lg:mb-48 mb-36 group-hover:mb-5 duration-0">
                        {service.title}
                      </h3>
                      <p className="text-[#fff] px-3 text-center  -mb-24 pb-5">
                        {service.features}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
