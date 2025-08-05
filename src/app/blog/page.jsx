import BlogCategories from "./_components/BlogCategories";
import { blogContent } from "./_components/blogs";
import Hero from "./_components/Hero";
import LatestBlogs from "./_components/LatestBlogs";
import Newsletter from "@/Components/shared/Newsletter";
import GetMetaData, { generatemetaData } from "@/utils";
import Line from "../our-services/_components/Line";
const data = GetMetaData("Blogs")
export const metadata = generatemetaData({ ...data,canonical:"/blog" })



const page = async() => {

  return (
    <>
    <div className='container'>
    <Hero blogs={blogContent[0]}/>
    <LatestBlogs/>
    <Line/>
    <BlogCategories/>
    <Newsletter />
    </div>

    </>
  )
}

export default page