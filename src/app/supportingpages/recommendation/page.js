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
  "Hybrid Recommendation",
  "Approach of HexaBells",
  "User’s Recommendation:",
  "Best Practices",
  "Upcoming Information!",
];

const Page = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  const scrollIntoView = (index) => {
    const arr = [
      section1.current,
      section2.current,
      section3.current,
      section4.current,
      section5.current,
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
      section5.current,
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
            #4. Recommendation
          </p>
          <ul className="space-y-[10px] pl-5 hidden xl:block text-[#CECECE] text-[16px] after:top-0 font-[400]after:content-[''] relative  after:absolute after:h-full h-max after:w-[3px] after:bg-[#eee] after:left-0">
            {litag.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => scrollIntoView(index)}
                  className={
                    active === index
                      ? "text-[#eb7373]       relative after:h-full after:w-[3px] after:bg-primary after:absolute after:content-[''] after:-left-5 z-10"
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
                Hybrid
              </h1>
              <span className="md:text-[40px] text-[20px] text-[#fff] font-[500] z-50 md:leading-10 leading-0 relative after:['']  after:absolute after:-z-10 md:after:top-6 after:top-3 md:after:h-[25px] after:h-[15px] after:w-full after:bg-primary after:left-0">
                Recommendation
              </span>
            </div>
          </div>

          <p className="md:text-[16px]  text-[#2C3441]">
            While it is possible to make decisions based on intuition, personal
            judgement, or experience, it is generally considered beneficial to
            incorporate data-driven decision-making whenever feasible.
          </p>
          <div className="mt-3 mb-3">
            <span className="md:text-[16px]      text-[#2C3441] font-[500] ">
              They are often based on personal experiences, expertise, research,
              or data analysis.
            </span>
          </div>
          <p className="md:text-[16px]  text-[#2C3441]">
            Recommendations can be made in various contexts, such as products,
            services, books, movies, restaurants, travel destinations, career
            choices, and more.
          </p>

          <h3 className="text-primary md:text-[24px] text-[18px] md:font-[500] font-[500] mb-[10px]" ref={section2} id="1" >
            3 Way Approach of Hexabells for Recommendation
          </h3>
          <p className="text-[16px] text-[#2C3441] mt-3 mb-3">
            At Hexabells, all our practices are based on recommendations.
            Recommendations are the best source of information that leads to
            creating a technology solution that meets the needs of all the
            stakeholders.
          </p>

          <div className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              1. Client’s Recommendation
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner2.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]      text-[#2C3441]">
              We treat client recommendations as an opportunity to gain valuable
              insights into their specific requirements, pain points, and
              desired outcomes. By listening to client feedback and
              recommendations, we get a deeper understanding of the clients
              business goals and challenges. This helps in aligning the
              development process with the clients needs and ensures that the
              solution addresses their unique requirements.
            </p>
          </div>
          <div ref={section3} id="2" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              2. User’s Recommendation
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner3.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]      text-[#2C3441]">
              Without meeting users expectations, no business can survive. And
              we take it with a great amount of sincerity to enhance usability,
              interface design, navigation, and feature preferences of our
              technology solutions. User’s recommendations help us to create
              intuitive and user-friendly solutions that are well-suited to the
              target audience.
            </p>
          </div>
          <div ref={section4} id="3" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              3. Recommendation of the best practices
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner4.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]      text-[#2C3441]">
              Best practices are established methods or techniques that have
              been proven to produce optimal results in a given context. Best
              practices give us a roadmap for efficient and effective technology
              solutions, ensuring that they eliminate inefficiencies, and
              achieve better outcomes.
            </p>
          </div>
          <div className="md:mt-[100px] mt-5" ref={section5} id="4">
            <h3 className="text-primary md:text-[24px] text-[18px] md:      font-[500] md:mt-[20px] mt-2">
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
