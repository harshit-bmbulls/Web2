"use client";

import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utlils";
import PrimaryButton from "../Button";


const Marquee = ({
  className,
  reverse,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:2rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
               "hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

const BrandCard = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div
    className={cn(
      "relative w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 cursor-pointer overflow-hidden rounded-xl transition-all duration-300",
      "transform hover:scale-105"
    )}
    >
      <Image
        src={src || "/placeholder.svg"}
        loading="lazy"
        alt={alt}
        width={128}
        height={64}
        className="h-full w-full object-contain filter grayscale hover:filter-none  transition-all duration-300"
      />
    </div>
  );
};

export default function BrandsMarquee3D() {
  const brands = [
    { alt: "upGrad", src: "/brand-logo.svg" },
    { alt: "BCG", src: "/brands-1.png" },
    { alt: "ICICI", src: "/brands-2.png" },
    { alt: "TATA", src: "/brands-3.png" },
    { alt: "redBus", src: "/brands-4.png" },
    { alt: "HSBC", src: "/brands-5.png" },
    { name: "Wazirx", alt: "Wazirx", src: "/brands-1.png" },
  ];

  const firstRow = brands.slice(0, Math.ceil(brands.length / 2));
  const secondRow = brands.slice(Math.ceil(brands.length / 2));

  return (
    <section className="w-full pt-15 pb-15 sm:pb-24 lg:pb-32">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Hero Image */}
        <Image
          src="/hero.png"
          alt="Hero"
          width={1200}
          height={600}
          className="w-full h-auto max-w-4xl mx-auto object-contain"
        />

        {/* CTA */}
        <PrimaryButton />

        {/* Marquee Section */}
        <div className="w-full pt-16 sm:pt-24 py-20">
          <div className="text-center mb-6">
            <p className="text-white text-base sm:text-lg">
              Trusted by{" "}
              <span className="text-orange-500 font-semibold">
                3,000+ Brands
              </span>
            </p>
          </div>

          <div className="relative flex h-[120px] sm:h-[150px] md:h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            {/* First marquee */}
            <Marquee pauseOnHover className="[--duration:25s]">
              {firstRow.map((brand) => (
                <BrandCard key={`first-${brand.name}`} {...brand} />
              ))}
            </Marquee>

            {/* Second marquee - reversed */}
            <Marquee reverse pauseOnHover className="[--duration:25s]">
              {secondRow.map((brand) => (
                <BrandCard key={`second-${brand.name}`} {...brand} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
