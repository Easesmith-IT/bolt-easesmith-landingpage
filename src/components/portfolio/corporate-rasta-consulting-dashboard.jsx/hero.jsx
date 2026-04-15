import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#1C64F2] sm:min-h-screen">
      <div className="flex justify-end pt-5">
        <Image
          src="/portfolio/crc-dashboard/easesmith-white.png"
          alt="image"
          width={300}
          height={60}
          className="object-contain w-30 sm:w-72"
        />
      </div>

      <div className="flex gap-5 items-start relative">
        <Image
          src="/portfolio/crc-dashboard/hero-laptop.png"
          alt="image"
          width={900}
          height={500}
          className="w-xl sm:w-4xl"
        />
        <div className="lg:relative sm:h-screen absolute right-2 sm:right-10 top-1">
          <Image
            src="/portfolio/crc-dashboard/hero-img-2.png"
            alt="image"
            width={600}
            height={400}
            className="w-30 sm:w-80 lg:w-lg mt-10"
          />

          <Button
            variant="outline"
            className="bg-transparent hidden lg:inline absolute right-10 bottom-0 sm:bottom-10 text-white hover:text-black"
          >
            Live Link →
          </Button>
          <div className="flex justify-end mt-5 lg:hidden mr-5">
            <Button
              variant="outline"
              className="bg-transparent lg:hidden inline text-white hover:text-black"
            >
              Live Link →
            </Button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Hero;
