/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from "@/Components/UI/Button";
import Link from 'next/link';

const OurApproach = () => {
  return (
    <section>
    <div className=" md:pt-[90px] pt-[60px]">
      <div className="max-w-1170 mx-auto">
        <div className="md:flex  block items-start">
          <div className="">
            <div className="">
              <h2 className="text-[#2c3441] font-quicksand xl:text-[58px] lg:text-[48px] md:text-[45px] text-[30px] font-light ">
                Created with a{" "}
                <span className="text-primary font-quicksand xl:text-[58px] lg:text-[48px] md:text-[45px] text-[30px]  font-normal-[400] ">
                  purpose
                </span>
                , driven by{" "}
                <span className="text-primary font-quicksand xl:text-[58px] lg:text-[48px]  md:text-[45px] text-[30px]  font-normal-[400]">
                  connection
                </span>
                , and centred on{" "}
                <span className="text-primary font-quicksand xl:text-[58px] lg:text-[48px] md:text-[45px] text-[30px] font-normal-[400]">
                Experiences
                </span>
                .{" "}
              </h2>
            </div>
          </div>

          <div className="md:pl-[70px] pl-0">
            <div className="pt-4">
            
              <h3 className="text-primary font-poppins md:text-[24px] text-[20px]  font-[600] leading-normal uppercase">
              Beyond Development: Problem-Solvers at the Core
              </h3>
            
              <p className="text-[#5F5E5E] font-poppins text-base leading-7 pt-2 pb-8 md:text-[18px] text-[16px] font-[400] ">
              Hexabells goes beyond just writing code for websites and apps; we actually are problem solvers. We thrive on challenges and view every assignment as an opportunity to find innovative solutions. We take immense pride in our ability to understand your objectives, ensuring that our solutions not only meet but exceed your expectations. .{" "}
              </p>
            </div>
            <div className="">
              <Link href="/contact-us">
              <Button text="Ask For a Quote" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurApproach