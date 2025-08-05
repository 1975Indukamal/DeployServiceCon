// import Button from "./Button";
// import React from "react";

// const data = [
//   {
//     heading: "Finished Projects",
//     rating: "1500+",
//     desc: "Successfully developed and deployed more than 500 projects",
//   },
//   {
//     heading: "Success Rate",
//     rating: "95%",
//     desc: "Our forte is to exceed expectations, delivering results that speak for themselves.",
//   },
//   {
//     heading: "Happy Clients",
//     rating: "1K+",
//     desc: "Proudly served more than 1000 clients, and their smiles tell a thousand stories.",
//   },
//   {
//     heading: "Cups of Coffee",
//     rating: "30K+",
//     desc: "SBecause we love having business discussions over coffee. ",
//   },
// ];

// const RevenueBusiness = () => {
//   return (
//     <>
//       <div className="w-full bg-[#F6F6F6] md:mb-[100px] mb:10 py-[68px] md:mt-[100px] mt-10">
//         <div className="container md:flex block  items-center xl:gap-20 md:gap-5">
//          <div>
//           <h2 className="md:text-[38px] text-[30px] text-[#202124] md:leading-[58px] leading-[40px] font-[Quicksand] mb-5 md:mb-0">
//             We have helped{" "}
//             <span className="md:text-[38px] text-[30px] md:font-[600] font-[500]">
//               businesses
//             </span>{" "}
//             increase their{" "}
//             <span className="md:text-[38px] text-[30px]  md:font-[600] font-[500]">
//               revenue
//             </span>{" "}
//             on average{" "}
//             <span className="md:text-[38px] text-[30px]  md:font-[600] font-[500]">
//               by 90%
//             </span>{" "}
//             in their first year with us!
//           </h2>
//          <Button/>
//           </div>
//           <div className="md:grid grid-cols-2 xl:gap-[50px] gap-2 space-y-5 md:space-y-0 ">
//             {data.map((item, index) => (
//               <div key={index}>
//                 <div className="md:space-y-3 space-y-0 text-center md:mt-0 mt-20">
//                   <p className="text-[16px] text-[#2C3441] font-[Poppins] font-[500] md:mb-0 mb-[15px]">
//                     {item.heading}
//                   </p>
//                   <span className="xl:text-[58px] md:text-[40px] text-[58px] text-[#eb7373] font-[500] font-[Quicksand] xl:leading-[58px] leading-[40px] md:mb-0  mb-[15px]">
//                     {item.rating}
//                   </span>
//                   <p className="text-[14px] text-[#5F5E5E] font-[300] font-[Poppins]">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default RevenueBusiness;


import React from "react";
import Button from "./Button";

const data = [
  {
    heading: "Driven by Vision",
    desc: "We're a passionate team fueled by innovation, not vanity metrics. Every line of code we write is built for impact.",
  },
  {
    heading: "Built for Growth",
    desc: "Our process is future-proof—designed to scale as your business does, whether you're a startup or a growing brand.",
  },
  {
    heading: "Client-Centric Approach",
    desc: "We listen deeply, adapt quickly, and prioritize your goals. Collaboration is at the core of everything we do.",
  },
  {
    heading: "Quality Over Quantity",
    desc: "While we're new to the game, we don't rush projects—we perfect them. Because your first impression is everything.",
  },
];

const RevenueBusiness = () => {
  return (
    <>
      <div className="w-full bg-[#202124] py-[68px] md:mt-[50px] mt-10 mb-10">
        <div className="container md:flex md:flex-col lg:flex-row block items-center xl:gap-20 md:gap-10">
          <div className="mb-10 md:mb-0">
            <h2 className="md:text-[38px] text-[30px] text-body md:leading-[58px] leading-[40px] font-[Quicksand]">
              We may be new, but our
              <span className="md:font-[600] font-[500] text-primary font-[Quicksand]"> dedication</span>,
              <span className="md:font-[600] font-[500] text-primary font-[Quicksand]"> skill</span>, and
              <span className="md:font-[600] font-[500] text-primary font-[Quicksand]"> strategy</span> are battle-tested.
            </h2>
            <p className="text-[16px] text-body mt-4 mb-6 font-[Poppins] leading-7">
              At ServiceConnekt, we believe trust is earned through results and relationships. We're not here to impress with big numbers—we're here to deliver real value, one solution at a time.
            </p>
            <Button />
          </div>
          <div className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0">
            {data.map((item, index) => (
              <div key={index} className="bg-body border-2 border-primary p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                <h3 className="text-[#2C3441] text-[18px] font-[600] font-[Quicksand] mb-2">
                  {item.heading}
                </h3>
                <p className="text-[#5F5E5E] text-[15px] font-[Poppins] leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueBusiness;

