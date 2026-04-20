import Image from "next/image";
import React from "react";

const Wireframes = () => {
  return (
    <div className="font-outfit py-5 md:py-10 px-5 container mx-auto">
      <div className="relative w-[35%] sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
        <p className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none">
          05
        </p>

        <div className="relative text-center">
          <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
            <span className="underline whitespace-nowrap md:decoration-4 md:underline-offset-4">
              HI-FI
            </span>
            <br />
            <span className="underline md:decoration-4 md:underline-offset-4">
              Wireframes
            </span>
          </h2>
        </div>
      </div>

      <Image
        src="/portfolio/sportx/wireframe.svg"
        alt="wireframe"
        width={310}
        height={400}
        className="w-full mt-10"
      />
    </div>
  );
};

export default Wireframes;
