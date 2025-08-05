
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";


const Workexp = ({ prevStep, formData, handleChange}) => {
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);


  const router=useRouter();
const hideConfirmationMessage = () => {
  setShowConfirmation(false);
};
const [na,apply,role,jobL,workT,compL,jobt]=document.location.pathname.split("/");

const updatedData = {
  ...data,
  applyFor:role,
  jobLocation:jobL,
  workType:workT,
  companyLocation:compL,
  jobType:jobt
};
  useEffect(() => {
    setData(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    Object.keys(updatedData).forEach((key) => {
      formData1.append(key, updatedData[key]);
    });

      // Append the file to formData
      formData1.append('document', updatedData.document);
      console.log(formData1,data);
    try {
      const response = await axios.post(
        "https://amazonpro.in/hexabells/api/carrier",
       formData1
      );
console.log(response)
      if (response.data.message === "Record added successfully") {
       const res= await fetch('/api/career', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: JSON.stringify(updatedData),
        });
      } else {
        
        console.error("Error submitting form. Status: ", response.status);
      }
    } catch (error) {
   
      console.error("Error submitting form:", error.message);
    }
    // finally{
    //   setShowConfirmation(true);
     
    // }
  };
//   if(showConfirmation===true){
//     setTimeout(() => {
//         setShowConfirmation(false);
//         router.push("/")
//     }, 3000);
// }

  // console.log(formData, data);
  return (
    <div className='mt-12'>
    <div className="container">
      <div className='max-w-[940px] mx-auto'>
          <h2 className="text-[#2C3441] text-[22px] sm:text-[30px] md:text-[34px] text-normal  font-normal font-[Quicksand] mb-[3rem]">Work Experience</h2>
          <form className='' onSubmit={handleSubmit}>
          <div className="grid gap-y-8 grid-cols-2 gap-x-6">
              <div className="">
                <div className="form-group w-full">
                  <label
                    htmlFor=""
                    className={`font-medium text-[Poppins] mb-[0.5rem] `}
                  >
                   Company name
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="text"
                    placeholder=" Company name"
                    name="endd"
                    value={data.endd}
                    onChange={(e) => handleChange("endd", e.target.value)}
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
                   Designation
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="text"
                    placeholder="Designation"
                    name="employer"
                    value={data.employer}
                    onChange={(e) => handleChange("employer", e.target.value)}
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
                   Experience
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="text"
                    placeholder="Experience"
                    name="exp"
                    value={data.exp}
                    onChange={(e) => handleChange("exp", e.target.value)}
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
                   Notice period
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="text"
                    placeholder=" Notice period"
                    name="startd"
                    value={data.startd}
                    onChange={(e) => handleChange("startd", e.target.value)}
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
                    City
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="text"
                    placeholder="City"
                    name="jcity"
                    value={data.jcity}
                    onChange={(e) => handleChange("jcity", e.target.value)}
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
                    Country
                  </label>
                  <input
                    className={`px-5 w-full py-2.5 rounded-[50px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    type="text"
                    placeholder="Country"
                    name="jcountry"
                    value={data.jcountry}
                    onChange={(e) => handleChange("jcountry", e.target.value)}
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
                    Reason for leaving
                  </label>
                  <textarea
                    className={`px-5 w-full py-2.5 rounded-[20px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    placeholder="Reason for leaving"
                    name="reason"
                    value={data.reason}
                    onChange={(e) => handleChange("reason", e.target.value)}
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
                   Cover letter
                  </label>
                  <textarea
                    className={`px-5 w-full py-2.5 rounded-[20px] outline-none border border-solid border-[#DFDFDF] bg-[#F6F6F6] cursor-pointer font-light`}
                    placeholder="Cover letter"
                    name="desc"
                    value={data.desc}
                    onChange={(e) => handleChange("desc", e.target.value)}
                    required
                  />
                  {errors.shortBio && <div className='text-[red] font-[bold] text-center text-[14px]'>{errors.shortBio}</div>}
                </div>
              </div>
              <div className="mt-5">
                {/* <Btns> */}
                <button onClick={prevStep} className="wb-fit py-2.5 px-5 bg-transparent font-open-sans text-gray-700 p-2 border border-gray-700 rounded-full mr-5 hover:bg-red-500 hover:border-red-500 hover:text-white">
                  Previous
                </button>
                <button type="submit" className="wb-fit py-2.5 px-5 bg-transparent font-open-sans text-gray-700 p-2 border border-gray-700 rounded-full mr-5 hover:bg-red-500 hover:border-red-500 hover:text-white">
                  Save & Submit
                </button>
                {/* </Btns> */}
              </div>
              {/* {showConfirmation && ( */}
        {/* // <div className={styles.overlayCon}><div className={styles.overlay}>&nbsp;</div><div className={styles["confirmation-message"]}>
                                    
        //                             <div className={styles.dilogbox}>
        //                                 <div className={styles.rounds}>
        //                             <span className={styles.spannn}><FaCheck size={50}/></span>
        //                             </div>
        //                             <div className={styles.dilog}>

        //                         <span>Thank You!</span>
        //                             <div className={styles.confmsg}>

        //                             Your response is successfully submitted, will reach out to you soon!
                                    
        //                             </div>
        //                             {/* <button className={styles["cancel-button"]} onClick={hideConfirmationMessage}>
        //                            OK
        //                             </button> */}
                                {/* </div></div>
                               </div>
                                </div>  */}
       {/* )}  */}
          {showConfirmation && (
              <div className='h-screen overflow-hidden fixed top-0 left-0 w-full'>
                {/* <div className={styles.overlay}>&nbsp;</div> */}
                <div className='p-0 sm:p-4 border-0.5 border-solid border-gray-300 rounded-5 absolute z-19999 top-1/5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white w-full sm:w-auto shadow-lg container' >
                  <div className='relative flex items-center justify-between'>
                  <div className='relative flex items-start justify-start py-[20px] gap-[20px]'>
                     <div className='flex items-start justify-start gap-[20px]'>
                        <div className='flex items-center justify-center h-[30px] w-[30px] p-[10px] rounded-full text-[white] bg-[#198754]'>
                       <FaCheck/>
                      </div> 
                      
                      </div>
                     <div className='flex gap-[20px] items-center'>
                     <span className='text-[20px] font-[600] text-[#198754]'>success</span>
                      <div className='font-medium text-dark-primary text-center text-[18px]'>
                        Your response is successfully submitted, will reach out
                        to you soon!
                      </div>
                      </div>
                   
                     
                  
                
                      {/* <button className={styles["cancel-button"]} onClick={hideConfirmationMessage}>
                                   OK
                                    </button> */}
                    </div>
                    <span onClick={hideConfirmationMessage} style={{cursor:"pointer"}}>
                       X
                      </span>
                  </div>
                </div>
              </div>
            )} 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Workexp;
