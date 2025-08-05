/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from '../../Components/UI/Button';
import Image from 'next/image';
import Link from 'next/link';

const arr=[
    {
    id:"1",
    title:"Web Design & Development",
    desc:"We prioritise user-centric approach to provide engaging experience backing with best Tech. Stack.",
    num:"01",
    imgs:"/assets/images/our-work/02/webdesign.svg"
  },
  {
    id:"2",
    title:"Branding",
    desc:"Cohesive brand strategy that serves as a roadmap for brand development and communication.",
    num:"02",
    imgs:"/assets/images/our-work/02/brand.svg"
  
  },
  {
    id:"3",
    title:"Digital Marketing",
    desc:"Best use of digital channels to market products and services in order to reach consumers.",
    num:"03",
    imgs:"/assets/images/our-work/02/digitalMar.svg"
  
  },
  {
    id:"4",
    title:"Application Development",
    desc:"Application solutions that provides daily utility to your customers or clients.",
    num:"04",
    imgs:"/assets/images/our-work/02/applicationdev.svg"
  
  },
  {
    id:"5",
    title:"Customer Software Development",
    desc:"Innovative and New-age Softwares as per your business-specific requirements.",
    num:"05",
    imgs:"/assets/images/our-work/02/customersoft.svg"
  
  },
  {
    id:"6",
    title:"Maintenance & Support",
    desc:"We take pleasure in your apps operating and developing seamlessly.",
    num:"06",
    imgs:"/assets/images/our-work/02/maintainance.svg"
  
  },
  {
    id:"7",
    title:"MVP Development",
    desc:"Your vision, Our digital expertise to a successful breakthrough of your digital journey.",
    num:"07",
    imgs:"/assets/images/our-work/02/mvp.svg"
  
  },
  {
    id:"8",
    title:"UX/UI",
    desc:"An intuitive and user centric design approach for our clients and their customers.",
    num:"08",
    imgs:"/assets/images/our-work/02/ui.svg"
  
  },
  ]

const Ourservices = () => {
  return (
    <>
      <div className="container mgt">
        <div className="headingService">
          <h2 className="titles">
            <span className="one">Our</span>
            <span className="two">Services</span>
          </h2>
        </div>
        {arr.map((itm) => (
          <div key={itm.id} className="OurServices">
            <div className="services">
              <h3>{itm.title}</h3>
              <div className="serviceTexts">
                <p>{itm.desc}</p>
              </div>
              <div className="imageright">
                <div className="backgroundImage">
                  <div className="flip">
                    <Image
                      height={250}
                      width={250}
                      src={itm.imgs}
                      alt="Hover Image"
                      className="images hover:hidden"
                    />
                  </div>
                </div>
                <Image
                  src="/assets/images/our-work/02/next-icon.svg"
                  width={50}
                  height={50}
                  className="right-icon hover:bg-gray-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="mt-5 mb-5 flex justify-center">
        <Link href="/our-services">
          <Button text="More in Services"  /></Link>
        </div>
      </div>
    </>
  );
};

export default Ourservices;

