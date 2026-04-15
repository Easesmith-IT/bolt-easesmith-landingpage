import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex flex-col gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
      <Image
        src="/portfolio/chaperone/easesmith-logo.png"
        alt="Easesmith"
        width={240}
        height={120}
        className="object-contain"
      />

      <Image
        src="/portfolio/bhoomie-reality/bhoomie-reality.svg"
        alt="bhoomie-reality"
        width={180}
        height={120}
        className="object-contain  w-36 sm:w-50"
      />

      <Button className="bg-blue-600 hidden md:inline hover:bg-blue-700 text-white rounded-md px-5">
        Live Link →
      </Button>
    </header>
  );
}
