import LineImage from "@/../public/Line_59.png";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="container my-12 ">
      <h1 className='text-primary text-[58px] font-light mb-12'>Sitemap</h1>

<div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-12 ">
  <div className="mb-5 ">
    <h3 className="flex flex-col text-[38px] font-normal text-[#2C3441]">Core Capabilities</h3>
    <Image src={LineImage} alt="Vector" className="" />
  
  <div className="flex flex-col text-secondary my-6 text-[18px] ">
  <Link className="hover:text-primary" href="#">Product Design</Link>
  <Link className="hover:text-primary" href="#">Design Strategy</Link>
  <Link className="hover:text-primary" href="#">Consulting</Link>
  <Link className="hover:text-primary" href="#">Branding</Link>
  <Link className="hover:text-primary" href="#">Development</Link>
  </div>
  </div>
  <div className="mb-5 lg:pl-7">
    <h3 className="flex flex-col text-[38px]  font-normal text-[#2C3441]">Hexabells</h3>
    <Image src={LineImage} alt="Vector" className="" />
  <div className="flex flex-col text-secondary my-6 text-[18px] ">
  <Link className="hover:text-primary" href="#">Sevices</Link>
  <Link className="hover:text-primary" href="#">Expertise</Link>
  <Link className="hover:text-primary" href="#">Work</Link>
  <Link className="hover:text-primary" href="#">Careers</Link>
  <Link className="hover:text-primary" href="#">Contact Us</Link>
  <Link className="hover:text-primary" href="#">FAQ’s</Link>
  </div>
  </div>
  <div className="mb-5 ">
    <h3 className="flex flex-col text-[38px] font-normal text-[#2C3441]">Services</h3>
    <Image src={LineImage} alt="Vector"  className="" />
  
  <div className="flex flex-col text-secondary my-6 text-[18px] ">
  <Link className="hover:text-primary" href="#">Web Design & Development</Link>
  <Link className="hover:text-primary" href="#">Branding</Link>
  <Link className="hover:text-primary" href="#">Digital Marketing</Link>
  <Link className="hover:text-primary" href="#">Application Development</Link>
  <Link className="hover:text-primary" href="#">Custom Software Development</Link>
  <Link className="hover:text-primary" href="#">Maintenance  & Support</Link>
  <Link className="hover:text-primary" href="#">MVP Development</Link>
  <Link className="hover:text-primary" href="#">UX/UI Designing</Link>
  <Link className="hover:text-primary" href="#">Product Modernisation</Link>
  
  </div>
  </div>
  <div className="mb-5 ">
    <h3 className="flex flex-col text-[38px] font-normal text-[#2C3441]">Industries</h3>
    <Image src={LineImage}  alt="Vector" className="" />
  
  <div className="flex flex-col text-secondary my-6 text-[18px] ">
  <Link className="hover:text-primary" href="#">Healthcare</Link>
  <Link className="hover:text-primary" href="#">Restaurant</Link>
  <Link className="hover:text-primary" href="#">Startup</Link>
  <Link className="hover:text-primary" href="#">Airlines</Link>
  <Link className="hover:text-primary" href="#">Travel</Link>
  <Link className="hover:text-primary" href="#">Real Estate</Link>
  <Link className="hover:text-primary" href="#">Ed Tech</Link>
  <Link className="hover:text-primary" href="#">B2B</Link>
  <Link className="hover:text-primary" href="#">Insurance</Link>
  <Link className="hover:text-primary" href="#">Transportation</Link>
  <Link className="hover:text-primary" href="#">E commerce</Link>
  <Link className="hover:text-primary" href="#">Law firms</Link>
  <Link className="hover:text-primary" href="#">Telecom</Link>
  <Link className="hover:text-primary" href="#">Home Builders</Link>
  <Link className="hover:text-primary" href="#">Gym & Fitness</Link>
  </div>
  </div>
</div>
</div>
</>
  )
}