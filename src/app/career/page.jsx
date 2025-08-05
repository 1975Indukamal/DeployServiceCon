"use client"
import React, { useEffect, useState } from "react";
import LineImage from "@/../public/Line_59.png";
import Image from "next/image";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";
import  logo from "../../../public/assets/images/hexabells-logo.webp"
import { MdArrowBackIos } from "react-icons/md";


const data = [
  // {
  //   id:1,
  //   job:"fullstack developer",
  //   jobs:[{jobt:"mern",locationT:"hybrid",
  //   loaction:"Calle Font Vella,Spain",
  //   workT:"internship",
  //   depa:"customer services",
  //   },{jobt:"mean",locationT:"Remote",
  //   loaction:"Calle Font Vella,Spain",
  //   workT:"internship",
  //   depa:"customer services",
  // }],
  //   openings:"2"
  // },
  // {
  //   id:2,
  //   job:"ui developer",
  //   jobs:[{jobt:"mern",locationT:"hybrid",
  //   loaction:"Calle Font Vella,Spain",
  //   workT:"internship",
  //   depa:"engineering",
  //   },{jobt:"mean",locationT:"Remote",
  //   loaction:"Delhi ,India",
  //   workT:"Full time employement",
  //   depa:"engineering",
  // }],
  // openings:"2" 
  // },
 
];

const FilterDropdown = ({
  label,
  options,
  onSelect,
  selectedOptions,
  isOpen,
  onToggle,
}) => {
  const handleOptionClick = (option, event) => {
    // Prevent the event from propagating to the parent div (which would close the dropdown)
    event.stopPropagation();
    onSelect(label, option);
  };

  return (
    <div className={`relative`}>
      <div
     id="labelss"
        onClick={onToggle}
        className='relative cursor-pointer text-gray-700 font-[Poppins] text-[18px] font-medium flex items-center whitespace-nowrap'
      >
        {label}{" "}
        <span className='text-[30px]'>
          <MdOutlineArrowDropDown />
        </span>
      </div>
      {isOpen && (
        <div className='shadow-md p-5 mt-[20px] flex flex-col absolute bg-white right-[10px]'>
          {options.map((option) => (
            <div
              key={option}
              className=" px-[5px] py-[10px] text-gray-700 flex items-center gap-4 text-[18px] font-[Poppins] font-medium relative"
              onClick={(event) => handleOptionClick(option, event)}
            >
              <div className='relative inline-block w-[20px] h-[20px] bg-white border border-gray-700 rounded-[5px] mr-[5px] text-center text-red-500 leading-[20px] text-sm font-medium'>
                {selectedOptions.includes(option) && "✓"}
              </div>
              <span className='whitespace-nowrap'>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const FilterDropdownss = ({
  label,
  options,
  onSelect,
  selectedOptions,
  isOpen,
  // onToggle,
}) => {
  const handleOptionClickss = (option, event) => {
    // Prevent the event from propagating to the parent div (which would close the dropdown)
    event.stopPropagation();
    onSelect(label, option);
  };

  return (
    <div
      className={`text-[14px] sm:text-[18px] cursor-pointer text-[#707070] flex flex-col gap-3 `}
    >
      <div
        //   onClick={onToggle}
        className="relative whitespace-nowrap font-[700] text-[#5F5E5E]"
      >
        {label}:
      </div>

      <div
        className="flex flex-col gap-3 ms-3"
        //    className={styles.checboxmenu}
      >
        {options.map((option) => (
          <div
            key={option}
            className={"flex items-center gap-2"}
            onClick={(event) => handleOptionClickss(option, event)}
          >
           <div className="relative inline-block w-[20px] h-[20px] bg-white border border-gray-700 rounded-[5px] mr-[5px] text-center text-red-500 leading-[20px] text-sm font-medium">
              {selectedOptions.includes(option) && "✓"}
            </div>
            <span
              // className={styles.filterop}
        className="whitespace-nowrap cursor-pointer text-gray-700 font-[Poppins] text-[14px] sm:text-[18px] font-medium flex items-center"
            >
              {option}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


const page = () => {
  const [showb,setShowb]=useState(false);

  // const MetaData = GetMetaData("Career");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    "Location type": [],
    Location: [],
    Department: [],
    "Work type": [],
  });

  
  const handleResetFilters = () => {
    setSelectedFilters({
      "Location type": [],
      Location: [],
      Department: [],
      "Work type": [],
    });
  };
  const handleFilterSelect = (filter, option) => {
    setSelectedFilters((prevFilters) => {
      const isSelected = prevFilters[filter].includes(option);
      return {
        ...prevFilters,
        [filter]: isSelected
          ? prevFilters[filter].filter(
              (selectedOption) => selectedOption !== option
            )
          : [...prevFilters[filter], option],
      };
    });
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleGlobalClick = (event) => {
    // Close the dropdown when clicking outside
    if (openDropdown && !event.target.closest(`#labelss`)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    // Add a global click event listener to close the dropdown
    document.addEventListener("click", handleGlobalClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [openDropdown]);

  const filterData = (item) => {
    const locationTypeFilter = selectedFilters["Location type"];
    const locationFilter = selectedFilters["Location"];
    const departmentFilter = selectedFilters["Department"];
    const workTypeFilter = selectedFilters["Work type"];

    const checkFilter = (filter, itemValue) => {
      const filterWords = filter
        .toString()
        .toLowerCase()
        .split(/[ ,]+/)
        .filter(Boolean); // Remove empty strings
    
      const itemWords = String(itemValue).toLowerCase().split(/[ ,]+/); // Ensure itemValue is a string
      if (filterWords.includes("all")) {
        return true; // Show all posts
      }
      return (
        filterWords.length === 0 ||
        filterWords.some((word) => itemWords.includes(word))
      );
    };
    

    return (
      checkFilter(locationTypeFilter, item.locationT) &&
      checkFilter(locationFilter, item.loaction) &&
      checkFilter(departmentFilter, item.depa) &&
      checkFilter(workTypeFilter, item.workT)
    );
  };
  return (
    <>
      <div className="container my-12 relative">
        <div className="flex justify-between">
        <h1 className="text-primary text-[58px] font-light mb-12">Careers</h1>
        <div></div>
        {data.length > 0 &&  <div className="block lg:hidden  mt-7">
        <button type="button" className="text-[14px] sm:text-[18px] px-6  text-white bg-secondary hover:bg-primary" onClick={()=>setShowb(true)}>Filter</button>
        </div>}
        </div>
        {data.length > 0 && (
        <div className="lg:flex hidden  justify-between ">
          <div className="flex flex-col">
            <h3 className="flex flex-col text-[14px] sm:text-[24px]  font-semibold mb-2 text-[#2C3441]">
              Filter by
            </h3>
            <Image src={LineImage} alt="Vector" className="" />
          </div>
          <div className="hidden lg:flex lg:gap-4 font-medium">
              <FilterDropdown
                label="Location type"
                options={["All", "On-site", "Hybrid", "Remote"]}
                onSelect={handleFilterSelect}
                selectedOptions={selectedFilters["Location type"]}
                isOpen={openDropdown === "Location type"}
                onToggle={() => handleDropdownToggle("Location type")}
              />
              <FilterDropdown
                label="Location"
                options={[
                  "Noida , UP ,India",
                  "Delhi , India",
                  "Calle Font Vella , Spain",
                ]}
                onSelect={handleFilterSelect}
                selectedOptions={selectedFilters["Location"]}
                isOpen={openDropdown === "Location"}
                onToggle={() => handleDropdownToggle("Location")}
              />
              <FilterDropdown
                label="Department"
                options={[
                  `Customer Services (${"01"})`,
                  `Engineering (${"02"})`,
                  `Design (${"02"})`,
                  `Marketing (${"02"})`,
                  `Technical Support (${"02"})`,
                  `Sales (${"02"})`,
                ]}
                onSelect={handleFilterSelect}
                selectedOptions={selectedFilters["Department"]}
                isOpen={openDropdown === "Department"}
                onToggle={() => handleDropdownToggle("Department")}
              />
              <FilterDropdown
                label="Work type"
                options={[
                  "Full time employement",
                  "Internship",
                  "Contractual employment",
                ]}
                onSelect={handleFilterSelect}
                selectedOptions={selectedFilters["Work type"]}
                isOpen={openDropdown === "Work type"}
                onToggle={() => handleDropdownToggle("Work type")}
              />
            </div>
        </div>
         )} 
         {data.length > 0 ? (
  <>
    {data.some((itms) => itms.jobs.filter(filterData).length > 0) ? (
      data.map((itms) => {
        const filteredJobs = itms.jobs.filter(filterData);

        return (
          <>
            {filteredJobs.length === 0 ? null : (
              <div key={itms.id} className={`flex md:justify-between flex-col`}>
                <div className="">
                  <div className="flex flex-col mt-5">
                    <div className="text-dark flex font-normal">
                      <h1 className="text-[38px] font-normal capitalize">{itms.job}</h1>
                      <div className=" flex items-center text-[24px] mx-2">
                        ({itms.openings})
                      </div>
                    </div>
                    <div className="my-6">
                      <span className="text-[24px]">Core Platform</span>
                      <div className="my-2 w-[59px] border border-[#707070]"></div>
                    </div>
                  </div>
                  {filteredJobs.map((itm) => (
                    <div className="flex items-start md:items-center md:justify-between flex-col md:flex-row justify-start" key={itm.jobt}>
                       <div className="my-2">

<div className="text-[24px] text-[#2C3441] font-medium font-[Quicksand] mb-3 capitalize">{itm.jobt}</div>

<div className="text-dark flex items-center space-x-3 flex-wrap">
  <div className="text-[14px] md:text-[18px] text-[#5F5E5E] font-[Poppins]">{itm.loaction}</div>
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
        fill="#9B9B9B" />
    </svg>
  </div>
  <div className="text-[14px] md:text-[18px] text-[#5F5E5E] font-[Poppins]">{itm.locationT}</div>
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
        fill="#9B9B9B" />
    </svg>
  </div>
  <div className="text-[14px] md:text-[18px] text-[#5F5E5E] font-[Poppins]">{itm.workT}</div>

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
        fill="#9B9B9B" />
    </svg>
  </div>
  <div className="text-[14px] md:text-[18px] text-[#5F5E5E] font-[Poppins]"> {itm.depa}</div>
</div>
</div>
<div className={`flex items-center py-[2rem] md:py-0`}>
                            <Link
                            
                             href={`/apply/${
                              itm.jobt.replace(/\s+/g, '-').replace(/,/g, '-')
                            }/${
                              itm.locationT.replace(/\s+/g, '-').replace(/,/g, '-')
                            }/${
                              itm.depa.replace(/\s+/g, '-').replace(/,/g, '-')
                            }/${
                              itm.loaction.replace(/\s+/g, '-').replace(/,/g, '-')
                            }/${
                              itm.workT.replace(/\s+/g, '-').replace(/,/g, '-')
                            }`}
                            >
                              <button type="button" className='text-[14px] sm:text-[18px] px-6 py-2 text-white bg-dark-primary hover:bg-primary rounded-3xl'>Apply</button>
                            </Link>
                          </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
             <hr className='my-[15px]' />
          </>
        );
      })
    ) : (
      <div className='min-h-[300px] flex items-center'>
        <p className="text-[38px] font-normal">Match Not Found.</p>
      </div>
    )}
   
  </>
) : (
  <div className='min-h-[300px] flex items-center'>
    <p className="text-[38px] font-normal">Currently, There are no active job openings.</p>
  </div>
)}
{data.some((itms) => itms.jobs.filter(filterData).length > 0) && (
      <div className="flex justify-center cursor-pointer text-secondary mt-12">
        {/* <div className="">Load more &#x2198;</div> */}
      </div>
    )}

      </div>
      {data.length > 0 && showb && (
        <div
          className="lg:hidden fixed h-full overflow-auto top-0 bg-white w-full right-0 block z-[99999]"
        >
          
           <Link href="/" className="py-[20px] px-[40px] sticky top-0 bg-white z-[999999]">
         
          <Image src={logo} alt='hexabells logo' width={221} height={40} className="w-[150px] h-[30px] sm:h-[40px] sm:w-[221px]"/>
        </Link>
          <div className='flex items-center justify-between py-[20px] px-[40px] my-4 sm:my-12'>
            <div className='flex items-center justify-center text-[#2C3441] font-[Quicksand] text-[18px] font-[700]' onClick={() => setShowb(false)}>
              <span className='flex items-center justify-center text-[#2C3441] font-[Quicksand] text-[18px] font-[700]'>
                <MdArrowBackIos />
              </span>
              <span>Filter</span>
            </div>
            <span className='text-[#EB7373] font-[Quicksand] text-[18px] font-[400]' onClick={handleResetFilters}>Reset</span>
          </div>
          <div>
            <div className="mt-4 mb-16 sm:mb-8 sm:my-4 px-[40px]">
              <div className="gap-7 flex-col flex font-[500]">
                <FilterDropdownss
                  label="Location type"
                  options={["All", "On-site", "Hybrid", "Remote"]}
                  onSelect={handleFilterSelect}
                  selectedOptions={selectedFilters["Location type"]}
                  // isOpen={openDropdown === "Location type"}
                  onToggle={() => handleDropdownToggle("Location type")}
                />
                <FilterDropdownss
                  label="Location"
                  options={[
                    "Noida , UP ,India",
                    "Delhi , India",
                    "Calle Font Vella , Spain",
                  ]}
                  onSelect={handleFilterSelect}
                  selectedOptions={selectedFilters["Location"]}
                  // isOpen={openDropdown === "Location"}
                  onToggle={() => handleDropdownToggle("Location")}
                />
                <FilterDropdownss
                  label="Department"
                  options={[
                    `Customer Services (${"01"})`,
                    `Engineering (${"02"})`,
                    `Design (${"02"})`,
                    `Marketing (${"02"})`,
                    `Technical Support (${"02"})`,
                    `Sales (${"02"})`,
                  ]}
                  onSelect={handleFilterSelect}
                  selectedOptions={selectedFilters["Department"]}
                  // isOpen={openDropdown === "Department"}
                  onToggle={() => handleDropdownToggle("Department")}
                />
                <FilterDropdownss
                  label="Work type"
                  options={[
                    "Full time employement",
                    "Internship",
                    "Contractual employment",
                  ]}
                  onSelect={handleFilterSelect}
                  selectedOptions={selectedFilters["Work type"]}
                  // isOpen={openDropdown === "Work type"}
                  onToggle={() => handleDropdownToggle("Work type")}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;