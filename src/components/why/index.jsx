import React from "react";
import { ArrowUpRight } from "lucide-react";
import Cards from "./cards";
import Rows from "./row";
import { TextAnimate } from "../TextAnimater";
import Image from "next/image";

const WhyChooseZuper = () => {
  return (
    <div className=" bg-black ">
      <div className="">
        {/* Header */}
        <div className="text-center  border-[#5f5f7138] eading-[48px]   text-[#F5F5F5] mb-0 text-[40px] opacity-60 w-full pb-8">
          <div>
            <TextAnimate
              duration={0.8}
              animation="blurInUp"
              as="h1"
              className="text-[47px] leading-[48px] text-[#F5F5F5] tracking-tighter"
            >
              Why Choose WrittenlyHub?
            </TextAnimate>
            <TextAnimate
              duration={0.8}
              animation="blurInUp"
              as="p"
              className="text-[16px] leading-[24px] font-normal text-[#D5D5D5]"
            >
              Why our case studies are not like the others (thank god)
            </TextAnimate>
          </div>
        </div>

        <Cards />
        <div className="border-b border-[#5f5f7138] h-36 w-full pb-8">
          <div className="max-w-[1200px] h-36 mx-auto  border-l border-r border-[#5f5f7138]"></div>
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between  border-l border-[#5f5f7138]">
          <div className="p-5 relative pb-20 md:pb-5">
            <div className=" text-[#F5F5F5] text-[40px] opacity-60">
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
                  className="text-[#D5D5D5] text-[14px] p-[0.2rem] md:text-[16px] font-normal"
                >
                  {text}
                </TextAnimate>
              ))}
            </>

            <div className=" hover:bg-[#080a09] cursor-pointer w-full md:w-[100vh] absolute left-0 bottom-0 flex items-center border-[#5f5f7138] border p-4">
              <button className="text-[#00FFB2] font-normal text-[18px] flex items-center">
                Read More
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
          <Rows />
        </div>

        <div className="border-b border-[#5f5f7138] h-36 w-full pb-8">
          <div className="max-w-[1200px] h-36 mx-auto  border-l border-r border-[#5f5f7138]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between border-l border-r border-[#5f5f7138]">
          {/* Left: Text Section */}
          <div className="p-4 border-b md:border-b-0 md:border-r border-[#5f5f7138] w-full">
            <div className="text-[#F5F5F5] text-[32px] md:text-[38px] opacity-60">
              <TextAnimate duration={0.8} animation="blurInUp" as="h1">
                Life, when your proof actually proves something
              </TextAnimate>
            </div>
            <div className="text-[#D5D5D5] text-[16px] font-normal mt-2 opacity-60">
              <TextAnimate duration={0.8} animation="blurInUp" as="p">
                "I can charge premium rates because my proof is premium quality"
              </TextAnimate>
            </div>
          </div>

          {/* Right: Button Section */}
          <div className="relative flex w-full md:w-98">
            <button
              className="text-[#00FFB2] cursor-pointer border-[#5f5f7138] border-t p-4 w-full hover:bg-[#080a09] text-right font-normal text-[18px] flex items-center justify-end
               md:absolute md:bottom-0 md:left-0"
            >
              Convert skeptics
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div className="w-full border-t border-b border-white/10">
          <div className="max-w-[1200px] mx-auto border-l border-r border-white/10">
            <div className="">
              <div>
                <Image src="/hero.png" alt={""} width={1200} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseZuper;
