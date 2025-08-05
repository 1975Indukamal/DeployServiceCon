"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsBullseye } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiLogInCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { BiTransferAlt } from "react-icons/bi";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";

const images = [
  "/assets/images/case-study/kajal_tyagi.svg",
  "/assets/images/case-study/jamil.svg",
  "/assets/images/case-study/mohan.svg",
];

const Heading = [
  "Kajal Tyagi- Housewife",
  "Jamil Akhtar- Senior SEO Analyst",
  "Mohan Ji- Retired Elderly Gentleman",
];
const contents = [
  "Kajal Tyagi, a dedicated housewife, faces the everyday challenge of managing her busy home. Zoylee's Salon at Home app perfectly fits her needs, providing convenient, flexible, and quality services. Kajal's endorsement shows how Zoylee transformed her beauty routine, making self-care easy and enjoyable right at her doorstep",

  `Jamil has a demanding work routine and personal grooming needs. Zoylee's app provides a convenient, flexible, high-quality grooming solution for his lifestyle. He can efficiently book appointments without disrupting his work schedule. The flexibility accounts for his unpredictable work hours. Jamil endorses Zoylee's as his go-to, aligning services to his professional standards, allows maintaining polished, groomed appearance despite busy, chaotic SEO role`,
  "Mohan Ji, a retired elderly gentleman with mobility challenges, faces the difficulty of traditional salon visits. Zoylee's Salon at Home booking app has emerged as a thoughtful solution, providing Mohan Ji with the comfort and convenience of receiving grooming services in the familiarity of his home. The app's adaptability to his specific needs ensures a pleasant and stress-free grooming experience, aligning perfectly with Mohan Ji's goal of maintaining comfort and dignity in his golden years. His positive endorsement reflects how Zoylee has made grooming a delightful and convenient aspect of his daily routine.",
];

const data = [
  "Create an intuitive and easy-to-use mobile application and website that allow customers to quickly browse and make appointments.",
  "Dedicated backend infrastructure to manage the platform.  ",
  "Separate apps and portals for partner businesses and freelance artists.  ",
  "Improve user engagement and loyalty by offering personalized recommendations, and rewards.",
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

const icons = [
  {
    icon: <BiLogInCircle color="#fff" size={20} />,
    text: "Easy user registration and login process",
  },
  {
    icon: <BiTransferAlt color="#fff" size={20} />,
    text: "Ability to switch between salons and salon at home services.",
  },
  {
    icon: <BiLogInCircle color="#fff" size={20} />,
    text: "Simple and intuitive search, both local and universal, for quick navigation.",
  },
  {
    icon: <BiLogInCircle color="#fff" size={20} />,
    text: "Detailed outlet and service descriptions and customer reviews",
  },
  {
    icon: <BiLogInCircle color="#fff" size={20} />,
    text: "Secure and reliable payment gateway integration",
  },
  {
    icon: <FaHeartCircleCheck color="#fff" size={20} />,
    text: "Option for users to save items to their Wishlist",
  },
  {
    icon: <BiLogInCircle color="#fff" size={20} />,
    text: "Ability to track appointment status",
  },
  {
    icon: <BiLogInCircle color="#fff" size={20} />,
    text: "Option for users to save items to their Wishlist",
  },
  {
    icon: <RiRefund2Line color="#fff" size={20} />,
    text: "Easy returns and refunds process",
  },
  {
    icon: <BiLogInCircle color="#fff" size={20} />,
    text: "Coupons and Loyalty rewards program",
  },
];

const litag = [
  "Project overview",
  "Objectives",
  "User Personas",
  "Features",
  "Development Process",
  "Conclusion",
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container xl:flex block xl:mt-[100px] lg:mt-[50px] mt-[30px]">
        <div className="xl:w-[30%] w-full xl:h-[1000px] h-auto top-10  xl:sticky block">
          <Image
            src="/assets/images/case-study/logo.png"
            width={200}
            height={200}
            alt="logo"
          />
          <p className="mt-[30px] mb-10 text-[22px] leading-8 text-[#2C3441]">
            India’s First
            <br /> Salon Appointment
            <br /> Booking App
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
            src="/assets/images/case-study/banner.webp"
            width={867}
            height={454}
            alt="log2o"
            className="w-full"
            ref={section1}
            id="0"
          />
          <div className="flex items-center mt-10 mb-[10px]">
            <div className="rounded-full bg-[#EB7373] w-[37px] h-[37px] flex items-center justify-center">
              <FiEye size={20} color="#fff" />
            </div>

            <h1 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tight">
              Project Overview
            </h1>
          </div>
          <p className="text-[16px] text-[#2C3441] mb-[50px]">
            Zoylee is an up and coming salon booking platform that provides
            appointment booking services for salons and spas along with
            delivering at-home hair, beauty, and grooming services for both men
            and women. Based out of Noida, India, Team Zoylee wanted end-to-end
            development solutions - website and application for both iOS and
            Android, to allow end users to easily browse and book salon
            appointments as well as home-based hair and grooming services.
          </p>
          <Image
            src="/assets/images/case-study/project-Banner.webp"
            width={867}
            height={454}
            alt="log2o"
            className="w-full"
          />
          <div className="w-full bg-[#2C3441] mt-[50px] mb-[50px] pb-12 rounded-[10px]">
            <div
              className="flex justify-start items-center md:pl-10 pl-2 pt-10"
              ref={section2}
              id="1"
            >
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

          <div className="flex items-center" ref={section3} id="2">
            <div className="rounded-full bg-[#EB7373] h-[37px] w-[37px] flex items-center justify-center">
              <FaUserFriends size={20} color="#fff" />
            </div>
            <h2 className="text-[30px] text-[#EB7373] tracking-tighter ml-[10px]">
              User Personas
            </h2>
          </div>
          <div className="flex space-x-5 md:pl-5 pl-0 mt-5">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Avatar ${index + 1}`}
                width={60}
                height={60}
                className={
                  currentIndex === index
                    ? "rounded-full border-[3px] duration-500 border-[#eb7373] bg-primary cursor-pointer"
                    : ""
                }
              />
            ))}
          </div>
          <h4 className="text-[16px] font-[600] text-[#000] mt-[40px] mb-[15px]">
            {Heading[currentIndex]}
          </h4>
          <p>{contents[currentIndex]}</p>
          <Image
            src="/assets/images/case-study/banner3.png"
            width={867}
            height={454}
            alt="log2o"
            className="mt-[50px] w-full"
          />
          <div
            className="flex space-x-[10px] mt-[50px] mb-[50px]"
            ref={section4}
            id="3"
          >
            <div className="rounded-full bg-[#EB7373] h-[37px] w-[37px] flex items-center justify-center">
              <RxDashboard size={20} color="#fff" />
            </div>
            <h2 className="text-[30px] text-[#EB7373] tracking-tight">
              Features & Functionalities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ml-5 mb-[50px]">
            {icons.map((it, index) => (
              <div key={index} className=" flex items-center space-x-3">
                <div className="rounded-full  flex-shrink-0 bg-[#2C3441] h-[48px] w-[48px] flex items-center justify-center">
                  {it.icon}
                </div>

                <p className="">{it.text}</p>
              </div>
            ))}
          </div>
          <Image
            src="/assets/images/case-study/banner4.png"
            width={867}
            height={454}
            alt="log2o"
            className="mt-[50px] w-full"
          />
          <div
            className="flex gap-[10px] mt-[50px] mb-[20px]"
            ref={section5}
            id="4"
          >
            <div className="rounded-full w-[37px] h-[37px] bg-[#EB7373] flex items-center justify-center">
              <CiSettings size={20} color="#fff" />
            </div>
            <h2 className="text-[30px] text-[#EB7373] tracking-tight">
              Solution
            </h2>
          </div>
          {/* <div className="text-[16px] text-[#000] font-[500] ml-5">
            Anatomy of a Development Project
          </div> */}
          <div className="space-y-5  ml-5 mb-[50px]">
            <p className=" mt-[15px]">
              Hexabells Technologies was brought in to help Zoylee overcome
              these challenges. We developed a comprehensive digital marketing
              strategy that included the following elements
            </p>
            <p>
              <span className="font-[500]">
                SEO-Friendly Website Development:
              </span>{" "}
              We designed and developed a user-friendly website that was
              optimized for search engines. This helped Zoylee to improve their
              organic search ranking and attract more website visitors.
            </p>
            <p>
              <span className="font-[500]">Mobile App Development:</span> We
              crafted and developed a mobile app for Zoylee to extend their
              digital presence. This comprehensive approach led to increased
            </p>
            <p>
              <span className=" font-[500]">Content Marketing:</span> We created
              a variety of content, such as blog posts, infographics, and social
              media posts, that educated users about the benefits of using
              Zoylee.
            </p>
            <p>
              <span className="font-[500]">Social Media Marketing:</span> We ran
              targeted social media campaigns to reach Zoylees ideal customers.
            </p>
            <p>
              <span className="font-[500]"> Paid Advertising:</span> We used
              paid advertising platforms such as Google Ads, Facebook Ads, and
              Instagram Ads to reach a wider audience.
            </p>
          </div>
          {/* <div
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
                    className="w-[400] h-[500]"
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
          </div> */}

          {/* <div className="flex gap-[10px] cursor-pointer mb-[50px]">
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
          </div> */}
          <Image
            src="/assets/images/case-study/banner5.png"
            width={867}
            height={454}
            alt="log2o"
            className="mb-[50px] w-full"
          />
          <div
            className="flex gap-[10px] items-center"
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
            Building a Customer-Centered Salon Booking App.
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
            <Link href="/case-study/seo-decode">
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
