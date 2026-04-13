import { H2 } from '@/components/shared/typography'
import Image from 'next/image';
import React from 'react'

const Color = () => {
  return (
    <div className="container mx-auto my-10">
      <H2 className="font-extrabold text-[40px] mt-6">2. Color</H2>

      <div className="bg-[#D9D9D91A] p-3 mt-10 space-y-2">
          <Image
            src="/portfolio/chaperone/color-1.png"
            alt="Color 1"
            width={600}
            height={450}
            className="w-full h-auto"
            />
          <Image
            src="/portfolio/chaperone/color-2.png"
            alt="Color 2"
            width={600}
            height={450}
            className="w-full h-full"
            />
      </div>
    </div>
  );
}

export default Color