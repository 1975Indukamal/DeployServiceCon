"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    contact_number: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "contact_number") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
 

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    if (!isEmailValid(formData.email)) {

      toast.error("Please enter a valid email address.");
   
      return;
     
    }
    const contactNumber = formData.contact_number;
    if (contactNumber.length < 9 || contactNumber.length > 15) {
      toast.error("Contact number must have between 8 and 15 digits.");
      return;
    }
 
 
    try {
      setLoading(true);
      const response = await fetch("/api/landing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const resp = await response.json();
      if (resp.includes("OK")) {
        toast.success("Your Form is submited successfully!");
      
          setFormData({
            name: "",
            company_name: "",
            contact_number: "",
            email: "",
          });
  
        setTimeout(() => {
        
          router.push("/thank-you");
        },  3000); 

      } else{
        toast.error("Submission failed. Please try again later.");

      }
      
    } catch (error) {
      throw Error("Email sending failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[425px] w-full border-[4px] border-solid border-[#2c3441] rounded-tl-[25px] rounded-tr-[25px]  bg-[#fff] ">
      <div className="flex justify-between items-center mx-[20px] mt-[30px] ">
        <h2 className="text-[26px] text-[#2c3441] font-[700] font-[Quicksand]">
          Get in Touch!
        </h2>
        <Image
          src="/assets/images/case-study/star.png"
          height={50}
          width={50}
          alt="icons"
        />
      </div>
      <form className=" space-y-12 mt-5 px-6" onSubmit={handleSubmit}>
        <div className="  border-b-[1.6px]  border-[#797879] ">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            required
            className="w-full focus:outline-none"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="  border-b-[1.6px]  border-[#797879] ">
          <input
            type="text"
            id="company_name"
            name="company_name"
            placeholder="Company name"
            required
            className="  w-full focus:outline-none"
            value={formData.company_name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <PhoneInput
            type="number"
            id="contact_number"
            country="in"
            containerClass=" !border-0 overflow-x-clip"
            inputClass="!w-full !pl-0  !ml-12    !border-t-0 !border-l-0 !border-r-0 !border !border-b-[1.6px] !border-[#797879]"
            name="contact_number"
            buttonClass="!bg-white !border-t-0 !border-l-0 !border-r-0 !border !border-b-[1.6px] !border-[#797879]"
            placeholder="Contact number"
            required
            className="  w-full focus:outline-none"
            onChange={(phone) =>
              setFormData((prev) => ({ ...prev, contact_number: phone}))
            }
            value={formData.contact_number}
            // onChange={handleInputChange}
          />
        </div>

        <div className=" border-b-[1.6px] border-[#797879] ">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail  address"
            required
            className="  w-full focus:outline-none"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
       
          <button
            type="submit"
            className="bg-[#eb7373] w-full mx-auto py-[10px] rounded-[3px] !mb-12 !mt-14 cursor-pointer"
          >
           
            <p className="text-[#fff] text-[18px] font-[500] font-[poppins] flex justify-center items-center">
              {loading?"wait...":"Submit"}
            </p>
             
            
          </button>
       
       
      </form>
    </div>
  );
};
export default ContactForm;
