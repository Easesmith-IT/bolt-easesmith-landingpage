import { div } from "motion/react-client";
import Image from "next/image";
import React from "react";

const UIScreens = () => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="font-outfit py-5 md:py-10 px-5 container mx-auto">
        <div className="relative w-[25%] h-25 md:h-50 flex items-center justify-center">
          <p className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none">
            06
          </p>

          <div className="relative text-center">
            <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
              <span className="underline md:decoration-4 md:underline-offset-4">
                UI Screens
              </span>
            </h2>
          </div>
        </div>

        <div className="md:mt-8">
          <h3 className="text-sm md:text-3xl text-center font-bold">
            Onboarding Screens
          </h3>
          <Image
            src="/portfolio/sportx/onboarding-img.svg"
            alt="onboarding"
            width={800}
            height={400}
            className="mx-auto mt-10"
          />
          <Image
            src="/portfolio/sportx/other-blob.png"
            alt="tips"
            width={600}
            height={400}
            className="absolute w-full top-[8%] md:top-[2%] left-0 right-0 -z-1"
          />
        </div>
        <div className="mt-10 md:mt-20">
          <h3 className="text-sm md:text-3xltext-3xl text-center font-bold">
            Sign up and Login Screens
          </h3>
          <Image
            src="/portfolio/sportx/login.svg"
            alt="login"
            width={800}
            height={400}
            className="mx-auto mt-10"
          />
        </div>
        <div className="mt-10 md:mt-20 relative">
          <h3 className="text-sm md:text-3xltext-3xl text-center font-bold">
            Home screens
          </h3>
          <Image
            src="/portfolio/sportx/home.svg"
            alt="home"
            width={800}
            height={400}
            className="mx-auto mt-10"
          />

          {/* <Image
            src="/portfolio/sportx/home-blob.png"
            alt="tips"
            width={800}
            height={400}
            className="absolute -top-[80%] -right-[20%] -z-1"
          /> */}
        </div>
        <div className="mt-10 md:mt-20 relative">
          <h3 className="text-sm md:text-3xltext-3xl text-center font-bold">
            Tips Screens
          </h3>
          <Image
            src="/portfolio/sportx/tips.svg"
            alt="tips"
            width={800}
            height={400}
            className="mx-auto mt-10"
          />

          <Image
            src="/portfolio/sportx/other-blob.png"
            alt="tips"
            width={600}
            height={400}
            className="absolute -top-[30%] -z-1"
          />
        </div>
        <div className="mt-10 md:mt-20 relative">
          <h3 className="text-sm md:text-3xltext-3xl text-center font-bold">
            Other Screens
          </h3>
          <Image
            src="/portfolio/sportx/other.svg"
            alt="tips"
            width={800}
            height={400}
            className="w-full mt-10"
          />
          <Image
            src="/portfolio/sportx/other-blob.png"
            alt="tips"
            width={800}
            height={400}
            className="w-full absolute -top-[10%] -z-1"
          />
        </div>
      </div>
    </div>
  );
};

export default UIScreens;
