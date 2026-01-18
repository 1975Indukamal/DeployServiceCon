"use client"
import {  MdOutlineArrowRightAlt, } from "react-icons/md"
import { BsArrowLeft } from "react-icons/bs";
import type { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  text?: string,
  reverseIcon?: boolean
}

const Button = ({ className = "", text = "",reverseIcon=false, ...rest }: IButtonProps) => {
  const styles = twMerge("relative w-max group  rounded-full py-3 px-4 border border-primary transition-all duration-500 flex group items-center text-primary hover:text-body  hover:bg-primary hover:border-white space-x-1 ", className)
  return (
    <button className={styles} {...rest} >
      <span className=" text-sm">{text}</span>
      <div className="w-[40px] h-[20px] pl-[15px] pr overflow-hidden relative">
        <span className={` text-primary  absolute   top-1/2 right-1  -translate-y-1/2  group-hover:-right-full  transition-all duration-500`}>
       <MdOutlineArrowRightAlt className={reverseIcon?"rotate-180":""} size={30} />
        </span>
        <span className={` text-primary absolute   top-1/2 -left-full delay-75  -translate-y-1/2  group-hover:-left-[7%] group-hover:text-body transition-all duration-500`}>
       <MdOutlineArrowRightAlt className={reverseIcon?"rotate-180":""} size={30} />
        </span>
      </div>
    </button>

  )
}

export default Button
