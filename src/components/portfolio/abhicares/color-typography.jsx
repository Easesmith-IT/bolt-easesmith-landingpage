import Image from "next/image";
import React from "react";

const ColorTypography = () => {
  return (
    <div>
      <div className="py-10 container mx-auto px-5 relative">
        <h2 class="text-xl md:text-4xl xl:text-5xl font-bold border-l-4 md:border-l-8 py-1 sm:py-2 px-3 border-[#4481D1] text-[#1B1515]">
          Color & Typography
        </h2>

        <div className="flex gap-10 items-center justify-center mt-8 md:mt-15">
          <div className="font-serif text-center">
            <h3 className="font-semibold text-4xl md:text-7xl">Aa</h3>
            <p className="text-sm md:text-4xl">Gilda - Accent text</p>
          </div>
          <div className="font-poppins text-center">
            <h3 className="font-semibold text-4xl md:text-7xl">Aa</h3>
            <p className="text-sm md:text-4xl">Poppins - Main text</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 md:gap-10 max-w-4xl mx-auto mt-10 md:mt-20">
          <div>
            <div className="size-16 md:h-[160px] rounded-md md:rounded-xl md:w-full bg-[#222323]"></div>
            <p className="font-semibold text-xs md:text-xl text-center">
              #222323
            </p>
          </div>
          <div>
            <div className="size-16 md:h-[160px] rounded-md md:rounded-xl md:w-full bg-[#212529]"></div>
            <p className="font-semibold text-xs md:text-xl text-center">
              #212529
            </p>
          </div>
          <div>
            <div className="size-16 md:h-[160px] rounded-md md:rounded-xl md:w-full bg-[#808080]"></div>
            <p className="font-semibold text-xs md:text-xl text-center">
              #808080
            </p>
          </div>
          <div>
            <div className="size-16 md:h-[160px] border rounded-md md:rounded-xl md:w-full bg-[#FAFAFA]"></div>
            <p className="font-semibold text-xs md:text-xl text-center">
              #FAFAFA
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-0 md:mt-10">
        <Image
          src="/portfolio/abhicares/project-view-bottom.png"
          alt="image"
          width={440}
          height={320}
          className="object-contain w-48 md:w-[440px] md:h-[320px]"
        />
      </div>
    </div>
  );
};

export default ColorTypography;
