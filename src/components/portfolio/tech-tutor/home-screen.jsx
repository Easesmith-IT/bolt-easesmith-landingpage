import Image from "next/image";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="relative">
      <div className="mx-auto container px-5 py-5 md:py-10">
        <div>
          <h2 className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#d1d5db] opacity-60 select-none pointer-events-none">
            Home
          </h2>
          <h3 className="text-2xl md:text-4xl text-center -mt-1">
            Home Screen
          </h3>
        </div>

        <Image
          src="/portfolio/tech-tutor/home-screen-img.svg"
          alt="logo"
          width={200}
          height={400}
          className="mx-auto mt-10 md:mt-15"
        />
      </div>
      <Image
        src="/portfolio/tech-tutor/blob-1.png"
        alt="logo"
        width={900}
        height={100}
        className="absolute hidden md:inline -top-120 left-0 right-0 w-full -z-1"
      />
    </div>
  );
};

export default HomeScreen;
