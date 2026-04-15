import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="relative">
        <Image
          src="/portfolio/bhoomie-reality/hero.png"
          alt="hero"
          width={700}
          height={300}
          className="mx-auto w-90 sm:w-130 lg:w-165 mt-30 relative z-[2]"
        />

        <Image
          src="/portfolio/bhoomie-reality/hero-right.png"
          alt="hero-right"
          width={500}
          height={200}
          className="absolute w-59 sm:w-89.5 lg:w-125 -top-40 right-0 -z-[1]"
        />
        <Image
          src="/portfolio/bhoomie-reality/hero-left.png"
          alt="hero-left"
          width={500}
          height={200}
          className="absolute w-59 sm:w-89.5 lg:w-125 -top-40 left-0 -z-[1]"
        />
        <Image
          src="/portfolio/bhoomie-reality/dreamland.svg"
          alt="dreamland"
          width={500}
          height={200}
          className="absolute w-49 sm:w-89.5 lg:w-125 -top-5 left-[50%] -translate-[50%] -z-[1]"
        />
      </div>

      <div className="flex justify-center mt-8 sm:mt-0 mb-5">
        <Button className="bg-blue-600 md:hidden inline hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </div>
    </div>
  );
};

export default Hero;
