"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../icons/Logo1";
// import "./Navbar.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-work", label: "work" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const pathname = usePathname();

  const activeClass =
    "rounded-lg bg-primary bg-opacity-60 shadow-2xl px-3 py-2 border-2 border-body";

  // auto close on scroll

  useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;

    // Only close when user scrolls down
    if (openMobile && currentY > lastY) {
      setOpenMobile(false);
    }

    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [openMobile]);


  // auto close on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && openMobile) setOpenMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openMobile]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center bg-opacity-80 bg-custombgc lg:py-5 sticky top-0 z-50">
        <div className="container flex justify-between items-center">
          <Link href="/">
            <Logo className="w-auto max-h-[90px]" />
          </Link>
          <div className="flex gap-8 items-center">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href}>
                  <button className={`text-white font-medium ${isActive ? activeClass : ""}`}>
                    {label}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden sticky top-0 bg-custombgc z-50 ">
        <div className="container flex justify-between items-center py-3 ">
          <Link href="/">
            <Logo className="w-auto max-h-[90px]" />
          </Link>

          {/* Toggle button */}
          <button onClick={() => setOpenMobile(!openMobile)} className="text-white">
            {openMobile ? <IoClose size={28} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {openMobile && (
          <div className="bg-custombgc shadow-lg animate-slideDown container ">
            <nav className="flex flex-col gap-2 py-4 ">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link key={href} href={href} className="">
                    <button
                      onClick={() => setOpenMobile(false)}
                      className={`w-full text-left px-4 py-3 rounded-md font-medium text-white ${
                        isActive ? "bg-primary border border-white" : "bg-custombgc border border-primary"
                      }`}
                    >
                      {label}
                    </button>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
