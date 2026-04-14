import { H2 } from '@/components/shared/typography';
import Image from 'next/image';
import React from 'react'

const Designs = () => {
  return (
    <div className="container mx-auto my-10 px-5 space-y-4 relative">
      <H2 className="font-extrabold text-xl md:text-[40px] mt-6">
        5. High Fidelity Designs
      </H2>

      <Image
        src="/portfolio/chaperone/designs.png"
        alt="Color 1"
        width={600}
        height={450}
        className="max-w-5xl mx-auto w-full h-auto mt-10"
      />
    </div>
  );
}

export default Designs