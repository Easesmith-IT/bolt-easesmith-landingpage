import { Button } from "@/components/ui/button";
import { Reason } from "./reason";
import { motion } from "motion/react";
import reasons from "@/data/reasons.json";
import Link from "next/link";

export const FiveReasons = () => {
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
          delay: 0.05,
        }}
        viewport={{ once: true }}
        className="text-xl block lg:hidden lg:text-3xl text-(--color-para) text-center font-bold px-5"
      >
        These are the{" "}
        <span className="text-(--color-easesmith) underline font-black text-2xl md:text-4xl lg:text-5xl">
          5 Reasons
        </span>{" "}
        why F&B brands that already make 10L+ a month still can’t turn their{" "}
        <span className="text-(--color-easesmith) italic font-black">
          visitors into paying customers
        </span>
      </motion.h2>
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
          delay: 0.05,
        }}
        viewport={{ once: true }}
        className="text-xl hidden lg:block lg:text-3xl text-(--color-para) text-center font-bold px-5"
      >
        These are the{" "}
        <span className="text-(--color-easesmith) underline font-black text-2xl md:text-4xl lg:text-5xl">
          5 Reasons
        </span>{" "}
        <br />
        why F&B brands that already make 10L+ a month <br /> still can’t turn
        their{" "}
        <span className="text-(--color-easesmith) italic font-black">
          visitors into paying customers
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
        className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap gap-5 mt-8 px-5"
      >
        {reasons.map((reason, index) => (
          <Reason
            key={index}
            src={reason.src}
            alt={`Reason${index + 1}`}
            title={reason.title}
            desc={reason.desc}
            index={index}
          />
        ))}
      </motion.div>

      <div className="flex justify-center items-center mt-6">
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
        >
          <Button className="px-8 py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:bg-(--color-para) hover:text-(--color-easesmith)">
            <Link
              target="_blank"
              href="https://calendly.com/mavyakunal/business-call"
              >
              Increase Your Conversions Today
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
