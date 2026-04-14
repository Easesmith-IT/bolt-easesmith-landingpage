import { H2 } from "@/components/shared/typography";
import Image from "next/image";
import React from "react";

const Wireframes = () => {
  return (
    <div className="container mx-auto my-10 space-y-4 px-5 relative">
      <H2 className="font-extrabold text-xl md:text-[40px] mt-6">
        4. High Fidelity Wireframes
      </H2>

      <Image
        src="/portfolio/chaperone/wireframe-left.png"
        alt="wireframe-left"
        width={200}
        height={350}
        className="absolute top-[12%] hidden md:inline -left-21"
      />

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
