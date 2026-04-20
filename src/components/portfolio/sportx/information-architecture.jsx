import Image from "next/image";
import React from "react";

const InformationArchitecture = () => {
  return (
    <div className="font-outfit py-5 md:py-10 px-5 container mx-auto overflow-hidden">
      <div className="relative w-[35%] sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
        <p className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none">
          04
        </p>

        <div className="relative text-center">
          <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
            <span className="underline md:decoration-4 md:underline-offset-4">
              Information
            </span>
            <br />
            <span className="underline md:decoration-4 md:underline-offset-4">
              Architecture
            </span>
          </h2>
        </div>
      </div>

      <Image
        src="/portfolio/sportx/information-architecture.svg"
        alt="user"
        width={310}
        height={400}
        className="w-full -mt-10 md:ml-10"
      />
    </div>
  );
};

export default InformationArchitecture;
