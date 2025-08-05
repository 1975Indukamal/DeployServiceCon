"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const CircleArrow = () => {
    const iconsRef = useRef(null);
    const [rotate, setRotate] = useState(false);
    useEffect(() => {
        if (iconsRef.current) {
          const oberver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              setRotate(true);
            }
          });
          oberver.observe(iconsRef.current);
        }
      }, [iconsRef.current]);
  return (
    <section className="container">
    <div className=" container mt-[70px]">
      <div className="">
        <div className="">
          <h2 className="max-w-1170 text-[#2c3441] font-[Quicksand] xl:text-[58px] lg:text-[50px] text-[32px] font-[400]   md:leading-[80px] leading-[40px] capitalize">
            The rise of{" "}
            <span className="text-[#2c3441] font-[Quicksand] xl:text-[58px] lg:text-[50px] text-[32px] md:leading-[80px] font-[500] leading-[40px]">
              digital experiences
            </span>{" "}
            that have the{" "}
            <span className="text-[#2c3441]  font-[Quicksand] xl:text-[58px] lg:text-[50px] text-[32px]   font-[500] md:leading-[80px] leading-[40px]">
              potential to transform
            </span>{" "}
            different industries and brands.
          </h2>
        </div>
        <div className="flex items-center justify-end flex-col  md:flex-row    lg:mb-[100px] md:mb-[100px] mb-[50px]">
          <div className=" md:w-2/4 xl:flex items-center justify-center hidden">
            <div className="relative w-max" ref={iconsRef}>
              <Image
                className="relative  my-5 "
                src="/assets/images/work/eclips.svg"
                width={150}
                height={150}
                alt=""
              />
              <Image
                className={`absolute -translate-x-2/4 -translate-y-2/4 top-[50%] left-[50%]  ${
                  rotate ? "rotate-90" : "rotate-0"
                } duration-500 `}
                src="/assets/images/work/Vector3.svg"
                width={50}
                height={50}
                alt=""
              />
            </div>
          </div>
          {/* <div className="md:w-2/4">
            <div className="">
              <span className="text-primary font-[Poppins] text-lg lg:font-normal font-light leading-normal uppercase">
                Explore Industries we Serve
              </span>
              <p className="text-[#5f5e5e] font-[Poppins] text-base font-normal leading-7 pt-[15px]">
                As we at HexaBells wish to leave our mark in a variety of
                industries. Our brief yet significant experience taught us
                about how clients behave in various industries. Our
                imagination and viewpoint are crucial in adjusting to that
                unique vertical.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default CircleArrow