/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import GirlPhoto from "../../../../public/assets/images/about-us/GirlPhoto.png"
import CircularText from "@/Components/shared/CircularText"
const Hero = () => {
  return (
    <>
 
       

      <div className="relative ">
      <div className="relative  ml-[-7px] max-w-full xl:h-[600px] lg:h-[512px]  md:h-[401px] h-[300px] object-cover w-full ">
        {/* Yellow Background */}
        <div className="absolute -top-6 -right-6 w-[80%] h-[90%] rounded-[30px] sm:rounded-[50px] bg-[#FFD500] z-0" />
        <div className="absolute -bottom-[2px] -left-7 w-[80%] h-[90%] rounded-[30px] sm:rounded-[50px] border-[0.5px] border-[#FFD500] z-0" />

        {/* Image */}

          <video controls loop src="/assets/video/about.mp4" autoPlay muted className='relative z-10 rounded-[20px] sm:rounded-[40px] [box-shadow:0_-1px_20px_-2px_#0F0121] xl:h-[600px] lg:h-[512px]  md:h-[401px] h-[300px] object-cover w-full ' ></video>

      </div>
      <div className="flex items-center justify-center absolute top-0 left-0 z-10 ">
              <div className=" pl-0 pr-0 text-body max-w-2xl">
                <h1 className="text-[16px] sm:text-[20px] md:!text-[32px] font-normal leading-20 w-full bg-yellow-500 px-5 rounded-md">
                Where{" "}
                <span className="text-custombgc font-[600] font-[quicksand]">
                Innovation Ignites Imagination
           </span>{" "}
           : Building Digital Experiences That Inspire.
                </h1>
              </div>
        </div>
      {/* <div className="md:pt-10 pt-16 absolute xl:-top-8 lg:-top-10 md:-top-[66px] -top-[105px] w-fit xl:right-[100px] lg:right-[85px] md:right-[55px]  right-2 " >

      <CircularText imgClassName=" -rotate-90 " />
      </div> */}
   
      </div> 
    </>
  );
};

export default Hero;
