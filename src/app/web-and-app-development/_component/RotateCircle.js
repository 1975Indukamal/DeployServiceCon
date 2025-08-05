import React from "react";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";


const RotateCircle = () => {
  return (
    <>
      <div className="relative mt-10  xl:w-[500px] xl:h-[500px] xl:block hidden">
        <div
          className="absolute 
        inset-0 m-auto rounded-full border-[2px] border-[#D9D9D9]
        animate-[spin_7s_infinite_linear]  md:h-[500px] md:w-[500px] w-full h-full  "
        >
          <div className="absolute top-[15.2rem] -left-[10px]">
            <MdStarRate size={20} color="#fff" />
          </div>
          <div className="absolute bottom-[10.2rem] right-0">
            <FaCircle  color="#fff" />
          </div>
         
          <div className="absolute bottom-[30.5rem] left-[215px]">
            <MdStarRate size={20} color="#fff" />
          </div>
        </div>

        <div className="absolute  inset-0 m-auto rounded-full border-[2px] border-[#D9D9D9] h-[400px]  w-[400px] animate-[spin_7s_infinite_reverse_linear]">
          
          <div className="absolute top-[5.2rem] left-5">
        <MdStarRate color="#fff"/>
        </div>
        <div className="absolute top-[5.2rem] right-5">
        <MdStarRate size={20} color="#fff"/>
        </div>
        <div className="absolute bottom-5 left-[5.7rem]">
        <FaCircle color="#fff"/>
        </div>
        {/* <div className="absolute bottom-[5.2rem] right-5">
        <FaCircle color="#fff"/> */}
        {/* </div> */}
        </div>
        <div className="absolute  inset-0 m-auto rounded-full animate-[spin_7s_infinite_linear] border-[2px] border-[#D9D9D9] h-[300px] w-[300px]  z-50">
       
            <div className="absolute top-10 right-6">
            <MdStarRate size={20} color="#fff" />
          </div>
          <div className="absolute bottom-10 right-6">
            <FaCircle  color="#fff" />
          </div>
          <div className="absolute top-10 left-6">
            <MdStarRate size={20} color="#fff" />
          </div>
          <div className="absolute bottom-10 left-7">
            <FaCircle color="#fff" />
          </div>
        </div>
        <div className="absolute  inset-0 m-auto rounded-full animate-[spin_7s_infinite_reverse_linear] border-[2px] border-[#D9D9D9] h-[200px] w-[200px] bg-[#D9D9D9] ">
        
             <div className="absolute top-10 left-0">
            <MdStarRate size={20} color="#fff" />
          </div>
          <div className="absolute bottom-10 right-0">
            <FaCircle  color="#fff" />
          </div>
          {/* <div className="absolute top-10 right-0">
            <MdStarRate size={20} color="#fff" />
          </div> */}
         
        </div>
      </div>
    </>
  );
};
export default RotateCircle;
