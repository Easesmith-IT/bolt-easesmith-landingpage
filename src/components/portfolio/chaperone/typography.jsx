import { H2 } from "@/components/shared/typography";
import React from "react";

const Typography = () => {
  return (
    <div className="container mx-auto my-10 px-5">
      <H2 className="font-extrabold text-xl md:text-[40px] mt-6">
        3. Typography
      </H2>

      <div className="md:px-5 font-poppins mt-5">
        <p className="text-base md:text-2xl">Font Style</p>
        <div className="flex flex-col md:flex-row gap-10 md:gap-50 bg-[#D9D9D91A] p-3 mt-5">
          <div>
            <p className="text-sm md:text-xl">Poppins</p>
            <p className="text-sm md:text-xl">Lorem ipsum dolor sit amet.</p>
            <p className="text-sm md:text-xl">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <p className="text-sm md:text-xl">Inter</p>
            <p className="text-sm md:text-xl">Lorem ipsum dolor sit amet.</p>
            <p className="text-sm md:text-xl">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
