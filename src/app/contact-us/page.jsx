
import FirstHeading from "./_components/FirstHeading";
import SecondSection from "./_components/SecondSection";
import GetMetaData, { generatemetaData } from "@/utils"
const data = GetMetaData("ContactUs")
export const metadata = generatemetaData({ ...data,canonical:"/contact-us" })
const page = () => {
  return (
    <>
      <div className=" py-20 lg:py-32">
        <div className={`container overflow-hidden`}>
          <FirstHeading />
          <SecondSection />
        </div>
      </div>
    </>
  );
};

export default page;
