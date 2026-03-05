import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const ShopifyHeader = () => {
  return (
    <header className="md:sticky top-0 bg-white z-10">
      <div className="flex justify-between items-center gap-5 px-4 py-5">
        <Link href="/">
          <Image
            src="/images/logo-1.png"
            alt="Easesmith"
            width={64}
            height={56}
            className="h-14 w-16"
          />
        </Link>
        <Button
          asChild
          className="px-7 py-4.5 md:px-16 md:py-5.5 text-xs md:text-base font-semibold rounded-sm border-2 border-transparent hover:border-(--color-easesmith) hover:bg-white hover:text-(--color-easesmith)"
        >
          <Link
            target="_blank"
            href="https://calendly.com/mavyakunal/business-call"
          >
            Book A Call
          </Link>
        </Button>
      </div>
    </header>
  );
};
