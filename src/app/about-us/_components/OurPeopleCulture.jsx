/* eslint-disable react/no-unescaped-entities */
"use client"
import React, {useEffect} from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

import Slider1_1 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE1.webp";
import Slider1_2 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE2.webp";
import Slider1_3 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE3.webp";
import Slider1_4 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE4.webp";
import Slider1_5 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE5.webp";
import Slider1_6 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE6.webp";
import Slider1_7 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE7.webp";
import Slider1_8 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE8.webp";

import Slider2_1 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE1.webp";
import Slider2_2 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE2.webp";
import Slider2_3 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE3.webp";
import Slider2_4 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE4.webp";
import Slider2_5 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE5.webp";
import Slider2_6 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE6.webp";
import Slider2_7 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE7.webp";
import Slider2_8 from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/SLIDER_1/IMAGE8.webp";

import CircularText from "@/Components/shared/CircularText"

gsap.registerPlugin(ScrollTrigger);
const OurPeopleCulture = () => {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-wrapper",
          start: "top-=120% top",
          end: "bottom+=400% bottom",
          scrub: 0.5,
          ease: "Power0",
        },
      });

  timeline.from(".slider_2", {
    x: 0,
  });
  timeline.to(".slider_2", {
    x: "130%",
  });

  const slide1Context = gsap.timeline({
    scrollTrigger: {
      trigger: ".content-wrapper",
      start: "top-=150% top",
      end: "bottom+=400% bottom",
      scrub: 0.5,
      ease: "Power0",
    },
  });

  slide1Context.from(".slider_1", {
    x: 0,
  });
  slide1Context.to(".slider_1", {
    x: "-130%",
  });
});

return () => ctx.revert();
  }, []);


  return (
    <section>
      <div className=" mt-[50px] rounded-[25px] overflow-hidden ">
          <div className="mb-4">
            <div className="flex justify-between content-wrapper flex-col ">
              <div className="  w-full ">
                <div className="">
                <h2 className="text-body font-quicksand text-[38px] md:text-[48px] xl:text-[58px] font-normal leading-20 md:pb-[0px] pb-0">
  Where Talent Meets Vision
  <span className="font-light text-primary"> Driven by People, Powered by Purpose</span>
</h2>

                </div>
            
               
              </div>
              <div className="text-body text-[16px] font-[Quicksand] pt-14 font-semibold">
  At ServiceConnect, we believe innovation starts with people. We’re a diverse collective of thinkers, builders, and creators working in sync to shape digital experiences that matter.
</div>
<h3 className="mb-6 text-[28px] font-[500] font-[Quicksand] text-body">
  Our Culture Is Rooted In{" "}
  <span className="text-primary font-normal font-[Quicksand]">Real Impact</span>
</h3>

<div className="grid md:grid-cols-2 gap-6">
  <div className="text-body text-[16px] font-[Quicksand] border border-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <b className="font-[600] block mb-2">Authenticity & Trust</b>
    We lead with honesty, integrity, and full transparency—because real relationships matter.
  </div>

  <div className="text-body text-[16px] font-[Quicksand] border border-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <b className="font-[600] block mb-2">Bold Collaboration</b>
    We don’t just work together—we innovate together. Our teams thrive on shared success and creative synergy.
  </div>

  <div className="text-body text-[16px] font-[Quicksand] border border-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <b className="font-[600] block mb-2">Relentless Learning</b>
    Curiosity drives us. We embrace change, seek knowledge, and stay ahead in a rapidly evolving world.
  </div>

  <div className="text-body text-[16px] font-[Quicksand] border border-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <b className="font-[600] block mb-2">Human-Centered Balance</b>
    We support well-being and flexibility—because the best ideas come from happy, empowered minds.
  </div>
</div>



            </div>
          
          </div>

 {/* Image swiper */}

          <div className="overflow-hidden">
            <div className="flex gap-5 pb-5  slider_1">
              <div className="flex-shrink-0">
                <Image src={Slider1_1} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px]   object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider1_2} alt="" 
                     className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px]  object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider1_3} alt="" 
                     className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider1_4} alt="" 
                     className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider1_5} alt="" 
                     className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider1_6} alt="" 
                     className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider1_7} alt="" 
                     className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider1_8} alt="" 
                     className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
            </div>

            <div className="gap-5 flex flex-row-reverse rounded-[10px] slider_2">
              <div className="flex-shrink-0">
                <Image src={Slider2_8} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider2_7} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider2_6} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider2_5} alt="" className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '/>
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider2_4} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider2_3} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider2_2} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              <div className="flex-shrink-0">
                <Image src={Slider2_1} alt="" 
                    className='rounded-[10px] lg:h-[310px] md:h-[244px] h-[176px] lg:w-[450px] md:w-[375px] w-[272px] object-cover object-top align-middle '
                />
              </div>
              
            </div>
          </div>


        </div>
    </section>
  )
}

export default OurPeopleCulture