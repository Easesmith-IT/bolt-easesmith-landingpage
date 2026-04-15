import Image from "next/image";
import React from "react";

const Wireframes = () => {
  return (
    <div className="container mx-auto py-5 md:py-10 px-5 mt-10 sm:mt-20">
      <div>
        <h3 className="text-xl md:text-4xl xl:text-5xl font-semibold">
          Hi-Fi Wireframes
        </h3>

        <Image
          src="/portfolio/crc-dashboard/heding-underline.png"
          alt="image"
          width={170}
          height={60}
          className="object-contain w-20 sm:w-48"
        />
      </div>

      <Image
        src="/portfolio/crc-dashboard/wireframes-img.png"
        alt="wireframs"
        width={500}
        height={500}
        className="object-contain w-full mt-5 md:mt-10"
      />
    </div>
  );
};

export default Wireframes;
