'use client'

import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { PiPlugsConnectedFill } from "react-icons/pi";
import { motion } from "framer-motion";

interface propTypes {
    text?: string,
    imgWidth?: number,
    imgClassName?: string, 
    img?: string, 
    imgHeight?: number
}

const OffSetTradeMark = ({
    text = "InnovateCreateElevate",
    imgWidth = 42,
    imgClassName = "",
    img = "/assets/images/log.png",
    imgHeight = 42
}: propTypes) => {

    const imgClasses = twMerge("absolute origin-center", imgClassName);

    // Animation for the container
    const containerMotion = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Continuous rotation for the circular text
    const rotateMotion = {
        animate: { rotate: 360 },
        transition: { repeat: Infinity, duration: 20, ease: "linear" }
    };

    return (
        <motion.div
            className='pl-6 sm:ml-[32px] max-w-[587px] w-full py-4 rounded-bl-[102px] rounded-tl-[102px] md:ml-auto bg-primary'
            variants={containerMotion}
            initial="hidden"
            animate="visible"
        >
            <div className="bg-custombgc relative w-44 grid place-items-center grid-cols-1 h-44 rounded-full">
                
                {/* Circular Text SVG with continuous rotation */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    width={190}
                    height={190}
                    className='absolute'
                    {...rotateMotion}
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
                            fill="#fff"
                            fontSize="50"
                            letterSpacing="2"
                            className="spin-logo"
                        >
                            <textPath
                                xlinkHref="#textcircle"
                                aria-label="creativedevelopmentagency"
                                fontSize={44}
                                fontWeight={500}
                            >
                                {text}
                            </textPath>
                        </text>
                    </g>
                </motion.svg>

                {/* Center Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                     <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 100 100">
    <path d="M29 25c0-10 9-17 21-17 9 0 18 4 22 12l-11 6c-2-4-6-6-11-6-5 0-9 3-9 7 0 4 3 6 11 9 14 5 22 12 22 24 0 12-10 20-24 20-11 0-21-5-25-14l12-6c2 5 7 8 13 8 6 0 10-3 10-8 0-4-3-7-10-10-15-6-21-12-21-25z"
      fill="#ffffff"/>
    <path d="M3 40l32-5 62-15-56 30-38 20 20-24z"
      fill="#ca8a04"/>
  </svg>
                    {/* <PiPlugsConnectedFill size={50} color="#facc15" /> */}
                </motion.div>

                {/* Optional logo image */}
                {/* <Image
                    src={img}
                    className={imgClasses}
                    width={imgWidth}
                    height={imgHeight}
                    alt='logo'
                /> */}
            </div>
        </motion.div>
    )
}

export default OffSetTradeMark
