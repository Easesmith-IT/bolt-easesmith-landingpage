import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StyleGuide = () => {
  return (
    <div className="py-5 md:py-10 container mx-auto px-5">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl md:text-4xl xl:text-5xl font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
      >
        Style Guide
      </motion.h3>

      <div className="bg-[#D9D9D91A] p-4 py-8 mt-5 md:mt-10">
        {/* Typography Title */}
        <motion.h4
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-base md:text-xl xl:text-3xl max-w-5xl mx-auto font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
        >
          Typography
        </motion.h4>

        {/* Typography Content */}
        <div className="flex max-w-5xl mx-auto gap-10 mt-9 font-poppins">
          {/* LEFT (Font Preview) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-base md:text-xl xl:text-3xl">Font- Poppins</h3>
            <p className="text-5xl xl:text-7xl mt-5 bg-[linear-gradient(177.41deg,_#000000_9.14%,_#949494_60.32%,_#FFFFFF_97.38%)] bg-clip-text text-transparent">
              Aa
            </p>
          </motion.div>

          {/* RIGHT (Font Styles) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {["Regular", "Medium", "Bold"].map((type, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p
                  className={`${type === "Medium" ? "font-medium" : type === "Bold" ? "font-bold" : ""} text-[10px] sm:text-sm md:text-base`}
                >
                  {type}
                </p>
                <p
                  className={`${type === "Medium" ? "font-medium" : type === "Bold" ? "font-bold" : ""} text-[10px] sm:text-sm md:text-base`}
                >
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Colors Title */}
        <motion.h4
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-base md:text-xl xl:text-3xl max-w-5xl mx-auto my-8 md:my-16 font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent"
        >
          Colors
        </motion.h4>

        <div className="flex justify-between gap-5 sm:gap-10 max-w-5xl mx-auto">
          {/* LEFT (Main Colors) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-xl xl:text-2xl text-center font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
              Main colors
            </h4>

            <div className="flex gap-4 sm:gap-8 mt-6">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-23 xs:w-30 sm:w-70 bg-[#90CAF9]"
              ></motion.div>

              <div className="space-y-4 sm:space-y-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="size-10 sm:size-20 lg:size-28 bg-[#005AFF]"
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="size-10 sm:size-20 lg:size-28 bg-white border"
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT (Text Colors) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-xl xl:text-2xl text-center font-semibold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
              Text colors
            </h4>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-6">
              {["#000000", "#AAAAA9", "#565656", "#FFFFFF"].map((color, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="size-10 sm:size-20 lg:size-28"
                  style={{
                    backgroundColor: color,
                    border:
                      color === "#FFFFFF" || color === "#565656"
                        ? "1px solid #ccc"
                        : "",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
