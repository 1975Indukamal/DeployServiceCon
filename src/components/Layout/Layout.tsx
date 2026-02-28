"use client";
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isInterviewHub = pathname?.startsWith('/interview-hub');

    return (
        <div className='bg-custombgc'>
            {!isInterviewHub && <Header />}
            <ToastContainer />
            {/* <Cookies /> */}
            {children}
  <Footer />
        </div>
    )
}

export default Layout