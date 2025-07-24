"use client";

import React from "react";
import { TextAnimate } from "../TextAnimater";
import PrimaryButton from "../Button";

const CASE_STUDIES = [
  {
    title: "E-commerce Platform Redesign",
    company: "TechFlow Solutions",
    description:
      "Complete UI/UX overhaul of a major e-commerce platform, focusing on mobile-first design and conversion optimization.",
    result: "+45% Sales",
  },
  {
    title: "SaaS Dashboard Development",
    company: "CloudSync Inc.",
    description:
      "Built a comprehensive analytics dashboard with real-time data visualization and advanced reporting capabilities.",
    result: "300K+ Users",
  },
  {
    title: "Healthcare App Launch",
    company: "MedConnect",
    description:
      "Developed a patient management mobile application with secure messaging and appointment scheduling features.",
    result: "98% Satisfaction",
  },
  {
    title: "Finance Platform Security",
    company: "SecureFinance",
    description:
      "Implemented enterprise-grade security protocols and compliance frameworks for a digital banking platform.",
    result: "Zero Breaches",
  },
  {
    title: "AI Integration Project",
    company: "InnovateLabs",
    description:
      "Integrated machine learning capabilities into existing business processes, automating key workflows and decision-making.",
    result: "60% Efficiency",
  },
];

// Main Section Component
const CaseStudiesSection = () => {
  return (
    <section className="py-18">
      <div className="mx-auto max-w-[1200px]  px-4 sm:px-6 lg:px-8">
        <TextAnimate
          ah="h2"
          className="text-center text-[31px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]   text-[#f87a0a] mb-12 "
          animationType="blurInUp"
        >
          Case Studies
        </TextAnimate>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="flex flex-col h-56 rounded-[18px] bg-[#152f59] border border-[#69433f] p-5 hover:scale-[1.03] transition duration-400 ease-in-out"
              tabIndex={0}
              aria-label={study.title + " - " + study.company}
            >
              <h3
                className="text-[16px] font-bold text-white  mb-2"
                title={study.title}
              >
                {study.title}
              </h3>
              <p
                className="text-[12px] font-medium text-gray-300 mb-1"
                title={study.company}
              >
                {study.company}
              </p>
              <p
                className="text-[12px] text-white leading-snug  line-clamp-3 mb-2 flex-1"
                title={study.description}
              >
                {study.description}
              </p>
              <div className="mt-auto">
                <span className="text-lg font-semibold text-[#f87a0a]">
                  {study.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrimaryButton title="Get Started"/>
    </section>
  );
};

export default CaseStudiesSection;
