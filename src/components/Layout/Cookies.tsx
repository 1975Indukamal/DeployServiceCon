"use client"
import React, { useState } from 'react'

const Cookies = () => {
    const [isShow,setIsShow] = useState(false)
    return (
        <>
            <div className={` fixed bottom-24 rounded-2xl z-[25] sm:right-[10%] shadow-[0_16px_40px_0px_rgba(0,0,0,0.09)] w-full max-w-[364px]  bg-white  p-5  duration-300 ${isShow?"scale-100":"scale-0"}  origin-bottom-right `} >
                <p className="text-dark leading-relaxed font-semibold text-sm">
                    We use our own and third-party cookies to
                    personalise content and to analyse web traffic.
                    <span  className=' text-sm font-semibold block underline ' >
                        Read more about cookies
                    </span>

                </p>

                <div className="flex space-x-4 mt-5">
                    <button onClick={()=>setIsShow(prev=>!prev)} className="bg-primary  space-x-2 rounded-[7px] py-[10px]  justify-center text-xs flex-1 flex items-center text-white">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0C10.7139 0 11.4187 0.07494 12.1059 0.22228C12.6865 0.34679 12.899 1.06471 12.4797 1.48521C12.0148 1.95137 11.75 2.57868 11.75 3.25C11.75 4.42043 12.5612 5.42718 13.6858 5.68625C14.0559 5.7715 14.3039 6.1199 14.2632 6.49747C14.2544 6.5787 14.25 6.66307 14.25 6.75C14.25 8.1307 15.3693 9.25 16.75 9.25C17.4766 9.25 18.1513 8.9393 18.6235 8.4053C19.0526 7.92011 19.8536 8.1704 19.9301 8.8137C19.9766 9.2048 20 9.6009 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14ZM6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13ZM10 9C9.4477 9 9 9.4477 9 10C9 10.5523 9.4477 11 10 11C10.5523 11 11 10.5523 11 10C11 9.4477 10.5523 9 10 9ZM5 6C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6Z" fill="white" />
                            </svg>
                        </span>
                        <span>

                        Already Accepted
                        </span>
                    </button>

                    <button onClick={()=>setIsShow(prev=>!prev)} className=' text-xs bg-[#eee] py-[10px] rounded-[7px] text-secondary  px-10' >
                    Reject
                    </button>
                </div>
            </div>
            <div role='button' onClick={()=>setIsShow(prev=>!prev)} className=' cursor-pointer right-[10%] top-[90%] z-[250] fixed w-[41px] h-[41px] bg-white rounded-[10px] grid place-items-center shadow-[0_16px_40px_0px_rgba(0,0,0,0.09)] ' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C12.7139 2 13.4187 2.07494 14.1059 2.22228C14.6865 2.34679 14.899 3.06471 14.4797 3.48521C14.0148 3.95137 13.75 4.57868 13.75 5.25C13.75 6.42043 14.5612 7.42718 15.6858 7.68625C16.0559 7.7715 16.3039 8.1199 16.2632 8.49747C16.2544 8.5787 16.25 8.66307 16.25 8.75C16.25 10.1307 17.3693 11.25 18.75 11.25C19.4766 11.25 20.1513 10.9393 20.6235 10.4053C21.0526 9.92011 21.8536 10.1704 21.9301 10.8137C21.9766 11.2048 22 11.6009 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM7 8C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10C7.55228 10 8 9.55228 8 9C8 8.44772 7.55228 8 7 8Z" fill="#EB7373" />
                </svg>
            </div>
        </>
    )
}

export default Cookies