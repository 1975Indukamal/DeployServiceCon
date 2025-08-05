import React from 'react'

const Factual = () => {
  return (
    <section>
      
        
      <h3 className="text-primary  text-[20px] font-medium">Factual Talk</h3>
        <h6 className="md:text-[38px] text-[30px]">
          We have a proven{" "}
          <span className="font-[500] font-[Quicksand]"> track record </span>
          of <span className="font-[400]">success.</span>
        </h6>
        <div className="flex md:justify-end justify-start flex-col md:flex-row md:space-x-12  space-x-0  mt-12 ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-14 xl:pl-[265px] lg:pl-[120px] pl-0">
            <div className="">
              <h3 className="text-[18px] font-[600]">Success Rate</h3>
              <span className="text-primary text-[58px] my-3 font-[Quicksand] font-[600]">
                95%
              </span>
              <p className="text-secondary text-[16px] w-full">
                Our forte is to exceed expectations, delivering results that
                speak for themselves.
              </p>
            </div>

            <div className="">
              <h3 className="text-[18px] font-[600]">
                Cutting-Edge Technologies
              </h3>
              <span className="text-primary text-[58px] my-3 font-[Quicksand] font-[600]">
                50<sup className="text-[40px]">+</sup>
              </span>
              <p className="text-secondary text-[16px]">
                We stay ahead of the curve, harnessing the power of the latest
                tools to build tomorrow's solutions today.
              </p>
            </div>

            <div className="">
              <h3 className="text-[18px] font-[600]">Net Promoter Score</h3>
              <span className="text-primary text-[58px] my-3 font-[Quicksand] font-[600]">
                90<sup className="text-[40px]">+</sup>
              </span>
              <p className="text-secondary text-[16px]">
                Our clients don't just like our work and professionalism, they
                are generally not tired of raving about us.
              </p>
            </div>

            <div className="">
              <h3 className="text-[18px] font-[600]">Passionate Experts</h3>
              <span className="text-primary text-[58px] my-3 font-[Quicksand] font-[600]">
                60<sup className="text-[40px]">+</sup>
              </span>
              <p className="text-secondary text-[16px]">
                Our team with diverse backgrounds and expertise bring a wealth
                of experience and fresh perspectives to the table.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-solid border-secondary my-20" />

    </section>
  )
}

export default Factual