import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="w-full bg-[#F6F6F6]">
        <div className="container">
          <div className="grid md:grid-cols-5 grid-cols-1 place-items-center py-[33px] mb-10 md:space-y-0 space-y-[36px]">
            <div className="">
              <Image
                src="/assets/images/case-study/coding.png"
                height={100}
                width={100}
                alt="web development"
                className="w-[45px]  h-[45px] mt-[8px]"
              />
              <h3 className="text-[18px] text-[#5F5E5E] font-[500] font-[poppins]">
                Web Development
              </h3>
            </div>
            <div>
              <Image
                src="/assets/images/case-study/mobile.png"
                height={100}
                width={100}
                alt="web development"
                className="w-[45px]  h-[45px] mt-[8px]"
              />
              <h3 className="text-[18px] text-[#5F5E5E] font-[500] font-[poppins]">
                App Development
              </h3>
            </div>
            <div>
              <Image
                src="/assets/images/case-study/mvp.png"
                height={100}
                width={100}
                alt="web development"
                className="w-[45px]  h-[45px] mt-[8px]"
              />
              <h3 className="text-[18px] text-[#5F5E5E] font-[500] font-[poppins]">
                MVP Development
              </h3>
            </div>
            <div>
              <Image
                src="/assets/images/case-study/coding.png"
                height={100}
                width={100}
                alt="web development"
                className="w-[45px]  h-[45px] mt-[8px]"
              />
              <h3 className="text-[18px] text-[#5F5E5E] font-[500] font-[poppins]">
                Custom Software
              </h3>
            </div>
            <div className="ml-12 md:ml-0">
              <Image
                src="/assets/images/case-study/functions.png"
                height={100}
                width={100}
                alt="web development"
                className="w-[45px]  h-[45px] mt-[8px]"
              />
              <h3 className="text-[18px] text-[#5F5E5E] font-[500] font-[poppins]">
                Product Modernization
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
