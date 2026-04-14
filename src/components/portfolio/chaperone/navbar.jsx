import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
      <Image
        src="/portfolio/chaperone/chaperone-logo.png"
        alt="Chaperone Logo"
        width={240}
        height={320}
        className="object-contain"
      />

      <Image
        src="/portfolio/chaperone/easesmith-logo.png"
        alt="Chaperone Logo"
        width={240}
        height={320}
        className="object-contain -mr-10"
      />
    </header>
  );
}
