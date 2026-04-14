import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="justify-end container mx-auto hidden sm:flex">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </div>

      <div className="flex gap-5 container mx-auto justify-center">
        <Image
          src="/portfolio/abhicares/Pixel 7 Pro Mockup.png"
          alt="image"
          width={240}
          height={240}
          className="object-contain w-20 sm:w-60"
        />

        <Image
          src="/portfolio/abhicares/Frame 1618873367.png"
          alt="image"
          width={800}
          height={500}
          className="object-contain w-50 sm:w-[800px]"
        />
      </div>

      <Image
        src="/portfolio/abhicares/hero-back1.png"
        alt="image"
        width={700}
        height={300}
        className="object-contain absolute right-0 top-20 -z-[1]"
      />
      <Image
        src="/portfolio/abhicares/hero-back2.png"
        alt="image"
        width={300}
        height={600}
        className="object-contain w-30 h-40 sm:h-[600px] sm:w-[300px] absolute left-0 top-[40%] -z-[1]"
      />

      <div className="w-full flex justify-center">
        <h1 className="text-4xl mt-10 xl:mt-0 lg:text-[60px] xl:text-[120px] font-semibold text-[#D9D9D9]">
          Case Study
        </h1>
      </div>
      <div className="flex sm:hidden justify-center container mx-auto mt-10 px-5">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-5">
          Live Link →
        </Button>
      </div>
    </div>
  );
};

export default Hero;
