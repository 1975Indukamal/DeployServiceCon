import React from 'react'
import Image from "next/image";
import Customer1 from "../../../../public/assets/images/our-work/01/customer1.webp";
import Customer2 from "../../../../public/assets/images/our-work/01/customer2.webp";
import Customer3 from "../../../../public/assets/images/our-work/01/customer3.webp";
import Customer4 from "../../../../public/assets/images/our-work/01/customer4.webp";
import Customer5 from "../../../../public/assets/images/our-work/01/customer5.webp";
import Customer6 from "../../../../public/assets/images/our-work/01/customer6.webp";
import Customer7 from "../../../../public/assets/images/our-work/01/customer7.webp";
import Customer8 from "../../../../public/assets/images/our-work/01/customer8.webp";

const OurStrategey = () => {
  return (
    
    <section>
    <div className="container">
      <div className=" mt-[10px] text-center pb-5">
        <span className=" text-[#2C3441] font-[400] xl:text[38px] lg:text-[35px] md:text-[30px] text-[30px] font-[Quicksand]  leading-[52px] ">
         Our Strategies are Fueled by our Commitment to Excellence and that commitment has given us the opportunities to work with some glorious companies.
        </span>
      </div>
      <div>
        <p className="text-[#EB7373] font-Poppins text-center font-[400] text-[25px] pb-3">
        SOME OF OUR PROMINENT CLIENTS
        </p>
      </div>
      <div>
        <p className="text-[#5f5e5e] text-center text-[18px]  font-Poppins font-[400] pb-20">
          We did a great job for these clients. We can do it for you too.
        </p>
      </div>
      <div className=" grid gap-7  justify-items-center   grid-cols-12  lg:pl-8 lg:pr-8 md:pl-10 md:pr-10 items-center">
        <div className="lg:col-span-3 md:col-span-4 col-span-12 ">
          <Image src={Customer1} alt="community" />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <Image src={Customer2} alt="encore" />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <Image src={Customer3} alt="stilleben" />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <Image src={Customer4} alt="amp private" />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <Image src={Customer5} alt="my doc" />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <Image src={Customer6} alt="hotel wp" />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Image
            src={Customer7}
            className=" block md:ml-auto "
            alt="donor see"
          />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Image src={Customer8} alt="skin over everything" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurStrategey