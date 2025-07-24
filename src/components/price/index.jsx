"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TextAnimate } from "../TextAnimater";

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Feature = ({ text }) => (
    <div className="flex items-start gap-3">
      <CheckIcon />
      <span className="text-gray-700 text-sm md:text-base">{text}</span>
    </div>
  );

  return (
    <div className="mx-auto p-4 md:p-8">
      <TextAnimate
        as="h1"
        animation="blurInUp"
        by="word"
        duration={0.8}
        className="text-[31px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]   font-normal text-center text-[#f77a0a] mb-8 md:mb-12"
      >
        Plans & pricing
      </TextAnimate>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch max-w-4xl mx-auto">
        {/* Starter */}
     
        <Card className="bg-blue-100 border border-[#69433f] rounded-3xl w-full md:w-1/2 relative">
          <CardHeader className="p-2 md:p-4 pb-1">
            <div className="bg-blue-200 text-blue-800 text-[10px] md:text-xs font-medium px-3 py-3 md:px-3 md:py-3 rounded-full inline-flex w-fit">
              MOST POPULAR
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 md:mb-3 gap-2 md:gap-3">
              <h2 className="text-3xl md:text-4xl font-light text-[#040562]">
                Starter
              </h2>
              <div className="flex gap-2 bg-white rounded-lg p-1 max-w-[180px] sm:max-w-[240px] w-full sm:w-auto">
                {["Annually", "Monthly"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setIsAnnual(period === "Annually")}
                    className={`px-3 md:px-4 py-2 md:py-2 rounded-[15px] text-[14px] md:text-sm font-medium transition-colors ${
                      (isAnnual && period === "Annually") ||
                      (!isAnnual && period === "Monthly")
                        ? "bg-[#152f59] text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-2 md:p-4 pt-0">
            <div className="flex items-baseline mb-3 md:mb-5">
              <span
                className="text-gray-900 font-light"
                style={{ fontSize: "36px" }} // smaller on mobile
              >
                ${isAnnual ? "180" : "300"}
              </span>
              {isAnnual && (
                <span className="text-sm md:text-lg text-gray-600 ml-2 line-through">
                  $200
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-2 md:mb-5 leading-normal text-sm md:text-base">
              Enjoy immediate access to Writer agents and essential platform
              features — no delays, just productivity.
            </p>

            <button className="w-full bg-blue-500 text-white py-3 md:py-4 rounded-full font-medium text-sm md:text-lg mb-2 md:mb-3">
              Try for free
            </button>

            <div className="text-center text-xs md:text-sm text-gray-600 mb-2 md:mb-4">
              <strong>14-day free trial.</strong> No credit card required.
            </div>

            <hr className="border-gray-300 mb-2 md:mb-3" />

            <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2 md:mb-3">
              What's included in Starter:
            </h3>

            <div className="space-y-1 md:space-y-2 text-sm md:text-base">
              <Feature text="Up to 20 users" />
              <Feature text="Content writing, proofreading, strategy — over 100 services" />
              <Feature text="Set up 5 personalized workflows" />
              <Feature text="1 Smart Content Library" />
              <Feature text="Ask Writer — a complete writing support tool" />
            </div>
          </CardContent>
        </Card>

        {/* Enterprise */}
        <Card className="bg-gray-100 rounded-3xl w-full md:w-1/2 border-0 shadow-none">
          <CardHeader className="p-3 md:p-4 pb-1">
            <h2 className="text-2xl md:text-4xl font-light text-[#f77a0a] mb-2 md:mb-4 mt-3 md:mt-10">
              Enterprise
            </h2>
          </CardHeader>

          <CardContent className="p-3 md:p-4 pt-0">
            <div className="mb-2 md:mb-0">
              <div
                className="text-gray-900 font-light mb-1 md:mb-2"
                style={{ fontSize: "36px" }} // smaller only on mobile
              >
                Custom pricing
              </div>
            </div>

            <p className="text-gray-700 mb-2 md:mb-4 leading-normal text-sm md:text-base">
              Full control to create, manage, and oversee custom solutions —
              with dedicated support, enterprise-grade security, and
              personalized onboarding.
            </p>

            <button className="w-full bg-[#152f59] text-white py-3 md:py-4 rounded-full font-medium text-sm md:text-lg mb-2 md:mb-3">
              Contact sales
            </button>

            <div className="mb-2 md:mb-4 h-3 md:h-6"></div>

            <hr className="border-gray-300 mb-2 md:mb-3" />

            <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2 md:mb-3">
              Everything in Starter, plus:
            </h3>

            <div className="space-y-1 md:space-y-2 text-sm md:text-base">
              <Feature text="Personalized writing tools tailored for growth" />
              <Feature text="Full agent governance, reporting, and observability" />
              <Feature text="Manage, monitor, and track performance with ease" />
              <Feature text="Hands-on launch support" />
              <Feature text="Secure team access with full control" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricingPlans;
