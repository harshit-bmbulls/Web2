"use client";
import React from "react";
import Image from "next/image";
import Shield from "../../../public/shield.png";
import Zap from "../../../public/zap.png";
import Monitor from "../../../public/monitor.png";
import Minimize from "../../../public/minimize-2.png";

const Cards = () => {
  const features = [
    {
      title: "Maximum Security",
      description: "One payment of $299, then we stop loitering.",
      icon: Shield,
    },
    {
      title: "Instant Work",
      description: "4-week delivery because we're not here to waste time ",
      icon: Zap,
    },
    {
      title: "Fees That Favor You",
      description: "Real metrics that actually pay your bills ",
      icon: Minimize,
    },
    {
      title: "Effortless User Experience",
      description: "1 strategy call, then we move on to the work ",
      icon: Monitor,
    },
  ];

  return (
    <>
      {/* Features Grid */}
      <div className="border-b border-t border-[#5f5f7138] w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-5 py-4 border-l border-r border-[#5f5f7138] hover:border-[#2c2c2c] transition-colors duration-300 first:border-l-0 last:border-r-0 md:first:border-l md:last:border-r border-b md:border-b-0 last:border-b-0"
            >
              <div className="flex items-start mt-2">
                <div
                  className="flex-shrink-0 mr-6 rounded-full p-5 shadow-lg"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #08070E 90%, #5F5F71 90%, #08070E 100%)",
                    border: "1px solid #5f5f7138",
                    borderRadius: "50%",
                    boxShadow:
                      "0 0 20px rgba(0, 0, 0, 0.4) inset, 0 0 60px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>
              <div className="text-left mt-7">
                <h3 className="text-[16px] font-semibold text-[#F5F5F5] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#D5D5D5] text-[16px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
