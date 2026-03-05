"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

export const Results = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.05,
      }}
    >
      <div className="space-y-6">
        <Image
          src="/images/results/result1.png"
          alt="Website1"
          width={500}
          height={400}
          className="bg-[#9FE6B1] rounded-3xl px-5 py-6 w-full"
        />
        {showMore && (
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.05,
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Image
              src="/images/results/result2.png"
              alt="Website1"
              width={500}
              height={400}
              className="bg-[#9FE6B1] rounded-3xl px-5 py-6 w-full"
            />
            <Image
              src="/images/results/result3.png"
              alt="Website1"
              width={500}
              height={400}
              className="bg-[#9FE6B1] rounded-3xl px-5 py-6 w-full"
            />
          </motion.div>
        )}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Button
          onClick={() => setShowMore(!showMore)}
          className="px-14 md:px-8 py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:bg-(--color-para) hover:border-(--color-easesmith) hover:text-(--color-easesmith)"
        >
          {showMore ? " Show less" : " Show more"}
        </Button>
      </div>
    </motion.div>
  );
};
