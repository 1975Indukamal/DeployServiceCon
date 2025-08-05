import React from "react";
import Image from "next/image";
import CircularText from "@/Components/shared/CircularText";

const hero = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="row w-full">
          <div className="my-5 text-left mt-100">
            <div className=" max-w-[1002px] ">
              <h1 className="  xl:text-[58px] lg:text-[50px] text-[32px] font-[400] leading-20 ">
                We Create{" "}
                <span className="text-primary font-[Quicksand]  font-semibold mt-30">
                  Cutting-Edge Digital Products
                </span>{" "}
                That Fuel Revenues.
              </h1>
              <div className=" max-w-[440px]">
                <p className="text-[#5F5E5E]  text-base font-normal  leading-7">
                  We're not just interested in creativity for the sake of
                  creativity. Our designs are intentional, increasing the.
                </p>
              </div>
            </div>
            

            <div className="relative">
              <CircularText 
               containerClass="absolute right-[95px] top-[-60px] z-3"
              />

              <div className="mt-[30px]">
                <Image
                  className="w-full h-full  mt-0 mb-0  object-cover bg-no-repeat"
                  src="/assets/images/experties/experties1.webp"
                  width={1400}
                  height={700}
                  alt="HERO"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
