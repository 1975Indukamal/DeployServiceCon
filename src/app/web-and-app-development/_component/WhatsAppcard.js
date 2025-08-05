"use client"

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import ArrowButton from "../../../Components/UI/Button";
import ContactModal from "./ContactModal"; 

const WhatsAppcard = () => {
  const[isOpen ,setIsOpen] = useState(false)
  return (
    <div className="relative ">
      <div className="absolute left-0 bg-[#F6F6F6] max-w-[1000px] w-full h-full z-10"></div>
      <div className="container z-20 relative mb-20">
        <div className="space-y-5 py-10">
          <h2 className="md:text-[40px] text-[32px] font-[Poppins] text-[#2c3441] md:font-[600] font-[700]">
            Transform your{" "}
            <span className="font-[700] text-[#eb7373] md:text-[40px] text-[32px] ">
              vision
            </span>{" "}
            into reality with our <br className="xl:block hidden" />
            <span className="font-[700] text-[#eb7373] md:text-[40px] text-[32px] ">
              industry-leading
            </span>{" "}
            development services.
          </h2>
          {/* <Link href="https://wa.me/919810539058" target="_blank">
          <button className="flex items-center gap-2 bg-[#25D366] py-[9px] px-4"  >
            <FaWhatsapp size={20} color="#fff"/>
            <h3 className="text-[#FEFEFE] text-[18px] font-[500] font-[Quicksand]">Chat With Us</h3>
          </button>
          </Link> */}
          <div className="flex flex-wrap gap-[20px] items-center">
        <ArrowButton
          text="Get in Touch"
          className={`h-100 ${"rounded_full"}`}
          onClick={()=>setIsOpen(true)}
        />
      </div>
        </div>
        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    
    </div>
  );
};
export default WhatsAppcard;
