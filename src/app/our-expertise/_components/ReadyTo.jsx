import Button from "@/Components/UI/Button";
import Link from "next/link";

const ReadyTo = () => {
  return (
    <section>
      <div className="container ">
        <div className="mx-auto mt-[99px]">
          <h2 className="font-Quicksand xl:text-[58px] lg:text-[50px] text-[32px] text-3xl font-light    leading-[40px]">
            Ready to launch something{" "}
            <span className="text-primary   xl:text-[58px] lg:text-[50px] text-[32px] font-[Quicksand] text-3xl font-thin    ">
              Special?
            </span>
          </h2>
          <p className=" font-[Poppins] text-base  text-[#2C3441] font-normal leading-7 max-w-[600px] mt-7">
            We work as a strategic partner, helping you define your vision and
            then connect you with the workforce to realise it
          </p>
          <div className="mt-[40px]">
            <Link href="https://calendly.com/hexabells_schedule_call/schedule-a-call" target="_blank"
            rel="noopener noreferrer">
            <Button
              text="Book an intro call"
              className="space-x-5 font-[Poppins]  leading-normal"
            /></Link>
          </div>
          <div className="mt-4 "></div>
          <div className="flex items-center pl-3 absolute h-241 w-2/5 right-0"></div>
        </div>
      </div>
    </section>
  );
};

export default ReadyTo;
