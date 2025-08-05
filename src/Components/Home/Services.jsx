
import LoadMore from '../UI/Button'
import Head from 'next/head'
import FlipperList from '../shared/FlipperList'
import Link from 'next/link'
const arr=[
    {
    id:"1",
    title:"Web Design & Development",
    desc:"Our core focus lies on user-centric design approach, creating SEO-friendly websites for optimal performance with improved user engagement and conversions.",
    num:"01",
    img:"/assets/images/work/webdesign.svg"
  },
  {
    id:"2",
    title:"Mobile App Development",
    desc:"Take your business to new heights with unparalleled mobile app development solutions, connecting you with customers for making buying decisions on-the-go.",
    num:"02",
    img:"/assets/images/work/brand.svg"
  
  },
  {
    id:"3",
    title:"Custom Software Development",
    desc:"Get exactly what your business requirements with our Custom Software Development - ensuring smooth and seamless functionality that meets your needs.",
    num:"03",
    img:"/assets/images/work/digitalMar.svg"
  
  },
  {
    id:"4",
    title:"MVP Development",
    desc:"Development of a Minimum Viable Product with a unified brand-building strategy, serving as a comprehensive roadmap for the evolution and communication of the brand.",
    num:"04",
    img:"/assets/images/work/applicationdev.svg"
  
  },
  {
    id:"5",
    title:"Product Modernization & Re-engineering",
    desc:"Revive your legacy products through modernization and reengineering, ensuring modern features and functionality for improved usability and user satisfaction.",
    num:"05",
    img:"/assets/images/work/customersoft.svg"
  
  },
 
  ]
const Services = () => {

  
  return (
    <>
    <Head>
      <meta name="robots" content="index, follow " />
    </Head>
    <div className={`container md:mt-24`}>
          <div className={``}>
              <h2 className='text-[#2c3441] sm:text-[58px] text-[34px] font-light' >
                <div className={`font-[Quicksand] sm:text-[58px] text-[34px] font-normal leading-normal uppercase`}>
              <span className={`font-[Quicksand] sm:text-[58px] text-[34px] text-text-primary font-light`}>Our</span><span className={`font-[Quicksand] sm:text-[58px] text-[34px] font-normal text-primary`}> Services</span></div>
              </h2>
          </div>
          <div className='  space-y-10  sm:mt-12 mt-8' >
          {arr.map((itm,index) => {
              return <FlipperList img={itm.img} desc={itm.desc} index={index+1} title={itm.title} key={itm.id} />
          }
          )}
          </div>

      </div><div className="container">
              <div className="mt-12 mb-5 flex justify-center">
              <Link href="/our-services">
                  <LoadMore text="More In Services"  /></Link>
              </div>
          </div></>
  )
}

export default Services