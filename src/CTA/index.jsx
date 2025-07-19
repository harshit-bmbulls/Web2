import React from "react";
import { DarkGradientButton } from "../button";
import { Globe } from "./Globe";
import { TextAnimate } from "../components/TextAnimater";
import LightingEffectCenter from "./LightingCenter";
import { twMerge } from "tailwind-merge";

const CTA = ({ title, subTitle, height = "h-[511px]" }) => {
  return (
    <section className=" bg-[#0c0b14] rounded-[25px] mt-20 max-w-[1200px] mx-auto" >
      <div
        className={twMerge(
          ` flex flex-col items-center overflow-hidden rounded-[25px] relative pt-[92px] bg-cover bg-no-repeat `,
          height
        )}
      >
        <LightingEffectCenter />
        <div className="font-manrope flex flex-col items-center gap-[25px] text-center max-w-[600px] mx-auto">
          <div className="text-[48px] leading-[54px] -tracking-[0.04em] text-white opacity-60">
            <TextAnimate
              as="h2"
              animation="blurInUp"
              by="word"
              className="  text-[48px] leading-[54px] -tracking-[0.04em] text-white "
              once
            >
              {title || "Time to turn proof into profit "}
            </TextAnimate>
          </div>
          <div className="text-white opacity-60 font-medium z-50 text-[16px]">  
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              delay={0.3}
              duration={0.5}
              once
            >
              {subTitle ||
                "Stop letting inferior competitors win with better case studies. Turn case studies into your #1 conversion tool"}
            </TextAnimate>
          </div>
          <DarkGradientButton>Win Deals</DarkGradientButton>
        </div>
        <div className="h-full w-fit z-10 relative">
          <Globe />
        </div>
      </div>
    </section>
  );
};

export default CTA;
