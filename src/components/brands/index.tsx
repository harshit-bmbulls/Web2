"use client";

import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utlils";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import PrimaryButton from "../Button";

// const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [isInView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={{
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
//       }}
//     >
//       {children}
//     </motion.div>
//   )
// }

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
  [key: string]: any;
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
  name,
}: {
  src: string;
  alt: string;
  name: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-32 h-16 cursor-pointer overflow-hidden rounded-xl  transition-all duration-300",
        " transform hover:scale-105"
      )}
    >
      <Image
        src={src || "/placeholder.svg"}
        loading="lazy"
        alt={alt}
        width={96}
        height={48}
        className="h-full w-full object-contain filter grayscale hover:filter-none will-change-transform transition-all duration-300"
      />
    </div>
  );
};

export default function BrandsMarquee3D() {
  const brands = [
    { name: "upGrad", alt: "upGrad", src: "/brand-logo.svg" },
    { name: "BCG", alt: "BCG", src: "/brands-1.png" },
    { name: "ICICI", alt: "ICICI", src: "/brands-2.png" },
    { name: "TATA", alt: "TATA", src: "/brands-3.png" },
    { name: "redBus", alt: "redBus", src: "/brands-4.png" },
    { name: "HSBC", alt: "HSBC", src: "/brands-5.png" },
    { name: "Wazirx", alt: "Wazirx", src: "/brands-1.png" },
  ];

  const firstRow = brands.slice(0, Math.ceil(brands.length / 2));
  const secondRow = brands.slice(Math.ceil(brands.length / 2));

  return (
    <section className="w-full  ">
      <div className="w-[65vw] mx-auto px-4">
        <Image
          src="/hero.png"
          alt="brands-bg"
          width={1000}
          height={1000}
          className="mx-auto"
        />

        <PrimaryButton />

        <div className="py-40">
          <div className="text-center">
            <p className="text-white text-lg">
              Trusted by{" "}
              <span className="text-orange-500 font-semibold">
                3,000+ Brands
              </span>
            </p>
          </div>

          <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            {/* First marquee - moves from right to left (default) */}
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((brand) => (
                <BrandCard key={`first-${brand.name}`} {...brand} />
              ))}
            </Marquee>

            {/* Second marquee - moves from left to right (reverse) */}
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRow.map((brand) => (
                <BrandCard key={`second-${brand.name}`} {...brand} />
              ))}
            </Marquee>

            {/* Ultra-subtle fade gradients that perfectly blend */}
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-50 via-gray-50/10 to-transparent opacity-60"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-50 via-gray-50/10 to-transparent opacity-60"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
