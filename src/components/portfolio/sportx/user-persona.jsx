import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const UserPersona = () => {
  return (
    <div className="mt-10 font-outfit gap-4 sm:gap-0 py-5 md:py-10 px-5 container mx-auto grid grid-cols-2">
      {/* LEFT SIDE */}
      <div>
        <div className="relative w-[35%] sm:w-[20%] ml-10 sm:ml-0 sm:w-[25%] h-25 md:h-50 flex items-center justify-center">
          {/* NUMBER */}
          <motion.p
            className="absolute text-[100px] md:text-[220px] font-extrabold text-[#FFF3B0] leading-none select-none"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            03
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
                User Persona
              </span>
            </h2>
          </motion.div>
        </div>

        {/* USER IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/portfolio/sportx/user.png"
            alt="user"
            width={310}
            height={200}
            className="w-[130px] sm:w-[150px] md:w-[310px]"
          />
        </motion.div>

        {/* PROFILE CARD */}
        <motion.div
          className="max-w-[500px] bg-[#FFFFFF] shadow-2xl p-3 -mt-10 sm:-mt-20 md:-mt-28 relative z-2"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <motion.h3
            className="text-lg sm:text-2xl md:text-5xl font-bold text-end -mt-7 sm:-mt-10 text-[#FFD700]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Arjun
          </motion.h3>

          <h4 className="font-semibold text-[7px] sm:text-[10px] md:text-lg">
            Demographics:
          </h4>

          {[
            "- Age: 29",
            "- Location: Bengaluru, India",
            "- Occupation: Software Engineer",
            "- Education: Bachelor's in Computer Science",
          ].map((item, i) => (
            <motion.p
              key={i}
              className="font-semibold text-[7px] sm:text-[10px] md:text-lg"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="shadow-md p-4 space-y-5 text-[7px] sm:text-[10px] md:text-base"
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
          {
            title: "Psychographics:",
            content: [
              "- Interests: Cricket, technology, social media",
              "- Personality: Analytical, detail-oriented, social",
            ],
          },
          {
            title: "Behavioral Traits:",
            content: [
              "- Technology Use: Highly proficient, early adopter of new apps",
              "- Cricket Engagement: Passionate fan, follows multiple leagues, plays amateur cricket on weekends",
              "- App Usage: Prefers apps with customizable content, minimal ads, and user-friendly interfaces",
            ],
          },
          {
            title: "Goals:",
            content: [
              "- Primary Goal: To stay updated with the latest cricket scores and news in real-time",
              "- Secondary Goal: To connect with a community of like-minded cricket fans",
            ],
          },
          {
            title: "Challenges:",
            content: [
              "- Information Overload: Struggles to find relevant content amidst clutter",
              "- Time Constraints: Needs quick, concise updates due to a busy schedule",
            ],
          },
          {
            title: "What Arjun Values:",
            content: [
              "- Personalization: Tailored content",
              "- Accuracy: Real-time reliable updates",
              "- Usability: Clean and intuitive UI",
            ],
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <div>{section.title}</div>
            {section.content.map((text, j) => (
              <p key={j}>{text}</p>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UserPersona;
