import Image from 'next/image';
import React from 'react'

const ColorTypography = () => {
  return (
    <div className="py-5 md:py-10 px-5 container mx-auto font-aclonica">
      <div className="flex gap-1 items-center">
        <div className="size-10 sm:size-18 md:size-24 border-2 md:border-4 border-black rounded-full flex justify-center items-center">
          <h2 className="font-extrabold font-open_sans text-xl sm:text-3xl md:text-5xl">
            2
          </h2>
        </div>
        <h2 className="font-bold text-xl sm:text-3xl md:text-4xl">
          Colors & Typography
        </h2>
      </div>

      <h3 className="font-bold text-lg sm:text-xl md:text-3xl mt-10 sm:mt-18 md:mt-25">
        Colors
      </h3>
      <div className="mt-5 bg-[#CDE6A6] w-full p-5 pt-7 pl-0 sm:pl-5 pr-0 sm:pr-5">
        <div className="bg-[#CDE6A6] p-4 pt-6 pb-2 grid grid-cols-1 sm:grid-cols-[60%_35%] md:grid-cols-2">
          <div className="grid grid-cols-4 gap-5 h-30 sm:h-auto">
            <div className="">
              <p className="font-bold text-xs sm:text-base lg:text-xl text-center">
                #85C125
              </p>
              <div className="bg-[#85C125] rounded-t-xl h-full"></div>
            </div>
            <div className="">
              <p className="font-bold text-xs sm:text-base lg:text-xl text-center">
                #1F2A37
              </p>
              <div className="bg-[#1F2A37] rounded-t-xl h-full"></div>
            </div>
            <div className="">
              <p className="font-bold text-xs sm:text-base lg:text-xl text-center">
                #F9FAFB
              </p>
              <div className="bg-[#F9FAFB] rounded-t-xl h-full"></div>
            </div>
            <div className="">
              <p className="font-bold text-xs sm:text-base lg:text-xl text-center">
                #9CA3AF
              </p>
              <div className="bg-[#9CA3AF] rounded-t-xl h-full"></div>
            </div>
          </div>
          <div>
            <Image
              src="/portfolio/easemart/3-mobile.svg"
              alt="3-mobile"
              width={400}
              height={600}
              className="ml-auto hidden sm:inline -mt-[40%]"
            />
          </div>
        </div>
      </div>

      <h3 className="font-bold text-lg sm:text-xl md:text-3xl mt-10 sm:mt-18 md:mt-25">
        Typography
      </h3>

      <div className="grid grid-cols-2 mt-5">
        <div className="border-r-2 pr-5 md:pr-20">
          <div className="flex gap-5 justify-end items-center">
            <div className="text-right space-y-3">
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                Bold
              </p>
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                Regular
              </p>
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                Medium
              </p>
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                ExtraBold
              </p>
            </div>
            <div className="h-20 sm:h-30 md:h-42 flex items-center justify-center">
              <span className="[writing-mode:vertical-rl] text-gray-400 text-xl sm:text-3xl md:text-5xl rotate-180 tracking-widest">
                Titles
              </span>
            </div>
          </div>
          <h3 className="font-bold text-lg sm:text-2xl md:text-3xl mt-10 md:mt-25 text-right">
            AClonica
          </h3>
          <p className="text-xs wrap-break-word sm:text-base lg:text-xl font-aclonica mt-5 sm:mt-10 text-right">
            abcdefghijklmnopqrstuvwxyz <br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
            0123456789+!@#$()%&*
          </p>
        </div>

        <div className="border-l-2 pl-5 md:pl-20">
          <div className="flex gap-5 justify-start items-center">
            <div className="space-y-3 text-right">
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                Bold
              </p>
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                Regular
              </p>
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                Medium
              </p>
              <p className="text-xs sm:text-base lg:text-xl font-normal font-inter underline">
                ExtraBold
              </p>
            </div>
            <div className="h-20 sm:h-30 md:h-42 flex items-center justify-center">
              <span className="[writing-mode:vertical-rl] text-gray-400 text-xl sm:text-3xl md:text-5xl rotate-180 tracking-widest">
                Contents
              </span>
            </div>
          </div>
          <h3 className="font-bold text-lg sm:text-2xl md:text-3xl mt-10 md:mt-25 text-left font-epilogue">
            Epilogue
          </h3>
          <p className="text-xs wrap-break-word sm:text-base lg:text-xl font-epilogue mt-5 sm:mt-10">
            abcdefghijklmnopqrstuvwxyz <br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
            0123456789+!@#$()%&*
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorTypography