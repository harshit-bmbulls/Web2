"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextAnimate } from "../TextAnimater";

export default function Trust() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      text: "strategic Linkedin visibility that converts",
      review:
        "Get recognized by your name while attracting 4x more quailfied discovery calls than generic marketing",
      author: "WrttenlyHub.",
      title: "WHAT YOU'RE SIGNING UP FOR",
    },
    {
      id: 2,
      text: "Content that drives real leads",
      review:
        "Set yourself a thought leader on Linkedin & generate 3x the inbound leads without losing long hours to content creation",
      author: "WrttenlyHub.",
      title: "WHAT YOU'RE SIGNING UP FOR",
    },
    {
      id: 3,
      text: "Messaging that magnetizes prospects ",
      review:
        "Stand out from other coaches and consultans on LinkedIn with content that covers 67% better than industry averages",
      author: "WrttenlyHub.",
      title: "WHAT YOU'RE SIGNING UP FOR",
    },
    {
      id: 4,
      text: "Predictable pipeline that drives",
      review:
        "Attract 12-15 qualified leads monthly, even when referrals dry up & networking events disappoint",
      author: "WrttenlyHub.",
      title: "WHAT YOU'RE SIGNING UP FOR",
    },
    {
      id: 5,
      text: "Consistent presence without burnout",
      review:
        "keep your Linkedin personal brand growing without sacrificing precious client delivery time",
      author: "WrttenlyHub.",
      title: "WHAT YOU'RE SIGNING UP FOR",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentData = testimonials[currentTestimonial];

return (
    <>
      <section className="w-full bg-[#blue]">
        <div className=" max-w-[1200px] mx-auto">
          {/* Left Column */}
          <div className="p-6 border-l border-r border-[#f87a09] md:border-l md:border-r ">
            <TextAnimate
              duration={0.8}
              animation="blurInUp"
              as="h2"
              className="text-[28px] md:text-[40px] text-[#f87a09] mb-2 text-center"
            >
              How we make you the obvious choice in your industry
            </TextAnimate>
            <TextAnimate
              duration={0.8}
              animation="blurInUp"
              as="p"
              className="text-[#D5D5D5] text-[14px] md:text-[16px] text-center"
            >
              We don't just build personal brands, we build demand
            </TextAnimate>
          </div>
        </div>
  
        <div className="w-full border border-l-0 border-r-0 md:h-[426px] border-[#f87a09]">
          <div className="h-full max-w-[1200px] mx-auto md:border-l md:border-r border-[#f87a09]">
            <div className="h-full">
              {/* Desktop Layout */}
              <div className="hidden md:flex h-full">
                {/* Current Testimonial */}
                <div className="w-[67%] flex flex-col p-5 py-10 border-r border-[#f87a09] relative overflow-hidden">
                  {/* User image at top */}
                  <div className="flex justify-start mb-15 relative z-20">
                    {/* First image (always on top) */}
                    {/* <div className="h-10 w-10 rounded-full bg-gray-600 relative overflow-hidden z-20">
                      <Image
                        src={currentData.avatar}
                        alt={currentData.author}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div> */}
  
                    {/* Second image (hidden behind first) */}
                    {/* {(currentTestimonial === 1 || currentTestimonial === 2) && (
                      <div className="h-10 w-10 rounded-full bg-gray-600 relative overflow-hidden z-10 -ml-2 border-[2px] border-[#f87a09]">
                        <Image
                          src="/api/placeholder/11/60"
                          alt="Co-avatar"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    )} */}
                  </div>
  
                  {/* Review */}
                  <div className="flex-1">
                    <blockquote className="text-[28px] font-light leading-relaxed text-white">
                      <TextAnimate duration={0.8} animation="blurInUp" as="p">
                        {currentData.text}
                      </TextAnimate>
                    </blockquote>
                  </div>
  
                  <div className="flex-1">
                    <blockquote className="text-[20px] font-light text-white">
                      <TextAnimate duration={0.8} animation="blurInUp" as="p">
                        {currentData.review}
                      </TextAnimate>
                    </blockquote>
                  </div>
  
                  {/* Author info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <TextAnimate
                        duration={0.8}
                        animation="blurInUp"
                        as="p"
                        className="text-[18px] text-white"
                      >
                        {currentData.author}
                      </TextAnimate>
                      <TextAnimate
                        duration={0.8}
                        animation="blurInUp"
                        as="p"
                        className="text-[16px] text-white"
                      >
                        {currentData.title}
                      </TextAnimate>
                    </div>
                    <div className="text-white text-lg">
                      <TextAnimate duration={0.8} animation="blurInUp" as="div">
                        {currentTestimonial + 1 + "/" + testimonials.length}
                      </TextAnimate>
                    </div>
                  </div>
                </div>
  
                {/* Navigation buttons */}
                <div className="w-[33%] justify-end flex flex-col">
                  {[
                    {
                      type: "previous",
                      label: "Previous",
                      onClick: prevTestimonial,
                      icon: <ChevronLeft size={20} />,
                      justify: "justify-start",
                      iconPosition: "left",
                    },
                    {
                      type: "next",
                      label: "Next",
                      onClick: nextTestimonial,
                      icon: <ChevronRight size={20} />,
                      justify: "justify-end",
                      iconPosition: "right",
                    },
                  ].map((button) => (
                    <div
                      key={button.type}
                      className={`flex border-t text-white p-6 border-[#f87a09] cursor-pointer ${button.justify}`}
                      onClick={button.onClick}
                    >
                      <button className="flex items-center space-x-2">
                        {button.iconPosition === "left" && button.icon}
                        <span>{button.label}</span>
                        {button.iconPosition === "right" && button.icon}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Mobile Layout */}
              
              <div className="md:hidden border-l border-r border-[#f87a09] flex flex-col min-h-[400px]">
                {/* Review Content - Full Width Box */}
                <div className="flex-1 flex flex-col p-5 py-8 border-t-0">
                  <div className="flex-1 mb-6">
                    <blockquote className="text-[20px] md:text-[28px] font-light leading-relaxed text-white">
                      <TextAnimate duration={0.8} animation="blurInUp" as="p">
                        {currentData.text}
                      </TextAnimate>
                    </blockquote>
                  </div>
  
                  <div className="flex-1 mb-6">
                    <blockquote className="text-[16px] md:text-[20px] font-light text-white">
                      <TextAnimate duration={0.8} animation="blurInUp" as="p">
                        {currentData.review}
                      </TextAnimate>
                    </blockquote>
                  </div>
  
                  {/* Author info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <TextAnimate
                        duration={0.8}
                        animation="blurInUp"
                        as="p"
                        className="text-[16px] md:text-[18px] text-white"
                      >
                        {currentData.author}
                      </TextAnimate>
                      <TextAnimate
                        duration={0.8}
                        animation="blurInUp"
                        as="p"
                        className="text-[14px] md:text-[16px] text-white"
                      >
                        {currentData.title}
                      </TextAnimate>
                    </div>
                    <div className="text-white text-base">
                      <TextAnimate duration={0.8} animation="blurInUp" as="div">
                        {currentTestimonial + 1 + "/" + testimonials.length}
                      </TextAnimate>
                    </div>
                  </div>
                </div>
  
                {/* Navigation buttons - Full Width, Same Position */}
                <div className="flex">
                  {[
                    {
                      type: "previous",
                      label: "Previous",
                      onClick: prevTestimonial,
                      icon: <ChevronLeft size={18} />,
                      justify: "justify-center",
                      iconPosition: "left",
                    },
                    {
                      type: "next",
                      label: "Next",
                      onClick: nextTestimonial,
                      icon: <ChevronRight size={18} />,
                      justify: "justify-center",
                      iconPosition: "right",
                    },
                  ].map((button) => (
                    <div
                      key={button.type}
                      className={`flex-1 flex border-t text-white p-4 border-[#f87a09] cursor-pointer ${button.justify} ${
                        button.type === "next" ? "border-l border-[#f87a09]" : ""
                      }`}
                      onClick={button.onClick}
                    >
                      <button className="flex items-center space-x-2">
                        {button.iconPosition === "left" && button.icon}
                        <span className="text-sm">{button.label}</span>
                        {button.iconPosition === "right" && button.icon}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
