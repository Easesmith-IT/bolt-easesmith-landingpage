import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full flex flex-col-reverse gap-5 items-center sm:flex-row sm:items-center sm:justify-between px-6 md:px-10 py-6">
      <h1 class="text-2xl md:text-4xl font-bold bg-[linear-gradient(177.41deg,#000000_9.14%,#949494_60.32%,#FFFFFF_97.38%)] bg-clip-text text-transparent">
        Case study
      </h1>

      <Image
        src="/portfolio/chaperone/easesmith-logo.png"
        alt="Easesmith Logo"
        width={240}
        height={320}
        className="object-contain -mr-10 w-[180px] md:w-[240px]"
      />
    </header>
  );
}

export default Navbar