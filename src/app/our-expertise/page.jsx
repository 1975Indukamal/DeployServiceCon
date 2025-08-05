/* eslint-disable react/no-unescaped-entities */
import Hero from "./_components/Hero";
import Technologies from "./_components/Technologies";
import ReadyTo from "./_components/ReadyTo";
import ImageLogo from "./_components/ImageLogo";
import ThinkPara from "./_components/ThinkPara";
import OffSetTradeMark from "@/Components/shared/OffSetTradeMark";
import GetMetaData, { generatemetaData } from "@/utils"
const data = GetMetaData("Expertise")
export const metadata = generatemetaData({ ...data,canonical:"/our-expertise" })
export default function Page() {

  return (
    <>
      <div className="container mt-5 overflow-hidden">
        <Hero />
        <Technologies />
        <ReadyTo />
        <OffSetTradeMark
        imgClassName="rotate-[265deg]"
        imgWidth={70}
        imgHeight={70}
      />
        <ImageLogo />
        <ThinkPara />
        
       
      </div>
    </>
  );
}
