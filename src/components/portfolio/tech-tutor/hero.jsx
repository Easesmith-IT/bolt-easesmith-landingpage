import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <header className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
        {/* <Image
                src="/portfolio/abhicares/abhicares-logo.png"
                alt="Abhicares Logo"
                width={240}
                height={320}
                className="object-contain  w-36 sm:w-60"
              /> */}

        <div className="relative inline-block font-josefin_sans">
          <h1 className="text-2xl sm:text-4xl md:text-[42px] font-semibold tracking-tight leading-none">
            <span className="text-[#1358C4]">Case</span>{" "}
            <span className="text-black">Study</span>
          </h1>

          <h1 className="text-2xl sm:text-4xl md:text-[42px] text-[#C1BEBE] font-semibold tracking-tight leading-none absolute left-0 top-2 sm:top-3 -z-[1]">
            Case Study
          </h1>
        </div>

        <Image
          src="/portfolio/chaperone/easesmith-logo.png"
          alt="Easesmith Logo"
          width={240}
          height={320}
          className="object-contain -mr-10"
        />
      </header>

      <div className="flex gap-5 flex-col lg:flex-row lg:justify-between">
        <div className="">
          <div className="sm:ml-10">
            <Image
              src="/portfolio/tech-tutor/tech-tutor-logo.png"
              alt="logo"
              width={200}
              height={200}
              className="mx-auto size-20 sm:size-50"
            />
            <h2 className="hidden sm:block text-2xl md:text-4xl text-center font-bold font-josefin_sans">
              Tech <span className="text-[#1358C4]">Tutor</span>{" "}
              <span className="text-[#1358C4]">|</span> An Edtech App
            </h2>

            <div className="sm:hidden block">
              <h2 className="text-2xl md:text-4xl text-center font-bold font-josefin_sans">
                Tech <span className="text-[#1358C4]">Tutor</span>{" "}
              </h2>
              <p className="font-bold text-center text-sm -m-1">An Edtech App</p>
            </div>
          </div>
          <Image
            src="/portfolio/tech-tutor/hero-left.png"
            alt="bg image"
            width={600}
            height={400}
            className="object-contain hidden lg:inline absolute top-13 left-10"
          />
        </div>
        <div>
          <div className="hidden md:flex justify-end mr-10 -mb-12 mt-10">
            <Button
              asChild
              className="bg-blue-600 z-2 hover:bg-blue-700 text-white rounded-md px-5"
            >
              <a target="_blank" href="https://abhicares.com">
                Live Link →
              </a>
            </Button>
          </div>

          <Image
            src="/portfolio/tech-tutor/hero-right.png"
            alt="bg image"
            width={800}
            height={400}
            className="object-contain absolute top-0 right-0 -z-1"
          />
          <div className="relative">
            <Image
              src="/portfolio/tech-tutor/mobiles.png"
              alt="mobiles"
              width={600}
              height={400}
              className="-ml-[15%] sm:ml-0"
            />
            <Image
              src="/portfolio/tech-tutor/ellipse.png"
              alt="mobiles"
              width={600}
              height={400}
              className="absolute top-5 right-0 -z-[1]"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-center mt-3 mb-5">
        <Button
          asChild
          className="bg-blue-600 z-2 hover:bg-blue-700 text-white rounded-md px-5"
        >
          <a target="_blank" href="https://abhicares.com">
            Live Link →
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
