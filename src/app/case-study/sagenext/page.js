"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { CgFlagAlt } from "react-icons/cg";
import { RiLightbulbFlashLine } from "react-icons/ri";

const data = [
  {
    heading: "Page Speed:",
    text: "They tried different designs, different agencies to make the website page speed excellent, but it was never achieved. Since the page speed matters a lot, it became difficult to meet the expectations. ",
  },

  {
    heading: "Non-Mobile Friendly:",
    text: "Regardless of numerous attempts of making website mobile friendly, they could never achieve it. Due to non-mobile friendliness, users were jumping out from the website really quickly. ",
  },
  {
    heading: "Lack of enticing web elements:",
    text: "The website lacked visually appealing elements to encourage visitors to interact with the website. ",
  },
  {
    heading: "Lack of overall digital approach:",
    text: " A business which hugely depends upon digital channels to acquire clients, requires a holistic approach for the web ecosystem. Sagenext lacked an overall efficient approach to make the digital presence robust.",
  },
];
const data1 = [
  {
    heading: "Custom Website Design:",
    text: "Hexabells created a visually appealing and modern website design that aligned with the brand identity of Sagenext. The design incorporated a layout that resonated with the industry very efficiently.",
  },

  {
    heading: "Responsive Web Development:",
    text: "Hexabells developed a responsive website that was optimized for all devices, including desktops, tablets, and mobile phones. The website was designed to provide a seamless and engaging user experience across all platforms, regardless of screen size.",
  },

  {
    heading: "Page Speed:",
    text: "     Hexabells was able to present a website that ticked all the points related to page speed. The website gets a page speed score of 99 when tested across major page speed testing sites. For Sagenext, it was an overwhelming experience, and a solution that was never found in a decade.",
  },

  {
    heading: "User Engagement: ",
    text: " Hexabells transformed the website into a playground for users with attractive and meaningful web elements like: call to actions, forms, and other user interaction points.",
  },
  {
    heading: "Branding and Brand Identity:",
    text: "Hexabells incorporated Sagenext's brand identity elements, such as the logo, brand colors, and fonts, throughout the website to ensure consistent branding. This helped enhance brand recognition and build trust among users.",
  },
];
const data2 = [
  {
    heading: "Improved User Experience:",
    text: " The responsive design and user-friendly interface of the website resulted in an enhanced user experience across all devices, leading to increased user engagement and longer site visit durations. ",
  },

  {
    heading: "Boosted Online Sales:",
    text: "New leads are significantly increased after the new website goes live. Sagenext is deeply connected with its user base.   ",
  },
  {
    heading: "Increased Web Traffic:",
    text: " The addition of a blog section and content marketing efforts resulted in improved organic search rankings, increased web traffic, and higher visibility.  ",
  },

  {
    heading: "Enhanced Brand Image:",
    text: "The modern and visually appealing website design, along with consistent branding, helped in establishing Sagenext as a reputable and trusted brand",
  },
  {
    heading: "Competitive Edge:",
    text: "Sagenext is able to establish itself as one of the top choices among cloud hosting providers in the tax and accounting industries with a new digital approach helped by Hexabells.",
  },
];
const litag = [
  "Client Background",
  "Our Data center",
  "Challenges",
  "Solution",
  "Sage Tech",
  "Result",
];

const Page = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);

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
          <Image
            src="/assets/images/case-study/sagelogo1.png"
            width={200}
            height={200}
            alt="logo"
          />
          <p className="mt-[30px] mb-10 text-[22px] leading-8 text-[#2C3441]">
            Sagenext Cloud Hosting -
            <br />
            Website Development
            <br />
            Success Story in USA
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
        <div className="xl:w-[70%]  md:w-full w-full block ml-auto">
          <Image
            src="/assets/images/case-study/sagebanner1.png"
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
              <RiUser6Line size={20} color="#fff" />
            </div>

            <h1 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tight">
              Client Background
            </h1>
          </div>
          <p className="text-[16px] text-[#2C3441] mb-[50px]">
            Sagenext Cloud Hosting is a local, USA-based business that offers
            Platform as a Service for small and mid-sized businesses. They have
            been in the US industry for over a decade, but their existing
            website was not able to meet business expectations. They always fell
            behind in terms of page speed, mobile friendliness, and overall user
            experience. They approached Hexabells, a leading website development
            company, to revamp their online presence and create a visually
            appealing, user-friendly, lightning fast, and responsive website
            that could help them drive more sales and establish their brand as a
            leader in the industry.
          </p>
          <Image
            src="/assets/images/case-study/sagebanner2.png"
            width={867}
            height={454}
            alt="log2o"
            className="w-full"
          />
          <div className="mb-[50px]" ref={section3} id="2">
            <div className="flex justify-start items-center pt-10">
              <div className="rounded-full h-[37px] w-[37px] bg-[#EB7373] flex items-center justify-center">
                <CgFlagAlt size={20} color="#fff" />
              </div>
              <h2 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tighter">
                Challenges
              </h2>
            </div>
            <div className="text-[16px] text-[#000] font-[500] md:pl-12 pl-2">
              Sagenext had several challenges with their existing website,
              including:
            </div>
            {data.map((item, index) => (
              <div key={index} className="flex  md:pl-5 pl-2 space-y-5">
                <div className="h-[3px] flex-shrink-0 w-[15px] bg-[#EB7373]  mr-5 mt-8"></div>
                <p className="text-[16px] text-[#000]">
                  <span className="font-[500]">{item.heading}</span> {item.text}
                </p>
              </div>
            ))}
          </div>
          <Image
            src="/assets/images/case-study/sagebanner3.png"
            width={867}
            height={454}
            alt="log2o"
            className="mt-[50px] w-full"
          />
          <div className="mb-[50px] " ref={section4} id="3">
            <div className="flex justify-start items-center pt-10">
              <div className="rounded-full h-[37px] w-[37px] bg-[#EB7373] flex items-center justify-center">
                <RiLightbulbFlashLine size={20} color="#fff" />
              </div>
              <h2 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tighter">
                Solution
              </h2>
            </div>
            <div className="text-[16px] text-[#000] font-[500] md:pl-12 pl-2">
              Hexabells worked closely with Sagenext to understand their
              requirements and goals, and develop a comprehensive digital
              strategy to address their challenges. The solution included:
            </div>
            {data1.map((item, index) => (
              <div key={index} className="flex  md:pl-5 pl-2 space-y-5">
                <div className=" flex-shrink-0  mr-5 mt-6">{index + 1}.</div>
                <p className="text-[16px] text-[#000]">
                  <span className="font-[500]">{item.heading}</span> {item.text}
                </p>
              </div>
            ))}
          </div>
          <Image
            src="/assets/images/case-study/sagebanner4.png"
            width={867}
            height={454}
            alt="log2o"
            className="mt-[50px] w-full"
            ref={section5}
            id="4"
          />
          <div className=" ">
            <div
              className="flex justify-start items-center pt-10"
              ref={section6}
              id="5"
            >
              <div className="rounded-full h-[37px] w-[37px] bg-[#EB7373] flex items-center justify-center">
                <RiLightbulbFlashLine size={20} color="#fff" />
              </div>
              <h2 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tighter">
                Results
              </h2>
            </div>
            <div className="text-[16px] text-[#000] font-[500] md:pl-12 pl-2">
              The website development project by Hexabells resulted in
              significant improvements for Sagenext. The new website:
            </div>
            {data2.map((item, index) => (
              <div key={index} className="flex  md:pl-5 pl-2 space-y-5">
                <div className=" flex-shrink-0  mr-5 mt-6">{index + 1}.</div>
                <p className="text-[16px] text-[#000]">
                  <span className="font-[500]">{item.heading}</span> {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-[50px] ">
          <div
              className="flex justify-start items-center pt-10"
             
            >
              <div className="rounded-full h-[37px] w-[37px] bg-[#EB7373] flex items-center justify-center">
                <RiLightbulbFlashLine size={20} color="#fff" />
              </div>
              <h2 className="text-[30px] text-[#EB7373] pl-[10px] tracking-tighter">
              Conclusion
              </h2>
            </div>
            <p className="text-[16px] text-[#000] ml-12">
              {" "}
              The strategic partnership between Sagenext and Hexabells has not
              only transformed Sagenexts online presence but also positioned
              them as a leader in cloud hosting for the tax and accounting
              industries. The revamped website achieved remarkable results,
              enhancing user experience, driving online sales, increasing web
              traffic, and solidifying Sagenexts brand image, providing a
              significant competitive edge in the market.
            </p>
          </div>
          <div className="flex items-center justify-center gap-20 mt-[50px] mb-[50px] cursor-pointer">
            <Link href="/case-study/zoylee">
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
