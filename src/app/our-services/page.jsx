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
import Discruptive from "@/components/Home/Discruptive";
import OffSetTradeMark from "@/components/shared/OffSetTradeMark";
import MotionSection from "@/components/shared/MotionSection";
import HeroN from "./_components/HeroN";

const data = GetMetaData("Services")
export const metadata = generatemetaData({ ...data, canonical: "/our-services" })

const page = () => {
  return (
    <div className="overflow-hidden">
      <HeroN/>
      <Hero />

      <MotionSection>
        <HeadingToTurn />
      </MotionSection>

      <MotionSection delay={0.1}>
        <Line />
      </MotionSection>

      <MotionSection delay={0.2}>
        <HorizantalSlide />
      </MotionSection>

      <MotionSection delay={0.3}>
        <OurCore />
      </MotionSection>

      <MotionSection delay={0.4}>
        <WhyChoose />
      </MotionSection>

      <MotionSection delay={0.5}>
        <RevenueBusiness />
      </MotionSection>

      <MotionSection delay={0.6}>
        <Discruptive />
      </MotionSection>

      <MotionSection delay={0.7}>
        <div className="container mb-10">
          <OffSetTradeMark
            imgClassName="rotate-[265deg]"
            imgWidth={70}
            imgHeight={70}
          />
        </div>
      </MotionSection>
    </div>
  );
};

export default page;
