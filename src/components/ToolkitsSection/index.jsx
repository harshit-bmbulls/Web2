"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Search,
  MapPin,
  FileText,
  Bot,
  Users,
  Globe,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "../TextAnimater";
import PrimaryButton from "../Button";

const toolkits = [
  {
    id: "content writing",
    name: "Content Writing",
    icon: BarChart3,
    title: "Content Writing",
    description: [
      "Want to add life to your blogs, e-books, case studies, or academic content?",
      "Try our content writing services for high-quality, value-driven content",
      "Engage your audience and boost conversions effortlessly.",
    ],
    image: "/content-writing.webp",
  },
  {
    id: "copywriting",
    name: "Copywriting",
    icon: Search,
    title: "Copywriting",
    description: [
      "Clever and stellar – that’s our approach to copywriting services",
      "From Google ad copies that receive instant clicks to promotional emails",
      "we craft copies to help you sell more.",
    ],
    image: "/copywriting.webp",
  },
  {
    id: "search engine optimization",
    name: "Search Engine Optimization",
    icon: MapPin,
    title: "Search Engine Optimization",
    description: [
      "Rule Google’s 1st result page with our search engine optimization service",
      "Let our SEO experts elevate your content and brand reach.",
      "Local search performance",
    ],
    image: "/seo.webp",
  },
  {
    id: "social media marketing",
    name: "Social Media Marketing",
    icon: FileText,
    title: "Social Media Marketing",
    description: [
      "Boost engagement with scroll-stopping social media content.",
      "Engage with your audience and enhance brand awareness!",
      "Content gap identification",
    ],
    image: "/smm.webp",
  },
  {
    id: "technical content writing",
    name: "Technical Content Writing",
    icon: Bot,
    title: "Technical Content Writing",
    description: [
      "Get well-researched technical content that educates and engages",
      "Elevate your content with precision-driven technical writing.",
      "We deliver beyond expectations—every time.",
    ],
    image: "/tech.webp",
  },
  {
    id: "blog writing",
    name: "Blog Writing",
    icon: Users,
    title: "Blog Writing",
    description: [
      "Collaborate with our content writing agency and develop a conversion-ready blogging strategy.",
      " Produce exceptional blogs to keep readers hooked and boost brand credibility.",
      "Audience insights",
    ],
    image: "/blog.webp",
  },
  {
    id: "website content writing",
    name: "Website Content Writing",
    icon: Globe,
    title: "website content writing",
    description: [
      "Convert landing pages into lead generating machines",
      "Drive website traffic, highlight product benefits and reach greater heights",
      "ROI analysis",
    ],
    image: "/website.webp",
  },
];

export default function ToolkitsSection() {
  const [activeToolkit, setActiveToolkit] = useState(0);

  const currentToolkit = toolkits[activeToolkit];
  const prevToolkit =
    toolkits[(activeToolkit - 1 + toolkits.length) % toolkits.length];
  const nextToolkit = toolkits[(activeToolkit + 1) % toolkits.length];

  const handlePrevious = () => {
    setActiveToolkit((activeToolkit - 1 + toolkits.length) % toolkits.length);
  };

  const handleNext = () => {
    setActiveToolkit((activeToolkit + 1) % toolkits.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
    <div className="relative z-10 container mx-auto px-2 sm:px-4 md:py-10 py-0 max-w-[1200px]">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <TextAnimate
          className="text-[31px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]  text-[#f87a0a] mb-4 sm:mb-8"
          as="h2"
          animation="blurInUp"
          by="word"
          duration={0.5}
        >
          Toolkits for every task
        </TextAnimate>

        {/* Toolkit Nav Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {toolkits.map((toolkit, index) => {
            const IconComponent = toolkit.icon;
            return (
              <Button
                key={toolkit.id}
                variant={index === activeToolkit ? "default" : "secondary"}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  index === activeToolkit
                    ? "bg-[#152f59] border border-[#69433f] text-[#f87a0a]"
                    : "bg-[#152f59] text-white border border-[#69433f] hover:bg-[#2f415d]"
                }`}
                onClick={() => setActiveToolkit(index)}
              >
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 " />
                <span className="text-[12px] sm:text-sm md:text-base">{toolkit.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative flex items-center justify-center mb-8 sm:mb-12">
        {/* Prev Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 sm:left-2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12"
          onClick={handlePrevious}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </Button>

        {/* Cards */}
        <div className="flex items-center justify-center w-full max-w-6xl px-4 sm:px-12">
          {/* Mobile: Single Card */}
          <div className="block sm:hidden w-full max-w-[90%] mx-auto">
            <Card className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <currentToolkit.icon className="w-6 h-6 text-[#f87a0a] mr-3" />
                  <h3 className="text-[14px] font-semibold  text-[#f87a0a]">
                    {currentToolkit.title}
                  </h3>
                </div>

                <div className="mb-4">
                  {currentToolkit.description.map((item, index) => (
                    <div key={index} className="flex items-center mb-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shrink-0" />
                      <span className="text-xs text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Image
                    src={currentToolkit.image || "/placeholder.svg"}
                    alt={currentToolkit.title}
                    width={600}
                    height={400}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desktop: 3 Cards */}
          <div className="hidden sm:flex items-center justify-center gap-4 w-full">
            {[prevToolkit, currentToolkit, nextToolkit].map(
              (toolkit, idx) => {
                const isCenter = idx === 1;
                return (
                  <Card
                    key={idx}
                    className={`${
                      isCenter
                        ? "w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto min-h-[300px] sm:h-80 md:h-88 lg:h-96 xl:h-[500px] bg-white shadow-2xl transform scale-105 z-10"
                        : "w-48 sm:w-56 md:w-64 lg:w-72 xl:w-85 h-64 sm:h-72 md:h-80 lg:h-88 xl:h-96 bg-white/95 backdrop-blur-sm transform -translate-y-2 sm:-translate-y-4 md:-translate-y-6 lg:-translate-y-8 opacity-70 hover:opacity-90 transition-all duration-300"
                    } rounded-2xl overflow-hidden`}
                  >
                    <CardContent
                      className={`p-4 h-full flex flex-col ${
                        isCenter ? "sm:p-5 md:p-6 lg:p-8" : ""
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <toolkit.icon className="w-6 h-6 text-[#f87a0a] mr-3" />
                        <h3 className="text-lg font-semibold text-[#f87a0a]">
                          {toolkit.title}
                        </h3>
                      </div>

                      <div className="mb-4 flex-1">
                        {toolkit.description.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 mb-1 shrink-0"
                          >
                            <div className="w-1.5 h-1.5 bg-[#032150] rounded-full shrink-0" />
                            <p className="text-sm text-gray-700">{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Image
                          src={toolkit.image || "/placeholder.svg"}
                          alt={toolkit.title}
                          width={600}
                          height={400}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              }
            )}
          </div>
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 sm:right-2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12"
          onClick={handleNext}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </Button>
      </div>

      <div className="text-center">
        <Button className="bg-[#f87a0a] hover:bg-[#e46b00] text-white px-6 py-3 rounded-full">
          Call Now
        </Button>
      </div>
    </div>
  </section>
   );
}
