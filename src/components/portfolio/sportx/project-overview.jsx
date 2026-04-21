import React from "react";
import { motion } from "motion/react";

const ProjectOverview = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-[25%_70%] mt-10 gap-2 sm:gap-[5%] py-5 md:py-10 px-5 container mx-auto font-outfit">
      {/* LEFT SIDE */}
      <div>
        <div className="relative h-25 md:h-50 flex items-center justify-center">
          {/* BIG NUMBER */}
          <motion.p
            className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            01
          </motion.p>

          {/* TITLE */}
          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base md:text-3xl font-extrabold text-black leading-tight">
              <span className="underline md:decoration-4 md:underline-offset-4">
                Project
              </span>
              <br />
              <span className="underline md:decoration-4 md:underline-offset-4">
                Overview
              </span>
            </h2>
          </motion.div>
        </div>

        {/* INFO LIST */}
        <motion.div
          className="space-y-1 sm:mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            ["Industry", true],
            ["Sports", false],
            ["Platforms", true],
            ["Android", false],
            ["Country", true],
            ["India", false],
          ].map(([text, highlight], i) => (
            <motion.p
              key={i}
              className={`font-medium text-lg sm:text-xl md:text-2xl text-center ${
                highlight ? "text-[#FCE96A]" : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-1 sm:space-y-17">
        {/* PROBLEM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-4xl font-semibold">The Problem</h3>
          <p className="text-[10px] sm:text-xs md:text-xl mt-3">
            In the rapidly evolving world of cricket, fans demand real-time
            updates and comprehensive coverage of matches, player statistics,
            and tournament standings. These issues highlight the need for a
            mobile app that not only delivers precise and prompt cricket updates
            but also offers a customized and user-friendly platform for cricket
            enthusiasts to engage with their favorite sport.
          </p>
        </motion.div>

        {/* SOLUTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectOverview;
