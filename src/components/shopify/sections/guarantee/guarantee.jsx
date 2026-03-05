import Image from "next/image";

export const Guarantee = ({ src, title, desc, alt }) => {
  return (
    <>
      <div className="hidden md:block">
        <Image src={src} alt={alt} width={50} height={50} />
        <h3 className="font-bold text-base text-(--color-para) mt-4">
          {title}
        </h3>
        <p className="font-normal text-(--color-para)">{desc}</p>
      </div>
      <div className="flex gap-5 items-start md:hidden">
        <div className="size-12 shrink-0">
          <Image
            src={src}
            alt={alt}
            width={60}
            height={60}
            className="w-full"
          />
        </div>
        <div>
          <h3 className="font-bold text-base text-(--color-para)">{title}</h3>
          <p className="font-normal text-(--color-para)">{desc}</p>
        </div>
      </div>
    </>
  );
};
