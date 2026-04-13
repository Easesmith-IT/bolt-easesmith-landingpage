import { H2 } from "@/components/shared/typography";
import React from "react";

const Typography = () => {
  return (
    <div className="container mx-auto my-10">
      <H2 className="font-extrabold text-[40px] mt-6">3. Typography</H2>

      <div className="px-5">
        <p className="font-mono text-2xl">Font Style</p>
        <div className="flex gap-50 bg-[#D9D9D91A] p-3 mt-5">
          <div>
            <p className="text-xl">Poppins</p>
            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <p className="text-xl">Inter</p>
            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
