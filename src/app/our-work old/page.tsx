
import React from "react";
import Swiper from "../../Components/shared/Swiper";
import Newsletter from "../../Components/shared/Newsletter";
import Hero from "./_components/Hero";
import OurApproach from "./_components/OurApproach";
import AllWorks from "./_components/AllWorks";
import OurStrategey from "./_components/OurStrategey";
import BussConceptAndTrademark from "./_components/BussConceptAndTrademark";
import OffSetTradeMark from "@/Components/shared/OffSetTradeMark";
import GetMetaData, { generatemetaData } from "@/utils"
import NewsBlogs from "@/Components/shared/News&Blogs";
const data = GetMetaData("Work")
export const metadata = generatemetaData({ ...data,canonical:"/our-work" })


const page = () => {
  return (
    <>
      <div className="container mt-5 overflow-hidden">
        <Hero />
        <OurApproach />
        <AllWorks />
        <OurStrategey />
        <BussConceptAndTrademark />
      </div>
      
      <div className=" lg:pt-0 md:pt-5 pt-10 lg:pl-0 md:pl-[350px] pl-[100px]">
      <OffSetTradeMark />
      
      </div>
      <div className="container pt-24">
        <hr className="border-[#5F5E5E]"/>
      </div>
      <div className="pb-10 pt-10">
        <Swiper />
      </div>
        <NewsBlogs />

      <div className="  pb-10">
        <Newsletter />
      </div>
    </>
  );
};
export default page;
