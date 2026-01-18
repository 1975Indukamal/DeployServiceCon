"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Star1 from "../../../public/assets/images/our-work/01/star.svg";
import Star2 from "../../../public/assets/images/our-work/01/star2.svg";
import Star3 from "../../../public/assets/images/our-work/01/star3.svg";

const AnimatedText = () => {
  return (
    <div className="mt-20 md:mb-[80px] mb-[20px] overflow-hidden py-8  pt-8 font-[poppins]">
      <div className="bg-[#DFDFDF] z-20  relative -rotate-2">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          onAfterInit={(swiper) =>
            (swiper.slidesEl.style.transitionTimingFunction = "linear")
          }
          effect="fade"
          autoplay={{ delay: 1, disableOnInteraction: false }}
          loop={true}
          speed={3000}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star1}
                  alt="Star1"
                />
              </span>
              <span className="  text-3xl  md: md:text-[53px]  leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441] ">
                HONESTY
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star2}
                  alt="Star2"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441] ">
                COLLABORATION
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star3}
                  alt="Star3"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441] ">
                EVOLUTION
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star3}
                  alt="Star3"
                />
              </span>
              <span className="  text-3xl  md:  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441] ">
                PURPOSE
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star2}
                  alt="Star2"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441] ">
                HONESTY
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star1}
                  alt="Star1"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441]">
                COLLABORATION
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star3}
                  alt="Star3"
                />
              </span>
              <span className="  text-3xl  md:  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441] ">
                PURPOSE
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star2}
                  alt="Star2"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441] ">
                HONESTY
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star1}
                  alt="Star1"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px]  uppercase font-[Poppins] font-medium  text-[#2C3441]">
                COLLABORATION
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-[#F6F6F6] relative z-20 rotate-2">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          onAfterInit={(swiper) =>
            (swiper.slidesEl.style.transitionTimingFunction = "linear")
          }
          effect="fade"
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          speed={3000}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star3}
                  alt="Star3"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase font-medium  text-black ">
                EVOLUTION
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star2}
                  alt="Star2"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase  font-medium  text-black ">
                PURPOSE
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star3}
                  alt="Star3"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase  font-medium  text-black ">
                HONESTY
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star1}
                  alt="Star1"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase font-medium  text-black ">
                COLLABORATION
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star2}
                  alt="Star2"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase font-medium  text-black ">
                EVOLUTION
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star3}
                  alt="Star3"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase  font-medium  text-black ">
                PURPOSE
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex w-max items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star1}
                  alt="Star1"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase  font-medium  text-black ">
                HONESTY
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="flex items-center py-2 space-x-6  ">
              <span>
                <Image
                  className="my-0 mb-md-3 object-cover bg-no-repeat xl:w-24 lg:w-20 md:w-16 w-14
                xl:h-24 lg:h-20 md:h-16 h-14 items-center"
                  src={Star2}
                  alt="Star2"
                />
              </span>
              <span className=" text-3xl  md:text-[53px]  md:leading-[71px] leading-[41px] font-[Poppins] uppercase font-medium  text-black ">
                EVOLUTION
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AnimatedText;
