import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative sm:min-h-screen overflow-hidden">
      <header className="w-full flex flex-col gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
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
        src="/portfolio/sportx/hero-img3.png"
        alt="Hero"
        width={240}
        height={320}
        className="absolute bottom-0 left-0 -z-1"
      />
      <Image
        src="/portfolio/sportx/hero-img4.png"
        alt="Hero"
        width={240}
        height={320}
        className="absolute bottom-0 left-30 -z-1"
      />
      <Image
        src="/portfolio/sportx/hero-img5.png"
        alt="Hero"
        width={240}
        height={320}
        className="absolute bottom-0 right-0 -z-1"
      />
      <Image
        src="/portfolio/sportx/hero-img6.png"
        alt="Hero"
        width={240}
        height={320}
        className="absolute bottom-0 right-[20%] -z-1"
      />
      <Image
        src="/portfolio/sportx/heroimg.png"
        alt="Hero"
        width={240}
        height={320}
        className="absolute top-0 left-30 -z-1"
      />

      <div className="flex gap-5 items-start justify-between">
        <div className="ml-5 sm:ml-20 mt-10 lg:mt-20">
          <h1 className="text-5xl md:text-9xl font-semibold">SportX</h1>
          <p className="text-2xl md:text-4xl font-medium mt-4 sm:mt-8">A Mobile App</p>
        </div>
        <div>
          {/* <div className="size-120 border border-[#F3F4F6] rounded-full flex justify-center items-center">
            <div className="size-105 border border-[#F3F4F6] rounded-full flex justify-center items-center">
              <div className="size-85 border border-[#F3F4F6] rounded-full"></div>
            </div>
          </div> */}

          <Image
            src="/portfolio/sportx/mobile.png"
            alt="mobile"
            width={350}
            height={120}
            className="lg:mr-[10%]"
          />
        </div>
      </div>

      <div className="hidden sm:flex items-end absolute left-[5%] sm:left-[10%] lg:left-[15%] bottom-0">
        <Image
          src="/portfolio/sportx/phone1.png"
          alt="Hero"
          width={300}
          height={220}
          className="-mr-[6%] relative z-2 w-[150px] md:w-[200px] lg:w-[300px]"
        />
        <Image
          src="/portfolio/sportx/phone2.png"
          alt="Hero"
          width={300}
          height={320}
          className="w-[150px] md:w-[200px] lg:w-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;
