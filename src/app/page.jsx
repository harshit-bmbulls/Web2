  "use client";
  import dynamic from "next/dynamic";
  import Faq from "../components/faq";
  import Anyone from "../components/Anyone";
  import Feature from "../components/feature";
  import ToolkitsSection from "../components/ToolkitsSection";
  import CaseStudiesSection from "../components/case-stuides";
  const Testimonail = dynamic(() => import("../components/testimonail"), {
    ssr: false,
    loading: () => <div className="h-[200px]" />, 
  });
  const BrandsMarquee3D = dynamic(() => import("../components/brands"), { ssr: false })
  const HeroParallaxDemo = dynamic(
    () => import("../components/hero").then((mod) => mod.HeroParallaxDemo),
    { ssr: false }
  )

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import PricingPlans from "../components/price";
import { CardHoverEffectDemo } from "../components/future";

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
        <section id="brands">
          <BrandsMarquee3D />
        </section>
        <section id="features">
          <Feature />
        </section>
        <section id="testimonials">
          <Testimonail />
        </section>
        <section id="who">
          <Anyone/>
        </section>
        <section id="case-studies">
          <CaseStudiesSection/>
        </section>
        <section id="future">
          <CardHoverEffectDemo/>
        </section>
        <section id="ToolkitsSection">
          <ToolkitsSection />
        </section>
        <section id="price">
          <PricingPlans/>
        </section>
          <Faq  chipText="FAQ" animationType="blurInUp" />
      </div>
      </>
    );
  }
