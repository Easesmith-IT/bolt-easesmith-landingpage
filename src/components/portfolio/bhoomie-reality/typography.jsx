import Image from "next/image";
import React from "react";

const Typography = () => {
  return (
    <div className="py-5 md:py-10 px-5 font-inter space-y-8">
      <div className="border-2 border-[#f39599] rounded-2xl rounded-br-0 p-5 container mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-center">
          Color Palette
        </h3>

        <Image
          src="/portfolio/bhoomie-reality/test-img.png"
          alt="color palette"
          width={500}
          height={300}
          className="mx-auto mt-5"
        />
        <Image
          src="/portfolio/bhoomie-reality/test1-img.png"
          alt="color palette"
          width={500}
          height={300}
          className="mx-auto"
        />
      </div>

      <div className="border-2 border-[#f39599] rounded-2xl rounded-bl-0 p-5 container mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-center">
          Typography
        </h3>

        <h3 className="font-bold text-3xl sm:text-5xl text-center md:text-9xl my-10">
          Aa
        </h3>

        <div className="grid grid-cols-3 gap-2 sm:gap-10">
          <div className="bg-[#E6F2F2] p-3 max-[440px]:flex-col flex gap-2 sm:gap-5 items-center">
            <div className="bg-[#F9FAFB] max-[440px]:text-[10px] text-sm sm:text-xl md:text-4xl rounded-md sm:rounded-lg p-1 sm:p-2 lg:text-6xl">
              Aa
            </div>
            <p className="max-[440px]:text-[10px] max-[440px]:text-center text-sm sm:text-lg md:text-2xl">
              Inter <br /> Regular
            </p>
          </div>
          <div className="bg-[#E6F2F2] p-3 flex max-[440px]:flex-col gap-2 sm:gap-5 items-center">
            <div className="bg-[#F9FAFB] max-[440px]:text-[10px] text-sm sm:text-xl font-medium md:text-4xl rounded-md sm:rounded-lg p-1 sm:p-2 lg:text-6xl">
              Aa
            </div>
            <p className="max-[440px]:text-[10px] max-[440px]:text-center text-sm sm:text-lg md:text-2xl font-medium">
              Inter <br /> Regular
            </p>
          </div>
          <div className="bg-[#E6F2F2] p-3 max-[440px]:flex-col flex gap-2 sm:gap-5 items-center">
            <div className="bg-[#F9FAFB] font-bold max-[440px]:text-[10px] text-sm sm:text-xl md:text-4xl rounded-md sm:rounded-lg p-1 sm:p-2 lg:text-6xl">
              Aa
            </div>
            <p className="max-[440px]:text-[10px] max-[440px]:text-center text-sm sm:text-lg md:text-2xl font-bold">
              Inter <br /> Medium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
