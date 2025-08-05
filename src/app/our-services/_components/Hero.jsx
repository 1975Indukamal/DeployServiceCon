import Image from "next/image";
import Banner from "../../../../public/assets/images/about-us/Ladki.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-tight text-body">
              Custom <span className="text-primary">Software & Web Solutions</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-7 max-w-[600px] text-body">
              We design and develop scalable, user-centric apps and websites that drive real business growth. 
              From startup MVPs to enterprise platforms — our focus is on functionality, design, and results.
            </p>

            {/* ✅ THIS IS THE FIXED BUTTON LINK */}
            <div className="mt-8 cursor-pointer">
              <Link
                href="/contact-us"
                className="inline-block hover:bg-primary bg-transparent border border-primary hover:text-white text-primary px-6 py-3 rounded-md text-sm font-medium transition duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={Banner}
              alt="Software and Web Development"
              className="rounded-xl shadow-md w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
