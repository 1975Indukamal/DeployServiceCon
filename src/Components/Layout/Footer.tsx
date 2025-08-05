"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  const companyData = ["Careers", "Blog"];

  const supportData = [
    { link: "/about-us", title: "About Us" },
    { link: "/our-services", title: "Our Services" },
    { link: "/contact-us", title: "Contact Us" },
    { link: "/privacy-policy", title: "Privacy Policy" },
    { link: "/terms-and-conditions", title: "Terms & Conditions" },
    // { link: "/refund-policy", title: "Refund Policy" },
    // { link: "/cancellation-policy", title: "Cancellation Policy" },
  ];

  return (
    <footer className="bg-[#0c091c] text-white text-sm pt-10">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold mb-2">Connect Better with ServiceConnekt</h2>
            <p className="text-[#B8B8B8]">
              Subscribe and stay informed about service trends and platform updates.
            </p>
          </div>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-[#2a2a2a] pt-10">
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-[#CCCCCC]">
              <li className="flex gap-2 items-start">
                <FaPhone className="mt-1" />
                <span>
                  +91 9289 030 404 <br />
                  +91 9560 690 202
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <FaEnvelope className="mt-1" />
                <span>support@serviceconnekt.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <FaHome className="mt-1" />
                <span>Golden Palm, Sector 168, Noida, UP 201307</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyData.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-[#CCCCCC] hover:text-white transition">
                  <MdOutlineKeyboardDoubleArrowRight /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 text-[#CCCCCC] hover:text-white transition"
                  >
                    <MdOutlineKeyboardDoubleArrowRight /> {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/serviceconnekt" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="hover:text-blue-500 transition" />
              </a>
              <a href="https://www.instagram.com/serviceconnekt" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="hover:text-pink-400 transition" />
              </a>
              <a href="https://wa.me/919289030404" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} className="hover:text-green-500 transition" />
              </a>
            </div>
            <p className="text-[#B8B8B8]">
              Follow us for updates and announcements.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 mt-10 border-t border-[#2a2a2a] flex flex-col lg:flex-row items-center justify-between text-[#999999] text-xs">
          <p>© 2025 ServiceConnekt. All rights reserved.</p>
          <p className="mt-2 lg:mt-0">Powered by SERVICECONNEKT PRIVATE LIMITED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
