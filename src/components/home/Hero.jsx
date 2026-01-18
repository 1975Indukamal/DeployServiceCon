// "use client"
// import React, { useLayoutEffect, useRef } from 'react'
// import { gsap } from "gsap"
// import ArrowButton from '../shared/Button'
// import Link from 'next/link'
// import CircularText from '@/components/shared/CircularText'
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

// "use client";
// import React from "react";
// import Link from "next/link";

// const Hero = () => {
//   return (
    // <section className="relative text-white">
    // {/* Optional background image */}
    // {/* <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/service-bg.jpg')" }}></div> */}
  
    // <div className="container w-full mx-auto px-6 py-20 lg:py-0 flex flex-col lg:flex-row items-center justify-between relative z-10">
      
//       {/* Text Content */}
      // <div className="mb-12 lg:mb-0 max-w-2xl flex-1">
      //   <h1 className="text-4xl sm:text-5xl font-bold leading-tight sm:leading-[72px] mb-6">
      //     Simplify Service Access
      //     <br />
      //     with <span className="text-primary">ServiceConnect</span>
      //   </h1>
  
      //   <p className="text-lg text-gray-300 leading-relaxed mb-8">
      //     Find trusted professionals, streamline operations, and connect with quality service providers — all in one place.
      //   </p>
  
      //   <div className="flex flex-wrap gap-4">
      //     <Link href="/our-services">
      //       <button className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-body transition">
      //         Explore Services
      //       </button>
      //     </Link>
      //     <Link href="/contact-us">
      //       <button className="border border-white text-white px-6 py-3 rounded-lg hover:text-primary hover:border-primary transition">
      //         Join Now
      //       </button>
      //     </Link>
      //   </div>
      // </div>
  
    //   {/* Image */}
    //   <div className="w-full flex-1">
    //     <img
    //       src="/assets/video/heroG2.gif"
    //       alt="ServiceConnect Platform"
    //       className="w-full "
    //     />
    //   </div>
    // </div>
    // <div className={`  relative container mb-28`}>
    // <video controls loop src="/assets/video/blockh.mp4" autoPlay muted className='xl:h-[600px] lg:h-[512px]  md:h-[401px] h-[300px] object-cover w-full  rounded-3xl  ' ></video>
       
    // </div>
//   </section>
  
//   );
// };

// export default Hero;
"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Card } from "../shared/Card"
import { Spotlight } from "../shared/Spotlight"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fadeUp } from "@/utils/motionVariants"

const SplineScene = dynamic(() => import("../shared/splite"), { ssr: false })

const HeroH = () => {
  const [showSpline, setShowSpline] = useState(false)
  const [splineLoaded, setSplineLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setShowSpline(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative text-white">
      <div className="container mx-auto  py-20 lg:py-0 relative z-10">
        <Card className="w-full lg:h-[500px] relative overflow-hidden ">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="flex h-full">
            {/* Left */}
            <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }} className="mb-5 lg:mb-0 max-w-2xl flex-1 flex justify-center items-start flex-col">
              <motion.h1  className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6">
                Simplify Service Access <br />
                with <span className="text-primary">ServiceConnect</span>
              </motion.h1>
              <motion.p  variants={fadeUp}  className="text-lg text-gray-300 mb-8">
                Find trusted professionals, streamline operations, and connect with quality service providers — all in one place.
              </motion.p>
              <motion.div className="flex gap-4" variants={fadeUp} >
                <Link href="/our-services">
                  <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-body transition">
                    Explore Services
                  </button>
                </Link>
                <Link href="/contact-us">
                  <button className="border border-white px-6 py-3 rounded-lg hover:text-primary hover:border-primary transition">
                    Join Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right */}
            <div className="flex-1 relative h-full lg:flex items-center justify-center hidden">
              
              {/* Loader until spline loads */}
              {(!splineLoaded && !showSpline ) && (
                <div className="hole absolute">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <i key={i}></i>
                  ))}
                </div>
              )}

              {showSpline && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                className="h-full w-full border-b border-gray-700 border-opacity-10 "
  >
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full object-cover"
                    onLoad={() => setSplineLoaded(true)}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default HeroH
