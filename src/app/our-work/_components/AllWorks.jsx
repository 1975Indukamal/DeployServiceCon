"use client"
import React, { useEffect, useState } from "react";
import Button from "@/Components/UI/Button";
import Image from "next/image";
import Line from "../../../../public/assets/images/our-work/line.png";

import Prishe from "../../../../public/assets/images/our-work/prishe_img.png";
import Frame_prishe1 from "../../../../public/assets/images/our-work/frame_prishe1.png";

import Vavci from "../../../../public/assets/images/our-work/vavci_img.png";
import Frame_vavci from "../../../../public/assets/images/our-work/frame_vavci.png";

import Sanders from "../../../../public/assets/images/our-work/sanders_img.png";
import Frame_sanders from "../../../../public/assets/images/our-work/frame_sanders.png";

import Avalon from "../../../../public/assets/images/our-work/avalon_img.png";
import Frame_avalon from "../../../../public/assets/images/our-work/frame_avalon.png";

import Sagenext from "../../../../public/assets/images/our-work/sagenext_img.png";
import Frame_sagenext from "../../../../public/assets/images/01/work/sagenextBanner.svg";

const projects = [
  {
    id: 20,
    title: "Prishé Beauty",
    img: Prishe,
    desc: "A web application for customers who are into beauty and aesthetics makeovers.",
    keyFeatures: ["ui/ux", "website development", "seo"],
    year: 2023,
    category: "website",
    logo: Frame_prishe1
  },
  {
    id: 21,
    title: "Vavci",
    img: Vavci,
    desc: "A comprehensive website and mobile app for customers who are into fashion-forward, crave style and sophistication.",
    keyFeatures: ["ui/ux", "website development"],
    year: 2018,
    category: "website",
    logo: Frame_vavci
  },

  {
    id: 22,
    title: "Sanders Kitchen",
    img: Sanders,
    desc: "A website and SEO for customers who are into luxury, redefining hospitality in the heart of Copenhagen.",
    keyFeatures: ["ui/ux", "website development"],
    year: 2021,
    category: "website",
    logo: Frame_sanders
  },

  {
    id: 23,
    title: "Avalon Accounting",
    img: Avalon,
    desc: "A web application for customers who are into online bookkeeping and accounting.",
    keyFeatures: ["ui/ux", "website development", "seo"],
    year: 2014,
    category: "website",
    logo: Frame_avalon
  },

  {
    id: 24,
    title: "Sagenext infotech",
    img: Sagenext,
    desc: "A website development and digital marketing for customers who are into accounting and businesses.",
    keyFeatures: ["ui/ux", "website development"],
    year: 2016,
    category: "app",
    logo: Frame_sagenext
  },

]

const AllWorks = () => {
  const [activeFilter, setActiveFilter] = useState(projects);
  const [active, setActive] = useState("all")

  const filterSelection = (filter) => {
    if (filter === "all") {
      setActive("all")
      setActiveFilter(projects);
    } else {
      setActive(filter)
      setActiveFilter(projects.filter((item) => item.category === filter))
    }
  };

  return (
    <section>
      <div className=" xl:pt-[90px] lg:pt-[70px]  pt-[90px] pb-[90px]">
        <div className="">
          <Image
            className="w-full h-full my-0 mb-md-3 object-cover bg-no-repeat"
            src={Line}
            alt="Line"
          />
        </div>
        <div className="flex pb-[20px]  md:justify-start justify-between flex-row  xl:pl-0 md:pl-6 pl-0 sm:px-[20px]">
          <p className={`pt-[10px] duration-200 transition-all md:px-12 px-2 sm:px-1 ${active === "all" ? "border-t-2 border-primary" : ""}`} role="button" onClick={() => filterSelection("all")} > All Work</p>
          <p className={` pt-[10px] duration-200 transition-all md:px-12 px-2 sm:px-1 ${active === "website" ? "border-t-2 border-primary" : ""}`} role="button" onClick={() => filterSelection("website")}> Websites</p>
          <p className={`pt-[10px] md:px-12 px-2 sm:px-1 duration-200 transition-all  ${active === "app" ? "border-t-2 border-primary" : ""}`}  role="button" onClick={() => filterSelection("app")} >Applications</p>
        </div>
        {
          activeFilter.map((item) => {
            return <div key={item.id} >
              <div className="md:flex xl:space-x-[119px] lg:space-x-[100px] md:space-x-[60px] space-x-0 md:w-full  md:m-0 ">
                <div className="xl:w-[476px] rounded-[10px] overflow-hidden lg:w-[450px] md:max-w-[410px]  xl:h-[476px] lg:h-[450px] md:h-[410px] pb-[10px] w-full pt-10">
                  <Image
                    className=" my-0 bg-no-repeat object-cover "
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                <div className=" lg:w-[50%] md:w-[60%] w-full m-0">
                  <div className="lg:pt-2">
                    <div>
                      <p className="m-0 md:pb-[15px] pb:[13px] md:pt-1 pt-[10px]"> {item.year} </p>
                    </div>

                    <div className="m-0 md:pb-3 pb-2 md:pt-0 pt-[10px]">
                      <Image
                        className=" my-0 mb-md-3 xl:w-[125px] xl:h-[125px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] w-[107px] h-[107px]  object-cover"
                        src={item.logo}
                        alt="logo"
                      />
                    </div>
                    <div className="m-0 md:pb-3 pb-2 text-[18px] font-[500]">
                      <p> {item.title} </p>
                    </div>
                    <div className="m-0 md:pb-3 pb-4">
                      <p className="text-[#5f5e5e] md:text-[16px] text-[14px] font-[400]">
                        {item.desc}
                      </p>
                    </div>

                    <div className="m-0 flex xl:pb-7  md:pb-3 pb-2 text-[14px] flex-wrap  border-box gap-2 font-light">
                      {
                        item.keyFeatures.map((item, ind) => {
                          return <button key={ind} className="flex items-center space-x-2">
                            <span className="w-[5px] h-[5px] rounded-full bg-body"></span>
                            <span>
                              {item}
                            </span>
                          </button>
                        })
                      }
                    </div>
                  </div>
                  <div className="m-0 pb-5">
                    <Button text="Learn More" />
                  </div>
                </div>
              </div>
            </div>
          })
        }



      </div>
    </section>
  );
};

export default AllWorks;
