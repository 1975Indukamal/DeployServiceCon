"use client"

import { motion } from "framer-motion"
import Button from "../UI/Button"
import { IoChevronForward } from "react-icons/io5"
import Image from "next/image"
import Link from "next/link"
import { blogs } from "@/app/blog/_components/blogs"

const NewsBlogsClient = () => {
  return (
    <div className="container">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-body md:text-[38px] text-[30px] text-center font-[400] font-[Quicksand] pb-3"
      >
        Expert Tips & Trusted Insights for Smarter Services
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[18px] text-center font-[poppins]"
      >
        <p className="uppercase text-primary pb-3 font-[500]">
          ServiceConnect Blogs & Updates
        </p>
        <p className="font-[400] text-body">
          Explore expert advice, trending industry updates, how-to guides, and stories from real customers—all designed to help you make better service decisions across home, event, repair, and rental needs.
        </p>
      </motion.div>

      {/* Cards */}
{/* Cards */}
<div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {blogs?.slice(0, 3).map((itm, i) => (
    <motion.div
      key={itm.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${itm.slug}`}>
        <div className="border rounded-[24px] p-3 md:p-4 group hover:translate-y-1 duration-300">
          <div className="relative h-[200px] xs:h-[230px] sm:h-[250px] rounded-[24px]">
            <Image
              width={400}
              height={250}
              className="w-full h-full object-cover rounded-[24px]"
              src={itm.image}
              alt="blog-image"
            />
          
            <div className="absolute bottom-[-3px] right-[-3px] bg-primary grid place-items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full">
              <IoChevronForward className="group-hover:translate-x-1 sm:group-hover:translate-x-2 duration-200" size={22} color="#fff" />
            </div>
            <p className="absolute bottom-3 left-3 text-xs sm:text-sm text-white font-[Poppins] line-clamp-1">
              {itm.cat}
            </p>
          </div>

          <h3 className="mt-3 text-[16px] sm:text-[18px] font-[600] font-[Quicksand] text-primary line-clamp-2">
            {itm.title}
          </h3>
          <p className="text-[14px] sm:text-[16px] font-[300] font-[Poppins] text-body mt-1 line-clamp-3">
            {itm.description}
          </p>
        </div>
      </Link>
    </motion.div>
  ))}
</div>


      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-3 flex justify-center"
      >
        <Link href="/blog">
          <Button text="View All Posts" />
        </Link>
      </motion.div>
    </div>
  )
}

export default NewsBlogsClient
