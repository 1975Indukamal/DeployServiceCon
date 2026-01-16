
import Discruptive from "@/Components/Home/Discruptive";
import Newsletter from "@/Components/shared/Newsletter";
import Industry from '@/Components/Home/Industry'
import OffSetTradeMark from "@/Components/shared/OffSetTradeMark";
import GetMetaData, { generatemetaData } from "@/utils"
import HorizontalSlide from "./our-services/_components/HorizontalSlide";
import Line from "./our-services/_components/Line";
import NewsBlogsClient from "@/Components/shared/News&Blogs";
import HeroH from "@/Components/Home/Hero";


const data = GetMetaData("Home")
export const metadata = generatemetaData({ ...data ,canonical:"/"})


export default function Home() {
  return (
    <>
      <HeroH/>
      <Discruptive />
      <OffSetTradeMark
        imgClassName="rotate-[265deg]"
        imgWidth={70}
        imgHeight={70}
      />
     
      <HorizontalSlide/>
     
      <Industry />
      <NewsBlogsClient/>
     
      <Line/>
      <Newsletter />
     
    </>
  );
}
