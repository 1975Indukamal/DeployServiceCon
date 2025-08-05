"use client"
import Image from "next/image"
import { useRef, useState } from "react"
import { IoIosArrowRoundForward } from "react-icons/io";
interface propTypes {
    title?: string, img?: string, desc?: string, index?: number
}
const FlipperList = (
    {
        title = "Web Design & Development",
        img = "/assets/images/work/brand.svg",
        desc = `We prioritise user-centric approach to provide engaging experience backing with best Tech. Stack.`,
        index = 1
    }
        : propTypes) => {
    const [isActive, setIsActive] = useState(false)
    const imgRef = useRef<HTMLImageElement | null>(null)
    return (
        <div onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="  group gap-y-5 gap-x-5 grid items-center md:grid-cols-[1.5fr_3fr_1fr] grid-cols-1 pb-10 border-b border-[#DFDFDF] relative" >
            <div className="flex space-x-5 items-start">
                {/* <span className="group-hover:text-primary text-2xl text-secondary " >
                    {index > 9 ? index : `0${index}`}
                </span> */}
                <h3 className="group-hover:text-primary duration-300 text-[28px] text-secondary  leading-normal " >
                {title.split(" ").length === 2 ? (

<>
    {title.split(" ")[0]} <br /> {title.split(" ")[1]}
</>
) : (
title
)}
                </h3>
            </div>
            <p className="ml-0 text-[18px] text-[#2C3441] " >
                {desc}                
            </p>
            <div className="flex items-end justify-end">
            <button className="w-12 h-12 rounded-full grid place-items-center border border-[#DFDFDF] text-body  " >
                <IoIosArrowRoundForward size={28} />
            </button>
            </div>
            <div ref={imgRef} className={`h-[250px] w-[200px] absolute hidden md:block -rotate-12 -top-3/4 right-0   duration-500   ${isActive ? "animate-flip" : " scale-0  "} `}>
            <Image className="h-[250px] w-[200px] rounded-[20px] object-cover"  src={img} alt="work" width={200} height={200} />
            </div>
        </div>
    )
}

export default FlipperList