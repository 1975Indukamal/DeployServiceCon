/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import DEEPAK from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/DEEPAK.webp";
import ISSAC from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/ISSAC.webp";
import VISHWA from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/VISHWA.webp";
import linkedIn from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/LOGOS/linked.svg";
import twitter from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/LOGOS/twitter.svg";

import ABHISHEK from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/ABHISHEK.webp";
import AMIT from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/AMIT.webp";
import AFJAL from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/AFJAL.webp";
import AKANSHA from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/AKANSHA.webp";
import PRIYANKA from "../../../../public/assets/images/ABOUT US SLIDER IMAGEs/PRIYANKA.webp";

const OurLeadership = () => {
  return (
    <section className="   bg-light-primary  " >

      <div className="md:pt-24 pt-14 container md:pb-28 pb-10 ">
        <h3 className="pb-2 text-[18px] font-[Quicksand] font-[500] uppercase text-primary">
          Meet Our Leadership
        </h3>

        <p className="text-[38px]">
          <span className="text-[38px] font-[Quicksand] text-[#2c3441]">
            Our{" "}
          </span>{" "}
          team efforts & hard work{" "}
          <span className="text-[38px] font-[Quicksand] text-[#2c3441]">
            construct the bridge that connects your dreams to reality
          </span>
        </p>

        <div>
          <h4 className="pt-14 pb-2 text-[18px] font-[500] text-[#2c3441] font-[Poppins]">
            Executive Committee
          </h4>
          <div className="pt-2 flex overflow-x-auto  gap-5">
            <div className=" main flex-shrink-0 group ">
              <div className="">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={DEEPAK}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                      <a
                        className=" text-white "
                        href="https://twitter.com/deep_sage"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <Image src={twitter} alt={twitter} />{" "}
                      </a>
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/deepak-tiwari-849b975a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                    Deepak Tiwari
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] text-[16px] text-[#5f5e5e] pb-1 font-[400]">
                      Head Honcho
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                    (CEO)
                  </p>
                </div>
              </div>
            </div>

            <div className=" main flex-shrink-0 group ">
              <div className="">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={ISSAC}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                      <a
                        className=" text-white "
                        href="https://twitter.com/IsaacRoy007"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <Image src={twitter} alt={twitter} />{" "}
                      </a>
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/isaac-roy-1b274117a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                    Issac Roy
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] text-[16px] text-[#5f5e5e] pb-1 font-[400]">
                      Master Handshaker
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                    (HOD of BD)
                  </p>
                </div>
              </div>
            </div>

            <div className=" main flex-shrink-0 group ">
              <div className="">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={VISHWA}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/vishwa-deepak-dwivedi-24ab3915a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                    Vishwa Deepak
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] text-[16px] text-[#5f5e5e] pb-1 font-[400]">
                      Chief Rockstar
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                    (Project Manager)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="pt-14 pb-2 text-[18px] font-[500] text-[#2c3441] font-[Poppins]">
            Team
          </h4>
          <div className="pt-2 flex overflow-x-auto gap-[19px]">

            <div className=" main flex-shrink-0 group ">
              <div className="overflow-hidden">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={ABHISHEK}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/abhishek-pandey-in008/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                    Abhishek Pandey
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] text-[16px] text-[#5f5e5e] pb-1 font-[400]">
                      Lead Code Wizard
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                    (App Developer)
                  </p>
                </div>
              </div>
            </div>

            <div className=" main flex-shrink-0 group ">
              <div className="">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={AMIT}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/abhitsparq/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                  Amit Kumar
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] text-[16px] text-[#5f5e5e] pb-1 font-[400]">
                    Creative Maestro
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                  (UI/UX Designer)
                  </p>
                </div>
              </div>
            </div>

            <div className=" main flex-shrink-0 group ">
              <div className="">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={AFJAL}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/afjal-husain-13bbb718a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                  Afjal Hussain
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] font-[400] text-[16px] text-[#5f5e5e] pb-1">
                    Programmer
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                  (Full Stack Developer)
                  </p>
                </div>
              </div>
            </div>
            
            <div className=" main flex-shrink-0 group ">
              <div className="">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={AKANSHA}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/akanksha-tripathi-766592223/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                  Akanksha Tripathi
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] font-[400] text-[16px] text-[#5f5e5e] pb-1">
                    Brand Warrior
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                  (Digital Marketing)
                  </p>
                </div>
              </div>
            </div>

            <div className=" main flex-shrink-0 group ">
              <div className="">
                <div className="relative rounded-[10px]    overflow-hidden ">
                  <Image
                    src={PRIYANKA}
                    alt=""
                    className=" grayscale group-hover:grayscale-0 duration-300 h-[258px] w-[201px] group-hover:scale-110 "
                  />

                  <div className="absolute pb-5 z-30 h-full flex-col flex justify-end items-center -bottom-full  translate-y-full group-hover:translate-y-0 duration-500 inset-0 bg-gradient-to-b from-50% to-[99%]   from-transparent to-[rgba(0,0,0,.5)]">
                    <div className="flex gap-3 justify-center items-center">
                    <a
                        className="text-white"
                        href="https://twitter.com/@PriyankaNPMOI"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={twitter} alt={twitter} />
                      </a>
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/priyanka-kumari-926a1a295/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={linkedIn} alt={linkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-[Poppins] font-[500] text-[18px] text-[#2c3441] pt-5 pb-1 group-hover:text-primary">
                  Priyanka Kumari
                  </h4>
                  <p className="font-[Poppins]">
                    <span className=" font-[Poppins] font-[400] text-[16px] text-[#5f5e5e] pb-1">
                    Web Master
                    </span>
                  </p>
                  <p className="font-[Poppins] text-[16px] text-[#5f5e5e] font-[400]">
                  (Client Success Manager)
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default OurLeadership;
