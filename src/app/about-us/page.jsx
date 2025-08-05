import React from "react";
import Hero from "./_components/Hero"
import AskForQuote from "./_components/AskForQuote"
import Factual from "./_components/Factual"
import MissionVision from "./_components/MissionVision" 
import OurPeopleCulture from "./_components/OurPeopleCulture"
import DreamBigger from "./_components/DreamBigger"
import OurLeadership from "./_components/OurLeadership"
import JoinOurTeam from "./_components/JoinOurTeam"
import GetMetaData, { generatemetaData } from "@/utils"
import RevenueBusiness from "../our-services/_components/RevenueBusiness";
const data = GetMetaData("About")
export const metadata = generatemetaData({ ...data })
const page = () => {
  return (
    <>
      <div className="container mt-10  mb-16">
        
    <Hero/>
    <AskForQuote/>
    <RevenueBusiness/>
    <MissionVision/>
    <OurPeopleCulture/>
     <DreamBigger/>
     
      </div>
     {/* <OurLeadership/> */}
     <JoinOurTeam/>
    </>
  );
};

export default page; 
