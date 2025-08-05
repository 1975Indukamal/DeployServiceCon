import React from 'react'
import Button from "@/Components/UI/Button";
import Image from "next/image";
import Link from 'next/link';
// import Line from "../../../../public/assets/images/our-work/line.png";

const BussConceptAndTrademark = () => {
  return (
    <section>
          <div className=" w-[90%] mx-auto max-w-[1170px] mt-[150px]">
            <h2 className="text-[#2C3441] lg:text-[48px] md:text-[38px] text-[30px] font-[Quicksand]    font-[400]">
            Have a {" "}
            <span className="text-primary font-[Quicksand]  lg:text-[48px] md:text-[38px] text-[30px] font-[400] ">
              Disruptive Business {" "}
              </span>
             Concept in Mind?{" "}
              
            </h2>
            <p className="font-poppins text-base font-normal leading-7 text-[16px]">
            We are more than just a development company. Together we can dive deeper into your ideas and  then walk you through the process of defining your vision, thereby connecting you with the workforce to pump life into your idea. 
            </p>
            <div className="mt-8">
            <Link href="https://calendly.com/hexabells_schedule_call/schedule-a-call" target="_blank"
            rel="noopener noreferrer">
              <Button text="Book an intro call" /></Link>
            </div>
            
          </div>
        </section>
  )
}

export default BussConceptAndTrademark