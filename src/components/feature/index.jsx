// "use client";

// import { useMemo, useRef } from "react";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";

// // ✅ Lazy load non-critical animation components
// const TextAnimate = dynamic(
//   () => import("../TextAnimater").then((mod) => mod.TextAnimate),
//   { ssr: false, loading: () => <span className="text-white/50"></span> }
// );

// const features = [
//   {
//     title: "Case study strategy (Strategy call)",
//     desc: "We map out your best client wins and turn them into conversion weapons that close deals for you. You don't write a word, tell us the facts, we structure and script it.",
//   },
//   {
//     title: "Proof-backed, narrative-driven stories (5 case studies)",
//     desc: "Stories designed to make prospects think 'holy sh*t, I need this' instead of 'cool story bro.' Include CTAs, credibility layers, and visual breakdowns.",
//   },
//   {
//     title: "Lead magnet upgrade (Optional add-on)",
//     desc: "Transform your case studies into lead-capturing machines that work 24/7 - built to repurpose across websites, sales decks, email, and socials.",
//   },
//   {
//     title: "Results tracking (Performance monitoring)",
//     desc: 'Clear metrics showing lead generation and conversion rates, not fluff about "brand awareness." They help qualify leads by showing exactly what you solve.',
//   },
// ];

// // ✅ Memoized feature card component to prevent re-renders
// const FeatureCard = ({ feature, radialGradient, cardMaskStyle }) => (
//   <div
//     className="flex flex-col gap-3 sm:gap-4 items-start p-4 sm:p-6 lg:p-8 xl:p-10 rounded-[20px] sm:rounded-[25px] min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] relative bg-black"
//     style={radialGradient}
//   >
//     <div
//       className="border-2 border-white/50 absolute inset-0 rounded-[20px] sm:rounded-[25px]"
//       style={cardMaskStyle}
//     />
//     <h3 className="text-gradient font-dm-sans text-[20px] sm:text-[24px] lg:text-[28px] leading-[24px] sm:leading-[28px] lg:leading-[34px] -tracking-[0.03em] relative z-20">
//       {feature.title}
//     </h3>
//     <p className="text-white/50 font-manrope text-sm sm:text-base leading-5 sm:leading-6 relative z-20">
//       {feature.desc}
//     </p>
//   </div>
// );

// export default function Feature() {
//   const container = useRef(null);

//   // ✅ Avoid re-creating styles on each render
//   const radialGradient = useMemo(() => ({
//     background: `radial-gradient(
//       ellipse at bottom right,
//       rgba(200, 110, 207, 0.2) 10%,
//       rgba(1, 4, 13, 0.9) 36%,
//       #01050F 0%
//     )`,
//     transition: "background 0.3s ease-in-out",
//   }), []);

//   const cardMaskStyle = useMemo(() => ({
//     WebkitMaskImage:
//       "linear-gradient(218deg, rgba(0, 0, 0, 0.1) 39%, rgba(0, 0, 0, 0.50) 100%)",
//     maskImage:
//       "linear-gradient(218deg, rgba(0, 0, 0, 0.1) 39%, rgba(0, 0, 0, 0.50) 100%)",
//     borderRadius: "25px",
//     opacity: 0.75,
//     inset: 0,
//     overflow: "visible",
//     position: "absolute",
//     zIndex: 10,
//   }), []);

//   return (
//     <section
//       ref={container}
//       className="w-full min-h-screen flex flex-col items-center py-12 sm:py-16 md:py-20 justify-center px-3 sm:px-4"
//       aria-labelledby="feature-heading"
//     >
//       {/* Optional animated lighting effect - comment if unnecessary */}
//       {/* <LightingEffectCenter /> */}

//       {/* ✅ Animated Heading with efficient Framer usage */}
//       <motion.div
//         className="flex flex-col items-center w-full max-w-4xl mb-8 sm:mb-10 md:mb-12"
//         initial={{ opacity: 0, x: 80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <div
//           id="feature-heading"
//           className="max-w-[320px] sm:max-w-[500px] md:max-w-[724px] text-center text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-manrope leading-[1.15] sm:leading-[1.1] tracking-[-0.03em] sm:tracking-[-0.05em] text-white opacity-60 px-2"
//         >
//           <TextAnimate
//             animation="blurInUp"
//             duration={0.4}
//             delay={0.8}
//             once
//             as="h2"
//           >
//             The high conversion proof-building machine
//           </TextAnimate>
//         </div>
//       </motion.div>

//       {/* ✅ Grid Layout of Features - Mobile first approach */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-4 lg:px-0 max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] w-full mx-auto">
//         {features.map((feature, idx) => (
//           <FeatureCard
//             key={idx}
//             feature={feature}
//             radialGradient={radialGradient}
//             cardMaskStyle={cardMaskStyle}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// ✅ Lazy load non-critical animation components
const TextAnimate = dynamic(
  () => import("../TextAnimater").then((mod) => mod.TextAnimate),
  { ssr: false, loading: () => <span className="text-white/50"></span> }
);

const features = [
  {
    title: "Case study strategy (Strategy call)",
    desc: "We map out your best client wins and turn them into conversion weapons that close deals for you. You don't write a word, tell us the facts, we structure and script it.",
  },
  {
    title: "Proof-backed, narrative-driven stories (5 case studies)",
    desc: "Stories designed to make prospects think 'holy sh*t, I need this' instead of 'cool story bro.' Include CTAs, credibility layers, and visual breakdowns.",
  },
  {
    title: "Lead magnet upgrade (Optional add-on)",
    desc: "Transform your case studies into lead-capturing machines that work 24/7 - built to repurpose across websites, sales decks, email, and socials.",
  },
  {
    title: "Results tracking (Performance monitoring)",
    desc: 'Clear metrics showing lead generation and conversion rates, not fluff about "brand awareness." They help qualify leads by showing exactly what you solve.',
  },
];

// ✅ Memoized feature card component to prevent re-renders
const FeatureCard = ({ feature, radialGradient, cardMaskStyle }) => (
  <div
    className="flex flex-col gap-3 sm:gap-4 items-start p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 rounded-[18px] xs:rounded-[20px] sm:rounded-[22px] md:rounded-[25px] min-h-[200px] xs:min-h-[220px] sm:min-h-[240px] md:min-h-[250px] lg:min-h-[260px] relative bg-black overflow-hidden"
    style={radialGradient}
  >
    <div
      className="border-2 border-white/50 absolute inset-0 rounded-[18px] xs:rounded-[20px] sm:rounded-[22px] md:rounded-[25px]"
      style={cardMaskStyle}
    />
    <h3 className="text-gradient font-dm-sans text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[22px] xs:leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] xl:leading-[34px] -tracking-[0.02em] sm:-tracking-[0.03em] relative z-20 break-words text-white">
      {feature.title}
    </h3>
    <p className="text-white/50 font-manrope text-[13px] xs:text-[14px] sm:text-[15px] md:text-base leading-[18px] xs:leading-[19px] sm:leading-[21px] md:leading-6 relative z-20 break-words">
      {feature.desc}
    </p>
  </div>
);

export default function Feature() {
  const container = useRef(null);

  // ✅ Avoid re-creating styles on each render
  const radialGradient = useMemo(() => ({
    background: `radial-gradient(
      ellipse at bottom right,
      rgba(200, 110, 207, 0.2) 10%,
      rgba(1, 4, 13, 0.9) 36%,
      #01050F 0%
    )`,
    transition: "background 0.3s ease-in-out",
  }), []);

  const cardMaskStyle = useMemo(() => ({
    WebkitMaskImage:
      "linear-gradient(218deg, rgba(0, 0, 0, 0.1) 39%, rgba(0, 0, 0, 0.50) 100%)",
    maskImage:
      "linear-gradient(218deg, rgba(0, 0, 0, 0.1) 39%, rgba(0, 0, 0, 0.50) 100%)",
    borderRadius: "25px",
    opacity: 0.75,
    inset: 0,
    overflow: "visible",
    position: "absolute",
    zIndex: 10,
  }), []);

  return (
    <section
      ref={container}
      className="w-full min-h-screen flex flex-col items-center py-12 sm:py-16 md:py-20 justify-center px-3 sm:px-4"
      aria-labelledby="feature-heading"
    >
      {/* Optional animated lighting effect - comment if unnecessary */}
      {/* <LightingEffectCenter /> */}

      {/* ✅ Animated Heading with efficient Framer usage */}
      <motion.div
        className="flex flex-col items-center w-full max-w-[1200px] mb-8 sm:mb-10 md:mb-12"
      >
        <div
          id="feature-heading"
          className="max-w-[290px] xs:max-w-[320px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[724px] text-center text-[30px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-manrope leading-[1.2] xs:leading-[1.18] sm:leading-[1.16] md:leading-[1.14] lg:leading-[1.12] xl:leading-[1.1] tracking-[-0.02em] xs:tracking-[-0.025em] sm:tracking-[-0.03em] md:tracking-[-0.04em] lg:tracking-[-0.045em] xl:tracking-[-0.05em] text-white opacity-60 px-2 break-words">
          <TextAnimate
            animation="blurInUp"
            duration={0.4}
            delay={0.8}
            once
            as="h2"
          >
            The high conversion proof-building machine
          </TextAnimate>
        </div>
      </motion.div>

      {/* ✅ Grid Layout of Features - Mobile first approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 px-3 xs:px-4 sm:px-6 md:px-4 lg:px-0 max-w-[340px] xs:max-w-[380px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] w-full mx-auto">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            feature={feature}
            radialGradient={radialGradient}
            cardMaskStyle={cardMaskStyle}
          />
        ))}
      </div>
    </section>
  );
}