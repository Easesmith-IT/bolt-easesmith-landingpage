import Image from "next/image";
import { motion } from "motion/react";

export const FreeBonuses = () => {
  return (
    <div className="bg-(--color-easesmith) px-5 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.05,
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-(--color-para) uppercase font-black text-3xl md:text-6xl text-center">
            Free bonuses
          </h2>
          <Image
            src="/images/heading-line.png"
            alt="heading-line"
            width={500}
            height={10}
            className="mx-auto w-60 md:w-2xl"
          />

          <div className="flex justify-center items-center mt-5 md:mt-10">
            <div className="bg-[#F9FDD5] text-(--color-easesmith) rounded-full px-10 py-4 w-auto mx-auto inline-flex justify-center gap-1.5 font-black text-xl md:text-4xl">
              WORTH ₹1,48,600
            </div>
          </div>
        </motion.div>

        <div className="flex justify-between items-center gap-2 md:gap-5 mt-10">
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.05,
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="text-xs md:text-3xl font-bold text-(--color-para)">
              ₹52,000 Value
            </h4>
            <p className="text-(--color-para) font-normal text-xs md:text-lg text-center mt-3">
              5-Minute Plug-n-Play CRO Boosters
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.05,
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="text-xs md:text-3xl font-bold text-(--color-para)">
              ₹51,200 Value
            </h4>
            <p className="text-(--color-para) font-normal text-xs md:text-lg text-center mt-3">
              Instant High-Converting Copy Generator
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.05,
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="text-xs md:text-3xl font-bold text-(--color-para)">
              ₹45,400 Value
            </h4>
            <p className="text-(--color-para) font-normal text-xs md:text-lg text-center mt-3">
              Ready-to-Launch Paid Ads Strategy for High ROAS
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
