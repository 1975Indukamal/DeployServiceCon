"use client"
import React, { useState } from "react";
import ArrowButton from "../../../Components/UI/Button";
import ContactModal from "./ContactModal"; 

const DigiRevolution = () => {

    const [isOpen,setIsOpen] =useState(false)



  return (
    <div className="container">
      <div className="relative bg-cover pt-14 md:pb-20 pb-0  md:pl-8 pl-4 bg-bottom md:h-auto h-[600px] bg-no-repeat  md:bg-[url('/assets/images/case-study/frame.png')] bg-[url('/assets/images/case-study/frame1.png')]">
        <h2 className=" text-[#fff] text-[32px] font-[Poppins]  italic  font-[700] pb-5">
          Join the Digital Revolution with
          <br className="md:block hidden" /> Hexabells -{" "}
          <span className="text-[#fff] text-[32px]  font-[700]  relative after:content-[''] after:h-[10px]  after:w-full after:absolute after:bg-[#eb7373]  after:left-0 after:bottom-1 z-50 after:-z-10">
            Your Catalyst for Success!
          </span>
        </h2>
        <div className="  ">
          <ArrowButton
            text="Get in Touch"
            className={` ${"rounded_full"}`}
            onClick={()=>setIsOpen(true)}
          />
        </div>
      </div>

      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};
export default DigiRevolution;
