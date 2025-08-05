"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md"

import emoji1 from "../../../../public/assets/images/blogs_updated/emoji1.svg";
import Link from "next/link";
import Button from "@/Components/UI/Button";
import { blogs } from "./blogs";

const cat = ["All Categories",
  "Technology",
  "Engineering",
  "Android Applications",
  "UI/UX",
  "Artificial Intelligence",
  "Front end Technologies",
]

const BlogItem = ({ blog, formatDate }) => {
  return (
    <div key={blog.id} className="mb-8 mx-auto  w-full container flex  justify-center gap-6 flex-col">
      <div className="flex gap-5 flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full  md:w-1/2">
          <Image
            src={blog.image}
            alt={"banner_image"}
            width={330}
            height={330}
            className=" w-full object-cover"
          />
          </div>
        <div className="flex w-full  md:w-1/2 flex-col justify-center px-6">
          <div className="flex gap-2 items-center">
            <div>
              <Image src={emoji1} alt={emoji1} height={50} width={50} className="lg:h-[50px] lg:w-[50px] h-[40px] w-[40px]" />
            </div>
            <div>
              <p className="lg:text-[18px] text-[14px] text-primary">{blog.author}</p>
              <p className="lg:text-[18px] text-[14px] text-body">{blog.date}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-3 g:text-[18px] text-[14px] text-body">{blog.cat}</p>
            <h4 className="mb-3 text-[20px] lg:text-4xl font-semibold leading-[30px] line-clamp-2 capitalize text-body">{blog.title}</h4>
            <p className="g:text-[18px] text-[14px] line-clamp-4 text-body">{blog.summery}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCategories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(blogs || []);
  const [lastPage, setLastPage] = useState(null);
  const [cur, setCur] = useState(1);
  const categorySectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  // const [lastP, setLastP] = useState(null);

  // Add these state variables at the beginning of the component
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const formatDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  // useEffect(() => {
  //   const fetchAllBlogs = async () => {
  //     try {
  //       if (lastPage !== null && currentPage > lastPage) {
  //         return;
  //       }

  //       const url = `https://sagecrm.thesagenext.com/hexabellblog/api/posts?page=${currentPage}`;
  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         throw new Error(`Failed to fetch data. Status: ${response.status}`);
  //       }

  //       const fetchedData = await response.json();
  //       setLastPage(fetchedData.last_page);

  //       setTotalBlogs((prevTotalBlogs) => [
  //         ...prevTotalBlogs,
  //         ...fetchedData.data.filter((newBlog) => !prevTotalBlogs.some((blog) => blog.id === newBlog.id)),
  //       ]);

  //       setCurrentPage((prev) => (prev < lastPage ? prev + 1 : prev));

  //     } catch (error) {
  //       console.error(error);
  //       // Handle errors, e.g., show an error message to the user
  //     }
  //   };

  //   fetchAllBlogs();
  // }, [currentPage, cur, lastPage, setLastPage, setTotalBlogs]);

  const itemsPerPage = 5;
  const startIndex = (cur - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredBlogs = totalBlogs
    .filter((blog) => selectedCategory === "All Categories" || blog.cat.toLowerCase() === selectedCategory.toLowerCase());

  const displayedBlogs = filteredBlogs.slice(startIndex, endIndex);

  const lastP = Math.ceil(filteredBlogs.length / itemsPerPage);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
    setCur(1);
  };
  const handlePageChange = (newPage) => {
    setCur(newPage);
    categorySectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // console.log(displayedBlogs);


  return (
    <section ref={categorySectionRef} className="mb-20">
      <div className="main font-[Poppins]">
        <div className="flex flex-wrap gap-5 text-[16px] font-[400] font-[Poppins] pb-[20px] mb-[50px] xl:justify-between">

          {cat?.map((itm, i) => {
            return (
              <div className={`cursor-pointer flex items-center text-[#fff] py-[7px] px-[7px]  ${itm === activeCategory ? '  bg-primary text-[18px] outline-none border-none' : ''}`}
                key={i}
                onClick={() => handleCategoryChange(itm)}>{itm}</div>
            )
          })}
        </div>

        {displayedBlogs.length > 0 ? displayedBlogs.map((itm) => <Link href={`/blog/${itm.slug}`} key={itm.id}>
          <BlogItem blog={itm} formatDate={formatDate} />
        </Link>) : <h1 className="text-primary text-3xl text-center">Blogs Not Found</h1>}
        {lastP === 0 ? null : (
          <div className="flex gap-3 items-center justify-center mt-[50px]">
            {cur > 1 &&
              <Button reverseIcon className=" flex-row-reverse " onClick={() => handlePageChange(cur - 1)} text="Prev" />
            }
            {cur < lastP &&
              <Button onClick={() => handlePageChange(cur + 1)} text="Next" />}
          </div>
        )}
      </div>

    </section>
  );
};

export default BlogCategories;
