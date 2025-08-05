import React from "react";
import Link from "next/link";
import Image from "next/image";


function BlogAuthor(props) {


  const changeImagePath = (path) => path?.startsWith("..") ? path?.replace("..",""):path
  return (
    <>
  
    <div className="container">
        <div className='  py-[30px] relative before:content-[""] before:w-full before:h-[166px] before:bg-[#F6F6F6] before:absolute before:top-0 before:left-0'>
          <div className='flex flex-col justify-center items-center relative
  z-index:[22]'>
            {/* <img
              style={{ objectFit: "cover" }}
              src={`https://sagecrm.thesagenext.com/${changeImagePath(props.author?.image.slice(3))}`}
              alt="profile-pic"
              height="154px"
              width="154px" /> */}
            <Link
              href={props.blogName
                ? `/blog/author/${props.author?.slug}`
                : "#"}
                className=" group  py-2 flex items-center group hover:text-primary mt-5 text-[20px] text-[#2c3441] overflow-hidden relative px-[10px]"
            >
              <span className="mr-2">By {props.author?.name}</span>
              {props.blogName ? (
                <span className="  relative overflow-hidden" >
                  
                  <Image
                    src="/assets/images/icons/sm-down-arrow-red.svg"
                    alt="arrow"
                    height={14}
                    width={15}
                    className='absolute right-0 -top-8 group-hover:top-0 transition-all duration-300'/>
                  <Image
                    src="/assets/images/icons/sm-down-arrow-black.svg"
                    alt="arrow"
                    height={14}
                    width={15}
                    className='
                    group-hover:translate-y-10  transition-all duration-300' />
                </span>
              ) : (
                ""
              )}
            </Link>
          </div>

          <div className='text-[18px] text-[#2C3441] text-center mt-[20px]'>
            <p>{props.author?.bio}</p>
          </div>
        </div>
      </div></>
  );
}

export default BlogAuthor;
