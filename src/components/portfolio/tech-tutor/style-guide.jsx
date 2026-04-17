import Image from "next/image";
import React from "react";

const StyleGuide = () => {
  return (
    <div className="mx-auto container px-5 py-5 md:py-10 font-josefin_sans">
      <div>
        <h3 className="text-2xl md:text-4xl text-center">Style Guide</h3>
        <h2 className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#d1d5db] opacity-60 select-none pointer-events-none">
          Style Guide
        </h2>
      </div>

      <div className="flex justify-between gap-5 mt-10">
        <div>
          <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-center">
            Primary
          </h3>
          <p className="text-lg sm:text-2xl md:text-4xl text-center font-bold sm:mt-5 sm:-mb-5 text-[#1561d7]">
            #1561d7
          </p>
          <Image
            src="/portfolio/tech-tutor/maths-learning.png"
            alt="logo"
            width={800}
            height={400}
            className="mx-auto"
          />
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-center">
            Secondary
          </h3>
          <p className="text-lg sm:text-2xl md:text-4xl text-center font-bold sm:mt-5 sm:-mb-5 text-[#6dcffb]">
            #6dcffb
          </p>
          <Image
            src="/portfolio/tech-tutor/maths-learning-1.png"
            alt="logo"
            width={800}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-center">
          Other Colors
        </h3>

        <div className="flex gap-10 justify-center mt-3">
          <div className="space-y-2">
            <div className="size-10 sm:size-25 bg-[#1358C4]"></div>
            <span className="text-xs sm:text-lg font-bold">Info</span>
          </div>
          <div className="space-y-2">
            <div className="size-10 sm:size-25 bg-[#E02424]"></div>
            <span className="text-xs sm:text-lg font-bold">Error</span>
          </div>
          <div className="space-y-2">
            <div className="size-10 sm:size-25 bg-[#057A55]"></div>
            <span className="text-xs sm:text-lg font-bold">Success</span>
          </div>
          <div className="space-y-2">
            <div className="size-10 sm:size-25 bg-[#FACA15]"></div>
            <span className="text-xs sm:text-lg font-bold">Warning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
