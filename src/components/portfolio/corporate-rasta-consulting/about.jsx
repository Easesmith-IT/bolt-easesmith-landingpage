import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="max-sm:mt-8 sm:mt-0 lg:mt-20 xl:mt-5 container mx-auto px-5">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-4xl xl:text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
      >
        About
      </motion.h3>

      {/* SECTION 1 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h4
            variants={itemVariants}
            className="text-base md:text-xl xl:text-3xl font-bold mt-5 bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
          >
            Project Overview
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="font-poppins text-sm md:text-lg lg:text-xl mt-5"
          >
            The design of this legal counseling firm’s website is meticulously
            developed to simplify the journey of individuals in search of
            reliable legal advice. Grounded in extensive user research, our team
            has gained deep insights into the unique needs and preferences of
            our clientele. This understanding has been pivotal in shaping a
            platform that is not only intuitive but also deeply aligned with the
            user’s experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="shrink-0"
        >
          <Image
            src="/portfolio/crc/overview-img.png"
            alt="overview-img"
            width={300}
            height={300}
            className="object-contain hidden lg:inline shrink-0"
          />
        </motion.div>
      </motion.div>

      {/* SECTION 2 */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="shrink-0"
        >
          <Image
            src="/portfolio/crc/problem-solving.png"
            alt="problem-solving"
            width={300}
            height={300}
            className="object-contain hidden lg:inline shrink-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h4
            variants={itemVariants}
            className="text-base md:text-xl xl:text-3xl font-bold mt-5 bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
          >
            Problem statement
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="font-poppins text-sm md:text-lg lg:text-xl mt-5"
          >
            “Despite the critical need for accessible legal guidance, many
            individuals find themselves overwhelmed by the complexity of
            navigating legal websites. The current digital landscape often
            presents a daunting array of information that can be difficult to
            decipher, leading to frustration and a sense of helplessness. This
            is compounded by a lack of intuitive design and user-centric
            features, which are essential for those seeking clear and reliable
            legal counsel. Our challenge is to design a platform that not only
            simplifies the search for legal advice but also instills confidence
            and clarity, transforming the way users interact with legal services
            online.”
          </motion.p>
        </motion.div>
      </motion.div>

      {/* SECTION 3 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h4
            variants={itemVariants}
            className="text-base md:text-xl xl:text-3xl font-bold mt-5 bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
          >
            Solutions
          </motion.h4>
          <motion.p
            variants={itemVariants}
            className="font-poppins text-sm md:text-lg lg:text-xl mt-5"
          >
            To effectively tackle the complexities and accessibility issues of
            traditional legal websites, our solution is a meticulously designed
            platform that prioritizes intuitive navigation and user-centric
            design. It features a rich repository of educational resources,
            personalized legal assistance, and robust accessibility options to
            cater to diverse user needs. Security measures are in place to
            ensure user privacy, while feedback mechanisms and mobile
            responsiveness are incorporated to enhance the overall user
            experience. Simplifying legal processes into understandable steps
            and fostering a supportive community space, we aim to empower users,
            making legal guidance a clear, secure, and supportive journey.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="shrink-0"
        >
          <Image
            src="/portfolio/crc/business-solution.png"
            alt="business-solution"
            width={300}
            height={300}
            className="object-contain hidden lg:inline shrink-0"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
