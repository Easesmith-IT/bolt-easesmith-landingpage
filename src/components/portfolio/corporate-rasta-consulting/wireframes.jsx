import Image from 'next/image';
import React from 'react'

const Wireframes = () => {
  return (
    <div className="container mx-auto py-5 md:py-10 px-5">
      <h3 className="text-xl md:text-4xl xl:text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
        Hi-fi Wireframes
      </h3>

      <Image
        src="/portfolio/crc/wireframs-img.png"
        alt="wireframs"
        width={500}
        height={500}
        className="object-contain w-full mt-5 md:mt-10"
      />
    </div>
  );
}

export default Wireframes;