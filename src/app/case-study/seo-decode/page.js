"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsBullseye } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { RiHourglass2Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { LiaChevronLeftSolid } from "react-icons/lia";
import { LiaChevronRightSolid } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const data = [
  "Create an intuitive and easy-to-use mobile application and website that ",
  "Dedicated backend infrastructure to manage the platform. ",
  "Separate apps and portals for partner businesses and freelance artists. ",
  "Improve user engagement and loyalty by offering personalized recommendations.",
  "Ensure that the platform is secure and reliable.",
  "Provide a seamless booking experience across different devices and platforms.",
];

const services = [
  {
    title: "Research and Planning",
    imageURL: "/assets/images/case-study/research.png",
    features: [
      "We conducted a market research to identify similar online marketplace aggregators and ecommerce apps along with their strengths and weaknesses. We also define the app's user flow, features, and technical requirements.",
    ],
  },
  {
    title: "Research and Planning",
    imageURL: "/assets/images/case-study/research.png",
    features: [
      "We conducted a market research to identify similar online marketplace aggregators and ecommerce apps along with their strengths and weaknesses. We also define the app's user flow, features, and technical requirements.",
    ],
  },
  {
    title: "Research and Planning",
    imageURL: "/assets/images/case-study/research.png",
    features: [
      "We conducted a market research to identify similar online marketplace aggregators and ecommerce apps along with their strengths and weaknesses. We also define the app's user flow, features, and technical requirements.",
    ],
  },
  {
    title: "Research and Planning",
    imageURL: "/assets/images/case-study/research.png",
    features: [
      "We conducted a market research to identify similar online marketplace aggregators and ecommerce apps along with their strengths and weaknesses. We also define the app's user flow, features, and technical requirements.",
    ],
  },
  {
    title: "Research and Planning",
    imageURL: "/assets/images/case-study/research.png",
    features: [
      "We conducted a market research to identify similar online marketplace aggregators and ecommerce apps along with their strengths and weaknesses. We also define the app's user flow, features, and technical requirements.",
    ],
  },
];

const litag = [
  "Project overview",
  "Objectives",
  "Timeline",
  "Project Life-Cycle",
  "Development Process",
  "Conclusion",
];

const Page = () => {
  const scrollContainer = useRef(null);

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);

  const scroll = (dir) => {
    const scrollSize =
      dir === "right"
        ? scrollContainer.current.scrollLeft + 364
        : scrollContainer.current.scrollLeft - 364;
    scrollContainer.current?.scrollTo({
      left: scrollSize,
      behavior: "smooth",
    });
  };

  const scrollIntoView = (index) => {
    const arr = [
      section1.current,
      section2.current,
      section3.current,
      section4.current,
      section5.current,
      section6.current,
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
      section6.current,
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
      <div className="container xl:flex block xl:mt-[100px] lg:mt-[50px] mt-[30px]">
        <div className="xl:w-[30%] w-full xl:h-[1000px] h-auto top-10  xl:sticky block">
          <div className="flex items-center">
            <div>
              <Image
                src="/assets/images/case-study/seologo1.png"
                width={50}
                height={50}
                alt="logo"
              />
            </div>
            <div>
              <Image
                src="/assets/images/case-study/seologo2.png"
                width={77}
                height={15}
                alt="logo"
                className="mb-[10px]"
              />
              <Image
                src="/assets/images/case-study/seologo3.png"
                width={170}
                height={15}
                alt="logo"
                className=""
              />
            </div>
          </div>
          <p className="mt-[30px] mb-10 text-[22px] leading-8 text-[#2C3441]">
            An innovative organic SEO
            <br /> company specialising in
            <br /> search engine optimization.
          </p>
          <ul className="space-y-[10px] pl-5 hidden xl:block text-[#CECECE] text-[16px] after:top-0 font-[400]after:content-[''] relative  after:absolute after:h-full h-max after:w-[3px] after:bg-[#eee] after:left-0">
            {litag.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => scrollIntoView(index)}
                  className={
                    active === index
                      ? "text-[#eb7373] font-[500] relative after:h-full after:w-[3px] after:bg-primary after:absolute after:content-[''] after:-left-5 z-10"
                      : "cursor-pointer"
                  }
                >
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="xl:w-[70%]  md:w-full w-full block ml-auto">
          <Image
            src="/assets/images/case-study/seobanner12.png"
            width={867}
            height={454}
            alt="log2o"
            className="w-full"
            ref={section1}
            id="0"
          />
          <div
            className="flex items-center mt-10 mb-[10px]"
            ref={section2}
            id="1"
          >
            <div className="rounded-full bg-[#EB7373] w-[37px] h-[37px] flex items-center justify-center">
              <FiEye size={20} color="#fff" />
            </div>

            <h1 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tight">
              Objective
            </h1>
          </div>
          <p className="text-[16px] text-[#2C3441] mb-[50px]">
            SEO DECODE wanted to design and develop their website to create its
            visual appeal, user experience, and lead generation capabilities.
            The website needed to showcase that they are one of the most
            creative brains in the digital marketing industry, attracting
            potential clients who know the value of organic growth patterns
            pretty well.
          </p>
          <Image
            src="/assets/images/case-study/seobanner2.png"
            width={867}
            height={454}
            alt="log2o"
            className="w-full mb-[50px]"
          />

          <div className="flex items-center" ref={section3} id="2">
            <div className="rounded-full bg-[#EB7373] h-[37px] w-[37px] flex items-center justify-center">
              <RiHourglass2Line size={20} color="#fff" />
            </div>
            <h2 className="text-[30px] text-[#EB7373] tracking-tighter ml-[10px]">
              Timeline
            </h2>
          </div>

          <p className="mt-[30px] pl-4">
            The website design and development project had a timeline of six
            weeks, from initial discovery to website launch.
          </p>
          <Image
            src="/assets/images/case-study/seobanner3.png"
            width={867}
            height={454}
            alt="log2o"
            className="mb-[50px] w-full"
          />
          <div className="flex gap-[10px] mt-[50px] mb-[20px]">
            <div className="rounded-full w-[37px] h-[37px] bg-[#EB7373] flex items-center justify-center">
              <CiSettings size={20} color="#fff" />
            </div>
            <h2
              className="text-[30px] text-[#EB7373] tracking-tight"
              ref={section4}
              id="3"
            >
              Project Life-Cycle
            </h2>
          </div>
          <div className="text-[16px] text-[#000] font-[500] ml-5">
            Anatomy of a Development Project
          </div>
          <p className="font-[16px] text-[#7B7B7B] mb-[50px] ml-5 mt-[15px]">
            Although each project has its unique experience and objective, they
            all follow the same basic process to get your product to the finish
            line.
          </p>

          <div
            className="flex  gap-5 overflow-x-scroll no-scrollbar mb-[20px]"
            ref={scrollContainer}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px]  relative overflow-hidden group"
              >
                <div className="">
                  <Image
                    src={service.imageURL}
                    alt={service.title}
                    width={400}
                    height={500}
                    className="w-[400px] h-[500px]"
                  />
                  <div className="absolute bg-gradient-to-b from-transparent via-transparent  via-10% to-black h-full   pl-[20px] left-0 right-0 duration-500 top-0   ">
                    <div className=" absolute left-0 right-0 md:-bottom-36 bottom-0 group-hover:bottom-0 duration-500">
                      <div className="flex items-center gap-[10px] pb-5 pl-[20px]">
                        <div className="rounded-full bg-[#EB7373] text-[#fff] w-[48px] h-[48px] flex items-center justify-center">
                          {index + 1}.
                        </div>
                        <p className="text-[#fff] text-[16px] font-[500] ">
                          {service.title}
                        </p>
                      </div>
                      <ul className="text-[#fff] pl-[20px] pb-5">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-[10px] cursor-pointer mb-[50px]">
            <div
              className="bg-[#EEEEEE] w-[60px] h-[62px] flex items-center justify-center"
              onClick={() => scroll("left")}
            >
              <LiaChevronLeftSolid size={30} color="#000" />
            </div>
            <div
              className="bg-[#EEEEEE] w-[60px] h-[62px] flex items-center justify-center"
              onClick={() => scroll("right")}
            >
              <LiaChevronRightSolid size={30} color="#000" />
            </div>
          </div>
          <Image
            src="/assets/images/case-study/seobanner4.png"
            width={867}
            height={454}
            alt="log2o"
            className="mb-[50px] w-full"
          />
          <div
            className="w-full bg-[#2C3441] mt-[50px] mb-[50px] rounded-[10px] pb-12"
            ref={section5}
            id="4"
          >
            <div className="flex justify-start items-center md:pl-10 pl-2 pt-10">
              <div className="rounded-full h-[37px] w-[37px] bg-[#EB7373] flex items-center justify-center">
                <BsBullseye size={20} />
              </div>
              <h2 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tighter">
                Objectives
              </h2>
            </div>

            {data.map((item, index) => (
              <div key={index} className="flex  md:pl-24 pl-2 space-y-5">
                <div className="h-[3px] flex-shrink-0 w-[30px] bg-[#EB7373]  mr-5 mt-8"></div>
                <p className="text-[16px] text-[#fff]">{item}</p>
              </div>
            ))}
          </div>
          <Image
            src="/assets/images/case-study/seobanner5.png"
            width={867}
            height={454}
            alt="log2o"
            className="mt-[50px] mb-[50px] w-full"
          />
          <div
            className="flex gap-[10px] items-center  mb-[30px]"
            ref={section6}
            id="5"
          >
            <div className="rounded-full bg-[#EB7373] w-[37px] h-[37px] flex items-center justify-center">
              <FaRegLightbulb size={20} color="#fff" />
            </div>
            <h2 className="text-[30px] text-[#EB7373] tracking-tight">
              Conclusion
            </h2>
          </div>
          <div className="text-[16px] font-[500] text-[#000] pl-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <p className="text-[16px] text-[#2C3441] pl-5  mt-[10px]">
            Developing a dedicated web-based and mobile platform for salon
            booking requires a comprehensive understanding of user needs,
            technical requirements, and market trends. By following a structured
            development process and incorporating user feedback, we can create
            an app that meets our customers needs and drives engagement and
            loyalty.
          </p>
          <div className="flex items-center justify-center gap-20 mt-[50px] mb-[50px] cursor-pointer">
            <Link href="/case-study/sagenext">
              <div className="flex items-center gap-[7px]">
                <IoMdArrowDropleft size={20} />
                Previous
              </div>
            </Link>
            <Link href="/case-study/zoylee">
              <div className="flex items-center gap-[7px]">
                Next <IoMdArrowDropright size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
