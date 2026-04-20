import React from "react";

const ProjectOverview = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-[25%_70%] mt-10 gap-2 sm:gap-[5%] py-5 md:py-10 px-5 container mx-auto font-outfit">
      <div>
        {/* <div className="relative w-[35%] sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
          <p className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none">
            01
          </p>

          <div className="relative text-center">
            <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
              <span className="underline whitespace-nowrap md:decoration-4 md:underline-offset-4">
                Project
              </span>
              <br />
              <span className="underline md:decoration-4 md:underline-offset-4">
                Overview
              </span>
            </h2>
          </div>
        </div> */}

        <div className="relative h-25 md:h-50 flex items-center justify-center">
          <p className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none">
            01
          </p>

          <div className="relative text-center">
            <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
              <span className="underline md:decoration-4 md:underline-offset-4">
                Project
              </span>
              <br />
              <span className="underline md:decoration-4 md:underline-offset-4">
                Overview
              </span>
            </h2>
          </div>
        </div>

        <div className="space-y-1 sm:mt-5">
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center text-[#FCE96A]">
            Industry
          </p>
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center">
            Sports
          </p>
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center text-[#FCE96A]">
            Platforms
          </p>
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center">
            Android
          </p>
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center text-[#FCE96A]">
            Country
          </p>
          <p className="font-medium text-lg sm:text-xl md:text-2xl text-center">
            India
          </p>
        </div>
      </div>
      <div className="space-y-1 sm:space-y-17">
        <div>
          <h3 className="text-xl md:text-4xl font-semibold">The Problem</h3>
          <p className="text-[10px] sm:text-xs md:text-xl mt-3">
            In the rapidly evolving world of cricket, fans demand real-time
            updates and comprehensive coverage of matches, player statistics,
            and tournament standings. These issues highlight the need for a
            mobile app that not only delivers precise and prompt cricket updates
            but also offers a customized and user-friendly platform for cricket
            enthusiasts to engage with their favorite sport.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-4xl font-semibold">Solution</h3>
          <p className="text-[10px] sm:text-xs md:text-xl mt-3">
            To address the challenges identified in the problem section, the
            solution would be an innovative mobile app designed with a
            user-centric approach. With features like customizable notifications
            and ad-free options, it would respect the user’s desire for relevant
            content while maintaining a high-quality user experience. This
            solution aims to transform the way cricket enthusiasts interact with
            the sport, making it more accessible, engaging, and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
