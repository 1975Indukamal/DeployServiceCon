import React from "react";
import Image from "next/image";
import web1 from "../../../../public/assets/images/experties/web1.svg";
import web2 from "../../../../public/assets/images/experties/mobile1.svg";
import web3 from "../../../../public/assets/images/experties/general1.svg";

const Technologies = () => {
  return (
    <section>
      <div className="container overflow-hidden mt-[55px] ">
        <div className="row">
          <div className="mb-[100px] text-center">
            <div className="flex justify-center">
              <h2 className="leading-[60px] max-w-[1002px] ">
              
                <span className=" font-[Quicksand]    xl:text-[58px] lg:text-[50px] text-[32px]  font-medium leading-20 text-center">
                  Technologies and Tools
                </span>
                <span className=" font-[Quicksand]      xl:text-[58px] lg:text-[50px] text-[32px]   font-light leading-20 mb-4">
                  {" "}
                  we are well versed in
                </span>
              </h2>
            </div>
            <span className="text-primary font-[Poppins] text-base text-[18px] font-medium leading-7 uppercase text-center">
              Our Tech. stack
            </span>
            <p className="text-center text-Text-Primary font-poppins font-light leading-8 ">
              Our developers use the best available technologies and embrace new
              ones.
            </p>

            <div className="flex gap-8 lg:justify-center sm:justify-normal mt-12 overflow-x-auto">
              <div className="w-64 max-w-max-md bg-Light  ">
                <Image
                  src={web1}
                  alt="web technology"
                  className="min-w-full max-w-none mt-neg-5 bg-white "
                />
              </div>
              <div className="w-64 max-w-max-md bg-Light p-t-15">
                <Image
                  className="min-w-full max-w-none mt-neg-5 bg-white "
                  src={web2}
                  alt="mobile technology"
                />
              </div>
              <div className="w-64 max-w-max-md bg-Light p-t-15 ">
                <Image
                  className="min-w-full max-w-none mt-neg-5 bg-white"
                  src={web3}
                  alt="general tecghnology"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Technologies;
