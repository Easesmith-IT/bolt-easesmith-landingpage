import React from "react";

const StyleGuide = () => {
  return (
    <div className="py-10 container mx-auto">
      <h3 className="text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
        Style Guide
      </h3>

      <div className="bg-[#D9D9D91A] p-4 py-8 mt-10">
        <h4 className="text-3xl max-w-5xl mx-auto font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
          Typography
        </h4>

        <div className="flex max-w-5xl mx-auto gap-10 mt-9 font-poppins">
          <div>
            <h3 className="text-3xl">Font- Poppins</h3>
            <p className="text-7xl mt-5 bg-[linear-gradient(177.41deg,_#000000_9.14%,_#949494_60.32%,_#FFFFFF_97.38%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Aa
            </p>
          </div>
          <div className="space-y-5">
            <div>
              <p>Regular</p>
              <p>
                Aa Bb Cc Dd Ee Ff Gg Hh li Jj Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
            </div>
            <div>
              <p className="font-medium">Medium</p>
              <p className="font-medium">
                Aa Bb Cc Dd Ee Ff Gg Hh li Jj Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
            </div>
            <div>
              <p className="font-bold">Bold</p>
              <p className="font-bold">
                Aa Bb Cc Dd Ee Ff Gg Hh li Jj Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Uu
                Vv Ww Xx Yy Zz
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-3xl max-w-5xl mx-auto my-16 font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
          Colors
        </h4>

        <div className="flex justify-between gap-10 max-w-5xl mx-auto">
          <div>
            <h4 className="text-2xl text-center font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
              Main colors
            </h4>
            <div className="flex gap-8 mt-6">
              <div className="w-70 bg-[#90CAF9]"></div>
              <div className="space-y-8">
                <div className="size-28 bg-[#005AFF]"></div>
                <div className="size-28 bg-white border"></div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl text-center font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
              Text colors
            </h4>
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div className="size-28 bg-[#000000]"></div>
              <div className="size-28 bg-[#AAAAA9]"></div>
              <div className="size-28 bg-[#565656] border"></div>
              <div className="size-28 bg-white border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
