
import HeroVideo from "@/Components/Home/HeroVideo";
import Services from "@/Components/Home/Services";
import Discruptive from "@/Components/Home/Discruptive";
import Newsletter from "@/Components/shared/Newsletter";
import Swiper from "@/Components/shared/Swiper";
import Work from "@/Components/Home/work";
import Industry from '@/Components/Home/Industry'
import OffSetTradeMark from "@/Components/shared/OffSetTradeMark";
import GetMetaData, { generatemetaData } from "@/utils"
import HorizontalSlide from "./our-services/_components/HorizontalSlide";
import Line from "./our-services/_components/Line";
import LatestBlogs from "./blog/_components/LatestBlogs";
import BlogCategories from "../app/blog/_components/BlogCategories";
import Hero from "@/Components/home/Hero"
import NewsBlogsClient from "@/Components/shared/News&Blogs";


const data = GetMetaData("Home")
export const metadata = generatemetaData({ ...data ,canonical:"/"})


export default function Home() {
  return (
    <>
      <Hero/>
      {/* <HeroVideo /> */}
      {/* <Services /> */}
      <Discruptive />
      {/* <div className="container"> */}
      <OffSetTradeMark
        imgClassName="rotate-[265deg]"
        imgWidth={70}
        imgHeight={70}
      />
      {/* </div> */}
      <HorizontalSlide/>
      {/* <Swiper /> */}
      {/* <Work /> */}
     
      <Industry />
      <NewsBlogsClient/>
      {/* <BlogCategories/> */}
      <Line/>
      <Newsletter />
      {/* <LatestBlogs/> */}
    </>
  );
}
