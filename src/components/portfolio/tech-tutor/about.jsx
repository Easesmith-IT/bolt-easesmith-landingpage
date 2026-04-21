import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="relative py-5 md:py-10">
      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/portfolio/tech-tutor/about-bg.png"
          alt="bg image"
          width={900}
          height={400}
          className="absolute top-0 left-0 -z-1"
        />
      </motion.div>

      <div className="mx-auto container space-y-8">
        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="bg-[#D2F0FE] p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block font-josefin_sans"
          >
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-none relative z-2">
              <span className="text-[#1358C4]">About</span>
            </h2>

            <h2 className="text-2xl sm:text-4xl text-[#C1BEBE] font-semibold tracking-tight leading-none absolute left-0 top-2 sm:top-3 z-1">
              About
            </h2>
          </motion.div>

          <p className="text-sm sm:text-xl lg:text-2xl mt-4 font-josefin_sans">
            Tech tutor is revolutionizing the way students engage with
            educational content and coaching centers. Our mobile app serves as a
            comprehensive platform, offering a seamless connection between
            learners and a wide array of coaching institutes. With Tech tutor,
            students can effortlessly discover and enroll in courses offered by
            nearby centers, access live classes, and study materials tailored to
            their needs. Our mission is to empower students with convenient,
            on-demand educational resources, fostering an environment where
            knowledge is accessible anytime, anywhere. By bridging the gap
            between coaching centers and learners, we're creating a community
            that thrives on the shared pursuit of academic excellence.
          </p>
        </motion.div>

        {/* PROBLEMS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="bg-[#D2F0FE] p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative font-josefin_sans flex justify-end"
          >
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-none relative z-2">
              <span className="text-[#1358C4]">Problems</span>
            </h2>

            <h2 className="text-2xl sm:text-4xl text-[#C1BEBE] font-semibold tracking-tight leading-none absolute right-0 top-2 sm:top-3 z-1">
              Problems
            </h2>
          </motion.div>

          <p className="text-sm sm:text-xl lg:text-2xl mt-4 font-josefin_sans">
            The traditional education system, while foundational, faces several
            challenges that impede its ability to cater to the diverse needs of
            students. Standardized curricula often fail to accommodate
            individual learning styles and interests, leading to disengagement
            and a lack of motivation among students. Resource constraints such
            as limited access to quality teachers and materials, especially in
            rural or underfunded areas, further exacerbate educational
            disparities. The teacher-student ratio is frequently imbalanced,
            resulting in inadequate attention to each student's learning
            progress.
          </p>
        </motion.div>

        {/* SOLUTIONS */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="bg-[#D2F0FE] p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block font-josefin_sans"
          >
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-none relative z-2">
              <span className="text-[#1358C4]">Solutions</span>
            </h2>

            <h2 className="text-2xl sm:text-4xl text-[#C1BEBE] font-semibold tracking-tight leading-none absolute left-0 top-2 sm:top-3 z-1">
              Solutions
            </h2>
          </motion.div>

          <p className="text-sm sm:text-xl lg:text-2xl mt-4 font-josefin_sans">
            Tech Tutor addresses the challenges of the traditional education
            system by harnessing the power of mobile technology to create a more
            personalized and accessible learning experience. Our app offers
            adaptive learning paths that cater to individual student needs,
            promoting engagement and motivation through customized content.To
            overcome resource constraints, Tech Tutor provides a vast library of
            high-quality educational resources and connects students with top
            educators through live classes and interactive sessions. By
            incorporating cutting-edge technology, we bridge the gap between
            traditional and modern education, offering students the tools they
            need to succeed in an ever-evolving academic landscape.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
