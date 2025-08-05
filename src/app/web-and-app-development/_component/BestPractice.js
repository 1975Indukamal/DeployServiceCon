import React from "react";
import Image from "next/image";

const BestPractice = () => {
  return (
    <>
      <div className="relative">
        <div className="container">
          <div className="w-[80%] max-w-[1000px] z-10  h-full absolute bg-[#F6F6F6] right-0 md:-top-5 top-0">
            {" "}
          </div>
          <div className="md:flex md:gap-10 z-20 relative block gap-2">
            <div className="xl:w-[60%] w-[100%] h-[100%] md:mb-0 mb-2  object-cover">
            <Image
              src="/assets/images/case-study/best.png"
              height={400}
              width={400}
              alt="best"
              className="w-[400px] h-[400px] md:h-[300px] "
            />
            </div>
            <div>
              <h2 className="xl:text-[40px] text-[32px] text-[#2C3441] font-[600] font-[Poppins] leading-[40px]">
                Re-imagining Development <br className="xl:block hidden"/> Solutions with the{" "}
                <span className="xl:text-[40px] text-[32px]  text-[#eb7373] xl:font-[700] font-[700]">
                  Best Practices
                </span>
              </h2>
              <span className="xl:text-[18px] text-[16px] text-[#2C3441] xl:font-[600] font-[500] font-[poppins]">- To Solve Business Challenges of the Future</span>
              <p className="xl:text-[18px] text-[16px] text-[poppins] text-[#7B7B7B]">
                Elevate your user experience by infusing business intelligence
                in your digital products through a data-driven and
                result-oriented approach.
              </p>
              <p className="xl:text-[18px] text-[16px] text-[poppins] text-[#7B7B7B]">
                We dont just create websites and apps; we craft meaningful
                experiences that resonate with users, leaving a lasting
                impression and building strong connections for driving
                conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BestPractice;
