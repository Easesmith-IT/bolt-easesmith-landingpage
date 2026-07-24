import Image from "../PortfolioImage";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="py-5 md:py-10 px-5 font-inter bg-[#F9FAFB] relative">
      {/* SECTION 1 */}
      <div className="flex max-md:items-center flex-col-reverse md:flex-row gap-5 justify-between">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="shadow-lg rounded-2xl bg-white p-4 max-w-4xl"
          >
            <h2 className="md:text-2xl underline font-bold text-[#4B5563]">
              About the project
            </h2>
            <p className="text-sm md:text-xl text-[#4B5563] mt-4">
              About the project The project is a design of the real estate
              search website for Bhoomi realty company. The goal of the design
              is to create a visually appealing and user-friendly website that
              effectively showcases the company real estate services.
            </p>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/portfolio/bhoomie-reality/about-right.png"
            alt="hero"
            width={400}
            height={300}
          />
        </motion.div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col max-md:items-center md:flex-row gap-5 justify-between mt-10">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/portfolio/bhoomie-reality/about-left.webp"
            alt="hero"
            width={400}
            height={300}
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="shadow-lg rounded-2xl bg-white p-4 max-w-3xl"
          >
            <h2 className="md:text-2xl font-bold underline text-[#4B5563]">
              Problems
            </h2>
            <p className="text-sm md:text-xl text-[#4B5563] mt-4">
              Problems In the absence of a dedicated online platform, our
              client, a prominent real estate agency, faced significant
              challenges in effectively showcasing their listings and engaging
              with potential buyers and renters. Traditional methods of property
              advertisement were proving insufficient in reaching a wider
              audience, leading to missed opportunities and slower sales cycles.
              Additionally, the lack of an online presence made it challenging
              to provide up-to-date information on available properties and
              market trends, hampering their ability to stay competitive in the
              digital landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* FLOATING CENTER IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="absolute left-[50%] -translate-x-[50%] bottom-2"
      >
        <Image
          src="/portfolio/bhoomie-reality/home-img.png"
          alt="hero"
          width={800}
          height={400}
        />
      </motion.div>

      {/* QUOTE / GOALS SECTION */}
      <div className="px-5 md:px-0">
        <div className="relative mt-20 md:mt-30 max-w-90 md:max-w-150 lg:max-w-3xl mx-auto">
          {/* LEFT COMMA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/portfolio/bhoomie-reality/comma-left.png"
              alt="comma-left"
              width={170}
              height={140}
              className="absolute -left-10 -top-5 md:-left-20 md:-top-10 lg:-left-34 lg:-top-20 w-18 md:w-25 lg:w-42.5"
            />
          </motion.div>

          {/* RIGHT COMMA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Image
              src="/portfolio/bhoomie-reality/comma-right.png"
              alt="comma-right"
              width={170}
              height={140}
              className="absolute -right-10 -bottom-5 md:-right-20 md:-bottom-10 lg:-right-34 lg:-bottom-20 w-18 md:w-25 lg:w-42.5"
            />
          </motion.div>

          {/* GOALS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-4 border border-dashed border-black mx-auto mb-10"
          >
            <h2 className="md:text-2xl font-bold underline text-[#4B5563]">
              Goals
            </h2>
            <p className="text-sm md:text-xl text-[#4B5563] mt-4">
              Goals To address these challenges, we proposed the development of
              a dynamic real estate website tailored to the client&apos;s specific
              needs. The website would feature a modern, user-friendly design
              with responsive elements to ensure seamless access across devices.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
