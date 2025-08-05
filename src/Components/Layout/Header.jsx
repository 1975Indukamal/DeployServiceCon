"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = usePathname();


const activeClass =
  "rounded-lg bg-primary bg-opacity-60 shadow-2xl px-3 py-2 border-2 border-body";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Also check on mount in case user loads on large screen
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDrawerOpen]);
  return (
    <>
      {/* Desktop Navbar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
        className=" md:flex justify-between items-center !font-inter hidden py-10 bg-opacity-80 bg-custombgc"
      >
        <div className="container  md:flex justify-between items-center">
        <div className="flex items-center !font-inter ">
          <Link href="/">
            {/* <img src={logoghumloo} alt="navbarlogo" className="w-auto max-h-[80px] object-cover" /> */}
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex !flex-row items-center justify-between !gap-4 xl:!gap-10 lg:flex z-10 !font-inter">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = location === href;
            return (
              <Link
                key={href}
                href={href}
                className={`no-underline text-white font-medium ${
                  isActive ? activeClass : ""
                } ${label === "Our Services" && location === "/hotel" ? activeClass : ""}`}
              >
                <button>{label}</button>
              </Link>
            );
          })}
        </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
        
        }}
        className="!font-inter z-10"
      >
        <div className="flex flex-row justify-between lg:hidden items-center bg-opacity-80 bg-custombgc container py-6">
          <div className="flex items-center space-x-4 p-2.5 sm:px-2 custom-border-logo text-black">
            <Link href="/">
              {/* <img src={logoghumloo} alt="navbarlogo" className="w-auto max-h-[80px] object-cover" /> */}
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex items-center lg:hidden px-3">
            <button
              className="flex flex-row items-center gap-2.5 py-3 cursor-pointer text-white md:hidden"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>

          {/* Drawer for Mobile Menu */}
          <Drawer
            title={
              <div className="flex justify-between items-center">
                {/* Logo (optional) */}
                {/* <img src={logoghumloo} alt="navbarlogo" className="w-auto max-h-[80px] object-cover" /> */}

                {/* Close button */}
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: 28,
                    lineHeight: 1,
                    fontWeight: "bold",
                    color: "#111",
                    padding: "0 6px",
                    borderRadius: "50%",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#eee")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
            }
            placement="top"
            onClose={() => setIsDrawerOpen(false)}
            open={isDrawerOpen}
            zIndex={1000}
            bodyStyle={{ padding: 0, backgroundColor: "#f9fafb" }}
            headerStyle={{ borderBottom: "none", padding: "16px 24px" }}
          >
            <nav className="flex flex-col gap-2 px-6 py-4">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = location === href;
                return (
                  <Link key={href} href={href} className="no-underline">
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className={`w-full text-left rounded-md p-4 font-medium text-lg transition
                      ${
                        isActive
                          ? "bg-indigo-900 text-white shadow-md"
                          : "bg-white text-gray-900 hover:bg-indigo-100"
                      }`}
                    >
                      {label}
                    </button>
                  </Link>
                );
              })}
            </nav>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
