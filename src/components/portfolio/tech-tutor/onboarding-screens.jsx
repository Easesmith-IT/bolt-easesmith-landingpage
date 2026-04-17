import Image from 'next/image';
import React from 'react'

const OnboardingScreens = () => {
  return (
    <div className="mx-auto container px-5 py-5 md:py-10 mt-10 md:mt-0">
      <div>
        <h2 className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#d1d5db] opacity-60 select-none pointer-events-none">
          Onboarding
        </h2>
        <h3 className="text-2xl md:text-4xl text-center -mt-1">
          Onboarding screens
        </h3>
      </div>

      <Image
        src="/portfolio/tech-tutor/onboarding.svg"
        alt="logo"
        width={800}
        height={400}
        className="mx-auto mt-10 md:mt-15"
      />
    </div>
  );
}

export default OnboardingScreens