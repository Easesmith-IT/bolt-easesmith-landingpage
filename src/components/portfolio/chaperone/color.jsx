import { H2 } from "@/components/shared/typography";
import Image from "next/image";
import React from "react";

const Color = () => {
  return (
    <div className="container mx-auto my-10 px-5">
      <H2 className="font-extrabold text-xl md:text-[40px] mt-6">2. Color</H2>

      <div className="grid grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-4 bg-[#D9D9D91A] p-5 mt-10 gap-x-5 gap-y-10">
        <div>
          <Image
            src="/portfolio/chaperone/Group (4).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#F0FFE5] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#F0FFE5] font-bold">
            from the Noun Project
          </p>
        </div>
        <div>
          <Image
            src="/portfolio/chaperone/Group (5).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#165315] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#165315] font-bold">
            from the Noun Project
          </p>
        </div>
        <div>
          <Image
            src="/portfolio/chaperone/Group (6).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#FDD003] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#FDD003] font-bold">
            from the Noun Project
          </p>
        </div>
        <div>
          <Image
            src="/portfolio/chaperone/Group (7).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#A6A6A6] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#A6A6A6] font-bold">
            from the Noun Project
          </p>
        </div>

        <div>
          <Image
            src="/portfolio/chaperone/Group (8).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#BADAA3] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#BADAA3] font-bold">
            from the Noun Project
          </p>
        </div>

        <div>
          <Image
            src="/portfolio/chaperone/Group (9).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#247822] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#247822] font-bold">
            from the Noun Project
          </p>
        </div>

        <div>
          <Image
            src="/portfolio/chaperone/Group (10).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#F3A939] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#F3A939] font-bold">
            from the Noun Project
          </p>
        </div>

        <div>
          <Image
            src="/portfolio/chaperone/Group (11).png"
            alt="Color 1"
            width={200}
            height={220}
          />
          <p className="mt-5 text-xs text-[#6E6E6E] font-bold">
            Created by Evan MacDonald
          </p>
          <p className="text-xs text-[#6E6E6E] font-bold">
            from the Noun Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Color;
