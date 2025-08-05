import React from "react";

const data = [
  {
    heading: "Entrepreneur-Friendly",
    desc: "Helping entrepreneurs build their ideas into high-end robust solutions without setting them back financially. From ideation to launch, we got you.",
  },
  {
    heading: "Project Transparency",
    desc: "Whatever we do, you will be a part of it. That’s one less thing for you to worry about.",
  },
  {
    heading: "Best GDPR Practices",
    desc: "We are not afraid to pursue new technologies to create better app experiences that thrive in the market.",
  },
  {
    heading: "Open Interactions",
    desc: "Address your ideas and concerns freely with the team to ensure the best possible result.",
  },
  {
    heading: "Clean Coding",
    desc: "You won’t find a single sub-par line of code in our product even with an eagle’s eye, and that’s the word from our QA team.",
  },
  {
    heading: "Client-centric",
    desc: "Our team works hand-in-hand to provide the clients with a skate-through experience from conceptualization to launch.",
  },
  {
    heading: "Agile Approach",
    desc: "Tackle business challenges quickly with our agile approach to development, which flexibly adapts to your changing needs.",
  },
  {
    heading: "Lightning-fast Delivery",
    desc: "Leverage the power of timely product release and get early adopters for your app with our on-time & fast product delivery.",
  },
  {
    heading: "Security Compliance",
    desc: "We lock your data with solid security features so that no third party can peep into you or your client’s info without authorization.",
  },
];

const Hexadetails = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex  items-center gap-2">
              <div className="text-[18px] text-[#7b7b7b] font-[500]">0{index + 1}</div>
              <span className="h-[2px] w-5 bg-[#2c3441]"></span>
              <h3 className="text-[22px] text-[#eb7373] font-[550] font-[Helvetica]">
                {item.heading}
              </h3>
            </div>
            <p className="md:text-[18px] text-[16px] text-[#2c3441] font-[Helvetica]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hexadetails;
