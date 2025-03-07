import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100vh-8rem)] border border-black overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/watch.jpg"
        alt="Placeholder"
      />

      <div className="absolute bottom-8 left-[5vw] z-10 text-[#00335D] flex flex-col">
        <p className="uppercase tracking-wide pl-[1vw] -mb-2 text-[4vw] sm:text-[4vw] md:text-3xl lg:text-5xl font-semibold">
          COLD PRECISION
        </p>
        <h2 className="text-[15vw] sm:text-[15vw] md:text-[15vw] lg:text-[15rem] font-medium leading-none">
          KRUG
        </h2>
      </div>

      <div className="absolute bottom-8 mb-2 md:mb-4 lg:mb-6 right-[5vw] z-10 flex text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw]">
        <p>Coming 12.05.2025</p>
      </div>
    </div>
  );
}
