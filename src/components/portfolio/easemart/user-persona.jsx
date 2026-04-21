import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const UserPersona = () => {
  return (
    <div className="relative">
      {/* BACKGROUND */}
      <motion.div
        className="absolute left-0 top-0 -z-1"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/portfolio/easemart/persona-bg.svg"
          alt="persona-bg"
          width={310}
          height={350}
          className="w-40 sm:w-80"
        />
      </motion.div>

      <div className="py-5 md:py-10 px-5 container mx-auto font-aclonica">
        {/* HEADER */}
        <div className="flex gap-1 items-center">
          <motion.div
            className="size-10 sm:size-18 md:size-24 border-2 md:border-4 border-white text-white rounded-full flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-extrabold font-open_sans text-xl sm:text-3xl md:text-5xl">
              3
            </h2>
          </motion.div>

          <motion.h1
            className="font-bold text-xl sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white">User</span> Persona
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/portfolio/easemart/user.svg"
                alt="user"
                width={310}
                height={350}
              />
            </motion.div>

            {/* CARD */}
            <motion.div
              className="bg-[#85C125] p-4 -mt-10 relative z-1 sm:w-80"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl sm:text-2xl text-white text-center">
                Priya Singh
              </h3>

              <div className="font-epilogue text-xs sm:text-base text-white mt-2">
                <p>Demographics:</p>
                <ul className="list-disc ml-4 mt-1">
                  {[
                    "Age: 32",
                    "Location: Bengaluru, India",
                    "Occupation: Software Engineer",
                    "Education: Master’s in Computer Science",
                    "Family Status: Married with one child",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="font-epilogue text-xs sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                title: "Behaviors:",
                content: [
                  "Priya shops for groceries online at least twice a week.",
                  "She seeks quick delivery options due to her hectic work-life balance.",
                  "Prefers a user-friendly interface with easy navigation.",
                  "Looks for apps that offer real-time updates and transparency in pricing.",
                ],
              },
              {
                title: "Needs and Goals:",
                content: [
                  "Needs a reliable service for spontaneous shopping.",
                  "Wants to minimize time spent shopping.",
                  "Prefers healthy and organic food options.",
                  "Seeks personalized recommendations.",
                ],
                box: true,
              },
              {
                title: "Pain Points:",
                content: [
                  "Frustrated with long delivery times.",
                  "Dislikes out-of-stock issues.",
                  "Annoyed by complicated checkout.",
                ],
                box: true,
              },
              {
                title: "Technology Usage:",
                content: [
                  "Comfortable with Android & iOS.",
                  "Uses mobile payments.",
                  "Engages with social media-driven apps.",
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                className={section.box ? "bg-[#e8e7e7] mt-4 p-2" : "mt-4"}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-[#5D871A] font-medium">{section.title}</h4>
                <ul className="list-disc ml-4 mt-1">
                  {section.content.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserPersona;
