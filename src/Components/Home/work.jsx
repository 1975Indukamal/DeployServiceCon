"use client"
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import LoadMore from "../UI/Button";
import Image from "next/image";
import Link from "next/link";


const Work = () => {
  const videoRef = useRef(null)
  const [isScale, setIsScale] = useState(false)
  useEffect(() => {
    if (videoRef.current) {
      const oberver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsScale(true)
        }
      })
      oberver.observe(videoRef.current)
    }
  }, [videoRef.current])
  return (
    <><Head>
      <meta name="robots" content="index, follow " />
    </Head>
    <div className="flex items-center justify-center mt-12 overflow-hidden">
    <div className='relative flex items-center justify-center'>
    <Image height={150} width={150} src="../assets/images/work/background1.svg" className='absolute right-0 top-[30%] h-[150px] w-[150px] bg-primary filter blur-[100px]'/>
    <Image height={150} width={150} src="../assets/images/work/background2.svg" className='absolute left-0 bottom-[30%] h-[150px] w-[150px] mx-auto bg-primary filter blur-[150px]'/>

    <div className="xs:container mt-5 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-[90px] md:gap-[30px]">
          <div className='flex md:h-[400px] md:gap-[90px] gap-[50px] h-auto flex-col md:flex-row mx-[20px] xs:mx-0 '  ref={videoRef} >
            <div className='flex flex-1 items-start justify-start flex-col'>
              <div className="inline-flex flex-col items-start gap-[20px] mb-[25px]">
                <div className='font-[Quicksand] sm:text-[58px] text-[34px] font-normal leading-normal uppercase'><span className='font-light text-dark-primary mr-[10px]'>OUR</span><span className='font-normal text-primary'>WORK</span></div>
                <p className="text-dark-primary font-[Poppins] text-[16px] sm:text-[18px] font-normal">Stretching our horizons beyond creativity and presentations, our designs are purpose-built and action-oriented, increasing the user experience and putting utility first.
</p>
              </div>
              <Link href="https://calendly.com/hexabells_schedule_call/schedule-a-call" target="_blank"
            rel="noopener noreferrer">
                <LoadMore text={"Book An Intro Call"}/></Link>
            </div>
            <div className='relative flex flex-1 items-center flex-col justify-end gap-[25px]'>
              <p className='text-dark-primary font-[Quicksand] text-[22px] sm:text-[24px] font-normal leading-[36px]'><span className='font-normal'> Here’s a </span><span className='font-medium'> glimpse  </span> <span className='font-normal'>of what we have accomplished so far.</span></p>
             <div className='relative'>
              <Image height={150} width={150}  src="/assets/images/work/eclips.svg" />
              <Image height={70} width={70} className={isScale ? 'absolute top-[40px] left-[41px] transition-[all duration-1000 ease-out] transform -rotate-90' : 'absolute top-[40px] left-[41px]'} src="/assets/images/work/Vector2.svg"/>
              </div>
            </div>
          </div>
          <div className='relative flex lg:h-[640px] md:h-[470px] gap-[90px] h-auto flex-col md:flex-row'>
            <div className='flex flex-1 items-start justify-start flex-col'>
            <div className="relative bg-center bg-cover w-[320px] h-[390px] lg:w-[430px] lg:h-[517.825px] rounded-[10px] bg-[url('/assets/images/work/vavci.svg')]">
                <Image width={200} height={260} className='absolute w-[200px] h-[260px] top-[-40px] lg:top-[-60px] right-[-25px] lg:w-[291.341px] lg:h-[348.204px]' src="/assets/images/work/vavci.png"/>
                <div className="absolute bottom-[30px] flex items-start gap-[30px] flex-col ml-[30px]">
                <div>2018</div>

                <Image height={45} width={90} className='w-[110px] h-[55px]' src="../assets/images/work/vavcilogo.svg"/>
                <div className='flex items-start content-start gap-[10px] self-stretch flex-wrap mr-[30px]'>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">ui/ux</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">digital strategy</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">web dev</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">seo</span>
                </div>
                </div>
            
              </div>
            </div>
            <div className="relative flex flex-1 items-center flex-col justify-end gap-[25px]">
            

            <div className="relative bg-center bg-cover w-[320px] h-[390px] lg:w-[430px] lg:h-[517.825px] flex-shrink-0 rounded-[10px] bg-[url('/assets/images/work/Sagenext.svg')]">
           
                <img className='absolute w-[279.27px] h-[281.037px] right-[-15px] top-[-60px] lg:right-[-25px] lg:w-[400.375px] lg:h-[357.318px]' src="../assets/images/work/sn.png"/>
                <div className="absolute bottom-[30px] flex items-start gap-[30px] flex-col ml-[30px]">
                <div>2016</div>

              <Image height={45} width={90} className='w-[110px] h-[55px]' src="../assets/images/work/sagenextlogo.svg"/>
                <div className='flex items-start content-start gap-[10px] self-stretch flex-wrap mr-[30px]'>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">ui/ux</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">digital strategy</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">web dev</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">seo</span>
                </div>
                </div>
            
              </div>
            </div>
          </div>
          <div className='relative flex lg:h-[640px] md:h-[470px] gap-[90px] h-auto flex-col md:flex-row'>

            <div className='flex flex-1 items-start justify-start flex-col'>
            <div className="relative bg-center bg-cover w-[320px] h-[390px] lg:w-[430px] lg:h-[517.825px] flex-shrink-0 rounded-[10px] bg-[url('/assets/images/work/sanders.png')]">
                <img className='absolute w-[336.603px] h-[203.061px] top-[-30px] right-[-59px] lg:top-[-40px] lg:right-[-80px] lg:w-[488.603px] lg:h-[284.061px]' src="../assets/images/work/sandersimg.png"/>
                <div className="absolute bottom-[30px] flex items-start gap-[30px] flex-col ml-[30px]">
                <div>2021</div>

                <Image height={45} width={90} className='w-[110px] h-[55px]' src="../assets/images/work/sanderslogo.svg"/>
                <div className='flex items-start content-start gap-[10px] self-stretch flex-wrap mr-[30px]'>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">ui/ux</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">digital strategy</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">web dev</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">seo</span>
                </div>
                </div>
            
              </div>
            </div>
            <div className="relative flex flex-1 items-center flex-col justify-end gap-[25px]">
            <div className="relative bg-center bg-cover w-[320px] h-[390px] lg:w-[430px] lg:h-[517.825px] flex-shrink-0 rounded-[10px] bg-[url('/assets/images/work/PrisheBeauty.svg')]">
                <img className='absolute w-[290.613px] h-[235.271px] top-[-25px] right-[-45px] lg:top-[-40px] lg:right-[-80px] lg:w-[450.723px] lg:h-[374.421px]' src="../assets/images/work/Prishe.png"/>
                <div className="absolute bottom-[30px] flex items-start gap-[30px] flex-col ml-[30px]">
                <div>2023</div>

              <Image height={45} width={90} className='w-[110px] h-[55px]' src="../assets/images/work/prishelogo.svg"/>
                <div className='flex items-start content-start gap-[10px] self-stretch flex-wrap mr-[30px]'>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">ui/ux</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">web dev</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">seo</span>
                  {/* <span>...</span> */}
                </div>
                </div>
            
              </div>
            </div>
          </div>
          <div className='relative flex lg:h-[640px] md:h-[470px] gap-[90px] h-auto flex-col md:flex-row '>
            <div className='flex flex-1 items-start justify-start flex-col'>
            <div className="relative bg-center bg-cover w-[320px] h-[390px] lg:w-[430px] lg:h-[517.825px] flex-shrink-0 rounded-[10px] bg-[url('/assets/images/work/avalon.svg')]">
                <img className='absolute top-[-40px] right-[-35px] w-[309.969px] h-[227.834px] lg:w-[406.829px] lg:h-[300.79px]' src="../assets/images/work/avalon.png"/>
                <div className="absolute bottom-[30px] flex items-start gap-[30px] flex-col ml-[30px]">
                <div>2014</div>

                <Image height={45} width={90} className='w-[110px] h-[55px]' src="../assets/images/work/avalonlogo.svg"/>
                <div className='flex items-start content-start gap-[10px] self-stretch flex-wrap mr-[30px]'>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">ui/ux</span>
                  <span className="text-dark-primary font-[Poppins] text-[14px] font-normal leading-normal flex py-[6px] px-[17px] border border-[#2C3441] rounded-[20px]">web dev</span>
                </div>
                </div>
            
              </div>
            </div>
            <div className="relative flex flex-1 items-center flex-col justify-end gap-[25px]">
            <div className="flex border border-solid border-Stroke rounded-[10px] w-[320px] h-[390px] lg:w-[430px] lg:h-[517.825px] lg:pl-[40px] flex-col justify-center gap-[30px]">
                <div className='font-[Poppins] text-[22px] leading-[40px] w-[350px] text-body font-light lg:text-[32px] lg:leading-[58px] pr-4 lg:px-0'>
                  <div className="mx-[20px] lg:mx-0">
We are just <span className='text-dark-primary font-normal'>not done yet.</span> There is a lot going on in projects & research. We are sure you are in for frequent<span className='font-normal text-primary'> surprises👌</span></div></div>
<div className="ml-[20px]">
  <Link href="/our-work">
               <LoadMore text={"View More Work"}/></Link></div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </>
  );
};

export default Work;
