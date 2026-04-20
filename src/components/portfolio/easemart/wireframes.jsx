import Image from "next/image";
import React from "react";

const Wireframes = () => {
  return (
    <div className="py-5 md:py-10 px-5 container mx-auto font-aclonica">
      <div className="flex gap-1 items-center">
        <div className="size-10 sm:size-18 md:size-24 border-2 md:border-4 border-black rounded-full flex justify-center items-center">
          <h2 className="font-extrabold font-open_sans text-xl sm:text-3xl md:text-5xl">
            4
          </h2>
        </div>
        <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
          Hi-Fi Wireframes
        </h1>
      </div>

      <Image
        src="/portfolio/easemart/wireframes.svg"
        alt="wireframes"
        width={400}
        height={600}
        className="mt-5 sm:mt-10 w-full"
      />
    </div>
  );
};

export default Wireframes;
