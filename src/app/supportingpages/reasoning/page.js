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
  "Synthesis of Productive",
  "What is Reasoning?",
  "Hexabells redefine reasoning?",
  " Hexabells 5 Pillars of Reasoning",
  "Our Conclusion for Reasoning",
  "Upcoming Information!"
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
      <div className="container xl:flex block  md:mt-[30px] mt-[10px]">
        <div className="xl:w-[30%]  w-full xl:h-[1000px] h-auto top-10  xl:sticky block">
          <p className="mb-10 text-[24px] leading-8 text-[#2C3441] font-[500]">
            #3. Reasoning
          </p>
          <ul className="space-y-[10px] pl-5 hidden xl:block text-[#CECECE] text-[16px] after:top-0 font-[400]after:content-[''] relative  after:absolute after:h-full h-max after:w-[3px] after:bg-[#eee] after:left-0">
            {litag.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => scrollIntoView(index)}
                  className={
                    active === index
                      ? "text-[#eb7373]  relative after:h-full after:w-[3px] after:bg-primary after:absolute after:content-[''] after:-left-5 z-10"
                      : "cursor-pointer hover:text-[#eb7373]"
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
              src="/assets/images/case-study/reasoningbanner1.png"
              width={867}
              height={454}
              alt="log2o"
              className="w-full mb-3"
           
            />
            <div className="absolute md:top-10 top-5 md:left-10 left-5"    ref={section1}
              id="0">
              <h1 className="md:text-[40px] text-[20px] text-[#fff] font-[500] leading-0">
                Synthesis of Productive
              </h1>
              <span className="md:text-[40px] text-[20px] text-[#fff] font-[500] z-50 md:leading-10 leading-0 relative after:['']  after:absolute after:-z-10 md:after:top-6 after:top-3 md:after:h-[25px] after:h-[15px] after:w-full after:bg-primary after:left-0">
                Reasoning
              </span>
            </div>
          </div>

          <span className="md:text-[16px]      text-primary font-[500] ">
            Have you ever wondered why some people look genius, talented, and
            foresighted while others give the impression of ordinary people?
          </span>
          <div className="md:text-[16px]      text-[#2C3441] space-y-3 mb-3">
            <p className="">
              Reasoning enables us to uncover hidden truths, make informed
              decisions, and find innovative ways to overcome obstacles.
            </p>
            <p className="">
              It involves using logical thinking, critical analysis, and
              problem-solving skills to evaluate and reach conclusions or make
              decisions.
            </p>
            <p>
              Furthermore, reasoning helps us make sense of the world,
              understand relationships between different ideas or concepts, and
              solve complex problems.
            </p>
            <p className="">
              And the abilities we just looked at above, if a person poses,
              looks wiser than ordinary individuals.
            </p>
          </div>
       
          <h3 className="text-primary md:text-[24px] text-[18px] font-[500] mb-[10px]" ref={section2} 
              id="1">
            What is Reasoning?
          </h3>
          <span className="text-[#2C3441]  text-[16px] font-[500] ">
            Reasoning is the cognitive process of making logical connections and
            drawing conclusions based on available information, evidence, and
            experiences.
          </span>
          <p className="text-[16px] text-[#2C3441] mt-3 mb-3">
            {" "}
            Here are two primary forms of reasoning:
          </p>

          <h4 className="text-[#2C3441] md:text-[18px] text-[16px]  font-[700]"  
             >
            Deductive Reasoning
          </h4>
          <p>
            This type of reasoning starts with general premises or principles
            and uses them to draw specific conclusions. It follows a top-down
            approach, where if the premises are true, the conclusion is
            guaranteed to be true.
          </p>
          <div  className="mt-2">
            <p className="">For example:</p>
            <p className="">• All men are mortal.</p>
            <p className="">• Newton is a man.</p>
            <p className="">• Theore, Newton is mortal.</p>
          </div>
          <h4 className="text-[#2C3441] md:text-[18px] text-[16px]  font-[700]"
              >
            Inductive Reasoning
          </h4>
          <p>
            This form of reasoning involves drawing general conclusions based on
            specific observations or evidence. It follows a bottom-up approach,
            where the conclusion is probable or likely but not necessarily
            certain.
          </p>
          <div  className="mt-2">
            <p className="">For example:</p>
            <p className="">• All men are mortal.</p>
            <p className="">• Newton is a man.</p>
            <p className="">• Theore, Newton is mortal.</p>
          </div>
          <div id="2" ref={section3}>
            <h3 className="text-primary md:text-[24px] text-[18px]  font-[500] md:mt-[20px] mt-2">
              How does Hexabells redefine reasoning?
            </h3>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              We at Hexabells, practice reasoning with ​​creation, design,
              implementation, and maintenance to have a proper understanding of
              what we will accomplish after completing a successful project.
            </p>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              We make sure that we find enough passion to create even a
              small-scale project. Our version of reasoning empowers us to
              develop applications, tools, or systems that can automate tasks,
              streamline processes, or provide new capabilities to users.
            </p>{" "}
          </div>
          <div  className="space-y-3" id="3" ref={section4}>
            <h3 className="text-primary md:text-[24px] text-[18px]  font-[500] md:mt-[20px] mt-2">
              Hexabells 5 Pillars of Reasoning
            </h3>
            <Image
              src="/assets/images/case-study/reasoningbanner2.png"
              width={867}
              height={454}
              alt="log2o"
              className="md:mt-[30px] mt-2 w-full"
            />
            <h4 className="text-[#2C3441] md:text-[18px] text-[16px]  font-[700]  mt-3" >
              Solving Problems
            </h4>
            <p className="text-[16px] text-[#2C3441]">
              It enables us in logical thinking, hypothesis generation, data
              analysis, and inference to diagnose and fix issues, make informed
              decisions, learn from data, emulate human expertise, understand
              and generate human language, and automate complex tasks
              intelligently.
            </p>
            <h4 className="text-[#2C3441] md:text-[18px] text-[16px]  font-[700] " >
              Innovation
            </h4>
            <p className="text-[16px] text-[#2C3441]">
              We at Hexabells, take each and every project as an opportunity for
              innovation. Innovation in technology solutions drives
              problem-solving, enhances performance, provides a competitive
              advantage, improves the user experience, and enables scalability
              and adaptability.
            </p>
            <h4 className="text-[#2C3441] md:text-[18px] text-[16px]  font-[700]" >
              Efficiency and Automation
            </h4>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              We take this step to simplify processes, reduce human effort,
              streamline operations, and improve productivity. We further
              elaborate on it by reducing human error, minimizing time waste,
              and improving overall operational efficiency.
            </p>
            <h4 className="text-[#2C3441] md:text-[18px] text-[16px]  font-[700]" >
              Scalability and Adaptability
            </h4>
            <p className="md:mt-[20px] mt-2 md:text-[16px] text-[#2C3441]">
              We ask our self questions, Is our solution scalable to accommodate
              growth and handle increased demands? Is our solution adaptable to
              evolving requirements and dynamic environments? With our
              data-driven approach, if we find the answers as yes, we find
              enough inspiration to create a scalable and adaptable solution
              that meets all dynamic requirements.
            </p>
            <h4 className="text-[#2C3441] md:text-[18px] text-[16px] font-[700]" >
              Collaboration and Communication
            </h4>
            <p className="md:mt-[20px] mt-2 md:text-[16px]  text-[#2C3441]">
              Our technology solution facilitates teamwork and allows
              individuals with diverse skills and expertise to work together
              towards a common goal. We use communication as a tool to
              coordinate tasks, track progress, assign responsibilities, and
              share updates in real-time.
            </p>
          </div>
          <div id="4" ref={section5}>
            <h3 className="text-primary md:text-[24px] text-[18px]  font-[500] md:mt-[20px] mt-2" >
              Our Conclusion for Reasoning
            </h3>

            <p className="md:mt-[20px] mt-2  text-[16px] font-[500] text-[#2C3441]">
              We practice reasoning in each and every step of solution creation
              to provide our clients with valuable insights, optimization
              opportunities, and the ability to make data-driven decisions,
              ultimately leading to improved performance, efficiency, and
              customer satisfaction.
            </p>
          </div>
          <div className="md:mt-[100px] mt-5" id="5" ref={section6}>
            <h3 className="text-primary md:text-[24px] text-[18px] font-[500] md:mt-[20px] mt-2">
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
