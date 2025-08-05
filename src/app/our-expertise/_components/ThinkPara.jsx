import Button from "@/Components/UI/Button";
import Link from "next/link";

const ThinkPara = () => {
  return (
    <section>
      <div className="container flex  items-center gap-6 flex-col mt-20 text-center mb-[40px]">
        <h2 className="  font-Quicksand  font-light  xl:text-[58px] lg:text-[50px] text-[32px] leading-20  ">
          Think we are on the same wave length?{" "}
          <span className="text-[dark]">Let’s talk!</span>
        </h2>
        <p className=" w-5/4  text-[#5F5E5E]">
          Get to know each other a little better, chat about your goals, the
          design process, our work samples, and ux in general.
        </p>
<Link href="/contact-us">
        <Button text="Let's Get Started" className="space-x-5 "/></Link>
      </div>
    </section>
  );
};

export default ThinkPara;
