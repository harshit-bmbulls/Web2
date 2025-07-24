"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { TextAnimate } from "../TextAnimater";
import PrimaryButton from "../Button";

export default function Anyone() {
  const cards = [
    {
      title: "Coaches and Consultants",
      subtitle: "Hungry to attract high-ticket clients",
    },
    {
      title: "CEOs and Founders",
      subtitle: "looking to position themselves as industry leaders",
    },
    {
      title: "Freelancers",
      subtitle: "aiming to land premium contracts without endless pitching",
    },
    {
      title: "Authors and Speakers",
      subtitle: "seeking to amplify their message and book more gigs",
    },
    {
      title: "Corporate Executives",
      subtitle: "ready to skyrocket their influence and career opportunities",
    },
    {
      title: "Digital Marketers",
      subtitle: "wanting to showcase their expertise and attract dream clients",
    },
    {
      title: "Financial Advisors",
      subtitle: "looking to build trust and attract high-net-worth clients",
    },
    {
      title: "Tech Entrepreneurs",
      subtitle: "aiming to become the go-to authority in their niche",
    },
    {
      title:
        "Anyone who understands the value in having an audience of the right people",
      subtitle: "",
    },
  ];

  return (
    <div className="py-0 sm:py-16  md:py-18 flex flex-col items-center px-4 sm:px-6">
      <TextAnimate
        as="h2"
        animation="blurInUp"
        by="word"
        duration={0.5}
        className="text-[31px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]   text-[#f87a0a] text-center mb-8 sm:mb-10"
      >
        What do we do? Why choose this instead of service
      </TextAnimate>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#152f59] border border-[#69433f] rounded-[20px] p-4 sm:p-6 text-white"
          >
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300">{card.subtitle}</p>
          </div>
        ))}
      </div>
  
      <div className="mt-10 sm:mt-12">
        <PrimaryButton title="Let's Talk" />
      </div>
    </div>
  );
  
}
