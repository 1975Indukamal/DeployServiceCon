import React from "react";
import Image from "next/image";
const SecondSection = () => {
  return (
    <div className="   rounded-[50px]  border border-primary px-10  md:px-20 mb-[100px] ">
      <div className="max-w-7xl mx-auto mt-[100px] mb-[124px] ">
        <span className="uppercase text-primary font-[Poppins] text-[18px] font-medium leading-[28px]">
          or Reach us @
        </span>

        <div className=" grid grid-cols-1 gap-y-10 gap-x-10 md:grid-cols-2  mt-[60px]">
          <div className="">
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#f5f5f5] mb-[30px]   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M22.6956 21.1024L21.2119 22.5697C20.1183 23.643 18.6994 25.023 16.9545 26.7099C15.8643 27.7641 14.1345 27.764 13.0444 26.7096L8.68046 22.4647C8.13201 21.9262 7.67292 21.4721 7.30312 21.1024C3.05261 16.8519 3.05261 9.96037 7.30312 5.70986C11.5536 1.45934 18.4451 1.45934 22.6956 5.70986C26.9461 9.96037 26.9461 16.8519 22.6956 21.1024ZM18.1246 13.7495C18.1246 12.0234 16.7254 10.6242 14.9994 10.6242C13.2734 10.6242 11.8741 12.0234 11.8741 13.7495C11.8741 15.4755 13.2734 16.8747 14.9994 16.8747C16.7254 16.8747 18.1246 15.4755 18.1246 13.7495Z"
                  fill="#212121"
                />
              </svg>
            </div>

            <span className="text-primary d-block my-3 font-Poppins text-[16px] font-normal">
              Our Location:
            </span>

            <p className="font-[Poppins] mt-[14px] text-body">
              ServiceConnect ,near BSNL tower ,pune 413104
            </p>
          </div>

          <div className="">
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#f5f5f5] mb-[30px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M27.5 10.76V20.9375C27.5 23.1038 25.8044 24.874 23.668 24.9936L23.4375 25H6.5625C4.39621 25 2.62594 23.3044 2.50643 21.168L2.5 20.9375V10.76L14.565 17.0805C14.8375 17.2231 15.1625 17.2231 15.435 17.0805L27.5 10.76ZM6.5625 5H23.4375C25.5434 5 27.2751 6.60239 27.4798 8.65444L15 15.1916L2.52024 8.65444C2.71733 6.67839 4.3304 5.11931 6.33011 5.00654L6.5625 5Z"
                  fill="#212121"
                />
              </svg>
            </div>

            <span className="text-primary  my-3  font-[Poppins] mt-[38px] text-[16px] font-normal">
              Mail us:
            </span>

            <a
              href="mailto:info@serviceconnekt.com"
              className=" underline decoration-solid d-block mt-[14px] text-body font-[Poppins] "
            >
              info@serviceconnekt.com
            </a>

            <a
              href="mailto:info@serviceconnekt.com"
              className=" underline decoration-solid d-block text-body font-[Poppins] "
            >
              support@serviceconnekt.com
            </a>
          </div>

          <div className="">
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#f5f5f5] mb-[20px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M22.1451 19.9412C21.52 19.2838 21.2656 18.3697 21.4405 17.4999H7.81695C6.26442 17.4999 5.00586 18.7586 5.00586 20.3111V21.4611C5.00586 22.1762 5.22886 22.8734 5.64381 23.4558C7.57151 26.1612 10.7252 27.5014 15.0015 27.5014C15.4877 27.5014 15.9596 27.4841 16.4167 27.4494C16.0981 26.5608 16.2352 25.5361 16.8588 24.7488L17.8588 23.4866C18.5238 22.6471 19.6157 22.2713 20.6565 22.5238L21.7038 22.7779C22.3532 22.2313 22.7405 21.5594 22.8881 20.7227L22.1451 19.9412ZM15.0015 2.50586C18.4532 2.50586 21.2515 5.30407 21.2515 8.75586C21.2515 12.2076 18.4532 15.0058 15.0015 15.0058C11.5496 15.0058 8.75142 12.2076 8.75142 8.75586C8.75142 5.30407 11.5496 2.50586 15.0015 2.50586ZM22.7415 17.4937L23.3358 15.9879C23.639 15.2198 24.4867 14.8211 25.2711 15.0778L25.81 15.2541C26.7152 15.5503 27.4667 16.2617 27.4972 17.2149C27.6212 21.1037 24.4028 26.6932 20.9811 28.5338C20.1396 28.9866 19.1457 28.6871 18.4366 28.0448L18.0157 27.6636C17.4048 27.1102 17.3273 26.1772 17.8387 25.5314L18.8386 24.2687C19.2013 23.8106 19.797 23.6056 20.3646 23.7433L21.9787 24.1351C23.3576 23.2226 24.0966 21.9397 24.1956 20.2866L23.0503 19.0816C22.6472 18.6576 22.5267 18.0377 22.7415 17.4937Z"
                  fill="#212121"
                />
              </svg>
            </div>

            <span className="text-primary d-block my-3 font-[Poppins] text-[16px] font-normal">
              Call us:
            </span>

            <a
              href="tel:+917972229469"
              className=" text-underline d-block text-white mb-2 font-Poppins"
            >
              +91-79722 29469
            </a>

            <a
              href="tel:+918847715598"
              className=" text-underline d-block text-white font-Poppins"
            >
              +91-88477 15598
            </a>
          </div>

          <div className="">
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-lg bg-[#f5f5f5] mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M12.5 21.375H10.0005L10 21.875C10 24.2912 11.9588 26.25 14.375 26.25H21.875C24.2913 26.25 26.25 24.2912 26.25 21.875V14.375C26.25 11.9587 24.2913 10 21.875 10H21.2561V12.5H21.875C22.9105 12.5 23.75 13.3395 23.75 14.375V21.875C23.75 22.9106 22.9105 23.75 21.875 23.75H14.375C13.3395 23.75 12.5 22.9106 12.5 21.875V21.375Z"
                  fill="#212121"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 8.375C4 5.95875 5.95875 4 8.375 4H15.875C18.2912 4 20.25 5.95875 20.25 8.375V15.875C20.25 18.2912 18.2912 20.25 15.875 20.25H13.9916H12.5V14.375C12.5 13.8731 12.6972 13.4173 13.0183 13.0807C13.3598 12.7229 13.8414 12.5 14.375 12.5H16.2485V10H14.375C13.7617 10 13.1779 10.1262 12.6482 10.354C11.0906 11.0238 10 12.572 10 14.375V20.25H8.375C5.95875 20.25 4 18.2912 4 15.875V8.375Z"
                  fill="#212121"
                />
              </svg>
            </div>

            <span className="text-primary d-block my-3  font-[Poppins] text-[16px] font-normal">
              Social Links:
            </span>

            <p className="font-Poppins text-body">
              Contact us for a quote. Help or to join the team.
            </p>

            <div className="flex gap-3 items-center mt-[20px]">
              <a
                href="https://www.facebook.com/ServiceConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/facebook.svg"
                  className="Image-fluid"
                  alt="Facebook Icon"
                  width={35}
                  height={35}
                />
              </a>

              <a
                href="https://www.instagram.com/ServiceConnect/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="Image-fluid"
                  src="/assets/images/instagram.svg"
                  alt="Instagram icon"
                  width={35}
                  height={35}
                />
              </a>

              <a
                href="https://twitter.com/InfoServiceConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/Subtract.svg"
                  className="Image-fluid"
                  alt="Twitter Icon"
                  width={35}
                  height={35}
                />
              </a>

              <a
                href="https://www.linkedin.com/company/ServiceConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="Image-fluid"
                  src="/assets/images/Path 11616.svg"
                  alt="LinkedIn icon"
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
