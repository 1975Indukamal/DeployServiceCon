"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from "framer-motion"
const DreamBigger = () => {
  return (

    <section>
      <div className='pb-16'>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} className='pt-20 font-[500] font-[Quicksand] text-[38px]  mb-5 text-body'> Let’s Build What’s Next{" "}
          <span className='text-primary font-[500] font-[Quicksand] md:text-[38px] text-[32]'>Together</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }} className=' font-[Quicksand] md:text-[30px] text-[24px] font-[300] text-body'>Whether you're starting something new or scaling something big, ServiceConnect is your partner in digital transformation. Let’s turn your ideas into impactful solutions—and shape the future of your business, side by side.</motion.p>


      </div>
    </section>
  )
}

export default DreamBigger