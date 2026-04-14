import Image from 'next/image';
import React from 'react'

const ProjectOverview = () => {
  return (
    <div>
      <div className="py-10 container mx-auto px-5 relative">
        <h2 class="text-xl md:text-4xl xl:text-5xl font-bold border-l-4 md:border-l-8 py-1 sm:py-2 px-3 border-[#4481D1] text-[#1B1515]">
          Project Overview
        </h2>

        <div className="mt-5">
          <h3 className="font-bold text-base md:text-xl">
            <span className="uppercase text-3xl md:text-4xl">O</span>bjec
            <span className="text-[#4481D1]">tive</span>
          </h3>
          <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
            To design a comprehensive online platform that connects clients with
            a wide range of expert service providers.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="font-bold text-xl text-[#4481D1]">
            <span className="uppercase text-3xl md:text-4xl">C</span>hall
            <span className="text-[#1B1515]">enge</span>
          </h3>
          <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
            The challenge was to create a user-friendly and trustworthy website
            that offers more services than competitors, such as UrbanPro, and
            ensures a seamless connection between users and service providers.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="font-bold text-xl text-[#4481D1]">
            <span className="uppercase text-3xl md:text-4xl">S</span>olu
            <span className="text-[#1B1515]">tion</span>
          </h3>
          <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
            The result is a responsive website that provides a variety of
            services, including home cleaning, AC repair, mehendi, bridal
            makeup, and more. Key features include verified professional
            profiles, a 90-minute doorstep repair promise, a 30-day post-service
            guarantee, and customer-centric support.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-xl">
            <span className="uppercase text-3xl md:text-4xl">O</span>ut
            <span className="text-[#4481D1]">come</span>
          </h3>
          <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
            AbhiCares has successfully established itself as a one-stop platform
            for expert services in Darbhanga, Bihar, leading to increased
            customer satisfaction and loyalty. The website's design has been
            commended for its ease of use and the quality of service it
            facilitates.
          </p>
        </div>
      </div>
      <Image
        src="/portfolio/abhicares/project-view-bottom.png"
        alt="image"
        width={440}
        height={320}
        className="object-contain w-48 md:w-[440px] md:h-[320px]"
      />
    </div>
  );
}

export default ProjectOverview