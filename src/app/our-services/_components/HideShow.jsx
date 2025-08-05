"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaStarOfLife, FaHashtag, FaTruck } from "react-icons/fa6";
import { IoRestaurantSharp } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { RiGraduationCapFill, RiArrowUpDownFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import Law from "@/Components/icons/Law";
import { AiFillHome } from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";
import Air from "@/Components/icons/Air";
import Telecom from "@/Components/icons/Telecom";
import Travel from "@/Components/icons/Travel";
const HideShow = () => {
  const iconsRef = useRef(null);
  const initialState = Array(15).fill(false);
  const [expandedStates, setExpandedStates] = useState(initialState);
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [isEnabled, setEnabled] = useState(false);

  useEffect(() => {
    if (iconsRef.current) {
      const oberver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setRotate(true);
        }
      });
      oberver.observe(iconsRef.current);
    }
  }, [iconsRef.current]);

  const toggleOverlay = () => {
    setEnabled(!isEnabled);
    setIsHovered(!isHovered);
  };

 
    const toggleParagraph = (index) => {
      setExpandedStates((prevStates) => {
        return prevStates.map((state, i) => (i === index ? !state : false));
      });
      setActiveIndexes(index);
    };
  
  const boxData = [
    {
      image: <FaStarOfLife size={30} />,
      heading: "Healthcare",
      text: "Website design & development for healthcare, pharmacy, and wellness businesses, development for healthcare, pharmacy, and wellness businesses.",
    },
    {
      image: <IoRestaurantSharp size={30} />,
      heading: "Restaurant",
      text: "Develop an online presence for your customers",
    },
    {
      image: <FaHashtag size={30} />,
      heading: "STARTUP",
      text: "Proof of concept and MVP creation by a seasoned web design and development firm  ",
    },
    {
      image: <Air size={45} />,
      heading: "AIRLINES",
      text: "Reshape the flight experience with a fully responsive, modern, and user-friendly interface for leading airline ",
    },
    {
      image: <Travel size={30} />,
      heading: "TRAVEL",
      text: "Web design, branding, and travel and tourism software development services are provided to travel agencies",
    },
    {
      image: <HiMiniBuildingOffice2 size={30} />,
      heading: "Real estate",
      text: "Design and development of websites for real estate agents, estate agents, and other property professions",
    },
    {
      image: <RiGraduationCapFill size={30} />,
      heading: "Ed Tech",
      text: "learning management systems made to order for different businesses in education",
    },
    {
      image: <RiArrowUpDownFill size={30} />,
      heading: "b2b",
      text: "B2B website services for providing timely and compassionate responses to your customers in need",
    },
    {
      image: <MdVerifiedUser size={30} />,
      heading: "insurance",
      text: "Create great experience for your insurance firm",
    },
    {
      image: <FaTruck size={30} />,
      heading: "transportation",
      text: "Development & Web design for car dealers and Trucking company",
    },
    {
      image: <HiShoppingCart size={30} />,
      heading: "ecommerce",
      text: "Allow people to buy and sell physical goods, services, and digital products over the internet",
    },
    {
      image: <Law size={45} />,
      heading: "law firm",
      text: "Law firms website design & development",
    },
    {
      image: <Telecom size={40} />,
      heading: "telecom",
      text: "Website design and branding for telecommunications companies",
    },
    {
      image: <AiFillHome size={30} />,
      heading: "home builders",
      text: "Website design and developement for construction and home builder firms",
    },
    {
      image: <BiDumbbell size={40} />,
      heading: "gym",
      text: "Website is a great way to reach people who may not know about you",
    },
  ];
  return (
    <section className="container overflow-hidden">
      <div>
        <div className="max-w-[772px] mx-auto p-8 ">
          <div className="grid grid-cols-1 gap-6  ">
            {boxData.map((data, index) => (
              <div
                key={index}
                className=" p-4 border-b border-gray-300 bg-white "
              >
                <div className=" flex items-center justify-between ">
                  <div
                    className="flex items-center mb-4 cursor-pointer"
                    onClick={() => toggleParagraph(index)}
                  >
                    <span className={`mr-4 p-2 rounded-full  `}>
                      {React.cloneElement(data.image, {
                        color: activeIndexes === index

                          ? "#EB7373"
                          : "#5F5E5E",
                      })}
                    </span>
                    <h3
                      className={`text-[#5F5E5E] font-[Quicksand]  font-medium text-[18px]  uppercase ${
                        activeIndexes === index

                          ? "text-[#eb7373]"
                          : "text-gray-800"
                      }`}
                    >
                      {data.heading}
                    </h3>
                  </div>
                  <button
                    className={` px-2 transition-all duration-[.2s] ease-in-out ${
                      activeIndexes === index
                        ? "text-red-500 text-[40px] font-bold"
                        : "text-gray-800 text-[1.5em] font-bold"
                    }
              } `}
                    onClick={() => toggleParagraph(index)}
                  >
                    {expandedStates[index] ? "-" : "+"}
                  </button>
                </div>
                {expandedStates[index] && (
                  <p className="mt-4 text-gray-600">{data.text}</p>
                )}
              </div>
            ))}
          </div>
          <div className=" flex flex-col md:flex-row mt-[70px]  ">
            <div className="">
              <div className="mb-6">
                <div className="flex  items-center mb-2 ">
                  <h3 className="text-[#5F5E5E] font-Quicksand  md:text-[38px]  text-[22px] font-normal uppercase">
                    TURNING
                  </h3>
                  <img
                    src="/assets/images/services/one arrow.svg"
                    alt="Arrow"
                    className="md:w-[120px] w-[44px]  md:px-[25px] px-[14px]  "
                  />
                  <h3 className="text-[#5F5E5E] font-Quicksand  md:text-[38px]  text-[22px]  font-normal uppercase">
                    DREAMS
                  </h3>
                  <img
                    src="/assets/images/services/one arrow.svg"
                    alt="Arrow"
                    className="md:w-[120px] w-[44px]  md:px-[25px] px-[14px] 
                     
                      "
                  />
                  <h3 className="text-[#5F5E5E]  font-Quicksand  md:text-[38px] lg:text-[38px] xl:text-[38px]  text-[22px]  font-normal uppercase ">
                    INTO
                  </h3>
                </div>
              </div>
              <div className="mt-[30px] whitespace-nowrap">
                <h3 className="text-normal text-[#5F5E5E]   md:text-[38px] text-[22px]">
                  TECHNOLOGICAL
                  <span className=" font-[Quicksand]  text-[#2C3441] text-[400] md:text-[38px] font-normal text-[22px]">
                    {" "}
                    MASTERPIECES
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HideShow;
