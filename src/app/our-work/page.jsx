"use client";
import { motion } from "framer-motion";
import TeamMemberCard from "./_components/TeamMemberCard";
import Link from "next/link";
import { Hero } from "./_components/Hero";
import { ProjectsSection } from "./_components/ProjectsSection";
import { TeamSection } from "./_components/TeamSection";
import { ClientsSection } from "./_components/ClientsSection";
import MotionSection from "@/Components/shared/MotionSection";
import RevenueBusiness from "../our-services/_components/RevenueBusiness";
import NewsBlogsClient from "@/Components/shared/News&Blogs";
import Newsletter from "@/Components/shared/Newsletter";
import OffSetTradeMark from "@/Components/shared/OffSetTradeMark";
import Discruptive from "@/Components/Home/Discruptive";
import Line from "../our-services/_components/Line";

const Page = () => {
  return (
  <div className="">
  <Hero/>
  <ProjectsSection/>
  <TeamSection/>
<ClientsSection/>
<Line/>
<div className="pb-20">
 <MotionSection>
      <Discruptive />
      </MotionSection>
       <MotionSection delay={0.1}>
      <OffSetTradeMark
        imgClassName="rotate-[265deg]"
        imgWidth={70}
        imgHeight={70}
      /></MotionSection>
      </div>
  <MotionSection delay={0.1}>
        <RevenueBusiness />
      </MotionSection>
     
            <div className="py-20">

      <NewsBlogsClient />
      </div>
      <Line/>
            <div className="py-20">
              <Newsletter />
            </div>
  </div>
  );
};

export default Page;
