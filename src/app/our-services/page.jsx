import React from "react";
import Hero from "./_components/Hero";
import CircleArrow from "./_components/CircleArrow";
import Line from "./_components/Line";
import HeadingToTurn from "./_components/HeadingToTurn";
import HideShow from "./_components/HideShow";
import OurCore from "./_components/OurCore";
import WhyChoose from "./_components/WhyChoose";
import LastSection from "./_components/LastSection";
import HorizantalSlide from "./_components/HorizontalSlide";
import GetMetaData, { generatemetaData } from "@/utils"
import RevenueBusiness from "./_components/RevenueBusiness"
import ClientBusiness from "./_components/ClientBusiness"
import DigitalExperience from "./_components/DigitalExperience"
import Discruptive from "@/Components/Home/Discruptive";
import OffSetTradeMark from "@/Components/shared/OffSetTradeMark";
const data = GetMetaData("Services")
export const metadata = generatemetaData({ ...data,canonical:"/our-services" })
const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <HeadingToTurn />
      <Line />
       {/* <CircleArrow />
      <HideShow /> */}
      {/* <Line /> */}
      {/* <OurCore /> */}
      <HorizantalSlide />
        <OurCore /> 
        <WhyChoose />
     
      <RevenueBusiness/>
      <Discruptive />
            <div className="container mb-10">
            <OffSetTradeMark
              imgClassName="rotate-[265deg]"
              imgWidth={70}
              imgHeight={70}
            />
            </div>
      {/* <ClientBusiness/>
      <DigitalExperience/>
      */}
      {/* <LastSection /> */}
    </div>
  );
};

export default page;
