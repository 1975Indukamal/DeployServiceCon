import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Cookies from './Cookies'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-custombgc'>
            <Header />
            <ToastContainer/>
            {/* <Cookies /> */}
            {children}
            <Footer />
        </div>
    )
}

export default Layout