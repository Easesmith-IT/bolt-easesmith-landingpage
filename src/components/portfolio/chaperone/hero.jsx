import Image from "next/image";
import Navbar from "./navbar";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Navbar />

      {/* LEFT PLANT */}
      <Image
        src="/portfolio/chaperone/plant-left.png"
        alt="plant"
        width={140}
        height={220}
        className="absolute left-0 top-[20%] object-contain"
      />

      {/* RIGHT PLANT */}
      <Image
        src="/portfolio/chaperone/plant-right.png"
        alt="plant"
        width={180}
        height={260}
        className="absolute right-0 bottom-[20%] object-contain"
      />

      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5">
          Live Link →
        </Button>
      </div>

      {/* CENTER CONTENT */}
      <div className="flex justify-center items-center mt-16 relative">
        {/* DESKTOP */}
        <div className="relative z-10 w-[300px] md:w-[450px]">
          <Image
            src="/portfolio/chaperone/desktop.png"
            alt="desktop"
            width={600}
            height={450}
            className="w-full h-auto"
          />
        </div>

        {/* TABLET */}
        <div className="absolute right-[20%] bottom-[-10px] md:right-[30%] md:bottom-[-20px] z-20 w-[180px] md:w-[250px]">
          <Image
            src="/portfolio/chaperone/tablet.png"
            alt="tablet"
            width={350}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* WATERMARK TEXT */}
      <div className="w-full flex justify-center">
        <h1 className="text-[60px] md:text-[140px] font-semibold text-white stroke-text tracking-wide">
          Website Design
        </h1>
      </div>
    </section>
  );
}
