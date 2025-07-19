"use client";

import React from "react";
import { Carousel, Card } from "../../components/ui/carousel";
import { TextAnimate } from "../../components/TextAnimater";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <div className="max-w-7xl pl-4 mx-auto text-[30px] md:text-[48px]  text-white opacity-60 font-sans">
        <TextAnimate as="h2" duration={0.8}  animation="blurInUp" by="word" >
        What We Do
        </TextAnimate>
      </div>
      <Carousel items={cards}/>
    </div>
  );
}



const data = [
  {
    category: "SEO",
    title: "Seo Services.",
    src: "/seo.webp",
  },
  {
    category: "Content Marketing",
    title: " Content Marketing Services.",
    src: "/content-writing.webp",
  },
  {
    category: "Social Media Marketing",
    title: " Social Media Marketing Services.",
    src: "/seo2.webp",
  },

  {
    category: "Email Marketing",
    title: " Email Marketing Services.",
    src: "/Why-we-exist-1-1.webp",
  },
  {
    category: "Content Writing",
    title: " Content Writing Services.",
    src: "/aut.webp",
  },
  {
    category: "Seo Optimized",
    title: " Seo Optimized Services.",
    src: "/seo.webp",
  },
];
