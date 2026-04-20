import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className="border-b-4 border-[#85C125] font-aclonica">
      <header className="w-full flex flex-col gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
        <Image
          src="/portfolio/chaperone/easesmith-logo.png"
          alt="Easesmith Logo"
          width={240}
          height={320}
          className="object-contain -mr-10"
        />

        <Button className="bg-blue-600 font-inter hover:bg-blue-700 text-white rounded-md px-5">
          <a target="_blank" href="/">
            Live Link →
          </a>
        </Button>
      </header>

      <div className="flex gap-5 justify-between items-center">
        <div className='ml-4 lg:ml-0'>
          <Image
            src="/portfolio/easemart/easemart-logo.svg"
            alt="Hero"
            width={81}
            height={75}
            className="mx-auto w-8 sm:w-20"
          />
          <h1 className="text-[#85C125] text-3xl md:text-7xl text-center">
            Easemart
          </h1>
          <p className="text-[#85C125] text-xs sm:text-xl md:text-3xl text-center">
            ---- Quick Delivery Ecommerce----
          </p>

          <Image
            src="/portfolio/easemart/mobile.svg"
            alt="mobile"
            width={400}
            height={275}
            className="mx-auto"
          />
        </div>
        <div className="relative">
          <Image
            src="/portfolio/easemart/hero-right.svg"
            alt="hero-right"
            width={900}
            height={675}
            className="mx-auto hidden sm:inline sm:-mt-15"
          />
          <Image
            src="/portfolio/easemart/shopping_bag.svg"
            alt="shopping_bag"
            width={100}
            height={100}
            className="absolute hidden lg:inline right-[20%] bottom-20"
          />
          <Image
            src="/portfolio/easemart/shopping_cart.svg"
            alt="shopping_cart"
            width={100}
            height={100}
            className="absolute hidden lg:inline left-[10%] bottom-20"
          />
          <Image
            src="/portfolio/easemart/shopping_basket.svg"
            alt="shopping_basket"
            width={100}
            height={100}
            className="absolute hidden lg:inline right-[20%] top-20"
          />
        </div>
      </div>
      <Image
        src="/portfolio/easemart/mobiles-img.svg"
        alt="mobiles-img"
        width={900}
        height={275}
        className="mx-auto lg:-mt-10 relative z-2"
      />
    </div>
  );
}

export default Hero