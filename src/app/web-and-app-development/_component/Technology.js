import React from "react";
import Image from "next/image";

const data = [
  {
    img: "/assets/images/case-study/r1.png",
    heading: "Vue JS",
  },
  {
    img: "/assets/images/case-study/r2.png",
    heading: "Jquery",
  },
  {
    img: "/assets/images/case-study/r3.png",
    heading: "ER Lang",
  },
  {
    img: "/assets/images/case-study/rr1.png",
    heading: "Postgre Sql",
  },
  {
    img: "/assets/images/case-study/r5.png",
    heading: "React.JS",
  },
  {
    img: "/assets/images/case-study/r6.png",
    heading: "Docker",
  },
  {
    img: "/assets/images/case-study/rr1.png",
    heading: "MySQL",
  },
  {
    img: "/assets/images/case-study/r8.png",
    heading: "AWS Services",
  },
  {
    img: "/assets/images/case-study/r9.png",
    heading: "Mongo DB",
  },
  {
    img: "/assets/images/case-study/r10.png",
    heading: "React.JS",
  },
  {
    img: "/assets/images/case-study/r11.png",
    heading: "Laravel",
  },
  {
    img: "/assets/images/case-study/r12.png",
    heading: "Next.JS",
  },
  {
    img: "/assets/images/case-study/r13.png",
    heading: "Flutter",
  },
  {
    img: "/assets/images/case-study/r14.png",
    heading: "Ruby",
  },
  {
    img: "/assets/images/case-study/r15.png",
    heading: "Kubernetes",
  },
  {
    img: "/assets/images/case-study/r16.png",
    heading: "Python",
  },
  {
    img: "/assets/images/case-study/r17.png",
    heading: "Kibana",
  },
  {
    img: "/assets/images/case-study/r18.png",
    heading: "Php",
  },
];

const Technology = () => {
  return (
    <>
      <div className="w-full bg-[#F6F6F6]">
        <div className="container">
          <div className="md:text-end text-start space-y-5 pt-10">
            <h2 className="md:text-[40px] text-[32px] text-[#2C3441] font-[700] font-[Poppins]">
              <span className="md:text-[40px] text-[32px] text-[#eb7373] font-[700]">
                Technology
              </span>{" "}
              We Play With
            </h2>
            <p className="text-[18px] text-[#7B7B7B] font-[Poppins]">
              Unlocking True Potential of Modern Tools
            </p>
          </div>
          <div className="md:grid flex xl:grid-cols-9 md:grid-cols-6 gap-12 place-items-center pt-16 pb-12 md:overflow-x-hidden overflow-x-scroll">
            {data.map((item, index) => (
              <div key={index}>
                <div className="">
                  <Image
                    src={item.img}
                    height={50}
                    width={50}
                    alt="icons"
                    className="h-[50px] w-[50px]"
                  />
                   </div>
                 
                   <h3 className="mt-2 w-[50px] h-[50px] text-[18px] font-[500] text-[#2c3441] font-[Quicksand] text-center">{item.heading}</h3>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Technology;
