import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full bg-white md:py-6">
      <div className="mx-auto container px-6 flex-col flex items-center">
        <div className="sm:-ml-10 md:ml-0 hidden rounded-md bg-[#D53D3D] px-4 py-1 md:text-lg font-bold text-white mb-4">
          We only work with F&B brands doing ₹10L in MRR
        </div>
        <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="md:text-2xl font-bold leading-5">
              <span className="text-(--color-easesmith) underline">
                INCREASE
              </span>{" "}
              <span className="text-(--color-para)">YOUR REVENUE</span>
            </h1>
            <br />
            <h2 className="text-(--color-easesmith) font-black text-4xl md:text-5xl leading-2 md:leading-8">
              BY UPTO 332%
            </h2>

            <h2 className="mt-4 text-xl md:text-3xl font-bold">
              <span className="text-(--color-para)">WITHOUT</span>{" "}
              <span className="text-(--color-easesmith) underline">
                INCREASING AD SPENDS
              </span>
              <br /> WITHIN 30 DAYS
            </h2>

            <p className="mt-6 text-(--color-para) text-sm md:text-lg max-w-xl font-normal leading-snug">
              We make conversion optimized websites that turn your
              <span className="font-black italic uppercase"> visitors </span>
              into
              <span className="font-extrabold italic uppercase">
                {" "}
                paying customers
              </span>
              . Fully done-for-you. No extra photo-shoots or rebranding needed.
            </p>

            <ul className="mt-5">
              {[
                "Increased Conversion Rate",
                "Decreased Customer Acquisition Costs",
                "Increased Average Order Value",
                "Increased Customer LTV",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-(--color-para) text-sm md:text-lg leading-tight"
                >
                  {/* <Check className="h-5 w-5 text-green-500" /> */}✅{item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button className="px-8 py-5.5 md:text-base font-semibold rounded-sm border-2 border-transparent hover:bg-(--color-para) hover:text-(--color-easesmith)">
                <Link
                  target="_blank"
                  href="https://calendly.com/mavyakunal/business-call"
                  >
                  Increase Your Conversions Today
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/hero-img.png"
              alt="Before and After Website"
              width={500}
              height={700}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* HEADER CTA */}
      {/* <div className="absolute top-6 right-6">
        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-xl">
          Book A Call
        </Button>
      </div> */}
    </section>
  );
};
