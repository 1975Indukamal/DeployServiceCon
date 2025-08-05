

import React from "react";
import Button from "@/Components/UI/Button";
import Link from "next/link";

const Page = () => {
  
    return (
        <>
            <div
                className={`bg-[url('/LinearBackground.png')]  bg-cover bg-center`}
            >
                <div className="container min-h-screen grid place-items-center ">
                    <div className="  ">
                        <h1 className="text-[58px] text-center font-normal">404 Page Not Found </h1>
                        <h2 className="text-[18px] text-center max-w-[544px] my-[30px]">
                            The page you are looking for might have been removed had its name
                            changed or is temporarily unavailable.
                        </h2>
<Link href="/">
                       <Button  className="mx-auto " text="Back to home" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;

