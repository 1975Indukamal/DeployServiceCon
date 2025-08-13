// import React from 'react'
// import Image from "next/image";
// import Girl22 from "../../../../public/assets/images/about-us/Ladki.webp";
// import Dart22 from "../../../../public/assets/images/about-us/Dart.webp";

// const MissionVision = () => {
//   return (
//     <section>
//        <h2 className="text-[38px] mb-4 mt-5 font-medium">Mission & Vision</h2>

// <hr className="border-t-2 border-solid border-primary w-20 mb-7" />
// <div className=" font-light max-w-[588px] text-secondary text-[16px]">
//   <p className="mb-5 ">
//     Hexabells Technologies is a competent software development company a
//     valuable partner to you by rapidly producing software solutions.
//   </p>
//   <p className='md:pb-10 pb-0'>
//     Innovation, Transparency, and Agility are our three guiding
//     principles and are at the heart of all interactions between our
//     personnel and clients.
//   </p>
// </div>
// <div className=" flex flex-col md:flex-row justify-center items-center gap-[160px] md:gap-5">
//   <div className=" bg-light-primary pt-5 px-[35px] w-full max-w-[401px] md:max-w-[454px] lg:max-w-[560px] h-full max-h-[387px] md:max-h-[397px] lg:max-h-[474px] rounded-xl mt-[80px] border ">
//     <h3 className="text-primary mb-2 text-[18px] underline font-medium inline-block">
//       Mission
//     </h3>
//     <p className="text-dark-primary text-[16px] mb-[30px] font-[Quicksand]">
//       One-stop destination for modern organisations to get their hands
//       on the best of technology and digital solutions for sustainable
//       growth.
//     </p>
//     <Image
//       className="-mb-[50px] w-full lg:w-[400px] md:w-[370px]  lg:h-[300px] md:h-[250px] h-full"
//       src={Dart22}
//       alt=""
//     />
//   </div>
//   <div className=" border bg-light-primary px-[35px] lg:pe-[10px] w-full max-w-[401px] md:max-w-[454px] lg:max-w-[560px]  h-full max-h-[387px] md:max-h-[397px] lg:max-h-[474px] rounded-xl">
//     <Image
//       className="-mt-[50px] w-full lg:w-[400px] md:w-[350px] lg:h-[300px] md:h-[250px] h-full rounded-xl  md:pt-0"
//       src={Girl22}
//       alt=""
//     />
//     <h3 className="text-primary mt-[30px] mb-5 text-[18px] underline font-medium inline-block  ">
//       Vision
//     </h3>
//     <p className="font-light text-[16px] pb-10 font-[Quicksand]">
//       Be the Technology Enabler and the Change Catalyst for partner
//       businesses and pave the way for a better, digital future.
//     </p>
//   </div>
// </div>
//     </section>
//   )
// }

// export default MissionVision


import React from 'react';
import Image from 'next/image';
import Girl22 from '../../../../public/assets/image/our-services/4.webp';
import Dart22 from '../../../../public/assets/image/our-services/6.webp';

const MissionVision = () => {
  return (
    <section className="bg-custombgc text-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-[36px] md:text-[48px] font-bold mb-2 font-[Quicksand]">
          Fueling Progress Through <span className="text-yellow-600">Purpose</span>
        </h2>
        <p className="text-yellow-600 text-[16px] max-w-2xl mx-auto font-light">
          At ServiceConnect, our mission and vision are more than just words—they’re a promise to create real, lasting value in everything we do.
        </p>
        <hr className="w-20 mx-auto border-t-2 border-yellow-600 mt-6" />
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Mission Card */}
        <div className="bg-white text-custombgc rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-[22px] font-semibold underline decoration-yellow-600 mb-4">
              Our Mission
            </h3>
            <p className="text-[16px] font-[Quicksand] mb-6 leading-7">
              To be a trusted innovation partner—delivering powerful, tailored digital solutions that help businesses grow faster, smarter, and stronger in a rapidly evolving world.
            </p>
          </div>
          <Image
            src={Dart22}
            alt="Mission Illustration"
            className="rounded-lg mt-4"
          />
        </div>

        {/* Vision Card */}
        <div className="bg-white text-custombgc rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col justify-between">
          <Image
            src={Girl22}
            alt="Vision Illustration"
            className="rounded-lg mb-6"
          />
          <div>
            <h3 className="text-[22px] font-semibold underline decoration-yellow-600 mb-4">
              Our Vision
            </h3>
            <p className="text-[16px] font-[Quicksand] leading-7">
              To shape a digital-first future where businesses, regardless of size or stage, have access to breakthrough technologies that empower their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
