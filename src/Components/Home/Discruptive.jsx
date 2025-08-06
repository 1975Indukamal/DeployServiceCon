import Button from "@/Components/UI/Button";
import Link from "next/link";


const Discruptive = () => {
  return (
    <section className="container">
      <div className="mx-auto mt-[80px] mb-[20px]">
        <h2 className="text-body font-Quicksand  md:text-[48px] text-[30px] font-[400] mb-[20px]  ">
        Got a{" "}
          <span className="text-primary  font-[Quicksand]  md:text-[48px] text-[30px] font-[400] ]  ">
          Game-Changing Idea{" "}
          </span>
          Ready to Launch?
        </h2>
        <p className=" text-body font-[Poppins] text-base  leading-7  text-[18px] font-normal">
        At ServiceConnekt, we go beyond development. We partner with you to refine your vision and connect you with a talented team dedicated to turning your innovative concepts into impactful digital solutions.
        </p>

        {/* <div className="mt-3">
        <Link href="https://calendly.com/hexabells_schedule_call/schedule-a-call" target="_blank"
            rel="noopener noreferrer">
          <Button text="Book an intro call" /></Link>
        </div> */}
        <div />
      </div>
      
       </section>
  );
};

export default Discruptive;
