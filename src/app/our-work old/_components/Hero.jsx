/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/images/our-work/our-work_banner.png";
import CircularText from "@/Components/shared/CircularText"
const Hero = () => {
  return (
    <>
      <section>
        <div className=" container flex items-center justify-center">
          <div className=" row mt-5">
            <div className="my-5 mt-100">
              <div className="xl:pl-20 pl-0">
                <h1 className=" font-[quicksand] xl:text-[58px] lg:text-[50px] md:text-[48px] sm:text-[25px] text-[25px] font-[500] leading-20 ">
                Redefining  {" "}
                  <span className="text-primary font-[Quicksand]  font-[600] mt-25 xl:text-[58px] lg:text-[50px] md:text-[48px] text-[25px] ">
                  User Experiences<br className="hidden xl:block "/>
                  </span>{" "}
                  is What We Do The Best.
                </h1>
              </div>
              <div className="xl:pl-20 pl-0 ">                                                           
                <p className="text-[#5f5e5e] text-base  text-[18px] font-[400] leading-7 xl-w-[1044px] lg:w-[924px] md:w-[550px] w-full  ">
                We are not just builders; we are architects of immersive digital experiences that redefine the way users engage with the web and mobile platforms. Our focus is unwavering — to empower our clients in realizing their goals through innovative solutions and problem-solving prowess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative md:pt-10 pt-16">
      
      <div className="md:pt-10 pt-16 absolute xl:-top-12 lg:-top-14 md:-top-[76px] -top-[100px] w-fit xl:right-[100px] lg:right-[85px] md:right-[55px]  right-2 " >

      <CircularText imgClassName=" -rotate-90 " />
      </div>      
        <Image
          className="w-full h-full my-0 mb-md-3 object-cover bg-no-repeat"
          src={Banner}
          alt="Banner"
        />
      </div>
    </>
  );
};

export default Hero;
