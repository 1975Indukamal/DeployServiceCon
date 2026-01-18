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
import MotionSection from "@/components/shared/MotionSection";

const data = GetMetaData("About")
export const metadata = generatemetaData({ ...data })
const page = () => {
  return (
    <>
      <div className="container py-20 lg:py-32">
        
    <Hero/>
    <MotionSection>
          <AskForQuote />
        </MotionSection>

        <MotionSection delay={0.1}>
          <RevenueBusiness />
        </MotionSection>

        <MotionSection delay={0.2}>
          <MissionVision />
        </MotionSection>

        <MotionSection delay={0.3}>
          <OurPeopleCulture />
        </MotionSection>

        <MotionSection delay={0.4}>
          <DreamBigger />
        </MotionSection>
      </div>

      {/* Optional sections */}
      {/* 
      <MotionSection delay={0.5}>
        <OurLeadership />
      </MotionSection> 
      */}

      <MotionSection delay={0.5}>
        <JoinOurTeam />
      </MotionSection>
    </>
  );
};

export default page; 
