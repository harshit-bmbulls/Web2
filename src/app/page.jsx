  "use client";
  import dynamic from "next/dynamic";
  import Faq from "../components/faq";
  import CTA from "../CTA";
  const Why = dynamic(() => import("../components/why"), { ssr: false });
  import Feature from "../components/feature";
  import { AppleCardsCarouselDemo } from "../components/what";
  import { HeroParallaxDemo } from "../components/hero";
  const Testimonail = dynamic(() => import("../components/testimonail"), {
    ssr: false,
    loading: () => <div className="h-[200px]" />, // fallback skeleton
  });

  import React, { useEffect, useRef } from "react";
  import Lenis from "lenis";

  export default function Home() {
    const lenisRef = useRef(null);

    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
  
      lenisRef.current = lenis;
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  
      return () => {
        lenis.destroy();
      };
    }, []);
    return (
      <>
      <div ref={lenisRef} className="smooth-scroll">
        
        <section id="hero">
          <HeroParallaxDemo />
        </section>
        <section id="features">
          <Feature />
        </section>
        <section id="what">
          <AppleCardsCarouselDemo />
        </section>
        <section id="why">
          <Why />
        </section>
        <section id="testimonials">
          <Testimonail />
        </section>
        <section id="cta">
          <CTA />
        </section>
          <Faq />
      </div>
      </>
    );
  }
