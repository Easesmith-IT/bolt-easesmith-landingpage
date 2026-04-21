import { H2 } from "@/components/shared/typography";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Typography = () => {
  return (
    <div className="container mx-auto my-10 px-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <H2 className="font-extrabold text-xl md:text-[40px] mt-6">
          3. Typography
        </H2>
      </motion.div>

      <div className="md:px-5 font-poppins mt-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-base md:text-2xl"
        >
          Font Style
        </motion.p>

        {/* Container with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 md:gap-50 bg-[#D9D9D91A] p-3 mt-5"
        >
          {/* Poppins */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.p variants={itemVariants} className="text-sm md:text-xl">
              Poppins
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm md:text-xl">
              Lorem ipsum dolor sit amet.
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm md:text-xl">
              Lorem ipsum dolor sit amet.
            </motion.p>
          </motion.div>

          {/* Inter */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.p variants={itemVariants} className="text-sm md:text-xl">
              Inter
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm md:text-xl">
              Lorem ipsum dolor sit amet.
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm md:text-xl">
              Lorem ipsum dolor sit amet.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Typography;
