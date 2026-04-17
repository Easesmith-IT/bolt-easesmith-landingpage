import Image from "next/image";
import React from "react";

const Wireframe = () => {
  return (
    <div className="font-josefin_sans">
      <div className="mx-auto container px-5 py-5 md:py-10">
        <h3 className="text-2xl md:text-4xl text-center">Wireframes</h3>
        <h2 className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#000] opacity-60 select-none pointer-events-none">
          Wireframes
        </h2>
      </div>

      <div className="bg-[#1C64F2] shadow-[0px_4px_100px_5px_#1C64F2] py-10 md:py-20 -mt-12 md:-mt-32">
        <Image
          src="/portfolio/tech-tutor/wireframe-img.svg"
          alt="logo"
          width={800}
          height={400}
          className="w-[90%] mx-auto"
        />
      </div>
    </div>
  );
};

export default Wireframe;
