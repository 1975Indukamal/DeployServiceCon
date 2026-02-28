'use client';

import React, { useState } from "react";
import Workexp from "./Workexp";
import Education from "./Education";
import Personal from "./Personal";
import Stepper from "react-stepper-horizontal";
import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ApplyClientProps {
    job: string[];
}

export default function ApplyClient({ job }: ApplyClientProps) {
    const router = useRouter();
    const [jobt, locationT, workT, loaction, department] = job;

    const convert = (str: string) => {
        if (!str) return "";
        let lastIndex = str.lastIndexOf('-');
        if (lastIndex !== -1) {
            str = str.substring(0, lastIndex).split("-").join(" ") + ',' + str.substring(lastIndex + 1);
        }
        return str;
    };

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
    };

    const prevStep = () => {
        setFormData({ ...formData, step: formData.step - 1 });
    };

    const handleChange = (name: string, value: any) => {
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
                <div className={`flex justify-center flex-col items-center p-[20px]  border-[0.5px] border-[#ebebeb]`}>
                    <h3 className="text-[24px] font-medium md:text-[30px] capitalize">Applying for: {jobt?.split("-").join(" ")}</h3>
                    <div className="text-dark flex space-x-3">
                        <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]">{convert(loaction)}</div>
                        <CircleIcon />
                        <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]">{locationT?.split("-").join(" ")}</div>
                        <CircleIcon />
                        <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]">{workT?.split("-").join(" ")}</div>
                        <CircleIcon />
                        <div className="text-[14px] text-[#707070] font-[Quicksand] md:text-[18px]"> {department?.split("-").join(" ")}</div>
                    </div>
                </div>
                <div style={{ marginTop: "30px" }}>
                    <Stepper
                        size={35}
                        steps={steps}
                        circleFontSize={16}
                        titleFontSize={14}
                        activeColor="#eb7373"
                        completeBarColor="#eb7373"
                        completeColor="#eb7373"
                        activeStep={formData.step - 1}
                    />
                </div>
            </div>

            {renderStep()}

            <div className="container flex justify-center flex-col items-center gap-3 mt-20">
                <span>
                    <Image
                        className="w-[186.276px] h-[33px]"
                        src="/assets/images/log1.png"
                        alt="ServiceConnect Logo"
                        width={186}
                        height={33}
                        priority
                    />
                </span>
                <div className="text-[#5f5e5e] font-[Quicksand] text-xs leading-7">
                    2024 ServiceConnect Technologies Pvt. Ltd.. All rights reserved
                </div>
                <Link
                    href={"https://www.ServiceConnekt.com/"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    https://www.ServiceConnect.com
                </Link>
            </div>

            <style jsx>{`
                .arrowss:hover .arrows {
                    transform: translateX(-5px);
                }
                .arrows {
                    transition: 0.3s all;
                }
            `}</style>
        </div>
    );
}

function CircleIcon() {
    return (
        <div className="flex items-center mx-3">
            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" fill="#9B9B9B" />
            </svg>
        </div>
    );
}
