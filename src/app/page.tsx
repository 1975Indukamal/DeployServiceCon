
import Discruptive from "@/Components/Home/Discruptive";
import Newsletter from "@/Components/shared/Newsletter";
import Industry from '@/Components/Home/Industry'
import OffSetTradeMark from "@/Components/shared/OffSetTradeMark";
import GetMetaData, { generatemetaData } from "@/utils"
import HorizontalSlide from "./our-services/_components/HorizontalSlide";
import Line from "./our-services/_components/Line";
import NewsBlogsClient from "@/Components/shared/News&Blogs";
import HeroH from "@/Components/Home/Hero";
import MotionSection from "@/Components/shared/MotionSection";


const data = GetMetaData("Home")
export const metadata = generatemetaData({ ...data ,canonical:"/"})


export default function Home() {
  return (
    <>
      <HeroH/>
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
