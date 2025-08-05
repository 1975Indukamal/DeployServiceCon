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
  "kinesthetic Learning",
  "1. Learn from our Clients",
  "2. Learn from the market",
  "3. Learn from our people",
  "4. Learn from the mistakes",
  "5. Learn from our accomplishments",
  "Upcoming Information!",
];

const Page = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const section7 = useRef(null);
 
  const scrollIntoView = (index) => {
    const arr = [
      section1.current,
      section2.current,
      section3.current,
      section4.current,
      section5.current,
      section6.current,
      section7.current,
   
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
      section7.current,
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
            #2. Learning
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
              src="/assets/images/case-study/learningbanner1.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
              ref={section1}
              id="0"
            />
            <div className="absolute md:top-10 top-5 md:left-10 left-5">
              <h1 className="md:text-[40px] text-[20px] text-[#fff] font-[500] leading-0">
                kinesthetic
              </h1>
              <span className="md:text-[40px] text-[20px] text-[#fff] font-[500] z-50 md:leading-10 leading-0 relative after:['']  after:absolute after:-z-10 md:after:top-6 after:top-3 md:after:h-[25px] after:h-[15px] after:w-full after:bg-primary after:left-0">
                Learning
              </span>
            </div>
          </div>

          <span className="md:text-[16px]  text-primary font-[500] ">
            Learning is the process of pursuing knowledge, embracing challenges,
            and never ceasing the quest for growth and improvement.
          </span>
          <div className="mt-3 mb-3">
            <span className="md:text-[16px]  text-[#2C3441] font-[500] ">
              “When learning is cherished, the pursuit of knowledge becomes a
              way of life.”
            </span>
          </div>
          <div className="md:text-[16px]  text-[#2C3441] space-y-3 mb-3">
            <p className="">
              In the early days, learning was all about what works and what
              doesn’t work. Though that was inefficient, it helped in those
              times to survive and thrive.
            </p>
            <p className="">
              But the efficient human brains, having capacity to store and
              analyse information, has made humans learn faster and more
              efficiently.
            </p>
            <p>
              The rise of technology has made the learning process far easier
              and quicker. The information is now available at fingertips,
              enabling people to learn at their own pace and convenience.
            </p>
          </div>
          <h3 className="text-primary md:text-[24px] text-[18px] md:font-[500] font-[500] mb-[10px]">
            What Learning means for Hexabells?
          </h3>
          <p className="text-[16px] text-[#2C3441] mt-3 mb-3">
            Our entire operations at Hexabells is based on learning. Continuous
            learning has always helped us to be innovative, adaptive, and
            united, and they will also prepare us for the challenges of the
            future.
          </p>

          <div ref={section2} id="1" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              1. Learn from our Clients
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner2.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We learn from our clients to know about their journey and the
              expectations they carry to solve problems using technology. Based
              upon our learning, we improve the technology to better meet their
              needs. This will help you to grow your business and to create a
              loyal customer base.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We memorise learning from our clients and make the best use of it
              while we engage with another project. This helps us to reduce the
              time of problem solving, and helps us to reduce the time period of
              overall project development.
            </p>
          </div>
          <div ref={section3} id="2" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              2. Learn from the market
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner3.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              Trends are changing everyday as expectations from technology. So,
              learning from the market is a must for an innovative organisation
              like Hexabells.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We keep a close eye on the industry trends, and we reshape our
              workflows, ways of doing things, and efficiency parameters.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              This is just not enough. When we initiate a project, our first
              step becomes market analysis to know as much as possible about the
              particular niche to find a best ever technology solution.
            </p>
          </div>
          <div ref={section4} id="3" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              3. Learn from our people
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner4.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We foster open communication throughout the entire organisation so
              that members can learn from each other, and the organisation can
              learn from its members.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We encourage forming cross-functional teams to empower our members
              to uncover the ingredients of almost all kinds of activities.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We sincerely believe that an organisation is made by its people,
              and we consistently work towards developing an excellent learning
              culture.
            </p>
          </div>
          <div ref={section5} id="4" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              4. Learn from the mistakes
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner5.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              At Hexabells, learning from mistakes is central to all other
              learning opportunities, by discouraging the blame-games. If we
              find a mistake, we conduct a detailed analysis to understand the
              root causes, contributing factors, and potential areas for
              improvement.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We encourage our team members to openly share their mistakes,
              lessons learned, and best practices with colleagues.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We turn our mistakes into experiences to build a great work
              environment to serve our clients with our maximum potential.
            </p>
          </div>
          <div ref={section6} id="5" className="mt-2">
            <h3 className="text-[#2C3441] md:text-[20px] text-[18px] md:font-[500] font-[500] md:mt-[20px] mt-2 mb-5">
              5. Learn from our accomplishments
            </h3>
            <Image
              src="/assets/images/case-study/learningbanner6.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              We acknowledge and celebrate achievements within the organisation
              with a great amount of pride. This doesn’t only boost our
              confidence, it also helps to create a positive and motivating
              environment where accomplishments are valued and appreciated.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We facilitate discussions to extract lessons learned, identify
              areas of improvement, and understand what could have been done
              differently to achieve even better results.
            </p>
          </div>

          <div className="md:mt-[100px] mt-5" ref={section7} id="6">
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
