import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-5 md:py-10 px-5 font-inter bg-[#F9FAFB] relative">
      <div className="flex max-md:items-center flex-col-reverse md:flex-row gap-5 justify-between">
        <div>
          <div className="shadow-lg rounded-2xl bg-white p-4 max-w-4xl">
            <h2 className="md:text-2xl underline font-bold font-inter text-[#4B5563]">
              About the project
            </h2>
            <p className="text-sm md:text-xl text-[#4B5563] mt-4">
              The project is a design of the real estate search website for
              Bhoomi realty company. The goal of the design is to create a
              visually appealing and user-friendly website that effectively
              showcases the company real estate services.
            </p>
          </div>
        </div>
        <Image
          src="/portfolio/bhoomie-reality/about-right.png"
          alt="hero"
          width={400}
          height={300}
          className=""
        />
      </div>

      <div className="flex flex-col max-md:items-center md:flex-row gap-5 justify-between mt-10">
        <Image
          src="/portfolio/bhoomie-reality/about-left.png"
          alt="hero"
          width={400}
          height={300}
          className=""
        />

        <div>
          <div className="shadow-lg rounded-2xl bg-white p-4 max-w-3xl">
            <h2 className="md:text-2xl font-bold underline font-inter text-[#4B5563]">
              Problems
            </h2>
            <p className="text-sm md:text-xl text-[#4B5563] mt-4">
              In the absence of a dedicated online platform, our client, a
              prominent real estate agency, faced significant challenges in
              effectively showcasing their listings and engaging with potential
              buyers and renters. Traditional methods of property advertisement
              were proving insufficient in reaching a wider audience, leading to
              missed opportunities and slower sales cycles. Additionally, the
              lack of an online presence made it challenging to provide
              up-to-date information on available properties and market trends,
              hampering their ability to stay competitive in the digital
              landscape.
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/portfolio/bhoomie-reality/home-img.png"
        alt="hero"
        width={800}
        height={400}
        className="absolute left-[50%] -translate-x-[50%] bottom-2"
      />

      <div className="px-5 md:px-0">
        <div className="relative  mt-20 md:mt-30 max-w-90 md:max-w-150 lg:max-w-3xl mx-auto">
          <Image
            src="/portfolio/bhoomie-reality/comma-left.png"
            alt="hero"
            width={170}
            height={140}
            className="absolute -left-10 -top-5 md:-left-20 md:-top-10 lg:-left-34 lg:-top-20 w-18 md:w-25 lg:w-42.5"
          />
          <Image
            src="/portfolio/bhoomie-reality/comma-right.png"
            alt="hero"
            width={170}
            height={140}
            className="absolute -right-10 -bottom-5 md:-right-20 md:-bottom-10 lg:-right-34 lg:-bottom-20 w-18 md:w-25 lg:w-42.5"
          />

          <div className="p-4 border border-dashed border-black mx-auto mb-10">
            <h2 className="md:text-2xl font-bold underline font-inter text-[#4B5563]">
              Goals
            </h2>
            <p className="text-sm md:text-xl text-[#4B5563] mt-4">
              To address these challenges, we proposed the development of a
              dynamic real estate website tailored to the client&apos;s specific
              needs. The website would feature a modern, user-friendly design
              with responsive elements to ensure seamless access across devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
