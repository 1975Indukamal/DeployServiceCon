"use client"
import React, { useState } from "react";
import Workexp from "./_components/Workexp";
import Education from "./_components/Education";
import Personal from "./_components/Personal";
import Stepper from "react-stepper-horizontal";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const CompanyForm = ({  params }) => {

  const router = useRouter();
  const [jobt, locationT, workT, location, department] = params.job;

  const convert = (str) => {
    let lastIndex = str.lastIndexOf('-');

    if (lastIndex !== -1) {
      str = str.substring(0, lastIndex).split("-").join(" ") + ',' + str.substring(lastIndex + 1);
    }
    return str;
  }
  const [formData, setFormData] = useState({
    step: 1,
    name: "",
    city: "",
    document: "",
    email: "",
    degree: "",
    mobileNumber: "",
    websiteUrl: "",
    employer: "",
    jcity: "",
    jcountry: "",
    startd: "",
    endd: "",
    desc: "",
    reason: "",
    exp: "",
 
  });

  const nextStep = () => {
    setFormData({ ...formData, step: formData.step + 1 });
    // console.log(formData);
  };

  const prevStep = () => {
    setFormData({ ...formData, step: formData.step - 1 });
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const steps = [
    { title: "Personal Information" },
    { title: "Education Information" },
    { title: "Work Experience" },
  ];

  const renderStep = () => {
    switch (formData.step) {
      case 1:
        return (
          <Personal
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 2:
        return (
          <Education
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
          />
        );
      case 3:
        return (
          <Workexp
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            // title={title}
          />
        );
      default:
        return null;
    }
  };
  const handleSub = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to go back to the career page?"
    );

    if (isConfirmed) {
      router.push("/career");
    }
  };

  return (
    <>
  
      <div style={{ marginBlock: "2rem" }}>
        <div className="container mb-4">
          <div
            className="text-secondary flex justify-center items-center arrowss"
            style={{ cursor: "pointer" }}
            onClick={handleSub}
          >
            <span className="arrows">
              <MdArrowBackIos />{" "}
            </span>
            Back to career
          </div>
        </div>

        <div className="container">
          <div
            className={`flex justify-center flex-col items-center p-[20px]  border-[0.5px] border-[#ebebeb]`}
          >
            <h3 className="text-[24px] font-medium md:text-[30px] capitalize">Applying for: {jobt}</h3>
            <div className="text-dark flex space-x-3">
              <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]">{convert(location)}</div>
              <div className="flex items-center mx-3">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"
                    fill="#9B9B9B"
                  />
                </svg>
              </div>
              <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]">{locationT.split("-").join(" ")}</div>
              <div className="flex items-center mx-3">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"
                    fill="#9B9B9B"
                  />
                </svg>
              </div>
              <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]">{workT.split("-").join(" ")}</div>
              <div className="flex items-center mx-3">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"
                    fill="#9B9B9B"
                  />
                </svg>
              </div>
              <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]"> {department.split("-").join(" ")}</div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Stepper
              size={35}
              steps={steps}
              circleFontSize={16} // Set the font size of the step number
              titleFontSize={14}
              activeColor="#eb7373"
              completeBarColor="#eb7373"
              completeColor="#eb7373"
              activeStep={formData.step - 1}
            />
          </div>
        </div>

        {renderStep()}
        <div
          className="container flex justify-center flex-col items-center gap-3 mt-20"
        >
          <span >
            <img
              className="w-[186.276px] h-[33px]"
              src={`/assets/images/log1.png`}
              alt="ServiceConnect Logo"
            />
          </span>

          <div className="text-[#5f5e5e] font-[Quicksand] text-xs leading-7">
            2023 ServiceConnect Technologies Pvt. Ltd.. All rights reserved
          </div>
          <Link
            href={"https://www.ServiceConnekt.com/"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            https://www.ServiceConnect.com
          </Link>
        </div>
        <style jsx>
          {`
            @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
            .pointer {
              cursor: pointer;
            }
            .COLORhuME {
              color: #707070 !important;
            }
            .text-primary {
              color: #eb7373 !important;
            }
            .text-secondary {
              color: #5f5e5e !important;
            }

            .num {
              font-size: 24px;
            }
            .font-weight-400 {
              font-weight: 400 !important;
            }
            .font-weight-600 {
              font-weight: 600 !important;
            }
            .font-weight-700 {
              font-weight: 700 !important;
            }
            .font-weight-500 {
              font-weight: 500 !important;
            }
            .arrows {
              transition: 0.3s all;
            }
            .arrowss:hover .arrows {
              transform: translateX(-5px);
            }
            .CareerButton {
              background-color: #2c3441 !important;
              font-family: "Open Sans", sans-serif !important;
              color: white !important;
              padding: 8px 44px !important;
              border: 1px solid #2c3441 !important;
            }
            .CareerButton:hover {
              background-color: #eb7373 !important;
              border: 1px solid #eb7373 !important;
              font-family: "Open Sans", sans-serif !important;
            }
            .logo img {
              width: 186.276px;
              height: 33px;
            }
            .SAND {
              font-family: Quicksand !important;
            }
            .sand {
              margin-bottom: 60px;
              margin-top: 150px;
            }
            .flex-col {
              flex-colder: 0.5px solid #ebebeb;
              padding: 20px;
            }
            .text-[14px] text-[#707070] font-[Quicksand] md:text-[18px] {
              font-size: 14px !important;
              font-family: Quicksand !important;
              color: #707070;
            }
            .mt-10 {
              margin-top: 40px !important;
            }
            .mt-5 {
              margin-top: 20px !important;
            }
            .mt-6 {
              margin-top: 24px !important;
            }
            .my-6 {
              margin-top: 24px !important;
              margin-bottom: 24px !important;
            }
            text-24 {
              font-size: 24px !important;
            }
            .leading-7 {
              line-height: 30px !important;
            }
            .text-58 {
              font-size: 58px !important;
            }
            .copyright {
              color: var(--Text-Secondry, #5f5e5e) !important;
              // text-align: right;
              font-family: Quicksand !important;
              font-size: 12px !important;
              font-style: normal;
              font-weight: 500 !important;
              line-height: 28px;
            }
            .text-14 {
              font-size: 14px !important;
            }
            .text-23 {
              font-size: 23px !important;
            }

            .text-58 {
              font-size: 58px !important;
            }
            .text-18 {
              font-size: 18px !important;
            }
            .text-38 {
              font-size: 23px !important;
            }
            .CareerButton {
              background-color: #2c3441 !important;
              font-family: "Open Sans", sans-serif !important;
              color: white !important;
              padding: 8px 44px !important;
              flex-colder: 1px solid #2c3441 !important;
            }
            .CareerButton:hover {
              background-color: #eb7373 !important;
              flex-colder: 1px solid #eb7373 !important;
              font-family: "Open Sans", sans-serif !important;
            }
            .flex-colder-width {
              width: 59px !important;
              flex-colder-top: 1px solid #707070 !important;
            }
            @media (min-width: 768px) {
              .text-38 {
                font-size: 38px !important;
              }
              .w-80 {
                width: 80% !important;
              }
              .text-[14px] text-[#707070] font-[Quicksand] md:text-[18px] {
                font-size: 18px !important;
                color: #707070;
              }
              .w-55 {
                width: 60%;
              }
              .flex-colder-width {
                width: 29px;
                flex-colder-top: 1px solid #707070;
              }
              .text-24 {
                font-size: 24px !important;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default CompanyForm;
