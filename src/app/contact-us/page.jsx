
import FirstHeading from "./_components/FirstHeading";
import SecondSection from "./_components/SecondSection";
import GetMetaData, { generatemetaData } from "@/utils"
const data = GetMetaData("ContactUs")
export const metadata = generatemetaData({ ...data,canonical:"/contact-us" })
const page = () => {
  return (
    <>
      <div className="mt-[20px]">
        <div className={`container overflow-hidden`}>
          <FirstHeading />
          <SecondSection />
        </div>
      </div>
    </>
  );
};

export default page;
