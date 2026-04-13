import { H2 } from "@/components/shared/typography";
import Image from "next/image";
import React from "react";

const Wireframes = () => {
  return (
    <div className="container mx-auto my-10 space-y-4">
      <H2 className="font-extrabold text-[40px] mt-6">
        4. High Fidelity Wireframes
      </H2>

      <Image
        src="/portfolio/chaperone/wireframe.png"
        alt="Color 1"
        width={600}
        height={450}
        className="max-w-5xl mx-auto w-full h-auto mt-10"
      />
    </div>
  );
};

export default Wireframes;
