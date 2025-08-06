/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import LineImage from "@/../public/Line_59.png";
import Image from "next/image";
import GetMetaData, { generatemetaData } from "@/utils"
const data = GetMetaData("privacyPolicy")
export const metadata = generatemetaData({ ...data,canonical:"/privacy-policy" })
export default function Home() {
  return (
    <>
      <div className="container mt-[40px] text-body">
        
        <h1 className=" text-[58px] font-[500] leading-[80px] mb-[50px]">
          Privacy <span className="text-primary text-[58px] font-[600] font-[Quicksand]">Policy</span>
        </h1>
        <div
          className="flex md:justify-between flex-col-reverse md:flex-row"
        >
          {/* <div className="mb-[30px]">
            <h6 className="text-primary font-[500] leading-[30px] text-[18px] font-[Poppins] ">Effective Date: December 12, 2023 </h6>
          </div> */}
          {/* <div className="flex flex-col ">
            <div>Version</div>
            <div>
              <Image
                src={LineImage}
                alt="Description of your image"
                className="w-50 "
              />
              <span className="text-secondary text-lg ">1st Nov 2023</span>
            </div>
          </div> */}
        </div>
        <div className="w-full">
          <div className="mt-6">
          ServiceConnekt Technologies Pvt. Ltd. operates the website <a className="inline-block text-primary font-medium" href={"https://www.serviceconnekt.com"} target="_blank">ServiceConnekt.com </a> and mobile applications (collectively, the "Services"). This Privacy Policy describes how we collect, use, and share your personal information when you visit or use the Services.
          </div>
         
          <p className="mt-6 font-[Poppins] text-primary">
          We collect information about you in the following ways:
          </p>

      <h1 className=" text-2xl mt-6">
        <span className="text-primary font-Poppins  ">Information You Provide to Us:</span>
      </h1>

      <p className="mt-3">
      We collect information that you provide to us directly when you use the Services, such as your name, email address, phone number, and company information. We also collect information that you provide to us indirectly, such as information you submit through forms, surveys, and feedback mechanisms.
      </p>

     

      <h1 className="  mb-3 text-2xl mt-6">
        <span className="text-primary font-Poppins  ">
          {" "}
          Information We Collect Automatically:
        </span>
      </h1>

      
      <ul className=" list-disc ml-5 ">
        <li>We automatically collect information about your use of the Services, such as the type of device you use, your operating system, your IP address, your browser type, the pages you visit, the links you click, and the search terms you use.</li>
        <li>We also collect information about your location, such as your city and state.</li>
        <li>We may collect information about your use of third-party applications and services that are integrated with the Services.</li>
        
      </ul>

      <h1 className=" text-2xl mt-6">
        <span className="text-primary font-Poppins  "> Information We Collect from Third Parties:</span>
      </h1>

      <p className="mt-3">
      We may collect information about you from third-party sources, such as social media platforms, public databases, and marketing partners.
      </p>
      <h1 className="  mb-3 text-2xl mt-6">
        <span className="text-primary font-Poppins  ">
          {" "}
          We Use the Information for the Following Purposes:
        </span>
      </h1>
      <ul className=" list-disc ml-5 ">
        <li>To provide and operate the Services;</li>
        <li>To improve the Services;</li>
        <li>To send you promotional emails and other communications, such as newsletters and marketing offers;</li>
        <li>To respond to your inquiries and requests;</li>
        <li>To analyze how you use the Services;</li>
        <li>To comply with applicable laws and regulations; and For any other purpose with your consent.</li>
        
      </ul>

    
      <h1 className="  mb-3 text-2xl mt-6">
        <span className="text-primary font-Poppins  ">
          {" "}
          We May Share Your Information with the Following Third-Parties:
        </span>
      </h1>
      
     <ul  className=" list-disc ml-5 ">
     <li>Service providers who help us operate the Services, such as cloud storage providers, email marketing providers, and data analytics providers.</li>
      <li>Business partners with whom we offer co-branded services or engage in joint marketing activities.</li>
      <li>Government and law enforcement officials (only when required by the law).</li>
      <li>Other third-parties solely on your consent.</li>
     </ul>

      

      <h1 className="  mb-3 text-2xl mt-6">
        <span className="text-primary font-Poppins  ">
        You have the Following Choices with Respect to Your Information:
        </span>
      </h1>
      <ul  className=" list-disc ml-5 ">
     <li>You can access, correct, or delete your information by contacting us at <a
                href="mailto:info@ServiceConnekt.com"
                className="text-primary font-medium inline-block"
              >info@ServiceConnekt.com</a></li>
      <li>You can opt out of receiving promotional emails from us by clicking on the "unsubscribe" link in any promotional email we send you.</li>
      <li>You can manage your privacy settings on social media platforms and other third-party applications and services that you use.</li>
  
     </ul>
    
      <h1 className=" text-2xl mt-6">
        <span className="text-primary font-Poppins  ">
        Data Security
        </span>
      </h1>
      <p className="mt-3">
      We use reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure. We cannot guarantee the security of your information.
      </p>
     
      <h1 className=" text-2xl mt-6">
        <span className="text-primary font-Poppins  ">
        International Transfers
        </span>
      </h1>
      <p className="mt-3">
      Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country of residence.
      </p>
     

      <h1 className="text-2xl mt-6">
        <span className="text-primary font-Poppins  ">
        Children's Privacy
        </span>
      </h1>
      <p className="mt-3">
      The Services are not intended for children under the age of 18. We do not knowingly collect personal information from children under the age of 18. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us at <a
                href="mailto:info@ServiceConnekt.com"
                className="text-primary font-medium inline-block"
              >info@ServiceConnekt.com</a>
      </p>
      <h1 className="text-2xl mt-6">
        <span className="text-primary font-Poppins  ">Changes to this Privacy Policy</span>
      </h1>
      <p className="mt-3">
      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy regularly for any changes.
        {/* <Link
          href="#"
          className="underline hover:no-underline 
               text-blue-600 hover:text-blue-800  
               visited:text-purple-600"
        >
          contact us
        </Link> */}
      </p>
      <h1 className="  mb-3 text-2xl mt-6">
        <span className="text-primary font-Poppins  ">Contact Us</span>
      </h1>
      <p className="mt-2 mb-16">
      If you have any questions about this Privacy Policy, please contact us at <a
                href="mailto:info@ServiceConnekt.com"
                className="text-primary font-medium inline-block"
              >info@ServiceConnekt.com</a>
       
      </p>


    </div>
  </div>
</>
  );
}