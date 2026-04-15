import Image from "next/image";
import React from "react";

const Screens = () => {
  return (
    <div className="py-5 md:py-10 px-5 font-inter">
      <div className="container mx-auto relative">
        <h3 className="text-xl md:text-2xl font-bold text-center">
          Mobile Screens
        </h3>

        <Image
          src="/portfolio/bhoomie-reality/mobile-screen-img.png"
          alt="Mobile Screens"
          width={800}
          height={300}
          className="mx-auto w-full mt-5 md:mt-10"
        />
        <Image
          src="/portfolio/bhoomie-reality/mobile-screen-bg.png"
          alt="Mobile Screens"
          width={800}
          height={300}
          className="w-[90%] mx-auto absolute top-0"
        />
      </div>

      <div className="container mx-auto relative mt-10 py-5 md:py-10">
        <h3 className="text-xl md:text-2xl font-bold text-center">
          Hi-fi Desktop Wireframes
        </h3>

        <Image
          src="/portfolio/bhoomie-reality/wireframe.png"
          alt="Hi-fi Desktop Wireframes"
          width={800}
          height={300}
          className=" w-full mt-5 md:mt-10"
        />
      </div>

      <div className="relative">
        <div className="container mx-auto relative mt-10 py-5 md:py-10">
          <h3 className="text-xl md:text-2xl font-bold text-center">
            Desktop Design Screens
          </h3>

          <Image
            src="/portfolio/bhoomie-reality/tablets.png"
            alt="Desktop Design Screens"
            width={800}
            height={300}
            className="mx-auto w-[90%] mt-5 md:mt-10 "
          />
        </div>
        <Image
          src="/portfolio/bhoomie-reality/tablets-bg.png"
          alt="Desktop Design Screens1"
          width={800}
          height={300}
          className="mx-auto w-full absolute top-0 left-0 -z-[2]"
        />
      </div>
    </div>
  );
};

export default Screens;
