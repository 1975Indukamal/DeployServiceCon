import Aerospacepimg from "../../../../public/assets/images/blogs_updated/Aerospacepimg.png";
import Image from "next/image";
import Link from "next/link";


const Hero = ({blogs}) => {
  // console.log(blogs)
  const formatDate = (date) => {
    const newDate = new Date(date); // replace with your own Date object
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };


  return (
    <>
      <section>
        <div>
          <div className="flex gap-1 items-center text-[14px] text-body font-[400] font-[poppins] pb-5">
            <Link href={"/"}>Home</Link> / <Link href={"/blog"}>Blogs</Link>
          </div>
        </div>

        <div className="pb-10 ">
          <div className="border flex md:flex-row flex-col group overflow-hidden">
            <div className="md:w-[40%] w-full pl-6">
              <div className=" pt-5">
                <button className=" font-[500] text-[14px] font-[Quicksand] text-[#fff] bg-primary border pt-1 pb-1 pl-5 pr-5 rounded-full">
                  Featured
                </button>
              </div>

              <div className=" ">
                <p className="text-secondary font-[500] text-[16px] font-[Quicksand] pt-2 pb-2">
                  {blogs?.date} - insights
                </p>
              </div>
              <div className=" ">
                <p className="font-[Quicksand] text-primary font-[700] lg:text-[38px] md:text-[30px] text-[24px] line-clamp-2">
                  {blogs?.title}
                </p>
              </div>
              <div className="md:pt-[170px] pt-0 mt-[20px] text-primary">
                <Link className="flex" href={`/blog/${blogs?.slug}`}>
                  Read More ＞
                </Link>
              </div>
              <div className="border-t border-[#5F5E5E] w-[80%] h-[1px] mb-[20px] lg:mb-0">
                <hr />
              </div>
            </div>

            <div className="overflow-hidden ">
              <Image
                src={blogs?.image}
               
                height={400}
                width={800}
                alt={"banner_image"}
                className="h-full group-hover:scale-105 duration-200 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
