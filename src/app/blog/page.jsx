import BlogCategories from "./_components/BlogCategories";
import { blogContent } from "./_components/blogs";
import Hero from "./_components/Hero";
import LatestBlogs from "./_components/LatestBlogs";
import Newsletter from "@/components/shared/Newsletter";
import GetMetaData, { generatemetaData } from "@/utils";
import Line from "../our-services/_components/Line";
import MotionSection from "@/components/shared/MotionSection";
const data = GetMetaData("Blogs")
export const metadata = generatemetaData({ ...data,canonical:"/blog" })



const page = async() => {

  return (
    <>
    <div className='container py-20 lg:py-32'>
    <Hero blogs={blogContent[0]}/>
    <MotionSection delay={0.1}>
    <LatestBlogs/>
    </MotionSection>
    <MotionSection delay={0.2}>
    <Line/></MotionSection>
       <MotionSection delay={0.3}><BlogCategories/></MotionSection>
       <MotionSection delay={0.4}><Newsletter /></MotionSection>
    </div>

    </>
  )
}

export default page