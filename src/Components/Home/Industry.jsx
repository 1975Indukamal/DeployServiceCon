"use client"
import React from 'react'
import { FaHashtag, FaSuitcase } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { GiGraduateCap } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import LoadMore from '@/Components/UI/Button';
import Link from 'next/link';

const IndustriesWeServe = () => {


    return (
        <div className='overflow-hidden md:my-20 my-24' >
            <div className='text-[Quicksand]'  >

            <h2 className='text-center font-normal text-[38px] text-body'>
  Empowering <span className='font-medium text-primary'>
    Innovation
  </span> for Future-Ready Companies
</h2>

<div className='mt-4 text-center'>
  <h5 className='font-[Poppins] text-primary text-[18px] uppercase font-normal'>
    Sectors We Collaborate With
  </h5>

  <p className='text-[18px] text-body mt-2 font-[Poppins]'>
    Every Moment, Every Challenge, Transforming Work and People
  </p>


                </div>

                <div className='my-14 overflow-hidden' >




                    <div className='mb-4'>
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

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M56.795 25.2411L44.395 32.4011V18.0781H35.615V32.3951L23.212 25.2411L18.822 32.8411L31.222 39.9991L18.822 47.1571L23.212 54.7571L35.612 47.5991V61.9231H44.395V47.6061L56.795 54.7641L61.185 47.1641L48.785 40.0061L61.185 32.8481L56.795 25.2411Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]   font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Healthcare
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <FaHashtag size={25} color='white' className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Startup
                                    </span>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>
                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M23.3533 30.8043L31.4933 33.1543L40.4443 26.6562L27.6043 27.0243C27.4786 27.031 27.3567 27.0699 27.2503 27.1372L23.1833 29.4733C23.0568 29.5432 22.9543 29.6496 22.8889 29.7785C22.8236 29.9075 22.7984 30.053 22.8167 30.1964C22.8351 30.3398 22.896 30.4744 22.9917 30.5828C23.0873 30.6911 23.2133 30.7683 23.3533 30.8043Z" fill="white" />
                                            <path d="M63.3753 23.5272L54.4563 21.6022C53.7062 21.4394 52.9299 21.4399 52.18 21.6037C51.4301 21.7674 50.7243 22.0905 50.1103 22.5512L23.1693 42.1292L16.6993 41.8462C16.3288 41.8338 15.9637 41.938 15.6557 42.1442C15.3476 42.3504 15.112 42.6481 14.9822 42.9954C14.8524 43.3426 14.8349 43.7218 14.9321 44.0796C15.0294 44.4373 15.2365 44.7555 15.5243 44.9892L21.8243 49.9892C21.928 50.0727 22.0514 50.1282 22.1827 50.1504C22.314 50.1727 22.4489 50.1609 22.5743 50.1162C24.3743 49.4222 31.0683 45.8692 38.9823 41.5232L40.5683 57.8182C40.5819 57.9592 40.6336 58.0939 40.7181 58.2077C40.8025 58.3215 40.9164 58.4102 41.0474 58.4641C41.1785 58.518 41.3217 58.5351 41.4618 58.5136C41.6019 58.4921 41.7334 58.4329 41.8423 58.3422L45.3813 55.3972C45.575 55.2347 45.7053 55.0091 45.7493 54.7602L49.1043 35.9452C54.7673 32.8022 60.1753 29.7582 63.9833 27.6072C64.3786 27.3922 64.6982 27.0609 64.8989 26.6581C65.0995 26.2554 65.1715 25.8007 65.105 25.3556C65.0385 24.9106 64.8368 24.4968 64.5273 24.1702C64.2177 23.8437 63.8152 23.6202 63.3743 23.5302L63.3753 23.5272Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >




                                        Airlines
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <FaSuitcase size={25} color='white' className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Travel
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M58.46 25.3069H45.307V61.8439H61.383V28.2299C61.383 27.4547 61.075 26.7112 60.5269 26.163C59.9787 25.6148 59.2352 25.3069 58.46 25.3069ZM51.153 50.1519H48.23V47.2289H51.153V50.1519ZM51.153 42.8449H48.23V39.9219H51.153V42.8449ZM51.153 35.5379H48.23V32.6139H51.153V35.5379ZM56.999 50.1529H54.076V47.2289H56.999V50.1529ZM56.999 42.8459H54.076V39.9219H56.999V42.8459ZM56.999 35.5389H54.076V32.6139H56.999V35.5389Z" fill="white" />
                                            <path d="M39.285 18H22.1C21.2778 18 20.4893 18.3266 19.908 18.908C19.3266 19.4893 19 20.2778 19 21.1V61.845H26.307V57.46H35.076V61.844H42.383V21.1C42.383 20.6929 42.3028 20.2898 42.147 19.9137C41.9912 19.5376 41.7629 19.1958 41.475 18.908C41.1872 18.6201 40.8454 18.3918 40.4693 18.236C40.0932 18.0802 39.6901 18 39.283 18H39.285ZM26.307 50.153H23.384V47.23H26.307V50.153ZM26.307 42.846H23.384V39.922H26.307V42.846ZM26.307 35.539H23.384V32.615H26.307V35.539ZM26.307 28.232H23.384V25.307H26.307V28.232ZM32.153 50.154H29.23V47.23H32.153V50.154ZM32.153 42.847H29.23V39.922H32.153V42.847ZM32.153 35.54H29.23V32.615H32.153V35.54ZM32.153 28.233H29.23V25.307H32.153V28.233ZM38 50.153H35.076V47.23H38V50.153ZM38 42.846H35.076V39.922H38V42.846ZM38 35.539H35.076V32.615H38V35.539ZM38 28.232H35.076V25.307H38V28.232Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Real Estate
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M56.795 25.2411L44.395 32.4011V18.0781H35.615V32.3951L23.212 25.2411L18.822 32.8411L31.222 39.9991L18.822 47.1571L23.212 54.7571L35.612 47.5991V61.9231H44.395V47.6061L56.795 54.7641L61.185 47.1641L48.785 40.0061L61.185 32.8481L56.795 25.2411Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Healthcare
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <FaHashtag size={25} color='white' className=' bg-primary'/>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Startup
                                    </span>
                                </div>

                            </SwiperSlide>



                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M56.795 25.2411L44.395 32.4011V18.0781H35.615V32.3951L23.212 25.2411L18.822 32.8411L31.222 39.9991L18.822 47.1571L23.212 54.7571L35.612 47.5991V61.9231H44.395V47.6061L56.795 54.7641L61.185 47.1641L48.785 40.0061L61.185 32.8481L56.795 25.2411Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Healthcare
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <FaHashtag size={25} color='white' className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Startup
                                    </span>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M23.3533 30.8043L31.4933 33.1543L40.4443 26.6562L27.6043 27.0243C27.4786 27.031 27.3567 27.0699 27.2503 27.1372L23.1833 29.4733C23.0568 29.5432 22.9543 29.6496 22.8889 29.7785C22.8236 29.9075 22.7984 30.053 22.8167 30.1964C22.8351 30.3398 22.896 30.4744 22.9917 30.5828C23.0873 30.6911 23.2133 30.7683 23.3533 30.8043Z" fill="white" />
                                            <path d="M63.3753 23.5272L54.4563 21.6022C53.7062 21.4394 52.9299 21.4399 52.18 21.6037C51.4301 21.7674 50.7243 22.0905 50.1103 22.5512L23.1693 42.1292L16.6993 41.8462C16.3288 41.8338 15.9637 41.938 15.6557 42.1442C15.3476 42.3504 15.112 42.6481 14.9822 42.9954C14.8524 43.3426 14.8349 43.7218 14.9321 44.0796C15.0294 44.4373 15.2365 44.7555 15.5243 44.9892L21.8243 49.9892C21.928 50.0727 22.0514 50.1282 22.1827 50.1504C22.314 50.1727 22.4489 50.1609 22.5743 50.1162C24.3743 49.4222 31.0683 45.8692 38.9823 41.5232L40.5683 57.8182C40.5819 57.9592 40.6336 58.0939 40.7181 58.2077C40.8025 58.3215 40.9164 58.4102 41.0474 58.4641C41.1785 58.518 41.3217 58.5351 41.4618 58.5136C41.6019 58.4921 41.7334 58.4329 41.8423 58.3422L45.3813 55.3972C45.575 55.2347 45.7053 55.0091 45.7493 54.7602L49.1043 35.9452C54.7673 32.8022 60.1753 29.7582 63.9833 27.6072C64.3786 27.3922 64.6982 27.0609 64.8989 26.6581C65.0995 26.2554 65.1715 25.8007 65.105 25.3556C65.0385 24.9106 64.8368 24.4968 64.5273 24.1702C64.2177 23.8437 63.8152 23.6202 63.3743 23.5302L63.3753 23.5272Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Airlines
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>
                                    <FaSuitcase size={25} color='white' className=' bg-primary' />

                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Travel
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M58.46 25.3069H45.307V61.8439H61.383V28.2299C61.383 27.4547 61.075 26.7112 60.5269 26.163C59.9787 25.6148 59.2352 25.3069 58.46 25.3069ZM51.153 50.1519H48.23V47.2289H51.153V50.1519ZM51.153 42.8449H48.23V39.9219H51.153V42.8449ZM51.153 35.5379H48.23V32.6139H51.153V35.5379ZM56.999 50.1529H54.076V47.2289H56.999V50.1529ZM56.999 42.8459H54.076V39.9219H56.999V42.8459ZM56.999 35.5389H54.076V32.6139H56.999V35.5389Z" fill="white" />
                                            <path d="M39.285 18H22.1C21.2778 18 20.4893 18.3266 19.908 18.908C19.3266 19.4893 19 20.2778 19 21.1V61.845H26.307V57.46H35.076V61.844H42.383V21.1C42.383 20.6929 42.3028 20.2898 42.147 19.9137C41.9912 19.5376 41.7629 19.1958 41.475 18.908C41.1872 18.6201 40.8454 18.3918 40.4693 18.236C40.0932 18.0802 39.6901 18 39.283 18H39.285ZM26.307 50.153H23.384V47.23H26.307V50.153ZM26.307 42.846H23.384V39.922H26.307V42.846ZM26.307 35.539H23.384V32.615H26.307V35.539ZM26.307 28.232H23.384V25.307H26.307V28.232ZM32.153 50.154H29.23V47.23H32.153V50.154ZM32.153 42.847H29.23V39.922H32.153V42.847ZM32.153 35.54H29.23V32.615H32.153V35.54ZM32.153 28.233H29.23V25.307H32.153V28.233ZM38 50.153H35.076V47.23H38V50.153ZM38 42.846H35.076V39.922H38V42.846ZM38 35.539H35.076V32.615H38V35.539ZM38 28.232H35.076V25.307H38V28.232Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Real Estate
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M56.795 25.2411L44.395 32.4011V18.0781H35.615V32.3951L23.212 25.2411L18.822 32.8411L31.222 39.9991L18.822 47.1571L23.212 54.7571L35.612 47.5991V61.9231H44.395V47.6061L56.795 54.7641L61.185 47.1641L48.785 40.0061L61.185 32.8481L56.795 25.2411Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Healthcare
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <FaHashtag size={25} color='white' className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Startup
                                    </span>
                                </div>

                            </SwiperSlide>


                        </Swiper>
                    </div>


                    <div className='mb-[15px]'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView="auto"
                            onAfterInit={(swiper) =>
                                (swiper.slidesEl.style.transitionTimingFunction = "linear")
                            }
                            effect="fade"
                            autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: true }}
                            loop={true}
                            speed={3000}
                            pagination={false}
                            navigation={false}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M38.9875 63.1468C39.3339 63.3283 39.719 63.423 40.11 63.423C40.501 63.423 40.8862 63.3283 41.2325 63.1468C60.0415 53.0408 61.3725 33.3048 61.3575 27.6918C61.3557 27.2406 61.2223 26.7996 60.9737 26.4231C60.725 26.0465 60.3718 25.7507 59.9575 25.5718L41.0635 17.2018C40.7629 17.0687 40.4378 17 40.109 17C39.7803 17 39.4551 17.0687 39.1545 17.2018L20.3935 25.5748C19.9855 25.7539 19.6375 26.0464 19.391 26.4177C19.1446 26.789 19.0101 27.2233 19.0035 27.6688C18.9235 33.2538 20.0475 53.0318 38.9875 63.1448V63.1468ZM32.3875 36.2468L37.7705 41.6298L47.8415 31.5508L51.1605 34.8698L37.7665 48.2608L29.0665 39.5608L32.3855 36.2418L32.3875 36.2468Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Insurance
                                    </span>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M49.831 52.138H57.138L47.318 61.843L37.613 52.138H44.92V35.013H49.83V52.14L49.831 52.138ZM32.705 18L42.525 27.705H35.218V44.832H30.307V27.705H23L32.705 18Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        B2B
                                    </span>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <GiGraduateCap  color='white' className='text-[40px] bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        EdTech
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M55.7767 31.8116L61.5877 39.5296V49.2456H57.7747C57.7538 50.788 57.1287 52.2607 56.0337 53.3473C54.9387 54.4338 53.4613 55.0476 51.9187 55.0566C51.1551 55.0691 50.3973 54.9222 49.6937 54.6252C48.9901 54.3281 48.3563 53.8875 47.8327 53.3316C47.293 52.798 46.8661 52.1613 46.5775 51.4593C46.2889 50.7574 46.1444 50.0045 46.1527 49.2456H34.5277C34.5342 50.0085 34.3843 50.7647 34.0873 51.4674C33.7902 52.1702 33.3524 52.8046 32.8007 53.3316C32.2665 53.886 31.6243 54.3252 30.9138 54.6218C30.2033 54.9185 29.4396 55.0665 28.6697 55.0566C27.9061 55.0691 27.1483 54.9222 26.4447 54.6252C25.7411 54.3281 25.1073 53.8875 24.5837 53.3316C24.0434 52.7982 23.616 52.1616 23.3269 51.4597C23.0378 50.7577 22.8928 50.0047 22.9007 49.2456H19.0007V27.9066C18.9907 27.392 19.0863 26.8808 19.2815 26.4046C19.4767 25.9283 19.7674 25.4971 20.1357 25.1376C20.4947 24.7695 20.9251 24.4787 21.4006 24.2832C21.8762 24.0877 22.3866 23.9915 22.9007 24.0006H49.9607V31.8116H55.7767ZM28.6717 52.1516C29.0594 52.1521 29.4434 52.0761 29.8016 51.928C30.1599 51.7799 30.4854 51.5626 30.7596 51.2884C31.0337 51.0143 31.251 50.6888 31.3991 50.3305C31.5473 49.9722 31.6232 49.5883 31.6227 49.2006C31.6322 48.8183 31.5601 48.4384 31.4113 48.0861C31.2625 47.7339 31.0404 47.4173 30.7597 47.1576C30.4825 46.8907 30.1554 46.6812 29.7971 46.541C29.4388 46.4008 29.0564 46.3327 28.6717 46.3406C28.2935 46.3311 27.9174 46.3986 27.5661 46.539C27.2149 46.6794 26.8958 46.8897 26.6283 47.1572C26.3608 47.4247 26.1505 47.7437 26.0101 48.095C25.8697 48.4463 25.8022 48.8224 25.8117 49.2006C25.7971 49.9773 26.0909 50.7281 26.6287 51.2886C26.8887 51.5689 27.2053 51.7908 27.5575 51.9395C27.9097 52.0883 28.2895 52.1606 28.6717 52.1516ZM54.8717 34.7176H49.9717V39.5296H58.5907L54.8717 34.7176ZM51.9167 52.1516C52.3044 52.1521 52.6884 52.0761 53.0466 51.928C53.4049 51.7799 53.7304 51.5626 54.0046 51.2884C54.2787 51.0143 54.496 50.6888 54.6441 50.3305C54.7923 49.9722 54.8682 49.5883 54.8677 49.2006C54.8766 48.818 54.8039 48.4379 54.6544 48.0856C54.505 47.7333 54.2821 47.417 54.0007 47.1576C53.7235 46.8907 53.3964 46.6812 53.0381 46.541C52.6798 46.4008 52.2974 46.3327 51.9127 46.3406C51.5345 46.3311 51.1584 46.3986 50.8071 46.539C50.4559 46.6794 50.1368 46.8897 49.8693 47.1572C49.6018 47.4247 49.3915 47.7437 49.2511 48.095C49.1107 48.4463 49.0432 48.8224 49.0527 49.2006C49.0381 49.9773 49.3319 50.7281 49.8697 51.2886C50.1302 51.5694 50.4474 51.7916 50.8003 51.9404C51.1533 52.0892 51.5338 52.1612 51.9167 52.1516Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Transportation
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M36.0946 58.115C36.0946 58.6094 35.948 59.0928 35.6733 59.5039C35.3986 59.915 35.0082 60.2355 34.5513 60.4247C34.0945 60.6139 33.5919 60.6634 33.1069 60.567C32.622 60.4705 32.1765 60.2324 31.8269 59.8828C31.4772 59.5331 31.2391 59.0877 31.1427 58.6027C31.0462 58.1178 31.0957 57.6151 31.2849 57.1583C31.4742 56.7015 31.7946 56.311 32.2057 56.0363C32.6168 55.7616 33.1002 55.615 33.5946 55.615C34.2577 55.615 34.8936 55.8784 35.3624 56.3472C35.8312 56.8161 36.0946 57.4519 36.0946 58.115Z" fill="white" />
                                            <path d="M57.0176 58.115C57.0176 58.6094 56.871 59.0928 56.5963 59.5039C56.3216 59.915 55.9312 60.2355 55.4743 60.4247C55.0175 60.6139 54.5149 60.6634 54.0299 60.567C53.545 60.4705 53.0995 60.2324 52.7499 59.8828C52.4002 59.5331 52.1621 59.0877 52.0657 58.6027C51.9692 58.1178 52.0187 57.6151 52.2079 57.1583C52.3972 56.7015 52.7176 56.311 53.1287 56.0363C53.5398 55.7616 54.0232 55.615 54.5176 55.615C55.1807 55.615 55.8166 55.8784 56.2854 56.3472C56.7542 56.8161 57.0176 57.4519 57.0176 58.115Z" fill="white" />
                                            <path d="M61.0266 25.5789C60.9035 25.403 60.7402 25.2589 60.5503 25.1585C60.3604 25.0582 60.1494 25.0045 59.9346 25.0019H28.0016L27.3796 22.8849C27.3163 22.663 27.2004 22.4596 27.0416 22.2921C26.8828 22.1246 26.6859 21.9979 26.4676 21.9229L20.8016 20.0599C20.6231 20.0054 20.4354 19.9878 20.2499 20.0083C20.0643 20.0287 19.8849 20.0868 19.7226 20.1788C19.5602 20.2709 19.4183 20.3951 19.3056 20.5438C19.1928 20.6926 19.1115 20.8627 19.0666 21.0439C18.9533 21.4124 18.9854 21.8103 19.1563 22.1558C19.3272 22.5014 19.624 22.7684 19.9856 22.9019L24.9456 24.5309L31.2766 45.9529L29.0236 47.9369L28.8436 48.1289C28.2848 48.8372 27.9717 49.7083 27.9516 50.6103C27.9316 51.5124 28.2058 52.3964 28.7326 53.1289C29.0935 53.6113 29.5668 53.9982 30.1112 54.2562C30.6556 54.5141 31.2548 54.6352 31.8566 54.6089H54.9296C55.3047 54.5831 55.656 54.4159 55.9125 54.1411C56.1691 53.8663 56.3118 53.5043 56.3118 53.1284C56.3118 52.7524 56.1691 52.3905 55.9125 52.1157C55.656 51.8409 55.3047 51.6737 54.9296 51.6479H31.6366C31.474 51.6396 31.3165 51.5883 31.1801 51.4993C31.0438 51.4102 30.9335 51.2865 30.8606 51.1409C30.7822 50.9905 30.7413 50.8235 30.7413 50.6539C30.7413 50.4843 30.7822 50.3172 30.8606 50.1669L34.1926 47.2059H55.5226C55.8478 47.208 56.1636 47.0969 56.4158 46.8917C56.6679 46.6864 56.8408 46.3997 56.9046 46.0809L61.3306 26.8409C61.3737 26.622 61.3692 26.3963 61.3174 26.1793C61.2657 25.9622 61.1679 25.7588 61.0306 25.5829L61.0266 25.5789Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        E-Commerce
                                    </span>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M38.9875 63.1468C39.3339 63.3283 39.719 63.423 40.11 63.423C40.501 63.423 40.8862 63.3283 41.2325 63.1468C60.0415 53.0408 61.3725 33.3048 61.3575 27.6918C61.3557 27.2406 61.2223 26.7996 60.9737 26.4231C60.725 26.0465 60.3718 25.7507 59.9575 25.5718L41.0635 17.2018C40.7629 17.0687 40.4378 17 40.109 17C39.7803 17 39.4551 17.0687 39.1545 17.2018L20.3935 25.5748C19.9855 25.7539 19.6375 26.0464 19.391 26.4177C19.1446 26.789 19.0101 27.2233 19.0035 27.6688C18.9235 33.2538 20.0475 53.0318 38.9875 63.1448V63.1468ZM32.3875 36.2468L37.7705 41.6298L47.8415 31.5508L51.1605 34.8698L37.7665 48.2608L29.0665 39.5608L32.3855 36.2418L32.3875 36.2468Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Insurance
                                    </span>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M49.831 52.138H57.138L47.318 61.843L37.613 52.138H44.92V35.013H49.83V52.14L49.831 52.138ZM32.705 18L42.525 27.705H35.218V44.832H30.307V27.705H23L32.705 18Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        B2B
                                    </span>
                                </div>

                            </SwiperSlide>



                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M38.9875 63.1468C39.3339 63.3283 39.719 63.423 40.11 63.423C40.501 63.423 40.8862 63.3283 41.2325 63.1468C60.0415 53.0408 61.3725 33.3048 61.3575 27.6918C61.3557 27.2406 61.2223 26.7996 60.9737 26.4231C60.725 26.0465 60.3718 25.7507 59.9575 25.5718L41.0635 17.2018C40.7629 17.0687 40.4378 17 40.109 17C39.7803 17 39.4551 17.0687 39.1545 17.2018L20.3935 25.5748C19.9855 25.7539 19.6375 26.0464 19.391 26.4177C19.1446 26.789 19.0101 27.2233 19.0035 27.6688C18.9235 33.2538 20.0475 53.0318 38.9875 63.1448V63.1468ZM32.3875 36.2468L37.7705 41.6298L47.8415 31.5508L51.1605 34.8698L37.7665 48.2608L29.0665 39.5608L32.3855 36.2418L32.3875 36.2468Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Insurance
                                    </span>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M49.831 52.138H57.138L47.318 61.843L37.613 52.138H44.92V35.013H49.83V52.14L49.831 52.138ZM32.705 18L42.525 27.705H35.218V44.832H30.307V27.705H23L32.705 18Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        B2B
                                    </span>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <GiGraduateCap color='white' className='text-[40px] bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        EdTech
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M55.7767 31.8116L61.5877 39.5296V49.2456H57.7747C57.7538 50.788 57.1287 52.2607 56.0337 53.3473C54.9387 54.4338 53.4613 55.0476 51.9187 55.0566C51.1551 55.0691 50.3973 54.9222 49.6937 54.6252C48.9901 54.3281 48.3563 53.8875 47.8327 53.3316C47.293 52.798 46.8661 52.1613 46.5775 51.4593C46.2889 50.7574 46.1444 50.0045 46.1527 49.2456H34.5277C34.5342 50.0085 34.3843 50.7647 34.0873 51.4674C33.7902 52.1702 33.3524 52.8046 32.8007 53.3316C32.2665 53.886 31.6243 54.3252 30.9138 54.6218C30.2033 54.9185 29.4396 55.0665 28.6697 55.0566C27.9061 55.0691 27.1483 54.9222 26.4447 54.6252C25.7411 54.3281 25.1073 53.8875 24.5837 53.3316C24.0434 52.7982 23.616 52.1616 23.3269 51.4597C23.0378 50.7577 22.8928 50.0047 22.9007 49.2456H19.0007V27.9066C18.9907 27.392 19.0863 26.8808 19.2815 26.4046C19.4767 25.9283 19.7674 25.4971 20.1357 25.1376C20.4947 24.7695 20.9251 24.4787 21.4006 24.2832C21.8762 24.0877 22.3866 23.9915 22.9007 24.0006H49.9607V31.8116H55.7767ZM28.6717 52.1516C29.0594 52.1521 29.4434 52.0761 29.8016 51.928C30.1599 51.7799 30.4854 51.5626 30.7596 51.2884C31.0337 51.0143 31.251 50.6888 31.3991 50.3305C31.5473 49.9722 31.6232 49.5883 31.6227 49.2006C31.6322 48.8183 31.5601 48.4384 31.4113 48.0861C31.2625 47.7339 31.0404 47.4173 30.7597 47.1576C30.4825 46.8907 30.1554 46.6812 29.7971 46.541C29.4388 46.4008 29.0564 46.3327 28.6717 46.3406C28.2935 46.3311 27.9174 46.3986 27.5661 46.539C27.2149 46.6794 26.8958 46.8897 26.6283 47.1572C26.3608 47.4247 26.1505 47.7437 26.0101 48.095C25.8697 48.4463 25.8022 48.8224 25.8117 49.2006C25.7971 49.9773 26.0909 50.7281 26.6287 51.2886C26.8887 51.5689 27.2053 51.7908 27.5575 51.9395C27.9097 52.0883 28.2895 52.1606 28.6717 52.1516ZM54.8717 34.7176H49.9717V39.5296H58.5907L54.8717 34.7176ZM51.9167 52.1516C52.3044 52.1521 52.6884 52.0761 53.0466 51.928C53.4049 51.7799 53.7304 51.5626 54.0046 51.2884C54.2787 51.0143 54.496 50.6888 54.6441 50.3305C54.7923 49.9722 54.8682 49.5883 54.8677 49.2006C54.8766 48.818 54.8039 48.4379 54.6544 48.0856C54.505 47.7333 54.2821 47.417 54.0007 47.1576C53.7235 46.8907 53.3964 46.6812 53.0381 46.541C52.6798 46.4008 52.2974 46.3327 51.9127 46.3406C51.5345 46.3311 51.1584 46.3986 50.8071 46.539C50.4559 46.6794 50.1368 46.8897 49.8693 47.1572C49.6018 47.4247 49.3915 47.7437 49.2511 48.095C49.1107 48.4463 49.0432 48.8224 49.0527 49.2006C49.0381 49.9773 49.3319 50.7281 49.8697 51.2886C50.1302 51.5694 50.4474 51.7916 50.8003 51.9404C51.1533 52.0892 51.5338 52.1612 51.9167 52.1516Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Transportation
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M36.0946 58.115C36.0946 58.6094 35.948 59.0928 35.6733 59.5039C35.3986 59.915 35.0082 60.2355 34.5513 60.4247C34.0945 60.6139 33.5919 60.6634 33.1069 60.567C32.622 60.4705 32.1765 60.2324 31.8269 59.8828C31.4772 59.5331 31.2391 59.0877 31.1427 58.6027C31.0462 58.1178 31.0957 57.6151 31.2849 57.1583C31.4742 56.7015 31.7946 56.311 32.2057 56.0363C32.6168 55.7616 33.1002 55.615 33.5946 55.615C34.2577 55.615 34.8936 55.8784 35.3624 56.3472C35.8312 56.8161 36.0946 57.4519 36.0946 58.115Z" fill="white" />
                                            <path d="M57.0176 58.115C57.0176 58.6094 56.871 59.0928 56.5963 59.5039C56.3216 59.915 55.9312 60.2355 55.4743 60.4247C55.0175 60.6139 54.5149 60.6634 54.0299 60.567C53.545 60.4705 53.0995 60.2324 52.7499 59.8828C52.4002 59.5331 52.1621 59.0877 52.0657 58.6027C51.9692 58.1178 52.0187 57.6151 52.2079 57.1583C52.3972 56.7015 52.7176 56.311 53.1287 56.0363C53.5398 55.7616 54.0232 55.615 54.5176 55.615C55.1807 55.615 55.8166 55.8784 56.2854 56.3472C56.7542 56.8161 57.0176 57.4519 57.0176 58.115Z" fill="white" />
                                            <path d="M61.0266 25.5789C60.9035 25.403 60.7402 25.2589 60.5503 25.1585C60.3604 25.0582 60.1494 25.0045 59.9346 25.0019H28.0016L27.3796 22.8849C27.3163 22.663 27.2004 22.4596 27.0416 22.2921C26.8828 22.1246 26.6859 21.9979 26.4676 21.9229L20.8016 20.0599C20.6231 20.0054 20.4354 19.9878 20.2499 20.0083C20.0643 20.0287 19.8849 20.0868 19.7226 20.1788C19.5602 20.2709 19.4183 20.3951 19.3056 20.5438C19.1928 20.6926 19.1115 20.8627 19.0666 21.0439C18.9533 21.4124 18.9854 21.8103 19.1563 22.1558C19.3272 22.5014 19.624 22.7684 19.9856 22.9019L24.9456 24.5309L31.2766 45.9529L29.0236 47.9369L28.8436 48.1289C28.2848 48.8372 27.9717 49.7083 27.9516 50.6103C27.9316 51.5124 28.2058 52.3964 28.7326 53.1289C29.0935 53.6113 29.5668 53.9982 30.1112 54.2562C30.6556 54.5141 31.2548 54.6352 31.8566 54.6089H54.9296C55.3047 54.5831 55.656 54.4159 55.9125 54.1411C56.1691 53.8663 56.3118 53.5043 56.3118 53.1284C56.3118 52.7524 56.1691 52.3905 55.9125 52.1157C55.656 51.8409 55.3047 51.6737 54.9296 51.6479H31.6366C31.474 51.6396 31.3165 51.5883 31.1801 51.4993C31.0438 51.4102 30.9335 51.2865 30.8606 51.1409C30.7822 50.9905 30.7413 50.8235 30.7413 50.6539C30.7413 50.4843 30.7822 50.3172 30.8606 50.1669L34.1926 47.2059H55.5226C55.8478 47.208 56.1636 47.0969 56.4158 46.8917C56.6679 46.6864 56.8408 46.3997 56.9046 46.0809L61.3306 26.8409C61.3737 26.622 61.3692 26.3963 61.3174 26.1793C61.2657 25.9622 61.1679 25.7588 61.0306 25.5829L61.0266 25.5789Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        E-Commerce
                                    </span>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M38.9875 63.1468C39.3339 63.3283 39.719 63.423 40.11 63.423C40.501 63.423 40.8862 63.3283 41.2325 63.1468C60.0415 53.0408 61.3725 33.3048 61.3575 27.6918C61.3557 27.2406 61.2223 26.7996 60.9737 26.4231C60.725 26.0465 60.3718 25.7507 59.9575 25.5718L41.0635 17.2018C40.7629 17.0687 40.4378 17 40.109 17C39.7803 17 39.4551 17.0687 39.1545 17.2018L20.3935 25.5748C19.9855 25.7539 19.6375 26.0464 19.391 26.4177C19.1446 26.789 19.0101 27.2233 19.0035 27.6688C18.9235 33.2538 20.0475 53.0318 38.9875 63.1448V63.1468ZM32.3875 36.2468L37.7705 41.6298L47.8415 31.5508L51.1605 34.8698L37.7665 48.2608L29.0665 39.5608L32.3855 36.2418L32.3875 36.2468Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Insurance
                                    </span>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M49.831 52.138H57.138L47.318 61.843L37.613 52.138H44.92V35.013H49.83V52.14L49.831 52.138ZM32.705 18L42.525 27.705H35.218V44.832H30.307V27.705H23L32.705 18Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        B2B
                                    </span>
                                </div>

                            </SwiperSlide>




                        </Swiper>
                    </div>



                    <div className='mb-[15px]'>
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
                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M60.4323 60.4319C60.1997 60.6674 59.9227 60.8544 59.6173 60.9821C59.312 61.1097 58.9843 61.1754 58.6533 61.1754C58.3223 61.1754 57.9946 61.1097 57.6892 60.9821C57.3838 60.8544 57.1068 60.6674 56.8743 60.4319L38.3043 41.8609L33.9603 46.2039V46.2449C34.1967 46.4813 34.3842 46.7619 34.5121 47.0707C34.64 47.3796 34.7059 47.7106 34.7059 48.0449C34.7059 48.3792 34.64 48.7102 34.5121 49.019C34.3842 49.3279 34.1967 49.6085 33.9603 49.8449C33.7239 50.0813 33.4433 50.2688 33.1344 50.3967C32.8256 50.5246 32.4946 50.5905 32.1603 50.5905C31.826 50.5905 31.495 50.5246 31.1861 50.3967C30.8773 50.2688 30.5967 50.0813 30.3603 49.8449L19.5603 39.0449C19.3238 38.8086 19.1363 38.5279 19.0083 38.2191C18.8803 37.9102 18.8145 37.5792 18.8145 37.2449C18.8145 36.9106 18.8803 36.5795 19.0083 36.2707C19.1363 35.9618 19.3238 35.6812 19.5603 35.4449C19.7937 35.2046 20.0737 35.0145 20.3833 34.8864C20.6928 34.7583 21.0253 34.6948 21.3603 34.6999C21.6953 34.6941 22.028 34.7572 22.3377 34.8854C22.6473 35.0135 22.9273 35.204 23.1603 35.4449L23.2013 35.4859L35.4903 23.2069L35.4493 23.1659C35.2087 22.9327 35.0184 22.6527 34.8903 22.3431C34.7621 22.0335 34.6988 21.7009 34.7043 21.3659C34.6991 21.0308 34.7626 20.6982 34.8909 20.3886C35.0192 20.0791 35.2096 19.7991 35.4503 19.5659C35.6866 19.3294 35.9672 19.1419 36.2761 19.0139C36.5849 18.8859 36.916 18.8201 37.2503 18.8201C37.5846 18.8201 37.9156 18.8859 38.2245 19.0139C38.5333 19.1419 38.8139 19.3294 39.0503 19.5659L49.8503 30.3659C50.0867 30.6023 50.2742 30.8829 50.4021 31.1917C50.53 31.5006 50.5959 31.8316 50.5959 32.1659C50.5959 32.5002 50.53 32.8312 50.4021 33.14C50.2742 33.4489 50.0867 33.7295 49.8503 33.9659C49.6139 34.2023 49.3333 34.3898 49.0244 34.5177C48.7156 34.6456 48.3846 34.7115 48.0503 34.7115C47.716 34.7115 47.385 34.6456 47.0761 34.5177C46.7673 34.3898 46.4867 34.2023 46.2503 33.9659L46.2093 33.9249L41.8623 38.2619L60.4343 56.8749C60.6698 57.1074 60.8568 57.3844 60.9845 57.6898C61.1121 57.9952 61.1778 58.3229 61.1778 58.6539C61.1778 58.9849 61.1121 59.3126 60.9845 59.618C60.8568 59.9233 60.6698 60.2003 60.4343 60.4329L60.4323 60.4319ZM32.7623 29.1629L29.2053 32.7629L36.6913 40.2489L40.2483 36.6919L32.7623 29.1629Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Law Firms
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M58.0376 26.1005L42.9236 46.1005V62.1005C42.9275 62.4584 42.8594 62.8134 42.7233 63.1445C42.5873 63.4755 42.3861 63.7758 42.1316 64.0275C41.8768 64.2857 41.5731 64.4907 41.2384 64.6307C40.9036 64.7706 40.5444 64.8427 40.1816 64.8427C39.8188 64.8427 39.4596 64.7706 39.1249 64.6307C38.7901 64.4907 38.4865 64.2857 38.2316 64.0275C37.9772 63.7758 37.776 63.4755 37.6399 63.1445C37.5039 62.8134 37.4357 62.4584 37.4396 62.1005V46.0915L22.3286 26.1005C21.912 25.867 21.5678 25.5232 21.3337 25.1069C21.0996 24.6906 20.9847 24.2178 21.0016 23.7405C20.9986 23.3809 21.0692 23.0245 21.2092 22.6933C21.3492 22.362 21.5556 22.063 21.8156 21.8145C22.0641 21.5545 22.3631 21.3481 22.6944 21.2081C23.0256 21.0681 23.382 20.9975 23.7416 21.0005H56.6246C56.9882 20.9932 57.3494 21.0618 57.685 21.202C58.0206 21.3422 58.3232 21.5508 58.5736 21.8145C58.8284 22.066 59.0298 22.3663 59.1659 22.6974C59.302 23.0285 59.3699 23.3836 59.3656 23.7415C59.3823 24.2188 59.2671 24.6914 59.0329 25.1075C58.7986 25.5236 58.4543 25.8672 58.0376 26.1005ZM51.4866 26.4805H42.9236V37.8265L51.4866 26.4805ZM37.4436 26.4805H28.8796L37.4426 37.8265L37.4436 26.4805Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Telecom
                                    </span>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M57.2805 41.5487C57.0667 41.7696 56.8099 41.9444 56.5259 42.0622C56.242 42.18 55.9369 42.2384 55.6295 42.2337C55.3268 42.2394 55.0262 42.1832 54.7461 42.0685C54.4659 41.9538 54.2122 41.7831 54.0005 41.5667L53.4735 41.0397V55.7557C53.4766 56.0492 53.4207 56.3404 53.3091 56.6118C53.1974 56.8832 53.0323 57.1294 52.8235 57.3357C52.6179 57.5522 52.3694 57.7233 52.0939 57.8381C51.8184 57.953 51.5219 58.0091 51.2235 58.0027H44.4785V47.8887C44.4741 47.592 44.3543 47.3086 44.1444 47.0988C43.9346 46.889 43.6512 46.7691 43.3545 46.7647H36.6115C36.3147 46.7691 36.0314 46.889 35.8215 47.0988C35.6117 47.3086 35.4919 47.592 35.4875 47.8887V58.0037H28.7435C28.445 58.0101 28.1486 57.954 27.8731 57.8391C27.5975 57.7243 27.349 57.5532 27.1435 57.3367C26.9357 57.1298 26.7717 56.8832 26.6612 56.6116C26.5507 56.34 26.4961 56.0489 26.5005 55.7557V41.0397L25.9735 41.5667C25.7613 41.7835 25.5069 41.9546 25.226 42.0693C24.9452 42.184 24.6438 42.24 24.3405 42.2337C24.0331 42.2384 23.728 42.18 23.444 42.0622C23.1601 41.9444 22.9033 41.7696 22.6895 41.5487C22.4678 41.3353 22.2923 41.0786 22.1738 40.7947C22.0553 40.5107 21.9963 40.2054 22.0005 39.8977C21.9942 39.5944 22.0502 39.293 22.1649 39.0122C22.2796 38.7313 22.4507 38.4769 22.6675 38.2647L38.2615 22.6707C38.4839 22.4429 38.7526 22.2654 39.0495 22.1504C39.3464 22.0353 39.6646 21.9853 39.9825 22.0037C40.2999 21.9857 40.6174 22.0359 40.9138 22.151C41.2101 22.2661 41.4784 22.4433 41.7005 22.6707L57.3005 38.2647C57.5173 38.4769 57.6883 38.7313 57.803 39.0122C57.9178 39.293 57.9737 39.5944 57.9675 39.8977C57.9721 40.2051 57.9138 40.5102 57.796 40.7942C57.6781 41.0781 57.5034 41.3349 57.2825 41.5487H57.2805Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Home Builders
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M26.471 25V54.65H32.825V41.943H45.532V54.65H51.886V25H45.532V37.707H32.825V25H26.471ZM20.118 46.179C20.1176 46.4574 20.1721 46.7331 20.2784 46.9904C20.3846 47.2478 20.5406 47.4816 20.7373 47.6786C20.934 47.8756 21.1676 48.0319 21.4248 48.1385C21.6819 48.2451 21.9576 48.3 22.236 48.3H24.354V31.354H22.236C21.6743 31.354 21.1356 31.5771 20.7383 31.9743C20.3411 32.3716 20.118 32.9103 20.118 33.472V37.708H18V41.944H20.118V46.179ZM58.24 33.471C58.24 32.9093 58.0169 32.3705 57.6197 31.9733C57.2225 31.5761 56.6837 31.353 56.122 31.353H54V48.3H56.118C56.6797 48.3 57.2185 48.0769 57.6157 47.6797C58.0129 47.2824 58.236 46.7437 58.236 46.182V41.943H60.354V37.707H58.24V33.471Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Gym & Fitness
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <GiKnifeFork color='white' size={25} className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Restaurent
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M56.795 25.2411L44.395 32.4011V18.0781H35.615V32.3951L23.212 25.2411L18.822 32.8411L31.222 39.9991L18.822 47.1571L23.212 54.7571L35.612 47.5991V61.9231H44.395V47.6061L56.795 54.7641L61.185 47.1641L48.785 40.0061L61.185 32.8481L56.795 25.2411Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Healthcare
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <FaHashtag size={25} color='white' className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Startup
                                    </span>
                                </div>

                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M60.4323 60.4319C60.1997 60.6674 59.9227 60.8544 59.6173 60.9821C59.312 61.1097 58.9843 61.1754 58.6533 61.1754C58.3223 61.1754 57.9946 61.1097 57.6892 60.9821C57.3838 60.8544 57.1068 60.6674 56.8743 60.4319L38.3043 41.8609L33.9603 46.2039V46.2449C34.1967 46.4813 34.3842 46.7619 34.5121 47.0707C34.64 47.3796 34.7059 47.7106 34.7059 48.0449C34.7059 48.3792 34.64 48.7102 34.5121 49.019C34.3842 49.3279 34.1967 49.6085 33.9603 49.8449C33.7239 50.0813 33.4433 50.2688 33.1344 50.3967C32.8256 50.5246 32.4946 50.5905 32.1603 50.5905C31.826 50.5905 31.495 50.5246 31.1861 50.3967C30.8773 50.2688 30.5967 50.0813 30.3603 49.8449L19.5603 39.0449C19.3238 38.8086 19.1363 38.5279 19.0083 38.2191C18.8803 37.9102 18.8145 37.5792 18.8145 37.2449C18.8145 36.9106 18.8803 36.5795 19.0083 36.2707C19.1363 35.9618 19.3238 35.6812 19.5603 35.4449C19.7937 35.2046 20.0737 35.0145 20.3833 34.8864C20.6928 34.7583 21.0253 34.6948 21.3603 34.6999C21.6953 34.6941 22.028 34.7572 22.3377 34.8854C22.6473 35.0135 22.9273 35.204 23.1603 35.4449L23.2013 35.4859L35.4903 23.2069L35.4493 23.1659C35.2087 22.9327 35.0184 22.6527 34.8903 22.3431C34.7621 22.0335 34.6988 21.7009 34.7043 21.3659C34.6991 21.0308 34.7626 20.6982 34.8909 20.3886C35.0192 20.0791 35.2096 19.7991 35.4503 19.5659C35.6866 19.3294 35.9672 19.1419 36.2761 19.0139C36.5849 18.8859 36.916 18.8201 37.2503 18.8201C37.5846 18.8201 37.9156 18.8859 38.2245 19.0139C38.5333 19.1419 38.8139 19.3294 39.0503 19.5659L49.8503 30.3659C50.0867 30.6023 50.2742 30.8829 50.4021 31.1917C50.53 31.5006 50.5959 31.8316 50.5959 32.1659C50.5959 32.5002 50.53 32.8312 50.4021 33.14C50.2742 33.4489 50.0867 33.7295 49.8503 33.9659C49.6139 34.2023 49.3333 34.3898 49.0244 34.5177C48.7156 34.6456 48.3846 34.7115 48.0503 34.7115C47.716 34.7115 47.385 34.6456 47.0761 34.5177C46.7673 34.3898 46.4867 34.2023 46.2503 33.9659L46.2093 33.9249L41.8623 38.2619L60.4343 56.8749C60.6698 57.1074 60.8568 57.3844 60.9845 57.6898C61.1121 57.9952 61.1778 58.3229 61.1778 58.6539C61.1778 58.9849 61.1121 59.3126 60.9845 59.618C60.8568 59.9233 60.6698 60.2003 60.4343 60.4329L60.4323 60.4319ZM32.7623 29.1629L29.2053 32.7629L36.6913 40.2489L40.2483 36.6919L32.7623 29.1629Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Law Firms
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M58.0376 26.1005L42.9236 46.1005V62.1005C42.9275 62.4584 42.8594 62.8134 42.7233 63.1445C42.5873 63.4755 42.3861 63.7758 42.1316 64.0275C41.8768 64.2857 41.5731 64.4907 41.2384 64.6307C40.9036 64.7706 40.5444 64.8427 40.1816 64.8427C39.8188 64.8427 39.4596 64.7706 39.1249 64.6307C38.7901 64.4907 38.4865 64.2857 38.2316 64.0275C37.9772 63.7758 37.776 63.4755 37.6399 63.1445C37.5039 62.8134 37.4357 62.4584 37.4396 62.1005V46.0915L22.3286 26.1005C21.912 25.867 21.5678 25.5232 21.3337 25.1069C21.0996 24.6906 20.9847 24.2178 21.0016 23.7405C20.9986 23.3809 21.0692 23.0245 21.2092 22.6933C21.3492 22.362 21.5556 22.063 21.8156 21.8145C22.0641 21.5545 22.3631 21.3481 22.6944 21.2081C23.0256 21.0681 23.382 20.9975 23.7416 21.0005H56.6246C56.9882 20.9932 57.3494 21.0618 57.685 21.202C58.0206 21.3422 58.3232 21.5508 58.5736 21.8145C58.8284 22.066 59.0298 22.3663 59.1659 22.6974C59.302 23.0285 59.3699 23.3836 59.3656 23.7415C59.3823 24.2188 59.2671 24.6914 59.0329 25.1075C58.7986 25.5236 58.4543 25.8672 58.0376 26.1005ZM51.4866 26.4805H42.9236V37.8265L51.4866 26.4805ZM37.4436 26.4805H28.8796L37.4426 37.8265L37.4436 26.4805Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Telecom
                                    </span>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M57.2805 41.5487C57.0667 41.7696 56.8099 41.9444 56.5259 42.0622C56.242 42.18 55.9369 42.2384 55.6295 42.2337C55.3268 42.2394 55.0262 42.1832 54.7461 42.0685C54.4659 41.9538 54.2122 41.7831 54.0005 41.5667L53.4735 41.0397V55.7557C53.4766 56.0492 53.4207 56.3404 53.3091 56.6118C53.1974 56.8832 53.0323 57.1294 52.8235 57.3357C52.6179 57.5522 52.3694 57.7233 52.0939 57.8381C51.8184 57.953 51.5219 58.0091 51.2235 58.0027H44.4785V47.8887C44.4741 47.592 44.3543 47.3086 44.1444 47.0988C43.9346 46.889 43.6512 46.7691 43.3545 46.7647H36.6115C36.3147 46.7691 36.0314 46.889 35.8215 47.0988C35.6117 47.3086 35.4919 47.592 35.4875 47.8887V58.0037H28.7435C28.445 58.0101 28.1486 57.954 27.8731 57.8391C27.5975 57.7243 27.349 57.5532 27.1435 57.3367C26.9357 57.1298 26.7717 56.8832 26.6612 56.6116C26.5507 56.34 26.4961 56.0489 26.5005 55.7557V41.0397L25.9735 41.5667C25.7613 41.7835 25.5069 41.9546 25.226 42.0693C24.9452 42.184 24.6438 42.24 24.3405 42.2337C24.0331 42.2384 23.728 42.18 23.444 42.0622C23.1601 41.9444 22.9033 41.7696 22.6895 41.5487C22.4678 41.3353 22.2923 41.0786 22.1738 40.7947C22.0553 40.5107 21.9963 40.2054 22.0005 39.8977C21.9942 39.5944 22.0502 39.293 22.1649 39.0122C22.2796 38.7313 22.4507 38.4769 22.6675 38.2647L38.2615 22.6707C38.4839 22.4429 38.7526 22.2654 39.0495 22.1504C39.3464 22.0353 39.6646 21.9853 39.9825 22.0037C40.2999 21.9857 40.6174 22.0359 40.9138 22.151C41.2101 22.2661 41.4784 22.4433 41.7005 22.6707L57.3005 38.2647C57.5173 38.4769 57.6883 38.7313 57.803 39.0122C57.9178 39.293 57.9737 39.5944 57.9675 39.8977C57.9721 40.2051 57.9138 40.5102 57.796 40.7942C57.6781 41.0781 57.5034 41.3349 57.2825 41.5487H57.2805Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Home Builders
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M26.471 25V54.65H32.825V41.943H45.532V54.65H51.886V25H45.532V37.707H32.825V25H26.471ZM20.118 46.179C20.1176 46.4574 20.1721 46.7331 20.2784 46.9904C20.3846 47.2478 20.5406 47.4816 20.7373 47.6786C20.934 47.8756 21.1676 48.0319 21.4248 48.1385C21.6819 48.2451 21.9576 48.3 22.236 48.3H24.354V31.354H22.236C21.6743 31.354 21.1356 31.5771 20.7383 31.9743C20.3411 32.3716 20.118 32.9103 20.118 33.472V37.708H18V41.944H20.118V46.179ZM58.24 33.471C58.24 32.9093 58.0169 32.3705 57.6197 31.9733C57.2225 31.5761 56.6837 31.353 56.122 31.353H54V48.3H56.118C56.6797 48.3 57.2185 48.0769 57.6157 47.6797C58.0129 47.2824 58.236 46.7437 58.236 46.182V41.943H60.354V37.707H58.24V33.471Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Gym & Fitness
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <GiKnifeFork  className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Restaurant
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='!w-auto'>
                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-light-primary rounded-full'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40Z" fill="#ca8a04" />
                                            <path d="M56.795 25.2411L44.395 32.4011V18.0781H35.615V32.3951L23.212 25.2411L18.822 32.8411L31.222 39.9991L18.822 47.1571L23.212 54.7571L35.612 47.5991V61.9231H44.395V47.6061L56.795 54.7641L61.185 47.1641L48.785 40.0061L61.185 32.8481L56.795 25.2411Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Healthcare
                                    </span>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide className='!w-auto'>

                                <div className='flex items-center pt-[9px] pr-[30px] pb-[11px] pl-[9px] gap-[15px] rounded-[51px] bg-[#fff] border-2  border-primary'>

                                    <div className='flex items-center justify-center w-[40px] h-[40px]  bg-primary rounded-full'>

                                        <FaHashtag size={25} color='white' className=' bg-primary' />
                                    </div>
                                    <span className='text-[22px] md:text-[28px]  font-[Quicksand]  text-[500] text-primary leading-normal' >
                                        Startup
                                    </span>
                                </div>

                            </SwiperSlide>


                        </Swiper>
                    </div>

                </div>

                <div className='flex items-center justify-center flex-column'>
                    <Link href={"/our-services"}>
                    <LoadMore text={"Learn More"}  /></Link>
                </div>
            </div>
        </div>
    )
}

export default IndustriesWeServe