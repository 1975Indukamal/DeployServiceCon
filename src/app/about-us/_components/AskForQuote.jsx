"use client"
import React from 'react'
import { motion } from "framer-motion"
import Button from "@/components/shared/Button";
import Link from 'next/link';

const AskForQuote = () => {
  return (
    <section>
      <div className="flex flex-wrap text-body md:gap-5 pt-14">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:flex-1"
        >
          <h2 className="xl:text-[50px] lg:text-[48px] md:text-[38px] text-[32px] font-light">
            ServiceConnect: <span className="text-primary font-light"> Digital Powering </span>{" "}
            Possibilities
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:flex-1"
        >
          <p className="text-[18px] mb-8 font-[200]">
            We don’t just build digital solutions—we build your competitive edge. At ServiceConnect, our expert team fuses smart design, advanced tech, and bold strategy to help your business thrive in the digital world. Let’s turn your vision into impact.
          </p>

          <Link href="/contact-us">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button text="Ask for a Quote" className="space-x-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-solid border-secondary my-20 origin-left"
      />
    </section>
  )
}

export default AskForQuote
