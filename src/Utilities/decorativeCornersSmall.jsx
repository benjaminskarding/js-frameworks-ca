import React from "react";

const DecorativeCornersSmall = () => {
  return (
    <>
      <div className="absolute top-2 left-2 w-[5px] h-[5px] bg-black transform rotate-90 transition-colors duration-500 group-hover:bg-white"></div>
      <div className="absolute top-2 right-2 w-[5px] h-[5px] bg-black transform rotate-180 transition-colors duration-500 group-hover:bg-white"></div>
      <div className="absolute bottom-2 left-2 w-[5px] h-[5px] bg-black transform rotate-0 transition-colors duration-500 group-hover:bg-white"></div>
      <div className="absolute bottom-2 right-2 w-[5px] h-[5px] bg-black transform -rotate-90 transition-colors duration-500 group-hover:bg-white"></div>
    </>
  );
};

export default DecorativeCornersSmall;
