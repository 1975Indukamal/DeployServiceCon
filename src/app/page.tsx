

import Newsletter from "@/components/shared/Newsletter";
import Industry from '@/components/home/Industry'
import OffSetTradeMark from "@/components/shared/OffSetTradeMark";
import GetMetaData, { generatemetaData } from "@/utils"
import HorizontalSlide from "./our-services/_components/HorizontalSlide";
import Line from "./our-services/_components/Line";
import NewsBlogsClient from "@/components/shared/News&Blogs";
import Hero from "@/components/home/Hero";
import MotionSection from "@/components/shared/MotionSection";
import Discruptive from "@/components/home/Discruptive";


const data = GetMetaData("Home")
export const metadata = generatemetaData({ ...data ,canonical:"/"})


export default function Home() {
  return (
    <>
      <Hero/>
         <MotionSection>
      <Discruptive />
      </MotionSection>
       <MotionSection delay={0.1}>
      <OffSetTradeMark
        imgClassName="rotate-[265deg]"
        imgWidth={70}
        imgHeight={70}
      /></MotionSection>
      <MotionSection delay={0.2}>
      <HorizontalSlide/></MotionSection>
      <MotionSection delay={0.3}>
      <Industry /></MotionSection>
       <MotionSection delay={0.4}>
      <NewsBlogsClient/></MotionSection>
      <MotionSection delay={0.5}>
      <Line/></MotionSection>
       <MotionSection delay={0.6}>
      <Newsletter />
     </MotionSection>
    </>
  );
}
