import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-5 md:py-10 px-5 font-inter">
      <div className="flex justify-between gap-5">
        <div>
          <div>
            <h3 className="text-xl md:text-4xl xl:text-5xl font-semibold">
              About
            </h3>

            <Image
              src="/portfolio/crc-dashboard/heding-underline.png"
              alt="image"
              width={170}
              height={60}
              className="object-contain w-20 sm:w-48"
            />
          </div>

          <p className="font-medium text-xs md:text-base lg:text-xl max-w-3xl">
            In the dynamic world of legal services, the ability to swiftly
            navigate and manage case information is paramount. Our legal firm’s
            dashboard design is a testament to this necessity, offering a
            centralized and intuitive interface that caters to the fast-paced
            demands of legal professionals. This case study delves into the
            transformative journey of our dashboard implementation, which has
            been meticulously crafted to enhance efficiency, accuracy, and
            decision-making within the firm.
          </p>
        </div>
        <Image
          src="/portfolio/crc-dashboard/about-img.png"
          alt="image"
          width={270}
          height={250}
          className="object-contain w-20 sm:w-67.5"
        />
      </div>

      <div className="flex justify-between flex-row-reverse gap-5">
        <div className="sm:mr-20">
          <div>
            <h3 className="text-xl md:text-4xl text-end xl:text-5xl font-semibold">
              Problem
            </h3>

            <Image
              src="/portfolio/crc-dashboard/heding-underline.png"
              alt="image"
              width={170}
              height={60}
              className="object-contain w-20 sm:w-48 ml-auto"
            />
          </div>
          <p className="font-medium text-xs md:text-base lg:text-xl max-w-3xl">
            In the legal industry, where precision and timeliness are paramount,
            the traditional methods of case management and data analysis are
            becoming increasingly inadequate. Law firms are grappling with
            outdated systems that hinder their ability to track and manage cases
            efficiently. Manual data entry, cumbersome report generation, and a
            lack of real-time insights into case progress are just a few of the
            challenges that impede productivity and client satisfaction. This
            case study explores the implementation of a legal dashboard designed
            to overcome these obstacles, streamline operations, and transform
            the firm&apos;s approach to case management.
          </p>
        </div>
        <Image
          src="/portfolio/crc-dashboard/problem-img.png"
          alt="image"
          width={200}
          height={150}
          className="object-contain w-20 sm:w-40 md:-mt-10 lg:-mt-30"
        />
      </div>

      <div className="flex justify-between flex-row-reverse gap-5 mt-4 sm:-mt-7">
        <div className="sm:mr-20">
          <div>
            <h3 className="text-xl md:text-4xl sm:text-end xl:text-5xl font-semibold">
              Solution
            </h3>

            <Image
              src="/portfolio/crc-dashboard/heding-underline.png"
              alt="image"
              width={170}
              height={60}
              className="object-contain w-20 sm:w-48 sm:ml-auto"
            />
          </div>
          <p className="font-medium text-xs md:text-base lg:text-xl sm:max-w-5xl">
            To address the inefficiencies of traditional legal case management,
            our solution is a state-of-the-art legal dashboard that centralizes
            and simplifies the workflow. This innovative tool provides attorneys
            with real-time access to case data, automated report generation, and
            predictive analytics, all within an intuitive user interface. By
            integrating these features, the dashboard eliminates manual data
            entry, streamlines communication, and enhances decision-making,
            ultimately leading to improved client service and operational
            excellence. This comprehensive solution empowers the firm to
            navigate the complexities of the legal landscape with greater
            agility and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
