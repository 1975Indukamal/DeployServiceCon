

import React from "react";
import Button from "@/Components/UI/Button";
import Link from "next/link";

const Page = () => {
  
    return (
        <div className="h-screen flex items-center justify-center">
        <div className="max-w-screen-xl shadow-md p-8 rounded-lg block mx-auto mt-6 mb-6 font-montserrat">
               <div className='max-w-full'>
                <div className='p-0'>
                  
                    <div className='p-[15px]'>
                        <h1 className="text-[26px] sm:text-[36px] text-center font-medium text-[#212529]">Thank You for Choosing Us to Build Your <br /><span className="text-[35px] sm:text-[45px] text-primary">Digital Dreams!</span></h1>
                        {/* <h1><span>Thank You</span> for Choosing Us to Build Your Digital Dreams!</h1>  */}
                        <p className="text-[14px] text-center">Our team of experts is gearing up to connect with you very soon. Get ready to dive into the world of possibilities!</p>
                    </div>
                    <div className='border-t border-gray-300 pt-6 mt-6 mb-1'>
                        <a href="http://localhost:3000/" className="h-[52px] w-[200px] rounded-full bg-primary flex items-center justify-center text-white font-semibold no-underline mx-auto my-auto shadow hover:no-underline">Visit our Website</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Page;

