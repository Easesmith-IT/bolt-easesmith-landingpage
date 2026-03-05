import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Results } from "./results";
import { Websites } from "./websites";
import { motion } from "motion/react";

export const WebsitesAndResults = () => {
  return (
    <div className="bg-(--color-para) py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center"
      >
        <div className="w-[10%] md:w-[35%]"></div>
        <div className="bg-[#F9FDD5] rounded-full px-10 py-4 w-auto inline-flex gap-1.5 font-black text-2xl lg:text-4xl">
          <span className="text-(--color-easesmith)">Real</span>{" "}
          <span className="text-(--color-para)">Work</span>
        </div>
        <div className="bg-[#F9FDD5] h-0.5 w-full flex-1"></div>
      </motion.div>

      <p className="text-white font-bold text-2xl text-center my-5">from</p>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center"
      >
        <div className="bg-[#F9FDD5] h-0.5 w-full flex-1"></div>
        <div className="bg-[#F9FDD5] rounded-full px-10 py-4 w-auto inline-flex gap-1.5 font-black text-2xl lg:text-4xl">
          <span className="text-(--color-easesmith)">Real</span>{" "}
          <span className="text-(--color-para)">clients</span>
        </div>
        <div className="w-[10%] md:w-[35%]"></div>
      </motion.div>

      <Tabs
        defaultValue="websites"
        className="w-full mt-20 container mx-auto gap-0 px-5"
      >
        <TabsList className="mx-auto bg-(--color-para) h-auto p-0">
          <TabsTrigger
            value="websites"
            className="px-10 py-4 lg:px-20 lg:py-8 data-[state=active]:bg-(--color-easesmith) data-[state=inactive]:bg-(--color-para) text-base lg:text-2xl font-bold data-[state=inactive]:text-white rounded-b-none"
          >
            Websites
          </TabsTrigger>
          {/* <TabsTrigger
            value="results"
            className="px-10 py-4 lg:px-20 lg:py-8 data-[state=active]:bg-(--color-easesmith) data-[state=inactive]:bg-(--color-para) text-base lg:text-2xl font-bold data-[state=inactive]:text-white rounded-b-none"
          >
            Results
          </TabsTrigger> */}
        </TabsList>
        <Separator className="bg-(--color-easesmith) mb-5 data-[orientation=horizontal]:h-1.5" />
        <TabsContent className="w-full" value="websites">
          <Websites />
        </TabsContent>
        <TabsContent className="w-full" value="results">
          <Results />
        </TabsContent>
      </Tabs>
    </div>
  );
};
