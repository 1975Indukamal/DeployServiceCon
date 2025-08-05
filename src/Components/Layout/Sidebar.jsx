import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { TfiClose } from "react-icons/tfi";
import { gsap } from "gsap"
import bgDrop from "@/../public/filtered_hero.png"
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";

const Sidebar = ({ isShow, setIsShow }) => {

  const imgRef = useRef(null)
  const [showNav, setShowNav] = useState(false)
  const [rewind, setRewind] = useState(false)
  const getFrame = useRef(null)
  const endAnimation = useRef(null)

  useEffect(() => {
    if (isShow) {
      document.body.style.position = 'relative';
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
    }
  }, [isShow]);

  useLayoutEffect(() => {
    if (imgRef.current) {
      const context = gsap.context(() => {
        gsap.from(imgRef.current, {
          rotation: 30,
          repeat: -1,
          yoyo: true,
          transformOrigin: "top",
          duration: 7,
          animationTimingFunction: "linear",
          delay: 100,
          zIndex: -1
        })
        gsap.to(imgRef.current, {
          rotation: -45,
          repeat: -1,
          yoyo: true,
          transformOrigin: "top",
          duration: 6,
          animationTimingFunction: "linear",
          zIndex: -1
        })
      })
      return (() => context.revert())
    }
  }, [showNav])

  useEffect(() => {
    if (getFrame.current) {
      const handleAnimte = () => {
        setShowNav(true)
      }
      const initFrame = getFrame.current
      initFrame.addEventListener("animationend", handleAnimte)
      return () => {
        if (initFrame) {
          initFrame.removeEventListener("animationend", handleAnimte);
        }
      };
    }
  }, [getFrame])

  useEffect(() => {
    if (endAnimation.current) {
      const handleAnimationEnd = () => {
        setShowNav(false);
        setRewind(false);
      };
      const initFrame = endAnimation.current
      initFrame.addEventListener("animationend", handleAnimationEnd);
      return () => {
        if (initFrame.current) {
          initFrame.removeEventListener("animationend", handleAnimationEnd);
        }
      };
    }
  }, [endAnimation]);

const closeSidebar=()=>{
  setIsShow(!isShow)
  setRewind(true)
}

  return (
    <>


      <div className={`overflow-hidden fixed inset-0 bg-[#eb7373] h-[100vh] w-full z-[800] transform translate-y-full scale-y-0 ${isShow ? "animate-slideup" : ""}`} ref={getFrame} />

      <div ref={endAnimation} className={`${showNav && rewind ? "animate-slide_down" : ""} fixed inset-0 bg-[#eb7373] h-full w-full z-[800] transform translate-y-full scale-y-0`} />

      {
        ((isShow && !showNav) || (!isShow && showNav)) && <div className="fixed top-0 bottom-0 start-0 end-0 bg-white z-[700]" />
      }

      {showNav &&
        <div className="fixed h-[100vh] z-[600] bg-white top-0 bottom-0 start-0 end-0">

          <div className={`container  flex items-center justify-center `}>
            <div className=' flex items-center justify-center' >

              {showNav && <Image ref={imgRef} className={`absolute overflow-hidden hidden md:block left-[17px] top-[0] z-[-1]`} src={bgDrop} alt="" />}

              <div className={`flex flex-col gap-5 sm:gap-8 md:h-screen pb-[10vh] max-w-max `}>
                <div className={`flex items-center md:justify-end justify-between md:px-10 px-0 py-0 md:h-[20vh] h-[10vh] md:py-5 gap-24 mt-0 md:mt-5`}>
                  <div className={`flex items-center justify-center gap-[4px] cursor-pointer group`} onClick={closeSidebar}
                  
                  >
                    <span className={`text-black duration-500 group-hover:text-primary font-Poppins text-[18px] text-base font-light`}>esc</span>
                    <span className={`text-[22px] group-hover:text-primary sm:text-[25px] text-Text-Primary transition-all duration-500 group-hover:rotate-[1turn]   `}><TfiClose /></span>
                  </div>
                  <span className={` group-hover:text-primary font-Poppins text-base font-medium h-[30px] w-[30px] rounded-full bg-neutral-100 flex items-center justify-center`}>en</span>
                </div>
                <div className={`flex gap-10 py-5 md:py-0 h-[80vh] items-center justify-start md:justify-center`}>
                  <div className={`flex items-start justify-between md:gap-24 gap-8 w-full flex-col md:flex-row`}>
                    <div className={`flex items-start justify-between md:gap-24 gap-16 w-full flex-1`}>
                      <div className={`flex-1`} >
                        <ul className={`flex flex-col md:gap-8 gap-[10px]`}>
                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`}>
                            <Link href="/" className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>Home
                            </Link>
                          </li>

                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`}><Link href="/our-services" className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>Services</Link></li>
                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`}>
                            <Link href="/our-expertise" className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>
                              Expertise
                            </Link>
                          </li>
                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`}><Link  href="/our-work" className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>Our work</Link></li>
                        </ul>
                      </div>
                      <div className={`flex-1`} >
                        <ul className={`flex flex-col md:gap-8 gap-[10px]`}>
                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`}  ><Link href="/about-us"  className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>About</Link></li>
                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`}  ><Link href="/contact-us" className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>Contact</Link></li>
                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`}  ><Link href="/blog" className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>Blog</Link></li>
                          <li className={`text-dark-primary font-poppins no-underline text-[22px] sm:text-[25px] lg:text-[38px] font-medium`} ><Link href="/career" className='inline-block no-underline whitespace-nowrap  relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-[#eb7373]' onClick={closeSidebar}>Careers</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className={`flex flex-col uppercase flex-1 gap-[28px] sm:gap-[35px] justify-end`}>
                      <div className={`flex flex-col`}>
                        <span className={`mb-[10px] text-dark-primary font-Poppins text-base font-normal`}>Located at</span>
                        <div className={`flex flex-col`}>
                          <span className={`text-dark-primary font-Poppins text-[18px] font-medium uppercase`}>C-10, Block C, Sector-3,</span> <span className={`text-dark-primary font-Poppins text-[18px] font-medium uppercase`}>Noida 201301(U.P.) India</span>
                        </div>
                      </div>
                      <div className={`flex flex-col`}>
                        <span className={`mb-[10px] text-dark-primary font-Poppins text-base font-normal`}>FOR BUSINESS ENQUIRIES</span>
                        <span className={`text-dark-primary font-Poppins text-[18px] font-medium uppercase flex items-center`}>
                  <FaPhoneAlt size={15} /> +91-93192 71595</span>
                      </div>
                      <div className={`flex flex-col`}>
                        <span className={`mb-[10px] text-dark-primary font-Poppins text-base font-normal`}>Social Links</span>
                        <div className={`flex gap-[8px]`}>
                          <Link
                            href="https://www.facebook.com/hexabells"
                            target="_blank"
                            className={`${"img"} ${"f-fill"}`}
                          >
                            <Image
                              src="/assets/images/facebook.svg"
                              className="img-fluid"
                              alt="Facebook Icon"
                              width={36}
                              height={36}
                            />
                          </Link>
                          <Link
                            href="https://www.instagram.com/hexabells"
                            target="_blank"
                            className={`${"img"} ${"i-fill"}`}
                          >
                            <Image
                              className="img-fluid"
                              src="/assets/images/instagram.svg"
                              alt="Instagram icon"
                              width={36}
                              height={36}
                            />
                          </Link>
                          <a
                            href="https://twitter.com/InfoHexabells"
                            target="_blank"
                            className={`${"img"} ${"t-fill"}`}
                          >
                            <Image
                              src="/assets/images/Subtract.svg"
                              className="img-fluid"
                              alt="Twitter Icon"
                              width={36}
                              height={36}
                            />
                          </a>

                          <Link
                            href="https://www.Linkedin.com/company/hexabells/"
                            target="_blank"
                            className={`${"img"} ${"l-fill"}`}
                          >
                            <Image
                              className="img-fluid"
                              src="/assets/images/Path 11616.svg"
                              alt="LinkedIn icon"
                              width={36}
                              height={36}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className={`flex flex-col`}>
                        
                        <span className={`mb-[10px] text-secondary font-Poppins text-base font-medium underline uppercase cursor-pointer`}><Link className={`text-secondary font-Poppins text-base font-medium underline uppercase cursor-pointer`} href={"/privacy-policy"} onClick={closeSidebar}>Privacy Policy</Link></span>
                        <span className={ `text-secondary font-Poppins text-base font-medium underline uppercase cursor-pointer`}>
                        <Link className={`text-secondary font-Poppins text-base font-medium underline uppercase cursor-pointer`} href={"/terms-and-conditions"} onClick={closeSidebar}> Terms and condition</Link></span>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}


export default Sidebar