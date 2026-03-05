import { cn } from "@/lib/utils";
import Image from "next/image";

export const Reason = ({ src, title, desc, alt,index }) => {
  return (
    <div className={cn("flex-1 basis-0", index === 4 && "col-span-2")}>
      <Image
        src={src}
        alt={alt}
        width={150}
        height={150}
        className="size-24 md:size-36 mx-auto md:mx-0"
      />
      <h3 className="font-bold text-base md:text-lg lg:text-2xl text-(--color-para) text-center md:text-left mt-4">
        {title}
      </h3>
      <p className="font-normal text-sm lg:text-base text-center md:text-left text-(--color-para)">
        {desc}
      </p>
    </div>
  );
};
