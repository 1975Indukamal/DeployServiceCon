import React from 'react'
import Button from "@/Components/UI/Button"
import Link from 'next/link'
const Discruptive = () => {
  return (
    <section className='container'>
 <div className="mx-auto max-w-[1170px] mt-[100px] mb-[100px]">
          <h2 className="text-[#2c3441] font-Quicksand  md:text-[40px]  text-[30px] font-[400] mb-[20px]  ">
            Have A {""}
            <span className="text-primary  font-[Quicksand]  md:text-[40px]  text-[30px] font-[400] ]  ">
              Disruptive Business {""}
            </span>
            Concept In Mind?
          </h2>
          <p className=" text-[#2C3441] font-[Poppins] text-base  leading-7  text-[18px] md:max-w-[975px] max-w-[401px] font-normal">
            We are more than just a development company. Together we can dive
            deeper into your ideas and then walk you through the process of
            defining your vision, thereby connecting you with the workforce to
            pump life into your idea.
          </p>
         
          <div className="mt-3">
          <Link href="https://calendly.com/hexabells_schedule_call/schedule-a-call" target="_blank"
            rel="noopener noreferrer">
            <Button text="Book an intro call"/></Link>
          </div>
          <div/>
          </div>
    </section>
  )
}

export default Discruptive