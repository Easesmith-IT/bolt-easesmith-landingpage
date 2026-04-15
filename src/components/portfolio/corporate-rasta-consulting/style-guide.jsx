import React from "react";

const StyleGuide = () => {
  return (
    <div className="py-5 md:py-10 container mx-auto px-5">
      <h3 className="text-xl md:text-4xl xl:text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
        Style Guide
      </h3>

      <div className="bg-[#D9D9D91A] p-4 py-8 mt-5 md:mt-10">
        <h4 className="text-base md:text-xl xl:text-3xl max-w-5xl mx-auto font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
          Typography
        </h4>

        <div className="flex max-w-5xl mx-auto gap-10 mt-9 font-poppins">
          <div>
            <h3 className="text-base md:text-xl xl:text-3xl">Font- Poppins</h3>
            <p className="text-5xl xl:text-7xl mt-5 bg-[linear-gradient(177.41deg,_#000000_9.14%,_#949494_60.32%,_#FFFFFF_97.38%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Aa
            </p>
          </div>
          <div className="space-y-5">
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
              <p className="font-bold text-[10px] sm:text-sm md:text-base">Bold</p>
              <p className="font-bold text-[10px] sm:text-sm md:text-base">
                Aa Bb Cc Dd Ee Ff Gg Hh li Jj Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-base md:text-xl xl:text-3xl max-w-5xl mx-auto my-8 md:my-16 font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
          Colors
        </h4>

        <div className="flex justify-between gap-5 sm:gap-10 max-w-5xl mx-auto">
          <div>
            <h4 className="text-base md:text-xl xl:text-2xl text-center font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
              Main colors
            </h4>
            <div className="flex gap-4 sm:gap-8 mt-6">
              <div className="w-23 xs:w-30 sm:w-70 bg-[#90CAF9]"></div>
              <div className="space-y-4 sm:space-y-8">
                <div className="size-10 sm:size-20 lg:size-28 bg-[#005AFF]"></div>
                <div className="size-10 sm:size-20 lg:size-28 bg-white border"></div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-base md:text-xl xl:text-2xl text-center font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
              Text colors
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-6">
              <div className="size-10 sm:size-20 lg:size-28 bg-[#000000]"></div>
              <div className="size-10 sm:size-20 lg:size-28 bg-[#AAAAA9]"></div>
              <div className="size-10 sm:size-20 lg:size-28 bg-[#565656] border"></div>
              <div className="size-10 sm:size-20 lg:size-28 bg-white border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
