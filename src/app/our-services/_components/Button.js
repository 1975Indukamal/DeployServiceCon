"use client"
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const Button = ({ text = "",className="",...rest }) => {
  const classes  = twMerge("max-w-[183px] py-[10px] px-[10px] text-center rounded-[20.5px] border-body text-body border-[1.5px] border-solid cursor-pointer mt-10 duration-300 hover:bg-yellow-600 duration-300 relative z-10 hover:text-[#fff] hover:border-[#fff]",className)
  return (
    <Link href="/contact-us">
    <button  className={classes}  {...rest} >
      {text || "Book an Intro Call"}
    </button>
    </Link>
  );
};
export default Button;
