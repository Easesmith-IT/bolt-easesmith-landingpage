import Image from 'next/image'
import React from 'react'

const DesignScreens = () => {
  return (
    <div className="container mx-auto py-10">
      <h3 className="text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
        Design Screens
      </h3>

      <Image
        src="/portfolio/crc/design-screens-img.png"
        alt="design-screens"
        width={500}
        height={500}
        className="object-contain w-full mt-10"
      />
    </div>
  );
}

export default DesignScreens