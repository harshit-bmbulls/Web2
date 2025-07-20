import React, { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import Cards from "./cards";
import Rows from "./row";
import { TextAnimate } from "../TextAnimater";
import { useRef } from "react";


const WhyChooseZuper = () => {
  const videoRef = useRef(null);
  return (
    <div className=" bg-[#022150] ">
      <div className="">
        {/* Header */}
        <div className="text-center leading-[48px]   text-[#F5F5F5] mb-0 text-[40px]  w-full pb-8">
          <div>
            <TextAnimate
              duration={0.8}
              animation="blurInUp"
              as="h1"
              className="text-[47px] leading-[48px] text-[#f87a09] tracking-tighter"
            >
              Why Choose WrittenlyHub?
            </TextAnimate>
            <TextAnimate
              duration={0.8}
              animation="blurInUp"
              as="p"
              className="text-[16px] leading-[48px] font-normal text-white"
            >
              Why our case studies are not like the others (thank god)
            </TextAnimate>
          </div>
        </div>

        <Cards />
        <div className="border-b border-[#f87a09] h-36 w-full pb-8">
          <div className="max-w-[1200px] h-36 mx-auto  border-l border-r border-[#f87a09]"></div>
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between  border-l border-[#f87a09] md:border-r ">
          <div className="relative pb-20 md:pb-5">
            <div className="p-5  text-[#f87a09] text-[40px] border-r border-[#f87a09] ">
              <TextAnimate duration={0.8} animation="blurInUp" as="h1">
                Marketing retainer agencies
              </TextAnimate>
            </div>
            <>
              {[
                "6–12 month contracts that bleed you dry.",
                "3–6 weeks of “strategy” calls that go nowhere.",
                "15+ revision rounds because they didn't listen the first time",
                "$2,000-5,000 monthly fees for mediocre work",
                "Copy-paste templates your competitors probably have too",
                '"Brand awareness" bullsh*t you can’t deposit',
              ].map((text, i) => (
                <TextAnimate
                  key={i}
                  duration={0.8}
                  animation="blurInUp"
                  as="p"
                  className="text-white text-[14px] border-r border-[#f87a09] border-b-0 px-5 py-[0.2rem] md:text-[16px] font-normal"
                >
                  {text}
                </TextAnimate>
              ))}
            </>

            <div className=" hover:bg-[#f87a09] cursor-pointer w-full md:w-[70vh] flex items-center border-[#f87a09] border  p-4 px-5">
              <button className="text-white font-normal text-[18px] flex items-center">
                Read More
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
          <Rows />
        </div>

        <div className="border-b border-[#f87a09] h-36 w-full pb-8">
          <div className="max-w-[1200px] h-36 mx-auto  border-l border-r border-[#f87a09]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between border-l border-r border-[#f87a09]">
          {/* Left: Text Section */}
          <div className="p-4 border-b  md:border-r border-[#f87a09] w-full">
            <div className="text-[#f87a09] text-[32px] md:text-[38px] ">
              <TextAnimate duration={0.8} animation="blurInUp" as="h1">
                Life, when your proof actually proves something
              </TextAnimate>
            </div>
            <div className="text-white text-[16px] font-normal mt-2 ">
              <TextAnimate duration={0.8} animation="blurInUp" as="p">
                I can charge premium rates because my proof is premium quality
              </TextAnimate>
            </div>
          </div>

          {/* Right: Button Section */}
          <div className="relative flex w-full md:w-98">
            <button
              className="text-white cursor-pointer border-[#f87a09] border-t border-b p-4 w-full hover:bg-[#f87a09] text-right font-normal text-[18px] flex items-center justify-end
               md:absolute md:bottom-0 md:left-0"
            >
              Convert skeptics
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div className="w-full  border-b border-[#f87a09]">
          <div className="max-w-[1200px] mx-auto border-l border-r border-[#f87a09]">
              <div >
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/written.mp4" type="video/mp4" />
                </video>

                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(WhyChooseZuper);
