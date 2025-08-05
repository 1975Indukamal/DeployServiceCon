
"use client";
import React, { useState } from "react";
import ArrowButton from "../../../Components/UI/Button";
import ContactModal from "./ContactModal"; 

const Plannning = ({heading="",span1="",span2=""}) => {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className="container space-y-6">
      <h2 className="md:text-[40px] text-[32px] font-[600] text-[#2C3441] font-[Poppins] ">
        {heading || "Planning to Develop an"}{" "}
        <span className="md:text-[40px] text-[32px] font-[700] text-[#eb7373]">
          APP
        </span>{" "}
        or a{" "}
        <span className="md:text-[40px] text-[32px] font-[700] text-[#eb7373]">
          {span1 || "Website?"}
        </span>
        <br className="lg:block hidden" /> {span2 || "We can Help."}
      </h2>
      <div className="flex flex-wrap gap-[20px] items-center">
        <ArrowButton
          text="Get in Touch"
          className={`h-100 ${"rounded_full"}`}
          onClick={()=>setIsOpen(true)}
        />
      </div>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};
export default Plannning;
