import React from "react";
import Image from "next/image";

const data = [
  {
    img: "/assets/images/case-study/1.webp",
    heading: "Web Development",
    desc: "We craft captivating websites that mesmerize your audience while delivering seamless user experiences.",
    points: ["Dynamic Websites", "eCommerce Platforms", "Custom Web-based Portals", "Progressive Web Apps"],
  },
  {
    img: "/assets/images/case-study/2.webp",
    heading: "App Development",
    desc: "Elevate your brand with immersive, user-centric mobile applications that create lasting impressions.",
    points: ["Native Apps", "Hybrid Apps", "Cross-Platform Apps", "Lite Apps"],
  },
  {
    img: "/assets/images/case-study/3.webp",
    heading: "Custom Software Development",
    desc: "From vision to reality, our solutions are tailor-made to amplify your business processes.",
    points: ["ERP & CRM Solutions", "Data Management Tools", "Content Management Systems", "Business Intelligence Solutions"],
  },
  {
    img: "/assets/images/case-study/4.webp",
    heading: "MVP Development",
    desc: "Test your ideas swiftly and validate with real users to make well-informed business decisions.",
    points: ["Single Feature MVP", "Concierge MVP", "Wizard of Oz MVP", "Piecemeal MVP"],
  },
  {
    img: "/assets/images/case-study/5.webp",
    heading: "Product Reengineering",
    desc: "Elevate your brand with immersive, user-centric mobile applications that create lasting impressions.",
    points: ["Mobile-First Design", "Redesign UI/UX", "Modernize Legacy Systems", "Add Cloud-based Solutions"],
  },
  {
    img: "/assets/images/case-study/6.webp",
    heading: "Maintenance and Support",
    desc: "Deliver continuous support and maintenance to help our clients make the most of it.",
    points: ["SLA-Guarantees", "Regular Maintenance", "Quick Turnaround", "Committed Support"],
  },
];

const ServicesDetails = () => {
  return (
    <>
      <div className="container">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-2 lg:gap-4 xl:gap-6">
          {data.map((items, index) => (
            <div
              key={index}
              className="relative overflow-hidden  group"
            >
              <div className="object-cover ">
                <Image src={items.img} height={425} width={425} alt="image"
                className="h-full w-full"
                />
              </div>
             
              <div className="md:absolute static xl:mt-[14%] md:mt-0 lg:mt-0 -mt-[18%] xl:-bottom-[52%] lg:-bottom-[10rem] md:-bottom-[12rem]
              md:pl-5 pl-0 group-hover:bottom-0   duration-500 mb-2 md:bg-gradient-to-b from-transparent to-black">
                <div className="flex items-center gap-2 xl:mb-3  md:mb-5 mb-5 md:pl-0 pl-3">
                  <span className="rounded-full h-[48px] w-[48px] bg-[#eb7373] text-white text-[18px] flex justify-center items-center ">
                    {index + 1}.
                  </span>
                  <h3 className="text-[#fff] text-[18px] font-[500] ">
                    {items.heading}
                  </h3>
                </div>
                <p className="md:text-[#fff] text-[#2C3441] text-[16px] font-[500] font-[Helvetica Now Text] md:pt-0 pt-4">{items.desc}</p>
                <ul className="md:text-[#fff] text-[#2C3441] text-[16px] font-[600] font-[Helvetica Now Text] mt-3  md:space-y-0 space-y-3">
                  {items.points.map((item, index) => {
                    return (
                      <li key={index} className="flex gap-2 items-center">
                        <span className="rounded-full md:h-[15px] h-[8px] w-[8px] md:w-[15px] bg-[#eb7373] text-white text-[18px] flex justify-center items-center"></span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ServicesDetails;
