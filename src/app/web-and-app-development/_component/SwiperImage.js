"use client"
import React from "react";
import Image from "next/image";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const MySwiper = () => {
  


  return (
    <>
      <div className="container">
        <h2 className="md:text-[40px] text-[32px] text-[#2c3441] font-[700] md:font-[700] -mb-12 font-[Poppins]">
          Our Clients’ <span className="text-[#eb7373]">Success</span> Stories
        </h2>
      </div>
   
      <SwiperComponent
        className=""
        slidesPerGroup={4}
       
        onAfterInit={(swiper) =>
            (swiper.slidesEl.style.transitionTimingFunction = "linear")
          }
      
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={7000}
        breakpoints={{

            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }}
      >
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/prishe.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
            <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type :  <span className="text-[#eb7373] font-[600]">Fashion & Beauty</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/sander10.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
             <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type : <span className="text-[#eb7373] font-[600]">Food & Beverage</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/vavci10.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
           <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type : <span className="text-[#eb7373] font-[600]"> Clothing & Apparel</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/avalon10.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
            <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type : <span className="text-[#eb7373] font-[600]">Consultant</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/prishe.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
           <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type : <span className="text-[#eb7373] font-[600]">Fashion & Beauty</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/sander10.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
            <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type : <span className="text-[#eb7373] font-[600]">Food & Beverage</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/vavci10.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
            <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type : <span className="text-[#eb7373] font-[600]">  Clothing & Apparel</span></h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/assets/images/case-study/avalon10.png"
              height={429}
              width={508}
              alt="icons"
              className="w-full"
            />
          <h3 className="text-center text-[16px] text-[#5F5E5E] font-[500]">Industry type : <span className="text-[#eb7373] font-[600]">Consultant</span></h3>
          </div>
        </SwiperSlide>
      </SwiperComponent>
   
    </>
  );
};

export default MySwiper;
