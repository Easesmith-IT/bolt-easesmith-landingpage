import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const ProjectOverview = () => {
  return (
    <div>
      <div className="py-10 container mx-auto px-5 relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-4xl xl:text-5xl font-bold border-l-4 md:border-l-8 py-1 sm:py-2 px-3 border-[#4481D1] text-[#1B1515]"
        >
          Project Overview
        </motion.h2>

        {/* Content container with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Objective */}
          <motion.div
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="mt-5"
          >
            <h3 className="font-bold text-base md:text-xl">
              <span className="uppercase text-3xl md:text-4xl">O</span>bjec
              <span className="text-[#4481D1]">tive</span>
            </h3>
            <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
              To design a comprehensive online platform that connects clients
              with a wide range of expert service providers.
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="mt-5"
          >
            <h3 className="font-bold text-xl text-[#4481D1]">
              <span className="uppercase text-3xl md:text-4xl">C</span>hall
              <span className="text-[#1B1515]">enge</span>
            </h3>
            <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
              The challenge was to create a user-friendly and trustworthy
              website that offers more services than competitors, such as
              UrbanPro, and ensures a seamless connection between users and
              service providers.
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="mt-5"
          >
            <h3 className="font-bold text-xl text-[#4481D1]">
              <span className="uppercase text-3xl md:text-4xl">S</span>olu
              <span className="text-[#1B1515]">tion</span>
            </h3>
            <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
              The result is a responsive website that provides a variety of
              services, including home cleaning, AC repair, mehendi, bridal
              makeup, and more. Key features include verified professional
              profiles, a 90-minute doorstep repair promise, a 30-day
              post-service guarantee, and customer-centric support.
            </p>
          </motion.div>

          {/* Outcome */}
          <motion.div
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="mt-5"
          >
            <h3 className="font-bold text-xl">
              <span className="uppercase text-3xl md:text-4xl">O</span>ut
              <span className="text-[#4481D1]">come</span>
            </h3>
            <p className="text-[#1B1515] text-xs md:text-xl font-poppins">
              AbhiCares has successfully established itself as a one-stop
              platform for expert services in Darbhanga, Bihar, leading to
              increased customer satisfaction and loyalty. The website's design
              has been commended for its ease of use and the quality of service
              it facilitates.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
      >
        <Image
          src="/portfolio/abhicares/project-view-bottom.png"
          alt="image"
          width={440}
          height={320}
          className="object-contain w-48 md:w-[440px] md:h-[320px]"
        />
      </motion.div>
    </div>
  );
};

export default ProjectOverview;
