import Button from "@/Components/UI/Button";
import Link from "next/link";

const HeadingToTurn = () => {
  return (
    <section className="container">
      <div className=" mt-[82px]">
        <div className=" mx-auto">
          <div className="flex items-start  flex-col md:flex-row  ">
            <div className="md:w-2/4">
              <div className="">
                <h2 className="text-body xl:text-[58px] lg:text-[50px] text-[32px] font-light xl:leading-[80px] lg:leading-[72px] leading-[45px]">
                  From Vision to{" "}
                  <span className="text-primary font-[Quicksand]  xl:text-[58px] lg:text-[50px] text-[32px] font-normal  xl:leading-[80px] lg:leading-[72px] leading-[45px]">
                    Real-World Impact
                  </span>
                </h2>
              </div>
            </div>
            <div className="md:w-2/4">
              <div className="mt-[13px] mb-[20px] ">
                <span className="text-primary font-[Poppins] text-lg lg:font-normal font-light leading-normal uppercase">
                  Smart Service Infrastructure
                </span>
                <p className="text-body font-[Poppins] text-base font-normal leading-[28px] ">
                  <span className="text-body font-poppins text-base font-normal leading-7 mt-10">
                    ServiceConnect bridges the gap between people and reliable services
                  </span>{" "}
                  by enabling digital access, seamless engagement, and optimized delivery — all within a single platform. 
                  <br />
                  Whether you’re a provider scaling your operations or a user looking for efficiency and trust, our technology empowers you to take the next step with clarity and confidence.
                </p>
              </div>
              <div className="lg:mt-[30px] xl:mt[30px] mt-[20px]">
                <Link
                  href="https://calendly.com/hexabells_schedule_call/schedule-a-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button text="Book An Intro Call" className="space-x-5 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingToTurn;
