import { motion } from "motion/react";
import { Guarantee } from "./guarantee";
import guarantees from "@/data/guarantees.json";

export const Guarantees = () => {
  return (
    <div className="container mx-auto py-10 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="md:text-3xl text-(--color-para) max-w-180 mx-auto md:text-center font-bold px-6"
      >
        Here’s exactly what we do to{" "}
        <span className="text-(--color-easesmith) text-xl md:text-4xl underline font-black">
          Guarantee
        </span>{" "}
        better conversions so that you can{" "}
        <span className="text-(--color-easesmith) italic font-black text-2xl md:text-5xl">
          Make More Money
        </span>
      </motion.h2>
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
        className="flex flex-col md:flex-row gap-5 mt-10 px-6"
      >
        {guarantees.map((reason, index) => (
          <Guarantee
            key={index}
            src={reason.src}
            alt={`Reason${index + 1}`}
            title={reason.title}
            desc={reason.desc}
          />
        ))}
      </motion.div>
    </div>
  );
};
