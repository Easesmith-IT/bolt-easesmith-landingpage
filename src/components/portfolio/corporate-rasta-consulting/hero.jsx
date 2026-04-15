import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="max-[400px]:h-[40vh] max-sm:h-[50vh] h-[70vh] sm:min-h-[80vh] lg:min-h-[60vh]">
        <div className="flex justify-center gap-5 container mx-auto md:mt-10 relative ">
          <div className="bg-[#CDD3E44D] p-2.5 rounded-2xl flex gap-2 items-center">
            <Image
              src="/portfolio/crc/crc-logo.png"
              alt="Crc Logo"
              width={50}
              height={50}
              className="object-contain size-5 md:size-10 lg:size-12"
            />
            <h1 class="text-base md:text-2xl lg:text-4xl font-semibold bg-[linear-gradient(170.76deg,#5FB5EB_12.17%,#949494_44.9%,#86C256_68.6%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Corporate Raasta Consulting
            </h1>
          </div>
          <div className="absolute -right-10 lg:right-0 top-0 justify-end container mx-auto hidden md:flex">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5"
            >
              <a target="_blank" href="https://corporateraastaconsulting.com">
                Live Link →
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/portfolio/crc/hero-1.png"
            alt="Hero"
            width={800}
            height={400}
            className="object-contain md:w-[500px] lg:w-[800px] -mt-10 sm:-mt-20 absolute top-0 left-[50%] -translate-x-[50%] right-0"
          />

          <Image
            src="/portfolio/crc/home-back.png"
            alt="Hero"
            width={500}
            height={500}
            className="object-contain w-full mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
