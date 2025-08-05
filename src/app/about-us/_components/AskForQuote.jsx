import React from 'react'
import Button from "@/Components/UI/Button";
import Link from 'next/link';

const AskForQuote = () => {
  return (
    <section>
        
        <div className="flex flex-wrap text-body md:gap-5 pt-14">
          <div className="md:flex-1">
            <h2 className="xl:text-[50px] lg:text-[48px] md:text-[38px] text-[32px] font-light ">
            ServiceConnekt: <span className="text-primary font-light"> Digital Powering </span>{" "}
                Possibilities
            </h2>
          </div>
          <div className="md:flex-1 ">
            <p className="text-[18px] mb-8 font-[200]">
            We don’t just build digital solutions—we build your competitive edge. At ServiceConnekt, our expert team fuses smart design, advanced tech, and bold strategy to help your business thrive in the digital world. Let’s turn your vision into impact.
            </p>
            <Link href="/contact-us">
            <Button text="Ask for a Quote" className="space-x-5 "  /></Link>
          </div>
        </div>
        <hr className="border-solid border-secondary my-20" />
    </section>
  )
}

export default AskForQuote