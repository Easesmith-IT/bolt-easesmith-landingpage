import React from "react";

const Typography = () => {
  return (
    <div className="mx-auto container px-5 py-5 md:py-10 font-josefin_sans">
      <div>
        <h3 className="text-2xl md:text-4xl text-center">Typography</h3>
        <h2 className="text-5xl sm:text-6xl md:text-[110px] font-semibold text-center text-transparent [-webkit-text-stroke:1px_#d1d5db] opacity-60 select-none pointer-events-none">
          Typography
        </h2>
      </div>

      <div className="text-center">
        <h3 className="text-2xl md:text-3xl">Josefin Sans</h3>
        <div className="space-y-1 text-xs sm:text-base text-[#374151]">
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>1234567890!@#$%^&*()</p>
        </div>
      </div>

      <div className="border border-[#592EDB] flex p-4 max-w-170 mt-10 mx-auto justify-around">
        <div className="text-[#414141]">
          <p className="sm:text-xl md:text-2xl">Heading</p>
          <p className="sm:text-xl md:text-2xl">Regular</p>
          <p className="sm:text-xl md:text-2xl">Josefin</p>
        </div>
        <div className="text-[#414141]">
          <p className="font-medium sm:text-xl md:text-2xl">Heading</p>
          <p className="font-medium sm:text-xl md:text-2xl">Medium</p>
        </div>
        <div className="text-[#414141]">
          <p className="font-bold sm:text-xl md:text-2xl">Heading</p>
          <p className="font-bold sm:text-xl md:text-2xl">Bold</p>
        </div>
      </div>
    </div>
  );
};

export default Typography;
