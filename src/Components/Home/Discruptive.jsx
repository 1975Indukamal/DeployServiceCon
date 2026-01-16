'use client'

import Button from "@/Components/UI/Button";
import Link from "next/link";
import { motion } from "framer-motion";

// Optional: import common motion variants if you have them
import { fadeUp, scaleUp } from "@/utils/motionVariants";

const Discruptive = () => {
  return (
    <section className="container">
      <motion.div 
        className="mx-auto mt-[120px] mb-[20px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.h2
          className="text-body font-Quicksand md:text-[48px] text-[30px] font-[400] mb-[20px]"
          variants={fadeUp}
        >
          Got a{" "}
          <span className="text-primary font-Quicksand md:text-[48px] text-[30px] font-[400]">
            Game-Changing Idea{" "}
          </span>
          Ready to Launch?
        </motion.h2>

        <motion.p
          className="text-body font-[Poppins] text-base leading-7 text-[18px] font-normal mb-6"
          variants={fadeUp}
        >
          At ServiceConnect, we go beyond development. We partner with you to refine your vision and connect you with a talented team dedicated to turning your innovative concepts into impactful digital solutions.
        </motion.p>

        {/* Uncomment and animate button */}
        {/* <motion.div variants={fadeUp}>
          <Link 
            href="https://calendly.com/hexabells_schedule_call/schedule-a-call" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Book an intro call" />
          </Link>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Discruptive;
