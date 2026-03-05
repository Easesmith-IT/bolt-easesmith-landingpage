"use client";

import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    // shadcn@3.8.5
    <div className="min-h-screen bg-white">
      <Hero />
      <SocialProof />
      <Services />
      <WhyChooseUs />
      <Process />
      <CaseStudies />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
