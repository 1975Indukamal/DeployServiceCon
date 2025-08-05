import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import CircularText from "../../../Components/shared/CircularText";
import logo from "../../../../public/assets/images/hexabells-logo.webp";
import RotateCircle from "./RotateCircle";

const HeroSection = () => {
  return (
    <>
    <div className="w-full">
      <div className="bg-cover bg-right  md:bg-[url('/assets/images/case-study/hero.png')] bg-[url('/assets/images/case-study/hero2.png')]">
        <div className="container">
       
            <Image
              src={logo}
              alt="hexabells logo"
              width={221}
              height={40}
              className="md:pt-[80px] pt-5 pb-10 md:pb-0 "
            />
        
          <div className="xl:flex block  items-center   ">
            <div className="">
              <h1
                className="lg:text-[56px] md:text-[40px]  text-[30px] capitalize text-[#2C3441B2] font-[400]
            md:leading-[65px] leading:[50px] mt-10"
              >
                Your{" "}
                <span className="lg:text-[56px] md:text-[40px] text-[30px] text-[#2C3441] font-[700]">
                
               
                  WEBSITE
                
                </span>{" "}
                &{" "}
                <span className="lg:text-[56px] md:text-[40px] text-[30px] text-[#2C3441] font-[700] relative">
                <span>
                  <Image
                  src="/assets/images/case-study/model1.png"
                  height={20}
                  width={20}
                  alt="icons"
                  className="absolute md:-right-[10px] md:-top-[7px] -right-2 -top-3"
                  />
                 </span>
                  aPP
                </span>
                <br className="md:hidden xl:block block" /> are more than just
                <br className="md:hidden xl:block block" />
                24x7 sales avenue.
              </h1>
              <h3 className="text-[18px] text-[#5F5E5E] font-[600] capitalize mt-[20px] font-[Poppins]">
                Let{" "}
                <span className="text-[18px] text-[#eb7373] font-[700] font-[poppins] relative">
                <span>
                  <Image
                  src="/assets/images/case-study/model2.png"
                  height={15}
                  width={15}
                  alt="icons"
                  className="absolute md:-right-[5px] md:-top-[12px] -right-1 -top-3"
                  />
                 </span>
                  Hexabells
                </span>{"  "}
                {" "}Extend its Capabilities.
              </h3>
              <div className="md:w-max  md:ml-auto lg:ml-48 md:block flex justify-center mt-10 pb-0">
                <CircularText containerClass="bg-[#F4F4F466]" />
              </div>
            </div>
            <div className="">
              <RotateCircle/>
              <div className="flex justify-center xl:-mt-[300px] mt-20  relative z-50 ">
                <ContactForm />
              </div>
            </div>
          </div>
        
        </div>
        </div>
        <div className="container relative lg:mt-10 xl:mt-0 mt-10">
        <h2 className="text-[36px] text-[#2C3441B2] font-[Quicksand]">Driven by Data, Shaped for <span className="text-[#2C3441] bg-[url('/assets/images/case-study/model3.png')] bg-bottom bg-contain bg-no-repeat">Success,</span> <br className="md:block hidden"/> and Tailored to Your Budget.</h2>
      </div>
      </div>
    </>
  );
};
export default HeroSection;
