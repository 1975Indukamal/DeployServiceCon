"use client"
import Button from "@/Components/UI/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import Image from "next/image";

const FirstHeading = () => {
  const router=useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    interests: [], // Change to an array to store multiple interests
    requirements: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleInterestClick = (interest) => {
    const selectedInterests = formData.interests.includes(interest)
      ? formData.interests.filter((item) => item !== interest)
      : [...formData.interests, interest];

    setFormData({
      ...formData,
      interests: selectedInterests,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "This field is required";
    }
    // Validate name
    if (!formData.role.trim()) {
      newErrors.role = "This field is required";
    }
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number format
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
     
    }else{
      newErrors.phone = "This field is required";
    }

    // Validate interest
    if (formData.interests.length <= 0) {
      newErrors.interests = "This field is required";
    }

    // Validate requirements (textarea)
    if (!formData.requirements.trim()) {
      newErrors.requirements = "This field is required";
    }

    // Set errors in state
    setErrors(newErrors);

    // Return true if the form is valid, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true); 

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const resp = await response.json();
        console.log(resp);
        if (resp.includes("OK")) {
          toast.success("Your response is successfully submitted, will reach out to you soon!");
        
          setFormData({
            name: "",
            role: "",
            email: "",
            phone: "",
            interests: [],
            requirements: "",
          });
          setTimeout(() => {
          
            router.push("/thank-you");
          },  3000); 

        } else{
          toast.error("Submission failed. Please try again later.");

        }
      } catch (error) {
        toast.error("Something went wrong. Please try again later.");

      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <div className=" mx-auto">
    <h1 className="text-primary text-[25px] sm:text-[40px] sm:leading-[60px] md:text-[58px] font-normal md:leading-[80px] leading-[40px] font-Quicksand mb-[3rem]">
  Let’s Build Something Amazing,
  <br />
  <span className="flex items-center gap-2">
    <span className="md:text-[58px] text-[25px] sm:text-[40px] sm:leading-[60px] font-medium md:leading-[80px] leading-[40px] font-[Quicksand]">
      Talk to Our Team
    </span>

  </span>
</h1>


      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <div className="form-group w-full">
            <label
              htmlFor=""
              className="font-medium  font-[Poppins] mb-[0.5rem] text-body"
            >
              Name*
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light "
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
        </div>
        <div className="">
          <div className="form-group w-full">
            <label
              htmlFor=""
              className="font-medium text-[Poppins] mb-[0.5rem] text-body"
            >
              Designation*
            </label>
            <input
              type="text"
              placeholder="Designation"
              className="px-5 py-2.5 w-full outline-none rounded-[50px] border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light "
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            {errors.role && <span className="text-red-500">{errors.role}</span>}
          </div>
        </div>
        <div className="">
          <div className="form-group w-full">
            <label
              htmlFor=""
              className="font-medium  font-[Poppins] mb-[0.5rem] text-body"
            >
              Email*
            </label>
            <input
              type="Email"
              placeholder="Email"
              className=" w-full outline-none px-5 py-2.5 rounded-[50px] border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light "
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="">
          <div className="form-group">
            <label
              htmlFor=""
              className="font-medium  font-[Poppins] mb-[0.5rem] text-body"
            >
              Phone*
            </label>
            <input
              type="text"
              placeholder="Phone"
              className=" w-full outline-none px-5 py-2.5 rounded-[50px] border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
        </div>
        <div className=" md:col-span-2 ">
          <label
            htmlFor=""
            className="font-medium  mb-[0.5rem] inline-block cursor-not-allowed text-body"
          >
            What are you intrested in ?*
          </label>

          <div className=" flex flex-wrap gap-3">
            {[
              "Ui/Ux",
              "Website development",
              "Application development",
              // "Branding",
              // "Digital marketing",
              "Software development",
              // "MVP Development",
              "Maintenance & Support",
              "Other",
            ].map((interest) => (
              <div
                key={interest}
                className={`px-[15px] py-[6px] rounded-[50px] border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer  whitespace-pre  font-[Poppins] font-light ${
                  formData.interests.includes(interest)
                    ? "text-body border border-white bg-primary"
                    : ""
                }`}
                onClick={() => handleInterestClick(interest)}
              >
                {interest}
              </div>
            ))}
          </div>
          {errors.interests && (
            <span className="text-red-500">{errors.interests}</span>
          )}
        </div>

        <div className="w-full md:col-span-2">
          <div className="form-group w-full ">
            <label
              htmlFor=""
              className="font-medium  mb-[0.5rem] font-[Poppins] text-body"
            >
              Write your requirements here?
            </label>
            <textarea
              type="text"
              placeholder="Let us know your project is about"
              className="form-control outline-none rounded-[18px] px-5 py-2.5  border border-solid border-[#DFDFDF] bg-[#F6F6F6] w-full cursor-pointer  max-w-[940px] flex "
              rows={5}
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
            />
            {errors.requirements && (
              <span className="text-red-500">{errors.requirements}</span>
            )}
          </div>
        </div>
      </div>
       <div className="mt-8 mb-12">
       {loading ?  (<div className='animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500'>
          </div>) : 
          (<Button
            type="submit"
            text="Submit"
            onClick={handleSubmit}
            className="w-fit  px-8 py-2"
          />)
 }
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
   
    </div>
  );
};

export default FirstHeading;
