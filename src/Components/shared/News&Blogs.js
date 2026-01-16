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
      <div className="my-12 flex gap-8 flex-wrap items-center justify-center">
        {blogs?.slice(0, 3).map((itm, i) => (
          <motion.div
            key={itm.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${itm.slug}`} className="w-[320px]">
              <div className="border duration-500 rounded-[30px] group hover:translate-y-2 p-4 flex gap-2 flex-col">
                <div className="relative h-[250px] xs:h-[280px] rounded-[30px]">
                  <Image
                    width={350}
                    height={300}
                    className="w-full h-full object-cover rounded-[30px]"
                    src={itm.image}
                    alt="blog-image"
                  />
                  <Image
                    src="/assets/images/mask.png"
                    className="absolute top-0 h-full"
                    width={350}
                    height={300}
                    alt="mask"
                  />
                  <div className="absolute bottom-[-3px] bg-primary right-[-3px] grid place-items-center w-10 h-10 rounded-full">
                    <IoChevronForward className="group-hover:translate-x-2 duration-200" size={26} color="#fff" />
                  </div>
                  <p className="absolute bottom-5 pl-5 text-[#F6F6F6] text-[14px] font-[Poppins] line-clamp-1">
                    {itm.cat}
                  </p>
                </div>

                <h3 className="line-clamp-1 text-[18px] text-primary font-[600] font-[Quicksand]">
                  {itm.title}
                </h3>
                <p className="text-[16px] font-[300] font-[Poppins] text-body line-clamp-3">
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
