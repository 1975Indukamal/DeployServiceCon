"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subScribeNewsLetter = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email) return toast.error("Please enter email.");
    if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,7})+$/.test(email))
      return toast.error("Please enter a valid email.");

    try {
      setLoading(true);
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const resp = await res.json();
      if (resp.includes("OK")) {
        toast.success("Thank you for subscribing!");
        setEmail("");
      } else toast.error("Subscription failed.");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full py-10 px-4"
      >
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-4"
          >
            <h2 className="text-[26px] md:text-[40px] font-bold text-body">
              Stay Updated with <span className="text-primary">ServiceConnect</span>
            </h2>
            <p className="text-[#B8B8B8] text-sm lg:text-base max-w-md">
              Subscribe to receive expert insights, service updates, and productivity tips delivered straight to your inbox.
            </p>
            <div className="flex space-x-4 pt-2">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaWhatsapp size={24} />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full space-y-4"
          >
            <h5 className="text-body xs:text-lg text-sm">
              Stay in the loop with the latest news, tips, and updates from ServiceConnect.
            </h5>

            <label className="text-primary block mb-1">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-2 bg-transparent border border-primary rounded-md outline-none text-primary"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={subScribeNewsLetter}
              className="hover:bg-primary hover:text-white text-primary border border-primary px-4 py-2 rounded-md max-w-[300px]"
            >
              {loading ? "Loading..." : "Subscribe"}
            </motion.button>
          </motion.div>

        </div>
      </motion.div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Newsletter;
