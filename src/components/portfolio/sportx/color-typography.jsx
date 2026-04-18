import Image from "next/image";
import React from "react";

const ColorTypography = () => {
  return (
    <div className="font-outfit">
      <div className="py-5 md:py-10 relative px-5">
        <div className="container mx-auto mt-10">
          <div className="relative h-50 w-[25%] flex items-center justify-center">
            <p className="absolute text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none">
              02
            </p>

            <div className="relative text-center">
              <h2 className="text-3xl font-extrabold text-black leading-tight">
                <span className="underline decoration-4 underline-offset-4">
                  Color &
                </span>
                <br />
                <span className="underline decoration-4 underline-offset-4">
                  Typography
                </span>
              </h2>
            </div>
          </div>
        </div>
        <h3 className="text-4xl font-bold text-center">Colors</h3>

        <Image
          src="/portfolio/sportx/colors-img.png"
          alt="colors-img"
          width={900}
          height={320}
          className="mx-auto mt-10"
        />

        <h3 className="text-4xl font-bold text-center mt-5">Typography</h3>

        <div className="flex justify-center mt-20 items-start">
          <div className="flex items-center justify-center">
            <div className="relative w-100">
              <h2
                className="absolute -z-1 inset-0 flex items-center justify-center 
          text-6xl font-bold text-black"
              >
                Outfit
              </h2>
              <svg viewBox="0 0 250 200" className="w-full">
                <text
                  x="50%"
                  y="70%"
                  textAnchor="middle"
                  className="text-[160px] font-extrabold fill-transparent stroke-[#FFD700]"
                  strokeWidth="4"
                  strokeDasharray="8,6"
                >
                  Aa
                </text>
              </svg>
            </div>
          </div>

          <div className="space-y-4 w-90">
            <div>
              <h4 className="text-lg font-bold">Outfit Bold</h4>
              <p className="text-lg font-bold">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                !@#$%^&*()_+
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Outfit Medium</h4>
              <p className="text-lg font-medium">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                !@#$%^&*()_+
              </p>
            </div>
            <div>
              <h4 className="text-lg">Outfit Regular</h4>
              <p className="text-lg">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                !@#$%^&*()_+
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/portfolio/sportx/typography.png"
          alt="typography"
          width={210}
          height={300}
          className="absolute right-15 bottom-10"
        />
      </div>
    </div>
  );
};

export default ColorTypography;
