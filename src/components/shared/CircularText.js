/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
const TradeMark = ({
 width = 200,
 height = 200,
 imgWidth = "auto",
 rotateWhileInView = true,
 dark = true,
 text = "company of the year . Best Software consulting ",
 fontWeight=500,
 size=32,
 shadow="none",
 textStyles={},
 imgClassName="",
 containerClass=""
}) => {
 const [roatateLogo, setRoatateLogo] = useState(false);
 const logo = useRef(null);
 const imgClasses = twMerge("    transition-all duration-500 absolute  ",imgClassName)
 const conatainerClasses = twMerge("relative grid grid-cols-1 place-items-center w-[200px] h-[200px] rounded-full ",containerClass) 

 useEffect(() => {
    if (logo.current && rotateWhileInView) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) setRoatateLogo(true);
      });

      observer.observe(logo.current, {
        rootMargin: "0 0 50px 0",
      });

      return () => logo.current && observer.unobserve(logo.current);
    }
 }, [logo.current, rotateWhileInView]);
 let angle = 360 * (text.length / 933);
 return (
    <div ref={logo} className={conatainerClasses}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={width}
        height={height}
        className="absolute"
      >
        <defs>
          <path
            id="textcircle"
            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300z"
            transform="rotate(12,250,250)"
          />
        </defs>
        <g className="textcircle">
          <text
            textLength="933"
            fontWeight="400"
            fill="#2C3441"
            fontSize="50"
            letterSpacing="2"
          className=" spin-logo  "
          >
            <textPath
              xlinkHref="#textcircle"
              aria-label="creativedevelopmentagency"
              fontSize={size}
             
              fontWeight={fontWeight}
              style={{ textShadow: shadow,...textStyles }}
              rotate={angle}
            >
              {text}
            </textPath>
          </text>
        </g>
      </svg>
      <img
        src={
          dark
            ? "/assets/images/transparent_logo.svg"
            : "/assets/images/Frame.svg"
        }
        className={imgClasses}
        width={imgWidth}
       
        
      />
    </div>
 );
};

export default TradeMark;