import Image from "next/image";
import React from "react";

const OtherScreens = () => {
  return (
    <div className="relative">
      <div className="mx-auto container px-5 py-5 md:py-10">
        <div>
          <h2 className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#212121] opacity-60 select-none pointer-events-none">
            Other
          </h2>
          <h3 className="text-2xl md:text-4xl text-center -mt-1">
            Other Screens
          </h3>
        </div>

        <Image
          src="/portfolio/tech-tutor/other.webp"
          alt="logo"
          width={900}
          height={400}
          className="w-full mx-auto mt-10 md:mt-15 xl:mb-40"
        />
      </div>
      <Image
        src="/portfolio/tech-tutor/blob.png"
        alt="logo"
        width={900}
        height={100}
        className="hidden xl:inline absolute -bottom-50 left-0 right-0 w-full -z-1"
      />
      <Image
        src="/portfolio/tech-tutor/other-bg.png"
        alt="logo"
        width={500}
        height={100}
        className="absolute top-15 left-0 right-0 w-full -z-1"
      />
    </div>
  );
};

export default OtherScreens;
