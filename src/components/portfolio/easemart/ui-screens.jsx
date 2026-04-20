import Image from 'next/image'
import React from 'react'

const UiScreens = () => {
  return (
    <div className="overflow-hidden">
      <div className="py-5 md:py-10 px-5 container mx-auto font-aclonica">
        <div className="flex gap-1 items-center">
          <div className="size-10 sm:size-18 md:size-24 border-2 md:border-4 border-black rounded-full flex justify-center items-center">
            <h2 className="font-extrabold font-open_sans text-xl sm:text-3xl md:text-5xl">
              5
            </h2>
          </div>
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
            UI Screens
          </h1>
        </div>

        <div className="mt-4 md:mt-8">
          <h3 className="text-sm md:text-3xl text-center">
            Onboarding Screens
          </h3>
          <Image
            src="/portfolio/easemart/onboarding.svg"
            alt="onboarding"
            width={800}
            height={400}
            className="mx-auto mt-5 sm:mt-10"
          />
          {/* <Image
          src="/portfolio/easemart/other-blob.png"
          alt="tips"
          width={600}
          height={400}
          className="absolute w-full top-[8%] md:top-[2%] left-0 right-0 -z-1"
        /> */}
        </div>
        <div className="mt-10 md:mt-20">
          <h3 className="text-sm md:text-3xl text-center">
            Login & Signup Screens
          </h3>
          <Image
            src="/portfolio/easemart/login.svg"
            alt="login"
            width={800}
            height={400}
            className="mx-auto mt-5 sm:mt-10"
          />
        </div>
        <div className="mt-10 md:mt-20">
          <h3 className="text-sm md:text-3xl text-center">Review Screens</h3>
          <Image
            src="/portfolio/easemart/review.svg"
            alt="review"
            width={800}
            height={400}
            className="mx-auto mt-5 sm:mt-10 w-full"
          />
        </div>
        <div className="mt-10 md:mt-20 relative">
          <h3 className="text-sm md:text-3xl text-center">Home Screen</h3>
          <Image
            src="/portfolio/easemart/home.svg"
            alt="home"
            width={250}
            height={400}
            className="mx-auto mt-5 sm:mt-10"
          />
          <Image
            src="/portfolio/easemart/home-phone-left.svg"
            alt="home"
            width={400}
            height={400}
            className="absolute top-0 -z-1 -left-25"
          />
          <Image
            src="/portfolio/easemart/home-phone-right.svg"
            alt="home"
            width={400}
            height={400}
            className="absolute bottom-0 -z-1 -right-25"
          />
        </div>
        <div className="mt-10 md:mt-20">
          <h3 className="text-sm md:text-3xl text-center">Delivery Screens</h3>
          <Image
            src="/portfolio/easemart/delivery.svg"
            alt="delivery"
            width={800}
            height={400}
            className="mx-auto mt-5 sm:mt-10"
          />
        </div>
        <div className="mt-10 md:mt-20">
          <h3 className="text-sm md:text-3xl text-center">Payment screens</h3>
          <Image
            src="/portfolio/easemart/payment.svg"
            alt="payment"
            width={900}
            height={400}
            className="mx-auto mt-5 sm:mt-10"
          />
        </div>
        <div className="mt-10 md:mt-20">
          <h3 className="text-sm md:text-3xl text-center">Other Screens</h3>
          <Image
            src="/portfolio/easemart/other.svg"
            alt="other"
            width={1000}
            height={400}
            className="mx-auto mt-5 sm:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default UiScreens