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
  "Client Interaction",
  "Wow!! What is user ...",
  "1- HexaBells' Handshake:",
  "2- Hexabells' lens:",
  "3- Hexabell’s Tea ...",
  "4- Hexabell’s Creative ...",
  "5- Hexabell’s Creative ...",
  "6- Hexabells First Success",
  "7- The Game for Coders ...",
  "8- Hexabells Consecutive ...",
  "9- It’s party all ...",
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
  const section8 = useRef(null);
  const section9 = useRef(null);
  const section10 = useRef(null);
  const section11 = useRef(null);
  const section12 = useRef(null);
  const scrollIntoView = (index) => {
    const arr = [
      section1.current,
      section2.current,
      section3.current,
      section4.current,
      section5.current,
      section6.current,
      section7.current,
      section8.current,
      section9.current,
      section10.current,
      section11.current,
      section12.current,
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
      section8.current,
      section9.current,
      section10.current,
      section11.current,
      section12.current,
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
            #1. Interaction
          </p>
          <ul className="space-y-[10px] pl-5 hidden xl:block text-[#CECECE] text-[16px] after:top-0 font-[400]after:content-[''] relative  after:absolute after:h-full h-max after:w-[3px] after:bg-[#eee] after:left-0">
            {litag.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => scrollIntoView(index)}
                  className={
                    active === index
                      ? "text-[#eb7373]  relative after:h-full after:w-[3px] after:bg-primary after:absolute after:content-[''] after:-left-5 z-10"
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
              src="/assets/images/case-study/interactionbanner1.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full "
              ref={section1}
              id="0"
            />
            <div className="absolute md:top-10 top-5 md:left-10 left-5">
              <h1 className="md:text-[40px] text-[20px] text-[#fff] font-[500] leading-0">
                Client or Users
              </h1>
              <span className="md:text-[40px] text-[20px] text-[#fff] font-[500] z-50 md:leading-10 leading-0 relative after:['']  after:absolute after:-z-10 md:after:top-6 after:top-3 md:after:h-[25px] after:h-[15px] after:w-full after:bg-primary after:left-0">
                Interaction
              </span>
            </div>
          </div>
          <p
            className="md:text-[16px]   text-[#2C3441] md:mt-10 mt-3"
            ref={section2}
            id="1"
          >
            <span className="md:text-[16px]  text-primary font-[500] ">
              9 out of 10 users bounce within a couple of seconds after landing
              on a page,{" "}
            </span>
            as per a report from Google Insider. And it all happens when website
            owners as per a report from Google Insider. And it all happens when
            website owners have no idea about what user interaction means. `The
            above fact is really surprising since, after investing so much of
            money and effort to create digital resources like: websites,
            applications, and other IOT devices, we just miss grabbing users
            attention by a whisker.
          </p>
          <p className="md:text-[16px]  text-[#2C3441] md:mt-5 mt-3 md:mb-5 mb-3">
            User interaction is not a single actionable item that we can click
            to optimize the user’s relationship with our digital resources.
            Instead, it has a robust ecosystem that defines the relationship
            between our
          </p>
          <Image
            src="/assets/images/case-study/interactionbanner2.png"
            width={867}
            height={454}
            alt="log2o"
            className="w-full"
          />
          <div className="md:mb-[50px] mb-[20px]" ref={section2} id="1">
            <h2 className="md:text-[30px] text-[18px] text-[#EB7373] pl-[10px] md:pt-10 pt-2 tracking-tighter">
              Wow!! What is user interaction, then?
            </h2>

            <p className="md:text-[16px]  text-[#2c3441]">
              User interaction refers to the process of communication and
              exchange of information between a user and a system, such as a
              website, an application, or a device. It includes any action or
              feedback that a user provides to the system, and any response or
              output that the system provides back to the user.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2c3441]">
              {" "}
              User interaction can take many forms, such as clicking on buttons,
              filling out forms, selecting options from menus, typing in text,
              or swiping and tapping on touchscreens. It can also include
              gestures, voice commands, and other modes of input.
            </p>
          </div>
          <Image
            src="/assets/images/case-study/interactionbanner3.png"
            width={867}
            height={454}
            alt="log2o"
            className="md:mt-[30px] mt-2 w-full"
          />
          <div className="md:mb-[50px] mb-5">
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2c3441]">
              Effective user interaction is essential for creating a positive
              user experience, which is crucial for the success of any product
              or service. A well-designed user interface that promotes clear and
              intuitive user interaction can enhance engagement, satisfaction,
              and productivity, while reducing frustration and errors.
            </p>
          </div>
          <h3 className="text-primary md:text-[24px] text-[18px] md:      font-[500] mb-[10px]">
            AAH, you probably missed it, we take interactions quite differently
          </h3>
          <span className="text-[#2C3441] text-[16px] font-[500] ">
            What does interaction mean for HexaBells?
          </span>
          <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
            {" "}
            We at Hexabells, have defined our own frameworks for interactions
            that go far beyond just user interactions. Below are our{" "}
            <span className="text-[#2C3441]  text-[16px] font-[500]">
              patterns for interaction:
            </span>
          </p>
          <div ref={section3} id="2">
            <h3 className="text-primary underline  md:text-[24px] text-[18px] md:      font-[500] md:mt-[20px] mt-2">
              1- HexaBells Handshake:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner4.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              For us, a handshake is not just about greeting someone.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              It’s about understanding client business problems that involve
              identifying the specific challenges and pain points they face in
              their business operations or customer experience.
            </p>{" "}
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              Having a deep understanding of their entire ecosystem is a nice
              first step to begin with.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              {" "}
              And to do this, we engage in thorough discussions, conduct
              assessments, and gather insights from stakeholders, end-users, and
              market research.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              And we conclude the handshake with our clients, giving them a
              detailed overview of their key business challenges.
            </p>
          </div>
          <div ref={section4} id="3">
            <h3 className="text-primary underline md:text-[24px] text-[18px] md:      font-[500] md:mt-[20px] mt-2">
              2- Hexabells lens:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner5.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We have the productive habit of seeing things very differently
              than what others see.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              We just don’t rely on the information we have with just an initial
              handshake, we have our lenses to see your business operations.
            </p>{" "}
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              We call it Hexabell’s Lens.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              We have a business analysis team to gather, analyze, and derive
              meaningful insights for our clients.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              Developing data analytics and reporting capabilities can help us
              make data-driven decisions, identify trends, spot opportunities,
              and optimize business strategies.
            </p>
          </div>
          <div ref={section5} id="4">
            <h3 className="text-primary underline md:text-[24px] text-[18px] md:      font-[500] md:mt-[20px] mt-2">
              3- Hexabell’s Tea Time:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner6.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              With a warm and refreshing tea session, we present our data driven
              insights before our clients and discuss the further roadmap to go
              ahead.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              We also would interact sufficiently with our clients to know how
              they want to see their digital products after having a clear
              understanding about what are the latest trends.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              After collecting enough feedback from our clients, we say goodbye
              to them with the promise to meet soon.
            </p>
          </div>
          <div ref={section6} id="5">
            <h3 className="text-primary underline md:text-[24px] text-[18px] md:      font-[500] md:mt-[20px] mt-2">
              4- Hexabell’s Creative Demo 1:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner7.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              Wow, its time to show off.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              It’s the time when our clients see the first glance of their
              digital products.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              Yes, we present our mock-up versions before our clients with
              possibly low to mid-fidelity designs.
            </p>
          </div>
          <div ref={section7} id="6">
            <h3 className="text-primary underline md:text-[24px] text-[18px] md:      font-[500] md:mt-[20px] mt-2">
              5- Hexabell’s Creative Demo 2:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner7.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              Based upon our clients feedback, we improvise the previous version
              to be loved by our clients.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              We again call on our clients, possibly for the final demo.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              Final doesn’t mean the end of feedback sessions. They are always
              on.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              Once we have a final version of the prototype, we have a solid
              idea to go further.
            </p>
          </div>
          <div ref={section8} id="7">
            <h3 className="text-primary md:text-[24px] underline text-[18px] md:      font-[500] md:mt-[20px] mt-2">
              6- Hexabells First Success Party:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner8.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              {" "}
              Yes, you heard it right.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              {" "}
              We present the final version of the UI before our clients to make
              them feel superbly encouraged.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              Yet, the area of improvisation is still open. Because, at
              Hexabells, our practice is not just about delivering the products,
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              Yes, it’s about delivering a product that creates a WOW moment.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              WOW means the first party being concluded.
            </p>
          </div>
          <div ref={section9} id="8">
            <h3 className="text-primary underline md:text-[24px] text-[18px] md:      font-[500] md:mt-[20px] mt-2">
              7- The Game for Coders is on:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner9.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              After having a productive layout, our coders jump into action.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              {" "}
              They work together to create a high-performance digital resource
              with all the expected functionalities.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              At Hexabells, coding goes far beyond what we generally see as
              programming. We have created some basic ethics of coding which
              includes
            </p>
            <ul className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              <li>• Privacy and Data Protection</li>{" "}
              <li>• Accessibility and Inclusivity </li>
              <li>• Accuracy and Reliability </li>
              <li>• Transparency and Accountability</li>
              <li> • Intellectual Property and Copyright</li>{" "}
              <li>• User Experience and Usability</li>
            </ul>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              By keeping the above factors in mind, our programming ninjas
              create a mind blowing product that can be proudly presented before
              our clients.
            </p>
          </div>
          <div ref={section10} id="9">
            <h3 className="text-primary underline md:text-[24px] text-[18px]  font-[500] md:mt-[20px] mt-2">
              8- Hexabells Consecutive Parties:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner10.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              {" "}
              Through multiple parties, depending on the complexity of the
              product, we keep on presenting different iterations of our digital
              solutions.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              {" "}
              Many interactions help us and our clients make sure that the
              entire project is finally crafted into smaller pieces so that we
              can have a clear look at even small portions at a time.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              We highly recommend drinking it in sips instead of a single bottle
              at a time.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              And the party is on until the final version is ready.
            </p>
          </div>
          <div ref={section11} id="10">
            <h3 className="text-primary underline md:text-[24px] text-[18px]  font-[500] md:mt-[20px] mt-2">
              9- It’s party all night:
            </h3>
            <Image
              src="/assets/images/case-study/interactionbanner11.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[14px] text-[#2C3441]">
              {" "}
              Once the product is successfully delivered, we go to a party all
              night.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[14px] text-[#2C3441]">
              {" "}
              Yes, that’s the most precious moment for team Hexabells.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[14px] text-[#2C3441]">
              With a successful product launch, our team celebrates it like
              never before.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[14px] text-[#2C3441]">
              We collect final feedback from our clients to further strengthen
              our process.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[14px] text-[#2C3441]">
              Because, we at Hexabells believe that feedback is the oxygen we
              need to go quicker and quicker.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[14px] text-[#2C3441] font-[500]">
              We learn from the word interaction and use it quite effectively to
              create a digital product that is trendy, solves problems, and
              causes business growth.{" "}
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[14px] text-[#2C3441] font-[500]">
              Interactivity increases engagement by allowing us to actively
              participate in and interact with the journey. It provides a sense
              of control and ownership that can make the experience more
              satisfying and enjoyable.
            </p>
          </div>
          <div className="md:mt-[100px] mt-5" ref={section12} id="11">
            <h3 className="text-primary md:text-[24px] text-[18px]  font-[500] md:mt-[20px] mt-2">
              9- It’s party all night:
            </h3>
            <div className="md:grid grid-cols-3 block md:gap-5 gap-0 md:mb-[100px] mb-10 ">
              {services.map((service, index) => (
                <div key={index} className="mt-[30px]">
                  <div className="relative  group overflow-hidden">
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
