import React from "react";
import Services from "./_component/Services";
import BestPractice from "./_component/BestPractice";
import DigitalRevolution from "./_component/DigitalRevolution";
import ServicesDetails from "./_component/ServicesDetails"
import Planning from "./_component/Planning"
import Technology from "./_component/Technology"
import WhyHexabells from "./_component/WhyHexabells"
import Hexadetails from "./_component/Hexadetails"
import WhatsAppcard from "./_component/WhatsAppcard"
import ContactForm from "./_component/ContactForm"
import DigiRevolution from "./_component/DigiRevolution"
import HeroSection from "./_component/HeroSection"
import SwiperImage from "./_component/SwiperImage"
import RotateCircle from "./_component/RotateCircle"
import Swiper from "swiper";
import GetMetaData, { generatemetaData } from "@/utils"
const data = GetMetaData("webDevelopement")
export const metadata = generatemetaData({ ...data})
const page = () =>{
    return(
        <>
        <div className="space-y-[100px]">
      
        <HeroSection/>
        <Services />
        <BestPractice/>
        <DigiRevolution/>
        <DigitalRevolution/>
        <ServicesDetails/>
        <Planning/>
        <Technology/>
        <SwiperImage/>
        <Planning heading="Want similar  for your " span2="Business?" span1="results"/>
      
       
        <WhyHexabells/>
        <Hexadetails/>
        <WhatsAppcard/>
    
       
        </div>
        </>
    )
}
export default page;