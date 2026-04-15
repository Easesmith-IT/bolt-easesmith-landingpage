import Image from "next/image";
import React from "react";

const Typograph = () => {
  return (
    <div className="relative font-inter">
      <div className="relative z-[2] py-10 container mx-auto px-5">
        <div className="mt-2 sm:mt-10">
          <h3 className="text-xl text-white md:text-4xl xl:text-5xl font-semibold">
            Typography
          </h3>

          <Image
            src="/portfolio/crc-dashboard/heding-underline.png"
            alt="image"
            width={170}
            height={60}
            className="object-contain w-20 sm:w-48"
          />
        </div>

        <div className="flex flex-col items-center bg-[#D9D9D94D] text-white max-w-2xl rounded-4xl py-10 mx-auto gap-10 mt-2 sm:mt-9 font-inter">
          <div>
            <h3 className="text-base md:text-xl xl:text-3xl">Font- Inter</h3>
            <p className="text-5xl xl:text-7xl mt-5">Aa</p>
          </div>
          <div className="space-y-5 px-5">
            <div>
              <p className="text-[10px] sm:text-sm md:text-base">Regular</p>
              <p className="text-[10px] sm:text-sm md:text-base">
                Aa Bb Cc Dd Ee Ff Gg Hh li Jj Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
            </div>
            <div>
              <p className="font-medium text-[10px] sm:text-sm md:text-base">
                Medium
              </p>
              <p className="font-medium text-[10px] sm:text-sm md:text-base">
                Aa Bb Cc Dd Ee Ff Gg Hh li Jj Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
            </div>
            <div>
              <p className="font-bold text-[10px] sm:text-sm md:text-base">
                Bold
              </p>
              <p className="font-bold text-[10px] sm:text-sm md:text-base">
                Aa Bb Cc Dd Ee Ff Gg Hh li Jj Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] py-10 container mx-auto px-5">
        <div>
          <h3 className="text-xl text-white md:text-4xl xl:text-5xl font-semibold">
            Colors
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
          src="/portfolio/crc-dashboard/color-codes.png"
          alt="image"
          width={800}
          height={150}
          className="object-contain mt-5 w-80 sm:mt-0 sm:w-xl mx-auto"
        />
      </div>

      <Image
        src="/portfolio/crc-dashboard/typography-bg.png"
        alt="image"
        width={1000}
        height={600}
        className="w-full max-sm:h-[1000px] h-[1300px] sm:h-[1500px] absolute top-0"
      />
    </div>
  );
};

export default Typograph;
