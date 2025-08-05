"use client"
import React, { useState } from 'react'
import CircularText from "@/Components/shared/CircularText"
import {
  FaApple,
  FaGooglePlay,
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaWhatsapp,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subScribeNewsLetter = async (e) => {
    e.preventDefault();

    if (loading) {
      return; 
    }
    if (!email) {
      toast.error("Please enter email.");
    } else if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,7})+$/.test(email)){
      toast.error("Please enter a valid email.");
    } else {
      try {
        setLoading(true);
        const res = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email
          }),
        });

        const resp = await res.json();

        if (resp.includes("OK")) {
          toast.success("Thank you for subscribing!");
          setEmail("");
        } else {
          toast.error("Subscription failed. Please try again later.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setLoading(false); 
      }
    }
  };
  
  return (
    <div  className="text-white "
  >
   <div className="w-full py-10 px-4">
<div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="lg:w-1/2 space-y-4">
            <h2 className="text-[26px] md:text-[40px] font-bold text-body lg:text-3xl">
            Stay Updated with <span className='text-primary'>ServiceConnekt</span>
            </h2>
            <p className="text-[#B8B8B8] text-sm lg:text-base leading-relaxed max-w-md">
            Subscribe to receive expert insights, service updates, and productivity tips delivered straight to your inbox.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/limitlesstrip.official/" target="_blank" rel="noreferrer">
                <FaFacebook fill="white" size={24} />
              </a>
              <a href="https://www.instagram.com/limitlesstrip.official/" target="_blank" rel="noreferrer">
                <FaInstagram fill="white" size={24} />
              </a>
              <a href="https://www.whatsapp.com/channel/0029Va8rjeZCBtx5TmdfwW2I" target="_blank" rel="noreferrer">
                <FaWhatsapp fill="white" size={24} />
              </a>
            </div>
          </div>
      

      {/* Email Subscription */}
      <div className="lg:w-1/2 w-full space-y-4 sm:text-sm text-xs">
      <h5 className=' text-body xs:text-lg text-sm ' > Stay in the loop with the latest news, tips, and updates from ServiceConnekt.</h5>

      <div>
        <label className=" text-primary block mb-1 sm:text-sm text-xs">Email Address</label>
        <div className="flex w-full gap-4 flex-col">
          <input
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                // setEmailStatus(1);
              }}
            type="email"
            placeholder="Enter Email Address"
            className="flex-grow p-2 text-primary sm:text-sm text-xs bg-transparent bg-opacity-60 rounded-md border border-primary outline-none font-medium"
          />
          <button className="hover:bg-primary hover:border-body hover:text-white text-primary  px-4 sm:text-sm text-xs rounded-md border border-primary p-2 max-w-[300px]" onClick={subScribeNewsLetter}>
          { loading ? "Loading..." : "Subscribe"}
          </button>
        </div>
        </div>
      </div>
  

</div>
</div>
      <ToastContainer position="top-center" autoClose={3000} />

    </div>
  )
}

export default Newsletter