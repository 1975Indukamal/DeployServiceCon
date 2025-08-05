"use client"
import React, { useEffect, useState } from "react";



// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Personal = ({ nextStep, formData, handleChange }) => {
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    setData(formData);
  }, [formData]);

  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,7})+$/;
    return emailRegex.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate mobile number
    if (!validateMobileNumber(data.mobileNumber)) {
      setErrors({
        mobileNumber: "Please enter a valid 10-digit mobile number",
      });
      return;
    }

    // Validate password
    if (!validateEmail(data.email)) {
      setErrors({
        email:
          "enter valid email",
      });
      return;
    }

    // Reset any previous errors
    setErrors({});
    nextStep();
  };

  return (
    <div className='mt-12'>
    <div className="container">
      <div className='max-w-[940px] mx-auto'>
          <h2 className="text-[#2C3441] text-[22px] sm:text-[30px] md:text-[34px] text-normal  font-normal font-[Quicksand] mb-[3rem]">Personal Information</h2>
          <form className='' onSubmit={handleSubmit}>
            <div className="grid gap-y-8 grid-cols-2 gap-x-6">
              <div className="">
                <div className="form-group w-full">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                    Your Name
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="md:col-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                  Mobile Number
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={data.mobileNumber}
                    onChange={(e) =>
                      handleChange("mobileNumber", e.target.value)
                    }
                    required
                  />
                  {errors.mobileNumber && (
                    <div className='text-[red] font-[bold] text-center text-[14px]'>{errors.mobileNumber}</div>
                  )}
                </div>
              </div>
              <div className="md:col-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                    Your Email
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                {errors.email && <div className='text-[red] font-[bold] text-center text-[14px]'>{errors.email}</div>}

                </div>
              </div>
              <div className="md:col-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                    Linkedin Profile
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="url"
                    name="websiteUrl"
                    placeholder="Linkedin Profile"
                    value={data.websiteUrl}
                    onChange={(e) => handleChange("websiteUrl", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="md:col-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                    Upload Your Resume
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="file"
                    accept=".pdf" 
                    name="document"
                    onChange={(e) => {
                      const file = e.target.files[0]; 
                      handleChange("document", file); 
                    }}
                    
                    required
                  />
                </div>
              </div>

             
            </div>
            <div className="mt-12">
                <button type="submit" className="wb-fit py-2.5 px-5 bg-transparent font-open-sans text-gray-700 p-2 border border-gray-700 rounded-full mr-5 hover:bg-red-500 hover:border-red-500 hover:text-white">
                 Save & Next
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Personal;

