// "use client"
// import React, { useLayoutEffect, useRef } from 'react'
// import { gsap } from "gsap"
// import ArrowButton from '../UI/Button'
// import Link from 'next/link'
// import CircularText from '@/Components/shared/CircularText'
// import bgDrop from "@/../public/filtered_hero.png"
// import Image from 'next/image'
// const Heros = () => {
//   // const imgRef = useRef(null)
  
  
//   // useLayoutEffect(() => {
//   //   if (imgRef.current) {
//   //     const context = gsap.context(() => {
//   //       gsap.from(imgRef.current, {
//   //         rotation: 30,
//   //         repeat: -1,
//   //         yoyo: true,
//   //         transformOrigin: "center 250px ",
//   //         duration: 7,
//   //         animationTimingFunction: "linear",
//   //         delay: 100,
//   //         zIndex: -1
//   //       })
//   //       gsap.to(imgRef.current, {
//   //         rotation: -45,
//   //         repeat: -1,
//   //         yoyo: true,
//   //         transformOrigin: "center 250px",
//   //         duration: 6,
//   //         animationTimingFunction: "linear",
//   //         zIndex: -1
//   //       })
//   //     })
//   //     return (() => context.revert())
//   //   }
//   // }, [])

//   return (

//       <div className={`  relative container`}>
//       <video controls loop src="/assets/video/blockh.mp4" autoPlay muted className='xl:h-[600px] lg:h-[512px]  md:h-[401px] h-[300px] object-cover w-full  rounded-3xl  ' ></video>
       
//     </div>
//   )
// }

// export default Heros

"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative text-white">
    {/* Optional background image */}
    {/* <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/service-bg.jpg')" }}></div> */}
  
    <div className="container w-full mx-auto px-6 pb-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
      
      {/* Text Content */}
      <div className="mb-12 lg:mb-0 max-w-2xl flex-1">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight sm:leading-[72px] mb-6">
          Simplify Service Access
          <br />
          with <span className="text-primary">ServiceConnekt</span>
        </h1>
  
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Find trusted professionals, streamline operations, and connect with quality service providers — all in one place.
        </p>
  
        <div className="flex flex-wrap gap-4">
          <Link href="/our-services">
            <button className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-body transition">
              Explore Services
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="border border-white text-white px-6 py-3 rounded-lg hover:text-primary hover:border-primary transition">
              Join Now
            </button>
          </Link>
        </div>
      </div>
  
      {/* Image */}
      <div className="w-full flex-1">
        <img
          src="/assets/video/heroG2.gif"
          alt="ServiceConnekt Platform"
          className="w-full "
        />
      </div>
    </div>
    <div className={`  relative container mb-28`}>
    <video controls loop src="/assets/video/blockh.mp4" autoPlay muted className='xl:h-[600px] lg:h-[512px]  md:h-[401px] h-[300px] object-cover w-full  rounded-3xl  ' ></video>
       
    </div>
  </section>
  
  );
};

export default Hero;
