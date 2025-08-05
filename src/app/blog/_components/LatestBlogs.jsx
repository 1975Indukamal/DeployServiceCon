"use client"
import Banking_img from "../../../../public/assets/images/blogs_updated/Banking_img.png";
import Button from "@/Components/UI/Button";
import FoundServices_img from "../../../../public/assets/images/blogs_updated/FoundServices_img.png";
import Image from "next/image";
import Manufacturing_img from "../../../../public/assets/images/blogs_updated/Manufacturing_img.png";
import React, { useEffect, useState } from "react";
import Transport_img from "../../../../public/assets/images/blogs_updated/Transport_img.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import { blogs} from "../_components/blogs";




const LatestBlogs = () => {
// console.log(blogs)
  return (
    <section>
      <div className="container w-full">
        <div>
          <h4 className="text-[38px] text-primary font-[400] font-[Quicksand] pb-10">
            Latest Blogs{" "}
                              <span className='!text-[#C1C1C1] font-medium font-[Quicksand] !text-[18px]'>
                                0{4} Posts
                              </span>
          </h4>
        </div>
        <div className="gap-[100px] gap-x-5 lg:flex-row flex-col  flex pb-20 lg:justify-between w-full">
        <div className="flex-1">
            <div className="  group overflow-hidden">
              <div className="">
                <Image  
                src={blogs[2].image}
               
                height={400}
                width={600}
               alt={"banner_image"}
               className="h-full w-full group-hover:scale-105 duration-200 "

                />
              </div>
              <div className="flex gap-[10px] flex-col sm:flex-row">
                <div>
                  <h4 className="text-[36px] font-[Poppins] text-body pt-[32px] line-clamp-2">
                   {blogs[2]?.title}
                  </h4>
                  <p className="text-[18px] font-[Poppins] font-[400] text-[#5F5E5E] pt-2 line-clamp-2">
                  {blogs[2]?.summery}
                  </p>
                </div>
                <div className="mt-[20px] sm:mt-[70px]">
                  <Link href={`/blog/${blogs[2]?.slug}`}>
                  <Button text="Read More" /></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-2 xl:flex-1 flex lg:overflow-x-auto overflow-x-scroll lg:flex-wrap gap-5">
          {blogs?.slice(1,4).map((itm)=>{return(
            <div key={itm.id} className="flex-shrink-0 basis-[253px]  lg:basis-[224px] xl:basis-[253px] border border-primary">
              <div className="relative group flex-shrink-0 basis-[253px] lg:basis-[224px] xl:basis-[253px] overflow-hidden">
                <Image
                src={itm.image}
               alt=""
                height={400}
                width={400}
                className="h-full w-full group-hover:scale-105 duration-200 object-cover"
                 
                />
                <Link href={`/blog/${itm?.slug}`}>
                  
                <button className="absolute bottom-0 left-0 w-max rounded-tr-[20.5px] py-3 px-4  transition-all duration-500 flex items-center text-white  space-x-1 group-hover:bg-primary">
                <div className="absolute bottom-0 left-0 w-full h-full rounded-tr-[20.5px] py-3 px-4 bg-primary opacity-[0.7] group-hover:opacity-[1] z-0"></div>
                  <span className="text-white z-[1]">Read More</span>

                  <div className="w-[40px] h-[20px] pl-[15px] pr overflow-hidden relative">
                    <span
                      className={` text-white  absolute   top-1/2 right-1  -translate-y-1/2  group-hover:-right-full  transition-all duration-500`}
                    >
                      <MdOutlineArrowRightAlt size={30} />
                    </span>
                    <span
                      className={` text-white absolute   top-1/2 -left-full delay-75  -translate-y-1/2  group-hover:-left-[-20%] transition-all duration-500`}
                    >
                      <MdOutlineArrowRightAlt size={30} />
                    </span>
                  </div>
                </button>
                </Link>
              </div>
              <div className="px-4">
              <h4 className="line-clamp-2 text-[16px] font-[400] font-[Poppins] text-body pt-5">
                {itm.summery}
              </h4>
              <p className="text-primary text-[16px] font-[400] font-[Poppins] pt-2">
               {itm.cat}
              </p>
              </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
