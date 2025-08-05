"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
import ArrowButton from "../../../Components/UI/Button";
import CircleArrow from "./CircleArrow";
const boxData = [
  {
    image: <FaStarOfLife size={30} color="#5F5E5E" />,
    heading: "Healthcare",
  },
  {
    image: <IoRestaurantSharp size={30} color="#5F5E5E" />,
    heading: "Restaurant",
  },
  {
    image: <FaHashtag size={30} color="#5F5E5E" />,
    heading: "STARTUP",
  },
  {
    image: <Air size={45} color="#5F5E5E" />,
    heading: "AIRLINES",
  },
  {
    image: <Travel size={30} color="#5F5E5E" />,
    heading: "TRAVEL",
  },
  {
    image: <HiMiniBuildingOffice2 size={30} color="#5F5E5E" />,
    heading: "Real estate",
  },
  {
    image: <RiGraduationCapFill size={30} color="#5F5E5E" />,
    heading: "Ed Tech",
  },
  {
    image: <RiArrowUpDownFill size={30} color="#5F5E5E" />,
    heading: "b2b",
  },
  {
    image: <MdVerifiedUser size={30} color="#5F5E5E" />,
    heading: "insurance",
  },
  {
    image: <FaTruck size={30} color="#5F5E5E" />,
    heading: "transportation",
  },
  {
    image: <HiShoppingCart size={30} color="#5F5E5E" />,
    heading: "ecommerce",
  },
  {
    image: <Law size={45} color="#5F5E5E" />,
    heading: "law firm",
  },
  {
    image: <Telecom size={40} color="#5F5E5E" />,
    heading: "telecom",
  },
  {
    image: <AiFillHome size={30} color="#5F5E5E" />,
    heading: "builders",
  },
  {
    image: <BiDumbbell size={40} color="#5F5E5E" />,
    heading: "gym",
  },
];
const DigitalExperience = () => {

    const iconsRef = useRef(null);
    const [rotate, setRotate] = useState(false);
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

  return (
    <>
     <CircleArrow/>
      <div className="container mt-10 mb-[100px]">
       
        <div className="md:flex block  gap-20 ">
          <div className="max-w-[366px]">
            <span className="text-primary font-[Poppins] text-lg lg:font-normal   uppercase font-[500] leading-[28px]">
              Explore Industries we Serve
            </span>
            <p className="text-[#5f5e5e] font-[Poppins] text-base font-normal leading-7 pt-[15px]">
              As we at HexaBells wish to leave our mark in a variety of
              industries. Our brief yet significant experience taught us about
              how clients behave in various industries. Our imagination and
              viewpoint are crucial in adjusting to that unique vertical.
            </p>
            <div className="flex flex-wrap gap-[20px] items-center mt-[20px]">
              <ArrowButton
                text="Explore More"
                href="https://wa.me/919810539058"
                className={`h-100 ${"rounded_full"}`}
              />
            </div>
          </div>
          <div className=" md:w-2/4 xl:hidden items-center justify-center flex">
            <div className="relative w-max" ref={iconsRef}>
              <Image
                className="relative  my-5 "
                src="/assets/images/work/eclips.svg"
                width={150}
                height={150}
                alt=""
              />
              <Image
                className={`absolute -translate-x-2/4 -translate-y-2/4 top-[50%] left-[50%]  ${
                  rotate ? "rotate-90" : "rotate-0"
                } duration-500 `}
                src="/assets/images/work/Vector3.svg"
                width={50}
                height={50}
                alt=""
              />
            </div>
          </div>
          <div className="xl:grid md:hidden hidden md:grid-cols-4 grid-cols-2 place-items-center gap-[60px] md:mt-20 xl:mt-0 mt-10">
            {boxData.map((item, index) => (
              <div key={index}>
                <div className="grid place-items-center">
                  <div className="mb-[12px]">{item.image}</div>
                  <span className="text-[18px] text-[#5F5E5E] font-[500] uppercase leading-[30px]">
                    {item.heading}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:hidden  grid md:grid-cols-4 grid-cols-2 place-items-center gap-[60px] md:mt-20 xl:mt-0 mt-10">
            {boxData.map((item, index) => (
              <div key={index}>
                <div className="grid place-items-center">
                  <div className="mb-[12px]">{item.image}</div>
                  <span className="text-[18px] text-[#5F5E5E] font-[500] uppercase leading-[30px]">
                    {item.heading}
                  </span>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};
export default DigitalExperience;
