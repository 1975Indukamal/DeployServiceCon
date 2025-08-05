import React from "react";
import Image from "next/image";

const ClientBusiness = () => {
  return (
    <>
      <div className="container md:mt-0 mt-24">
        <h2 className="text-center md:text-[58px] text-[30px] text-[#2C3441] md:leading-[80px] leading-normal font-[400] mb-[70px]">
          What Clients Speaks About <span className="text-[#eb7373] font-[500]">Our Businesses</span>
        </h2>
        <div className="rounded-[10px]  bg-[#F6F6F6] border-[1.5px] border-solid border-[#DFDFDF] overflow-hidden">
        <div className="md:flex block  justify-center items-center gap-[50px]">
           
            <div className="flex-shrink-0">
          <Image
            src="/assets/images/services/kushal.png"
            height={400}
            width={400}
            alt="kushal"
            className="lg:w-[400px] md:w-[350px] w-full h-[400px] object-cover"
          />
          </div>
          <div className="space-y-4 mt-10 md:mt-0">
          <Image
            src="/assets/images/services/quote.png"
            height={30}
            width={30}
            alt="qoute"
            className=""
          />
          <h3 className="text-[#2C3441] text-[18px] font-[600] ">Kushal Kumar Singh</h3>
          <div>
          <span className="text-[16px] text-[#5F5E5E] leading-[25px]">Director of Digital Marketing</span>
          </div>
          <p className="text-[#2C3441] text-[16px] font-[500] l leading-[24px]">Hexabells helped me to learn about our customers, intimately, Loved my experience at Super-friendly staff—the guy even came out and gave us proper service for our web application. Excellent service. Definitely coming back for another service.</p>
          </div>
        </div>
        </div>
        </div>
        <div className="container border-b border-b-[#5F5E5E] mt-[100px] md:block hidden">

        </div>
    </>
  );
};
export default ClientBusiness;
