"use client"
import React, { useEffect, useState } from 'react'



const Education = ({ nextStep, prevStep, formData, handleChange }) => {
    const [data, setData] = useState(formData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setData(formData);
    }, [formData]);

    const validateYear = (year) => {
        const yearRegex = /^\d{4}$/;
        return yearRegex.test(year);
    };

    const validateBranch = (branch) => {
        return branch.length >= 2 && branch.length <= 50;
    };

    const validateCollegeName = (collegeName) => {
        return collegeName.length >= 6;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate year
        if (!validateYear(data.yearOfJoining)) {
            setErrors({ yearOfJoining: "Please enter a valid 4-digit year" });
            return;
        }

        // Validate branch
        if (!validateBranch(data.branch)) {
            setErrors({ branch: "Branch must be between 2 to 50 characters" });
            return;
        }

        // Validate college name
        if (!validateCollegeName(data.collegeName)) {
            setErrors({ collegeName: "College name must be at least 6 characters" });
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
            <h2 className='text-[#2C3441] text-[22px] sm:text-[30px] md:text-[34px] text-normal  font-normal font-[Quicksand] mb-[3rem]'>Education Information</h2>
            <form className='' onSubmit={handleSubmit}>
            <div className="grid gap-y-8 grid-cols-2 gap-x-6">
              <div className="">
                <div className="form-group w-full">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                   Qualificatons
                  </label>
             <input
        className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`} 
                    type="text"
                    placeholder="Qualificatons"
                    name="degree"
                    value={data.degree}
                    onChange={(e) => handleChange("degree", e.target.value)}
                    required
                />
                 </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                    College/University
                  </label>
                 <input
        className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`} 
                    type="text"
                    placeholder=" College/University"
                    name="collegeName"
                    value={data.collegeName}
                    onChange={(e) => handleChange("collegeName", e.target.value)}
                    required
                />
                {errors.collegeName && <div className='text-[red] font-[bold] text-center text-[14px]'>{errors.collegeName}</div>}
                </div></div>
                <div className="col-md-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                    Branch
                  </label>
                 <input
        className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`} 
                    type="text"
                    placeholder="Branch"
                    name="branch"
                    value={data.branch}
                    onChange={(e) => handleChange("branch", e.target.value)}
                    required
                />
                {errors.branch && <div className='text-[red] font-[bold] text-center text-[14px]'>{errors.branch}</div>}
                </div></div>
                <div className="col-md-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                   Pass out year 
                  </label>
                 <input
        className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`} 
                    type="number"
                    placeholder="Pass out year"
                    name="yearOfJoining"
                    value={data.yearOfJoining}
                    onChange={(e) => handleChange("yearOfJoining", e.target.value)}
                    required
                />
                {errors.yearOfJoining && <div className='text-[red] font-[bold] text-center text-[14px]'>{errors.yearOfJoining}</div>}
                </div></div>
                <div className="col-md-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                   City
                  </label>
                 <input
        className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`} 
          type="text"
          name="city"
          placeholder="City"
          value={data.city}
          onChange={(e) => handleChange("city", e.target.value)}
          required
        />
          </div></div>
        <div className="col-md-6">
                <div className="form-group">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                    State
                  </label>
                 <input
        className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`} 
          type="text"
          name="state"
          placeholder="State"
          value={data.state}
          onChange={(e) => handleChange("state", e.target.value)}
          required
        />
        {errors.state && <div className='text-[red] font-[bold] text-center text-[14px]'>{errors.state}</div>}
        </div></div>
        <div className="mt-5">
                {/* <Btns> */}
                    <button onClick={prevStep} className='w-fit py-2.5 px-5 bg-transparent font-open-sans text-gray-700 p-2 border border-gray-700 rounded-full mr-5 hover:bg-red-500 hover:border-red-500 hover:text-white'>Previous</button>
                    <button type="submit" className='wb-fit py-2.5 px-5 bg-transparent font-open-sans text-gray-700 p-2 border border-gray-700 rounded-full mr-5 hover:bg-red-500 hover:border-red-500 hover:text-white'> Save & Next</button>
                {/* </Btns> */}
           </div>
           </div> </form>
            </div>
      </div>
    </div>
    )
}

export default Education;

