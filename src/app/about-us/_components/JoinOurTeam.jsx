import React from "react";
import Image from "next/image";
import OURTEAM from "../../../../public/assets/images/joinourteam/JoinOurTeam.png";
import CircularText from "@/Components/shared/CircularText";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

const JoinOurTeam = () => {
  return (
    <section>
      <div className="container flex md:flex-row flex-col pt-[30px] lg:pb-[120px] md:pb-[90px] pb-[100px]">
        <div className="  items-start justify-between ">
          <div className="md:flex xl:space-x-[119px] lg:space-x-[100px] md:space-x-[60px] space-x-0 md:w-full  md:m-0 ">
           

            <div className=" lg:w-[50%] md:w-[60%] w-full m-0 ">
              <div className="lg:pt-2">
                <div className="m-0 md:pb-5 pb-4">
                  <h2 className=" lg:text-[38px] md:text-[32px] text-[28px] font-[400] text-primary font-[Poppins] pt-10">
                  Turn Vision into Reality with Us
                  </h2>
                </div>
                <div className="m-0 md:pb-5 pb-4">
                  <p className=" font-[400] text-white  text-[18px] font-[Poppins]">
                  At ServiceConnekt, we’re not just hiring—we’re building a community of creators, thinkers, and doers.
                  </p>
                </div>
                <div className="m-0 md:pb-5 pb-4 flex flex-shrink-0 gap-5 items-center">
                  <p className=" text-body text-[18px] font-[400] font-[Poppins]">
                  Explore open positions
                  </p>
                  <div className=" group duration-1000 bg-transparent hover:bg-primary/40 w-[60px] h-[60px] grid place-items-center rounded-full" >

                    <Link href={"/career"}>
                    <button className=" relative text-primary w-[45px] h-[45px] grid place-items-center border-primary border rounded-full group duration-500 group-hover:bg-primary overflow-hidden group-hover:border-primary   ">
                      <HiArrowLongRight
                        size={32}
                        className=" group-hover:text-white group-hover:translate-x-10 duration-300 "
                      />

                      <HiArrowLongRight
                        size={32}
                        className=" text-white  -translate-y-2/4 absolute top-2/4 left-0 -translate-x-8 group-hover:text-white duration-300 group-hover:translate-x-1/4 z-50 "
                      />
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[476px] lg:w-[450px]  relative md:w-[410] w-full xl:h-[476px] lg:h-[450px] md:h-[410] h-full pb-[40px] ">
              <Image
                className="w-full h-full my-0 mb-md-3 object-cover bg-no-repeat rounded-[10px]"
                src={OURTEAM}
                alt="OURTEAM"
              />
              {/* <CircularText
                width={175}
                height={175}
                imgClassName=" rotate-90 "
                containerClass=" bg-white/50 absolute md:-right-16  right-0    -bottom-6  w-[135px] h-[135px]  "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
