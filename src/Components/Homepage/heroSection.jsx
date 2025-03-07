import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[calc(100vh-8rem)] border border-black overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/watch.jpg"
        alt="Placeholder"
      />

      <div className="absolute bottom-8 left-8 z-10 text-[#00335D] flex flex-col">
        <p className="uppercase tracking-wide pl-[0.7vw] mb-2 sm:-mb-7 sm:text-[1.5em] font-semibold">
          COLD PRECISION
        </p>
        <h2 className="text-[9vw] font-medium leading-none">KRUG</h2>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex space-x-4 text-[2vw]">
        <p>Releasing 12.05.2025</p>
      </div>
    </div>
  );
}
