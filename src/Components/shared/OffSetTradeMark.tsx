import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { PiPlugsConnectedFill } from "react-icons/pi";

interface propTypes {
    text?:
    string, imgWidth?: number,
    imgClassName?: string, 
    img?: string, 
    imgHeight?: number
}
const OffSetTradeMark = ({ text = "InnovateCreateElevate", imgWidth = 42, imgClassName = "", img = "/assets/images/log.png",imgHeight=42 }: propTypes) => {
    const imgClasses = twMerge(" absolute  origin-center  ", imgClassName)
    return (
        <div className='pl-6 sm:ml-[32px] max-w-[587px] w-full py-4  rounded-bl-[102px] rounded-tl-[102px] md:ml-auto bg-primary' >
            <div className="bg-custombgc relative w-44 grid place-items-center grid-cols-1  h-44 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    width={190}
                    height={190}
                    className=' absolute  '
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
                            className=" spin-logo  "
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
                </svg>
      <PiPlugsConnectedFill size={50} color="#facc15" />
                {/* <Image
                    src={img}
                    className={imgClasses}
                    width={imgWidth}
                    height={imgHeight}
                    alt='logo'
                /> */}
            </div>
        </div>
    )
}

export default OffSetTradeMark