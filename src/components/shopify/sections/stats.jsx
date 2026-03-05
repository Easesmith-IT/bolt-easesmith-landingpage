import {motion} from "motion/react"

export const Stats = () => {
  return (
    <div className="bg-(--color-easesmith) px-5 py-12">
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
        className="max-w-4xl mx-auto flex justify-between items-center gap-5"
      >
        <div className="flex flex-col items-center">
          <h4 className="text-3xl md:text-5xl font-bold text-(--color-para)">
            53+
          </h4>
          <p className="text-(--color-para) font-normal text-sm md:text-lg">
            F&B Brands
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-3xl md:text-5xl font-bold text-(--color-para)">
            ₹96.2CR
          </h4>
          <p className="text-(--color-para) font-normal text-sm md:text-lg">
            Revenue generated
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-3xl md:text-5xl font-bold text-(--color-para)">
            3.6%
          </h4>
          <p className="text-(--color-para) font-normal text-sm md:text-lg">
            Average CVR
          </p>
        </div>
      </motion.div>
    </div>
  );
};
