import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
        <Image
          src="/portfolio/chaperone/easesmith-logo.png"
          alt="Easesmith Logo"
          width={240}
          height={320}
          className="object-contain -mr-10"
        />

        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
          <a target="_blank" href="/">
            Live Link →
          </a>
        </Button>
      </header>

      <Image
        src="/portfolio/sportx/hero-img1.png"
        alt="Hero"
        width={240}
        height={320}
        className="absolute -top-1 left-0 -z-1"
      />
      <Image
        src="/portfolio/sportx/heroimg.png"
        alt="Hero"
        width={240}
        height={320}
        className="absolute top-0 left-30 -z-1"
      />

      <div className="flex gap-5 items-center justify-between">
        <div className="ml-20">
          <h1 className="text-9xl font-semibold">SportX</h1>
          <p className="text-4xl font-medium mt-8">A Mobile App</p>
        </div>
        <div>
          <div className="size-120 border border-[#F3F4F6] rounded-full flex justify-center items-center">
            <div className="size-105 border border-[#F3F4F6] rounded-full flex justify-center items-center">
              <div className="size-85 border border-[#F3F4F6] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
